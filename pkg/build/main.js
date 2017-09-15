(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_ClosedCard__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedCard", function() { return __WEBPACK_IMPORTED_MODULE_0__src_ClosedCard__["a"]; });


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ParentCardsList__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'pp-card-wrap' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'pp-card', draggable: 'true' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'pp-card-header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'pp-header-elements' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'pp-card-label' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'pp-tooltip', 'data-title': 'User Story', style: { background: 'rgb(224, 43, 237)' } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'pp-tooltip', 'data-title': 'Product Review', style: { background: 'rgb(0, 204, 255)' } })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'pp-cards-badges' },
            props.late && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'pp-badges-warning' },
              'LATE'
            ),
            props.expired && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'pp-badges-danger' },
              'EXPIRED'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'pp-card-content' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: ' pp-trigger-subtasks pp-ico-bold-arrow-right pp-active' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          props.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'pp-card-footer' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'pp-footer-stats' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'pp-tooltip-top', 'data-title': '89 days in this Pipe' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'pp-color-warning pp-ico-time' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                '99min'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'pp-tooltip-top', 'data-title': '66 days in this Phase' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'pp-color-success pp-ico-phase' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                '99min'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'pp-tooltip-top', 'data-title': 'Last updated 66d ago' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'pp-color-info pp-ico-refresh' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                '99min'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'pp-card-users' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'pp-tooltip-left', 'data-title': 'Flavio Muniz' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'pp-round', src: 'https://gravatar.com/avatar/49b0d093674fe784cf3084c0e7fc414f.png?s=128&d=http://dev.pipefy.com:3000/images/user-avatar-default.png' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'pp-more' },
              '+1'
            )
          )
        )
      ),
      !!props.parentCardNames.length && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ParentCardsList__["a" /* default */], { names: props.parentCardNames })
    )
  );
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "pp-parent-card-title" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "ul",
      null,
      props.names.map(function (name, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          { key: i },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "pp-trigger-subtasks-sm pp-ico-bold-arrow-right" }),
          name
        );
      })
    )
  );
});

/***/ })
/******/ ])));