/*!
 * 
 *  maishu-jueying v2.0.5
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
		module.exports = factory(require("$"), require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["$", "React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["jueying"] = factory(require("$"), require("React"), require("ReactDOM"));
	else
		root["jueying"] = factory(root["$"], root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
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

/***/ "./out/common.js":
/*!***********************!*\
  !*** ./out/common.js ***!
  \***********************/
/*! exports provided: constants, proptDisplayNames, guid, Callback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proptDisplayNames", function() { return proptDisplayNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return guid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return Callback; });
let constants = {
    componentsDir: 'components',
    connectorElementClassName: 'component-container',
    componentTypeName: 'data-component-name',
    componentData: 'component-data',
    componentPosition: "component-position"
};
let proptDisplayNames = {};
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
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./out/component-panel.js":
/*!********************************!*\
  !*** ./out/component-panel.js ***!
  \********************************/
/*! exports provided: ComponentPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentPanel", function() { return ComponentPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./out/common.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./out/style.js");



class ComponentPanel extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = { componets: [] };
    }
    get element() {
        return this.toolbarElement;
    }
    componentDraggable(toolItemElement, componentData) {
        console.assert(toolItemElement != null);
        toolItemElement.draggable = true;
        toolItemElement.addEventListener('dragstart', function (ev) {
            componentData.props = componentData.props || {};
            ev.dataTransfer.setData(_common__WEBPACK_IMPORTED_MODULE_1__["constants"].componentData, JSON.stringify(componentData));
            ev.dataTransfer.setData('mousePosition', JSON.stringify({ x: ev.offsetX, y: ev.offsetY }));
        });
    }
    setComponets(componets) {
        this.setState({ componets });
    }
    static getComponentData(dataTransfer) {
        var str = dataTransfer.getData(_common__WEBPACK_IMPORTED_MODULE_1__["constants"].componentData);
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
        let empty = this.props.empty || react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "empty" }, "\u6682\u65E0\u53EF\u7528\u7EC4\u4EF6");
        let props = Object.assign({}, this.props);
        let componets = this.state.componets || [];
        // return <DesignerContext.Consumer>
        //     {context => {
        //         this.designer = context.designer;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", Object.assign({}, props, { className: `${_style__WEBPACK_IMPORTED_MODULE_2__["classNames"].componentPanel} ${this.props.className || ""}`, ref: (e) => this.toolbarElement = this.toolbarElement || e }), componets.length == 0 ? empty : componets.map((c, i) => {
            let props = { key: i };
            props[ComponentPanel.componentIndexName] = `${i}`;
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", Object.assign({}, props, { className: _style__WEBPACK_IMPORTED_MODULE_2__["classNames"].componentIcon }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "btn-link" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: c.icon, style: { fontSize: 44, color: 'black' }, ref: e => {
                            if (!e)
                                return;
                            let ctrl = c.componentData;
                            this.componentDraggable(e, ctrl);
                        } })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, c.displayName));
        }));
        // return <div {...props as any} className={`${classNames.componentPanel} panel panel-primary`}>
        //     <div className="panel-heading">工具栏</div>
        //     <div className="panel-body">
        //     </div>
        // </div>
        //     }}
        // </DesignerContext.Consumer>
    }
}
// designer: PageDesigner;
ComponentPanel.componentIndexName = "data-component-index";
//# sourceMappingURL=component-panel.js.map

/***/ }),

/***/ "./out/component-wrapper.js":
/*!**********************************!*\
  !*** ./out/component-wrapper.js ***!
  \**********************************/
/*! exports provided: ComponentWrapper, defaultComponentAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentWrapper", function() { return ComponentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultComponentAttribute", function() { return defaultComponentAttribute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./out/errors.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./out/common.js");
/* harmony import */ var _component_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-panel */ "./out/component-panel.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./out/style.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component */ "./out/component.js");
/// <reference path="./typings/declare.d.ts"/>






/**
 * 组件包装器，对组件进行包装，实现组件设计时的行为。
 * 1. 组件的移动
 * 2. 组件的拖放
 */
class ComponentWrapper extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ error });
        // You can also log the error to an error reporting service
        //   logErrorToMyService(error, info);
        debugger;
    }
    designtimeBehavior(element, attr) {
        if (!element)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentNull('element');
        if (!attr)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentNull('args');
        if (element.getAttribute('data-behavior')) {
            return;
        }
        element.setAttribute('data-behavior', 'behavior');
        let designer = this.props.designer;
        console.assert(attr.container != null);
        console.assert(attr.movable != null);
        if (attr.container) {
            ComponentWrapper.enableAppendDroppable(element, designer);
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
    static enableAppendDroppable(element, designer) {
        console.assert(element != null);
        element.addEventListener('dragover', function (event) {
            event.preventDefault();
            event.stopPropagation();
            let componentName = event.dataTransfer.getData(_common__WEBPACK_IMPORTED_MODULE_2__["constants"].componentData);
            if (componentName)
                event.dataTransfer.dropEffect = "copy";
            else
                event.dataTransfer.dropEffect = "move";
            console.log(`dragover: left:${event['layerX']} top:${event['layerX']}`);
        });
        element.addEventListener("drop", function (event) {
            event.preventDefault();
            event.stopPropagation();
            let args1 = arguments[1];
            if (!event.dataTransfer)
                return;
            let ctrl = _component_panel__WEBPACK_IMPORTED_MODULE_3__["ComponentPanel"].getComponentData(event.dataTransfer);
            if (!ctrl)
                return;
            ctrl.props.style = ctrl.props.style || {};
            designer.pageData.props.style = designer.pageData.props.style || {};
            if (!ctrl.props.style.position) {
                ctrl.props.style.position = designer.pageData.props.style.position;
            }
            let pos = _component_panel__WEBPACK_IMPORTED_MODULE_3__["ComponentPanel"].mouseInnerPosition(event.dataTransfer);
            console.assert(pos != null);
            if (ctrl.props.style.position == 'absolute') {
                ctrl.props.style.left = event['layerX'] - pos.x;
                ctrl.props.style.top = event['layerY'] - pos.y;
            }
            designer.appendComponent(element.id, ctrl);
        });
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
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentNull('designer');
        if (!element)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentNull('element');
        console.assert(element.id != "");
        handler = handler || element;
        let componentId = element.id;
        console.assert(componentId != "");
        let startPos;
        let rect;
        let dragStart;
        $(handler)
            .drag("init", function (ev) {
            startPos = $(element).position();
            if ($(this).is(`.${_style__WEBPACK_IMPORTED_MODULE_4__["classNames"].componentSelected}`))
                return $(`.${_style__WEBPACK_IMPORTED_MODULE_4__["classNames"].componentSelected}`);
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
            console.log(`drop:`);
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
        console.assert(elementID != "");
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
        let { error } = this.state || {};
        if (error) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "error" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, error.message),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, error.stack));
        }
        let attr = this.props.source.attr;
        let noWrapper = attr.noWrapper; //attr.resize || typeof this.props.source.type != 'string';// || (typeof this.props.source.type != 'string' && this.props.source.type != MasterPage)
        if (noWrapper) {
            return this.renderWidthoutWrapper();
        }
        let props = this.props.source.props;
        let style = props.style = JSON.parse(JSON.stringify(props.style || {})); // 深复制 style
        let { top, left, position, width, height, display, visibility } = style;
        let className = Object(_style__WEBPACK_IMPORTED_MODULE_4__["appendClassName"])(props.className || '', _style__WEBPACK_IMPORTED_MODULE_4__["classNames"].componentWrapper);
        className = props.selected ? Object(_style__WEBPACK_IMPORTED_MODULE_4__["appendClassName"])(className, _style__WEBPACK_IMPORTED_MODULE_4__["classNames"].componentSelected) : className;
        let wrapperProps = {
            id: props.id,
            className,
            style: { top, left, position, width, height, display, visibility },
            ref: (e) => this.element = e || this.element
        };
        let move_handle = props.selected && attr.showHandler ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "move_handle", style: {}, ref: e => this.handler = e || this.handler }) : null;
        let showResizeHandle = attr.resize && props.style.position == 'absolute' && props.selected;
        let source = this.props.source;
        if (props.style) {
            delete props.style.left;
            delete props.style.top;
            delete props.style.position;
            if (wrapperProps.style.width && wrapperProps.style.width != 'unset')
                props.style.width = '100%';
            if (wrapperProps.style.height && wrapperProps.style.height != 'unset')
                props.style.height = '100%';
        }
        // source.props.ref = function (e) {
        // };
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_component__WEBPACK_IMPORTED_MODULE_5__["ComponentWrapperContext"].Provider, { value: this },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object.assign({}, wrapperProps),
                move_handle,
                showResizeHandle ?
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resize_handle NE" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resize_handle NN" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resize_handle NW" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resize_handle WW" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resize_handle EE" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resize_handle SW" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resize_handle SS" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resize_handle SE" })) : null,
                this.createRawElement(source.type, source.props, source.children)));
    }
    renderWidthoutWrapper() {
        let { type, props, children } = this.props.source;
        let ref = props.ref;
        props.ref = (e) => {
            if (typeof ref == "function")
                ref(e);
            if (!e)
                return;
            if (e.tagName) {
                let attr = this.props.source.attr;
                this.designtimeBehavior(e, attr);
                return;
            }
        };
        if (props.selected) {
            props.className = Object(_style__WEBPACK_IMPORTED_MODULE_4__["appendClassName"])(props.className || '', _style__WEBPACK_IMPORTED_MODULE_4__["classNames"].componentSelected);
        }
        let element = this.createRawElement(type, props, children);
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_component__WEBPACK_IMPORTED_MODULE_5__["ComponentWrapperContext"].Provider, { value: this }, element);
    }
    createRawElement(type, props, children) {
        props = Object.assign({}, props);
        let isEmptyElement = (children || []).length == 0;
        if (isEmptyElement) {
            let emtpy = this.designTimeEmptyElement(type, props);
            if (emtpy != null)
                children = [emtpy];
        }
        if (typeof type == "string") {
            props["parent-id"] = props.parentId;
            delete props.parentId;
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](type, props, ...children);
    }
    designTimeEmptyElement(type, props) {
        if (type == 'input' || type == 'img' || type == 'meta' || type == 'link')
            return null;
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
}
ComponentWrapper.isDrag = false;
let defaultComponentAttribute = {
    container: false,
    movable: false,
    showHandler: false,
    resize: false,
    noWrapper: false,
};
//# sourceMappingURL=component-wrapper.js.map

