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

/***/ "./pages/ButtonBox.js":
/*!****************************!*\
  !*** ./pages/ButtonBox.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DiceBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiceBox */ \"./pages/DiceBox.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ButtonBox = ()=>{\n    _s();\n    const [playGame, setPlayGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    let player1 = {\n        turn: false,\n        rollCount: 0,\n        currentScore: 0,\n        totalScore: 0\n    };\n    let player2 = {\n        turn: false,\n        rollCount: 0,\n        currentScore: 0,\n        totalScore: 0\n    };\n    function PlayGame() {\n        setPlayGame(true);\n        player1.turn = true;\n        player2.turn = false;\n        player1.rollCount = 0;\n        player1.currentScore = 0;\n        player1.totalScore = 0;\n        PlayerOneTest();\n    // hide PlayGame button ; display Roll button\n    }\n    function PlayerOneTest() {\n        console.log(\"setPlayerGame\" + \" \" + playGame);\n        console.log(\"Player 1 turn?\" + \" \" + player1.turn);\n        console.log(\"Player 2 turn?\" + \" \" + player2.turn);\n        console.log(\"P 1 - rollcount\" + \" \" + player1.rollCount);\n        console.log(\"P 1 - current score\" + \" \" + player1.currentScore);\n        console.log(\"P 1 - total score\" + \" \" + player1.totalScore);\n    }\n    function EndTurn() {\n    // Current players turn = false\n    // Current score added to total score\n    // current score is cleared\n    // roll counter is cleared\n    }\n    function EndGame() {\n    // Current players turn = false\n    // Current score added to total score\n    // current score is cleared\n    // roll counter is cleared\n    }\n    // State - so that one button is displayed as needed.\n    function ButtonActive() {\n    // PlayGame button = true\n    // roll button = false\n    // score button = false\n    // End Turn button = false\n    // End Game button = false\n    }\n    function PlayersTurn() {\n    // Player one default on start = true\n    // after End Turn selected = current player false \n    // after 3 rolls per turn or farkle\n    // on end of turn any current players current score is added to that players total score. \n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"buttonbox-wrapper\",\n        style: {\n            border: \"2px solid black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"buttonbox\",\n            style: {\n                display: \"flex\",\n                direction: \"row\",\n                margin: \"5px\",\n                justifyContent: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"playgame-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>PlayGame(),\n                        children: \"Play Game?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rolldice-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        children: \"Roll Dice?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"scoredice-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        children: \"Score Dice?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 76,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"endturn-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        children: \"End Turn?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"endgame-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        children: \"End Game?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 82,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n            lineNumber: 68,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ButtonBox, \"tulspm1nLy5cvDsmzipMFHg7lfI=\");\n_c = ButtonBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonBox); // this ButtonBox component needs a redesign, created as a placeholder \nvar _c;\n$RefreshReg$(_c, \"ButtonBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UixXQUFVO3dCQUFZQyxPQUFPOzRCQUFFUSxPQUFPOzRCQUFTQyxRQUFROzRCQUFRTCxRQUFRO3dCQUFPO2tDQUFHOzs7Ozs7Ozs7Ozs4QkFFN0YsOERBQUNOO29CQUFJQyxXQUFVO29CQUFpQkMsT0FBTzt3QkFBRU0sV0FBVztvQkFBUzs4QkFDekQsNEVBQUNDO3dCQUFPUixXQUFVO3dCQUFZQyxPQUFPOzRCQUFFUSxPQUFPOzRCQUFTQyxRQUFROzRCQUFRTCxRQUFRO3dCQUFPO2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdHO0dBbEZNdkI7S0FBQUE7QUFvRk4sK0RBQWVBLFNBQVNBLEVBQUMsQ0FFekIsdUVBQXVFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0J1dHRvbkJveC5qcz80OGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGljZUJveCBmcm9tIFwiLi9EaWNlQm94XCI7XHJcblxyXG5cclxuY29uc3QgQnV0dG9uQm94ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtwbGF5R2FtZSwgc2V0UGxheUdhbWVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgbGV0IHBsYXllcjEgPSB7IHR1cm46IGZhbHNlLCByb2xsQ291bnQ6IDAsIGN1cnJlbnRTY29yZTogMCwgdG90YWxTY29yZTogMCB9O1xyXG5cclxuICAgIGxldCBwbGF5ZXIyID0geyB0dXJuOiBmYWxzZSwgcm9sbENvdW50OiAwLCBjdXJyZW50U2NvcmU6IDAsIHRvdGFsU2NvcmU6IDAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBQbGF5R2FtZSgpIHtcclxuICAgICAgICBzZXRQbGF5R2FtZSh0cnVlKTtcclxuICAgICAgICBwbGF5ZXIxLnR1cm4gPSB0cnVlO1xyXG4gICAgICAgIHBsYXllcjIudHVybiA9IGZhbHNlO1xyXG4gICAgICAgIHBsYXllcjEucm9sbENvdW50ID0gMDtcclxuICAgICAgICBwbGF5ZXIxLmN1cnJlbnRTY29yZSA9IDA7XHJcbiAgICAgICAgcGxheWVyMS50b3RhbFNjb3JlID0gMDtcclxuICAgICAgICBQbGF5ZXJPbmVUZXN0KCk7XHJcbiAgICAgICAgLy8gaGlkZSBQbGF5R2FtZSBidXR0b24gOyBkaXNwbGF5IFJvbGwgYnV0dG9uXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUGxheWVyT25lVGVzdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldFBsYXllckdhbWVcIiArIFwiIFwiICsgcGxheUdhbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIDEgdHVybj9cIiArIFwiIFwiICsgcGxheWVyMS50dXJuKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciAyIHR1cm4/XCIgKyBcIiBcIiArIHBsYXllcjIudHVybik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQIDEgLSByb2xsY291bnRcIiArIFwiIFwiICsgcGxheWVyMS5yb2xsQ291bnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUCAxIC0gY3VycmVudCBzY29yZVwiICsgXCIgXCIgKyBwbGF5ZXIxLmN1cnJlbnRTY29yZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQIDEgLSB0b3RhbCBzY29yZVwiICsgXCIgXCIgKyBwbGF5ZXIxLnRvdGFsU2NvcmUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBFbmRUdXJuKCkge1xyXG4gICAgICAgIC8vIEN1cnJlbnQgcGxheWVycyB0dXJuID0gZmFsc2VcclxuICAgICAgICAvLyBDdXJyZW50IHNjb3JlIGFkZGVkIHRvIHRvdGFsIHNjb3JlXHJcbiAgICAgICAgLy8gY3VycmVudCBzY29yZSBpcyBjbGVhcmVkXHJcbiAgICAgICAgLy8gcm9sbCBjb3VudGVyIGlzIGNsZWFyZWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBFbmRHYW1lKCkge1xyXG4gICAgICAgIC8vIEN1cnJlbnQgcGxheWVycyB0dXJuID0gZmFsc2VcclxuICAgICAgICAvLyBDdXJyZW50IHNjb3JlIGFkZGVkIHRvIHRvdGFsIHNjb3JlXHJcbiAgICAgICAgLy8gY3VycmVudCBzY29yZSBpcyBjbGVhcmVkXHJcbiAgICAgICAgLy8gcm9sbCBjb3VudGVyIGlzIGNsZWFyZWRcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGF0ZSAtIHNvIHRoYXQgb25lIGJ1dHRvbiBpcyBkaXNwbGF5ZWQgYXMgbmVlZGVkLlxyXG4gICAgZnVuY3Rpb24gQnV0dG9uQWN0aXZlKCkge1xyXG4gICAgICAgIC8vIFBsYXlHYW1lIGJ1dHRvbiA9IHRydWVcclxuICAgICAgICAvLyByb2xsIGJ1dHRvbiA9IGZhbHNlXHJcbiAgICAgICAgLy8gc2NvcmUgYnV0dG9uID0gZmFsc2VcclxuICAgICAgICAvLyBFbmQgVHVybiBidXR0b24gPSBmYWxzZVxyXG4gICAgICAgIC8vIEVuZCBHYW1lIGJ1dHRvbiA9IGZhbHNlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFBsYXllcnNUdXJuKCkge1xyXG5cclxuICAgICAgICAvLyBQbGF5ZXIgb25lIGRlZmF1bHQgb24gc3RhcnQgPSB0cnVlXHJcbiAgICAgICAgLy8gYWZ0ZXIgRW5kIFR1cm4gc2VsZWN0ZWQgPSBjdXJyZW50IHBsYXllciBmYWxzZSBcclxuICAgICAgICAvLyBhZnRlciAzIHJvbGxzIHBlciB0dXJuIG9yIGZhcmtsZVxyXG4gICAgICAgIC8vIG9uIGVuZCBvZiB0dXJuIGFueSBjdXJyZW50IHBsYXllcnMgY3VycmVudCBzY29yZSBpcyBhZGRlZCB0byB0aGF0IHBsYXllcnMgdG90YWwgc2NvcmUuIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25ib3gtd3JhcHBlclwiIHN0eWxlPXt7IGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25ib3hcIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZGlyZWN0aW9uOiBcInJvd1wiLCBtYXJnaW46IFwiNXB4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5Z2FtZS1idXR0b25cIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcnNidXR0b25cIiBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiNzVweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19IG9uQ2xpY2s9eygpID0+IChQbGF5R2FtZSgpKX0gPlBsYXkgR2FtZT88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb2xsZGljZS1idXR0b25cIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcnNidXR0b25cIiBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiNzVweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19PlJvbGwgRGljZT88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZWRpY2UtYnV0dG9uXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJzYnV0dG9uXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTUwcHhcIiwgaGVpZ2h0OiBcIjc1cHhcIiwgbWFyZ2luOiBcImF1dG9cIiB9fT5TY29yZSBEaWNlPzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVuZHR1cm4tYnV0dG9uXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJzYnV0dG9uXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTUwcHhcIiwgaGVpZ2h0OiBcIjc1cHhcIiwgbWFyZ2luOiBcImF1dG9cIiB9fT5FbmQgVHVybj88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbmRnYW1lLWJ1dHRvblwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByc2J1dHRvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsIGhlaWdodDogXCI3NXB4XCIsIG1hcmdpbjogXCJhdXRvXCIgfX0+RW5kIEdhbWU/PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkJveDtcclxuXHJcbi8vIHRoaXMgQnV0dG9uQm94IGNvbXBvbmVudCBuZWVkcyBhIHJlZGVzaWduLCBjcmVhdGVkIGFzIGEgcGxhY2Vob2xkZXIgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEaWNlQm94IiwiQnV0dG9uQm94IiwicGxheUdhbWUiLCJzZXRQbGF5R2FtZSIsInBsYXllcjEiLCJ0dXJuIiwicm9sbENvdW50IiwiY3VycmVudFNjb3JlIiwidG90YWxTY29yZSIsInBsYXllcjIiLCJQbGF5R2FtZSIsIlBsYXllck9uZVRlc3QiLCJjb25zb2xlIiwibG9nIiwiRW5kVHVybiIsIkVuZEdhbWUiLCJCdXR0b25BY3RpdmUiLCJQbGF5ZXJzVHVybiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYm9yZGVyIiwiZGlzcGxheSIsImRpcmVjdGlvbiIsIm1hcmdpbiIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiYnV0dG9uIiwid2lkdGgiLCJoZWlnaHQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ButtonBox.js\n"));

