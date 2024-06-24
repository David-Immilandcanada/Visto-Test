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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CountryProvider\": () => (/* binding */ CountryProvider),\n/* harmony export */   \"useCountry\": () => (/* binding */ useCountry)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CountryContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst CountryProvider = ({ children  })=>{\n    const { 0: searchResults , 1: setSearchResults  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: selectedCountry , 1: setSelectedCountryState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const searchCountries = async (query)=>{\n        if (query.length > 0) {\n            const res = await fetch(`/api/countries?name=${query}`);\n            const data = await res.json();\n            setSearchResults(data);\n        } else {\n            setSearchResults([]);\n        }\n    };\n    const setSelectedCountry = (country)=>{\n        setSelectedCountryState(country);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountryContext.Provider, {\n        value: {\n            searchResults,\n            selectedCountry,\n            searchCountries,\n            setSelectedCountry\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\David\\\\Documents\\\\Immiland\\\\visto-test\\\\visto-tech-test-nextjs\\\\src\\\\context\\\\CountryContext.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\nconst useCountry = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CountryContext);\n    if (!context) {\n        throw new Error(\"useCountry must be used within a CountryProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Db3VudHJ5Q29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBbUY7QUE4Qm5GLE1BQU1JLGNBQWMsaUJBQUdILG9EQUFhLENBQWtDSSxTQUFTLENBQUM7QUFFekUsTUFBTUMsZUFBZSxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUEyQixHQUFLO0lBQ3RFLE1BQU0sS0FBQ0MsYUFBYSxNQUFFQyxnQkFBZ0IsTUFBSU4sK0NBQVEsQ0FBWSxFQUFFLENBQUM7SUFDakUsTUFBTSxLQUFDTyxlQUFlLE1BQUVDLHVCQUF1QixNQUFJUiwrQ0FBUSxDQUFpQixJQUFJLENBQUM7SUFFakYsTUFBTVMsZUFBZSxHQUFHLE9BQU9DLEtBQWEsR0FBSztRQUM3QyxJQUFJQSxLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEIsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLG9CQUFvQixFQUFFSCxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELE1BQU1JLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksRUFBRTtZQUM3QlQsZ0JBQWdCLENBQUNRLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU87WUFDSFIsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNVSxrQkFBa0IsR0FBRyxDQUFDQyxPQUFnQixHQUFLO1FBQzdDVCx1QkFBdUIsQ0FBQ1MsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHFCQUNJLDhEQUFDaEIsY0FBYyxDQUFDaUIsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRWQsYUFBYTtZQUFFRSxlQUFlO1lBQUVFLGVBQWU7WUFBRU8sa0JBQWtCO1NBQUU7a0JBQ2xHWixRQUFROzs7OztpQkFDYSxDQUM1QjtBQUNOLENBQUMsQ0FBQztBQUVLLE1BQU1nQixVQUFVLEdBQUcsSUFBMkI7SUFDakQsTUFBTUMsT0FBTyxHQUFHdEIsaURBQVUsQ0FBQ0UsY0FBYyxDQUFDO0lBQzFDLElBQUksQ0FBQ29CLE9BQU8sRUFBRTtRQUNWLE1BQU0sSUFBSUMsS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNELE9BQU9ELE9BQU8sQ0FBQztBQUNuQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXN0by10ZWNoLXRlc3QtbmV4dC8uL3NyYy9jb250ZXh0L0NvdW50cnlDb250ZXh0LnRzeD81YjNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCBLZXkgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgQ291bnRyeSB7XHJcbiAgICBhbHBoYTNDb2RlOiBLZXkgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbmF0aXZlTmFtZTogc3RyaW5nO1xyXG4gICAgb2ZmaWNpYWxOYW1lOiBzdHJpbmc7XHJcbiAgICBjdXJyZW5jaWVzOiB7IG5hbWU6IHN0cmluZzsgY29kZTogc3RyaW5nOyBzeW1ib2w6IHN0cmluZyB9W107XHJcbiAgICBjYXBpdGFsOiBzdHJpbmc7XHJcbiAgICByZWdpb246IHN0cmluZztcclxuICAgIHN1YnJlZ2lvbjogc3RyaW5nO1xyXG4gICAgYm9yZGVyczogc3RyaW5nW107XHJcbiAgICBwb3B1bGF0aW9uOiBudW1iZXI7XHJcbiAgICBsYXRsbmc6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICBmbGFnOiBzdHJpbmc7XHJcbiAgICBjYWxsaW5nQ29kZXM6IHN0cmluZ1tdO1xyXG4gICAgYXJlYTogbnVtYmVyO1xyXG4gICAgZGVtb255bTogc3RyaW5nO1xyXG4gICAgZ2luaTogbnVtYmVyO1xyXG4gICAgbGFuZ3VhZ2VzOiB7IG5hbWU6IHN0cmluZzsgbmF0aXZlTmFtZTogc3RyaW5nIH1bXTtcclxuICAgIHRpbWV6b25lczogc3RyaW5nW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb3VudHJ5Q29udGV4dFByb3BzIHtcclxuICAgIHNlYXJjaFJlc3VsdHM6IENvdW50cnlbXTtcclxuICAgIHNlbGVjdGVkQ291bnRyeTogQ291bnRyeSB8IG51bGw7XHJcbiAgICBzZWFyY2hDb3VudHJpZXM6IChxdWVyeTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgc2V0U2VsZWN0ZWRDb3VudHJ5OiAoY291bnRyeTogQ291bnRyeSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQ291bnRyeUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvdW50cnlDb250ZXh0UHJvcHMgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRyeVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pID0+IHtcclxuICAgIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlPENvdW50cnlbXT4oW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ291bnRyeSwgc2V0U2VsZWN0ZWRDb3VudHJ5U3RhdGVdID0gdXNlU3RhdGU8Q291bnRyeSB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaENvdW50cmllcyA9IGFzeW5jIChxdWVyeTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHF1ZXJ5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvY291bnRyaWVzP25hbWU9JHtxdWVyeX1gKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaFJlc3VsdHMoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRTZWxlY3RlZENvdW50cnkgPSAoY291bnRyeTogQ291bnRyeSkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkQ291bnRyeVN0YXRlKGNvdW50cnkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb3VudHJ5Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzZWFyY2hSZXN1bHRzLCBzZWxlY3RlZENvdW50cnksIHNlYXJjaENvdW50cmllcywgc2V0U2VsZWN0ZWRDb3VudHJ5IH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db3VudHJ5Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ291bnRyeSA9ICgpOiBDb3VudHJ5Q29udGV4dFByb3BzID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvdW50cnlDb250ZXh0KTtcclxuICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlQ291bnRyeSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQ291bnRyeVByb3ZpZGVyJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29udGV4dDtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNvdW50cnlDb250ZXh0IiwidW5kZWZpbmVkIiwiQ291bnRyeVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZWFyY2hSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsInNlbGVjdGVkQ291bnRyeSIsInNldFNlbGVjdGVkQ291bnRyeVN0YXRlIiwic2VhcmNoQ291bnRyaWVzIiwicXVlcnkiLCJsZW5ndGgiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic2V0U2VsZWN0ZWRDb3VudHJ5IiwiY291bnRyeSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDb3VudHJ5IiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/CountryContext.tsx\n");

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