/***/ }),

/***/ "./out/component.js":
/*!**************************!*\
  !*** ./out/component.js ***!
  \**************************/
/*! exports provided: ComponentWrapperContext, component, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentWrapperContext", function() { return ComponentWrapperContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-wrapper */ "./out/component-wrapper.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./out/errors.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./out/common.js");




const ComponentWrapperContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
function component(args) {
    return function (constructor) {
        // if (PageDesigner) {
        Component.setAttribute(constructor.name, args);
        // }
        Component.register(constructor.name, constructor);
        return constructor;
    };
}
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
        return Object.assign({ type }, _component_wrapper__WEBPACK_IMPORTED_MODULE_1__["defaultComponentAttribute"], attr || {});
    }
    static getPropEditors(componentData) {
        let componentType = typeof componentData == "string" ? "string" : componentData.type;
        let result = [];
        let propEditorInfo = this.componentPropEditors[componentType] || [];
        for (let i = 0; i < propEditorInfo.length; i++) {
            let propName = propEditorInfo[i].propName;
            let display = Component.componentPropEditorDisplay[`${componentType}.${propName}`];
            if (display != null && display(componentData) == false)
                continue;
            result.push(propEditorInfo[i]);
        }
        return result;
        // let classEditors = this.componentPropEditors[componentType] || []
        // Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
        // return classEditors
    }
    static getPropEditor(controlClassName, propName) {
        return this.getPropEditorByArray(controlClassName, propName);
    }
    /** 通过属性数组获取属性的编辑器 */
    static getPropEditorByArray(controlClassName, propNames) {
        let classEditors = this.componentPropEditors[controlClassName] || [];
        let editor = classEditors.filter(o => o.propName == propNames)[0];
        return editor;
    }
    static setPropEditor(componentTypeOrOptions, propName, editorType, group) {
        let componentType;
        let editorDisplay;
        if (typeof componentTypeOrOptions == "object") {
            let options = componentTypeOrOptions;
            componentType = options.componentType;
            propName = options.propName;
            editorType = options.editorType;
            group = options.group;
            editorDisplay = options.display;
            if (options.displayName != null) {
                _common__WEBPACK_IMPORTED_MODULE_3__["proptDisplayNames"][propName] = options.displayName;
            }
        }
        else {
            componentType = componentTypeOrOptions;
        }
        group = group || '';
        // 属性可能为导航属性,例如 style.width
        let propNames = propName.split('.');
        let className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name;
        Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
        let classProps = Component.componentPropEditors[className] = Component.componentPropEditors[className] || [];
        for (let i = 0; i < classProps.length; i++) {
            let propName1 = classProps[i].propName; //classProps[i].propNames.join('.')
            let propName2 = propNames.join('.');
            if (propName1 == propName2) {
                classProps[i].editorType = editorType;
                return;
            }
        }
        classProps.push({ propName, editorType, group });
    }
    static register(componentName, componentType, attr) {
        if (componentType == null && typeof componentName == 'function') {
            componentType = componentName;
            componentName = componentType.name;
            componentType['componentName'] = componentName;
        }
        if (!componentName)
            throw _errors__WEBPACK_IMPORTED_MODULE_2__["Errors"].argumentNull('componentName');
        if (!componentType)
            throw _errors__WEBPACK_IMPORTED_MODULE_2__["Errors"].argumentNull('componentType');
        Component.componentTypes[componentName] = componentType;
        if (attr)
            Component.setAttribute(componentName, attr);
    }
    static getComponentType(componentName) {
        let componentType = Component.componentTypes[componentName];
        return componentType;
    }
}
//==========================================
// 用于创建 React 的 React.Fragment 
Component.Fragment = "";
//==========================================
// private static defaultComponentAttribute: ComponentAttribute = {
//     container: false, movable: false, showHandler: false, resize: false
// }
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
Component.componentPropEditors = {};
Component.componentPropEditorDisplay = {};
Component.componentTypes = {};
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./out/editor-panel.js":
/*!*****************************!*\
  !*** ./out/editor-panel.js ***!
  \*****************************/
/*! exports provided: EditorPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorPanel", function() { return EditorPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _property_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-editor */ "./out/property-editor.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./out/style.js");



class EditorPanel extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = { componentDatas: [], designer: null };
        this.designerComponentChanged = () => {
            console.assert(this.designer != null);
            this.setState({ designer: this.designer });
        };
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
        this.setState({ designer: value });
    }
    render() {
        let { empty } = this.props;
        empty = empty || react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "empty" }, "\u6682\u65E0\u53EF\u7528\u7684\u5C5E\u6027");
        let { designer } = this.state;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: `${_style__WEBPACK_IMPORTED_MODULE_2__["classNames"].editorPanel} ${this.props.className || ""}`, ref: (e) => this.element = e || this.element },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_property_editor__WEBPACK_IMPORTED_MODULE_1__["PropertyEditor"], { designer: designer, ref: e => this.editor = e || this.editor, empty: empty, customRender: this.props.customRender }));
    }
}
//# sourceMappingURL=editor-panel.js.map

