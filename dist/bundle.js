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

/***/ "./src/contact.ts":
/*!************************!*\
  !*** ./src/contact.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = function () {\n    const content = document.querySelector('#content');\n    const address = document.createElement('h2');\n    address.textContent = '123 Baltimore St.';\n    content.appendChild(address);\n    const cityStateZip = document.createElement('h2');\n    cityStateZip.textContent = 'Balto. MD. 21230';\n    content.appendChild(cityStateZip);\n    const phone = document.createElement('h2');\n    phone.textContent = '(410) 555-1234';\n    content.appendChild(phone);\n    const email = document.createElement('h2');\n    email.textContent = 'customersupport@painperdu.com';\n    content.appendChild(email);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.ts?");

/***/ }),

/***/ "./src/home.ts":
/*!*********************!*\
  !*** ./src/home.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nconst home = function () {\n    const content = document.querySelector('#content');\n    const header = document.createElement('h1');\n    header.textContent = 'Pain Perdu';\n    content.appendChild(header);\n    const image = document.createElement('img');\n    image.src = './french-toast.jpg';\n    image.style.width = '20%';\n    image.style.height = '40%';\n    content.appendChild(image);\n    const blurb = document.createElement('p');\n    blurb.textContent = 'An extraordinary creation: from our plate, to you.';\n    content.appendChild(blurb);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.ts\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.ts\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.ts\");\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.home)();\nconst nav = document.querySelector('#nav');\nconst content = document.querySelector('#content');\nconst homeButton = document.createElement('button');\nhomeButton.addEventListener('click', () => {\n    while (content.firstElementChild) {\n        content.removeChild(content.firstElementChild);\n    }\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.home)();\n});\nhomeButton.textContent = 'Home';\nnav.appendChild(homeButton);\nconst menuButton = document.createElement('button');\nmenuButton.addEventListener('click', () => {\n    while (content.firstElementChild) {\n        content.removeChild(content.firstElementChild);\n    }\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();\n});\nmenuButton.textContent = 'Menu';\nnav.appendChild(menuButton);\nconst contactButton = document.createElement('button');\ncontactButton.addEventListener('click', () => {\n    while (content.firstElementChild) {\n        content.removeChild(content.firstElementChild);\n    }\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)();\n});\ncontactButton.textContent = 'Contact';\nnav.appendChild(contactButton);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.ts?");

/***/ }),

/***/ "./src/menu.ts":
/*!*********************!*\
  !*** ./src/menu.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = function () {\n    const content = document.querySelector('#content');\n    const lineBreak = document.createElement('hr');\n    const blueberry = document.createElement('h2');\n    blueberry.textContent = 'Blueberry';\n    blueberry.style.color = 'blue';\n    content.appendChild(blueberry);\n    const blueText = document.createElement('p');\n    blueText.textContent = '~A delicate helping of blue joy french toast.';\n    content.appendChild(blueText);\n    const bluePrice = document.createElement('h3');\n    bluePrice.textContent = '$7.95';\n    content.appendChild(bluePrice);\n    content.appendChild(lineBreak);\n    const strawberry = document.createElement('h2');\n    strawberry.textContent = 'Strawberry';\n    strawberry.style.color = 'red';\n    content.appendChild(strawberry);\n    const strawText = document.createElement('p');\n    strawText.textContent = '~A simple blessing of strawberry french toast.';\n    content.appendChild(strawText);\n    const strawPrice = document.createElement('h3');\n    strawPrice.textContent = '$6.95';\n    content.appendChild(strawPrice);\n    content.appendChild(lineBreak);\n    const banana = document.createElement('h2');\n    banana.textContent = 'Banana';\n    banana.style.color = 'brown';\n    content.appendChild(banana);\n    const banText = document.createElement('p');\n    banText.textContent = '~A tasteful serving of banana french toast.';\n    content.appendChild(banText);\n    const banPrice = document.createElement('h3');\n    banPrice.textContent = '$6.95';\n    content.appendChild(banPrice);\n    content.appendChild(lineBreak);\n    const mix = document.createElement('h2');\n    mix.textContent = 'Mixed';\n    mix.style.color = 'purple';\n    content.appendChild(mix);\n    const mixText = document.createElement('p');\n    mixText.textContent = 'Mix and match your favorites!';\n    content.appendChild(mixText);\n    const mixPrice = document.createElement('h3');\n    mixPrice.textContent = '+$1.45';\n    content.appendChild(mixPrice);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;