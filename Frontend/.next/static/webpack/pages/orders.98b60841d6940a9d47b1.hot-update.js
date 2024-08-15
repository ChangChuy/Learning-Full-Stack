/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OrdersPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_changchuy_Desktop_SIck_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var _components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styles/OrderItemStyles */ \"./components/styles/OrderItemStyles.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/changchuy/Desktop/SIck/Advanced-React/sick-fits/frontend/pages/orders.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = (0,_Users_changchuy_Desktop_SIck_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\\n  grid-gap: 4rem;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_changchuy_Desktop_SIck_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query USER_ORDERS_QUERY {\\n    allOrders {\\n      id\\n      charge\\n      total\\n      user {\\n        id\\n      }\\n      items {\\n        id\\n        name\\n        description\\n        price\\n        quantity\\n        photo {\\n          image {\\n            publicUrlTransformed\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar USER_ORDERS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_7__.default)(_templateObject());\nvar OrderUl = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.ul(_templateObject2());\n_c = OrderUl;\n\nfunction countItemsInAnOrder(order) {\n  return order.items.reduce(function (tally, item) {\n    return tally + item.quantity;\n  }, 0);\n}\n\nfunction OrdersPage() {\n  _s();\n\n  var _this = this;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(USER_ORDERS_QUERY),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"loading .....\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 12\n    }, this);\n  }\n\n  if (error) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__.default, {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 12\n    }, this);\n  }\n\n  var allOrders = data.allOrders;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [\"Your Orders (\", allOrders.length, \")\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"you have \", allOrders.length, \" of order(s).\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderUl, {\n      children: allOrders.map(function (order) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_5__.default, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n            href: \"/order/\".concat(order.id),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"order-meta\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  children: [countItemsInAnOrder(order), \" items \"]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  children: [order.items.length, \" Product\", order.items.length === 1 ? \"\" : \"s\"]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 67,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__.default)(order.total)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: \"images\",\n                  children: order.items.map(function (item) {\n                    var _item$photo, _item$photo$image;\n\n                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                      src: (_item$photo = item.photo) === null || _item$photo === void 0 ? void 0 : (_item$photo$image = _item$photo.image) === null || _item$photo$image === void 0 ? void 0 : _item$photo$image.publicUrlTransformed,\n                      alt: item.name\n                    }, \"image-\".concat(item.id), false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 74,\n                      columnNumber: 21\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 72,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 15\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, this);\n}\n\n_s(OrdersPage, \"tP+6C5plfRwxqCbBj3cMUcL7Opk=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery];\n});\n\n_c2 = OrdersPage;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"OrderUl\");\n$RefreshReg$(_c2, \"OrdersPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzLmpzPzU3ZWIiXSwibmFtZXMiOlsiVVNFUl9PUkRFUlNfUVVFUlkiLCJncWwiLCJPcmRlclVsIiwic3R5bGVkIiwiY291bnRJdGVtc0luQW5PcmRlciIsIm9yZGVyIiwiaXRlbXMiLCJyZWR1Y2UiLCJ0YWxseSIsIml0ZW0iLCJxdWFudGl0eSIsIk9yZGVyc1BhZ2UiLCJ1c2VRdWVyeSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJhbGxPcmRlcnMiLCJsZW5ndGgiLCJtYXAiLCJpZCIsImZvcm1hdE1vbmV5IiwidG90YWwiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0Msb0RBQUgsbUJBQXZCO0FBeUJBLElBQU1DLE9BQU8sR0FBR0MseURBQUgsb0JBQWI7S0FBTUQsTzs7QUFNTixTQUFTRSxtQkFBVCxDQUE2QkMsS0FBN0IsRUFBb0M7QUFDbEMsU0FBT0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUIsVUFBQ0MsS0FBRCxFQUFRQyxJQUFSO0FBQUEsV0FBaUJELEtBQUssR0FBR0MsSUFBSSxDQUFDQyxRQUE5QjtBQUFBLEdBQW5CLEVBQTJELENBQTNELENBQVA7QUFDRDs7QUFFYyxTQUFTQyxVQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0ZDLHdEQUFRLENBQUNaLGlCQUFELENBRE47QUFBQSxNQUMzQmEsSUFEMkIsYUFDM0JBLElBRDJCO0FBQUEsTUFDckJDLE9BRHFCLGFBQ3JCQSxPQURxQjtBQUFBLE1BQ1pDLEtBRFksYUFDWkEsS0FEWTs7QUFFbkMsTUFBSUQsT0FBSixFQUFhO0FBQ1gsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUNELE1BQUlDLEtBQUosRUFBVztBQUNULHdCQUFPLDhEQUFDLDZEQUFEO0FBQWMsV0FBSyxFQUFFQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFQa0MsTUFRM0JDLFNBUjJCLEdBUWJILElBUmEsQ0FRM0JHLFNBUjJCO0FBU25DLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLG9DQUFxQkEsU0FBUyxDQUFDQyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFBLDhCQUFjRCxTQUFTLENBQUNDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0UsOERBQUMsT0FBRDtBQUFBLGdCQUNHRCxTQUFTLENBQUNFLEdBQVYsQ0FBYyxVQUFDYixLQUFEO0FBQUEsNEJBQ2IsOERBQUMsdUVBQUQ7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLG1CQUFZQSxLQUFLLENBQUNjLEVBQWxCLENBQVY7QUFBQSxtQ0FDQTtBQUFLLHVCQUFTLEVBQUMsWUFBZjtBQUFBLHFDQUNFO0FBQUEsd0NBQ0U7QUFBQSw2QkFBSWYsbUJBQW1CLENBQUNDLEtBQUQsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQSw2QkFDR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlXLE1BRGYsY0FFR1osS0FBSyxDQUFDQyxLQUFOLENBQVlXLE1BQVosS0FBdUIsQ0FBdkIsR0FBMkIsRUFBM0IsR0FBZ0MsR0FGbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBTUU7QUFBQSw0QkFBSUcseURBQVcsQ0FBQ2YsS0FBSyxDQUFDZ0IsS0FBUDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkYsZUFPRTtBQUFLLDJCQUFTLEVBQUMsUUFBZjtBQUFBLDRCQUNHaEIsS0FBSyxDQUFDQyxLQUFOLENBQVlZLEdBQVosQ0FBZ0IsVUFBQ1QsSUFBRDtBQUFBOztBQUFBLHdDQUNmO0FBRUUseUJBQUcsaUJBQUVBLElBQUksQ0FBQ2EsS0FBUCxxRUFBRSxZQUFZQyxLQUFkLHNEQUFFLGtCQUFtQkMsb0JBRjFCO0FBR0UseUJBQUcsRUFBRWYsSUFBSSxDQUFDZ0I7QUFIWix1Q0FDZ0JoQixJQUFJLENBQUNVLEVBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRGU7QUFBQSxtQkFBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQ0Q7O0dBNUN1QlIsVTtVQUNXQyxvRDs7O01BRFhELFUiLCJmaWxlIjoiLi9wYWdlcy9vcmRlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2VcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSBcIi4uL2xpYi9mb3JtYXRNb25leVwiO1xuaW1wb3J0IE9yZGVySXRlbVN0eWxlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9zdHlsZXMvT3JkZXJJdGVtU3R5bGVzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBVU0VSX09SREVSU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgVVNFUl9PUkRFUlNfUVVFUlkge1xuICAgIGFsbE9yZGVycyB7XG4gICAgICBpZFxuICAgICAgY2hhcmdlXG4gICAgICB0b3RhbFxuICAgICAgdXNlciB7XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgICBpdGVtcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgcHJpY2VcbiAgICAgICAgcXVhbnRpdHlcbiAgICAgICAgcGhvdG8ge1xuICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBPcmRlclVsID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDRyZW07XG5gO1xuXG5mdW5jdGlvbiBjb3VudEl0ZW1zSW5Bbk9yZGVyKG9yZGVyKSB7XG4gIHJldHVybiBvcmRlci5pdGVtcy5yZWR1Y2UoKHRhbGx5LCBpdGVtKSA9PiB0YWxseSArIGl0ZW0ucXVhbnRpdHksIDApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlcnNQYWdlKCkge1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShVU0VSX09SREVSU19RVUVSWSk7XG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxwPmxvYWRpbmcgLi4uLi48L3A+O1xuICB9XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz47XG4gIH1cbiAgY29uc3QgeyBhbGxPcmRlcnMgfSA9IGRhdGE7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+WW91ciBPcmRlcnMgKHthbGxPcmRlcnMubGVuZ3RofSk8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgyPnlvdSBoYXZlIHthbGxPcmRlcnMubGVuZ3RofSBvZiBvcmRlcihzKS48L2gyPlxuICAgICAgPE9yZGVyVWw+XG4gICAgICAgIHthbGxPcmRlcnMubWFwKChvcmRlcikgPT4gKFxuICAgICAgICAgIDxPcmRlckl0ZW1TdHlsZXM+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL29yZGVyLyR7b3JkZXIuaWR9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLW1ldGFcIj5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPHA+e2NvdW50SXRlbXNJbkFuT3JkZXIob3JkZXIpfSBpdGVtcyA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICB7b3JkZXIuaXRlbXMubGVuZ3RofSBQcm9kdWN0XG4gICAgICAgICAgICAgICAgICB7b3JkZXIuaXRlbXMubGVuZ3RoID09PSAxID8gXCJcIiA6IFwic1wifVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD57Zm9ybWF0TW9uZXkob3JkZXIudG90YWwpfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlc1wiPlxuICAgICAgICAgICAgICAgICAge29yZGVyLml0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtgaW1hZ2UtJHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L09yZGVySXRlbVN0eWxlcz5cbiAgICAgICAgKSl9XG4gICAgICA8L09yZGVyVWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/orders.js\n");

/***/ })

});