/***/ }),

/***/ "./out/error-boundary.js":
/*!*******************************!*\
  !*** ./out/error-boundary.js ***!
  \*******************************/
/*! exports provided: ErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return ErrorBoundary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ error });
        // You can also log the error to an error reporting service
        //   logErrorToMyService(error, info);
        debugger;
    }
    render() {
        let { error } = this.state || {};
        if (error) {
            // You can render any custom fallback UI
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "error" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, error.message),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, error.stack));
        }
        return this.props.children;
    }
}
//# sourceMappingURL=error-boundary.js.map

/***/ }),

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! exports provided: Errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors; });
class Errors {
    static placeHolderIdNull() {
        let msg = `Place holder property id cannt be null or empty.`;
        return new Error(msg);
    }
    static fileNotExists(fileName) {
        return new Error(`File '${fileName}' is not exists.`);
    }
    static argumentNull(argumentName) {
        return new Error(`Argument ${argumentName} is null or empty.`);
    }
    static argumentRangeError(argumentName) {
        return new Error(`Argument ${argumentName} range error.`);
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
    static canntFindMasterPage(componentId) {
        return new Error(`Can not find master page for component container ${componentId}.`);
    }
    static propCanntNull(componentName, property) {
        let msg = `${componentName} property ${property} cannt be null or empty.`;
        return new Error(msg);
    }
    static argumentFieldCanntNull(fieldName, argumentName) {
        let msg = `${fieldName} of argument ${argumentName} cannt be null or empty.`;
        return new Error(msg);
    }
    static componentDataNotExists(componentId) {
        let msg = `Component data ${componentId} is not exists.`;
        return new Error(msg);
    }
}
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! exports provided: strings, proptDisplayNames, Component, ComponentPanel, EditorPanel, PageDesigner, PropEditor, TextInput, classNames, PageBuilderContext, MasterPage, MasterPageContext, PlaceHolder, PageView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery */ "./out/jquery.js");
/* harmony import */ var _lib_jquery_event_drag_2_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/jquery.event.drag-2.2 */ "./lib/jquery.event.drag-2.2.js");
/* harmony import */ var _lib_jquery_event_drag_2_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_event_drag_2_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_jquery_event_drag_live_2_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/jquery.event.drag.live-2.2 */ "./lib/jquery.event.drag.live-2.2.js");
/* harmony import */ var _lib_jquery_event_drag_live_2_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_event_drag_live_2_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_jquery_event_drop_2_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/jquery.event.drop-2.2 */ "./lib/jquery.event.drop-2.2.js");
/* harmony import */ var _lib_jquery_event_drop_2_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_event_drop_2_2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_jquery_event_drop_live_2_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/jquery.event.drop.live-2.2 */ "./lib/jquery.event.drop.live-2.2.js");
/* harmony import */ var _lib_jquery_event_drop_live_2_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_event_drop_live_2_2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ "./out/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["proptDisplayNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "proptDisplayNames", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["proptDisplayNames"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component */ "./out/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_6__["Component"]; });

/* harmony import */ var _component_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component-panel */ "./out/component-panel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentPanel", function() { return _component_panel__WEBPACK_IMPORTED_MODULE_7__["ComponentPanel"]; });

/* harmony import */ var _editor_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor-panel */ "./out/editor-panel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorPanel", function() { return _editor_panel__WEBPACK_IMPORTED_MODULE_8__["EditorPanel"]; });

/* harmony import */ var _page_designer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-designer */ "./out/page-designer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageDesigner", function() { return _page_designer__WEBPACK_IMPORTED_MODULE_9__["PageDesigner"]; });

