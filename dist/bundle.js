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

/***/ "./src/components/location.js":
/*!************************************!*\
  !*** ./src/components/location.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst location = (jsonAPI) => {\n  const city = jsonAPI.name;\n  const { country } = jsonAPI.sys;\n  const { timezone } = jsonAPI;\n  const timeUTC = jsonAPI.dt;\n  const sunriseUTC = jsonAPI.sys.sunrise;\n  const sunsetUTC = jsonAPI.sys.sunset;\n\n  const getCity = () => city;\n  const getCountry = () => country;\n  const getLocalTime = () => new Date((timeUTC + timezone) * 1000);\n  const getTimezone = () => timezone;\n  const getSunriseLocalTime = () => new Date((sunriseUTC + timezone) * 1000);\n  const getSunsetLocalTime = () => sunsetUTC + timezone;\n  // Use new Date(weatherAPIJson.sys.sunset * 1000) to convert from unix time\n\n  const isDayTime = () => {\n    if (timeUTC > sunriseUTC && timeUTC < sunsetUTC) {\n      return true;\n    }\n    return false;\n  };\n\n  return {\n    getCity,\n    getCountry,\n    getLocalTime,\n    getTimezone,\n    getSunriseLocalTime,\n    getSunsetLocalTime,\n    isDayTime,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (location);\n\n\n//# sourceURL=webpack://weather-app-js-odin/./src/components/location.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weatherAPI = () => {\n  async function fetchWeatherData() {\n    const weatherURL = \"http://api.openweathermap.org/data/2.5/weather?q=\";\n    const weatherAPIKey = \"&APPID=208b21302d488c8d05b182f275223ef7\";\n    const weatherLocation = \"London\";\n\n    const weatherAPIResponse = await fetch(\n      weatherURL + weatherLocation + weatherAPIKey\n    );\n\n    const weatherAPIJson = await weatherAPIResponse.json();\n\n    return weatherAPIJson;\n  }\n\n  return { fetchWeatherData };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherAPI);\n\n\n//# sourceURL=webpack://weather-app-js-odin/./src/components/weatherAPI.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _layout_weatherReportView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/weatherReportView */ \"./src/layout/weatherReportView.js\");\n\n\nconst displayController = async () => {\n  const weatherReport = await (0,_layout_weatherReportView__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  const weatherReportDiv = document.createElement(\"div\");\n\n  weatherReportDiv.append(\n    weatherReport.makeLocationView(),\n    weatherReport.makeWeatherView()\n  );\n\n  weatherReportDiv.style.backgroundColor =\n    weatherReport.getDayOrNightClass()[1];\n  weatherReportDiv.style.color = weatherReport.getDayOrNightClass()[0];\n\n  return weatherReportDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n\n//# sourceURL=webpack://weather-app-js-odin/./src/controller/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/displayController */ \"./src/controller/displayController.js\");\n\n\nasync function loadCityView() {\n  const reportViewDisplay = await (0,_controller_displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  document.body.appendChild(reportViewDisplay);\n}\n\nloadCityView();\n\n\n//# sourceURL=webpack://weather-app-js-odin/./src/index.js?");

/***/ }),

/***/ "./src/layout/weatherReportView.js":
/*!*****************************************!*\
  !*** ./src/layout/weatherReportView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_weatherReport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/weatherReport */ \"./src/components/weatherReport.js\");\n\n\nconst weatherReportView = async () => {\n  const currentWeatherReport = await (0,_components_weatherReport__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  const getDayOrNightClass = () => {\n    if (currentWeatherReport.getLocationData().isDayTime()) {\n      return [\"black\", \"white\"];\n    }\n\n    return [\"white\", \"black\"];\n  };\n\n  const makeLocationView = () => {\n    const locationInfoDiv = document.createElement(\"div\");\n    const cityDiv = document.createElement(\"div\");\n    const timeDiv = document.createElement(\"div\");\n    const sunriseSunsetDiv = document.createElement(\"div\");\n\n    const locationData = currentWeatherReport.getLocationData();\n    const currentCity = locationData.getCity();\n    const currentCountry = locationData.getCountry();\n    const currentTime = locationData.getLocalTime();\n    const currentSunrise = locationData.getSunriseLocalTime();\n    const currentSunset = locationData.getSunsetLocalTime();\n\n    cityDiv.textContent = `${currentCity}, ${currentCountry}`;\n    timeDiv.textContent = `${currentTime}`;\n    sunriseSunsetDiv.textContent = `Sunrise: ${currentSunrise} Sunset:${currentSunset}`;\n\n    locationInfoDiv.append(cityDiv, timeDiv, sunriseSunsetDiv);\n\n    return locationInfoDiv;\n  };\n\n  const makeWeatherView = () => {\n    const weatherInfoDiv = document.createElement(\"div\");\n    const weatherDescriptionDiv = document.createElement(\"div\");\n    const weatherIconImage = document.createElement(\"img\");\n    const weatherTempsDiv = document.createElement(\"div\");\n    const weatherMoreInfoDiv = document.createElement(\"div\");\n\n    const weatherData = currentWeatherReport.getWeatherData();\n    const weatherDescription = weatherData.getWeatherDescription();\n    const weatherIcon = weatherData.getWeatherIcon();\n    const temp = weatherData.getTempCelsius();\n    const humidity = weatherData.getHumidityPercentage();\n    const tempMin = weatherData.getTempMinCelsius();\n    const tempMax = weatherData.getTempMaxCelsius();\n    const windSpeed = weatherData.getWindSpeed();\n\n    weatherIconImage.src = weatherIcon;\n    weatherDescriptionDiv.append(weatherDescription, weatherIconImage);\n\n    weatherTempsDiv.textContent = `${temp}\\u2103\\n H${tempMin}/L${tempMax}`;\n    weatherMoreInfoDiv.textContent = `Humidity: ${humidity}% Wind: ${windSpeed}m/s`;\n\n    weatherInfoDiv.append(\n      weatherDescriptionDiv,\n      weatherTempsDiv,\n      weatherMoreInfoDiv\n    );\n\n    return weatherInfoDiv;\n  };\n\n  return { makeLocationView, makeWeatherView, getDayOrNightClass };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherReportView);\n\n\n//# sourceURL=webpack://weather-app-js-odin/./src/layout/weatherReportView.js?");

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
/******/ 			// no module.id needed
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