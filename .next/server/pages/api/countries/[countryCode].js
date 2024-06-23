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
exports.id = "pages/api/countries/[countryCode]";
exports.ids = ["pages/api/countries/[countryCode]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/countries/[countryCode].js":
/*!**************************************************!*\
  !*** ./src/pages/api/countries/[countryCode].js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getCountryDetails = async (req, res)=>{\n    const { countryCode  } = req.query;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`https://restcountries.com/v2/alpha/${countryCode}`);\n        res.status(200).json(response.data);\n    } catch (error) {\n        res.status(500).json({\n            error: \"Error fetching country details\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCountryDetails);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NvdW50cmllcy9bY291bnRyeUNvZGVdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLGlCQUFpQixHQUFHLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQzFDLE1BQU0sRUFBRUMsV0FBVyxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSztJQUNqQyxJQUFJO1FBQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU1OLGlEQUFTLENBQUMsQ0FBQyxtQ0FBbUMsRUFBRUksV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNyRkQsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUN4QyxFQUFFLE9BQU9DLEtBQUssRUFBRTtRQUNaUixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLEtBQUssRUFBRSxnQ0FBZ0M7U0FBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZVYsaUJBQWlCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXN0by10ZWNoLXRlc3QtbmV4dC8uL3NyYy9wYWdlcy9hcGkvY291bnRyaWVzL1tjb3VudHJ5Q29kZV0uanM/MWM4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgZ2V0Q291bnRyeURldGFpbHMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgY291bnRyeUNvZGUgfSA9IHJlcS5xdWVyeTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjIvYWxwaGEvJHtjb3VudHJ5Q29kZX1gKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm9yIGZldGNoaW5nIGNvdW50cnkgZGV0YWlscycgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDb3VudHJ5RGV0YWlscztcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0Q291bnRyeURldGFpbHMiLCJyZXEiLCJyZXMiLCJjb3VudHJ5Q29kZSIsInF1ZXJ5IiwicmVzcG9uc2UiLCJnZXQiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/countries/[countryCode].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/countries/[countryCode].js"));
module.exports = __webpack_exports__;

})();