/* harmony import */ var _prop_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prop-editor */ "./out/prop-editor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropEditor", function() { return _prop_editor__WEBPACK_IMPORTED_MODULE_10__["PropEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return _prop_editor__WEBPACK_IMPORTED_MODULE_10__["TextInput"]; });

/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style */ "./out/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return _style__WEBPACK_IMPORTED_MODULE_11__["classNames"]; });

/* harmony import */ var _react_page_builder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./react-page-builder */ "./out/react-page-builder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageBuilderContext", function() { return _react_page_builder__WEBPACK_IMPORTED_MODULE_12__["PageBuilderContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MasterPage", function() { return _react_page_builder__WEBPACK_IMPORTED_MODULE_12__["MasterPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MasterPageContext", function() { return _react_page_builder__WEBPACK_IMPORTED_MODULE_12__["MasterPageContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaceHolder", function() { return _react_page_builder__WEBPACK_IMPORTED_MODULE_12__["PlaceHolder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageView", function() { return _react_page_builder__WEBPACK_IMPORTED_MODULE_12__["PageView"]; });














//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/jquery.js":
/*!***********************!*\
  !*** ./out/jquery.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
// import * as j from '../lib/jquery-2.1.3'
// let jquery = window['$'] || window['jQuery'];
// if (jquery == null) {
//     window['$'] = window['jQuery'] = j
// }

let jquery = window['$'] || window['jQuery'];
if (jquery == null) {
    window['$'] = window['jQuery'] = jquery__WEBPACK_IMPORTED_MODULE_0__;
}
//# sourceMappingURL=jquery.js.map

/***/ }),

/***/ "./out/page-designer.js":
/*!******************************!*\
  !*** ./out/page-designer.js ***!
  \******************************/
/*! exports provided: PageDesigner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDesigner", function() { return PageDesigner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./out/common.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./out/errors.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./out/style.js");
/* harmony import */ var _react_page_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./react-page-builder */ "./out/react-page-builder.js");





class PageDesigner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.componentSelected = _common__WEBPACK_IMPORTED_MODULE_1__["Callback"].create();
        this.componentRemoved = _common__WEBPACK_IMPORTED_MODULE_1__["Callback"].create();
        this.componentAppend = _common__WEBPACK_IMPORTED_MODULE_1__["Callback"].create();
        this.componentUpdated = _common__WEBPACK_IMPORTED_MODULE_1__["Callback"].create();
        this.designtimeComponentDidMount = _common__WEBPACK_IMPORTED_MODULE_1__["Callback"].create();
        // let components: PageDesignerState["components"] = {};
        // PageDesigner.fillPageData(props.pageData);
        this.state = {};
        this.designtimeComponentDidMount.add(() => {
            console.log(`this:designer event:controlComponentDidMount`);
        });
        let pageBuilderType = props.pageBuilderType || _react_page_builder__WEBPACK_IMPORTED_MODULE_4__["ReactPageBuilder"];
        this.pageBuilder = new pageBuilderType({ designer: this });
    }
    // private static setComponetRefProp(pageData: ComponentData, components: PageDesignerState["components"]) {
    //     //=========================================================
    //     // 纪录当前 pageData 控件 ID
    //     let componentIds: { [typeName: string]: string[] } = {};
    //     //=========================================================
    //     PageDesigner.travelComponentData(pageData).forEach(item => {
    //         console.assert(item.props != null && item.props.id != null);
    //         componentIds[item.type] = componentIds[item.type] || [];
    //         componentIds[item.type].push(item.props["id"] as string);
    //         let itemRef = item.props.ref;
    //         item.props.ref = (e) => {
    //             if (e != null) {
    //                 components[item.type] = components[item.type] || [];
    //                 components[item.type].push(e);
    //             }
    //             if (typeof itemRef == "function")
    //                 itemRef(e);
    //         }
    //     })
    //     //=========================================================
    //     // 仅保留 componentIds 中的控件 
    //     let names = Object.getOwnPropertyNames(components);
    //     for (let i = 0; i < names.length; i++) {
    //         let typename = names[i];
    //         let ids = componentIds[typename] || [];
    //         components[typename] = (components[typename] || []).filter(o => ids.indexOf(o["id"] || o.props["id"]) >= 0)
    //     }
    //     //=========================================================
    // }
    // /** 对 pageData 进行缺少的字段进行补充 */
    // private static fillPageData(pageData: ComponentData) {
    //     if (pageData == null) {
    //         return
    //     }
    //     pageData.children = pageData.children || [];
    //     PageDesigner.nameComponent(pageData);
    //     // PageDesigner.setComponetRefProp(pageData, components);
    // }
    // allComponents(): React.Component[] {
    //     let r: React.Component[] = [];
    //     for (let key in this.state.components) {
    //         r.push(...this.state.components[key]);
    //     }
    //     return r;
    // }
    /** 页面数据 */
    get pageData() {
        return this.props.pageData;
    }
    /** 获取已选择了的组件编号 */
    get selectedComponentIds() {
        return this.selectedComponents.map(o => o.props.id);
    }
    /** 获取已选择了的组件 */
    get selectedComponents() {
        let arr = new Array();
        let stack = new Array();
        stack.push(this.pageData);
        while (stack.length > 0) {
            let item = stack.pop();
            if (item.props != null && item.props.selected == true)
                arr.push(item);
            let children = item.children || [];
            for (let i = 0; i < children.length; i++)
                stack.push(children[i]);
        }
        return arr;
    }
    /** 更新组件属性 */
    updateComponentProp(componentId, propName, value) {
        return this.updateComponentProps({ componentId, propName, value });
    }
    /** 更新组件多个属性 */
    updateComponentProps(...componentProps) {
        let componentDatas = this.pageBuilder.updateComponentProps(componentProps);
        this.componentUpdated.fire(componentDatas);
    }
    /**
     * 对组件及其子控件进行命名
     * @param component
     */
    static nameComponent(component) {
        let namedComponents = {};
        let props = component.props = component.props || {};
        if (!props.name) {
            let num = 0;
            let name;
            do {
                num = num + 1;
                name = `${component.type}${num}`;
            } while (namedComponents[name]);
            namedComponents[name] = component;
            props.name = name;
        }
        if (!props.id)
            props.id = Object(_common__WEBPACK_IMPORTED_MODULE_1__["guid"])();
        if (!component.children || component.children.length == 0) {
            return;
        }
        for (let i = 0; i < component.children.length; i++) {
            PageDesigner.nameComponent(component.children[i]);
        }
    }
    /**
     * 添加控件
     * @param parentId 父控件编号
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序
     */
    appendComponent(parentId, componentData, componentIndex) {
        if (!parentId)
            throw _errors__WEBPACK_IMPORTED_MODULE_2__["Errors"].argumentNull('parentId');
        if (!componentData)
            throw _errors__WEBPACK_IMPORTED_MODULE_2__["Errors"].argumentNull('childComponent');
        this.pageBuilder.appendComponent(parentId, componentData, componentIndex);
        this.selectComponent(componentData.props.id);
        this.componentAppend.fire(this);
    }
    /**
     * 设置控件位置
     * @param componentId 组件编号
     * @param position 组件位置
     */
    setComponentPosition(componentId, position) {
        return this.setComponentsPosition([{ componentId, position }]);
    }
    /**
     * 设置控件大小
     * @param componentId 组件编号
     * @param size 组件大小
     */
    setComponentSize(componentId, size) {
        // console.assert(componentId != null)
        // console.assert(size != null)
        // let componentData = this.findComponentData(componentId);
        // if (!componentData)
        //     throw new Error(`Control ${componentId} is not exits.`);
        // let style = componentData.props.style = (componentData.props.style || {});
        // if (size.height)
        //     style.height = size.height
        // if (size.width)
        //     style.width = size.width
        // let { pageData } = this.state;
        // this.setState({ pageData });
        let componentDatas = this.pageBuilder.setComponentsSize([{ componentId, size }]);
        this.componentUpdated.fire(componentDatas);
    }
    /** 设置多个组件的位置 */
    setComponentsPosition(positions) {
        let componentDatas = this.pageBuilder.setComponentsPosition(positions);
        this.componentUpdated.fire(componentDatas);
    }
    /**
     * 选择指定的控件
     * @param control 指定的控件
     */
    selectComponent(componentIds) {
        let ids = typeof componentIds == "string" ? [componentIds] : componentIds;
        this.pageBuilder.selectComponents(ids);
        this.componentSelected.fire(ids);
    }
    /** 移除控件 */
    removeComponent(...componentIds) {
        if (!componentIds)
            throw _errors__WEBPACK_IMPORTED_MODULE_2__["Errors"].argumentNull("componentIds");
        this.pageBuilder.removeComponents(componentIds);
        this.componentRemoved.fire(componentIds);
    }
    /**
     * 移动控件到另外一个控件容器
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param beforeChildId 组件的前一个子组件编号
     */
    moveComponent(componentId, parentId, childComponentIndex) {
        this.pageBuilder.moveComponent(componentId, parentId, childComponentIndex);
    }
    // private static travelComponentData(pageData: ComponentData, filter?: (item: ComponentData) => boolean): ComponentData[] {
    //     let stack = new Array<ComponentData>();
    //     stack.push(pageData);
    //     let r: ComponentData[] = [];
    //     // return new Promise((resolve, reject) => {
    //     filter = filter || (() => true);
    //     while (stack.length > 0) {
    //         let item = stack.shift();
    //         if (filter(item)) {
    //             r.push(item);
    //         }
    //         //===============================================
    //         // 子元素有可能为字符串, 过滤出对象
    //         let children = (item.children || []).filter(o => typeof o == 'object') as ComponentData[]
    //         //===============================================
    //         stack.push(...children);
    //     }
    //     return r;
    // }
    // findComponetsByTypeName(componentTypeName: string) {
    //     let components = this.state.components[componentTypeName];
    //     return components;
    // }
    // findComponentData(componentId: string): ComponentData | null {
    //     let pageData = this.state.pageData;
    //     if (!pageData)
    //         throw Errors.pageDataIsNull();
    //     let componentDatas = PageDesigner.travelComponentData(pageData, (item) => item.props.id == componentId)
    //     return componentDatas[0];
    // }
    onKeyDown(e) {
        const DELETE_KEY_CODE = 46;
        if (e.keyCode == DELETE_KEY_CODE) {
            if (this.selectedComponents.length == 0)
                return;
            this.removeComponent(...this.selectedComponentIds);
        }
    }
    // private createDesignTimeElement(type: string | React.ComponentClass<any>, props: ComponentProps<any>, ...children: any[]) {
    //     if (type == null) throw Errors.argumentNull('type')
    //     if (props == null) throw Errors.argumentNull('props')
    //     if (props.id == null) throw Errors.argumentFieldCanntNull('id', 'props')
    //     console.assert(props.id != null)
    //     if (props.id != null)
    //         props.key = props.id;
    //     //===================================================
    //     // 获取对象的 ComponentAttribute ，以从对象 props 中获取的为准
    //     let attr1 = Component.getAttribute(type)
    //     console.assert(attr1 != null)
    //     let attr2 = props.attr || {}
    //     let attr = Object.assign({}, attr1, attr2)
    //     delete props.attr
    //     //===================================================
    //     let className = props.selected ? appendClassName(props.className || '', classNames.componentSelected) : props.className
    //     let wrapperProps = Object.assign({}, props);
    //     delete wrapperProps.ref;
    //     wrapperProps.className = className;
    //     return <ComponentWrapper {...wrapperProps} designer={this}
    //         source={{ type, attr, props, children }}>
    //     </ComponentWrapper>
    // }
    // static getDerivedStateFromProps(props: PageDesignerProps, state: PageDesignerState) {
    //     PageDesigner.fillPageData(props.pageData);
    //     return { pageData: props.pageData } as Partial<PageDesignerState>;
    // }
    componentDidMount() {
        this.pageBuilder.createPage(this.pageData, this.element);
    }
    render() {
        let style = this.props.style;
        let result = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _style__WEBPACK_IMPORTED_MODULE_3__["classNames"].designer, tabIndex: 1, style: style, onKeyDown: (e) => this.onKeyDown(e), ref: e => {
                this.element = e || this.element;
            } });
        return result;
    }
}
PageDesigner.defaultProps = { pageData: null, wrapDesignTimeElement: true };
//# sourceMappingURL=page-designer.js.map

/***/ }),

