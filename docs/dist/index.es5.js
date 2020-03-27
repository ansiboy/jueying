/*!
 * 
 *  maishu-jueying v2.7.0
 *  
 *  Copyright (C) maishu All rights reserved.
 *  
 *  组件设计器 
 *   
 *  作者: 麦舒
 *  日期: 2018/5/30
 *  
 *  个人博客：   http://www.cnblogs.com/ansiboy/
 *  GITHUB:     https://github.com/ansiboy/jueying
 *  QQ 讨论组：  119038574 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("$"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["$", "React"], factory);
	else if(typeof exports === 'object')
		exports["jueying"] = factory(require("$"), require("React"));
	else
		root["jueying"] = factory(root["$"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./out-es5/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/jquery.event.drag-2.2.js":
/*!**************************************!*\
  !*** ./lib/jquery.event.drag-2.2.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./lib/jquery.event.drag.live-2.2.js":
/*!*******************************************!*\
  !*** ./lib/jquery.event.drag.live-2.2.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./lib/jquery.event.drop-2.2.js":
/*!**************************************!*\
  !*** ./lib/jquery.event.drop-2.2.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./lib/jquery.event.drop.live-2.2.js":
/*!*******************************************!*\
  !*** ./lib/jquery.event.drop.live-2.2.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/decorators.js":
/*!************************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/decorators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** 组件标记，用于将指定的组件标记为可被外部加载 */
function component(options) {
    return function classDecorator(constructor) {
    };
}
exports.component = component;
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = __webpack_require__(/*! ./decorators */ "./node_modules/maishu-jueying-core/out/decorators.js");
exports.component = decorators_1.component;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/maishu-toolkit/out/callback.js":
/*!*****************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/callback.js ***!
  \*****************************************************/
/*! exports provided: Callback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return Callback; });
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


/***/ }),

/***/ "./node_modules/maishu-toolkit/out/data.js":
/*!*************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/data.js ***!
  \*************************************************/
/*! exports provided: DataSource, DataSourceSelectArguments, ArrayDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceSelectArguments", function() { return DataSourceSelectArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function() { return ArrayDataSource; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./node_modules/maishu-toolkit/out/errors.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/maishu-toolkit/out/callback.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let errors = Object.assign(_errors__WEBPACK_IMPORTED_MODULE_0__["errors"], {
    dataSourceCanntInsert() {
        return new Error("DataSource can not insert.");
    },
    dataSourceCanntDelete() {
        return new Error("DataSource can not delete.");
    },
    dataSourceCanntUpdate() {
        return new Error("DataSource can not update.");
    },
    primaryKeyNull(key) {
        let msg = `Primary key named '${key}' value is null.`;
        return new Error(msg);
    }
});
class DataSource {
    constructor(args) {
        this.inserting = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks1<DataSource<T>, T, number>();
        this.inserted = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.deleting = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<DataSource<T>, T>();
        this.deleted = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<DataSource<T>, T>();
        this.updating = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.updated = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.selecting = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.selected = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<DataSource<T>, DataSourceSelectResult<T>>();
        this.error = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<this, DataSourceError>();
        this.args = args;
        this.primaryKeys = args.primaryKeys || [];
    }
    ; //callbacks<DataSource<T>, DataSourceSelectArguments>();
    get canDelete() {
        return this.args.delete != null && this.primaryKeys.length > 0;
    }
    get canInsert() {
        return this.args.insert != null && this.primaryKeys.length > 0;
    }
    get canUpdate() {
        return this.args.update != null && this.primaryKeys.length > 0;
    }
    executeInsert(item, args) {
        return this.args.insert(item, args);
    }
    executeDelete(item, args) {
        return this.args.delete(item, args);
    }
    executeUpdate(item, args) {
        return this.args.update(item, args);
    }
    executeSelect(args) {
        args = args || {};
        return this.args.select(args);
    }
    insert(item, args, index) {
        if (!this.canInsert)
            throw errors.dataSourceCanntInsert();
        if (!item)
            throw errors.argumentNull("item");
        if (typeof args == 'number') {
            index = args;
            args = null;
        }
        this.inserting.fire({ sender: this, dataItem: item, index });
        return this.executeInsert(item, args).then((data) => {
            Object.assign(item, data);
            this.inserted.fire({ sender: this, dataItem: item, index });
            return data;
        }).catch(exc => {
            this.processError(exc, 'insert');
            throw exc;
        });
    }
    delete(item, args) {
        if (!this.canDelete)
            throw errors.dataSourceCanntDelete();
        if (!item)
            throw errors.argumentNull("item");
        this.checkPrimaryKeys(item);
        this.deleting.fire({ sender: this, dataItem: item });
        return this.executeDelete(item, args).then((data) => {
            this.deleted.fire({ sender: this, dataItem: item });
            return data;
        }).catch(exc => {
            this.processError(exc, 'delete');
            throw exc;
        });
    }
    update(item, args) {
        if (!this.canUpdate)
            throw errors.dataSourceCanntUpdate();
        if (!item)
            throw errors.argumentNull("item");
        this.checkPrimaryKeys(item);
        this.updating.fire({ sender: this, dataItem: item });
        return this.executeUpdate(item, args).then((data) => {
            Object.assign(item, data);
            this.updated.fire({ sender: this, dataItem: item });
            return data;
        }).catch((exc) => {
            this.processError(exc, 'update');
            throw exc;
        });
    }
    isSameItem(theItem, otherItem) {
        if (theItem == null)
            throw errors.argumentNull('theItem');
        if (otherItem == null)
            throw errors.argumentNull('otherItem');
        if (this.primaryKeys.length == 0)
            return theItem == otherItem;
        this.checkPrimaryKeys(theItem);
        this.checkPrimaryKeys(otherItem);
        for (let pk of this.primaryKeys) {
            if (theItem[pk] != otherItem[pk])
                return false;
        }
        return true;
    }
    checkPrimaryKeys(item) {
        for (let key in item) {
            if (item[key] == null && this.primaryKeys.indexOf(key) >= 0)
                throw errors.primaryKeyNull(key);
        }
    }
    select(args) {
        args = args || {};
        // fireCallback(this.selecting, this, args);
        this.selecting.fire({ sender: this, selectArguments: args });
        return this.executeSelect(args).then((data) => {
            let dataItems;
            let totalRowCount;
            if (Array.isArray(data)) {
                dataItems = data;
                totalRowCount = data.length;
            }
            else if (data.dataItems !== undefined && data.totalRowCount !== undefined) {
                dataItems = data.dataItems;
                totalRowCount = data.totalRowCount;
            }
            else {
                throw errors.queryResultTypeError();
            }
            this.selected.fire({ sender: this, selectResult: { totalRowCount, dataItems } });
            return { totalRowCount, dataItems };
        }).catch(exc => {
            this.processError(exc, 'select');
            throw exc;
        });
    }
    processError(exc, method) {
        exc.method = method;
        this.error.fire({ sender: this, error: exc });
        if (!exc.handled)
            throw exc;
    }
}
class DataSourceSelectArguments {
    constructor() {
        this.startRowIndex = 0;
        this.maximumRows = 2147483647;
    }
}
class ArrayDataSource extends DataSource {
    constructor(items) {
        super({
            select(args) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (args.sortExpression) {
                    }
                    let dataItems = items.slice(args.startRowIndex, args.startRowIndex + args.maximumRows);
                    let result = { dataItems, totalRowCount: items.length };
                    return result;
                });
            }
        });
    }
}
// }


/***/ }),

/***/ "./node_modules/maishu-toolkit/out/errors.js":
/*!***************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/errors.js ***!
  \***************************************************/
/*! exports provided: Errors, errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return errors; });
class Errors {
    argumentNull(argumentName) {
        let error = new Error(`Argument ${argumentName} cannt be null or emtpy.`);
        let name = "argumentNull";
        error.name = name;
        return error;
    }
    routeDataFieldNull(fieldName) {
        let msg = `The ${fieldName} field of route data cannt be null.`;
        let error = new Error(msg);
        let name = "routeDataFieldNull";
        error.name = name;
        return error;
    }
    argumentFieldNull(fieldName, argumentName) {
        let msg = `The ${fieldName} field of ${argumentName} cannt be null.`;
        let error = new Error(msg);
        let name = "argumentFieldNull";
        error.name = name;
        return error;
    }
    argumentTypeIncorrect(argumentName, expectedType) {
        let msg = `Argument ${argumentName} type error, expected type is ${expectedType}.`;
        let error = new Error(msg);
        let name = "argumentTypeIncorrect";
        error.name = name;
        return error;
    }
    queryResultTypeError() {
        let msg = 'Type of the query result is expected as Array or DataSourceSelectResult.';
        return new Error(msg);
    }
}
let errors = new Errors();


/***/ }),

/***/ "./node_modules/maishu-toolkit/out/guid.js":
/*!*************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/guid.js ***!
  \*************************************************/
/*! exports provided: guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return guid; });
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}


/***/ }),

/***/ "./node_modules/maishu-toolkit/out/index.js":
/*!**************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/index.js ***!
  \**************************************************/
/*! exports provided: guid, pathContact, Errors, errors, Callback, DataSource, DataSourceSelectArguments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid */ "./node_modules/maishu-toolkit/out/guid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return _guid__WEBPACK_IMPORTED_MODULE_0__["guid"]; });

/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "./node_modules/maishu-toolkit/out/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pathContact", function() { return _path__WEBPACK_IMPORTED_MODULE_1__["pathContact"]; });

/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./node_modules/maishu-toolkit/out/errors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_2__["Errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_2__["errors"]; });

/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./callback */ "./node_modules/maishu-toolkit/out/callback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return _callback__WEBPACK_IMPORTED_MODULE_3__["Callback"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./node_modules/maishu-toolkit/out/data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _data__WEBPACK_IMPORTED_MODULE_4__["DataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceSelectArguments", function() { return _data__WEBPACK_IMPORTED_MODULE_4__["DataSourceSelectArguments"]; });








/***/ }),

/***/ "./node_modules/maishu-toolkit/out/path.js":
/*!*************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/path.js ***!
  \*************************************************/
/*! exports provided: pathContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathContact", function() { return pathContact; });
/** 连接多个路径 */
function pathContact(...paths) {
    paths = paths || [];
    if (paths.length == 0)
        return "";
    if (paths.length == 1) {
        return paths[0];
    }
    let str = paths.join("");
    // 将一个或多个的 / 变为一个 /，例如：/shop/test// 转换为 /shop/test/
    str = str.replace(/\/+/g, '/');
    return str;
}


/***/ }),

