/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/app/alert.service.js":
/*!**********************************!*\
  !*** ./src/app/alert.service.js ***!
  \**********************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlertService\", function() { return AlertService; });\n/* harmony import */ var _utils_inputs_are_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/inputs-are-valid */ \"./src/app/utils/inputs-are-valid.js\");\n\n\nclass AlertService {\n  constructor() {\n    this.errorBox = document.getElementById(\"error\");\n  }\n\n  handleAdditionError(inputs, numbers) {\n    const fullMessage = inputs.reduce((message, str, index) => {\n      if (Object(_utils_inputs_are_valid__WEBPACK_IMPORTED_MODULE_0__[\"inputsAreValid\"])(numbers[index])) {\n        return message + \"\";\n      } else {\n        return message + `${str} is not a number. `;\n      }\n    }, \"Please enter two valid numbers! \");\n\n    this.errorBox.classList.remove(\"invisible\");\n    this.errorBox.innerText = fullMessage;\n  }\n\n  hideErrors() {\n    this.errorBox.classList.add(\"invisible\");\n  }\n}\n\n\n//# sourceURL=webpack:///./src/app/alert.service.js?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! exports provided: run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony import */ var _utils_inputs_are_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/inputs-are-valid */ \"./src/app/utils/inputs-are-valid.js\");\n/* harmony import */ var _utils_parse_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/parse-inputs */ \"./src/app/utils/parse-inputs.js\");\n\n\n\n\n\n/* const alertService = new AlertService();\nconst componentService = new ComponentService(); */\n\nconst run = (alertService, componentService) => {\n  alertService.hideErrors();\n\n  componentService.onClick(() => {\n    alertService.hideErrors();\n    const inputs = componentService.getInputs();\n    const parsedInputs = Object(_utils_parse_inputs__WEBPACK_IMPORTED_MODULE_1__[\"parseInputs\"])(...inputs);\n    if (Object(_utils_inputs_are_valid__WEBPACK_IMPORTED_MODULE_0__[\"inputsAreValid\"])(...parsedInputs)) {\n      const [numA, numB] = parsedInputs;\n      componentService.setResult(numA + numB);\n    } else {\n      componentService.setResult(\"\");\n      alertService.handleAdditionError(inputs, parsedInputs);\n    }\n  });\n};\n/* run(alertService, componentService); */\n\n\n//# sourceURL=webpack:///./src/app/app.js?");

/***/ }),

/***/ "./src/app/component.service.js":
/*!**************************************!*\
  !*** ./src/app/component.service.js ***!
  \**************************************/
/*! exports provided: ComponentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ComponentService\", function() { return ComponentService; });\nclass ComponentService {\n  constructor() {\n    this.numberOneInput = document.getElementById(\"numberOne\");\n    this.numberTwoInput = document.getElementById(\"numberTwo\");\n    this.addValuesButton = document.getElementById(\"addValues\");\n    this.resultDiv = document.getElementById(\"result\");\n  }\n\n  getInputs() {\n    return [this.numberOneInput.value, this.numberTwoInput.value];\n  }\n\n  setResult(str) {\n    this.resultDiv.innerText = str;\n  }\n\n  onClick(cb) {\n    this.addValuesButton.addEventListener(\"click\", cb);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/app/component.service.js?");

/***/ }),

/***/ "./src/app/utils/inputs-are-valid.js":
/*!*******************************************!*\
  !*** ./src/app/utils/inputs-are-valid.js ***!
  \*******************************************/
/*! exports provided: inputsAreValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputsAreValid\", function() { return inputsAreValid; });\nconst inputsAreValid = (...input) => {\n  return input.every(num => typeof num === \"number\" && !isNaN(num));\n};\n\n\n//# sourceURL=webpack:///./src/app/utils/inputs-are-valid.js?");

/***/ }),

/***/ "./src/app/utils/parse-inputs.js":
/*!***************************************!*\
  !*** ./src/app/utils/parse-inputs.js ***!
  \***************************************/
/*! exports provided: parseInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseInputs\", function() { return parseInputs; });\nconst parseInputs = (...input) => {\n  return input.map(str => parseInt(str));\n};\n\n\n//# sourceURL=webpack:///./src/app/utils/parse-inputs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/alert.service */ \"./src/app/alert.service.js\");\n/* harmony import */ var _app_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/component.service */ \"./src/app/component.service.js\");\n//call some code that is from our application\nconsole.log('index.js');\n\n\n\n\n\n\n\n\n\n\n\nconst alertService = new _app_alert_service__WEBPACK_IMPORTED_MODULE_2__[\"AlertService\"]();\nconst componentService = new _app_component_service__WEBPACK_IMPORTED_MODULE_3__[\"ComponentService\"](); \n\nObject(_app_app__WEBPACK_IMPORTED_MODULE_0__[\"run\"])(alertService, componentService);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n    background-color: lightblue;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ })

/******/ });