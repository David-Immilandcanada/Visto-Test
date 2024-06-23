/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/CountryContext.tsx":
/*!****************************************!*\
  !*** ./src/context/CountryContext.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CountryProvider\": () => (/* binding */ CountryProvider),\n/* harmony export */   \"useCountry\": () => (/* binding */ useCountry)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CountryContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst CountryProvider = ({ children  })=>{\n    const { 0: searchResults , 1: setSearchResults  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: selectedCountry , 1: setSelectedCountryState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const searchCountries = async (query)=>{\n        if (query.length > 0) {\n            const res = await fetch(`/api/countries?name=${query}`);\n            const data = await res.json();\n            setSearchResults(data);\n        } else {\n            setSearchResults([]);\n        }\n    };\n    const setSelectedCountry = (country)=>{\n        setSelectedCountryState(country);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountryContext.Provider, {\n        value: {\n            searchResults,\n            selectedCountry,\n            searchCountries,\n            setSelectedCountry\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\David\\\\Documents\\\\Immiland\\\\visto-test\\\\visto-tech-test-nextjs\\\\src\\\\context\\\\CountryContext.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\nconst useCountry = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CountryContext);\n    if (!context) {\n        throw new Error(\"useCountry must be used within a CountryProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Db3VudHJ5Q29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBbUY7QUF1Qm5GLE1BQU1JLGNBQWMsaUJBQUdILG9EQUFhLENBQWtDSSxTQUFTLENBQUM7QUFFekUsTUFBTUMsZUFBZSxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUEyQixHQUFLO0lBQ3RFLE1BQU0sS0FBQ0MsYUFBYSxNQUFFQyxnQkFBZ0IsTUFBSU4sK0NBQVEsQ0FBWSxFQUFFLENBQUM7SUFDakUsTUFBTSxLQUFDTyxlQUFlLE1BQUVDLHVCQUF1QixNQUFJUiwrQ0FBUSxDQUFpQixJQUFJLENBQUM7SUFFakYsTUFBTVMsZUFBZSxHQUFHLE9BQU9DLEtBQWEsR0FBSztRQUM3QyxJQUFJQSxLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEIsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLG9CQUFvQixFQUFFSCxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELE1BQU1JLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksRUFBRTtZQUM3QlQsZ0JBQWdCLENBQUNRLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU87WUFDSFIsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNVSxrQkFBa0IsR0FBRyxDQUFDQyxPQUFnQixHQUFLO1FBQzdDVCx1QkFBdUIsQ0FBQ1MsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHFCQUNJLDhEQUFDaEIsY0FBYyxDQUFDaUIsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRWQsYUFBYTtZQUFFRSxlQUFlO1lBQUVFLGVBQWU7WUFBRU8sa0JBQWtCO1NBQUU7a0JBQ2xHWixRQUFROzs7OztpQkFDYSxDQUM1QjtBQUNOLENBQUMsQ0FBQztBQUVLLE1BQU1nQixVQUFVLEdBQUcsSUFBMkI7SUFDakQsTUFBTUMsT0FBTyxHQUFHdEIsaURBQVUsQ0FBQ0UsY0FBYyxDQUFDO0lBQzFDLElBQUksQ0FBQ29CLE9BQU8sRUFBRTtRQUNWLE1BQU0sSUFBSUMsS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNELE9BQU9ELE9BQU8sQ0FBQztBQUNuQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXN0by10ZWNoLXRlc3QtbmV4dC8uL3NyYy9jb250ZXh0L0NvdW50cnlDb250ZXh0LnRzeD81YjNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCBLZXkgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgQ291bnRyeSB7XHJcbiAgICBhbHBoYTNDb2RlOiBLZXkgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb2ZmaWNpYWxOYW1lOiBzdHJpbmc7XHJcbiAgICBuYXRpdmVOYW1lOiBzdHJpbmc7XHJcbiAgICBjdXJyZW5jaWVzOiB7IG5hbWU6IHN0cmluZyB9W107XHJcbiAgICBjYXBpdGFsOiBzdHJpbmc7XHJcbiAgICByZWdpb246IHN0cmluZztcclxuICAgIGJvcmRlcnM6IHN0cmluZ1tdO1xyXG4gICAgcG9wdWxhdGlvbjogbnVtYmVyO1xyXG4gICAgbGF0bG5nOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgcG9zdGFsQ29kZUZvcm1hdDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ291bnRyeUNvbnRleHRQcm9wcyB7XHJcbiAgICBzZWFyY2hSZXN1bHRzOiBDb3VudHJ5W107XHJcbiAgICBzZWxlY3RlZENvdW50cnk6IENvdW50cnkgfCBudWxsO1xyXG4gICAgc2VhcmNoQ291bnRyaWVzOiAocXVlcnk6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIHNldFNlbGVjdGVkQ291bnRyeTogKGNvdW50cnk6IENvdW50cnkpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IENvdW50cnlDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb3VudHJ5Q29udGV4dFByb3BzIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50cnlQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZTxDb3VudHJ5W10+KFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZENvdW50cnksIHNldFNlbGVjdGVkQ291bnRyeVN0YXRlXSA9IHVzZVN0YXRlPENvdW50cnkgfCBudWxsPihudWxsKTtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hDb3VudHJpZXMgPSBhc3luYyAocXVlcnk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmIChxdWVyeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2NvdW50cmllcz9uYW1lPSR7cXVlcnl9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRTZWFyY2hSZXN1bHRzKGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaFJlc3VsdHMoW10pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0U2VsZWN0ZWRDb3VudHJ5ID0gKGNvdW50cnk6IENvdW50cnkpID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZENvdW50cnlTdGF0ZShjb3VudHJ5KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q291bnRyeUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2VhcmNoUmVzdWx0cywgc2VsZWN0ZWRDb3VudHJ5LCBzZWFyY2hDb3VudHJpZXMsIHNldFNlbGVjdGVkQ291bnRyeSB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ291bnRyeUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNvdW50cnkgPSAoKTogQ291bnRyeUNvbnRleHRQcm9wcyA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb3VudHJ5Q29udGV4dCk7XHJcbiAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUNvdW50cnkgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENvdW50cnlQcm92aWRlcicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJDb3VudHJ5Q29udGV4dCIsInVuZGVmaW5lZCIsIkNvdW50cnlQcm92aWRlciIsImNoaWxkcmVuIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJzZWxlY3RlZENvdW50cnkiLCJzZXRTZWxlY3RlZENvdW50cnlTdGF0ZSIsInNlYXJjaENvdW50cmllcyIsInF1ZXJ5IiwibGVuZ3RoIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInNldFNlbGVjdGVkQ291bnRyeSIsImNvdW50cnkiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ291bnRyeSIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/CountryContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_CountryContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/CountryContext */ \"./src/context/CountryContext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n// src/pages/_app.tsx\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CountryContext__WEBPACK_IMPORTED_MODULE_1__.CountryProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\David\\\\Documents\\\\Immiland\\\\visto-test\\\\visto-tech-test-nextjs\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\David\\\\Documents\\\\Immiland\\\\visto-test\\\\visto-tech-test-nextjs\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXFCO0FBQ3JCO0FBQzREO0FBQzdCO0FBRS9CLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQy9DLHFCQUNJLDhEQUFDSCxvRUFBZTtrQkFDWiw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNkLENBQ3BCO0FBQ04sQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXN0by10ZWNoLXRlc3QtbmV4dC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9wYWdlcy9fYXBwLnRzeFxyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgQ291bnRyeVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9Db3VudHJ5Q29udGV4dCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvdW50cnlQcm92aWRlcj5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvQ291bnRyeVByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJDb3VudHJ5UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();