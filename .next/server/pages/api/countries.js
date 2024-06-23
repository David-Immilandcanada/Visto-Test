"use strict";
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
exports.id = "pages/api/countries";
exports.ids = ["pages/api/countries"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/countries.js":
/*!************************************!*\
  !*** ./src/pages/api/countries.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getCountriesByName = async (req, res)=>{\n    const { name  } = req.query;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`https://restcountries.com/v2/name/${name}`);\n        res.status(200).json(response.data);\n    } catch (error) {\n        res.status(500).json({\n            error: \"Error fetching countries\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCountriesByName);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NvdW50cmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxrQkFBa0IsR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUMzQyxNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFDMUIsSUFBSTtRQUNBLE1BQU1DLFFBQVEsR0FBRyxNQUFNTixpREFBUyxDQUFDLENBQUMsa0NBQWtDLEVBQUVJLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0VELEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7SUFDeEMsRUFBRSxPQUFPQyxLQUFLLEVBQUU7UUFDWlIsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxLQUFLLEVBQUUsMEJBQTBCO1NBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWVWLGtCQUFrQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlzdG8tdGVjaC10ZXN0LW5leHQvLi9zcmMvcGFnZXMvYXBpL2NvdW50cmllcy5qcz83NzNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBnZXRDb3VudHJpZXNCeU5hbWUgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92Mi9uYW1lLyR7bmFtZX1gKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm9yIGZldGNoaW5nIGNvdW50cmllcycgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDb3VudHJpZXNCeU5hbWU7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldENvdW50cmllc0J5TmFtZSIsInJlcSIsInJlcyIsIm5hbWUiLCJxdWVyeSIsInJlc3BvbnNlIiwiZ2V0Iiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/countries.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/countries.js"));
module.exports = __webpack_exports__;

})();