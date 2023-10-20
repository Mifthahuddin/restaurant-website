/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/carousel.js":
/*!*****************************!*\
  !*** ./src/app/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   carouselFromAPI: () => (/* binding */ carouselFromAPI)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\nconst carouselFromAPI = async () => {\n  try {\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood\");\n    const meals = data.meals;\n    const carouselContainer = document.getElementById(\"carouselContainer\");\n    const carousel = document.createElement(\"div\");\n    carousel.id = \"carouselExampleIndicators\";\n    carousel.classList.add(\"carousel\", \"slide\");\n    const carouselIndicators = document.createElement(\"div\");\n    carouselIndicators.classList.add(\"carousel-indicators\");\n    meals.forEach((_, index) => {\n      const indicator = document.createElement(\"button\");\n      indicator.type = \"button\";\n      indicator.dataset.bsTarget = \"#carouselExampleIndicators\";\n      indicator.dataset.bsSlideTo = index.toString();\n      if (index === 0) {\n        indicator.classList.add(\"active\");\n      }\n      carouselIndicators.appendChild(indicator);\n    });\n    const carouselInner = document.createElement(\"div\");\n    carouselInner.classList.add(\"carousel-inner\");\n    meals.forEach((meal, index) => {\n      const carouselItem = document.createElement(\"div\");\n      carouselItem.classList.add(\"carousel-item\");\n      if (index === 0) {\n        carouselItem.classList.add(\"active\");\n      }\n      const img = document.createElement(\"img\");\n      img.classList.add(\"d-block\", \"w-100\");\n      img.src = meal.strMealThumb || \"img/default.jpg\";\n      const carouselCaption = document.createElement(\"div\");\n      carouselCaption.classList.add(\"carousel-caption\");\n      const captionText = document.createElement(\"h5\");\n      captionText.textContent = meal.strMeal;\n      carouselCaption.appendChild(captionText);\n      carouselItem.appendChild(img);\n      carouselItem.appendChild(carouselCaption);\n      carouselInner.appendChild(carouselItem);\n    });\n    carousel.appendChild(carouselIndicators);\n    carousel.appendChild(carouselInner);\n\n    // Create carousel controls\n    const prevButton = document.createElement(\"button\");\n    prevButton.classList.add(\"carousel-control-prev\");\n    prevButton.type = \"button\";\n    prevButton.dataset.bsTarget = \"#carouselExampleIndicators\";\n    prevButton.dataset.bsSlide = \"prev\";\n    prevButton.innerHTML = '<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"visually-hidden\">Previous</span>';\n    const nextButton = document.createElement(\"button\");\n    nextButton.classList.add(\"carousel-control-next\");\n    nextButton.type = \"button\";\n    nextButton.dataset.bsTarget = \"#carouselExampleIndicators\";\n    nextButton.dataset.bsSlide = \"next\";\n    nextButton.innerHTML = '<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"visually-hidden\">Next</span>';\n    carousel.appendChild(prevButton);\n    carousel.appendChild(nextButton);\n    carouselContainer.appendChild(carousel);\n  } catch (error) {\n    console.error(error);\n  }\n};\nwindow.addEventListener(\"load\", carouselFromAPI);\n\n//# sourceURL=webpack://aplikasi-web/./src/app/carousel.js?");

/***/ }),

/***/ "./src/app/filter.js":
/*!***************************!*\
  !*** ./src/app/filter.js ***!
  \***************************/
/***/ (() => {

eval("class AlphabeticalFilter extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({\n      mode: \"open\"\n    });\n    this.shadowRoot.innerHTML = `\n            <style>\n                select {\n                    padding: 5px;\n                    font-size: 14px;\n                    border-radius: 4px;\n                    color: white;\n                    background-color: #6c757d;\n                    width: 80px; \n                    height: 37px;\n                }\n                @media (max-width: 767px) {\n                    select {\n                        width: 100%;\n                        margin: 5px 0; \n                        text-align: center;                    \n                    }\n                }\n            </style>\n            <select id=\"filter\" name=\"filter\">\n                <option value=\"az\">A-Z</option>\n                <option value=\"za\">Z-A</option>\n            </select>\n        `;\n    this.handleFilterChange = this.handleFilterChange.bind(this);\n  }\n  connectedCallback() {\n    this.shadowRoot.querySelector(\"#filter\").addEventListener(\"change\", this.handleFilterChange);\n  }\n  disconnectedCallback() {\n    this.shadowRoot.querySelector(\"#filter\").removeEventListener(\"change\", this.handleFilterChange);\n  }\n  handleFilterChange() {\n    const filterValue = this.shadowRoot.querySelector(\"#filter\").value;\n    this.dispatchEvent(new CustomEvent(\"filter-changed\", {\n      detail: filterValue\n    }));\n  }\n}\ncustomElements.define(\"alphabetical-filter\", AlphabeticalFilter);\n\n//# sourceURL=webpack://aplikasi-web/./src/app/filter.js?");

/***/ }),

