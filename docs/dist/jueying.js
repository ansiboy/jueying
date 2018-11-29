

/*!
 * JUEYING v1.0.0
 * https://github.com/ansiboy/jueying
 *
 * 可视化页面设计器
 * 
 * 作者: 寒烟
 * 
 * 个人博客：   http://www.cnblogs.com/ansiboy/
 * GITHUB:     http://github.com/ansiboy
 * QQ 讨论组：  119038574
 * 
 * Copyright (c) 2016-2018, mai.shu <ansiboy@163.com>
 * Licensed under the MIT License.
 *
 */

(function(factory) { 
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') { 
        // [1] CommonJS/Node.js 
        var target = module['exports'] || exports;
        var result = factory(target, require);
        Object.assign(target,result);
    } else if (typeof define === 'function' && define['amd']) {
        define(factory); 
    } else { 
        factory();
    } 
})(function() {
/*! 
 * jquery.event.drag - v 2.2
 * Copyright (c) 2010 Three Dub Media - http://threedubmedia.com
 * Open Source MIT License - http://threedubmedia.com/code/license
 */
// Created: 2008-06-04 
// Updated: 2012-05-21
// REQUIRES: jquery 1.7.x

;(function( $ ){

// add the jquery instance method
$.fn.drag = function( str, arg, opts ){
	// figure out the event type
	var type = typeof str == "string" ? str : "",
	// figure out the event handler...
	fn = $.isFunction( str ) ? str : $.isFunction( arg ) ? arg : null;
	// fix the event type
	if ( type.indexOf("drag") !== 0 ) 
		type = "drag"+ type;
	// were options passed
	opts = ( str == fn ? arg : opts ) || {};
	// trigger or bind event handler
	return fn ? this.bind( type, opts, fn ) : this.trigger( type );
};

// local refs (increase compression)
var $event = $.event, 
$special = $event.special,
// configure the drag special event 
drag = $special.drag = {
	
	// these are the default settings
	defaults: {
		which: 1, // mouse button pressed to start drag sequence
		distance: 0, // distance dragged before dragstart
		not: ':input', // selector to suppress dragging on target elements
		handle: null, // selector to match handle target elements
		relative: false, // true to use "position", false to use "offset"
		drop: true, // false to suppress drop events, true or selector to allow
		click: false // false to suppress click events after dragend (no proxy)
	},
	
	// the key name for stored drag data
	datakey: "dragdata",
	
	// prevent bubbling for better performance
	noBubble: true,
	
	// count bound related events
	add: function( obj ){ 
		// read the interaction data
		var data = $.data( this, drag.datakey ),
		// read any passed options 
		opts = obj.data || {};
		// count another realted event
		data.related += 1;
		// extend data options bound with this event
		// don't iterate "opts" in case it is a node 
		$.each( drag.defaults, function( key, def ){
			if ( opts[ key ] !== undefined )
				data[ key ] = opts[ key ];
		});
	},
	
	// forget unbound related events
	remove: function(){
		$.data( this, drag.datakey ).related -= 1;
	},
	
	// configure interaction, capture settings
	setup: function(){
		// check for related events
		if ( $.data( this, drag.datakey ) ) 
			return;
		// initialize the drag data with copied defaults
		var data = $.extend({ related:0 }, drag.defaults );
		// store the interaction data
		$.data( this, drag.datakey, data );
		// bind the mousedown event, which starts drag interactions
		$event.add( this, "touchstart mousedown", drag.init, data );
		// prevent image dragging in IE...
		if ( this.attachEvent ) 
			this.attachEvent("ondragstart", drag.dontstart ); 
	},
	
	// destroy configured interaction
	teardown: function(){
		var data = $.data( this, drag.datakey ) || {};
		// check for related events
		if ( data.related ) 
			return;
		// remove the stored data
		$.removeData( this, drag.datakey );
		// remove the mousedown event
		$event.remove( this, "touchstart mousedown", drag.init );
		// enable text selection
		drag.textselect( true ); 
		// un-prevent image dragging in IE...
		if ( this.detachEvent ) 
			this.detachEvent("ondragstart", drag.dontstart ); 
	},
		
	// initialize the interaction
	init: function( event ){ 
		// sorry, only one touch at a time
		if ( drag.touched ) 
			return;
		// the drag/drop interaction data
		var dd = event.data, results;
		// check the which directive
		if ( event.which != 0 && dd.which > 0 && event.which != dd.which ) 
			return; 
		// check for suppressed selector
		if ( $( event.target ).is( dd.not ) ) 
			return;
		// check for handle selector
		if ( dd.handle && !$( event.target ).closest( dd.handle, event.currentTarget ).length ) 
			return;

		drag.touched = event.type == 'touchstart' ? this : null;
		dd.propagates = 1;
		dd.mousedown = this;
		dd.interactions = [ drag.interaction( this, dd ) ];
		dd.target = event.target;
		dd.pageX = event.pageX;
		dd.pageY = event.pageY;
		dd.dragging = null;
		// handle draginit event... 
		results = drag.hijack( event, "draginit", dd );
		// early cancel
		if ( !dd.propagates )
			return;
		// flatten the result set
		results = drag.flatten( results );
		// insert new interaction elements
		if ( results && results.length ){
			dd.interactions = [];
			$.each( results, function(){
				dd.interactions.push( drag.interaction( this, dd ) );
			});
		}
		// remember how many interactions are propagating
		dd.propagates = dd.interactions.length;
		// locate and init the drop targets
		if ( dd.drop !== false && $special.drop ) 
			$special.drop.handler( event, dd );
		// disable text selection
		drag.textselect( false ); 
		// bind additional events...
		if ( drag.touched )
			$event.add( drag.touched, "touchmove touchend", drag.handler, dd );
		else 
			$event.add( document, "mousemove mouseup", drag.handler, dd );
		// helps prevent text selection or scrolling
		if ( !drag.touched || dd.live )
			return false;
	},	
	
	// returns an interaction object
	interaction: function( elem, dd ){
		var offset = $( elem )[ dd.relative ? "position" : "offset" ]() || { top:0, left:0 };
		return {
			drag: elem, 
			callback: new drag.callback(), 
			droppable: [],
			offset: offset
		};
	},
	
	// handle drag-releatd DOM events
	handler: function( event ){ 
		// read the data before hijacking anything
		var dd = event.data;	
		// handle various events
		switch ( event.type ){
			// mousemove, check distance, start dragging
			case !dd.dragging && 'touchmove': 
				event.preventDefault();
			case !dd.dragging && 'mousemove':
				//  drag tolerance, x� + y� = distance�
				if ( Math.pow(  event.pageX-dd.pageX, 2 ) + Math.pow(  event.pageY-dd.pageY, 2 ) < Math.pow( dd.distance, 2 ) ) 
					break; // distance tolerance not reached
				event.target = dd.target; // force target from "mousedown" event (fix distance issue)
				drag.hijack( event, "dragstart", dd ); // trigger "dragstart"
				if ( dd.propagates ) // "dragstart" not rejected
					dd.dragging = true; // activate interaction
			// mousemove, dragging
			case 'touchmove':
				event.preventDefault();
			case 'mousemove':
				if ( dd.dragging ){
					// trigger "drag"		
					drag.hijack( event, "drag", dd );
					if ( dd.propagates ){
						// manage drop events
						if ( dd.drop !== false && $special.drop )
							$special.drop.handler( event, dd ); // "dropstart", "dropend"							
						break; // "drag" not rejected, stop		
					}
					event.type = "mouseup"; // helps "drop" handler behave
				}
			// mouseup, stop dragging
			case 'touchend': 
			case 'mouseup': 
			default:
				if ( drag.touched )
					$event.remove( drag.touched, "touchmove touchend", drag.handler ); // remove touch events
				else 
					$event.remove( document, "mousemove mouseup", drag.handler ); // remove page events	
				if ( dd.dragging ){
					if ( dd.drop !== false && $special.drop )
						$special.drop.handler( event, dd ); // "drop"
					drag.hijack( event, "dragend", dd ); // trigger "dragend"	
				}
				drag.textselect( true ); // enable text selection
				// if suppressing click events...
				if ( dd.click === false && dd.dragging )
					$.data( dd.mousedown, "suppress.click", new Date().getTime() + 5 );
				dd.dragging = drag.touched = false; // deactivate element	
				break;
		}
	},
		
	// re-use event object for custom events
	hijack: function( event, type, dd, x, elem ){
		// not configured
		if ( !dd ) 
			return;
		// remember the original event and type
		var orig = { event:event.originalEvent, type:event.type },
		// is the event drag related or drog related?
		mode = type.indexOf("drop") ? "drag" : "drop",
		// iteration vars
		result, i = x || 0, ia, $elems, callback,
		len = !isNaN( x ) ? x : dd.interactions.length;
		// modify the event type
		event.type = type;
		// remove the original event
		event.originalEvent = null;
		// initialize the results
		dd.results = [];
		// handle each interacted element
		do if ( ia = dd.interactions[ i ] ){
			// validate the interaction
			if ( type !== "dragend" && ia.cancelled )
				continue;
			// set the dragdrop properties on the event object
			callback = drag.properties( event, dd, ia );
			// prepare for more results
			ia.results = [];
			// handle each element
			$( elem || ia[ mode ] || dd.droppable ).each(function( p, subject ){
				// identify drag or drop targets individually
				callback.target = subject;
				// force propagtion of the custom event
				event.isPropagationStopped = function(){ return false; };
				// handle the event	
				result = subject ? $event.dispatch.call( subject, event, callback ) : null;
				// stop the drag interaction for this element
				if ( result === false ){
					if ( mode == "drag" ){
						ia.cancelled = true;
						dd.propagates -= 1;
					}
					if ( type == "drop" ){
						ia[ mode ][p] = null;
					}
				}
				// assign any dropinit elements
				else if ( type == "dropinit" )
					ia.droppable.push( drag.element( result ) || subject );
				// accept a returned proxy element 
				if ( type == "dragstart" )
					ia.proxy = $( drag.element( result ) || ia.drag )[0];
				// remember this result	
				ia.results.push( result );
				// forget the event result, for recycling
				delete event.result;
				// break on cancelled handler
				if ( type !== "dropinit" )
					return result;
			});	
			// flatten the results	
			dd.results[ i ] = drag.flatten( ia.results );	
			// accept a set of valid drop targets
			if ( type == "dropinit" )
				ia.droppable = drag.flatten( ia.droppable );
			// locate drop targets
			if ( type == "dragstart" && !ia.cancelled )
				callback.update(); 
		}
		while ( ++i < len )
		// restore the original event & type
		event.type = orig.type;
		event.originalEvent = orig.event;
		// return all handler results
		return drag.flatten( dd.results );
	},
		
	// extend the callback object with drag/drop properties...
	properties: function( event, dd, ia ){		
		var obj = ia.callback;
		// elements
		obj.drag = ia.drag;
		obj.proxy = ia.proxy || ia.drag;
		// starting mouse position
		obj.startX = dd.pageX;
		obj.startY = dd.pageY;
		// current distance dragged
		obj.deltaX = event.pageX - dd.pageX;
		obj.deltaY = event.pageY - dd.pageY;
		// original element position
		obj.originalX = ia.offset.left;
		obj.originalY = ia.offset.top;
		// adjusted element position
		obj.offsetX = obj.originalX + obj.deltaX; 
		obj.offsetY = obj.originalY + obj.deltaY;
		// assign the drop targets information
		obj.drop = drag.flatten( ( ia.drop || [] ).slice() );
		obj.available = drag.flatten( ( ia.droppable || [] ).slice() );
		return obj;	
	},
	
	// determine is the argument is an element or jquery instance
	element: function( arg ){
		if ( arg && ( arg.jquery || arg.nodeType == 1 ) )
			return arg;
	},
	
	// flatten nested jquery objects and arrays into a single dimension array
	flatten: function( arr ){
		return $.map( arr, function( member ){
			return member && member.jquery ? $.makeArray( member ) : 
				member && member.length ? drag.flatten( member ) : member;
		});
	},
	
	// toggles text selection attributes ON (true) or OFF (false)
	textselect: function( bool ){ 
		$( document )[ bool ? "unbind" : "bind" ]("selectstart", drag.dontstart )
			.css("MozUserSelect", bool ? "" : "none" );
		// .attr("unselectable", bool ? "off" : "on" )
		document.unselectable = bool ? "off" : "on"; 
	},
	
	// suppress "selectstart" and "ondragstart" events
	dontstart: function(){ 
		return false; 
	},
	
	// a callback instance contructor
	callback: function(){}
	
};

// callback methods
drag.callback.prototype = {
	update: function(){
		if ( $special.drop && this.available.length )
			$.each( this.available, function( i ){
				$special.drop.locate( this, i );
			});
	}
};

// patch $.event.$dispatch to allow suppressing clicks
var $dispatch = $event.dispatch;
$event.dispatch = function( event ){
	if ( $.data( this, "suppress."+ event.type ) - new Date().getTime() > 0 ){
		$.removeData( this, "suppress."+ event.type );
		return;
	}
	return $dispatch.apply( this, arguments );
};

// event fix hooks for touch events...
var touchHooks = 
$event.fixHooks.touchstart = 
$event.fixHooks.touchmove = 
$event.fixHooks.touchend =
$event.fixHooks.touchcancel = {
	props: "clientX clientY pageX pageY screenX screenY".split( " " ),
	filter: function( event, orig ) {
		if ( orig ){
			var touched = ( orig.touches && orig.touches[0] )
				|| ( orig.changedTouches && orig.changedTouches[0] )
				|| null; 
			// iOS webkit: touchstart, touchmove, touchend
			if ( touched ) 
				$.each( touchHooks.props, function( i, prop ){
					event[ prop ] = touched[ prop ];
				});
		}
		return event;
	}
};

// share the same special event configuration with related events...
$special.draginit = $special.dragstart = $special.dragend = drag;

})( jQuery );
/*! 
 * jquery.event.drag.live - v 2.2
 * Copyright (c) 2010 Three Dub Media - http://threedubmedia.com
 * Open Source MIT License - http://threedubmedia.com/code/license
 */
// Created: 2010-06-07
// Updated: 2012-05-21
// REQUIRES: jquery 1.7.x, event.drag 2.2

;(function( $ ){
	
// local refs (increase compression)
var $event = $.event,
// ref the special event config
drag = $event.special.drag,
// old drag event add method
origadd = drag.add,
// old drag event teradown method
origteardown = drag.teardown;

// allow events to bubble for delegation
drag.noBubble = false;

// the namespace for internal live events
drag.livekey = "livedrag";

// new drop event add method
drag.add = function( obj ){ 
	// call the old method
	origadd.apply( this, arguments );
	// read the data
	var data = $.data( this, drag.datakey );
	// bind the live "draginit" delegator
	if ( !data.live && obj.selector ){
		data.live = true;
		$event.add( this, "draginit."+ drag.livekey, drag.delegate );
	}
};

// new drop event teardown method
drag.teardown = function(){ 
	// call the old method
	origteardown.apply( this, arguments );
	// read the data
	var data = $.data( this, drag.datakey ) || {};
	// bind the live "draginit" delegator
	if ( data.live ){
		// remove the "live" delegation
		$event.remove( this, "draginit."+ drag.livekey, drag.delegate );
		data.live = false;
	}
};

// identify potential delegate elements
drag.delegate = function( event ){
	// local refs
	var elems = [], target, 
	// element event structure
	events = $.data( this, "events" ) || {};
	// query live events
	$.each( events || [], function( key, arr ){
		// no event type matches
		if ( key.indexOf("drag") !== 0 )
			return;
		$.each( arr || [], function( i, obj ){
			// locate the element to delegate
			target = $( event.target ).closest( obj.selector, event.currentTarget )[0];
			// no element found
			if ( !target ) 
				return;
			// add an event handler
			$event.add( target, obj.origType+'.'+drag.livekey, obj.origHandler || obj.handler, obj.data );
			// remember new elements
			if ( $.inArray( target, elems ) < 0 )
				elems.push( target );		
		});
	});
	// if there are no elements, break
	if ( !elems.length ) 
		return false;
	// return the matched results, and clenup when complete		
	return $( elems ).bind("dragend."+ drag.livekey, function(){
		$event.remove( this, "."+ drag.livekey ); // cleanup delegation
	});
};
	
})( jQuery );
/*! 
 * jquery.event.drop - v 2.2
 * Copyright (c) 2010 Three Dub Media - http://threedubmedia.com
 * Open Source MIT License - http://threedubmedia.com/code/license
 */
// Created: 2008-06-04 
// Updated: 2012-05-21
// REQUIRES: jquery 1.7.x, event.drag 2.2

;(function($){ // secure $ jQuery alias

// Events: drop, dropstart, dropend

// add the jquery instance method
$.fn.drop = function( str, arg, opts ){
	// figure out the event type
	var type = typeof str == "string" ? str : "",
	// figure out the event handler...
	fn = $.isFunction( str ) ? str : $.isFunction( arg ) ? arg : null;
	// fix the event type
	if ( type.indexOf("drop") !== 0 ) 
		type = "drop"+ type;
	// were options passed
	opts = ( str == fn ? arg : opts ) || {};
	// trigger or bind event handler
	return fn ? this.bind( type, opts, fn ) : this.trigger( type );
};

// DROP MANAGEMENT UTILITY
// returns filtered drop target elements, caches their positions
$.drop = function( opts ){ 
	opts = opts || {};
	// safely set new options...
	drop.multi = opts.multi === true ? Infinity : 
		opts.multi === false ? 1 : !isNaN( opts.multi ) ? opts.multi : drop.multi;
	drop.delay = opts.delay || drop.delay;
	drop.tolerance = $.isFunction( opts.tolerance ) ? opts.tolerance : 
		opts.tolerance === null ? null : drop.tolerance;
	drop.mode = opts.mode || drop.mode || 'intersect';
};

// local refs (increase compression)
var $event = $.event, 
$special = $event.special,
// configure the drop special event
drop = $.event.special.drop = {

	// these are the default settings
	multi: 1, // allow multiple drop winners per dragged element
	delay: 20, // async timeout delay
	mode: 'overlap', // drop tolerance mode
		
	// internal cache
	targets: [], 
	
	// the key name for stored drop data
	datakey: "dropdata",
		
	// prevent bubbling for better performance
	noBubble: true,
	
	// count bound related events
	add: function( obj ){ 
		// read the interaction data
		var data = $.data( this, drop.datakey );
		// count another realted event
		data.related += 1;
	},
	
	// forget unbound related events
	remove: function(){
		$.data( this, drop.datakey ).related -= 1;
	},
	
	// configure the interactions
	setup: function(){
		// check for related events
		if ( $.data( this, drop.datakey ) ) 
			return;
		// initialize the drop element data
		var data = { 
			related: 0,
			active: [],
			anyactive: 0,
			winner: 0,
			location: {}
		};
		// store the drop data on the element
		$.data( this, drop.datakey, data );
		// store the drop target in internal cache
		drop.targets.push( this );
	},
	
	// destroy the configure interaction	
	teardown: function(){ 
		var data = $.data( this, drop.datakey ) || {};
		// check for related events
		if ( data.related ) 
			return;
		// remove the stored data
		$.removeData( this, drop.datakey );
		// reference the targeted element
		var element = this;
		// remove from the internal cache
		drop.targets = $.grep( drop.targets, function( target ){ 
			return ( target !== element ); 
		});
	},
	
	// shared event handler
	handler: function( event, dd ){ 
		// local vars
		var results, $targets;
		// make sure the right data is available
		if ( !dd ) 
			return;
		// handle various events
		switch ( event.type ){
			// draginit, from $.event.special.drag
			case 'mousedown': // DROPINIT >>
			case 'touchstart': // DROPINIT >>
				// collect and assign the drop targets
				$targets =  $( drop.targets );
				if ( typeof dd.drop == "string" )
					$targets = $targets.filter( dd.drop );
				// reset drop data winner properties
				$targets.each(function(){
					var data = $.data( this, drop.datakey );
					data.active = [];
					data.anyactive = 0;
					data.winner = 0;
				});
				// set available target elements
				dd.droppable = $targets;
				// activate drop targets for the initial element being dragged
				$special.drag.hijack( event, "dropinit", dd ); 
				break;
			// drag, from $.event.special.drag
			case 'mousemove': // TOLERATE >>
			case 'touchmove': // TOLERATE >>
				drop.event = event; // store the mousemove event
				if ( !drop.timer )
					// monitor drop targets
					drop.tolerate( dd ); 
				break;
			// dragend, from $.event.special.drag
			case 'mouseup': // DROP >> DROPEND >>
			case 'touchend': // DROP >> DROPEND >>
				drop.timer = clearTimeout( drop.timer ); // delete timer	
				if ( dd.propagates ){
					$special.drag.hijack( event, "drop", dd ); 
					$special.drag.hijack( event, "dropend", dd ); 
				}
				break;
				
		}
	},
		
	// returns the location positions of an element
	locate: function( elem, index ){ 
		var data = $.data( elem, drop.datakey ),
		$elem = $( elem ), 
		posi = $elem.offset() || {}, 
		height = $elem.outerHeight(), 
		width = $elem.outerWidth(),
		location = { 
			elem: elem, 
			width: width, 
			height: height,
			top: posi.top, 
			left: posi.left, 
			right: posi.left + width, 
			bottom: posi.top + height
		};
		// drag elements might not have dropdata
		if ( data ){
			data.location = location;
			data.index = index;
			data.elem = elem;
		}
		return location;
	},
	
	// test the location positions of an element against another OR an X,Y coord
	contains: function( target, test ){ // target { location } contains test [x,y] or { location }
		return ( ( test[0] || test.left ) >= target.left && ( test[0] || test.right ) <= target.right
			&& ( test[1] || test.top ) >= target.top && ( test[1] || test.bottom ) <= target.bottom ); 
	},
	
	// stored tolerance modes
	modes: { // fn scope: "$.event.special.drop" object 
		// target with mouse wins, else target with most overlap wins
		'intersect': function( event, proxy, target ){
			return this.contains( target, [ event.pageX, event.pageY ] ) ? // check cursor
				1e9 : this.modes.overlap.apply( this, arguments ); // check overlap
		},
		// target with most overlap wins	
		'overlap': function( event, proxy, target ){
			// calculate the area of overlap...
			return Math.max( 0, Math.min( target.bottom, proxy.bottom ) - Math.max( target.top, proxy.top ) )
				* Math.max( 0, Math.min( target.right, proxy.right ) - Math.max( target.left, proxy.left ) );
		},
		// proxy is completely contained within target bounds	
		'fit': function( event, proxy, target ){
			return this.contains( target, proxy ) ? 1 : 0;
		},
		// center of the proxy is contained within target bounds	
		'middle': function( event, proxy, target ){
			return this.contains( target, [ proxy.left + proxy.width * .5, proxy.top + proxy.height * .5 ] ) ? 1 : 0;
		}
	},	
	
	// sort drop target cache by by winner (dsc), then index (asc)
	sort: function( a, b ){
		return ( b.winner - a.winner ) || ( a.index - b.index );
	},
		
	// async, recursive tolerance execution
	tolerate: function( dd ){		
		// declare local refs
		var i, drp, drg, data, arr, len, elem,
		// interaction iteration variables
		x = 0, ia, end = dd.interactions.length,
		// determine the mouse coords
		xy = [ drop.event.pageX, drop.event.pageY ],
		// custom or stored tolerance fn
		tolerance = drop.tolerance || drop.modes[ drop.mode ];
		// go through each passed interaction...
		do if ( ia = dd.interactions[x] ){
			// check valid interaction
			if ( !ia )
				return; 
			// initialize or clear the drop data
			ia.drop = [];
			// holds the drop elements
			arr = []; 
			len = ia.droppable.length;
			// determine the proxy location, if needed
			if ( tolerance )
				drg = drop.locate( ia.proxy ); 
			// reset the loop
			i = 0;
			// loop each stored drop target
			do if ( elem = ia.droppable[i] ){ 
				data = $.data( elem, drop.datakey );
				drp = data.location;
				if ( !drp ) continue;
				// find a winner: tolerance function is defined, call it
				data.winner = tolerance ? tolerance.call( drop, drop.event, drg, drp ) 
					// mouse position is always the fallback
					: drop.contains( drp, xy ) ? 1 : 0; 
				arr.push( data );	
			} while ( ++i < len ); // loop 
			// sort the drop targets
			arr.sort( drop.sort );			
			// reset the loop
			i = 0;
			// loop through all of the targets again
			do if ( data = arr[ i ] ){
				// winners...
				if ( data.winner && ia.drop.length < drop.multi ){
					// new winner... dropstart
					if ( !data.active[x] && !data.anyactive ){
						// check to make sure that this is not prevented
						if ( $special.drag.hijack( drop.event, "dropstart", dd, x, data.elem )[0] !== false ){ 	
							data.active[x] = 1;
							data.anyactive += 1;
						}
						// if false, it is not a winner
						else
							data.winner = 0;
					}
					// if it is still a winner
					if ( data.winner )
						ia.drop.push( data.elem );
				}
				// losers... 
				else if ( data.active[x] && data.anyactive == 1 ){
					// former winner... dropend
					$special.drag.hijack( drop.event, "dropend", dd, x, data.elem ); 
					data.active[x] = 0;
					data.anyactive -= 1;
				}
			} while ( ++i < len ); // loop 		
		} while ( ++x < end ) // loop
		// check if the mouse is still moving or is idle
		if ( drop.last && xy[0] == drop.last.pageX && xy[1] == drop.last.pageY ) 
			delete drop.timer; // idle, don't recurse
		else  // recurse
			drop.timer = setTimeout(function(){ 
				drop.tolerate( dd ); 
			}, drop.delay );
		// remember event, to compare idleness
		drop.last = drop.event; 
	}
	
};

// share the same special event configuration with related events...
$special.dropinit = $special.dropstart = $special.dropend = drop;

})(jQuery); // confine scope	
/*! 
 * jquery.event.drop.live - v 2.2
 * Copyright (c) 2010 Three Dub Media - http://threedubmedia.com
 * Open Source MIT License - http://threedubmedia.com/code/license
 */
// Created: 2010-06-07
// Updated: 2012-05-21
// REQUIRES: jquery 1.7.x, event.drag 2.2, event.drop 2.2

;(function($){ // secure $ jQuery alias

// local refs (increase compression)
var $event = $.event,
// ref the drop special event config
drop = $event.special.drop,
// old drop event add method
origadd = drop.add,
// old drop event teradown method
origteardown = drop.teardown;

// allow events to bubble for delegation
drop.noBubble = false;

// the namespace for internal live events
drop.livekey = "livedrop";

// new drop event add method
drop.add = function( obj ){ 
	// call the old method
	origadd.apply( this, arguments );
	// read the data
	var data = $.data( this, drop.datakey );
	// bind the live "dropinit" delegator
	if ( !data.live && obj.selector ){
		data.live = true;
		$event.add( this, "dropinit."+ drop.livekey, drop.delegate );
	}
};

// new drop event teardown method
drop.teardown = function(){ 
	// call the old method
	origteardown.apply( this, arguments );
	// read the data
	var data = $.data( this, drop.datakey ) || {};
	// remove the live "dropinit" delegator
	if ( data.live ){
		// remove the "live" delegation
		$event.remove( this, "dropinit", drop.delegate );
		data.live = false;
	}
};

// identify potential delegate elements
drop.delegate = function( event, dd ){
	// local refs
	var elems = [], $targets, 
	// element event structure
	events = $.data( this, "events" ) || {};
	// query live events
	$.each( events || [], function( key, arr ){
		// no event type matches
		if ( key.indexOf("drop") !== 0 )
			return;
		$.each( arr, function( i, obj ){
			// locate the elements to delegate
			$targets = $( event.currentTarget ).find( obj.selector );
			// no element found
			if ( !$targets.length ) 
				return;
			// take each target...
			$targets.each(function(){
				// add an event handler
				$event.add( this, obj.origType +'.'+ drop.livekey, obj.origHandler || obj.handler, obj.data );
				// remember new elements
				if ( $.inArray( this, elems ) < 0 )
					elems.push( this );	
			});	
		});
	});
	// may not exist when artifically triggering dropinit event
	if ( dd )
		// clean-up after the interaction ends
		$event.add( dd.drag, "dragend."+drop.livekey, function(){
			$.each( elems.concat( this ), function(){
				$event.remove( this, '.'+ drop.livekey );							
			});
		});
	//drop.delegates.push( elems );
	return elems.length ? $( elems ) : false;
};

})( jQuery ); // confine scope	
let constants = {
    componentsDir: 'components',
    connectorElementClassName: 'component-container',
    componentTypeName: 'data-component-name',
    componentData: 'component-data'
};
let strings = {};
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
class Callback {
    constructor() {
        this.funcs = new Array();
    }
    add(func) {
        this.funcs.push(func);
    }
    remove(func) {
        this.funcs = this.funcs.filter(o => o != func);
    }
    fire(args) {
        this.funcs.forEach(o => o(args));
    }
    static create() {
        return new Callback();
    }
}
/*******************************************************************************
 * Copyright (C) maishu All rights reserved.
 *
 * HTML 页面设计器
 *
 * 作者: 寒烟
 * 日期: 2018/5/30
 *
 * 个人博客：   http://www.cnblogs.com/ansiboy/
 * GITHUB:     http://github.com/ansiboy
 * QQ 讨论组：  119038574
 *
 ********************************************************************************/
var jueying;
(function (jueying) {
    class ComponentEditor extends React.Component {
        constructor(props) {
            super(props);
            this._element = null;
            this.state = { editors: [] };
        }
        componentWillReceiveProps(props) {
            this.setState({
                designer: props.designer,
            });
        }
        getEditors(designer) {
            if (designer == null) {
                return [];
            }
            // 各个控件相同的编辑器
            let commonPropEditorInfos = [];
            let componentDatas = designer.selectedComponents;
            for (let i = 0; i < componentDatas.length; i++) {
                let control = componentDatas[i];
                let className = control.type;
                let propEditorInfos = jueying.Component.getPropEditors(className);
                if (i == 0) {
                    commonPropEditorInfos = propEditorInfos || [];
                }
                else {
                    let items = [];
                    commonPropEditorInfos.forEach(propInfo1 => {
                        propEditorInfos.forEach(propInfo2 => {
                            let propName1 = propInfo1.propNames.join('.');
                            let propName2 = propInfo2.propNames.join('.');
                            if (propInfo1.editorType == propInfo2.editorType && propName1 == propName2) {
                                items.push(propInfo1);
                            }
                        });
                    });
                    commonPropEditorInfos = items;
                }
            }
            // 各个控件相同的属性值
            let commonFlatProps;
            for (let i = 0; i < componentDatas.length; i++) {
                let control = componentDatas[i];
                let controlProps = Object.assign({}, control.props);
                delete controlProps.children;
                controlProps = this.flatProps(controlProps);
                if (i == 0) {
                    commonFlatProps = controlProps;
                }
                else {
                    let obj = {};
                    for (let key in commonFlatProps) {
                        if (commonFlatProps[key] == controlProps[key])
                            obj[key] = controlProps[key];
                    }
                    commonFlatProps = obj;
                }
            }
            let editors = [];
            for (let i = 0; i < commonPropEditorInfos.length; i++) {
                let propEditorInfo = commonPropEditorInfos[i];
                let propName = propEditorInfo.propNames[propEditorInfo.propNames.length - 1];
                let editorType = propEditorInfo.editorType;
                let propNames = propEditorInfo.propNames;
                let editor = React.createElement(editorType, {
                    value: commonFlatProps[propNames.join('.')],
                    onChange: (value) => {
                        for (let i = 0; i < componentDatas.length; i++) {
                            let c = componentDatas[i];
                            console.assert(c.props.id);
                            designer.updateControlProps(c.props.id, propNames, value);
                        }
                    }
                });
                editors.push({ prop: propName, editor, group: propEditorInfo.group });
            }
            return editors;
        }
        flatProps(props, baseName) {
            baseName = baseName ? baseName + '.' : '';
            let obj = {};
            for (let key in props) {
                if (typeof props[key] != 'object') {
                    obj[baseName + key] = props[key];
                }
                else {
                    Object.assign(obj, this.flatProps(props[key], key));
                }
            }
            return obj;
        }
        render() {
            let { designer } = this.state;
            let editors = this.getEditors(designer);
            if (editors.length == 0) {
                return React.createElement("div", { className: "text-center" }, "\u6682\u65E0\u53EF\u7528\u7684\u5C5E\u6027");
            }
            let groupEditorsArray = [];
            for (let i = 0; i < editors.length; i++) {
                let group = editors[i].group || '';
                let groupEditors = groupEditorsArray.filter(o => o.group == group)[0];
                if (groupEditors == null) {
                    groupEditors = { group: editors[i].group, editors: [] };
                    groupEditorsArray.push(groupEditors);
                }
                groupEditors.editors.push({ prop: editors[i].prop, editor: editors[i].editor });
            }
            return React.createElement(React.Fragment, null, groupEditorsArray.map((g) => React.createElement("div", { key: g.group, className: "panel panel-default" },
                g.group ? React.createElement("div", { className: "panel-heading" }, strings[g.group] || g.group) : null,
                React.createElement("div", { className: "panel-body" }, g.editors.map((o, i) => React.createElement("div", { key: i, className: "form-group" },
                    React.createElement("label", null, strings[o.prop] || o.prop),
                    React.createElement("div", { className: "control" }, o.editor)))))));
        }
        get element() {
            return this._element;
        }
    }
    jueying.ComponentEditor = ComponentEditor;
})(jueying || (jueying = {}));
// import { DesignerContext } from './component'
// import { ComponentDefine, ComponentData } from './models';
// import * as React from 'react';
// import { PageDesigner } from './page-designer';
// import { constants } from './comon';
// import { classNames } from './style';
var jueying;
(function (jueying) {
    class ComponentPanel extends React.Component {
        constructor(props) {
            super(props);
            this.state = { componets: [] };
        }
        componentDraggable(toolItemElement, componentData) {
            console.assert(toolItemElement != null);
            toolItemElement.draggable = true;
            toolItemElement.addEventListener('dragstart', function (ev) {
                componentData.props = componentData.props || {};
                ev.dataTransfer.setData(constants.componentData, JSON.stringify(componentData));
                ev.dataTransfer.setData('mousePosition', JSON.stringify({ x: ev.offsetX, y: ev.offsetY }));
            });
        }
        setComponets(componets) {
            this.setState({ componets });
        }
        static getComponentData(dataTransfer) {
            var str = dataTransfer.getData(constants.componentData);
            if (!str)
                return;
            return JSON.parse(str);
        }
        /** 获取光标在图标内的位置 */
        static mouseInnerPosition(dataTransfer) {
            let str = dataTransfer.getData('mousePosition');
            if (!str)
                return;
            return JSON.parse(str);
        }
        render() {
            let props = Object.assign({}, this.props);
            let componets = this.state.componets || [];
            return React.createElement(jueying.DesignerContext.Consumer, null, context => {
                this.designer = context.designer;
                return React.createElement("div", Object.assign({}, props, { className: `${jueying.classNames.componentPanel} panel panel-primary` }),
                    React.createElement("div", { className: "panel-heading" }, "\u5DE5\u5177\u680F"),
                    React.createElement("div", { className: "panel-body" },
                        React.createElement("ul", { ref: (e) => this.toolbarElement = this.toolbarElement || e }, componets.map((c, i) => {
                            let props = { key: i };
                            return React.createElement("li", Object.assign({}, props),
                                React.createElement("div", { className: "btn-link" },
                                    React.createElement("i", { className: c.icon, style: { fontSize: 44, color: 'black' }, ref: e => {
                                            if (!e)
                                                return;
                                            let ctrl = c.componentData;
                                            this.componentDraggable(e, ctrl);
                                        } })),
                                React.createElement("div", null, c.displayName));
                        }))));
            });
        }
    }
    jueying.ComponentPanel = ComponentPanel;
})(jueying || (jueying = {}));
// import { PageDesigner } from "./page-designer";
// import { ComponentProps, ComponentWrapperContext, ContainerHost } from "./component";
// import * as React from "react";
// import { constants } from "./comon";
// import { ComponentPanel } from "./component-toolbar";
// import { classNames, appendClassName } from "./style";
var jueying;
(function (jueying) {
    /**
     * 组件包装器，对组件进行包装，实现组件设计时的行为。
     * 1. 组件的移动
     * 2. 组件的拖放
     */
    class ComponentWrapper extends React.Component {
        designtimeBehavior(element, attr) {
            if (!element)
                throw Errors.argumentNull('element');
            if (!attr)
                throw Errors.argumentNull('args');
            if (element.getAttribute('data-behavior')) {
                return;
            }
            element.setAttribute('data-behavior', 'behavior');
            let designer = this.props.designer;
            console.assert(attr.container != null);
            console.assert(attr.movable != null);
            if (attr.container) {
                ComponentWrapper.enableDroppable(element, designer);
            }
            if (attr.movable) {
                console.assert(element != null);
                ComponentWrapper.draggable(designer, element);
                if (this.handler != null)
                    ComponentWrapper.draggable(designer, element, this.handler);
            }
            else {
                element.onclick = (ev) => ComponentWrapper.invokeOnClick(ev, designer, element);
            }
        }
        /**
         * 启用拖放操作，以便通过拖放图标添加控件
         */
        static enableDroppable(element, designer) {
            console.assert(element != null);
            element.addEventListener('dragover', function (event) {
                event.preventDefault();
                event.stopPropagation();
                let componentName = event.dataTransfer.getData(constants.componentData);
                if (componentName)
                    event.dataTransfer.dropEffect = "copy";
                else
                    event.dataTransfer.dropEffect = "move";
                console.log(`dragover: left:${event.layerX} top:${event.layerX}`);
            });
            element.ondrop = (event) => {
                event.preventDefault();
                event.stopPropagation();
                let ctrl = jueying.ComponentPanel.getComponentData(event.dataTransfer);
                if (!ctrl)
                    return;
                ctrl.props.style = ctrl.props.style || {};
                designer.pageData.props.style = designer.pageData.props.style || {};
                if (!ctrl.props.style.position) {
                    ctrl.props.style.position = designer.pageData.props.style.position;
                }
                let pos = jueying.ComponentPanel.mouseInnerPosition(event.dataTransfer);
                console.assert(pos != null);
                if (ctrl.props.style.position == 'absolute') {
                    ctrl.props.style.left = event.layerX - pos.x;
                    ctrl.props.style.top = event.layerY - pos.y;
                }
                designer.appendComponent(element.id, ctrl);
            };
        }
        static isResizeHandleClassName(className) {
            let classNames = [
                'resize_handle NE', 'resize_handle NN', 'resize_handle NW',
                'resize_handle WW', 'resize_handle EE', 'resize_handle SW',
                'resize_handle SS', 'resize_handle SE',
            ];
            return classNames.indexOf(className) >= 0;
        }
        static draggable(designer, element, handler) {
            if (!designer)
                throw Errors.argumentNull('designer');
            if (!element)
                throw Errors.argumentNull('element');
            console.assert(element.id);
            handler = handler || element;
            let componentId = element.id;
            console.assert(componentId);
            let startPos;
            let rect;
            let dragStart;
            $(handler)
                .drag("init", function (ev) {
                startPos = $(element).position();
                if ($(this).is(`.${jueying.classNames.componentSelected}`))
                    return $(`.${jueying.classNames.componentSelected}`);
            })
                .drag('start', function (ev, dd) {
                dd.attr = $(ev.target).prop("className");
                dd.width = $(this).width();
                dd.height = $(this).height();
                dd.sourceElement = element;
                dragStart = Date.now();
            })
                .drag(function (ev, dd) {
                ev.preventDefault();
                ev.stopPropagation();
                rect = {};
                if (dd.attr.indexOf("E") > -1) {
                    rect.width = Math.max(32, dd.width + dd.deltaX);
                }
                if (dd.attr.indexOf("S") > -1) {
                    rect.height = Math.max(32, dd.height + dd.deltaY);
                }
                if (dd.attr.indexOf("W") > -1) {
                    rect.width = Math.max(32, dd.width - dd.deltaX);
                    setLeft(dd);
                }
                if (dd.attr.indexOf("N") > -1) {
                    rect.height = Math.max(32, dd.height - dd.deltaY);
                    setTop(dd);
                }
                if (dd.attr.indexOf("WW") >= 0)
                    setLeft(dd);
                if (dd.attr.indexOf("NE") >= 0 || dd.attr.indexOf("NW") >= 0 || dd.attr.indexOf("SW") >= 0)
                    setPosition(dd);
                if (dd.attr.indexOf("NN") >= 0)
                    setTop(dd);
                if (dd.attr.indexOf("drag") > -1) {
                    rect.top = dd.offsetY;
                    rect.left = dd.offsetX;
                }
                if (!ComponentWrapper.isResizeHandleClassName(dd.attr)) {
                    setPosition(dd);
                }
                if (dd.attr)
                    $(this).css(rect);
            }, { click: true })
                .drag('end', function (ev, dd) {
                let interval = Date.now() - dragStart;
                ComponentWrapper.isDrag = interval >= 300;
                if (!ComponentWrapper.isResizeHandleClassName(dd.attr)) {
                    let left = startPos.left + dd.deltaX;
                    let top = startPos.top + dd.deltaY;
                    designer.setComponentPosition(element.id, { left, top });
                    element.style.transform = '';
                }
                else {
                    let left, top;
                    if (dd.attr.indexOf("W") > -1)
                        left = startPos.left + dd.deltaX;
                    if (dd.attr.indexOf("N") > -1)
                        top = startPos.top + dd.deltaY;
                    element.style.transform = '';
                    designer.setComponentPosition(element.id, { left, top });
                    designer.setComponentSize(componentId, rect);
                }
            })
                .click((ev) => {
                ComponentWrapper.invokeOnClick(ev, designer, element);
            });
            let setPosition = (dd) => {
                console.log(['dd.offsetX, dd.offsetY', dd.offsetX, dd.offsetY]);
                console.log(dd);
                element.style.transform = `translate(${dd.deltaX}px,${dd.deltaY}px)`;
            };
            let setTop = (dd) => {
                element.style.transform = `translateY(${dd.deltaY}px)`;
            };
            let setLeft = (dd) => {
                element.style.transform = `translateX(${dd.deltaX}px)`;
            };
        }
        static invokeOnClick(ev, designer, element) {
            ev.preventDefault();
            ev.stopPropagation();
            if (ComponentWrapper.isDrag) {
                ComponentWrapper.isDrag = false;
                return;
            }
            let elementID = element.id;
            if (!ev.ctrlKey) {
                designer.selectComponent(element.id);
                return;
            }
            let selectedControlIds = designer.selectedComponentIds;
            console.assert(elementID);
            if (selectedControlIds.indexOf(elementID) >= 0) {
                selectedControlIds = selectedControlIds.filter(o => o != elementID);
            }
            else {
                selectedControlIds.push(elementID);
            }
            designer.selectComponent(selectedControlIds);
        }
        componentDidMount() {
            if (!this.element) {
                return;
            }
            let attr = this.props.source.attr;
            this.designtimeBehavior(this.element, attr);
        }
        render() {
            console.assert(!Array.isArray(this.props.children));
            let shouldWrapper = true;
            let attr = this.props.source.attr;
            shouldWrapper = attr.resize || (typeof this.props.source.type != 'string' && this.props.source.type != jueying.ContainerHost);
            if (!shouldWrapper) {
                return this.renderWidthoutWrapper();
            }
            let props = this.props.source.props;
            let style = props.style = props.style || {};
            let { top, left, position, width, height, display, visibility } = style;
            let className = jueying.appendClassName(props.className || '', jueying.classNames.componentWrapper);
            className = props.selected ? jueying.appendClassName(className, jueying.classNames.componentSelected) : className;
            let wrapperProps = {
                id: props.id,
                className,
                style: { top, left, position, width, height, display, visibility },
                ref: (e) => this.element = e || this.element
            };
            let move_handle = props.selected && attr.showHandler ? React.createElement("div", { className: "move_handle", style: {}, ref: e => this.handler = e || this.handler }) : null;
            let showResizeHandle = attr.resize && props.style.position == 'absolute' && props.selected;
            let source = this.props.source;
            if (props.style) {
                delete props.style.left;
                delete props.style.top;
                delete props.style.position;
                props.style.width = '100%';
                props.style.height = '100%';
            }
            return React.createElement(jueying.ComponentWrapperContext.Provider, { value: this },
                React.createElement("div", Object.assign({}, wrapperProps),
                    move_handle,
                    showResizeHandle ?
                        React.createElement(React.Fragment, null,
                            React.createElement("div", { className: "resize_handle NE" }),
                            React.createElement("div", { className: "resize_handle NN" }),
                            React.createElement("div", { className: "resize_handle NW" }),
                            React.createElement("div", { className: "resize_handle WW" }),
                            React.createElement("div", { className: "resize_handle EE" }),
                            React.createElement("div", { className: "resize_handle SW" }),
                            React.createElement("div", { className: "resize_handle SS" }),
                            React.createElement("div", { className: "resize_handle SE" })) : null,
                    this.createRawElement(source.type, source.props, source.children)));
        }
        renderWidthoutWrapper() {
            let { type, props, children } = this.props.source;
            props.ref = (e) => {
                if (!e)
                    return;
                if (e.tagName) {
                    let attr = this.props.source.attr;
                    this.designtimeBehavior(e, attr);
                    return;
                }
            };
            if (props.selected) {
                props.className = jueying.appendClassName(props.className || '', jueying.classNames.componentSelected);
            }
            let element = this.createRawElement(type, props, children);
            return React.createElement(jueying.ComponentWrapperContext.Provider, { value: this }, element);
        }
        createRawElement(type, props, children) {
            let isEmptyElement = (children || []).length == 0;
            if (isEmptyElement) {
                let emtpy = this.props.designer.designTimeEmptyElement(type, props);
                children = [emtpy];
            }
            return React.createElement(type, props, ...children);
        }
    }
    ComponentWrapper.isDrag = false;
    jueying.ComponentWrapper = ComponentWrapper;
})(jueying || (jueying = {}));
/*******************************************************************************
 * Copyright (C) maishu All rights reserved.
 *
 * 作者: 寒烟
 * 日期: 2018/5/30
 *
 * 个人博客：   http://www.cnblogs.com/ansiboy/
 * GITHUB:     http://github.com/ansiboy
 * QQ 讨论组：  119038574
 *
 * component.tsx 文件用于运行时加载，所以要控制此文件的大小，用于在运行时创建页面
 *
 ********************************************************************************/
// import * as React from "react";
// import { PageDesigner } from "./page-designer";
// import { ComponentWrapper, ComponentAttribute, ComponentWrapperDrapData } from "./component-wrapper";
// import { PropEditorConstructor } from "./prop-editor";
// import { ComponentData } from "./models";
// import { appendClassName, removeClassName, classNames } from "./style";
// import { constants } from "./comon";
// import { ComponentPanel } from "./component-toolbar";
// import { Errors } from './errors'
var jueying;
(function (jueying) {
    // 非 dom 的 prop，以 ctrl 开大，以便于处理
    let NotDomPropPrefix = 'ctrl_';
    jueying.DesignerContext = React.createContext({ designer: null });
    jueying.ComponentWrapperContext = React.createContext(null);
    function component(args) {
        return function (constructor) {
            if (jueying.PageDesigner) {
                Component.setAttribute(constructor.name, args);
            }
            Component.register(constructor.name, constructor);
            return constructor;
        };
    }
    jueying.component = component;
    class Component {
        /**
         * 设置组件特性
         * @param typename 组件类型名称
         * @param attr 组件特性
         */
        static setAttribute(typename, attr) {
            Component.componentAttributes[typename] = attr;
        }
        /**
         * 获取组件特性
         * @param typename 组件类型名称
         */
        static getAttribute(type) {
            let typename = typeof type == 'string' ? type : type.name;
            let attr = Component.componentAttributes[typename];
            return Object.assign({ type }, Component.defaultComponentAttribute, attr || {});
        }
        static getPropEditors(controlClassName) {
            let classEditors = this.controlPropEditors[controlClassName] || [];
            return classEditors;
        }
        static getPropEditor(controlClassName, ...propNames) {
            return this.getPropEditorByArray(controlClassName, propNames);
        }
        /** 通过属性数组获取属性的编辑器 */
        static getPropEditorByArray(controlClassName, propNames) {
            let classEditors = this.controlPropEditors[controlClassName] || [];
            let editor = classEditors.filter(o => o.propNames.join('.') == propNames.join('.'))[0];
            return editor;
        }
        static setPropEditor(componentType, propName, editorType, group) {
            group = group || '';
            let propNames = propName.split('.');
            let className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name;
            let classProps = Component.controlPropEditors[className] = Component.controlPropEditors[className] || [];
            for (let i = 0; i < classProps.length; i++) {
                let propName1 = classProps[i].propNames.join('.');
                let propName2 = propNames.join('.');
                if (propName1 == propName2) {
                    classProps[i].editorType = editorType;
                    return;
                }
            }
            classProps.push({ propNames: propNames, editorType, group });
        }
        /**
         * 将持久化的元素数据转换为 ReactElement
         * @param args 元素数据
         */
        static createElement(args, h) {
            h = h || React.createElement;
            try {
                let type = args.type;
                let componentName = args.type;
                let controlType = Component.componentTypes[componentName];
                if (controlType) {
                    type = controlType;
                }
                let children = args.children ? args.children.map(o => Component.createElement(o, h)) : [];
                let props = args.props == null ? {} : JSON.parse(JSON.stringify(args.props));
                let result;
                if (typeof type == 'string') {
                    if (props.text) {
                        children.push(props.text);
                    }
                    //=========================================
                    // props.text 非 DOM 的 prop，并且已经使用完
                    delete props.text;
                    //=========================================
                }
                type = type == Component.Fragment ? React.Fragment : type;
                result = h(type, props, ...children);
                return result;
            }
            catch (e) {
                console.error(e);
                return null;
            }
        }
        static register(componentName, componentType, attr) {
            if (componentType == null && typeof componentName == 'function') {
                componentType = componentName;
                componentName = componentType.name;
                componentType['componentName'] = componentName;
            }
            if (!componentName)
                throw Errors.argumentNull('componentName');
            if (!componentType)
                throw Errors.argumentNull('componentType');
            Component.componentTypes[componentName] = componentType;
            if (attr)
                Component.setAttribute(componentName, attr);
        }
    }
    //==========================================
    // 用于创建 React 的 React.Fragment 
    Component.Fragment = "";
    //==========================================
    Component.defaultComponentAttribute = {
        container: false, movable: false, showHandler: false, resize: false
    };
    Component.componentAttributes = {
        'div': { container: true, movable: true, showHandler: true, resize: true },
        'img': { container: false, movable: true, resize: true },
        'label': { movable: true },
        'ul': { container: false, movable: true, showHandler: true, resize: false },
        'li': { container: true, movable: false, },
        'table': { container: false, movable: true, showHandler: true, resize: true },
        'thead': { container: false, movable: false },
        'tbody': { container: false, movable: false },
        'tfoot': { container: false, movable: false },
        'tr': { container: false, movable: false },
        'td': { container: true, movable: false },
    };
    Component.controlPropEditors = {};
    Component.componentTypes = {};
    jueying.Component = Component;
    const FormContext = React.createContext({ form: null });
    class ContainerHost extends React.Component {
        constructor(props) {
            super(props);
            let children = this.children(props);
            this.state = { children };
        }
        children(props) {
            let arr = props.children == null ? [] :
                Array.isArray(props.children) ? props.children : [props.children];
            let children = [];
            arr.forEach(o => {
                if (!React.isValidElement(o))
                    return;
                children.push(o);
            });
            return children;
        }
        componentWillReceiveProps(props) {
            let children = this.children(props);
            this.setState({ children });
        }
        render() {
            let props = {};
            for (let key in this.props) {
                if (key == 'ref' || key == 'id')
                    continue;
                props[key] = this.props[key];
            }
            props.style = Object.assign({ minHeight: 40 }, props.style);
            let children = this.state.children.filter(o => o.props.parent_id == null);
            return React.createElement(FormContext.Provider, { value: { form: this } }, children);
        }
    }
    jueying.ContainerHost = ContainerHost;
    class ComponentContainer extends React.Component {
        /**
         * 启用拖放操作，以便通过拖放图标添加控件
         */
        enableAppendDroppable(element) {
            if (element.getAttribute('enable-append-droppable'))
                return;
            element.setAttribute('enable-append-droppable', 'true');
            console.assert(element != null);
            element.addEventListener('dragover', function (event) {
                event.preventDefault();
                event.stopPropagation();
                element.className = jueying.appendClassName(element.className || '', 'active');
                let componentName = event.dataTransfer.getData(constants.componentData);
                if (componentName)
                    event.dataTransfer.dropEffect = "copy";
                else
                    event.dataTransfer.dropEffect = "move";
                console.log(`dragover: left:${event.layerX} top:${event.layerX}`);
            });
            let func = function (event) {
                event.preventDefault();
                event.stopPropagation();
                element.className = jueying.removeClassName(element.className, 'active');
            };
            element.addEventListener('dragleave', func);
            element.addEventListener('dragend', func);
            element.addEventListener('dragexit', func);
            element.ondrop = (event) => {
                event.preventDefault();
                event.stopPropagation();
                element.className = jueying.removeClassName(element.className, 'active');
                let ctrl = jueying.ComponentPanel.getComponentData(event.dataTransfer);
                if (!ctrl)
                    return;
                console.assert(this.props.id);
                console.assert(this.designer);
                ctrl.props.parent_id = this.props.id;
                console.assert(this.host != null, 'host is null');
                this.designer.appendComponent(this.host.props.id, ctrl);
            };
        }
        enableMoveDroppable(element) {
            if (element.getAttribute('enable-move-droppable'))
                return;
            element.setAttribute('enable-move-droppable', 'true');
            $(element)
                .drop('start', (event, dd) => {
                if (dd.sourceElement.id == this.wraper.props.source.props.id)
                    return;
                jueying.appendClassName(element, 'active');
            })
                .drop('drop', (event, dd) => {
                if (dd.sourceElement.id == this.wraper.props.source.props.id)
                    return;
                let componentData = this.designer.findComponentData(dd.sourceElement.id);
                console.assert(componentData != null);
                let propName = 'parent_id';
                this.designer.moveControl(dd.sourceElement.id, this.host.props.id);
                this.designer.updateControlProps(dd.sourceElement.id, [propName], this.props.id);
            })
                .drop('end', (event, dd) => {
                if (dd.sourceElement.id == this.wraper.props.source.props.id)
                    return;
                jueying.removeClassName(element, 'active');
            });
        }
        render() {
            return React.createElement(FormContext.Consumer, null, (args) => {
                let host = this.host = args.form;
                if (host == null)
                    throw Errors.canntFindHost(this.props.id);
                let children = [];
                if (host.props && host.props.children) {
                    let arr;
                    if (Array.isArray(host.props.children)) {
                        arr = host.props.children;
                    }
                    else {
                        arr = [host.props.children];
                    }
                    children = arr.filter((o) => o.props.parent_id == this.props.id);
                }
                return React.createElement(jueying.DesignerContext.Consumer, null, args => React.createElement(jueying.ComponentWrapperContext.Consumer, null, wraper => {
                    this.wraper = wraper;
                    console.assert(this.wraper != null);
                    let element = React.createElement(React.Fragment, null,
                        this.props.children,
                        children);
                    if (args.designer) {
                        this.designer = args.designer;
                        element = React.createElement("div", { className: jueying.classNames.formItem, ref: e => {
                                if (!e)
                                    return;
                                this.enableAppendDroppable(e);
                                this.enableMoveDroppable(e);
                            } }, element);
                    }
                    return element;
                }));
            });
        }
    }
    jueying.ComponentContainer = ComponentContainer;
    jueying.ContainerHostName = 'ContainerHost';
    Component.register(jueying.ContainerHostName, ContainerHost, { container: false });
})(jueying || (jueying = {}));
// import { classNames } from "./style";
// import * as React from "react";
// import { ComponentEditor } from "./component-editor";
// import { ComponentData } from "./models";
// import { PageDesigner } from "./page-designer";
var jueying;
(function (jueying) {
    class EditorPanel extends React.Component {
        constructor(props) {
            super(props);
            this.state = { componentDatas: [] };
            this.designerComponentChanged = () => {
                console.assert(this.designer != null);
                this.setState({ designer: this.designer });
            };
        }
        componentWillReceiveProps(props) {
            this.setState({ designer: props.designer });
        }
        getComponentData(designer) {
            let componentDatas = [];
            let stack = new Array();
            stack.push(designer.pageData);
            while (stack.length > 0) {
                let item = stack.pop();
                componentDatas.push(item);
                let children = item.children || [];
                for (let i = 0; i < children.length; i++) {
                    stack.push(children[i]);
                }
            }
            return componentDatas;
        }
        get designer() {
            return this._designer;
        }
        set designer(value) {
            if (this._designer) {
                this._designer.componentRemoved.remove(this.designerComponentChanged);
                this._designer.componentAppend.remove(this.designerComponentChanged);
                this._designer.componentUpdated.remove(this.designerComponentChanged);
                this._designer.componentSelected.remove(this.designerComponentChanged);
            }
            if (value) {
                value.componentRemoved.add(this.designerComponentChanged);
                value.componentAppend.add(this.designerComponentChanged);
                value.componentUpdated.add(this.designerComponentChanged);
                value.componentSelected.add(this.designerComponentChanged);
            }
            this._designer = value;
        }
        // private designerComponentChanged(sender, ) {
        // }
        componentDidMount() {
        }
        render() {
            let { emptyText } = this.props;
            emptyText = emptyText || '';
            let componentDatas = [];
            let selectedComponentIds = [];
            let designer = this.state.designer;
            if (designer) {
                componentDatas = this.getComponentData(designer);
                selectedComponentIds = designer.selectedComponentIds || [];
            }
            return React.createElement("div", { className: jueying.classNames.editorPanel, ref: (e) => this.element = e || this.element },
                React.createElement("select", { className: "form-control", ref: e => {
                        if (!e)
                            return;
                        e.value = selectedComponentIds.length == 1 ? selectedComponentIds[0] : '';
                        e.onchange = () => {
                            if (designer && e.value)
                                designer.selectComponent(e.value);
                        };
                    } }, componentDatas.map(o => React.createElement("option", { key: o.props.id, id: o.props.id, value: o.props.id }, o.props.name))),
                React.createElement(jueying.ComponentEditor, { designer: designer, ref: e => this.editor = e || this.editor }));
        }
    }
    jueying.EditorPanel = EditorPanel;
})(jueying || (jueying = {}));
class Errors {
    static fileNotExists(fileName) {
        return new Error(`File '${fileName}' is not exists.`);
    }
    static argumentNull(argumentName) {
        return new Error(`Argument ${argumentName} is null or empty.`);
    }
    static pageDataIsNull() {
        return new Error(`Page data is null.`);
    }
    static toolbarRequiredKey() {
        return new Error(`Toolbar has not a key prop.`);
    }
    static loadPluginFail(pluginId) {
        return new Error(`Load plugin '${pluginId}' fail.`);
    }
    static idRequired() {
        return new Error(`Property id is required.`);
    }
    static canntFindHost(componentId) {
        return new Error(`Can not find host element for component container ${componentId}.`);
    }
}
// import { ComponentProps } from "./component";
/*******************************************************************************
 * Copyright (C) maishu All rights reserved.
 *
 * HTML 页面设计器
 *
 * 作者: 寒烟
 * 日期: 2018/5/30
 *
 * 个人博客：   http://www.cnblogs.com/ansiboy/
 * GITHUB:     http://github.com/ansiboy
 * QQ 讨论组：  119038574
 *
 ********************************************************************************/
var jueying;
(function (jueying) {
    class PageDesigner extends React.Component {
        constructor(props) {
            super(props);
            this.componentSelected = Callback.create();
            this.componentRemoved = Callback.create();
            this.componentAppend = Callback.create();
            this.componentUpdated = Callback.create();
            this.designtimeComponentDidMount = Callback.create();
            this.namedComponents = {};
            this.initPageData(props.pageData);
            this.state = { pageData: props.pageData };
            this.designtimeComponentDidMount.add((args) => {
                console.log(`this:designer event:controlComponentDidMount`);
            });
        }
        initPageData(pageData) {
            if (pageData == null) {
                return;
            }
            pageData.children = pageData.children || [];
            let hostCtrl = pageData.children.filter(o => o.type == jueying.ContainerHostName)[0];
            if (hostCtrl == null) {
                hostCtrl = {
                    type: jueying.ContainerHostName,
                    props: { id: guid() }
                };
                pageData.children.push(hostCtrl);
            }
            this.nameComponent(pageData);
        }
        get root() {
            return this._root;
        }
        get pageData() {
            return this.state.pageData;
        }
        get selectedComponentIds() {
            return this.selectedComponents.map(o => o.props.id);
        }
        get selectedComponents() {
            let arr = new Array();
            let stack = new Array();
            stack.push(this.pageData);
            while (stack.length > 0) {
                let item = stack.pop();
                if (item.props.selected == true)
                    arr.push(item);
                let children = item.children || [];
                for (let i = 0; i < children.length; i++)
                    stack.push(children[i]);
            }
            return arr;
        }
        updateControlProps(controlId, navPropsNames, value) {
            let componentData = this.findComponentData(controlId);
            if (componentData == null)
                return;
            console.assert(componentData != null);
            console.assert(navPropsNames != null, 'props is null');
            componentData.props = componentData.props || {};
            let obj = componentData.props;
            for (let i = 0; i < navPropsNames.length - 1; i++) {
                obj = obj[navPropsNames[i]] = obj[navPropsNames[i]] || {};
            }
            obj[navPropsNames[navPropsNames.length - 1]] = value;
            this.setState(this.state);
            this.componentUpdated.fire([componentData]);
        }
        sortChildren(parentId, childIds) {
            if (!parentId)
                throw Errors.argumentNull('parentId');
            if (!childIds)
                throw Errors.argumentNull('childIds');
            let pageData = this.state.pageData;
            let parentControl = this.findComponentData(parentId);
            if (parentControl == null)
                throw new Error('Parent is not exists');
            console.assert(parentControl != null);
            console.assert(parentControl.children != null);
            console.assert((parentControl.children || []).length == childIds.length);
            let p = parentControl;
            parentControl.children = childIds.map(o => {
                let child = p.children.filter(a => a.props.id == o)[0];
                console.assert(child != null, `child ${o} is null`);
                return child;
            });
            this.setState({ pageData });
        }
        /**
         * 对组件及其子控件进行命名
         * @param component
         */
        nameComponent(component) {
            let props = component.props = component.props || {};
            if (!props.name) {
                let num = 0;
                let name;
                do {
                    num = num + 1;
                    name = `${component.type}${num}`;
                } while (this.namedComponents[name]);
                this.namedComponents[name] = component;
                props.name = name;
            }
            if (!props.id)
                props.id = guid();
            if (!component.children || component.children.length == 0) {
                return;
            }
            for (let i = 0; i < component.children.length; i++) {
                this.nameComponent(component.children[i]);
            }
        }
        /** 添加控件 */
        appendComponent(parentId, childControl, childIds) {
            if (!parentId)
                throw Errors.argumentNull('parentId');
            if (!childControl)
                throw Errors.argumentNull('childControl');
            this.nameComponent(childControl);
            let parentControl = this.findComponentData(parentId);
            if (parentControl == null)
                throw new Error('Parent is not exists');
            console.assert(parentControl != null);
            parentControl.children = parentControl.children || [];
            parentControl.children.push(childControl);
            if (childIds)
                this.sortChildren(parentId, childIds);
            else {
                let { pageData } = this.state;
                this.setState({ pageData });
            }
            this.selectComponent(childControl.props.id);
            this.componentAppend.fire(this);
        }
        /** 设置控件位置 */
        setComponentPosition(componentId, position) {
            return this.setComponentsPosition([{ componentId, position }]);
        }
        setComponentSize(componentId, size) {
            console.assert(componentId);
            console.assert(size);
            let componentData = this.findComponentData(componentId);
            if (!componentData)
                throw new Error(`Control ${componentId} is not exits.`);
            let style = componentData.props.style = (componentData.props.style || {});
            if (size.height)
                style.height = size.height;
            if (size.width)
                style.width = size.width;
            let { pageData } = this.state;
            this.setState({ pageData });
            this.componentUpdated.fire([componentData]);
        }
        setComponentsPosition(positions) {
            let componentDatas = new Array();
            positions.forEach(o => {
                let { componentId } = o;
                let { left, top } = o.position;
                let componentData = this.findComponentData(componentId);
                if (!componentData)
                    throw new Error(`Control ${componentId} is not exits.`);
                let style = componentData.props.style = (componentData.props.style || {});
                if (left)
                    style.left = left;
                if (top)
                    style.top = top;
                let { pageData } = this.state;
                this.setState({ pageData });
                componentDatas.push(componentData);
            });
            this.componentUpdated.fire(componentDatas);
        }
        /**
         * 选择指定的控件
         * @param control 指定的控件
         */
        selectComponent(componentIds) {
            if (typeof componentIds == 'string')
                componentIds = [componentIds];
            var stack = [];
            stack.push(this.pageData);
            while (stack.length > 0) {
                let item = stack.pop();
                let isSelectedControl = componentIds.indexOf(item.props.id) >= 0;
                item.props.selected = isSelectedControl;
                let children = item.children || [];
                for (let i = 0; i < children.length; i++) {
                    stack.push(children[i]);
                }
            }
            this.setState({ pageData: this.pageData });
            this.componentSelected.fire(this.selectedComponentIds);
            //====================================================
            // 设置焦点，以便获取键盘事件
            this.element.focus();
            //====================================================
        }
        /** 移除控件 */
        removeControl(...controlIds) {
            let pageData = this.state.pageData;
            if (!pageData || !pageData.children || pageData.children.length == 0)
                return;
            controlIds.forEach(controlId => {
                this.removeControlFrom(controlId, pageData.children);
            });
            this.setState({ pageData });
            this.componentRemoved.fire(controlIds);
        }
        /**
         * 移动控件到另外一个控件容器
         * @param componentId 要移动的组件编号
         * @param parentId 目标组件编号
         * @param childIds 目标组件子组件的编号，用于排序子组件
         */
        moveControl(componentId, parentId, childIds) {
            let control = this.findComponentData(componentId);
            if (control == null)
                throw new Error(`Cannt find control by id ${componentId}`);
            console.assert(control != null, `Cannt find control by id ${componentId}`);
            let pageData = this.state.pageData;
            console.assert(pageData.children);
            this.removeControlFrom(componentId, pageData.children);
            this.appendComponent(parentId, control, childIds);
        }
        removeControlFrom(controlId, collection) {
            let controlIndex = null;
            for (let i = 0; i < collection.length; i++) {
                if (controlId == collection[i].props.id) {
                    controlIndex = i;
                    break;
                }
            }
            if (controlIndex == null) {
                for (let i = 0; i < collection.length; i++) {
                    let o = collection[i];
                    if (o.children && o.children.length > 0) {
                        let isRemoved = this.removeControlFrom(controlId, o.children);
                        if (isRemoved) {
                            return true;
                        }
                    }
                }
                return false;
            }
            if (controlIndex == 0) {
                collection.shift();
            }
            else if (controlIndex == collection.length - 1) {
                collection.pop();
            }
            else {
                collection.splice(controlIndex, 1);
            }
            return true;
        }
        findComponentData(controlId) {
            let pageData = this.state.pageData;
            if (!pageData)
                throw Errors.pageDataIsNull();
            let stack = new Array();
            stack.push(pageData);
            while (stack.length > 0) {
                let item = stack.pop();
                if (item == null)
                    continue;
                if (item.props.id == controlId)
                    return item;
                let children = (item.children || []).filter(o => typeof o == 'object');
                stack.push(...children);
            }
            return null;
        }
        onKeyDown(e) {
            const DELETE_KEY_CODE = 46;
            if (e.keyCode == DELETE_KEY_CODE) {
                if (this.selectedComponents.length == 0)
                    return;
                this.removeControl(...this.selectedComponentIds);
            }
        }
        designTimeEmptyElement(type, props) {
            let typename = typeof type == 'string' ? type : type.name;
            let text = this.designTimeText(typename, props);
            return text;
        }
        designTimeText(type, props) {
            let text = props.text;
            if (text) {
                return text;
            }
            text = text || props.name || type;
            return text;
        }
        createDesignTimeElement(type, props, ...children) {
            console.assert(props.id);
            if (props.id != null)
                props.key = props.id;
            if (type == 'a' && props.href) {
                props.href = 'javascript:';
            }
            else if (type == 'input' || type == 'button') {
                delete props.onClick;
                props.readOnly = true;
            }
            let attr = jueying.Component.getAttribute(type);
            console.assert(attr != null);
            let className = props.selected ? jueying.appendClassName(props.className || '', jueying.classNames.componentSelected) : props.className;
            return React.createElement(jueying.ComponentWrapper, Object.assign({}, Object.assign({}, props, { className }), { designer: this, source: { type, attr, props, children } }));
        }
        componentWillReceiveProps(props) {
            this.initPageData(props.pageData);
            this.setState({ pageData: props.pageData });
        }
        render() {
            let designer = this;
            let { pageData } = this.state;
            let style = this.props.style;
            let result = React.createElement("div", { className: "designer", tabIndex: 1, style: style, ref: e => this.element = e || this.element, onKeyDown: (e) => this.onKeyDown(e) },
                React.createElement(jueying.DesignerContext.Provider, { value: { designer } }, (() => {
                    this._root = pageData ? jueying.Component.createElement(pageData, this.createDesignTimeElement.bind(this)) : null;
                    return this._root;
                })()));
            return result;
        }
    }
    jueying.PageDesigner = PageDesigner;
})(jueying || (jueying = {}));
// import * as React from "react";
var jueying;
(function (jueying) {
    class PropEditor extends React.Component {
        constructor(props) {
            super(props);
            this.state = { value: props.value };
        }
        componentWillReceiveProps(props) {
            this.setState({ value: props.value });
        }
    }
    class TextInput extends PropEditor {
        render() {
            let { value } = this.state;
            return React.createElement("input", { className: 'form-control', value: value || '', onChange: e => {
                    this.setState({ value: e.target.value });
                    this.props.onChange(e.target.value);
                } });
        }
    }
    jueying.TextInput = TextInput;
    function dropdown(items, emptyText) {
        return class Dropdown extends PropEditor {
            render() {
                let { value } = this.state;
                if (Array.isArray(items)) {
                    let tmp = items;
                    items = {};
                    for (let i = 0; i < tmp.length; i++) {
                        items[tmp[i]] = tmp[i];
                    }
                }
                return React.createElement("select", { className: 'form-control', value: value || '', onChange: e => {
                        value = e.target.value;
                        this.setState({ value });
                        this.props.onChange(value);
                    } },
                    emptyText ? React.createElement("option", { value: "" }, emptyText) : null,
                    Object.getOwnPropertyNames(items).map(o => React.createElement("option", { key: o, value: o }, items[o])));
            }
        };
    }
    jueying.dropdown = dropdown;
})(jueying || (jueying = {}));
var jueying;
(function (jueying) {
    jueying.classNames = {
        componentSelected: `component-selected`,
        emptyTemplates: `empty-templates`,
        loadingTemplates: `loading-templates`,
        templateSelected: `template-selected`,
        templateDialog: `template-dialog`,
        emptyDocument: `empty-document`,
        component: 'component',
        componentWrapper: 'component-wrapper',
        componentPanel: 'component-panel',
        form: 'form',
        formItem: 'form-item',
        editorPanel: 'editor-panel'
    };
    let templateDialog = {
        nameHeight: 40,
        fontSize: 22
    };
    let element = document.createElement('style');
    element.type = 'text/css';
    element.innerHTML = `
            .${jueying.classNames.componentSelected} {
                border: solid 1px #337ab7!important;
            }
            .${jueying.classNames.emptyTemplates} {
                padding:50px 0;
                text-align: center;
            }
            .${jueying.classNames.loadingTemplates} {
                padding:50px 0;
                text-align: center;
            }
            .${jueying.classNames.templateSelected} .page-view {
                border: solid 1px #337ab7!important;
            }
            .${jueying.classNames.templateDialog} .name {
                margin-top: -${templateDialog.nameHeight}px;
                height: ${templateDialog.nameHeight}px;
                font-size: ${templateDialog.fontSize}px;
                text-align: center;
                padding-top: 6px;
                background-color: black;
                opacity: 0.5;
            }
            .${jueying.classNames.templateDialog} .name span {
                color: white;
            }
            .${jueying.classNames.emptyDocument} {
                text-align: center;
                padding: 100px 0;
            }
            ul.nav-tabs li i {
                position: relative;
                top: 4px;
                right: -6px;
            }
            .validationMessage {
                position: absolute;
                margin-top: -60px;
                background-color: red;
                color: white;
                padding: 4px 10px;
            }
            .${jueying.classNames.form} {
                min-height: 40px;
                width: 100%;
            }
            .${jueying.classNames.formItem} {
                min-height: 40px;
                width: 100%;
            }
            .${jueying.classNames.formItem}.active,
            .${jueying.classNames.componentWrapper}.active,
            .${jueying.classNames.componentWrapper}.${jueying.classNames.componentSelected}.active {
                border: 1px solid green;
            }
            .${jueying.classNames.editorPanel} {
                width: 300px;
                background: white;
                color: black;
                margin: 0;
                font-size: 14px;
                z-index: 100;
                overflow: auto;
            }
            .${jueying.classNames.editorPanel} label {
                width: 80px;
                float: left;
                padding: 4px;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .${jueying.classNames.editorPanel} .control {
                padding-left: 90px;
            }
            .${jueying.classNames.editorPanel} .empty {
                padding-top: 200px;
                text-align: center;
            }
            .${jueying.classNames.componentPanel} {
                background: white;
                color: black;
                width: 90px;
                font-size: 14px;
                z-index: 100;
            }
            .${jueying.classNames.componentPanel} .panel-heading {
                text-align: center;
            }
            .${jueying.classNames.componentPanel} ul li {
                width: 64px;
                text-align: center;
                padding: 8px;
            }
        `;
    document.head.appendChild(element);
    function appendClassName(element, addonClassName) {
        if (element == null)
            throw Errors.argumentNull('element');
        if (!addonClassName)
            throw Errors.argumentNull('addonClassName');
        let sourceClassName;
        if (typeof element == 'string')
            sourceClassName = element;
        else
            sourceClassName = element.className;
        sourceClassName = sourceClassName || '';
        console.assert(addonClassName);
        if (sourceClassName.indexOf(addonClassName) >= 0)
            return sourceClassName;
        let className = `${sourceClassName} ${addonClassName}`;
        if (typeof element != 'string')
            element.className = className;
        return className;
    }
    jueying.appendClassName = appendClassName;
    function removeClassName(element, targetClassName) {
        let sourceClassName;
        if (typeof element == 'string')
            sourceClassName = element;
        else
            sourceClassName = element.className || '';
        if (sourceClassName.indexOf(targetClassName) < 0)
            return sourceClassName;
        sourceClassName = sourceClassName || '';
        sourceClassName = sourceClassName.replace(new RegExp(targetClassName, 'g'), '');
        sourceClassName = sourceClassName.trim();
        if (typeof element != 'string')
            element.className = sourceClassName;
        return sourceClassName;
    }
    jueying.removeClassName = removeClassName;
})(jueying || (jueying = {}));
//# sourceMappingURL=jueying.js.map
window['jueying'] = window['jueying'] || jueying 
                            
 return jueying;
            });