/***/ "./out/prop-editor.js":
/*!****************************!*\
  !*** ./out/prop-editor.js ***!
  \****************************/
/*! exports provided: PropEditor, TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropEditor", function() { return PropEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class PropEditor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    static dropdown(items, valueType) {
        return dropdown(items, valueType);
    }
    static textInput() {
        return TextInput;
    }
}
class TextInput extends PropEditor {
    render() {
        let { value } = this.props;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: 'form-control', value: value || '', onChange: e => {
                // this.setState({ value: e.target.value })
                this.props.updateComponentProp(e.target.value);
            } });
    }
}
function dropdown(items, valueType) {
    let itemsPromise;
    let textValues = [];
    if (valueType == null && Array.isArray(items)) {
        valueType = items.length > 0 && typeof items[0] == "number" ? "number" : "string";
        for (let i = 0; i < items.length; i++) {
            textValues[i] = { text: items[i], value: items[i] };
        }
    }
    else if (valueType == null) {
        valueType = "string";
        let propNames = Object.getOwnPropertyNames(items);
        for (let i = 0; i < propNames.length; i++) {
            textValues[i] = { text: items[propNames[i]], value: propNames[i] };
        }
    }
    else if (Array.isArray(items)) {
        textValues = items;
    }
    else {
        itemsPromise = items;
    }
    class Dropdown extends PropEditor {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentDidMount() {
            return __awaiter(this, void 0, void 0, function* () {
                if (itemsPromise) {
                    let items = yield itemsPromise;
                    this.setState({ items });
                }
            });
        }
        render() {
            let { items } = this.state;
            let { value } = this.props;
            items = items || textValues;
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: 'form-control', value: value == null ? "" : value, onChange: e => {
                    let textValue = e.target.value;
                    if (valueType == "number") {
                        let integerRegex = /^\d+$/;
                        let floatRegex = /^[+-]?\d+(\.\d+)?$/;
                        if (integerRegex.test(textValue))
                            value = parseInt(textValue);
                        else if (floatRegex.test(textValue))
                            value = parseFloat(textValue);
                        else
                            value = null;
                    }
                    else {
                        value = textValue;
                    }
                    this.props.updateComponentProp(value);
                } }, items.map(o => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { key: o.value, value: o.value }, o.text)));
        }
    }
    return Dropdown;
}
//# sourceMappingURL=prop-editor.js.map

/***/ }),

/***/ "./out/property-editor.js":
/*!********************************!*\
  !*** ./out/property-editor.js ***!
  \********************************/
/*! exports provided: PropertyEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyEditor", function() { return PropertyEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./out/component.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./out/common.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors */ "./out/errors.js");
/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-boundary */ "./out/error-boundary.js");





class PropertyEditor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this._element = null;
        this.state = { designer: this.props.designer };
    }
    static getDerivedStateFromProps(props, state) {
        return { designer: props.designer };
    }
    getEditors(designer) {
        if (designer == null) {
            return [];
        }
        // 各个控件相同的编辑器
        let commonPropEditorInfos = [];
        let selectedComponents = designer.selectedComponents;
        for (let i = 0; i < selectedComponents.length; i++) {
            let componentData = selectedComponents[i];
            let propEditorInfos = _component__WEBPACK_IMPORTED_MODULE_1__["Component"].getPropEditors(componentData);
            if (i == 0) {
                commonPropEditorInfos = propEditorInfos || [];
            }
            else {
                let items = [];
                commonPropEditorInfos.forEach(propInfo1 => {
                    propEditorInfos.forEach(propInfo2 => {
                        let propName1 = propInfo1.propName; //propInfo1.propNames.join('.')
                        let propName2 = propInfo2.propName; //propInfo2.propNames.join('.')
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
        for (let i = 0; i < selectedComponents.length; i++) {
            let control = selectedComponents[i];
            let controlProps = Object.assign({}, control.props);
            delete controlProps.children;
            // controlProps = this.flatProps(controlProps)
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
            let propName = propEditorInfo.propName;
            ;
            let editorType = propEditorInfo.editorType;
            let value = this.propValue(propName, commonFlatProps);
            let editorProps = {
                value: value,
                editComponents: selectedComponents,
                updateComponentProp: (value) => {
                    let componentProps = selectedComponents.map(o => ({
                        componentId: o.props.id, propName: propEditorInfo.propName, value
                    }));
                    designer.updateComponentProps(...componentProps);
                }
            };
            let editor = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](editorType, editorProps);
            editors.push({ prop: propEditorInfo.propName, editor, group: propEditorInfo.group });
        }
        return editors;
    }
    propValue(propName, props) {
        if (!propName)
            throw _errors__WEBPACK_IMPORTED_MODULE_3__["Errors"].argumentNull("propName");
        if (!props)
            throw _errors__WEBPACK_IMPORTED_MODULE_3__["Errors"].argumentNull("props");
        let navPropsNames = propName.split(".");
        let obj = props;
        for (let i = 0; i < navPropsNames.length; i++) {
            obj = obj[navPropsNames[i]];
            if (obj == null)
                return null;
        }
        return obj;
    }
    render() {
        let { designer } = this.state;
        let editors = this.getEditors(designer);
        if (editors.length == 0) {
            let empty = this.props.empty;
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-center" }, empty);
        }
        if (this.props.customRender) {
            let items = editors.map(o => Object.assign({ displayName: _common__WEBPACK_IMPORTED_MODULE_2__["proptDisplayNames"][o.prop] || o.prop }, o));
            let r = this.props.customRender(designer.selectedComponents, items);
            if (r != null) {
                return r;
            }
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
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, groupEditorsArray.map((g) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: g.group, className: "panel panel-default" },
            g.group ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "panel-heading" }, _common__WEBPACK_IMPORTED_MODULE_2__["proptDisplayNames"][g.group] || g.group) : null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "panel-body" }, g.editors.map((o, i) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: o.prop, className: "form-group clearfix" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, _common__WEBPACK_IMPORTED_MODULE_2__["proptDisplayNames"][o.prop] || o.prop),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "control" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_error_boundary__WEBPACK_IMPORTED_MODULE_4__["ErrorBoundary"], null, o.editor))))))));
    }
    get element() {
        return this._element;
    }
}
//# sourceMappingURL=property-editor.js.map

/***/ }),

/***/ "./out/react-page-builder.js":
/*!***********************************!*\
  !*** ./out/react-page-builder.js ***!
  \***********************************/
/*! exports provided: PageBuilderContext, ReactPageBuilder, MasterPageName, MasterPageContext, MasterPage, PlaceHolder, PageView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageBuilderContext", function() { return PageBuilderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactPageBuilder", function() { return ReactPageBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPageName", function() { return MasterPageName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPageContext", function() { return MasterPageContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPage", function() { return MasterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceHolder", function() { return PlaceHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageView", function() { return PageView; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./out/component.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./out/errors.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./out/style.js");
/* harmony import */ var _component_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-wrapper */ "./out/component-wrapper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common */ "./out/common.js");
/* harmony import */ var _component_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component-panel */ "./out/component-panel.js");