/***/ "./src/app/restaurant.js":
/*!*******************************!*\
  !*** ./src/app/restaurant.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchCategories: () => (/* binding */ searchCategories),\n/* harmony export */   toggleDescription: () => (/* binding */ toggleDescription),\n/* harmony export */   truncateText: () => (/* binding */ truncateText)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';\nlet categories = [];\nlet sortOrder = 'az';\nconst fetchDataAndDisplay = async () => {\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(apiUrl);\n    categories = response.data.categories;\n    if (sortOrder === 'az') {\n      categories.sort((a, b) => a.strCategory.localeCompare(b.strCategory));\n    } else if (sortOrder === 'za') {\n      categories.sort((a, b) => b.strCategory.localeCompare(a.strCategory));\n    }\n    const cardRow = document.getElementById('cardRow');\n    cardRow.classList.add('justify-content-center');\n    cardRow.innerHTML = '';\n    categories.forEach(category => {\n      const categoryCard = createCategoryCard(category);\n      cardRow.appendChild(categoryCard);\n    });\n  } catch (error) {\n    console.error('Error fetching data:', error);\n  }\n};\nconst searchCategories = query => {\n  const cardRow = document.getElementById('cardRow');\n  cardRow.innerHTML = '';\n  const filteredCategories = categories.filter(category => category.strCategory.toLowerCase().includes(query.toLowerCase()));\n  if (filteredCategories.length === 0) {\n    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n      icon: 'error',\n      title: 'Makanan Tidak Ada',\n      text: 'Maaf, tidak ada hasil yang cocok dengan pencarian Anda.'\n    });\n    fetchDataAndDisplay();\n  }\n  filteredCategories.forEach(category => {\n    const categoryCard = createCategoryCard(category);\n    cardRow.appendChild(categoryCard);\n  });\n};\nconst createCategoryCard = category => {\n  const categoryCard = document.createElement('div');\n  categoryCard.className = 'card mb-4';\n  categoryCard.style.width = '18rem';\n  categoryCard.innerHTML = `\n        <img src=\"${category.strCategoryThumb}\" class=\"card-img-top\" alt=\"${category.strCategory}\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">${category.strCategory}</h5>\n            <p class=\"card-text\">${truncateText(category.strCategoryDescription)}</p>\n            <button class=\"btn btn-primary toggle-description\">Show Description</button>\n        </div>\n    `;\n  const toggleButton = categoryCard.querySelector('.toggle-description');\n  toggleButton.addEventListener('click', () => {\n    const descriptionText = categoryCard.querySelector('.card-text');\n    toggleDescription(descriptionText);\n  });\n  return categoryCard;\n};\nconst truncateText = function (text) {\n  let maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;\n};\nconst toggleDescription = descriptionElement => {\n  if (descriptionElement.classList.contains('show-description')) {\n    descriptionElement.classList.remove('show-description');\n  } else {\n    descriptionElement.classList.add('show-description');\n  }\n};\nwindow.onload = () => {\n  fetchDataAndDisplay();\n  const searchInput = document.getElementById('searchInput');\n  const searchButton = document.getElementById('searchButton');\n  const refreshButton = document.getElementById('refreshButton');\n  const alphabeticalFilter = document.querySelector('alphabetical-filter');\n  searchButton.addEventListener('click', () => {\n    const query = searchInput.value.trim();\n    if (query === '') {\n      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n        icon: 'error',\n        title: 'Silahkan Input Menu',\n        text: 'Mohon masukkan nama makanan terlebih dahulu.'\n      });\n    } else {\n      searchCategories(query);\n    }\n  });\n  searchInput.addEventListener('keydown', event => {\n    if (event.key === 'Enter') {\n      const query = searchInput.value.trim();\n      if (query === '') {\n        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n          icon: 'error',\n          title: 'Silahkan Input Menu',\n          text: 'Mohon masukkan nama makanan terlebih dahulu.'\n        });\n      } else {\n        searchCategories(query);\n      }\n    }\n  });\n  refreshButton.addEventListener('click', () => {\n    fetchDataAndDisplay();\n  });\n  alphabeticalFilter.addEventListener('filter-changed', event => {\n    sortOrder = event.detail;\n    fetchDataAndDisplay();\n  });\n};\n\n//# sourceURL=webpack://aplikasi-web/./src/app/restaurant.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _app_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/filter */ \"./src/app/filter.js\");\n/* harmony import */ var _app_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_filter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_restaurant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/restaurant */ \"./src/app/restaurant.js\");\n/* harmony import */ var _app_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/carousel */ \"./src/app/carousel.js\");\n__webpack_require__(/*! ./vendor/vendor */ \"./src/vendor/vendor.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://aplikasi-web/./src/index.js?");

/***/ }),

/***/ "./src/vendor/vendor.js":
/*!******************************!*\
  !*** ./src/vendor/vendor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/fontawesome */ \"./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/solid */ \"./node_modules/@fortawesome/fontawesome-free/js/solid.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/regular */ \"./node_modules/@fortawesome/fontawesome-free/js/regular.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/brands */ \"./node_modules/@fortawesome/fontawesome-free/js/brands.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack://aplikasi-web/./src/vendor/vendor.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://aplikasi-web/./src/style.scss?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"import": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkaplikasi_web"] = self["webpackChunkaplikasi_web"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_fontawesome-free_js_brands_js-node_modules_fortawesome_fonta-7bde5c","vendors-node_modules_axios_lib_axios_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;