/***/ "./out-es5/component-data-handler.js":
/*!*******************************************!*\
  !*** ./out-es5/component-data-handler.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentDataHandler = void 0;

var _errors = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

var _maishuToolkit = __webpack_require__(/*! maishu-toolkit */ "./node_modules/maishu-toolkit/out/index.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ComponentDataHandler =
/*#__PURE__*/
function () {
  function ComponentDataHandler(componentData) {
    _classCallCheck(this, ComponentDataHandler);

    this._components = {};
    this.componentSelected = _maishuToolkit.Callback.create();
    this.componentRemoved = _maishuToolkit.Callback.create();
    this.componentAppend = _maishuToolkit.Callback.create();
    this.componentUpdated = _maishuToolkit.Callback.create();
    this.pageDataChanged = _maishuToolkit.Callback.create();
    this._pageData = componentData;
    this.initComponentData(this._pageData);
  }
  /** 对 pageData 字段补全 */


  _createClass(ComponentDataHandler, [{
    key: "initComponentData",
    value: function initComponentData(componentData) {
      if (componentData == null) {
        return;
      }

      componentData.children = componentData.children || [];
      ComponentDataHandler.fillComponent(componentData);
      ComponentDataHandler.setComponetRefProp(componentData, this._components);
    }
    /** 获取已选择了的组件 */

  }, {
    key: "moveComponent",

    /**
     * 移动控件到另外一个控件容器
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param beforeChildId 组件的前一个子组件编号
     */
    value: function moveComponent(componentId, parentId, childComponentIndex) {
      var component = this.findComponentData(componentId);
      if (component == null) throw new Error("Cannt find component by id ".concat(componentId));
      console.assert(component != null, "Cannt find component by id ".concat(componentId));
      var pageData = this.pageData;
      console.assert(pageData.children != null);
      var children = pageData.children; //translateComponentDataChildren(pageData.children);

      this.removeComponentFrom(componentId, children);
      this.appendComponent(parentId, component, childComponentIndex);
    }
  }, {
    key: "updateComponentProps",
    value: function updateComponentProps(componentProps) {
      var componentDatas = [];

      for (var i = 0; i < componentProps.length; i++) {
        var _componentProps$i = componentProps[i],
            componentId = _componentProps$i.componentId,
            propName = _componentProps$i.propName,
            value = _componentProps$i.value;
        var componentData = this.findComponentData(componentId);
        if (componentData == null) continue;
        var navPropsNames = propName.split(".");
        console.assert(componentData != null);
        console.assert(navPropsNames != null, 'props is null');
        componentData.props = componentData.props || {};
        var obj = componentData.props;

        for (var _i = 0; _i < navPropsNames.length - 1; _i++) {
          obj = obj[navPropsNames[_i]] = obj[navPropsNames[_i]] || {};
        }

        obj[navPropsNames[navPropsNames.length - 1]] = value;
        componentDatas.push(componentData);
      }

      this.componentUpdated.fire(componentDatas);
    }
  }, {
    key: "findComponentData",
    value: function findComponentData(componentId) {
      var pageData = this._pageData;
      if (!pageData) throw _errors.Errors.pageDataIsNull(); // let stack = new Array<ComponentData>();
      // stack.push(pageData);
      // while (stack.length > 0) {
      //     let item = stack.pop();
      //     if (item == null)
      //         continue
      //     if (item.props.id == componentId)
      //         return item;
      //     let children = (item.children || []).filter(o => typeof o == 'object') as ComponentData[]
      //     stack.push(...children);
      // }

      var componentDatas = ComponentDataHandler.travelComponentData(pageData, function (item) {
        return item.id == componentId;
      });
      return componentDatas[0];
    }
  }, {
    key: "removeComponentFrom",
    value: function removeComponentFrom(controlId, collection) {
      var controlIndex = null;
      collection = collection || [];

      for (var i = 0; i < collection.length; i++) {
        var child = collection[i];
        if (typeof child == "string") continue;

        if (controlId == child.id) {
          controlIndex = i;
          break;
        }
      }

      if (controlIndex == null) {
        for (var _i2 = 0; _i2 < collection.length; _i2++) {
          var o = collection[_i2];
          if (typeof o == "string") continue;
          var children = o.children;

          if (children && children.length > 0) {
            var isRemoved = this.removeComponentFrom(controlId, children);

            if (isRemoved) {
              return true;
            }
          }
        }

        return false;
      }

      if (controlIndex == 0) {
        collection.shift();
      } else if (controlIndex == collection.length - 1) {
        collection.pop();
      } else {
        collection.splice(controlIndex, 1);
      }

      return true;
    }
  }, {
    key: "appendComponent",

    /**
     * 添加控件
     * @param parentId 父控件编号
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序
     */
    value: function appendComponent(parentId, componentData, componentIndex) {
      if (!parentId) throw _errors.Errors.argumentNull('parentId');
      if (!componentData) throw _errors.Errors.argumentNull('childComponent');
      this.initComponentData(componentData);
      var parentControl = this.findComponentData(parentId);
      if (parentControl == null) throw new Error('Parent is not exists');
      console.assert(parentControl != null);
      parentControl.children = parentControl.children || [];

      if (componentIndex != null) {
        parentControl.children.splice(componentIndex, 0, componentData);
      } else {
        parentControl.children.push(componentData);
      }

      this.selectComponents(componentData.id);
      this.componentAppend.fire(this);
    }
    /**
     * 对组件及其子控件进行命名
     * @param component
     */

  }, {
    key: "selectComponent",

    /**
     * 选择指定的控件
     * @param control 指定的控件
     */
    value: function selectComponent(componentId) {
      return this.selectComponents(componentId);
    }
    /**
     * 选择指定的控件，一个或多个
     * @param control 指定的控件
     */

  }, {
    key: "selectComponents",
    value: function selectComponents(componentIds) {
      if (typeof componentIds == 'string') componentIds = [componentIds];
      var stack = [];
      stack.push(this._pageData);

      while (stack.length > 0) {
        var item = stack.pop();
        var isSelectedControl = componentIds.indexOf(item.id) >= 0;
        item.selected = isSelectedControl;
        (item.children || []).forEach(function (child) {
          if (typeof child == "string") return true;
          stack.push(child);
        });
      }

      this.componentSelected.fire(this.selectedComponentIds);
    }
  }, {
    key: "removeComponent",
    value: function removeComponent(componentId) {
      return this.removeComponents([componentId]);
    }
    /** 移除控件 */

  }, {
    key: "removeComponents",
    value: function removeComponents(componentIds) {
      var _this = this;

      var pageData = this.pageData;
      if (!pageData || !pageData.children || pageData.children.length == 0) return;
      var children = pageData.children;
      componentIds.forEach(function (controlId) {
        _this.removeComponentFrom(controlId, children);
      });
      this.componentRemoved.fire(componentIds);
    }
  }, {
    key: "setComponentPosition",
    value: function setComponentPosition(componentId, position) {
      return this.setComponentsPosition([{
        componentId: componentId,
        position: position
      }]);
    }
  }, {
    key: "setComponentsPosition",
    value: function setComponentsPosition(positions) {
      var _this2 = this;

      var toUpdateProps = [];
      positions.forEach(function (o) {
        var componentId = o.componentId;
        var _o$position = o.position,
            left = _o$position.left,
            top = _o$position.top;

        var componentData = _this2.findComponentData(componentId);

        if (!componentData) throw new Error("Control ".concat(componentId, " is not exits."));
        var style = componentData.props.style = componentData.props.style || {};
        if (left) style.left = left;
        if (top) style.top = top;
        toUpdateProps.push({
          componentId: componentId,
          propName: "style",
          value: style
        });
      });
      this.updateComponentProps(toUpdateProps);
    }
    /**
    * 设置控件大小
    * @param componentId 组件编号
    * @param size 组件大小
    */

  }, {
    key: "setComponentSize",
    value: function setComponentSize(componentId, size) {
      console.assert(componentId != null);
      console.assert(size != null);
      var componentData = this.findComponentData(componentId);
      if (!componentData) throw new Error("Control ".concat(componentId, " is not exits."));
      var style = componentData.props.style = componentData.props.style || {};
      if (size.height) style.height = size.height;
      if (size.width) style.width = size.width; // this.componentUpdated.fire([componentData])

      this.updateComponentProps([{
        componentId: componentId,
        propName: "style",
        value: style
      }]);
    }
  }, {
    key: "selectedComponents",
    get: function get() {
      var arr = new Array();
      var stack = new Array();
      stack.push(this._pageData);

      while (stack.length > 0) {
        var item = stack.pop();
        if (item.props != null && item.selected == true) arr.push(item);
        (item.children || []).forEach(function (child) {
          if (typeof child == "string") return true;
          stack.push(child);
        });
      }

      return arr;
    }
    /** 获取已选择了的组件编号 */

  }, {
    key: "selectedComponentIds",
    get: function get() {
      return this.selectedComponents.map(function (o) {
        return o.id;
      });
    }
    /**  */

  }, {
    key: "components",
    get: function get() {
      return this._components;
    }
  }, {
    key: "pageData",
    get: function get() {
      return this._pageData;
    },
    set: function set(value) {
      this._pageData = value;
      this.initComponentData(value);
      this.pageDataChanged.fire(value);
    }
  }], [{
    key: "travelComponentData",
    value: function travelComponentData(pageData, filter) {
      var stack = new Array();
      stack.push(pageData);
      var r = []; // return new Promise((resolve, reject) => {

      filter = filter || function () {
        return true;
      };

      while (stack.length > 0) {
        var item = stack.shift();

        if (filter(item)) {
          r.push(item);
        } //===============================================
        // 子元素有可能为字符串, 过滤出对象


        var children = (item.children || []).filter(function (o) {
          return _typeof(o) == 'object';
        }); //===============================================

        stack.push.apply(stack, _toConsumableArray(children));
      }

      return r;
    }
  }, {
    key: "fillComponent",
    value: function fillComponent(component) {
      var namedComponents = {}; // let props: any = component.props = component.props || {};
      //==================================================
      // 兼容旧版本代码
      // if (props.id) {
      //     component.id = props.id;
      //     delete props.id;
      // }
      // if (props.parentId) {
      //     component.parentId = props.parentId;
      //     delete component.parentId;
      // }
      // if (props.selected) {
      //     component.selected = props.selected;
      // }
      // if (props.name) {
      //     component.name = props.name;
      //     delete props.name;
      // }
      // if (props.attr) {
      //     component.attr = props.attr;
      //     delete props.attr;
      // }
      //==================================================

      if (!component.name) {
        var num = 0;
        var name;

        do {
          num = num + 1;
          name = "".concat(component.type).concat(num);
        } while (namedComponents[name]);

        namedComponents[name] = component;
        component.name = name;
      }

      if (!component.id) component.id = (0, _maishuToolkit.guid)();
      component.children = component.children || [];

      if (!component.children || component.children.length == 0) {
        return;
      }

      component.children.forEach(function (child) {
        if (typeof child == "string") return true;
        ComponentDataHandler.fillComponent(child);
      });
    }
  }, {
    key: "setComponetRefProp",
    value: function setComponetRefProp(pageData, components) {
      //=========================================================
      // 纪录当前 pageData 控件 ID
      var componentIds = {}; //=========================================================

      ComponentDataHandler.travelComponentData(pageData).forEach(function (item) {
        console.assert(item.props != null && item.id != null);
        componentIds[item.type] = componentIds[item.type] || [];
        componentIds[item.type].push(item.props["id"]);
        var itemRef = item.props.ref;

        item.props.ref = function (e) {
          if (e != null) {
            components[item.type] = components[item.type] || [];
            components[item.type].push(e);
          }

          if (typeof itemRef == "function") itemRef(e);
        };
      }); //=========================================================
      // 仅保留 componentIds 中的控件 

      var names = Object.getOwnPropertyNames(components);

      var _loop = function _loop(i) {
        var typename = names[i];
        var ids = componentIds[typename] || [];
        components[typename] = (components[typename] || []).filter(function (o) {
          return ids.indexOf(o["id"] || o.props["id"]) >= 0;
        });
      };

      for (var i = 0; i < names.length; i++) {
        _loop(i);
      } //=========================================================

    }
  }]);

  return ComponentDataHandler;
}();