const PageBuilderContext = react__WEBPACK_IMPORTED_MODULE_4__["createContext"]({ pageBuilder: null });
/** 基于 ReactJS 的页面渲染器 */
class ReactPageBuilder {
    constructor(args) {
        if (!args)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentNull("args");
        this.designer = args.designer;
    }
    createDesignTimeElement(type, props, ...children) {
        if (type == null)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentNull('type');
        if (props == null)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentNull('props');
        if (props.id == null)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentFieldCanntNull('id', 'props');
        console.assert(props.id != null);
        if (props.id != null)
            props.key = props.id;
        //===================================================
        // 获取对象的 ComponentAttribute ，以从对象 props 中获取的为准
        let attr1 = _component__WEBPACK_IMPORTED_MODULE_0__["Component"].getAttribute(type);
        console.assert(attr1 != null);
        let attr2 = props.attr || {};
        let attr = Object.assign({}, attr1, attr2);
        delete props.attr;
        //===================================================
        let className = props.selected ? Object(_style__WEBPACK_IMPORTED_MODULE_2__["appendClassName"])(props.className || '', _style__WEBPACK_IMPORTED_MODULE_2__["classNames"].componentSelected) : props.className;
        let wrapperProps = Object.assign({}, props);
        delete wrapperProps.ref;
        wrapperProps.className = className;
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_component_wrapper__WEBPACK_IMPORTED_MODULE_3__["ComponentWrapper"], Object.assign({}, wrapperProps, { designer: this.designer, source: { type, attr, props, children } }));
    }
    createPage(pageData, pageElement) {
        if (!pageData)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentNull("pageData");
        if (!pageElement)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentNull("pageElement");
        ReactPageBuilder.fillPageData(pageData);
        this.pageData = pageData;
        this.pageElement = pageElement;
        this.render();
    }
    render() {
        console.assert(this.pageData.props.id != null);
        let c = ReactPageBuilder.createElement(this.pageData, this.createDesignTimeElement.bind(this));
        react_dom__WEBPACK_IMPORTED_MODULE_5__["render"](react__WEBPACK_IMPORTED_MODULE_4__["createElement"](PageBuilderContext.Provider, { value: { pageBuilder: this } }, c), this.pageElement);
    }
    updateComponentProps(componentProps) {
        let componentDatas = [];
        for (let i = 0; i < componentProps.length; i++) {
            let { componentId, propName, value } = componentProps[i];
            let componentData = this.findComponentData(componentId);
            if (componentData == null)
                continue;
            let navPropsNames = propName.split(".");
            console.assert(componentData != null);
            console.assert(navPropsNames != null, 'props is null');
            componentData.props = componentData.props || {};
            let obj = componentData.props;
            for (let i = 0; i < navPropsNames.length - 1; i++) {
                obj = obj[navPropsNames[i]] = obj[navPropsNames[i]] || {};
            }
            obj[navPropsNames[navPropsNames.length - 1]] = value;
            componentDatas.push(componentData);
        }
        this.render();
        return componentDatas;
    }
    setComponentsSize(componentSiezs) {
        let componentDatas = [];
        for (let i = 0; i < componentSiezs.length; i++) {
            let { componentId, size } = componentSiezs[i];
            let componentData = this.findComponentData(componentId);
            if (!componentData)
                throw new Error(`Control ${componentId} is not exits.`);
            componentDatas.push(componentData);
            let style = componentData.props.style = (componentData.props.style || {});
            if (size.height)
                style.height = size.height;
            if (size.width)
                style.width = size.width;
        }
        this.render();
        return componentDatas;
    }
    findComponentData(componentId) {
        let componentDatas = ReactPageBuilder.travelComponentData(this.pageData, (item) => item.props.id == componentId);
        return componentDatas[0];
    }
    /** 对 pageData 进行缺少的字段进行补充 */
    static fillPageData(pageData) {
        if (pageData == null) {
            return;
        }
        pageData.children = pageData.children || [];
        ReactPageBuilder.nameComponent(pageData);
        // PageDesigner.setComponetRefProp(pageData, components);
    }
    static travelComponentData(pageData, filter) {
        let stack = new Array();
        stack.push(pageData);
        let r = [];
        // return new Promise((resolve, reject) => {
        filter = filter || (() => true);
        while (stack.length > 0) {
            let item = stack.shift();
            if (filter(item)) {
                r.push(item);
            }
            //===============================================
            // 子元素有可能为字符串, 过滤出对象
            let children = (item.children || []).filter(o => typeof o == 'object');
            //===============================================
            stack.push(...children);
        }
        return r;
    }
    appendComponent(parentId, componentData, componentIndex) {
        if (!parentId)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentNull('parentId');
        if (!componentData)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentNull('childComponent');
        ReactPageBuilder.nameComponent(componentData);
        let parentControl = this.findComponentData(parentId);
        if (parentControl == null)
            throw new Error('Parent is not exists');
        console.assert(parentControl != null);
        parentControl.children = parentControl.children || [];
        if (componentIndex != null) {
            parentControl.children.splice(componentIndex, 0, componentData);
        }
        else {
            parentControl.children.push(componentData);
        }
        // let { pageData } = this.state;
        // this.setState({ pageData });
        // this.selectComponent(componentData.props.id);
        // this.componentAppend.fire(this)
        this.render();
    }
    /**
     * 选择指定的控件
     * @param control 指定的控件
     */
    selectComponents(componentIds) {
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
        // this.setState({ pageData: this.pageData })
        // this.componentSelected.fire(this.selectedComponentIds)
        this.render();
        //====================================================
        // 设置焦点，以便获取键盘事件
        this.pageElement.focus();
        //====================================================
    }
    setComponentsPosition(positions) {
        let componentDatas = new Array();
        positions.forEach(o => {
            let { componentId } = o;
            let { left, top } = o.position;
            let componentData = this.findComponentData(componentId);
            if (!componentData)
                throw new Error(`Control ${componentId} is not exits.`);
            let style = componentData.props.style = componentData.props.style || {};
            if (left)
                style.left = left;
            if (top)
                style.top = top;
            componentDatas.push(componentData);
        });
        this.render();
        return componentDatas;
    }
    removeComponents(componentIds) {
        let pageData = this.pageData;
        if (!pageData || !pageData.children || pageData.children.length == 0)
            return;
        componentIds.forEach(controlId => {
            this.removeComponentFrom(controlId, pageData.children);
        });
    }
    moveComponent(componentId, parentId, childComponentIndex) {
        let component = this.findComponentData(componentId);
        if (component == null)
            throw new Error(`Cannt find component by id ${componentId}`);
        console.assert(component != null, `Cannt find component by id ${componentId}`);
        let pageData = this.pageData;
        console.assert(pageData.children != null);
        this.removeComponentFrom(componentId, pageData.children);
        this.appendComponent(parentId, component, childComponentIndex);
    }
    removeComponentFrom(componentId, collection) {
        let compoentIndex = null;
        for (let i = 0; i < collection.length; i++) {
            if (componentId == collection[i].props.id) {
                compoentIndex = i;
                break;
            }
        }
        if (compoentIndex == null) {
            for (let i = 0; i < collection.length; i++) {
                let o = collection[i];
                if (o.children && o.children.length > 0) {
                    let isRemoved = this.removeComponentFrom(componentId, o.children);
                    if (isRemoved) {
                        return true;
                    }
                }
            }
            return false;
        }
        if (compoentIndex == 0) {
            collection.shift();
        }
        else if (compoentIndex == collection.length - 1) {
            collection.pop();
        }
        else {
            collection.splice(compoentIndex, 1);
        }
        return true;
    }
    /**
     * 对组件及其子控件进行命名
     * @param component
     */
    static nameComponent(component) {
        let namedComponents = {};
        let props = component.props = component.props || {};
        if (!props.name) {
            let num = 0;
            let name;
            do {
                num = num + 1;
                name = `${component.type}${num}`;
            } while (namedComponents[name]);
            namedComponents[name] = component;
            props.name = name;
        }
        if (!props.id)
            props.id = Object(_common__WEBPACK_IMPORTED_MODULE_6__["guid"])();
        if (!component.children || component.children.length == 0) {
            return;
        }
        for (let i = 0; i < component.children.length; i++) {
            ReactPageBuilder.nameComponent(component.children[i]);
        }
    }
    static createElement(componentData, h) {
        return ReactPageBuilder._createElement(componentData, { components: [], componentTypes: [] }, h);
    }
    /**
     * 将持久化的元素数据转换为 ReactElement
     * @param componentData 元素数据
     */
    static _createElement(componentData, context, h) {
        if (!componentData)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentNull('componentData');
        h = h || react__WEBPACK_IMPORTED_MODULE_4__["createElement"];
        try {
            let type = componentData.type;
            let componentName = componentData.type;
            let componentType = _component__WEBPACK_IMPORTED_MODULE_0__["Component"].getComponentType(componentName);
            if (componentType) {
                type = componentType;
            }
            let children = componentData.children ? componentData.children.map(o => ReactPageBuilder._createElement(o, context, h)) : [];
            let props = componentData.props == null ? {} : Object.assign({}, componentData.props); //JSON.parse(JSON.stringify(componentData.props));
            props.style = Object.assign({}, props.style || {});
            if (componentType != null && componentType["defaultProps"]) {
                props = Object.assign({}, componentType["defaultProps"], props);
            }
            let result;
            if (typeof type == 'string') {
                if (props.text) {
                    children.push(props.text);
                }
                //=========================================
                // props.text 非 DOM 的 prop，并且已经使用完
                delete props.text;
                if (h == react__WEBPACK_IMPORTED_MODULE_4__["createElement"]) {
                    delete props.attr;
                }
                //=========================================
            }
            let masterPage;
            type = type == _component__WEBPACK_IMPORTED_MODULE_0__["Component"].Fragment ? react__WEBPACK_IMPORTED_MODULE_4__["Fragment"] : type;
            let ref = props.ref;
            props.ref = function (e) {
                if (typeof ref == "function")
                    ref(e);
                if (e instanceof MasterPage) {
                    masterPage = e;
                    for (let i = 0; i < context.componentTypes.length; i++) {
                        let typeName = context.componentTypes[i];
                        let childComponents = masterPage.childComponents[typeName] = masterPage.childComponents[typeName] || [];
                        childComponents.push(context.components[i]);
                    }
                }
                else if (e != null) {
                    context.components.push(e);
                    context.componentTypes.push(typeof type == "string" ? type : type.name);
                    // masterPage.componentCreated.fire({ component: e, type: typeof type == "string" ? type : type.name });
                }
            };
            result = h(type, props, ...children);
            return result;
        }
        catch (e) {
            console.error(e);
            return null;
        }
    }
}
const MasterPageName = 'MasterPage';
const MasterPageContext = react__WEBPACK_IMPORTED_MODULE_4__["createContext"]({ master: null });
class MasterPage extends react__WEBPACK_IMPORTED_MODULE_4__["Component"] {
    constructor(props) {
        super(props);
        this.childComponents = {};
        let children = MasterPage.children(props);
        this.state = { children };
    }
    static children(props) {
        let arr = props.children == null ? [] :
            Array.isArray(props.children) ? props.children : [props.children];
        let children = [];
        arr.forEach(o => {
            if (!react__WEBPACK_IMPORTED_MODULE_4__["isValidElement"](o))
                return;
            children.push(o);
        });
        return children;
    }
    static getDerivedStateFromProps(props) {
        let children = MasterPage.children(props);
        return { children };
    }
    render() {
        let props = {};
        for (let key in this.props) {
            if (key == 'ref' || key == 'id')
                continue;
            props[key] = this.props[key];
        }
        props.style = Object.assign({ minHeight: 40 }, props.style);
        let children = this.state.children.filter(o => o.props.parentId == null);
        let master = this;
        console.assert(master != null);
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](MasterPageContext.Provider, { value: { master } }, children);
    }
}
_component__WEBPACK_IMPORTED_MODULE_0__["Component"].register(MasterPageName, MasterPage, { container: false, resize: false, noWrapper: true });
/**
 * 占位符，用于放置控件
 */
