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

/***/ "./pages/dice.js":
/*!***********************!*\
  !*** ./pages/dice.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Dice = (param)=>{\n    let { onDiceSelected , value  } = param;\n    _s();\n    const [selectedDice, setSelectedDice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); //selectedDice is initially true and then false when a dice is selected\n    const diceClick = ()=>{\n        setSelectedDice(!selectedDice);\n        onDiceSelected(selectedDice);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        style: {\n            border: selectedDice ? \"solid\" : \"dashed\"\n        },\n        src: \"./images/df\".concat(value, \".png\"),\n        alt: \"dice-placeholder\",\n        className: \"dice1\",\n        onClick: diceClick\n    }, void 0, false, {\n        fileName: \"C:\\\\QADevprojects\\\\FarkleFun\\\\pages\\\\dice.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dice, \"rnhi7nzxUOYHc9iu6pnSGQN+LEE=\");\n_c = Dice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dice);\nvar _c;\n$RefreshReg$(_c, \"Dice\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQXdDO0FBRXhDLE1BQU1FLE9BQU8sU0FBK0I7UUFBOUIsRUFBRUMsZUFBYyxFQUFFQyxNQUFLLEVBQUU7O0lBQ3JDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDLElBQUksR0FBRyx1RUFBdUU7SUFFL0gsTUFBTU0sWUFBWSxJQUFNO1FBQ3RCRCxnQkFBZ0IsQ0FBQ0Q7UUFDakJGLGVBQWVFO0lBQ2pCO0lBRUEscUJBQ0UsOERBQUNHO1FBQ0NDLE9BQU87WUFBRUMsUUFBUUwsZUFBZSxVQUFVLFFBQVE7UUFBQztRQUNuRE0sS0FBSyxjQUFvQixPQUFOUCxPQUFNO1FBQ3pCUSxLQUFJO1FBQ0pDLFdBQVU7UUFDVkMsU0FBU1A7Ozs7OztBQUdmO0dBakJNTDtLQUFBQTtBQW1CTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kaWNlLmpzPzRkMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBEaWNlID0gKHsgb25EaWNlU2VsZWN0ZWQsIHZhbHVlIH0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWREaWNlLCBzZXRTZWxlY3RlZERpY2VdID0gdXNlU3RhdGUodHJ1ZSk7IC8vc2VsZWN0ZWREaWNlIGlzIGluaXRpYWxseSB0cnVlIGFuZCB0aGVuIGZhbHNlIHdoZW4gYSBkaWNlIGlzIHNlbGVjdGVkXHJcblxyXG4gIGNvbnN0IGRpY2VDbGljayA9ICgpID0+IHtcclxuICAgIHNldFNlbGVjdGVkRGljZSghc2VsZWN0ZWREaWNlKTtcclxuICAgIG9uRGljZVNlbGVjdGVkKHNlbGVjdGVkRGljZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxpbWdcclxuICAgICAgc3R5bGU9e3sgYm9yZGVyOiBzZWxlY3RlZERpY2UgPyBcInNvbGlkXCIgOiBcImRhc2hlZFwiIH19XHJcbiAgICAgIHNyYz17YC4vaW1hZ2VzL2RmJHt2YWx1ZX0ucG5nYH1cclxuICAgICAgYWx0PVwiZGljZS1wbGFjZWhvbGRlclwiXHJcbiAgICAgIGNsYXNzTmFtZT1cImRpY2UxXCJcclxuICAgICAgb25DbGljaz17ZGljZUNsaWNrfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGljZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEaWNlIiwib25EaWNlU2VsZWN0ZWQiLCJ2YWx1ZSIsInNlbGVjdGVkRGljZSIsInNldFNlbGVjdGVkRGljZSIsImRpY2VDbGljayIsImltZyIsInN0eWxlIiwiYm9yZGVyIiwic3JjIiwiYWx0IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dice.js\n"));

/***/ })

});