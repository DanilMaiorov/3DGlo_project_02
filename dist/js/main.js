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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('00:00:00 25 december 2021');\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menuBtn = document.querySelector('.menu');\n    const menu = document.querySelector('menu');\n    const closeBtn = menu.querySelector('.close-btn');\n    const menuItems = menu.querySelectorAll('ul > li > a');\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu');\n    };\n\n    menuBtn.addEventListener('click', handleMenu);\n    closeBtn.addEventListener('click', handleMenu);\n    \n    menuItems.forEach(menuItem => {\n        menuItem.addEventListener('click', (e) => {\n            e.preventDefault();\n            let idAnchor = menuItem.getAttribute('href');\n            document.querySelector(idAnchor).scrollIntoView({\n                block: 'start',\n                behavior: 'smooth'\n            });\n            handleMenu(); \n        });\n    });\n\n    const scrollImg = document.querySelector('main > a > img'); \n    const serviceBlock = document.querySelector('#service-block');\n    \n    const clicker = (e) => {\n        e.preventDefault();\n        serviceBlock.scrollIntoView({block: 'start', behavior: 'smooth'});\n    };\n    scrollImg.addEventListener('click', clicker);\n     \n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n\n    const modal = document.querySelector('.popup');\n    const buttons = document.querySelectorAll('.popup-btn');\n    const closeBtn = modal.querySelector('.popup-close');\n\n\n    const screenWidth = document.documentElement;\n    \n    buttons.forEach(btn => { \n        btn.addEventListener('click', () => {\n\n            if(screenWidth.offsetWidth < 768) {\n                modal.style.opacity = '1';\n                modal.style.display = 'block';\n            } else {\n                modal.style.opacity = '0'; \n                modal.style.display = 'block';\n                modal.style.transform = 'translate(0%, 0%)';\n                setTimeout(() => {\n                    modal.style.opacity = '1'; \n                    modal.style.transition = '.6s all';\n                }, 1);\n            }\n        });\n    });\n\n    closeBtn.addEventListener('click', () => {\n\n        if(screenWidth.offsetWidth < 768) {\n            modal.style.display = 'none';\n        } else {\n            modal.style.transform = 'translate(-50%, calc(-50% + 100px))';\n            modal.style.opacity = '0';\n            modal.style.transition = '.6s all';\n                setTimeout(() => {\n                    modal.style.display = 'none';\n                }, 600);\n        }\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n\n    /* const timerDays = document.getElementById('timer-days'); */\n    const timerHours = document.getElementById('timer-hours');\n    const timerMinutes = document.getElementById('timer-minutes');\n    const timerSeconds = document.getElementById('timer-seconds');\n\nconst getTimeRemaining = () => {\n    \n    let dateStop = new Date(deadline).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaining = (dateStop - dateNow) / 1000;\n/*     let days = Math.floor(timeRemaining / 60 / 60 / 24); */\n    let hours = Math.floor((timeRemaining / 60 / 60) /* % 24 */);\n    let minutes = Math.floor((timeRemaining / 60) % 60);\n    let seconds = Math.floor(timeRemaining % 60);\n\n    return { timeRemaining, /* days, */ hours, minutes, seconds };\n};\n/*     let text_forms_days = [' день ', ' дня ', ' дней '];\n    function dayForms (days, text_forms_days) {\n        let n1 = days % 10\n        if(days > 10 && days < 20) {\n            return text_forms_days[2];\n        }\n        if(n1 > 1 && n1 < 5) {\n            return text_forms_days[1];\n        }\n        if(n1 == 1) {\n            return text_forms_days[0];\n        }\n        return text_forms_days[2];\n    } */\n\n    let updateClock = setInterval(() => {\n        let getTime = getTimeRemaining();\n/*         timerDays.textContent = getTime.days + dayForms(getTime.days, text_forms_days); */\n        timerHours.textContent = (getTime.hours < 10) ? '0' + getTime.hours : getTime.hours;\n        timerMinutes.textContent = (getTime.minutes < 10) ? '0' + getTime.minutes : getTime.minutes;\n        timerSeconds.textContent = (getTime.seconds < 10) ? '0' + getTime.seconds : getTime.seconds;\n            if (getTime.timeRemaining === 0 || getTime.timeRemaining < 0) {\n                clearInterval(updateClock)\n                timerHours.textContent = '00';\n                timerMinutes.textContent = '00';\n                timerSeconds.textContent = '00';\n            }\n    }, 1000);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//1) сначала нужно задать время до которого будет досчитывать таймер - дедлайн\n\n//благодаря объекту date можем высчитать количество миллисекунд до дедлайна и вычитаем из будущего до текущей даты\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;