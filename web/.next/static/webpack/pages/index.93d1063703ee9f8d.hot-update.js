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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Banner: function() { return /* binding */ Banner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/button */ \"./components/common/button.tsx\");\n/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/text */ \"./components/banner/components/text.tsx\");\n/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/image */ \"./components/common/image.tsx\");\n\n\n\n\nconst Banner = (param)=>{\n    let { title, subtitle, image, hasButton } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[60vh] w-full opacity-70\",\n                children: image ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_image__WEBPACK_IMPORTED_MODULE_3__.CustomImage, {\n                    src: image,\n                    alt: \"\",\n                    objectFit: \"cover\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\marina\\\\Documents\\\\Projetos\\\\cavalhadas-project\\\\web\\\\components\\\\banner\\\\index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 18\n                }, undefined) : null\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\marina\\\\Documents\\\\Projetos\\\\cavalhadas-project\\\\web\\\\components\\\\banner\\\\index.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute items-center bg-red-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_text__WEBPACK_IMPORTED_MODULE_2__.BannerText, {\n                        title: title,\n                        text: subtitle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\marina\\\\Documents\\\\Projetos\\\\cavalhadas-project\\\\web\\\\components\\\\banner\\\\index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    hasButton ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" mt-10 mb-2 lg:w-[20%] w-1/3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            text: \"Saiba mais\",\n                            action: ()=>console.log(\"clicou\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\marina\\\\Documents\\\\Projetos\\\\cavalhadas-project\\\\web\\\\components\\\\banner\\\\index.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\marina\\\\Documents\\\\Projetos\\\\cavalhadas-project\\\\web\\\\components\\\\banner\\\\index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\marina\\\\Documents\\\\Projetos\\\\cavalhadas-project\\\\web\\\\components\\\\banner\\\\index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\marina\\\\Documents\\\\Projetos\\\\cavalhadas-project\\\\web\\\\components\\\\banner\\\\index.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Banner;\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jhbm5lci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMwQztBQUNLO0FBQ0Q7QUFFdkMsTUFBTUcsU0FBUztRQUFDLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBZTtJQUN2RSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaSCxzQkFBUSw4REFBQ0osc0RBQVdBO29CQUFDUSxLQUFLSjtvQkFBT0ssS0FBSztvQkFBSUMsV0FBVTs7Ozs7Z0NBQWE7Ozs7OzswQkFFcEUsOERBQUNKO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1Isd0RBQVVBO3dCQUFDRyxPQUFPQTt3QkFBT1MsTUFBTVI7Ozs7OztvQkFDL0JFLDBCQUNDLDhEQUFDQzt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1Qsa0RBQU1BOzRCQUFDYSxNQUFNOzRCQUFjQyxRQUFRLElBQU1DLFFBQVFDLEdBQUcsQ0FBQzs7Ozs7Ozs7OztvQ0FFdEQ7Ozs7Ozs7Ozs7Ozs7QUFJWixFQUFFO0tBaEJXYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Jhbm5lci9pbmRleC50c3g/ZjEyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYW5uZXJQcm9wcyB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9jb21tb24vYnV0dG9uXCI7XHJcbmltcG9ydCB7IEJhbm5lclRleHQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RleHRcIjtcclxuaW1wb3J0IHsgQ3VzdG9tSW1hZ2UgfSBmcm9tIFwiLi4vY29tbW9uL2ltYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQmFubmVyID0gKHsgdGl0bGUsIHN1YnRpdGxlLCBpbWFnZSwgaGFzQnV0dG9uIH06IEJhbm5lclByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs2MHZoXSB3LWZ1bGwgb3BhY2l0eS03MFwiPlxyXG4gICAgICAgIHtpbWFnZSA/IDxDdXN0b21JbWFnZSBzcmM9e2ltYWdlfSBhbHQ9e1wiXCJ9IG9iamVjdEZpdD1cImNvdmVyXCIgLz4gOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpdGVtcy1jZW50ZXIgYmctcmVkLTEwMCB0b3AtMS8yIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgdy1mdWxsXCI+XHJcbiAgICAgICAgPEJhbm5lclRleHQgdGl0bGU9e3RpdGxlfSB0ZXh0PXtzdWJ0aXRsZX0gLz5cclxuICAgICAgICB7aGFzQnV0dG9uID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXQtMTAgbWItMiBsZzp3LVsyMCVdIHctMS8zXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTYWliYSBtYWlzXCJ9IGFjdGlvbj17KCkgPT4gY29uc29sZS5sb2coXCJjbGljb3VcIil9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQmFubmVyVGV4dCIsIkN1c3RvbUltYWdlIiwiQmFubmVyIiwidGl0bGUiLCJzdWJ0aXRsZSIsImltYWdlIiwiaGFzQnV0dG9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwib2JqZWN0Rml0IiwidGV4dCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/banner/index.tsx\n"));

/***/ })

});