/***/ }),

/***/ "./pages/DiceBox.js":
/*!**************************!*\
  !*** ./pages/DiceBox.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DiceBox = ()=>{\n    function RollDice() {\n        rollCount = rollCount++;\n    // DiceBox pass prop??\n    // Roll all six dice..\n    // Update Roll Dice state = true?\n    // Pass dice results to scoredice??\n    }\n    function ScoreDice() {\n    // Score state = true\n    // current player selected dice are added for a current score\n    // on end of turn current score is added to total score...\n    }\n    function RollCounter() {\n    // Roll state = true\n    // WhoseTurn() ?\n    // on turn roll adds one roll per button click\n    // logic needed for 3 rolls on a turn, or if score allows additional roll. \n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-dice\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"diceshoe\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"./images/df0.jfif\",\n                    alt: \"dice-placeholder\",\n                    className: \"dice1\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\DiceBox.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"./images/df0.jfif\",\n                    alt: \"dice-placeholder\",\n                    className: \"dice2\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\DiceBox.js\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"./images/df0.jfif\",\n                    alt: \"dice-placeholder\",\n                    className: \"dice3\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\DiceBox.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"./images/df0.jfif\",\n                    alt: \"dice-placeholder\",\n                    className: \"dice4\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\DiceBox.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"./images/df0.jfif\",\n                    alt: \"dice-placeholder\",\n                    className: \"dice5\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\DiceBox.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"./images/df0.jfif\",\n                    alt: \"dice-placeholder\",\n                    className: \"dice6\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\DiceBox.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\DiceBox.js\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\DiceBox.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_c = DiceBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiceBox);\nvar _c;\n$RefreshReg$(_c, \"DiceBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EaWNlQm94LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBMEI7QUFFMUIsTUFBTUMsVUFBVSxJQUFNO0lBRWxCLFNBQVNDLFdBQVc7UUFDaEJDLFlBQVlBO0lBQ1osc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsbUNBQW1DO0lBRXZDO0lBRUEsU0FBU0MsWUFBWTtJQUNqQixxQkFBcUI7SUFDckIsNkRBQTZEO0lBQzdELDBEQUEwRDtJQUU5RDtJQUVBLFNBQVNDLGNBQWM7SUFDbkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQiw4Q0FBOEM7SUFDOUMsMkVBQTJFO0lBQy9FO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBSUMsS0FBSTtvQkFBb0JDLEtBQUk7b0JBQW1CSCxXQUFVOzs7Ozs7OEJBQzlELDhEQUFDQztvQkFBSUMsS0FBSTtvQkFBb0JDLEtBQUk7b0JBQW1CSCxXQUFVOzs7Ozs7OEJBQzlELDhEQUFDQztvQkFBSUMsS0FBSTtvQkFBb0JDLEtBQUk7b0JBQW1CSCxXQUFVOzs7Ozs7OEJBQzlELDhEQUFDQztvQkFBSUMsS0FBSTtvQkFBb0JDLEtBQUk7b0JBQW1CSCxXQUFVOzs7Ozs7OEJBQzlELDhEQUFDQztvQkFBSUMsS0FBSTtvQkFBb0JDLEtBQUk7b0JBQW1CSCxXQUFVOzs7Ozs7OEJBQzlELDhEQUFDQztvQkFBSUMsS0FBSTtvQkFBb0JDLEtBQUk7b0JBQW1CSCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5RTtLQXJDTU47QUF3Q04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGljZUJveC5qcz83MTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IERpY2VCb3ggPSAoKSA9PiB7XHJcblxyXG4gICAgZnVuY3Rpb24gUm9sbERpY2UoKSB7XHJcbiAgICAgICAgcm9sbENvdW50ID0gcm9sbENvdW50Kys7XHJcbiAgICAgICAgLy8gRGljZUJveCBwYXNzIHByb3A/P1xyXG4gICAgICAgIC8vIFJvbGwgYWxsIHNpeCBkaWNlLi5cclxuICAgICAgICAvLyBVcGRhdGUgUm9sbCBEaWNlIHN0YXRlID0gdHJ1ZT9cclxuICAgICAgICAvLyBQYXNzIGRpY2UgcmVzdWx0cyB0byBzY29yZWRpY2U/P1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBTY29yZURpY2UoKSB7XHJcbiAgICAgICAgLy8gU2NvcmUgc3RhdGUgPSB0cnVlXHJcbiAgICAgICAgLy8gY3VycmVudCBwbGF5ZXIgc2VsZWN0ZWQgZGljZSBhcmUgYWRkZWQgZm9yIGEgY3VycmVudCBzY29yZVxyXG4gICAgICAgIC8vIG9uIGVuZCBvZiB0dXJuIGN1cnJlbnQgc2NvcmUgaXMgYWRkZWQgdG8gdG90YWwgc2NvcmUuLi5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUm9sbENvdW50ZXIoKSB7XHJcbiAgICAgICAgLy8gUm9sbCBzdGF0ZSA9IHRydWVcclxuICAgICAgICAvLyBXaG9zZVR1cm4oKSA/XHJcbiAgICAgICAgLy8gb24gdHVybiByb2xsIGFkZHMgb25lIHJvbGwgcGVyIGJ1dHRvbiBjbGlja1xyXG4gICAgICAgIC8vIGxvZ2ljIG5lZWRlZCBmb3IgMyByb2xscyBvbiBhIHR1cm4sIG9yIGlmIHNjb3JlIGFsbG93cyBhZGRpdGlvbmFsIHJvbGwuIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtZGljZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpY2VzaG9lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2RmMC5qZmlmXCIgYWx0PVwiZGljZS1wbGFjZWhvbGRlclwiIGNsYXNzTmFtZT1cImRpY2UxXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvZGYwLmpmaWZcIiBhbHQ9XCJkaWNlLXBsYWNlaG9sZGVyXCIgY2xhc3NOYW1lPVwiZGljZTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9kZjAuamZpZlwiIGFsdD1cImRpY2UtcGxhY2Vob2xkZXJcIiBjbGFzc05hbWU9XCJkaWNlM1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2RmMC5qZmlmXCIgYWx0PVwiZGljZS1wbGFjZWhvbGRlclwiIGNsYXNzTmFtZT1cImRpY2U0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvZGYwLmpmaWZcIiBhbHQ9XCJkaWNlLXBsYWNlaG9sZGVyXCIgY2xhc3NOYW1lPVwiZGljZTVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9kZjAuamZpZlwiIGFsdD1cImRpY2UtcGxhY2Vob2xkZXJcIiBjbGFzc05hbWU9XCJkaWNlNlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpY2VCb3g7Il0sIm5hbWVzIjpbIlJlYWN0IiwiRGljZUJveCIsIlJvbGxEaWNlIiwicm9sbENvdW50IiwiU2NvcmVEaWNlIiwiUm9sbENvdW50ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DiceBox.js\n"));

/***/ })

});