exports.ComponentDataHandler = ComponentDataHandler;
//# sourceMappingURL=component-data-handler.js.map


/***/ }),

/***/ "./out-es5/component-panel.js":
/*!************************************!*\
  !*** ./out-es5/component-panel.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentPanel = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _index = __webpack_require__(/*! ./components/index */ "./out-es5/components/index.js");

var _style = __webpack_require__(/*! ./style */ "./out-es5/style.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ComponentPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComponentPanel, _React$Component);

  function ComponentPanel(props) {
    var _this;

    _classCallCheck(this, ComponentPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComponentPanel).call(this, props));
    _this.state = {
      componets: []
    };
    _this.designer = _this.props.designer;
    return _this;
  }

  _createClass(ComponentPanel, [{
    key: "componentDraggable",
    value: function componentDraggable(toolItemElement, componentData) {
      console.assert(toolItemElement != null);
      toolItemElement.draggable = true;
      toolItemElement.addEventListener('dragstart', function (ev) {
        if (ev.dataTransfer == null) return;
        componentData.props = componentData.props || {};
        ev.dataTransfer.setData(_index.constants.componentData, JSON.stringify(componentData));
        ev.dataTransfer.setData('mousePosition', JSON.stringify({
          x: ev.offsetX,
          y: ev.offsetY
        }));
      });
    }
  }, {
    key: "setComponets",
    value: function setComponets(componets) {
      this.setState({
        componets: componets
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var empty = this.props.empty || React.createElement("div", {
        className: "empty"
      }, "\u6682\u65E0\u53EF\u7528\u7EC4\u4EF6");
      var props = Object.assign({}, this.props);
      var componets = this.state.componets || [];
      return React.createElement("ul", Object.assign({}, props, {
        className: "".concat(_style.classNames.componentPanel, " ").concat(this.props.className || ""),
        ref: function ref(e) {
          return _this2.toolbarElement = _this2.toolbarElement || e;
        }
      }), componets.length == 0 ? empty : componets.map(function (c, i) {
        var props = {
          key: i
        };
        props[ComponentPanel.componentIndexName] = "".concat(i);
        return React.createElement("li", Object.assign({}, props, {
          className: _style.classNames.componentIcon
        }), React.createElement("div", {
          className: "btn-link"
        }, React.createElement("i", {
          className: c.icon,
          style: {
            fontSize: 44,
            color: 'black'
          },
          ref: function ref(e) {
            if (!e) return;
            var ctrl = c.componentData;

            _this2.componentDraggable(e, ctrl);
          }
        })), React.createElement("div", null, c.displayName));
      }));
    }
  }, {
    key: "element",
    get: function get() {
      return this.toolbarElement;
    }
  }], [{
    key: "getComponentData",
    value: function getComponentData(dataTransfer) {
      var str = dataTransfer.getData(_index.constants.componentData);
      console.assert(str != null);
      return JSON.parse(str);
    }
    /** 获取光标在图标内的位置 */

  }, {
    key: "mouseInnerPosition",
    value: function mouseInnerPosition(dataTransfer) {
      var str = dataTransfer.getData('mousePosition');
      console.assert(str != null);
      return JSON.parse(str);
    }
  }]);

  return ComponentPanel;
}(React.Component);

exports.ComponentPanel = ComponentPanel;
ComponentPanel.componentIndexName = "data-component-index";
//# sourceMappingURL=component-panel.js.map


/***/ }),

/***/ "./out-es5/component-wrapper.js":
/*!**************************************!*\
  !*** ./out-es5/component-wrapper.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentWrapper = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _errors = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

var _componentPanel = __webpack_require__(/*! ./component-panel */ "./out-es5/component-panel.js");

var _style = __webpack_require__(/*! ./style */ "./out-es5/style.js");

var _component = __webpack_require__(/*! ./component */ "./out-es5/component.js");

var _index = __webpack_require__(/*! ./components/index */ "./out-es5/components/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 组件包装器，对组件进行包装，实现组件设计时的行为。
 * 1. 组件的移动
 * 2. 组件的拖放
 */
var ComponentWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComponentWrapper, _React$Component);

  function ComponentWrapper(props) {
    _classCallCheck(this, ComponentWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComponentWrapper).call(this, props));
  }

  _createClass(ComponentWrapper, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({
        error: error
      }); // You can also log the error to an error reporting service
      //   logErrorToMyService(error, info);

      debugger;
    }
  }, {
    key: "designtimeBehavior",
    value: function designtimeBehavior(element, attr) {
      if (!element) throw _errors.Errors.argumentNull('element');
      if (!attr) throw _errors.Errors.argumentNull('args');

      if (element.getAttribute('data-behavior')) {
        return;
      }

      element.setAttribute('data-behavior', 'behavior');
      var designer = this.props.handler;
      console.assert(attr.container != null);
      console.assert(attr.movable != null);

      if (attr.container) {
        ComponentWrapper.enableAppendDroppable(element, designer);
      }

      if (attr.movable) {
        console.assert(element != null);
        ComponentWrapper.draggable(designer, element);
        if (this.handler != null) ComponentWrapper.draggable(designer, element, this.handler);
      } else {
        element.onclick = function (ev) {
          return ComponentWrapper.invokeOnClick(ev, designer, element);
        };
      }
    }
    /**
     * 启用拖放操作，以便通过拖放图标添加控件
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.element) {
        return;
      }

      var attr = this.props.source.attr;
      this.designtimeBehavior(this.element, attr);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _ref = this.state || {},
          error = _ref.error;

      if (error) {
        return React.createElement("div", {
          className: "error"
        }, React.createElement("div", null, error.message), React.createElement("div", null, error.stack));
      }

      var attr = this.props.source.attr;
      var shouldWrapper = attr.resize || typeof this.props.source.type != 'string' && this.props.source.type != _index.MasterPage;

      if (!shouldWrapper) {
        return this.renderWidthoutWrapper();
      }

      var props = this.props.source.props;
      var style = props.style = JSON.parse(JSON.stringify(props.style || {})); // 深复制 style

      var top = style.top,
          left = style.left,
          position = style.position,
          width = style.width,
          height = style.height,
          display = style.display,
          visibility = style.visibility;
      var className = (0, _style.appendClassName)(props.className || '', _style.classNames.componentWrapper);
      className = props.selected ? (0, _style.appendClassName)(className, _style.classNames.componentSelected) : className;
      var wrapperProps = {
        id: props.id,
        className: className,
        style: {
          top: top,
          left: left,
          position: position,
          width: width,
          height: height,
          display: display,
          visibility: visibility
        },
        ref: function ref(e) {
          return _this.element = e || _this.element;
        }
      };
      var move_handle = props.selected && attr.showHandler ? React.createElement("div", {
        className: "move_handle",
        style: {},
        ref: function ref(e) {
          return _this.handler = e || _this.handler;
        }
      }) : null;
      var showResizeHandle = attr.resize && props.style.position == 'absolute' && props.selected;
      var source = this.props.source;

      if (props.style) {
        delete props.style.left;
        delete props.style.top;
        delete props.style.position;
        if (wrapperProps.style.width && wrapperProps.style.width != 'unset') props.style.width = '100%';
        if (wrapperProps.style.height && wrapperProps.style.height != 'unset') props.style.height = '100%';
      } // source.props.ref = function (e) {
      // };


      return React.createElement(_component.ComponentWrapperContext.Provider, {
        value: this
      }, React.createElement("div", Object.assign({}, wrapperProps), move_handle, showResizeHandle ? React.createElement(React.Fragment, null, React.createElement("div", {
        className: "resize_handle NE"
      }), React.createElement("div", {
        className: "resize_handle NN"
      }), React.createElement("div", {
        className: "resize_handle NW"
      }), React.createElement("div", {
        className: "resize_handle WW"
      }), React.createElement("div", {
        className: "resize_handle EE"
      }), React.createElement("div", {
        className: "resize_handle SW"
      }), React.createElement("div", {
        className: "resize_handle SS"
      }), React.createElement("div", {
        className: "resize_handle SE"
      })) : null, this.createRawElement(source.type, source.props, source.children)));
    }
  }, {
    key: "renderWidthoutWrapper",
    value: function renderWidthoutWrapper() {
      var _this2 = this;

      var _this$props$source = this.props.source,
          type = _this$props$source.type,
          props = _this$props$source.props,
          children = _this$props$source.children;
      var ref = props.ref;

      props.ref = function (e) {
        if (typeof ref == "function") ref(e);
        if (!e) return;

        if (e.tagName) {
          var attr = _this2.props.source.attr;

          _this2.designtimeBehavior(e, attr);

          return;
        }
      };

      if (props.selected) {
        props.className = (0, _style.appendClassName)(props.className || '', _style.classNames.componentSelected);
      }

      var element = this.createRawElement(type, props, children);
      return React.createElement(_component.ComponentWrapperContext.Provider, {
        value: this
      }, element);
    }
  }, {
    key: "createRawElement",
    value: function createRawElement(type, props, children) {
      var isEmptyElement = (children || []).length == 0;

      if (isEmptyElement) {
        var emtpy = this.designTimeEmptyElement(type, props);
        if (emtpy != null) children = [emtpy];
      }

      return React.createElement.apply(React, [type, props].concat(_toConsumableArray(children)));
    }
  }, {
    key: "designTimeEmptyElement",
    value: function designTimeEmptyElement(type, props) {
      if (type == 'input' || type == 'img' || type == 'meta' || type == 'link') return null;
      var typename = typeof type == 'string' ? type : type.name;
      var text = this.designTimeText(typename, props);
      return text;
    }
  }, {
    key: "designTimeText",
    value: function designTimeText(type, props) {
      var text = props.text;

      if (text) {
        return text;
      }

      text = text || props.name || type;
      return text;
    }
  }], [{
    key: "enableAppendDroppable",
    value: function enableAppendDroppable(element, designer) {
      console.assert(element != null);
      element.addEventListener('dragover', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.dataTransfer == null) return;
        var componentName = event.dataTransfer.getData(_index.constants.componentData);
        if (componentName) event.dataTransfer.dropEffect = "copy";else event.dataTransfer.dropEffect = "move";
        console.log("dragover: left:".concat(event['layerX'], " top:").concat(event['layerX']));
      });
      element.addEventListener("drop", function (event) {
        event.preventDefault();
        event.stopPropagation();
        var args1 = arguments[1];
        if (!event.dataTransfer) return;

        var ctrl = _componentPanel.ComponentPanel.getComponentData(event.dataTransfer);

        if (!ctrl) return;
        ctrl.props.style = ctrl.props.style || {};
        designer.pageData.props.style = designer.pageData.props.style || {};

        if (!ctrl.props.style.position) {
          ctrl.props.style.position = designer.pageData.props.style.position;
        }

        var pos = _componentPanel.ComponentPanel.mouseInnerPosition(event.dataTransfer);

        console.assert(pos != null);

        if (ctrl.props.style.position == 'absolute') {
          ctrl.props.style.left = event['layerX'] - pos.x;
          ctrl.props.style.top = event['layerY'] - pos.y;
        }

        designer.appendComponent(element.id, ctrl);
      });
    }
  }, {
    key: "isResizeHandleClassName",
    value: function isResizeHandleClassName(className) {
      var classNames = ['resize_handle NE', 'resize_handle NN', 'resize_handle NW', 'resize_handle WW', 'resize_handle EE', 'resize_handle SW', 'resize_handle SS', 'resize_handle SE'];
      return classNames.indexOf(className) >= 0;
    }
  }, {
    key: "draggable",
    value: function draggable(designer, element, handler) {
      if (!designer) throw _errors.Errors.argumentNull('designer');
      if (!element) throw _errors.Errors.argumentNull('element');
      console.assert(element.id != "");
      handler = handler || element;
      var componentId = element.id;
      console.assert(componentId != "");
      var startPos;
      var rect;
      var dragStart;
      $(handler).drag("init", function (ev) {
        startPos = $(element).position();
        if ($(this).is(".".concat(_style.classNames.componentSelected))) return $(".".concat(_style.classNames.componentSelected));
      }).drag('start', function (ev, dd) {
        dd.attr = $(ev.target).prop("className");
        dd.width = $(this).width() || 0;
        dd.height = $(this).height() || 0;
        dd.sourceElement = element;
        dragStart = Date.now();
      }).drag(function (ev, dd) {
        ev.preventDefault();
        ev.stopPropagation();
        console.log("drop:");
        console.log(dd.drop);
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

        if (dd.attr.indexOf("WW") >= 0) setLeft(dd);
        if (dd.attr.indexOf("NE") >= 0 || dd.attr.indexOf("NW") >= 0 || dd.attr.indexOf("SW") >= 0) setPosition(dd);
        if (dd.attr.indexOf("NN") >= 0) setTop(dd);

        if (dd.attr.indexOf("drag") > -1) {
          rect.top = dd.offsetY;
          rect.left = dd.offsetX;
        }

        if (!ComponentWrapper.isResizeHandleClassName(dd.attr)) {
          setPosition(dd);
        }

        if (dd.attr) $(this).css(rect);
      }, {
        click: true
      }).drag('end', function (ev, dd) {
        var interval = Date.now() - dragStart;
        ComponentWrapper.isDrag = interval >= 300;

        if (!ComponentWrapper.isResizeHandleClassName(dd.attr)) {
          var left = startPos.left + dd.deltaX;
          var top = startPos.top + dd.deltaY;
          designer.setComponentPosition(element.id, {
            left: left,
            top: top
          });
          element.style.transform = '';
        } else {
          var _left = null;
          var _top = null;
          if (dd.attr.indexOf("W") > -1) _left = startPos.left + dd.deltaX;
          if (dd.attr.indexOf("N") > -1) _top = startPos.top + dd.deltaY;
          element.style.transform = '';

          if (_left != null && _top != null) {
            designer.setComponentPosition(element.id, {
              left: _left,
              top: _top
            });
            designer.setComponentSize(componentId, rect);
          }
        }
      }).click(function (ev) {
        ComponentWrapper.invokeOnClick(ev, designer, element);
      });

      var setPosition = function setPosition(dd) {
        console.log(['dd.offsetX, dd.offsetY', dd.offsetX, dd.offsetY]);
        console.log(dd);
        element.style.transform = "translate(".concat(dd.deltaX, "px,").concat(dd.deltaY, "px)");
      };

      var setTop = function setTop(dd) {
        element.style.transform = "translateY(".concat(dd.deltaY, "px)");
      };

      var setLeft = function setLeft(dd) {
        element.style.transform = "translateX(".concat(dd.deltaX, "px)");
      };
    }
  }, {
    key: "invokeOnClick",
    value: function invokeOnClick(ev, designer, element) {
      ev.preventDefault();
      ev.stopPropagation();

      if (ComponentWrapper.isDrag) {
        ComponentWrapper.isDrag = false;
        return;
      }

      var elementID = element.id;

      if (!ev.ctrlKey) {
        designer.selectComponent(element.id);
        return;
      }

      var selectedControlIds = designer.selectedComponentIds;
      console.assert(elementID != "");

      if (selectedControlIds.indexOf(elementID) >= 0) {
        selectedControlIds = selectedControlIds.filter(function (o) {
          return o != elementID;
        });
      } else {
        selectedControlIds.push(elementID);
      }

      designer.selectComponents(selectedControlIds);
    }
  }]);

  return ComponentWrapper;
}(React.Component);

exports.ComponentWrapper = ComponentWrapper;
ComponentWrapper.isDrag = false; // export interface ComponentAttribute {
//     /** 表示组件为容器，可以添加组件 */
//     container?: boolean,
//     /** 表示组件可移动 */
//     movable?: boolean,
//     showHandler?: boolean,
//     resize?: boolean,
// }
//# sourceMappingURL=component-wrapper.js.map


/***/ }),

