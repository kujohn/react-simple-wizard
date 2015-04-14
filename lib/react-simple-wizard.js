(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["React-Simple-Wizard"] = factory(require("React"));
	else
		root["React-Simple-Wizard"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Wizard = React.createClass({
	    displayName: 'Wizard',
	    propTypes: {
	        children: function children(props, key) {
	            var ERR = 'You must provide both Wizard.Nav and Wizard.Page component',
	                hasNav,
	                hasPages;

	            if (!Array.isArray(props)) {
	                return new Error(ERR);
	            }

	            props.forEach(function (item) {
	                if (item instanceof this.Nav) {
	                    hasNav = true;
	                } else if (item instanceof this.Pages) {
	                    hasPages = true;
	                }
	            });

	            if (!hasNav || !hasPages) {
	                return new Error(ERR);
	            }
	        }
	    },
	    getInitialState: function getInitialState() {
	        return {
	            active: 0
	        };
	    },
	    next: function next() {
	        this.setState({ active: ++this.state.active });
	    },
	    jump: function jump(step) {
	        this.setState({ active: step });
	    },
	    render: function render() {
	        var active = this.state.active;
	        return React.createElement(
	            'div',
	            null,
	            React.Children.map(this.props.children, function (child) {
	                return React.cloneElement(child, {
	                    active: active
	                });
	            })
	        );
	    }
	});

	Wizard.Nav = React.createClass({
	    displayName: 'Wizard - Navigation',
	    propTypes: {
	        children: React.PropTypes.arrayOf(React.PropTypes.node).isRequired
	    },
	    render: function render() {
	        var active = this.props.active,
	            liNodes = React.Children.map(this.props.children, function (item, idx) {
	            if (idx == active) {
	                var className = item.props.className || '',
	                    clone = React.cloneElement(item, {
	                    className: 'active ' + className
	                });
	                return clone;
	            }
	            return item;
	        });

	        return React.createElement(
	            'ol',
	            { className: this.props.className },
	            ' ',
	            liNodes,
	            ' '
	        );
	    }
	});

	Wizard.Pages = React.createClass({
	    displayName: 'Pages',

	    displaName: 'Wizard - Pages',
	    propTypes: {
	        children: React.PropTypes.arrayOf(React.PropTypes.node).isRequired
	    },
	    render: function render() {
	        var active = this.props.active,
	            active,
	            pages = [],
	            hiddenStyle = {
	            display: 'none'
	        };

	        // hidden elements need to be rendered to have ref intact
	        React.Children.forEach(this.props.children, function (page, idx) {
	            if (idx == active) {
	                active = page;
	                return;
	            }

	            pages.push(page);
	        });
	        return React.createElement(
	            'div',
	            null,
	            active,
	            React.createElement(
	                'ol',
	                { style: hiddenStyle },
	                pages
	            )
	        );
	    }
	});

	module.exports = Wizard;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;