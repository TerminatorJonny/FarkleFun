"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./pages/Header.js\");\n/* harmony import */ var _Instruct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instruct */ \"./pages/Instruct.js\");\n/* harmony import */ var _PlayersBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayersBox */ \"./pages/PlayersBox.js\");\n/* harmony import */ var _ButtonBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ButtonBox */ \"./pages/ButtonBox.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ \"./pages/Footer.js\");\n/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dice */ \"./pages/dice.js\");\n\n\n\n\n\n\n\n\nconst App = ()=>{\n    var value = [];\n    function rollDice(diceToRoll) {\n        var diceResults = new Array(diceToRoll);\n        value = [\n            ...diceResults\n        ].map(()=>Math.floor(Math.random() * 6) + 1);\n    }\n    function onDiceSelected() {\n        return value;\n    }\n    var dice = [];\n    var diceArray = dice.map(rollDice);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flexbox-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flexbox-item flexbox-item-1\",\n            style: {\n                position: \"relative\",\n                minHeight: \"100vh\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Instruct__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box-dice\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"diceshoe\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dice__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                onDiceSelected: onDiceSelected\n                            }, void 0, false, {\n                                fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dice__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                onDiceSelected: onDiceSelected\n                            }, void 0, false, {\n                                fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dice__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                onDiceSelected: onDiceSelected\n                            }, void 0, false, {\n                                fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dice__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                onDiceSelected: onDiceSelected\n                            }, void 0, false, {\n                                fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dice__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                onDiceSelected: onDiceSelected\n                            }, void 0, false, {\n                                fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dice__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                onDiceSelected: onDiceSelected\n                            }, void 0, false, {\n                                fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayersBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    playercount: 2\n                }, void 0, false, {\n                    fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    rollDice: rollDice\n                }, void 0, false, {\n                    fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ0k7QUFDSTtBQUNJO0FBQ0Y7QUFDTjtBQUNKO0FBRTFCLE1BQU1PLE1BQU0sSUFBTTtJQUNoQixJQUFJQyxRQUFRLEVBQUU7SUFDZCxTQUFTQyxTQUFTQyxVQUFVLEVBQUU7UUFDNUIsSUFBSUMsY0FBYyxJQUFJQyxNQUFNRjtRQUM1QkYsUUFBUTtlQUFJRztTQUFZLENBQUNFLEdBQUcsQ0FBQyxJQUFNQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSyxLQUFLO0lBQ3JFO0lBQ0EsU0FBU0MsaUJBQWlCO1FBQ3hCLE9BQU9UO0lBQ1Q7SUFDQSxJQUFJVSxPQUFPLEVBQUU7SUFDYixJQUFJQyxZQUFZRCxLQUFLTCxHQUFHLENBQUNKO0lBQ3pCLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUNDQyxXQUFVO1lBQ1ZDLE9BQU87Z0JBQUVDLFVBQVU7Z0JBQVlDLFdBQVc7WUFBUTs7OEJBRWxELDhEQUFDdkIsK0NBQU1BOzs7Ozs4QkFDUCw4REFBQ0MsaURBQVFBOzs7Ozs4QkFDVCw4REFBQ2tCO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNmLDZDQUFJQTtnQ0FBQ1csZ0JBQWdCQTs7Ozs7OzBDQUN0Qiw4REFBQ1gsNkNBQUlBO2dDQUFDVyxnQkFBZ0JBOzs7Ozs7MENBQ3RCLDhEQUFDWCw2Q0FBSUE7Z0NBQUNXLGdCQUFnQkE7Ozs7OzswQ0FDdEIsOERBQUNYLDZDQUFJQTtnQ0FBQ1csZ0JBQWdCQTs7Ozs7OzBDQUN0Qiw4REFBQ1gsNkNBQUlBO2dDQUFDVyxnQkFBZ0JBOzs7Ozs7MENBQ3RCLDhEQUFDWCw2Q0FBSUE7Z0NBQUNXLGdCQUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUcxQiw4REFBQ2QsbURBQVVBO29CQUFDc0IsYUFBYTs7Ozs7OzhCQUN6Qiw4REFBQ3JCLGtEQUFTQTtvQkFBQ0ssVUFBVUE7Ozs7Ozs4QkFDckIsOERBQUNKLCtDQUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlmO0tBbkNNRTtBQXFDTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEluc3RydWN0IGZyb20gXCIuL0luc3RydWN0XCI7XHJcbmltcG9ydCBQbGF5ZXJzQm94IGZyb20gXCIuL1BsYXllcnNCb3hcIjtcclxuaW1wb3J0IEJ1dHRvbkJveCBmcm9tIFwiLi9CdXR0b25Cb3hcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IERpY2UgZnJvbSBcIi4vZGljZVwiO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIHZhciB2YWx1ZSA9IFtdO1xyXG4gIGZ1bmN0aW9uIHJvbGxEaWNlKGRpY2VUb1JvbGwpIHtcclxuICAgIHZhciBkaWNlUmVzdWx0cyA9IG5ldyBBcnJheShkaWNlVG9Sb2xsKTtcclxuICAgIHZhbHVlID0gWy4uLmRpY2VSZXN1bHRzXS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gb25EaWNlU2VsZWN0ZWQoKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG4gIHZhciBkaWNlID0gW107XHJcbiAgdmFyIGRpY2VBcnJheSA9IGRpY2UubWFwKHJvbGxEaWNlKSBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Ym94LWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleGJveC1pdGVtIGZsZXhib3gtaXRlbS0xXCJcclxuICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBtaW5IZWlnaHQ6IFwiMTAwdmhcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxJbnN0cnVjdCAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWRpY2VcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGljZXNob2VcIj5cclxuICAgICAgICAgICAgPERpY2Ugb25EaWNlU2VsZWN0ZWQ9e29uRGljZVNlbGVjdGVkfSAvPlxyXG4gICAgICAgICAgICA8RGljZSBvbkRpY2VTZWxlY3RlZD17b25EaWNlU2VsZWN0ZWR9IC8+XHJcbiAgICAgICAgICAgIDxEaWNlIG9uRGljZVNlbGVjdGVkPXtvbkRpY2VTZWxlY3RlZH0gLz5cclxuICAgICAgICAgICAgPERpY2Ugb25EaWNlU2VsZWN0ZWQ9e29uRGljZVNlbGVjdGVkfSAvPlxyXG4gICAgICAgICAgICA8RGljZSBvbkRpY2VTZWxlY3RlZD17b25EaWNlU2VsZWN0ZWR9IC8+XHJcbiAgICAgICAgICAgIDxEaWNlIG9uRGljZVNlbGVjdGVkPXtvbkRpY2VTZWxlY3RlZH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxQbGF5ZXJzQm94IHBsYXllcmNvdW50PXsyfSAvPlxyXG4gICAgICAgIDxCdXR0b25Cb3ggcm9sbERpY2U9e3JvbGxEaWNlfSAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJJbnN0cnVjdCIsIlBsYXllcnNCb3giLCJCdXR0b25Cb3giLCJGb290ZXIiLCJEaWNlIiwiQXBwIiwidmFsdWUiLCJyb2xsRGljZSIsImRpY2VUb1JvbGwiLCJkaWNlUmVzdWx0cyIsIkFycmF5IiwibWFwIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwib25EaWNlU2VsZWN0ZWQiLCJkaWNlIiwiZGljZUFycmF5IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwb3NpdGlvbiIsIm1pbkhlaWdodCIsInBsYXllcmNvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});