/***/ "./out-es5/component.js":
/*!******************************!*\
  !*** ./out-es5/component.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultComponentFactory = exports.Component = exports.ComponentWrapperContext = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _errors = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// type DesignerContextValue = { designer: ComponentDataHandler | null };
// export const DesignerContext = React.createContext<DesignerContextValue>({ designer: null });
var ComponentWrapperContext = React.createContext(null);
exports.ComponentWrapperContext = ComponentWrapperContext;

var Component =
/*#__PURE__*/
function () {
  function Component() {
    _classCallCheck(this, Component);
  }

  _createClass(Component, null, [{
    key: "setAttribute",

    /**
     * 设置组件特性
     * @param typename 组件类型名称
     * @param attr 组件特性
     */
    value: function setAttribute(typename, attr) {
      Component.componentAttributes[typename] = attr;
    }
    /**
     * 获取组件特性
     * @param typename 组件类型名称
     */

  }, {
    key: "getAttribute",
    value: function getAttribute(type) {
      var typename = typeof type == 'string' ? type : type.name;
      var attr = Component.componentAttributes[typename];
      return Object.assign({
        type: type
      }, Component.defaultComponentAttribute, attr || {});
    }
  }, {
    key: "getPropEditors",
    value: function getPropEditors(componentData) {
      var componentType = componentData.type;
      var result = [];
      var propEditorInfo = this.componentPropEditors[componentType] || [];

      for (var i = 0; i < propEditorInfo.length; i++) {
        var propName = propEditorInfo[i].propName;
        var display = Component.componentPropEditorDisplay["".concat(componentType, ".").concat(propName)];
        if (display != null && display(componentData) == false) continue;
        result.push(propEditorInfo[i]);
      }

      return result; // let classEditors = this.componentPropEditors[componentType] || []
      // Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
      // return classEditors
    }
  }, {
    key: "getPropEditor",
    value: function getPropEditor(controlClassName, propName) {
      return this.getPropEditorByArray(controlClassName, propName);
    }
    /** 通过属性数组获取属性的编辑器 */

  }, {
    key: "getPropEditorByArray",
    value: function getPropEditorByArray(controlClassName, propNames) {
      var classEditors = this.componentPropEditors[controlClassName] || [];
      var editor = classEditors.filter(function (o) {
        return o.propName == propNames;
      })[0];
      return editor;
    } // static setPropEditor(options: SetPropEditorOptions): void;
    // static setPropEditor(componentType: React.ComponentClass | string, propName: string, editorType: PropEditorConstructor, group?: string): void;
    // static setPropEditor(componentTypeOrOptions: React.ComponentClass | string | SetPropEditorOptions, propName?: string, editorType?: PropEditorConstructor, group?: string): void {

  }, {
    key: "setPropEditor",
    value: function setPropEditor(options) {
      // let componentType: React.ComponentClass | string;
      // let editorDisplay: ComponentPropEditorDisplay | null = null;
      // if (typeof componentTypeOrOptions == "object") {
      //     let options = componentTypeOrOptions as SetPropEditorOptions;
      //     componentType = options.componentType;
      //     propName = options.propName;
      //     editorType = options.editorType;
      //     group = options.group;
      //     editorDisplay = options.display;
      //     if (options.displayName != null) {
      //         proptDisplayNames[propName] = options.displayName;
      //     }
      // }
      // else {
      //     componentType = componentTypeOrOptions;
      // }
      var componentType = options.componentType,
          editorType = options.editorType,
          editorDisplay = options.display,
          group = options.group,
          propName = options.propName;
      if (editorDisplay == null) throw new Error("Editor display is null.");
      group = group || '';
      propName = propName || ""; // 属性可能为导航属性,例如 style.width

      var propNames = propName.split('.');
      var className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name;
      Component.componentPropEditorDisplay["".concat(className, ".").concat(propName)] = editorDisplay;
      var classProps = Component.componentPropEditors[className] = Component.componentPropEditors[className] || [];

      for (var i = 0; i < classProps.length; i++) {
        var propName1 = classProps[i].propName; //classProps[i].propNames.join('.')

        var propName2 = propNames.join('.');

        if (propName1 == propName2) {
          classProps[i].editorType = editorType;
          return;
        }
      }

      classProps.push({
        propName: propName,
        editorType: editorType,
        group: group
      });
    }
  }, {
    key: "createElement",
    value: function createElement(componentData) {
      // return Component._createElement(componentData, { components: [], componentTypes: [] }, h);
      return defaultComponentFactory(componentData);
    }
  }, {
    key: "register",
    value: function register(componentName, componentType, attr) {
      if (componentType == null && typeof componentName == 'function') {
        componentType = componentName;
        componentName = componentType.name;
        componentType['componentName'] = componentName;
      }

      if (!componentName) throw _errors.Errors.argumentNull('componentName');
      if (!componentType) throw _errors.Errors.argumentNull('componentType');
      Component.componentTypes[componentName] = componentType;
      if (attr) Component.setAttribute(componentName, attr);
    }
  }]);

  return Component;
}(); //==========================================
// 用于创建 React 的 React.Fragment 


exports.Component = Component;
Component.Fragment = ""; //==========================================

Component.defaultComponentAttribute = {
  container: false,
  movable: false,
  showHandler: false,
  resize: false
};
Component.componentAttributes = {
  'div': {
    container: true,
    movable: true,
    showHandler: true,
    resize: true
  },
  'img': {
    container: false,
    movable: true,
    resize: true
  },
  'label': {
    movable: true
  },
  'ul': {
    container: false,
    movable: true,
    showHandler: true,
    resize: false
  },
  'li': {
    container: true,
    movable: false
  },
  'table': {
    container: false,
    movable: true,
    showHandler: true,
    resize: true
  },
  'thead': {
    container: false,
    movable: false
  },
  'tbody': {
    container: false,
    movable: false
  },
  'tfoot': {
    container: false,
    movable: false
  },
  'tr': {
    container: false,
    movable: false
  },
  'td': {
    container: true,
    movable: false
  }
};
Component.componentPropEditors = {};
Component.componentPropEditorDisplay = {}; // /**
//  * 将持久化的元素数据转换为 ReactElement
//  * @param componentData 元素数据
//  */
// private static _createElement(componentData: ComponentData, context: CreateElementContext, h?: ComponentFactory): React.ReactElement<any> | null {
//     if (!componentData) throw Errors.argumentNull('componentData')
//     h = h || defaultComponentFactory;
//     try {
//         let type: string | React.ComponentClass | React.ComponentType = componentData.type;
//         let componentName = componentData.type;
//         let controlType = Component.componentTypes[componentName];
//         if (controlType) {
//             type = controlType;
//         }
//         let children: (React.ReactElement<any> | string)[] = [];
//         for (let i = 0; i < componentData.children.length; i++) {
//             let child = componentData.children[i];
//             if (typeof child == "string")
//                 children.push(child);
//             else
//                 children.push(Component._createElement(child, context, h));
//         }
//         //componentData.children ? componentData.children.map(o => Component._createElement(o, context, h)) : [];
//         let props: ComponentProps<any> = componentData.props == null ? {} : Object.assign({}, componentData.props);//JSON.parse(JSON.stringify(componentData.props));
//         if (controlType != null && controlType["defaultProps"]) {
//             props = Object.assign({}, controlType["defaultProps"], props);
//         }
//         let result: JSX.Element
//         if (typeof type == 'string') {
//             if (props.text) {
//                 children.push(props.text)
//             }
//             //=========================================
//             // props.text 非 DOM 的 prop，并且已经使用完
//             // delete props.text
//             // if (h == React.createElement) {
//             //     delete props.attr
//             // }
//             //=========================================
//         }
//         let masterPage: MasterPage;
//         type = type == Component.Fragment ? React.Fragment : type
//         let ref = props.ref;
//         props.ref = function (e: any) {
//             if (typeof ref == "function")
//                 ref(e);
//             if (e instanceof MasterPage) {
//                 masterPage = e;
//                 for (let i = 0; i < context.componentTypes.length; i++) {
//                     let typeName = context.componentTypes[i];
//                     let childComponents = masterPage.childComponents[typeName] = masterPage.childComponents[typeName] || [];
//                     childComponents.push(context.components[i]);
//                 }
//             }
//             else if (e != null) {
//                 context.components.push(e);
//                 context.componentTypes.push(typeof type == "string" ? type : type.name);
//                 // masterPage.componentCreated.fire({ component: e, type: typeof type == "string" ? type : type.name });
//             }
//         };
//         result = h(componentData);
//         return result
//     }
//     catch (e) {
//         console.error(e);
//         return null;
//     }
// }