class PlaceHolder extends react__WEBPACK_IMPORTED_MODULE_4__["Component"] {
    constructor(props) {
        super(props);
        if (!this.props.id) {
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].placeHolderIdNull();
        }
    }
    /**
     * 启用拖放操作，以便通过拖放图标添加控件
     */
    enableAppendDroppable(element, master) {
        if (element.getAttribute('enable-append-droppable'))
            return;
        element.setAttribute('enable-append-droppable', 'true');
        console.assert(element != null);
        element.addEventListener('dragover', function (event) {
            event.preventDefault();
            event.stopPropagation();
            element.className = Object(_style__WEBPACK_IMPORTED_MODULE_2__["appendClassName"])(element.className || '', 'active');
            let componentName = event.dataTransfer.getData(_common__WEBPACK_IMPORTED_MODULE_6__["constants"].componentData);
            if (componentName)
                event.dataTransfer.dropEffect = "copy";
            else
                event.dataTransfer.dropEffect = "move";
            console.log(`dragover: left:${event.layerX} top:${event.layerX}`);
        });
        let func = function (event) {
            event.preventDefault();
            event.stopPropagation();
            element.className = Object(_style__WEBPACK_IMPORTED_MODULE_2__["removeClassName"])(element.className, 'active');
        };
        element.addEventListener('dragleave', func);
        element.addEventListener('dragend', func);
        element.addEventListener('dragexit', func);
        element.ondrop = (event) => {
            event.preventDefault();
            event.stopPropagation();
            element.className = Object(_style__WEBPACK_IMPORTED_MODULE_2__["removeClassName"])(element.className, 'active');
            let ctrl;
            if (event.dataTransfer)
                ctrl = _component_panel__WEBPACK_IMPORTED_MODULE_7__["ComponentPanel"].getComponentData(event.dataTransfer);
            if (!ctrl)
                return;
            console.assert(this.props.id != null);
            console.assert(this.designer != null);
            ctrl.props.parentId = this.props.id;
            console.assert(master != null, 'host is null');
            this.designer.appendComponent(master.props.id, ctrl);
        };
    }
    enableMoveDroppable(element, host) {
        if (element.getAttribute('enable-move-droppable'))
            return;
        element.setAttribute('enable-move-droppable', 'true');
        $(element)
            .drop('start', (event, dd) => {
            if (dd.sourceElement.id == this.wraper.props.source.props.id)
                return;
            Object(_style__WEBPACK_IMPORTED_MODULE_2__["appendClassName"])(element, 'active');
        })
            .drop('drop', (event, dd) => {
            if (dd.sourceElement.id == this.wraper.props.source.props.id)
                return;
            let componentData = this.designer.findComponentData(dd.sourceElement.id);
            console.assert(componentData != null);
            this.designer.moveComponent(dd.sourceElement.id, host.props.id);
            this.designer.updateComponentProps([{
                    componentId: "string", propName: "string", value: "any"
                }]); //dd.sourceElement.id, propName, this.props.id
        })
            .drop('end', (event, dd) => {
            if (dd.sourceElement.id == this.wraper.props.source.props.id)
                return;
            Object(_style__WEBPACK_IMPORTED_MODULE_2__["removeClassName"])(element, 'active');
        });
    }
    render() {
        let empty = this.props.empty || react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { key: Object(_common__WEBPACK_IMPORTED_MODULE_6__["guid"])(), className: "empty" }, "\u53EF\u4EE5\u62D6\u62C9\u63A7\u4EF6\u5230\u8FD9\u91CC");
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](MasterPageContext.Consumer, null, (args) => {
            let master = args.master;
            if (master == null)
                throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].canntFindMasterPage(this.props.id);
            let children = [];
            if (master.props && master.props.children) {
                let arr;
                if (Array.isArray(master.props.children)) {
                    arr = master.props.children;
                }
                else {
                    arr = [master.props.children];
                }
                children = arr.filter((o) => o.props.parentId != null && o.props.parentId == this.props.id);
            }
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](PageBuilderContext.Consumer, null, args => {
                return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_component__WEBPACK_IMPORTED_MODULE_0__["ComponentWrapperContext"].Consumer, null, wraper => {
                    this.wraper = wraper;
                    console.assert(this.wraper != null);
                    if (args.pageBuilder != null && children.length == 0) {
                        children = [empty];
                    }
                    let element = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null,
                        this.props.children,
                        children);
                    if (args.pageBuilder) {
                        this.designer = args.pageBuilder;
                        element = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { key: Object(_common__WEBPACK_IMPORTED_MODULE_6__["guid"])(), className: _style__WEBPACK_IMPORTED_MODULE_2__["classNames"].placeholder, ref: e => {
                                if (!e)
                                    return;
                                this.element = e;
                                this.enableAppendDroppable(e, master);
                                this.enableMoveDroppable(e, master);
                            } }, element);
                    }
                    return element;
                });
            });
        });
    }
}
_component__WEBPACK_IMPORTED_MODULE_0__["Component"].register('PlaceHolder', PlaceHolder, { resize: false, movable: false, container: true });
/** 用于将 ComponentData 显示为组件 */
class PageView extends react__WEBPACK_IMPORTED_MODULE_4__["Component"] {
    constructor(props) {
        super(props);
        if (!this.props.pageData)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].propCanntNull(PageView.name, 'pageData');
    }
    render() {
        let element = ReactPageBuilder.createElement(this.props.pageData);
        return element;
    }
}
//# sourceMappingURL=react-page-builder.js.map

