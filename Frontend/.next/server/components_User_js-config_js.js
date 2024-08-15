/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_User_js-config_js";
exports.ids = ["components_User_js-config_js"];
exports.modules = {

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CURRENT_USER_QUERY\": function() { return /* binding */ CURRENT_USER_QUERY; },\n/* harmony export */   \"useUser\": function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CURRENT_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n\n    query{\n        authenticatedItem {\n         ... on User {\n            id\n            email \n            name\n            #TODO: query the cart once we have it \n            cart {\n                id\n                quantity\n                product {\n                    id \n                    price \n                    name\n                    description\n                    photo {\n                        image {\n                            publicUrlTransformed\n                        }\n                    }\n                }\n            }\n         }   \n        }\n    } \n`;\nfunction useUser() {\n  const {\n    data\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(CURRENT_USER_QUERY);\n  return data === null || data === void 0 ? void 0 : data.authenticatedItem;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1VzZXIuanM/NTY1OCJdLCJuYW1lcyI6WyJDVVJSRU5UX1VTRVJfUVVFUlkiLCJncWwiLCJ1c2VVc2VyIiwiZGF0YSIsInVzZVF1ZXJ5IiwiYXV0aGVudGljYXRlZEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUdPLE1BQU1BLGtCQUFrQixHQUFHQywrQ0FBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0EzQk87QUErQkEsU0FBU0MsT0FBVCxHQUFrQjtBQUVyQixRQUFNO0FBQUNDO0FBQUQsTUFBU0Msd0RBQVEsQ0FBQ0osa0JBQUQsQ0FBdkI7QUFDQSxTQUFPRyxJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRUUsaUJBQWI7QUFFSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3FsLCB1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5cbmV4cG9ydCBjb25zdCBDVVJSRU5UX1VTRVJfUVVFUlkgPSBncWxgXG5cbiAgICBxdWVyeXtcbiAgICAgICAgYXV0aGVudGljYXRlZEl0ZW0ge1xuICAgICAgICAgLi4uIG9uIFVzZXIge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGVtYWlsIFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgI1RPRE86IHF1ZXJ5IHRoZSBjYXJ0IG9uY2Ugd2UgaGF2ZSBpdCBcbiAgICAgICAgICAgIGNhcnQge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgcXVhbnRpdHlcbiAgICAgICAgICAgICAgICBwcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAgICAgaWQgXG4gICAgICAgICAgICAgICAgICAgIHByaWNlIFxuICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIHBob3RvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfSAgIFxuICAgICAgICB9XG4gICAgfSBcbmA7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVXNlcigpe1xuXG4gICAgY29uc3Qge2RhdGF9ID0gdXNlUXVlcnkoQ1VSUkVOVF9VU0VSX1FVRVJZKTtcbiAgICByZXR1cm4gZGF0YT8uYXV0aGVudGljYXRlZEl0ZW07XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/User.js\n");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"endpoint\": function() { return /* binding */ endpoint; },\n/* harmony export */   \"prodEndpoint\": function() { return /* binding */ prodEndpoint; },\n/* harmony export */   \"perPage\": function() { return /* binding */ perPage; }\n/* harmony export */ });\n// This is client side config only - don't put anything in here that shouldn't be public!\nconst endpoint = `http://localhost:3000/api/graphql`;\nconst prodEndpoint = `fill me in when we deploy`;\nconst perPage = 4;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb25maWcuanM/YTFiYyJdLCJuYW1lcyI6WyJlbmRwb2ludCIsInByb2RFbmRwb2ludCIsInBlclBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ08sTUFBTUEsUUFBUSxHQUFJLG1DQUFsQjtBQUNBLE1BQU1DLFlBQVksR0FBSSwyQkFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBaEIiLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIGNsaWVudCBzaWRlIGNvbmZpZyBvbmx5IC0gZG9uJ3QgcHV0IGFueXRoaW5nIGluIGhlcmUgdGhhdCBzaG91bGRuJ3QgYmUgcHVibGljIVxuZXhwb3J0IGNvbnN0IGVuZHBvaW50ID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JhcGhxbGA7XG5leHBvcnQgY29uc3QgcHJvZEVuZHBvaW50ID0gYGZpbGwgbWUgaW4gd2hlbiB3ZSBkZXBsb3lgO1xuZXhwb3J0IGNvbnN0IHBlclBhZ2UgPSA0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ })

};
;