Component.componentTypes = {};

var defaultComponentFactory = function defaultComponentFactory(c) {
  var children = (c.children || []).map(function (c) {
    return typeof c == "string" ? c : defaultComponentFactory(c);
  });
  var type = Component.componentTypes[c.type] || c.type;
  var e = React.createElement.apply(React, [type, c.props || {}].concat(_toConsumableArray(children)));
  return e;
};

exports.defaultComponentFactory = defaultComponentFactory;
//# sourceMappingURL=component.js.map


/***/ }),

/***/ "./out-es5/components/common.js":
/*!**************************************!*\
  !*** ./out-es5/components/common.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "guid", {
  enumerable: true,
  get: function get() {
    return _maishuToolkit.guid;
  }
});
exports.constants = exports.ComponentTypes = void 0;

var _maishuToolkit = __webpack_require__(/*! maishu-toolkit */ "./node_modules/maishu-toolkit/out/index.js");

var ComponentTypes = {
  Text: "Text",
  PageView: "PageView",
  PlaceHolder: "PlaceHolder"
};
exports.ComponentTypes = ComponentTypes;
var constants = {
  componentsDir: 'components',
  connectorElementClassName: 'component-container',
  componentTypeName: 'data-component-name',
  componentData: 'component-data',
  componentPosition: "component-position"
};
exports.constants = constants;
//# sourceMappingURL=common.js.map


/***/ }),

/***/ "./out-es5/components/index.js":
/*!*************************************!*\
  !*** ./out-es5/components/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ComponentTypes: true,
  constants: true
};
Object.defineProperty(exports, "ComponentTypes", {
  enumerable: true,
  get: function get() {
    return _common.ComponentTypes;
  }
});
Object.defineProperty(exports, "constants", {
  enumerable: true,
  get: function get() {
    return _common.constants;
  }
});

var _masterPage = __webpack_require__(/*! ./master-page */ "./out-es5/components/master-page.js");

Object.keys(_masterPage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _masterPage[key];
    }
  });
});

var _common = __webpack_require__(/*! ./common */ "./out-es5/components/common.js");
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./out-es5/components/master-page.js":
/*!*******************************************!*\
  !*** ./out-es5/components/master-page.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MasterPage = exports.MasterPageContext = exports.MasterPageName = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _component = __webpack_require__(/*! ../component */ "./out-es5/component.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MasterPageName = 'MasterPage';
exports.MasterPageName = MasterPageName;
var MasterPageContext = React.createContext({
  master: null
});
exports.MasterPageContext = MasterPageContext;

var MasterPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MasterPage, _React$Component);

  function MasterPage(props) {
    var _this;

    _classCallCheck(this, MasterPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MasterPage).call(this, props));
    _this.childComponents = {}; // let children: React.ReactElement<ComponentProps<any>>[] = MasterPage.children(props)

    _this.state = {};
    return _this;
  } // private static children(props: ComponentProps): React.ReactElement<ComponentProps<any>>[] {
  //     let arr = props.children == null ? [] :
  //         Array.isArray(props.children) ? props.children : [props.children];
  //     let children: React.ReactElement<ComponentProps<any>>[] = []
  //     arr.forEach(o => {
  //         if (!React.isValidElement(o))
  //             return
  //         children.push(o as React.ReactElement<ComponentProps<any>>)
  //     })
  //     return children
  // }
  // static getDerivedStateFromProps(props: ComponentProps) {
  //     let children: React.ReactElement<ComponentProps<any>>[] = MasterPage.children(props)
  //     return { children } as MasterPage["state"];
  // }


  _createClass(MasterPage, [{
    key: "render",
    value: function render() {
      // let props = {} as any
      // for (let key in this.props) {
      //     if (key == 'ref' || key == 'id')
      //         continue
      //     props[key] = this.props[key]
      // }
      // props.style = Object.assign({ minHeight: 40 }, props.style)
      // let children = this.state.children.filter(o => o.props.parentId == null);
      var master = this;
      console.assert(master != null);
      var children = this.props.children;
      return React.createElement(MasterPageContext.Provider, {
        value: {
          master: master
        }
      }, children);
    }
  }]);

  return MasterPage;
}(React.Component);

exports.MasterPage = MasterPage;

_component.Component.register(MasterPageName, MasterPage, {
  container: false
});
//# sourceMappingURL=master-page.js.map


/***/ }),

/***/ "./out-es5/editor-panel.js":
/*!*********************************!*\
  !*** ./out-es5/editor-panel.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorPanel = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propertyEditor = __webpack_require__(/*! ./property-editor */ "./out-es5/property-editor.js");

var _style = __webpack_require__(/*! ./style */ "./out-es5/style.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EditorPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditorPanel, _React$Component);

  // private designerComponentChanged: (args: any) => void
  function EditorPanel(props) {
    var _this;

    _classCallCheck(this, EditorPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditorPanel).call(this, props));
    _this.state = {
      componentDatas: []
    }; // this.designerComponentChanged = () => {
    //     console.assert(this.designer != null)
    //     this.setState({ designer: this.designer })
    // }

    return _this;
  }

  _createClass(EditorPanel, [{
    key: "render",
    // set designer(value) {
    //     if (this._designer) {
    //         this._designer.componentRemoved.remove(this.designerComponentChanged)
    //         this._designer.componentAppend.remove(this.designerComponentChanged)
    //         this._designer.componentUpdated.remove(this.designerComponentChanged)
    //         this._designer.componentSelected.remove(this.designerComponentChanged)
    //     }
    //     if (value) {
    //         value.componentRemoved.add(this.designerComponentChanged)
    //         value.componentAppend.add(this.designerComponentChanged)
    //         value.componentUpdated.add(this.designerComponentChanged)
    //         value.componentSelected.add(this.designerComponentChanged)
    //     }
    //     this._designer = value;
    //     this.setState({ designer: value });
    // }
    value: function render() {
      var _this2 = this;

      var empty = this.props.empty;
      empty = empty || React.createElement("div", {
        className: "empty"
      }, "\u6682\u65E0\u53EF\u7528\u7684\u5C5E\u6027");
      var designer = this.props.designer;
      return React.createElement("div", {
        className: "".concat(_style.classNames.editorPanel, " ").concat(this.props.className || ""),
        ref: function ref(e) {
          return _this2.element = e || _this2.element;
        }
      }, React.createElement(_propertyEditor.PropertyEditor, {
        designer: designer,
        ref: function ref(e) {
          return _this2.editor = e || _this2.editor;
        },
        empty: empty,
        customRender: this.props.customRender
      }));
    }
  }, {
    key: "designer",
    get: function get() {
      return this._designer;
    }
  }]);

  return EditorPanel;
}(React.Component);

exports.EditorPanel = EditorPanel;
//# sourceMappingURL=editor-panel.js.map


/***/ }),

/***/ "./out-es5/errors.js":
/*!***************************!*\
  !*** ./out-es5/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Errors = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors =
/*#__PURE__*/
function () {
  function Errors() {
    _classCallCheck(this, Errors);
  }

  _createClass(Errors, null, [{
    key: "placeHolderIdNull",
    value: function placeHolderIdNull() {
      var msg = "Place holder property id cannt be null or empty.";
      return new Error(msg);
    }
  }, {
    key: "fileNotExists",
    value: function fileNotExists(fileName) {
      return new Error("File '".concat(fileName, "' is not exists."));
    }
  }, {
    key: "argumentNull",
    value: function argumentNull(argumentName) {
      return new Error("Argument ".concat(argumentName, " is null or empty."));
    }
  }, {
    key: "argumentRangeError",
    value: function argumentRangeError(argumentName) {
      return new Error("Argument ".concat(argumentName, " range error."));
    }
  }, {
    key: "pageDataIsNull",
    value: function pageDataIsNull() {
      return new Error("Page data is null.");
    }
  }, {
    key: "toolbarRequiredKey",
    value: function toolbarRequiredKey() {
      return new Error("Toolbar has not a key prop.");
    }
  }, {
    key: "loadPluginFail",
    value: function loadPluginFail(pluginId) {
      return new Error("Load plugin '".concat(pluginId, "' fail."));
    }
  }, {
    key: "idRequired",
    value: function idRequired() {
      return new Error("Property id is required.");
    }
  }, {
    key: "canntFindMasterPage",
    value: function canntFindMasterPage(componentId) {
      return new Error("Can not find master page for component container ".concat(componentId, "."));
    }
  }, {
    key: "propCanntNull",
    value: function propCanntNull(componentName, property) {
      var msg = "".concat(componentName, " property ").concat(property, " cannt be null or empty.");
      return new Error(msg);
    }
  }, {
    key: "argumentFieldCanntNull",
    value: function argumentFieldCanntNull(fieldName, argumentName) {
      var msg = "".concat(fieldName, " of argument ").concat(argumentName, " cannt be null or empty.");
      return new Error(msg);
    }
  }]);

  return Errors;
}();

exports.Errors = Errors;
//# sourceMappingURL=errors.js.map


/***/ }),

