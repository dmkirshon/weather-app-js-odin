/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* General Style */\\n\\nhtml {\\n  box-sizing: border-box;\\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\\n}\\n\\n*,\\n*:before,\\n*:after {\\n  box-sizing: inherit;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n/* Weather Report View */\\n\\n.weather-report {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n  margin: 0 auto;\\n  padding: 1rem;\\n  border-radius: 1rem;\\n  border: 5px solid black;\\n  background-color: aliceblue;\\n}\\n\\n.weather-report-location-info {\\n  display: flex;\\n  gap: 1rem;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.weather-report-time {\\n  flex: 1;\\n}\\n.weather-report-city {\\n  flex: 2;\\n  text-align: center;\\n  font-size: xx-large;\\n}\\n\\n.weather-report-sunrise-sunset {\\n  flex: 1;\\n  display: flex;\\n  flex-direction: column;\\n  white-space: pre-line;\\n  text-align: center;\\n}\\n\\n.weather-report-weather-info {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: large;\\n  gap: 1rem;\\n}\\n\\n.weather-report-weather-description {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: xx-large;\\n  background-color: rgba(128, 128, 128, 0.432);\\n  border-radius: 1rem;\\n  padding: 1rem;\\n}\\n\\n.weather-report-weather-temps {\\n  font-size: x-large;\\n  text-align: center;\\n  white-space: pre-line;\\n}\\n\\n/* Dark Mode Style */\\n\\n.night-dark-mode {\\n  color: white;\\n  background-color: black;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app-js-odin/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app-js-odin/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app-js-odin/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app-js-odin/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app-js-odin/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app-js-odin/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app-js-odin/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app-js-odin/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app-js-odin/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app-js-odin/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/location.js":
/*!************************************!*\
  !*** ./src/components/location.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst location = (jsonAPI) => {\n  const city = jsonAPI.name;\n  const { country } = jsonAPI.sys;\n  const localTimezone = jsonAPI.timezone;\n  const timeUTC = jsonAPI.dt;\n  const sunriseUTC = jsonAPI.sys.sunrise;\n  const sunsetUTC = jsonAPI.sys.sunset;\n  const timeZoneOffset = new Date().getTimezoneOffset() * 60;\n\n  const getCity = () => city;\n  const getCountry = () => country;\n  const getLocalTime = () =>\n    new Date((timeUTC + localTimezone) * 1000).toUTCString().replace(\"GMT\", \"\");\n  const getTimezone = () => localTimezone;\n  const getSunriseLocalTime = () =>\n    new Date((sunriseUTC + timeZoneOffset + localTimezone) * 1000)\n      .toLocaleTimeString()\n      .slice(0, 5);\n  const getSunsetLocalTime = () =>\n    new Date((sunsetUTC + timeZoneOffset + localTimezone) * 1000)\n      .toLocaleTimeString()\n      .slice(0, 5);\n  // Use new Date(weatherAPIJson.sys.sunset * 1000) to convert from unix time\n\n  const isDayTime = () => {\n    if (timeUTC > sunriseUTC && timeUTC < sunsetUTC) {\n      return true;\n    }\n    return false;\n  };\n\n  return {\n    getCity,\n    getCountry,\n    getLocalTime,\n    getTimezone,\n    getSunriseLocalTime,\n    getSunsetLocalTime,\n    isDayTime,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (location);\n\n\n//# sourceURL=webpack://weather-app-js-odin/./src/components/location.js?");

/***/ }),

/***/ "./src/components/weather.js":
/*!***********************************!*\
  !*** ./src/components/weather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weather = (jsonAPI) => {\n  const KELVIN_TO_CELSIUS = -273.15;\n\n  const weatherDescription = jsonAPI.weather[0].description;\n  const weatherIconValue = jsonAPI.weather[0].icon;\n  const tempCelsius = Math.round(jsonAPI.main.temp + KELVIN_TO_CELSIUS);\n  const percentHumidity = jsonAPI.main.humidity;\n  const tempMinCelsius = Math.round(jsonAPI.main.temp_min + KELVIN_TO_CELSIUS);\n  const tempMaxCelsius = Math.round(jsonAPI.main.temp_max + KELVIN_TO_CELSIUS);\n  const windSpeed = jsonAPI.wind.speed;\n\n  const getWeatherDescription = () => weatherDescription;\n  const getWeatherIcon = (size = 2) =>\n    `http://openweathermap.org/img/wn/${weatherIconValue}@${size}x.png`;\n  const getTempCelsius = () => tempCelsius;\n  const getHumidityPercentage = () => percentHumidity;\n  const getTempMinCelsius = () => tempMinCelsius;\n  const getTempMaxCelsius = () => tempMaxCelsius;\n  const getWindSpeed = () => windSpeed;\n\n  return {\n    getWeatherDescription,\n    getWeatherIcon,\n    getTempCelsius,\n    getHumidityPercentage,\n    getTempMinCelsius,\n    getTempMaxCelsius,\n    getWindSpeed,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);\n\n\n//# sourceURL=webpack://weather-app-js-odin/./src/components/weather.js?");

/***/ }),