/***/ }),

/***/ "./out/style.js":
/*!**********************!*\
  !*** ./out/style.js ***!
  \**********************/
/*! exports provided: classNames, appendClassName, removeClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendClassName", function() { return appendClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClassName", function() { return removeClassName; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./out/errors.js");

let classNames = {
    componentSelected: `component-selected`,
    emptyTemplates: `empty-templates`,
    loadingTemplates: `loading-templates`,
    templateSelected: `template-selected`,
    templateDialog: `template-dialog`,
    emptyDocument: `empty-document`,
    component: 'component',
    componentWrapper: 'component-wrapper',
    componentPanel: 'component-panel',
    componentIcon: 'component-icon',
    placeholder: 'placeholder',
    editorPanel: 'editor-panel',
    designer: 'designer',
    moveDown: 'move-down',
};
let templateDialog = {
    nameHeight: 40,
    fontSize: 22
};
let element = document.createElement('style');
element.type = 'text/css';
element.setAttribute("data-name", "jueying");
element.innerHTML = `
            .${classNames.componentSelected} {
                border: solid 1px #337ab7!important;
            }
            .${classNames.componentSelected} > :first-child {
                border-color: blue;
              }
              .${classNames.componentSelected} .resize_handle {
                position: absolute;
                height: 6px;
                width: 6px;
                border: 1px solid #89B;
                background: #9AC;
              }
              .${classNames.componentSelected} .move_handle {
                height: 12px;
                width: 12px;
                top: 6px;
                left: 8px;
                border: solid 1px black;
                position: relative;
                margin-top: -12px;
              }
              .${classNames.componentSelected} .NW,
              .${classNames.componentSelected} .NN,
              .${classNames.componentSelected} .NE {
                top: -4px;
              }
              .${classNames.componentSelected} .NE,
              .${classNames.componentSelected} .EE,
              .${classNames.componentSelected} .SE {
                right: -4px;
              }
              .${classNames.componentSelected} .SW,
              .${classNames.componentSelected}.SS,
              .${classNames.componentSelected} .SE {
                bottom: -4px;
              }
              .${classNames.componentSelected} .NW,
              .${classNames.componentSelected} .WW,
              .${classNames.componentSelected} .SW {
                left: -4px;
              }
              .${classNames.componentSelected} .SE,
              .${classNames.componentSelected} .NW {
                cursor: nw-resize;
              }
              .${classNames.componentSelected} .SW,
              .${classNames.componentSelected} .NE {
                cursor: ne-resize;
              }
              .${classNames.componentSelected} .NN,
              .${classNames.componentSelected} .SS {
                cursor: n-resize;
                left: 50%;
                margin-left: -4px;
              }
              .${classNames.componentSelected} .EE,
              .${classNames.componentSelected} .WW {
                cursor: e-resize;
                top: 50%;
                margin-top: -4px;
              }
            .${classNames.emptyTemplates} {
                padding:50px 0;
                text-align: center;
            }
            .${classNames.loadingTemplates} {
                padding:50px 0;
                text-align: center;
            }
            .${classNames.templateSelected} .page-view {
                border: solid 1px #337ab7!important;
            }
            .${classNames.templateDialog} .name {
                margin-top: -${templateDialog.nameHeight}px;
                height: ${templateDialog.nameHeight}px;
                font-size: ${templateDialog.fontSize}px;
                text-align: center;
                padding-top: 6px;
                background-color: black;
                opacity: 0.5;
            }
            .${classNames.templateDialog} .name span {
                color: white;
            }
            .${classNames.emptyDocument} {
                text-align: center;
                padding: 100px 0;
            }
            .${classNames.component} > .NW,
            .${classNames.component} > .NN,
            .${classNames.component} > .NE,
            .${classNames.component} > .EE,
            .${classNames.component} > .SE,
            .${classNames.component} > .SW,
            .${classNames.component} > .SS,
            .${classNames.component} > .WW {
                display: none;
            }
            .${classNames.componentSelected}.component > .NW,
            .${classNames.componentSelected}.component > .NN,
            .${classNames.componentSelected}.component > .NE,
            .${classNames.componentSelected}.component > .EE,
            .${classNames.componentSelected}.component > .SE,
            .${classNames.componentSelected}.component > .SW,
            .${classNames.componentSelected}.component > .SS,
            .${classNames.componentSelected}.component > .WW {
                display: block;
            }
            .${classNames.placeholder} {
                min-height: 40px;
                width: 100%;
            }
            .${classNames.placeholder}.active,
            .${classNames.componentWrapper}.active,
            .${classNames.componentWrapper}.${classNames.componentSelected}.active {
                border: 1px solid green;
            }
            .${classNames.editorPanel} {
                width: 300px;
                background: white;
                color: black;
                margin: 0;
                font-size: 14px;
                z-index: 100;
                overflow: auto;
            }
            .${classNames.editorPanel} label {
                width: 80px;
                float: left;
                padding: 4px;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .${classNames.editorPanel} .control {
                padding-left: 90px;
            }
            .${classNames.editorPanel} .empty {
                padding-top: 200px;
                text-align: center;
            }
            .${classNames.designer} .error,
            .${classNames.editorPanel} .error {
                color: red;
            }
            .${classNames.componentPanel} {
                background: white;
                color: black;
                font-size: 14px;
                z-index: 100;
                list-style: none;
                padding: 0;
                text-align: center
            }
            .${classNames.componentPanel} .panel-heading {
                text-align: center;
            }
            .${classNames.componentPanel} li {
                text-align: center;
                padding: 8px;
            }
            .${classNames.componentWrapper}.${classNames.moveDown} {
         
            }
        `;
document.head.appendChild(element);
function appendClassName(element, addonClassName) {
    if (element == null)
        throw _errors__WEBPACK_IMPORTED_MODULE_0__["Errors"].argumentNull('element');
    if (!addonClassName)
        throw _errors__WEBPACK_IMPORTED_MODULE_0__["Errors"].argumentNull('addonClassName');
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

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map