/***/ "./out-es5/index.js":
/*!**************************!*\
  !*** ./out-es5/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  strings: true,
  proptDisplayNames: true,
  Component: true,
  ComponentPanel: true,
  EditorPanel: true,
  PageDesigner: true,
  PropEditor: true,
  TextInput: true,
  classNames: true,
  ComponentDataHandler: true,
  component: true
};
Object.defineProperty(exports, "strings", {
  enumerable: true,
  get: function get() {
    return _proptDisplayNames.proptDisplayNames;
  }
});
Object.defineProperty(exports, "proptDisplayNames", {
  enumerable: true,
  get: function get() {
    return _proptDisplayNames.proptDisplayNames;
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function get() {
    return _component.Component;
  }
});
Object.defineProperty(exports, "ComponentPanel", {
  enumerable: true,
  get: function get() {
    return _componentPanel.ComponentPanel;
  }
});
Object.defineProperty(exports, "EditorPanel", {
  enumerable: true,
  get: function get() {
    return _editorPanel.EditorPanel;
  }
});
Object.defineProperty(exports, "PageDesigner", {
  enumerable: true,
  get: function get() {
    return _pageDesigner.PageDesigner;
  }
});
Object.defineProperty(exports, "PropEditor", {
  enumerable: true,
  get: function get() {
    return _propEditor.PropEditor;
  }
});
Object.defineProperty(exports, "TextInput", {
  enumerable: true,
  get: function get() {
    return _propEditor.TextInput;
  }
});
Object.defineProperty(exports, "classNames", {
  enumerable: true,
  get: function get() {
    return _style.classNames;
  }
});
Object.defineProperty(exports, "ComponentDataHandler", {
  enumerable: true,
  get: function get() {
    return _componentDataHandler.ComponentDataHandler;
  }
});
Object.defineProperty(exports, "component", {
  enumerable: true,
  get: function get() {
    return _maishuJueyingCore.component;
  }
});

__webpack_require__(/*! ./jquery */ "./out-es5/jquery.js");

__webpack_require__(/*! ../lib/jquery.event.drag-2.2 */ "./lib/jquery.event.drag-2.2.js");

__webpack_require__(/*! ../lib/jquery.event.drag.live-2.2 */ "./lib/jquery.event.drag.live-2.2.js");

__webpack_require__(/*! ../lib/jquery.event.drop-2.2 */ "./lib/jquery.event.drop-2.2.js");

__webpack_require__(/*! ../lib/jquery.event.drop.live-2.2 */ "./lib/jquery.event.drop.live-2.2.js");

var _proptDisplayNames = __webpack_require__(/*! ./propt-display-names */ "./out-es5/propt-display-names.js");

var _component = __webpack_require__(/*! ./component */ "./out-es5/component.js");

var _componentPanel = __webpack_require__(/*! ./component-panel */ "./out-es5/component-panel.js");

var _editorPanel = __webpack_require__(/*! ./editor-panel */ "./out-es5/editor-panel.js");

var _pageDesigner = __webpack_require__(/*! ./page-designer */ "./out-es5/page-designer.js");

var _propEditor = __webpack_require__(/*! ./prop-editor */ "./out-es5/prop-editor.js");

var _style = __webpack_require__(/*! ./style */ "./out-es5/style.js");

var _componentDataHandler = __webpack_require__(/*! ./component-data-handler */ "./out-es5/component-data-handler.js");

var _index = __webpack_require__(/*! ./components/index */ "./out-es5/components/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});

var _maishuJueyingCore = __webpack_require__(/*! maishu-jueying-core */ "./node_modules/maishu-jueying-core/out/index.js");

Object.keys(_maishuJueyingCore).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _maishuJueyingCore[key];
    }
  });
});
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./out-es5/jquery.js":
/*!***************************!*\
  !*** ./out-es5/jquery.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var j = _interopRequireWildcard(__webpack_require__(/*! jquery */ "jquery"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// import * as j from '../lib/jquery-2.1.3'
// let jquery = window['$'] || window['jQuery'];
// if (jquery == null) {
//     window['$'] = window['jQuery'] = j
// }
var jquery = window['$'] || window['jQuery'];

if (jquery == null) {
  window["$"] = window["jQuery"] = j;
}
//# sourceMappingURL=jquery.js.map


/***/ }),

/***/ "./out-es5/page-designer.js":
/*!**********************************!*\
  !*** ./out-es5/page-designer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageDesigner = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _errors = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

var _component = __webpack_require__(/*! ./component */ "./out-es5/component.js");

var _style = __webpack_require__(/*! ./style */ "./out-es5/style.js");

var _componentWrapper = __webpack_require__(/*! ./component-wrapper */ "./out-es5/component-wrapper.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageDesigner =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageDesigner, _React$Component);

  function PageDesigner(props) {
    var _this;

    _classCallCheck(this, PageDesigner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageDesigner).call(this, props));
    _this.components = {};
    var pageData = _this.props.handler.pageData;

    _this.initPageData(pageData);

    _this.state = {
      pageData: pageData
    };

    _this.props.handler.componentSelected.add(function (args) {
      // this.componentSelected.fire(args);
      _this.setState({
        pageData: _this.props.handler.pageData
      });
    });

    _this.props.handler.componentRemoved.add(function (args) {
      // this.componentRemoved.fire(args);
      _this.setState({
        pageData: _this.props.handler.pageData
      });
    });

    _this.props.handler.componentUpdated.add(function (args) {
      // this.componentUpdated.fire(args);
      _this.setState({
        pageData: _this.props.handler.pageData
      });
    });

    _this.props.handler.pageDataChanged.add(function (args) {
      _this.setState({
        pageData: args
      });
    }); // this.componentAppend = Callback.create();
    // this.props.componentDataHandler.componentAppend.add(() => this.componentAppend.fire(this));


    return _this;
  }

  _createClass(PageDesigner, [{
    key: "setComponetRefProp",
    value: function setComponetRefProp(pageData) {
      var _this2 = this;

      //=========================================================
      // 纪录当前 pageData 控件 ID
      var componentIds = {}; //=========================================================

      PageDesigner.travelComponentData(pageData).forEach(function (item) {
        console.assert(item.props != null && item.id != null);
        componentIds[item.type] = componentIds[item.type] || [];
        componentIds[item.type].push(item.props["id"]);
        var itemRef = item.props.ref;

        item.props.ref = function (e) {
          if (e != null) {
            _this2.components[item.type] = _this2.components[item.type] || [];

            _this2.components[item.type].push(e);
          }

          if (typeof itemRef == "function") itemRef(e);
        };
      }); //=========================================================
      // 仅保留 componentIds 中的控件 

      var names = Object.getOwnPropertyNames(this.components);

      var _loop = function _loop(i) {
        var typename = names[i];
        var ids = componentIds[typename] || [];
        _this2.components[typename] = (_this2.components[typename] || []).filter(function (o) {
          return ids.indexOf(o["id"] || o.props["id"]) >= 0;
        });
      };

      for (var i = 0; i < names.length; i++) {
        _loop(i);
      } //=========================================================

    }
  }, {
    key: "initPageData",
    value: function initPageData(pageData) {
      if (pageData == null) {
        return;
      }

      pageData.children = pageData.children || []; // PageDesigner.nameComponent(pageData);

      this.setComponetRefProp(pageData);
    }
  }, {
    key: "allComponents",
    value: function allComponents() {
      var r = [];

      for (var key in this.components) {
        r.push.apply(r, _toConsumableArray(this.components[key]));
      }

      return r;
    }
    /** 页面数据 */

  }, {
    key: "updateComponentProp",
    value: function updateComponentProp(componentId, propName, value) {
      return this.updateComponentProps({
        componentId: componentId,
        propName: propName,
        value: value
      });
    }
  }, {
    key: "updateComponentProps",
    value: function updateComponentProps() {
      for (var _len = arguments.length, componentProps = new Array(_len), _key = 0; _key < _len; _key++) {
        componentProps[_key] = arguments[_key];
      }

      this.props.handler.updateComponentProps(componentProps);
    } // /**
    //  * 对组件及其子控件进行命名
    //  * @param component 
    //  */
    // private static nameComponent(component: ComponentData) {
    //     let namedComponents: { [key: string]: ComponentData } = {}
    //     let props = component.props = component.props || {};
    //     if (!props.name) {
    //         let num = 0;
    //         let name: string;
    //         do {
    //             num = num + 1;
    //             name = `${component.type}${num}`;
    //         } while (namedComponents[name]);
    //         namedComponents[name] = component
    //         props.name = name;
    //     }
    //     if (!props.id)
    //         props.id = guid();
    //     if (!component.children || component.children.length == 0) {
    //         return;
    //     }
    //     component.children.forEach(child => {
    //         if (typeof child == "string")
    //             return true;
    //         PageDesigner.nameComponent(child);
    //     })
    // }

    /**
     * 添加控件
     * @param parentId 父控件编号
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序
     */

  }, {
    key: "appendComponent",
    value: function appendComponent(parentId, componentData, componentIndex) {
      this.props.handler.appendComponent(parentId, componentData, componentIndex);
    }
    /**
     * 设置控件位置
     * @param componentId 组件编号
     * @param position 组件位置
     */

  }, {
    key: "setComponentPosition",
    value: function setComponentPosition(componentId, position) {
      return this.setComponentsPosition([{
        componentId: componentId,
        position: position
      }]);
    }
    /**
     * 设置控件大小
     * @param componentId 组件编号
     * @param size 组件大小
     */

  }, {
    key: "setComponentSize",
    value: function setComponentSize(componentId, size) {
      console.assert(componentId != null);
      console.assert(size != null);
      var componentData = this.findComponentData(componentId);
      if (!componentData) throw new Error("Control ".concat(componentId, " is not exits."));
      var style = componentData.props.style = componentData.props.style || {};
      if (size.height) style.height = size.height;
      if (size.width) style.width = size.width;
      var pageData = this.state.pageData;
      this.setState({
        pageData: pageData
      }); // this.componentUpdated.fire([componentData])
    }
  }, {
    key: "setComponentsPosition",
    value: function setComponentsPosition(positions) {
      var _this3 = this;

      var toUpdateProps = [];
      positions.forEach(function (o) {
        var componentId = o.componentId;
        var _o$position = o.position,
            left = _o$position.left,
            top = _o$position.top;

        var componentData = _this3.props.handler.findComponentData(componentId);

        if (!componentData) throw new Error("Control ".concat(componentId, " is not exits."));
        var style = componentData.props.style = componentData.props.style || {};
        if (left) style.left = left;
        if (top) style.top = top;
        toUpdateProps.push({
          componentId: componentId,
          propName: "style",
          value: style
        });
      });
      this.props.handler.updateComponentProps(toUpdateProps);
    }
    /**
     * 选择指定的控件
     * @param control 指定的控件
     */

  }, {
    key: "selectComponent",
    value: function selectComponent(componentIds) {
      this.props.handler.selectComponents(componentIds); //====================================================
      // 设置焦点，以便获取键盘事件

      if (this._element) this._element.focus(); //====================================================
    }
    /** 移除控件 */

  }, {
    key: "removeComponent",
    value: function removeComponent() {
      for (var _len2 = arguments.length, componentIds = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        componentIds[_key2] = arguments[_key2];
      }

      this.props.handler.removeComponents(componentIds);
    }
    /**
     * 移动控件到另外一个控件容器
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param targetComponentIndex 组件位置
     */

  }, {
    key: "moveComponent",
    value: function moveComponent(componentId, parentId, targetComponentIndex) {
      return this.props.handler.moveComponent(componentId, parentId, targetComponentIndex);
    }
  }, {
    key: "removeComponentFrom",
    value: function removeComponentFrom(controlId, collection) {
      var _this4 = this;

      var controlIndex = null;
      collection = collection || [];

      for (var i = 0; i < collection.length; i++) {
        var child = collection[i];
        if (typeof child == "string") continue;

        if (controlId == child.id) {
          controlIndex = i;
          break;
        }
      }

      if (controlIndex == null) {
        var _loop2 = function _loop2(_i) {
          var o = collection[_i];
          if (typeof o == "string") return "continue";
          var children = o.children || [];
          children.forEach(function (child) {
            if (typeof child == "string") return true;

            var isRemoved = _this4.removeComponentFrom(controlId, children);

            if (isRemoved) {
              return true;
            }
          });
        };

        for (var _i = 0; _i < collection.length; _i++) {
          var _ret = _loop2(_i);

          if (_ret === "continue") continue;
        }

        return false;
      }

      if (controlIndex == 0) {
        collection.shift();
      } else if (controlIndex == collection.length - 1) {
        collection.pop();
      } else {
        collection.splice(controlIndex, 1);
      }

      return true;
    }
  }, {
    key: "findComponentData",
    value: function findComponentData(componentId) {
      return this.props.handler.findComponentData(componentId);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var DELETE_KEY_CODE = 46;

      if (e.keyCode == DELETE_KEY_CODE) {
        if (this.selectedComponents.length == 0) return;
        this.props.handler.removeComponents(this.selectedComponentIds);
      }
    }
  }, {
    key: "createDesignTimeElement",
    value: function createDesignTimeElement(componentData) {
      //type: string | React.ComponentClass<any>, props: ComponentProps<any>, ...children: any[]
      var type = componentData.type,
          props = componentData.props,
          children = componentData.children;
      if (type == null) throw _errors.Errors.argumentFieldCanntNull("componentData", 'type');
      if (props == null) throw _errors.Errors.argumentNull('props');
      if (componentData.id == null) throw _errors.Errors.argumentFieldCanntNull('id', 'componentData');
      console.assert(componentData.id != null);
      if (componentData.id != null) props.key = componentData.id; //===================================================
      // 获取对象的 ComponentAttribute ，以从对象 props 中获取的为准

      var attr1 = _component.Component.getAttribute(type);

      console.assert(attr1 != null);
      var attr2 = componentData.attr || {};
      var attr = Object.assign({}, attr1, attr2); // delete props.attr
      //===================================================

      var className = componentData.selected ? (0, _style.appendClassName)(props.className || '', _style.classNames.componentSelected) : props.className;
      var wrapperProps = Object.assign({}, props);
      delete wrapperProps.ref;
      wrapperProps.className = className; // let context: Context = this.props.handler;
      // console.assert(context.handler != null);

      return React.createElement(_componentWrapper.ComponentWrapper, Object.assign({}, wrapperProps, {
        handler: this.props.handler,
        source: {
          type: type,
          attr: attr,
          props: props,
          children: typeof children == "string" ? [] : children || []
        }
      }));
    }
  }, {
    key: "findComponetsByTypeName",
    value: function findComponetsByTypeName(typeName) {
      this.components[typeName];
    }
  }, {
    key: "render",
    value: function render() {
      var pageData = this.state.pageData;
      if (pageData == null) return null;
      var componentFactory = this.props.componentFactory;
      if (componentFactory == null) return (0, _component.defaultComponentFactory)(pageData);
      return componentFactory(pageData);
    }
  }, {
    key: "pageData",
    get: function get() {
      return this.state.pageData;
    }
    /** 获取已选择了的组件编号 */

  }, {
    key: "selectedComponentIds",
    get: function get() {
      return this.selectedComponents.map(function (o) {
        return o.id;
      });
    }
    /** 获取已选择了的组件 */

  }, {
    key: "selectedComponents",
    get: function get() {
      return this.props.handler.selectedComponents;
    }
  }, {
    key: "element",
    get: function get() {
      return this._element;
    }
  }], [{
    key: "travelComponentData",
    value: function travelComponentData(pageData, filter) {
      var stack = new Array();
      stack.push(pageData);
      var r = []; // return new Promise((resolve, reject) => {

      filter = filter || function () {
        return true;
      };

      while (stack.length > 0) {
        var item = stack.shift();

        if (filter(item)) {
          r.push(item);
        } //===============================================
        // 子元素有可能为字符串, 过滤出对象


        var children = (item.children || []).filter(function (o) {
          return _typeof(o) == 'object';
        }); //===============================================

        stack.push.apply(stack, _toConsumableArray(children));
      }

      return r;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return {
        pageData: props.handler.pageData
      };
    }
  }]);

  return PageDesigner;
}(React.Component);

