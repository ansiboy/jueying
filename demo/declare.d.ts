/// <reference path="../out/pdesigner.d.ts" />

interface RequireShim {

	/**
	* List of dependencies.
	**/
	deps?: string[];

	/**
	* Name the module will be exported as.
	**/
	exports?: string;

	/**
	* Initialize function with all dependcies passed in,
	* if the function returns a value then that value is used
	* as the module export value instead of the object
	* found via the 'exports' string.
	* @param dependencies
	* @return
	**/
	init?: (...dependencies: any[]) => any;
}

interface RequireConfig {

	// The root path to use for all module lookups.
	baseUrl?: string;

	// Path mappings for module names not found directly under
	// baseUrl.
	paths?: { [key: string]: any; };

	// Dictionary of Shim's.
	// does not cover case of key->string[]
	shim?: { [key: string]: RequireShim; };

	/**
	* For the given module prefix, instead of loading the
	* module with the given ID, substitude a different
	* module ID.
	*
	* @example
	* requirejs.config({
	*	map: {
	*		'some/newmodule': {
	*			'foo': 'foo1.2'
	*		},
	*		'some/oldmodule': {
	*			'foo': 'foo1.0'
	*		}
	*	}
	* });
	**/
	map?: {
		[id: string]: {
			[id: string]: string;
		};
	};

	/**
	* AMD configurations, use module.config() to access in
	* define() functions
	**/
	config?: { [id: string]: {}; };

	/**
	* Configures loading modules from CommonJS packages.
	**/
	packages?: {};

	/**
	* The number of seconds to wait before giving up on loading
	* a script.  The default is 7 seconds.
	**/
	waitSeconds?: number;

	/**
	* A name to give to a loading context.  This allows require.js
	* to load multiple versions of modules in a page, as long as
	* each top-level require call specifies a unique context string.
	**/
	context?: string;

	/**
	* An array of dependencies to load.
	**/
	deps?: string[];

	/**
	* A function to pass to require that should be require after
	* deps have been loaded.
	* @param modules
	**/
	callback?: (...modules: any[]) => void;

	/**
	* If set to true, an error will be thrown if a script loads
	* that does not call define() or have shim exports string
	* value that can be checked.
	**/
	enforceDefine?: boolean;

	/**
	* If set to true, document.createElementNS() will be used
	* to create script elements.
	**/
	xhtml?: boolean;

	/**
	* Extra query string arguments appended to URLs that RequireJS
	* uses to fetch resources.  Most useful to cachce bust when
	* the browser or server is not configured correcty.
	*
	* @example
	* urlArgs: "bust= + (new Date()).getTime()
	**/
	urlArgs?: string;

	/**
	* Specify the value for the type="" attribute used for script
	* tags inserted into the document by RequireJS.  Default is
	* "text/javascript".  To use Firefox's JavasScript 1.8
	* features, use "text/javascript;version=1.8".
	**/
	scriptType?: string;

}


interface Require {
	config(config: RequireConfig): Require;
	(modules: string[], ready?: Function): void;
}

declare var requirejs: Require;
declare module 'pdesigner' {
	export = pdesigner;
}


declare function h(type, props, ...children);