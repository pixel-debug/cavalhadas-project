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

/***/ "./components/banner/index.tsx":
/*!*************************************!*\
  !*** ./components/banner/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Banner: function() { return /* binding */ Banner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/button */ \"./components/common/button.tsx\");\n/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/text */ \"./components/banner/components/text.tsx\");\n/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/image */ \"./components/common/image.tsx\");\n\n\n\n\nconst Banner = (param)=>{\n    let { title, subtitle, image, hasButton, isMainPage } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen\",\n        children: [\n            image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 z-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_image__WEBPACK_IMPORTED_MODULE_3__.CustomImage, {\n                    src: image,\n                    alt: \"\",\n                    objectFit: \"cover\",\n                    className: \"w-full h-full\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\marina\\\\Documents\\\\Projetos\\\\cavalhadas-project\\\\web\\\\components\\\\banner\\\\index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\marina\\\\Documents\\\\Projetos\\\\cavalhadas-project\\\\web\\\\components\\\\banner\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 flex flex-col items-center justify-center z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_text__WEBPACK_IMPORTED_MODULE_2__.BannerText, {\n                        title: title,\n                        text: subtitle,\n                        isMainPage: isMainPage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\marina\\\\Documents\\\\Projetos\\\\cavalhadas-project\\\\web\\\\components\\\\banner\\\\index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    hasButton && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 mb-2 lg:w-[20%] w-1/3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            text: \"Saiba mais\",\n                            action: ()=>console.log(\"clicou\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\marina\\\\Documents\\\\Projetos\\\\cavalhadas-project\\\\web\\\\components\\\\banner\\\\index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\marina\\\\Documents\\\\Projetos\\\\cavalhadas-project\\\\web\\\\components\\\\banner\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\marina\\\\Documents\\\\Projetos\\\\cavalhadas-project\\\\web\\\\components\\\\banner\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\marina\\\\Documents\\\\Projetos\\\\cavalhadas-project\\\\web\\\\components\\\\banner\\\\index.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Banner;\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jhbm5lci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMwQztBQUNLO0FBQ0Q7QUFFdkMsTUFBTUcsU0FBUztRQUFDLEVBQ3JCQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsS0FBSyxFQUNMQyxTQUFTLEVBQ1RDLFVBQVUsRUFDRTtJQUNaLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOztZQUNaSix1QkFDQyw4REFBQ0c7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNSLHNEQUFXQTtvQkFDVlMsS0FBS0w7b0JBQ0xNLEtBQUs7b0JBQ0xDLFdBQVU7b0JBQ1ZILFdBQVU7Ozs7Ozs7Ozs7OzBCQUloQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVCx3REFBVUE7d0JBQUNHLE9BQU9BO3dCQUFPVSxNQUFNVDt3QkFBVUcsWUFBWUE7Ozs7OztvQkFDckRELDJCQUNDLDhEQUFDRTt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1Ysa0RBQU1BOzRCQUFDYyxNQUFNOzRCQUFjQyxRQUFRLElBQU1DLFFBQVFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEUsRUFBRTtLQTdCV2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYW5uZXIvaW5kZXgudHN4P2YxMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFubmVyUHJvcHMgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tbW9uL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBCYW5uZXJUZXh0IH0gZnJvbSBcIi4vY29tcG9uZW50cy90ZXh0XCI7XHJcbmltcG9ydCB7IEN1c3RvbUltYWdlIH0gZnJvbSBcIi4uL2NvbW1vbi9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJhbm5lciA9ICh7XHJcbiAgdGl0bGUsXHJcbiAgc3VidGl0bGUsXHJcbiAgaW1hZ2UsXHJcbiAgaGFzQnV0dG9uLFxyXG4gIGlzTWFpblBhZ2UsXHJcbn06IEJhbm5lclByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1zY3JlZW5cIj5cclxuICAgICAge2ltYWdlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgei0wXCI+XHJcbiAgICAgICAgICA8Q3VzdG9tSW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgYWx0PXtcIlwifVxyXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHotMTBcIj5cclxuICAgICAgICA8QmFubmVyVGV4dCB0aXRsZT17dGl0bGV9IHRleHQ9e3N1YnRpdGxlfSBpc01haW5QYWdlPXtpc01haW5QYWdlfSAvPlxyXG4gICAgICAgIHtoYXNCdXR0b24gJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBtYi0yIGxnOnctWzIwJV0gdy0xLzNcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIlNhaWJhIG1haXNcIn0gYWN0aW9uPXsoKSA9PiBjb25zb2xlLmxvZyhcImNsaWNvdVwiKX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkJhbm5lclRleHQiLCJDdXN0b21JbWFnZSIsIkJhbm5lciIsInRpdGxlIiwic3VidGl0bGUiLCJpbWFnZSIsImhhc0J1dHRvbiIsImlzTWFpblBhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJvYmplY3RGaXQiLCJ0ZXh0IiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/banner/index.tsx\n"));

/***/ })

});