exports.PageDesigner = PageDesigner;
PageDesigner.defaultProps = {
  componentFactory: _component.defaultComponentFactory
};
//# sourceMappingURL=page-designer.js.map


/***/ }),

/***/ "./out-es5/prop-editor.js":
/*!********************************!*\
  !*** ./out-es5/prop-editor.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = exports.PropEditor = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var PropEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PropEditor, _React$Component);

  function PropEditor(props) {
    _classCallCheck(this, PropEditor);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropEditor).call(this, props));
  }

  _createClass(PropEditor, null, [{
    key: "dropdown",
    value: function dropdown(items, valueType) {
      return _dropdown(items, valueType);
    }
  }, {
    key: "textInput",
    value: function textInput() {
      return TextInput;
    }
  }]);

  return PropEditor;
}(React.Component);

exports.PropEditor = PropEditor;

var TextInput =
/*#__PURE__*/
function (_PropEditor) {
  _inherits(TextInput, _PropEditor);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextInput).apply(this, arguments));
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      var _this = this;

      var value = this.props.value;
      return React.createElement("input", {
        className: 'form-control',
        value: value || '',
        onChange: function onChange(e) {
          // this.setState({ value: e.target.value })
          _this.props.updateComponentProp(e.target.value);
        }
      });
    }
  }]);

  return TextInput;
}(PropEditor);

exports.TextInput = TextInput;

function _dropdown(items, valueType) {
  var itemsPromise;
  var textValues = [];

  if (valueType == null && Array.isArray(items)) {
    valueType = items.length > 0 && typeof items[0] == "number" ? "number" : "string";

    for (var i = 0; i < items.length; i++) {
      textValues[i] = {
        text: items[i],
        value: items[i]
      };
    }
  } else if (valueType == null) {
    valueType = "string";
    var propNames = Object.getOwnPropertyNames(items);

    for (var _i = 0; _i < propNames.length; _i++) {
      textValues[_i] = {
        text: items[propNames[_i]],
        value: propNames[_i]
      };
    }
  } else if (Array.isArray(items)) {
    textValues = items;
  } else {
    itemsPromise = items;
  }

  var Dropdown =
  /*#__PURE__*/
  function (_PropEditor2) {
    _inherits(Dropdown, _PropEditor2);

    function Dropdown(props) {
      var _this2;

      _classCallCheck(this, Dropdown);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
      _this2.state = {};
      return _this2;
    }

    _createClass(Dropdown, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        return __awaiter(this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var _items;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!itemsPromise) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 3;
                  return itemsPromise;

                case 3:
                  _items = _context.sent;
                  this.setState({
                    items: _items
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var items = this.state.items;
        var value = this.props.value;
        items = items || textValues;
        return React.createElement("select", {
          className: 'form-control',
          value: value == null ? "" : value,
          onChange: function onChange(e) {
            var textValue = e.target.value;

            if (valueType == "number") {
              var integerRegex = /^\d+$/;
              var floatRegex = /^[+-]?\d+(\.\d+)?$/;
              if (integerRegex.test(textValue)) value = parseInt(textValue);else if (floatRegex.test(textValue)) value = parseFloat(textValue);else value = null;
            } else {
              value = textValue;
            }

            _this3.props.updateComponentProp(value);
          }
        }, items.map(function (o) {
          return React.createElement("option", {
            key: o.value,
            value: o.value
          }, o.text);
        }));
      }
    }]);

    return Dropdown;
  }(PropEditor);

  return Dropdown;
}
//# sourceMappingURL=prop-editor.js.map


/***/ }),

/***/ "./out-es5/property-editor.js":
/*!************************************!*\
  !*** ./out-es5/property-editor.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBoundary = exports.PropertyEditor = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _component = __webpack_require__(/*! ./component */ "./out-es5/component.js");

var _proptDisplayNames = __webpack_require__(/*! ./propt-display-names */ "./out-es5/propt-display-names.js");

var _errors = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PropertyEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PropertyEditor, _React$Component);

  function PropertyEditor(props) {
    var _this;

    _classCallCheck(this, PropertyEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyEditor).call(this, props));
    _this._element = null;
    _this.state = {
      groupedEditors: []
    };

    _this.props.designer.componentSelected.add(function () {
      var editors = _this.getEditors(_this.props.designer);

      _this.setState({
        groupedEditors: editors
      });
    });

    return _this;
  } // static getDerivedStateFromProps(props: EditorProps, state: EditorState): Partial<EditorState> {
  //     return { designer: props.designer };
  // }


  _createClass(PropertyEditor, [{
    key: "getEditors",
    value: function getEditors(designer) {
      var _this2 = this;

      if (designer == null) {
        return [];
      } // 各个控件相同的编辑器


      var commonPropEditorInfos = [];
      var selectedComponents = designer.selectedComponents;

      var _loop = function _loop(i) {
        var componentData = selectedComponents[i];

        var propEditorInfos = _component.Component.getPropEditors(componentData);

        if (i == 0) {
          commonPropEditorInfos = propEditorInfos || [];
        } else {
          var items = [];
          commonPropEditorInfos.forEach(function (propInfo1) {
            propEditorInfos.forEach(function (propInfo2) {
              var propName1 = propInfo1.propName; //propInfo1.propNames.join('.')

              var propName2 = propInfo2.propName; //propInfo2.propNames.join('.')

              if (propInfo1.editorType == propInfo2.editorType && propName1 == propName2) {
                items.push(propInfo1);
              }
            });
          });
          commonPropEditorInfos = items;
        }
      };

      for (var i = 0; i < selectedComponents.length; i++) {
        _loop(i);
      } // 各个控件相同的属性值


      var commonFlatProps = {};

      for (var i = 0; i < selectedComponents.length; i++) {
        var control = selectedComponents[i];
        var controlProps = Object.assign({}, control.props);
        delete controlProps.children; // controlProps = this.flatProps(controlProps)

        if (i == 0) {
          commonFlatProps = controlProps;
        } else {
          var obj = {};

          for (var key in commonFlatProps) {
            if (commonFlatProps[key] == controlProps[key]) obj[key] = controlProps[key];
          }

          commonFlatProps = obj;
        }
      }

      var editors = [];

      var _loop2 = function _loop2(_i) {
        var propEditorInfo = commonPropEditorInfos[_i];
        var propName = propEditorInfo.propName;
        ;
        var editorType = propEditorInfo.editorType;

        var value = _this2.propValue(propName, commonFlatProps);

        var editorProps = {
          value: value,
          editComponents: selectedComponents,
          updateComponentProp: function updateComponentProp(value) {
            var componentProps = selectedComponents.map(function (o) {
              return {
                componentId: o.id,
                propName: propEditorInfo.propName,
                value: value
              };
            });
            designer.updateComponentProps(componentProps);
          }
        };
        var editor = React.createElement(editorType, editorProps);
        editors.push({
          prop: propEditorInfo.propName,
          editor: editor,
          group: propEditorInfo.group
        });
      };

      for (var _i = 0; _i < commonPropEditorInfos.length; _i++) {
        _loop2(_i);
      }

      return editors;
    }
  }, {
    key: "propValue",
    value: function propValue(propName, props) {
      if (!propName) throw _errors.Errors.argumentNull("propName");
      if (!props) throw _errors.Errors.argumentNull("props");
      var navPropsNames = propName.split(".");
      var obj = props;

      for (var i = 0; i < navPropsNames.length; i++) {
        obj = obj[navPropsNames[i]];
        if (obj == null) return null;
      }

      return obj;
    }
  }, {
    key: "render",
    value: function render() {
      var designer = this.props.designer;
      var editors = this.state.groupedEditors; //this.getEditors(designer)

      if (editors.length == 0) {
        var empty = this.props.empty;
        return React.createElement("div", {
          className: "text-center"
        }, empty);
      }

      if (this.props.customRender) {
        var items = editors.map(function (o) {
          return Object.assign({
            displayName: _proptDisplayNames.proptDisplayNames[o.prop] || o.prop
          }, o);
        });
        var r = this.props.customRender(designer.selectedComponents, items);

        if (r != null) {
          return r;
        }
      }

      var groupEditorsArray = [];

      var _loop3 = function _loop3(i) {
        var group = editors[i].group || '';
        var groupEditors = groupEditorsArray.filter(function (o) {
          return o.group == group;
        })[0];

        if (groupEditors == null) {
          groupEditors = {
            group: editors[i].group,
            editors: []
          };
          groupEditorsArray.push(groupEditors);
        }

        groupEditors.editors.push({
          prop: editors[i].prop,
          editor: editors[i].editor
        });
      };

      for (var i = 0; i < editors.length; i++) {
        _loop3(i);
      }

      return React.createElement(React.Fragment, null, groupEditorsArray.map(function (g) {
        return React.createElement("div", {
          key: g.group,
          className: "panel panel-default"
        }, g.group ? React.createElement("div", {
          className: "panel-heading"
        }, _proptDisplayNames.proptDisplayNames[g.group] || g.group) : null, React.createElement("div", {
          className: "panel-body"
        }, g.editors.map(function (o, i) {
          return React.createElement("div", {
            key: o.prop,
            className: "form-group clearfix"
          }, React.createElement("label", null, _proptDisplayNames.proptDisplayNames[o.prop] || o.prop), React.createElement("div", {
            className: "control"
          }, React.createElement(ErrorBoundary, null, o.editor)));
        })));
      }));
    }
  }, {
    key: "element",
    get: function get() {
      return this._element;
    }
  }]);

  return PropertyEditor;
}(React.Component);

