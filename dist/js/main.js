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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('00:00:00 31 december 2021');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menuBtn = document.querySelector('.menu');\n    const menu = document.querySelector('menu');\n    const closeBtn = menu.querySelector('.close-btn');\n    const menuItems = menu.querySelectorAll('ul > li > a');\n    const body = document.querySelector('body');\n\n     const toggleMenu = () => {\n        body.addEventListener('click', (e) => {\n            if (e.target.closest('.menu')) {\n                menu.classList.add('active-menu');\n            } else if (e.target.closest('.close-btn')) {\n                menu.classList.remove('active-menu');  \n            } else if (e.target.closest('menu')) {\n                menuItems.forEach((menuItem) => {\n                    if(menuItem === e.target) {\n                        e.preventDefault();\n                        let idAnchor = menuItem.getAttribute('href');\n                        document.querySelector(idAnchor).scrollIntoView({\n                            block: 'start',\n                            behavior: 'smooth'\n                        });\n                        menu.classList.remove('active-menu');\n                    } \n                });\n             } else if (!e.target.closest('menu')) {\n                menu.classList.remove('active-menu'); \n            }\n            });\n    };\n    toggleMenu(); \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    \n\n\n   \n    const scrollImg = document.querySelector('main > a');   \n    const serviceBlock = document.querySelector('#service-block');\n    \n    const clicker = (e) => {\n        e.preventDefault();\n        serviceBlock.scrollIntoView({block: 'start', behavior: 'smooth'});\n    };\n    scrollImg.addEventListener('click', clicker); \n     \n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n\n    const modal = document.querySelector('.popup');\n    const buttons = document.querySelectorAll('.popup-btn');\n    //const closeBtn = modal.querySelector('.popup-close'); //можеи его удалить, потому как получаем его теперь в обработчике события при закрытии модального окна\n    const screenWidth = document.documentElement;\n    \n    buttons.forEach(btn => { \n        btn.addEventListener('click', () => {\n\n            if(screenWidth.offsetWidth < 768) {\n                modal.style.opacity = '1';\n                modal.style.display = 'block';\n            } else {\n                modal.style.opacity = '0'; \n                modal.style.display = 'block';\n                setTimeout(() => {\n                    modal.style.opacity = '1'; \n                    modal.style.transition = '.6s all';\n                }, 1);\n            }\n        });\n    });\n\n/*     closeBtn.addEventListener('click', () => {  //сделали делигирование событий на всё модальное окно сразу\n\n        if(screenWidth.offsetWidth < 768) {\n            modal.style.display = 'none';\n        } else {\n            modal.style.opacity = '0';\n            modal.style.transition = '.6s all';\n                setTimeout(() => {\n                    modal.style.display = 'none';\n                }, 600);\n        }\n    }); */\n\n    modal.addEventListener('click', (e) => {\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n            if (screenWidth.offsetWidth < 768) {\n                modal.style.display = 'none';\n            } else {\n                modal.style.opacity = '0';\n                modal.style.transition = '.6s all';\n                    setTimeout(() => {\n                        modal.style.display = 'none';\n                    }, 600);\n            }\n        }\n    });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlock = document.querySelector('.portfolio-content');\r\n    const slides = document.querySelectorAll('.portfolio-item');\r\n    const timerInterval = 2000;\r\n    let currentSlide = 0;\r\n    let interval;\r\n    let dotContainer = document.querySelector('.portfolio-dots');\r\n    let dots = [];\r\n\r\n    const dotAdd = () => {\r\n      slides.forEach(() => {\r\n      const newDot = document.createElement('li');\r\n        newDot.classList.add('dot');\r\n        dots.push(newDot);\r\n        dotContainer.append(newDot);\r\n        dots[0].classList.add('dot-active');\r\n      });\r\n    };  \r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n    };\r\n    const nextSlide = (elems, index, strClass) => { \r\n        elems[index].classList.add(strClass);\r\n    };\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n        prevSlide(dots, currentSlide, 'dot-active');\r\n        currentSlide++;\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n        nextSlide(dots, currentSlide, 'dot-active');\r\n    };\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer);\r\n    };\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    };\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return;\r\n        }\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n        prevSlide(dots, currentSlide, 'dot-active');\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++;\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--;\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) { \r\n                    currentSlide = index;\r\n                }\r\n            });\r\n        } \r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1;\r\n        }\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n        nextSlide(dots, currentSlide, 'dot-active');   \r\n    });\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide();\r\n        }\r\n    }, true);\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot,.portfolio-btn')) {\r\n            startSlide(timerInterval);\r\n            }\r\n    }, true);\r\n    startSlide(timerInterval);\r\n    dotAdd();\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*   const slider = () => {\r\n    const sliderBlock = document.querySelector('.portfolio-content');\r\n    const slides = document.querySelectorAll('.portfolio-item');\r\n    const timerInterval = 2000;\r\n    let currentSlide = 0;\r\n    let interval;\r\n    let dotContainer = document.querySelector('.portfolio-dots');  //контейнер для точек\r\n    let dots = [];\r\n\r\n    const dotAdd = () => {\r\n      slides.forEach(() => {\r\n      const newDot = document.createElement('li');\r\n        newDot.classList.add('dot');\r\n        dots.push(newDot);\r\n        dotContainer.append(newDot);\r\n        dots[0].classList.add('dot-active');\r\n      });\r\n    };  \r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n    };\r\n    const nextSlide = (elems, index, strClass) => { \r\n        elems[index].classList.add(strClass);\r\n    };\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n        prevSlide(dots, currentSlide, 'dot-active');\r\n        currentSlide++;\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n        nextSlide(dots, currentSlide, 'dot-active');\r\n    };\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer);\r\n    };\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    };\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return;\r\n        }\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n        prevSlide(dots, currentSlide, 'dot-active');\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++;\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--;\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) { \r\n                    currentSlide = index;\r\n                }\r\n            });\r\n        } \r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1;\r\n        }\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n        nextSlide(dots, currentSlide, 'dot-active');   \r\n    });\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n        stopSlide();\r\n        }\r\n    }, true);\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot,.portfolio-btn')) {\r\n        startSlide(timerInterval);\r\n        }\r\n    }, true);\r\n    startSlide(timerInterval);\r\n    dotAdd();\r\n  };\r\n  \r\n  export default slider; */\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n\r\nconst tabPanel = document.querySelector('.service-header');\r\nconst tabs = document.querySelectorAll('.service-header-tab');\r\nconst tabContent = document.querySelectorAll('.service-tab');  //изначально скрыли табы, добавили класс d-none потому что чрезе бутстрап\r\n\r\n\r\n\r\n\r\ntabPanel.addEventListener('click', (e) => {\r\n    if(e.target.closest('.service-header-tab')) { //внутри был спан, поэтому использовали этот метод\r\n        const tabBtn = e.target.closest('.service-header-tab'); //задали новую переменную для того, что бы указывать её в условии, и тот клик по спану будет давать кнопку и соответственно менять класс\r\n        console.log(tabBtn);\r\n        tabs.forEach((tab, index) => { //перебираем с индексом, что бы при клике полкчать этот индекс и спользовать его для получения нужного таба, чтобы его отобразить при переключении кнопок\r\n            if(tab === tabBtn) {\r\n                tab.classList.add('active');\r\n                tabContent[index].classList.remove('d-none'); // при переключении кнопок тот или иной Таб появлется\r\n            } else {\r\n                tab.classList.remove('active');\r\n                tabContent[index].classList.add('d-none'); // при переключении кнопок тот или иной Таб скрывается\r\n            }\r\n        });\r\n    }\r\n});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n\n    /* const timerDays = document.getElementById('timer-days'); */\n    const timerHours = document.getElementById('timer-hours');\n    const timerMinutes = document.getElementById('timer-minutes');\n    const timerSeconds = document.getElementById('timer-seconds');\n\nconst getTimeRemaining = () => {\n    \n    let dateStop = new Date(deadline).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaining = (dateStop - dateNow) / 1000;\n/*     let days = Math.floor(timeRemaining / 60 / 60 / 24); */\n    let hours = Math.floor((timeRemaining / 60 / 60) /* % 24 */);\n    let minutes = Math.floor((timeRemaining / 60) % 60);\n    let seconds = Math.floor(timeRemaining % 60);\n\n    return { timeRemaining, /* days, */ hours, minutes, seconds };\n};\n/*     let text_forms_days = [' день ', ' дня ', ' дней '];\n    function dayForms (days, text_forms_days) {\n        let n1 = days % 10\n        if(days > 10 && days < 20) {\n            return text_forms_days[2];\n        }\n        if(n1 > 1 && n1 < 5) {\n            return text_forms_days[1];\n        }\n        if(n1 == 1) {\n            return text_forms_days[0];\n        }\n        return text_forms_days[2];\n    } */\n\n    let updateClock = setInterval(() => {\n        let getTime = getTimeRemaining();\n/*         timerDays.textContent = getTime.days + dayForms(getTime.days, text_forms_days); */\n        timerHours.textContent = (getTime.hours < 10) ? '0' + getTime.hours : getTime.hours;\n        timerMinutes.textContent = (getTime.minutes < 10) ? '0' + getTime.minutes : getTime.minutes;\n        timerSeconds.textContent = (getTime.seconds < 10) ? '0' + getTime.seconds : getTime.seconds;\n            if (getTime.timeRemaining === 0 || getTime.timeRemaining < 0) {\n                clearInterval(updateClock);\n                timerHours.textContent = '00';\n                timerMinutes.textContent = '00';\n                timerSeconds.textContent = '00';\n            }\n    }, 1000);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//1) сначала нужно задать время до которого будет досчитывать таймер - дедлайн\n\n//благодаря объекту date можем высчитать количество миллисекунд до дедлайна и вычитаем из будущего до текущей даты\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n\r\n    const squareForm = document.querySelector('.calc-square');\r\n    const countForm = document.querySelector('.calc-count');\r\n    const dayForm = document.querySelector('.calc-day');\r\n\r\n    const onlyNumber = (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/gi, '');\r\n    };\r\n    squareForm.addEventListener('input', onlyNumber);\r\n    countForm.addEventListener('input', onlyNumber); \r\n    dayForm.addEventListener('input', onlyNumber); \r\n\r\n   \r\n   //const formBtn = document.querySelectorAll('button[type=submit]'); //кнопки\r\n    const nameForm = document.querySelectorAll('[id$=\"-name\"]'); //инпуты с именем\r\n    const secondFormMessage = document.querySelector('#form2-message'); //инпут с сообщением возле футера\r\n        const arrayInputText = [...nameForm, secondFormMessage]; //массив с инпутами с текстом\r\n    const emailForm = document.querySelectorAll('.form-email'); //массив с инпутами с мылом\r\n    const telForm = document.querySelectorAll('.form-phone'); //массив с инпутами с телефонами \r\n\r\n    arrayInputText.forEach(inputTextItem => {\r\n        inputTextItem.addEventListener('blur', (e) => {\r\n            let testText = /[^а-яА-я\\-\\s]+/gi;\r\n            if(testText.test(inputTextItem.value) === false){\r\n                inputTextItem.value = inputTextItem.value/*.replace(/^ +/gm, '') .replace(/^-+/gm, '') */.slice(0, 1).toUpperCase(0) + inputTextItem.value.slice(1).toLowerCase(0).replace(/[^а-яА-я]+/gi, '').replace(/\\s+/g, ' ').replace(/\\-+/g, '-');\r\n        \r\n            }  else {\r\n                inputTextItem.value = inputTextItem.value.replace(/[^а-яА-я]+/gi, '').slice(0, 1).toUpperCase(0) + inputTextItem.value.slice(1).toLowerCase(0).replace(/[a-zA-Z]/gi, '').replace(/\\s+/g, ' ').replace(/\\-+/g, '-').replace(/[^а-яА-я\\-\\s]+/gi, '');\r\n            } \r\n        });\r\n    //    inputTextItem.addEventListener('input', (e) => {\r\n    //        e.target.value = e.target.value.replace(/[^а-яА-я\\-\\s]+/gi, '');\r\n    //    });\r\n    });\r\n    emailForm.forEach(emailItem => {\r\n        emailItem.addEventListener('blur', () => {\r\n            let testEmail = /^[^-a-zA-Z0-9!\\*.\\-_~'\\@]+/gim;\r\n            if (testEmail.test(emailItem.value) === false){\r\n                emailItem.value = emailItem.value.replace(/[^-a-zA-Z0-9!\\*.\\-_~'\\@]/g, '');\r\n            }  else {\r\n                emailItem.value = emailItem.value.replace(/[^-a-zA-Z0-9!\\*.\\-_~'\\@]/g, '');\r\n                emailItem.value = emailItem.value.replace(/^[^-a-zA-Z0-9!\\*.\\-_~'\\@]/g, '');\r\n            } \r\n        });\r\n    // emailItem.addEventListener('input', (e) => {\r\n    //      e.target.value = e.target.value.match(/^[-a-zA-Z0-9!\\*.\\-_~'\\@]+/gim);\r\n    //      e.target.value = e.target.value.match(/^[-a-zA-Z-!\\*\\.\\-\\_~\\']+@[\\w]+\\.[\\w]+/g);\r\n    });\r\n\r\n    telForm.forEach(telItem => {\r\n        telItem.addEventListener('blur', () => {\r\n            let testTel = /^[^0-9()-]+/gi;\r\n            if (testTel.test(telItem.value) === false){\r\n                telItem.value = telItem.value/* .replace(/[^0-9()-]+/gi, ''); */\r\n            } else {\r\n                telItem.value = telItem.value.replace(/[^0-9()-]/gi, '');\r\n            }\r\n        });\r\n    //    telItem.addEventListener('input', (e) => {\r\n    //        e.target.value = e.target.value.match(/^[0-9()-]+/gi);\r\n    //    });\r\n    });\r\n    \r\n    /****ПОПЫТКА ЧЕРЕЗ МАССИВ */\r\n\r\n     /* formBtn.forEach(itemBtn => itemBtn.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        let isError = false;\r\n        arrayInputText.forEach(inputTextItem => {\r\n            if (!/[^а-яА-я\\-\\s]+/g.test(inputTextItem.value) && inputTextItem.value !== '') {\r\n            } else {\r\n                isError = true;\r\n            }\r\n        });\r\n        emailForm.forEach(emailItem => {\r\n            let isError = false;\r\n            if (/([a-zA-Z_!*'~\\+-.]+(\\.[a-zA-Z_!*'~\\+-.])*@[a-zA-Z]+(\\.[a-zA-Z]+))/gi.test(emailItem.value) && emailItem.value !== '') {\r\n            } else {\r\n                isError = true;\r\n            }\r\n        });\r\n        telForm.forEach(telItem => {\r\n            let isError = false;\r\n            if (/^[0-9()-]{6,}/gi.test(telItem.value) && telItem.value !== '') {\r\n            } else {\r\n                isError = true;\r\n            }\r\n        });\r\n            if (!isError) {\r\n        }\r\n    }));   */\r\n\r\n        //first\r\n    //const firstFormName = document.querySelector('#form1-name'); //type text\r\n    //const firstFormEmail = document.querySelector('#form1-email'); //type email\r\n    //const firstFormTel = document.querySelector('#form1-phone'); //type tel\r\n        //second\r\n    //const secondFormName = document.querySelector('#form2-name'); //type text\r\n    //const secondFormEmail = document.querySelector('#form2-email'); //type email\r\n    //const secondFormTel = document.querySelector('#form2-phone'); //type tel\r\n    //const secondFormMessage = document.querySelector('#form2-message'); //type text\r\n       //third\r\n    //const thirdFormName = document.querySelector('#form3-name'); //type text\r\n    //const thirdFormEmail = document.querySelector('#form3-email'); //type email\r\n    //const thirdFormTel = document.querySelector('#form3-phone'); //type tel\r\n\r\n/*     const firstFormName = document.querySelector('#form1-name');\r\n    const firstFormEmail = document.querySelector('#form1-email'); //type email\r\n    const firstFormTel = document.querySelector('#form1-phone');\r\n\r\n    const formBtn = document.querySelectorAll('button[type=submit]')\r\n    \r\n    \r\n    console.log(formBtn.forEach(itemBtn => itemBtn.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        let isError = false;\r\n            if (!/[^а-яА-я\\-\\s]/g.test(firstFormName.value) && firstFormName.value !== '') {\r\n            } else {\r\n                isError = true;\r\n            }\r\n            if (/([a-zA-Z_!*'~\\+-.]+(\\.[a-zA-Z_!*'~\\+-.])*@[a-zA-Z]+(\\.[a-zA-Z]+))/gi.test(firstFormEmail.value) && firstFormEmail.value !== '') {\r\n            } else {\r\n                isError = true;\r\n            }\r\n            if (/[\\d\\-\\)\\(]{6,}/gi.test(firstFormTel.value) && firstFormTel.value !== '') {\r\n            } else {\r\n                isError = true;\r\n            }\r\n            if (!isError) {\r\n            }\r\n        })\r\n    ))  */\r\n};\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

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