/***/ "./src/components/weatherAPI.js":
/*!**************************************!*\
  !*** ./src/components/weatherAPI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weatherAPI = () => {\n  async function fetchWeatherData() {\n    const weatherURL = \"http://api.openweathermap.org/data/2.5/weather?q=\";\n    const weatherAPIKey = \"&APPID=208b21302d488c8d05b182f275223ef7\";\n    const weatherLocation = \"san jose\";\n\n    const weatherAPIResponse = await fetch(\n      weatherURL + weatherLocation + weatherAPIKey\n    );\n\n    const weatherAPIJson = await weatherAPIResponse.json();\n\n    return weatherAPIJson;\n  }\n\n  return { fetchWeatherData };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherAPI);\n\n\n//# sourceURL=webpack://weather-app-js-odin/./src/components/weatherAPI.js?");

/***/ }),

/***/ "./src/components/weatherReport.js":
/*!*****************************************!*\
  !*** ./src/components/weatherReport.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location */ \"./src/components/location.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ \"./src/components/weather.js\");\n/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherAPI */ \"./src/components/weatherAPI.js\");\n\n\n\n\nconst weatherReport = async () => {\n  const weatherReportData = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().fetchWeatherData();\n  const locationData = (0,_location__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weatherReportData);\n  const weatherData = (0,_weather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherReportData);\n\n  const getLocationData = () => locationData;\n  const getWeatherData = () => weatherData;\n\n  return {\n    getLocationData,\n    getWeatherData,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherReport);\n\n\n//# sourceURL=webpack://weather-app-js-odin/./src/components/weatherReport.js?");

/***/ }),

/***/ "./src/controller/displayController.js":
/*!*********************************************!*\
  !*** ./src/controller/displayController.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _layout_weatherReportView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/weatherReportView */ \"./src/layout/weatherReportView.js\");\n\n\nconst displayController = async () => {\n  const weatherReport = await (0,_layout_weatherReportView__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  const makeWeatherReport = () => {\n    const weatherReportDiv = document.createElement(\"div\");\n\n    weatherReportDiv.classList = `weather-report ${weatherReport.getDayOrNightClass()}`;\n\n    weatherReportDiv.append(\n      weatherReport.makeLocationView(),\n      weatherReport.makeWeatherView()\n    );\n\n    return weatherReportDiv;\n  };\n\n  return { makeWeatherReport };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n\n//# sourceURL=webpack://weather-app-js-odin/./src/controller/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/displayController */ \"./src/controller/displayController.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n// eslint-disable-next-line no-unused-vars\n\n\nasync function loadCityView() {\n  const displayViews = await (0,_controller_displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  document.body.appendChild(displayViews.makeWeatherReport());\n}\n\nloadCityView();\n\n\n//# sourceURL=webpack://weather-app-js-odin/./src/index.js?");