exports.PropertyEditor = PropertyEditor;

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ErrorBoundary, _React$Component2);

  function ErrorBoundary(props) {
    var _this3;

    _classCallCheck(this, ErrorBoundary);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));
    _this3.state = {};
    return _this3;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({
        error: error
      }); // You can also log the error to an error reporting service
      //   logErrorToMyService(error, info);
    }
  }, {
    key: "render",
    value: function render() {
      var _ref = this.state || {},
          error = _ref.error;

      if (error) {
        // You can render any custom fallback UI
        return React.createElement("div", {
          className: "error"
        }, React.createElement("div", null, error.message), React.createElement("div", null, error.stack));
      }

      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(React.Component);

exports.ErrorBoundary = ErrorBoundary;
//# sourceMappingURL=property-editor.js.map


/***/ }),

/***/ "./out-es5/propt-display-names.js":
/*!****************************************!*\
  !*** ./out-es5/propt-display-names.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.proptDisplayNames = void 0;
var proptDisplayNames = {};
exports.proptDisplayNames = proptDisplayNames;
//# sourceMappingURL=propt-display-names.js.map


/***/ }),

/***/ "./out-es5/style.js":
/*!**************************!*\
  !*** ./out-es5/style.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendClassName = appendClassName;
exports.removeClassName = removeClassName;
exports.classNames = void 0;

var _errors = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

var classNames = {
  componentSelected: "component-selected",
  emptyTemplates: "empty-templates",
  loadingTemplates: "loading-templates",
  templateSelected: "template-selected",
  templateDialog: "template-dialog",
  emptyDocument: "empty-document",
  component: 'component',
  componentWrapper: 'component-wrapper',
  componentPanel: 'component-panel',
  componentIcon: 'component-icon',
  placeholder: 'placeholder',
  editorPanel: 'editor-panel',
  designer: 'designer',
  moveDown: 'move-down'
};
exports.classNames = classNames;
var templateDialog = {
  nameHeight: 40,
  fontSize: 22
};
var element = document.createElement('style');
element.type = 'text/css';
element.setAttribute("data-name", "jueying");
element.innerHTML = "\n            .".concat(classNames.componentSelected, " {\n                border: solid 1px #337ab7!important;\n            }\n            .").concat(classNames.componentSelected, " > :first-child {\n                border-color: blue;\n              }\n              .").concat(classNames.componentSelected, " .resize_handle {\n                position: absolute;\n                height: 6px;\n                width: 6px;\n                border: 1px solid #89B;\n                background: #9AC;\n              }\n              .").concat(classNames.componentSelected, " .move_handle {\n                height: 12px;\n                width: 12px;\n                top: 6px;\n                left: 8px;\n                border: solid 1px black;\n                position: relative;\n                margin-top: -12px;\n              }\n              .").concat(classNames.componentSelected, " .NW,\n              .").concat(classNames.componentSelected, " .NN,\n              .").concat(classNames.componentSelected, " .NE {\n                top: -4px;\n              }\n              .").concat(classNames.componentSelected, " .NE,\n              .").concat(classNames.componentSelected, " .EE,\n              .").concat(classNames.componentSelected, " .SE {\n                right: -4px;\n              }\n              .").concat(classNames.componentSelected, " .SW,\n              .").concat(classNames.componentSelected, ".SS,\n              .").concat(classNames.componentSelected, " .SE {\n                bottom: -4px;\n              }\n              .").concat(classNames.componentSelected, " .NW,\n              .").concat(classNames.componentSelected, " .WW,\n              .").concat(classNames.componentSelected, " .SW {\n                left: -4px;\n              }\n              .").concat(classNames.componentSelected, " .SE,\n              .").concat(classNames.componentSelected, " .NW {\n                cursor: nw-resize;\n              }\n              .").concat(classNames.componentSelected, " .SW,\n              .").concat(classNames.componentSelected, " .NE {\n                cursor: ne-resize;\n              }\n              .").concat(classNames.componentSelected, " .NN,\n              .").concat(classNames.componentSelected, " .SS {\n                cursor: n-resize;\n                left: 50%;\n                margin-left: -4px;\n              }\n              .").concat(classNames.componentSelected, " .EE,\n              .").concat(classNames.componentSelected, " .WW {\n                cursor: e-resize;\n                top: 50%;\n                margin-top: -4px;\n              }\n            .").concat(classNames.emptyTemplates, " {\n                padding:50px 0;\n                text-align: center;\n            }\n            .").concat(classNames.loadingTemplates, " {\n                padding:50px 0;\n                text-align: center;\n            }\n            .").concat(classNames.templateSelected, " .page-view {\n                border: solid 1px #337ab7!important;\n            }\n            .").concat(classNames.templateDialog, " .name {\n                margin-top: -").concat(templateDialog.nameHeight, "px;\n                height: ").concat(templateDialog.nameHeight, "px;\n                font-size: ").concat(templateDialog.fontSize, "px;\n                text-align: center;\n                padding-top: 6px;\n                background-color: black;\n                opacity: 0.5;\n            }\n            .").concat(classNames.templateDialog, " .name span {\n                color: white;\n            }\n            .").concat(classNames.emptyDocument, " {\n                text-align: center;\n                padding: 100px 0;\n            }\n            .").concat(classNames.component, " > .NW,\n            .").concat(classNames.component, " > .NN,\n            .").concat(classNames.component, " > .NE,\n            .").concat(classNames.component, " > .EE,\n            .").concat(classNames.component, " > .SE,\n            .").concat(classNames.component, " > .SW,\n            .").concat(classNames.component, " > .SS,\n            .").concat(classNames.component, " > .WW {\n                display: none;\n            }\n            .").concat(classNames.componentSelected, ".component > .NW,\n            .").concat(classNames.componentSelected, ".component > .NN,\n            .").concat(classNames.componentSelected, ".component > .NE,\n            .").concat(classNames.componentSelected, ".component > .EE,\n            .").concat(classNames.componentSelected, ".component > .SE,\n            .").concat(classNames.componentSelected, ".component > .SW,\n            .").concat(classNames.componentSelected, ".component > .SS,\n            .").concat(classNames.componentSelected, ".component > .WW {\n                display: block;\n            }\n            .").concat(classNames.placeholder, " {\n                min-height: 40px;\n                width: 100%;\n            }\n            .").concat(classNames.placeholder, ".active,\n            .").concat(classNames.componentWrapper, ".active,\n            .").concat(classNames.componentWrapper, ".").concat(classNames.componentSelected, ".active {\n                border: 1px solid green;\n            }\n            .").concat(classNames.editorPanel, " {\n                width: 300px;\n                background: white;\n                color: black;\n                margin: 0;\n                font-size: 14px;\n                z-index: 100;\n                overflow: auto;\n            }\n            .").concat(classNames.editorPanel, " label {\n                width: 80px;\n                float: left;\n                padding: 4px;\n                text-overflow: ellipsis;\n                overflow: hidden;\n            }\n            .").concat(classNames.editorPanel, " .control {\n                padding-left: 90px;\n            }\n            .").concat(classNames.editorPanel, " .empty {\n                padding-top: 200px;\n                text-align: center;\n            }\n            .").concat(classNames.designer, " .error,\n            .").concat(classNames.editorPanel, " .error {\n                color: red;\n            }\n            .").concat(classNames.componentPanel, " {\n                background: white;\n                color: black;\n                font-size: 14px;\n                z-index: 100;\n                list-style: none;\n                padding: 0;\n                text-align: center\n            }\n            .").concat(classNames.componentPanel, " .panel-heading {\n                text-align: center;\n            }\n            .").concat(classNames.componentPanel, " li {\n                text-align: center;\n                padding: 8px;\n            }\n            .").concat(classNames.componentWrapper, ".").concat(classNames.moveDown, " {\n         \n            }\n        ");

if (document.head != null) {
  document.head.appendChild(element);
}

function appendClassName(element, addonClassName) {
  if (element == null) throw _errors.Errors.argumentNull('element');
  if (!addonClassName) throw _errors.Errors.argumentNull('addonClassName');
  var sourceClassName;
  if (typeof element == 'string') sourceClassName = element;else sourceClassName = element.className;
  sourceClassName = sourceClassName || '';
  console.assert(addonClassName != null);
  if (sourceClassName.indexOf(addonClassName) >= 0) return sourceClassName;
  var className = "".concat(sourceClassName, " ").concat(addonClassName);
  if (typeof element != 'string') element.className = className;
  return className;
}

function removeClassName(element, targetClassName) {
  var sourceClassName;
  if (typeof element == 'string') sourceClassName = element;else sourceClassName = element.className || '';
  if (sourceClassName.indexOf(targetClassName) < 0) return sourceClassName;
  sourceClassName = sourceClassName || '';
  sourceClassName = sourceClassName.replace(new RegExp(targetClassName, 'g'), '');
  sourceClassName = sourceClassName.trim();
  if (typeof element != 'string') element.className = sourceClassName;
  return sourceClassName;
}
//# sourceMappingURL=style.js.map


/***/ }),

/***/ "jquery":
/*!********************!*\
  !*** external "$" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.es5.js.map