/***/ }),

/***/ "./src/layout/weatherReportView.js":
/*!*****************************************!*\
  !*** ./src/layout/weatherReportView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_weatherReport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/weatherReport */ \"./src/components/weatherReport.js\");\n\n\nconst weatherReportView = async () => {\n  const currentWeatherReport = await (0,_components_weatherReport__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  const getDayOrNightClass = () => {\n    if (currentWeatherReport.getLocationData().isDayTime()) {\n      return \"\";\n    }\n\n    return \"night-dark-mode\";\n  };\n\n  const makeLocationView = () => {\n    const locationInfoDiv = document.createElement(\"div\");\n    const cityDiv = document.createElement(\"div\");\n    const timeDiv = document.createElement(\"div\");\n    const sunriseSunsetDiv = document.createElement(\"div\");\n\n    locationInfoDiv.classList = \"weather-report-location-info\";\n    cityDiv.classList = \"weather-report-city\";\n    timeDiv.classList = \"weather-report-time\";\n    sunriseSunsetDiv.classList = \"weather-report-sunrise-sunset\";\n\n    const locationData = currentWeatherReport.getLocationData();\n    const currentCity = locationData.getCity();\n    const currentCountry = locationData.getCountry();\n    const currentTime = locationData.getLocalTime();\n    const currentSunrise = locationData.getSunriseLocalTime();\n    const currentSunset = locationData.getSunsetLocalTime();\n\n    cityDiv.textContent = `${currentCity}, ${currentCountry}`;\n    timeDiv.textContent = `${currentTime}`;\n    sunriseSunsetDiv.textContent = `Sunrise: ${currentSunrise}\\nSunset: ${currentSunset}`;\n\n    locationInfoDiv.append(timeDiv, cityDiv, sunriseSunsetDiv);\n\n    return locationInfoDiv;\n  };\n\n  const makeWeatherView = () => {\n    const weatherInfoDiv = document.createElement(\"div\");\n    const weatherDescriptionDiv = document.createElement(\"div\");\n    const weatherIconImage = document.createElement(\"img\");\n    const weatherTempsDiv = document.createElement(\"div\");\n    const weatherMoreInfoDiv = document.createElement(\"div\");\n\n    weatherInfoDiv.classList = \"weather-report-weather-info\";\n    weatherDescriptionDiv.classList = \"weather-report-weather-description\";\n    weatherIconImage.classList = \"weather-report-weather-icon\";\n    weatherTempsDiv.classList = \"weather-report-weather-temps\";\n    weatherMoreInfoDiv.classList = \"weather-report-more-info\";\n\n    const weatherData = currentWeatherReport.getWeatherData();\n    const weatherDescription = weatherData.getWeatherDescription();\n    const weatherIcon = weatherData.getWeatherIcon();\n    const temp = weatherData.getTempCelsius();\n    const humidity = weatherData.getHumidityPercentage();\n    const tempMin = weatherData.getTempMinCelsius();\n    const tempMax = weatherData.getTempMaxCelsius();\n    const windSpeed = weatherData.getWindSpeed();\n\n    weatherIconImage.src = weatherIcon;\n    weatherDescriptionDiv.append(weatherDescription, weatherIconImage);\n\n    weatherTempsDiv.textContent = `${temp}\\u2103\\n H/L:${tempMax}/${tempMin}`;\n    weatherMoreInfoDiv.textContent = `Humidity: ${humidity}% Wind: ${windSpeed}m/s`;\n\n    weatherInfoDiv.append(\n      weatherDescriptionDiv,\n      weatherTempsDiv,\n      weatherMoreInfoDiv\n    );\n\n    return weatherInfoDiv;\n  };\n\n  return { makeLocationView, makeWeatherView, getDayOrNightClass };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherReportView);\n\n\n//# sourceURL=webpack://weather-app-js-odin/./src/layout/weatherReportView.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;