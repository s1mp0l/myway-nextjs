"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/booking/page",{

/***/ "(app-pages-browser)/./components/shared/person-card/person-card.tsx":
/*!*******************************************************!*\
  !*** ./components/shared/person-card/person-card.tsx ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PersonCard: () => (/* binding */ PersonCard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.3.0-canary.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.3.0-canary.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.3.0-canary.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/api/image.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ PersonCard auto */ \n\n\n\nconst PersonCard = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_c = (param)=>{\n    let { master, selectedMaster, setSelectedMaster } = param;\n    const handleSelect = ()=>master && setSelectedMaster ? setSelectedMaster(master.id) : ()=>{};\n    const isSelected = selectedMaster === (master === null || master === void 0 ? void 0 : master.id);\n    const containerClassName = \"bg-c-bg-1 bg-cover text-left text-c-bg-3 \" + \"bg-center bg-no-repeat flex justify-between items-center rounded-3xl border border-transparent\";\n    const disabled = (master === null || master === void 0 ? void 0 : master.bookable) === false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        disabled: disabled,\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(containerClassName, isSelected && \"border-c-primary\", disabled && \"opacity-50\"),\n        onClick: handleSelect,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-end p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full font-bold text-c-text-light text-xl\",\n                        children: master === null || master === void 0 ? void 0 : master.name\n                    }, void 0, false, {\n                        fileName: \"/Users/user/IdeaProjects/myway-nextjs/components/shared/person-card/person-card.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: master === null || master === void 0 ? void 0 : master.specialization\n                    }, void 0, false, {\n                        fileName: \"/Users/user/IdeaProjects/myway-nextjs/components/shared/person-card/person-card.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-1 w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/icons/star.svg\",\n                                alt: \"star\",\n                                width: 16,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/user/IdeaProjects/myway-nextjs/components/shared/person-card/person-card.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: master === null || master === void 0 ? void 0 : master.rating\n                            }, void 0, false, {\n                                fileName: \"/Users/user/IdeaProjects/myway-nextjs/components/shared/person-card/person-card.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/IdeaProjects/myway-nextjs/components/shared/person-card/person-card.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full\",\n                        children: \"\".concat(master === null || master === void 0 ? void 0 : master.comments_count, \" отзывов\")\n                    }, void 0, false, {\n                        fileName: \"/Users/user/IdeaProjects/myway-nextjs/components/shared/person-card/person-card.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/IdeaProjects/myway-nextjs/components/shared/person-card/person-card.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[135px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-c-bg-1 w-full h-0.8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/IdeaProjects/myway-nextjs/components/shared/person-card/person-card.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"h-full rounded-xl\",\n                        src: (master === null || master === void 0 ? void 0 : master.avatar) || \"/person-card.png\",\n                        width: 640,\n                        height: 640,\n                        alt: \"Person\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/IdeaProjects/myway-nextjs/components/shared/person-card/person-card.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/IdeaProjects/myway-nextjs/components/shared/person-card/person-card.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/IdeaProjects/myway-nextjs/components/shared/person-card/person-card.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n});\n_c1 = PersonCard;\nPersonCard.displayName = \"PersonCard\";\n\nvar _c, _c1;\n$RefreshReg$(_c, \"PersonCard$memo\");\n$RefreshReg$(_c1, \"PersonCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2hhcmVkL3BlcnNvbi1jYXJkL3BlcnNvbi1jYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRXFEO0FBQ3RCO0FBRUE7QUFRL0IsTUFBTUcsMkJBQWFILDJDQUFJQSxNQUFtQjtRQUFDLEVBQ0VJLE1BQU0sRUFDTkMsY0FBYyxFQUNkQyxpQkFBaUIsRUFDbEI7SUFDMUMsTUFBTUMsZUFBZSxJQUFNSCxVQUFVRSxvQkFDakNBLGtCQUFrQkYsT0FBT0ksRUFBRSxJQUMzQixLQUNGO0lBRUYsTUFBTUMsYUFBYUosb0JBQW1CRCxtQkFBQUEsNkJBQUFBLE9BQVFJLEVBQUU7SUFDaEQsTUFBTUUscUJBQXFCLDhDQUN6QjtJQUVGLE1BQU1DLFdBQVdQLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUVEsUUFBUSxNQUFLO0lBRXRDLHFCQUNFLDhEQUFDQztRQUNDRixVQUFVQTtRQUNWRyxXQUFXWiw4Q0FBRUEsQ0FBQ1Esb0JBQW9CRCxjQUFjLG9CQUFvQkUsWUFBWTtRQUNoRkksU0FBU1I7OzBCQUVULDhEQUFDUztnQkFBSUYsV0FBVzs7a0NBQ2QsOERBQUNFO3dCQUFJRixXQUFXO2tDQUErQ1YsbUJBQUFBLDZCQUFBQSxPQUFRYSxJQUFJOzs7Ozs7a0NBQzNFLDhEQUFDRDt3QkFBSUYsV0FBVztrQ0FBS1YsbUJBQUFBLDZCQUFBQSxPQUFRYyxjQUFjOzs7Ozs7a0NBQzNDLDhEQUFDRjt3QkFBSUYsV0FBVzs7MENBQ2QsOERBQUNiLGtEQUFLQTtnQ0FBQ2tCLEtBQUk7Z0NBQWtCQyxLQUFJO2dDQUFPQyxPQUFPO2dDQUFJQyxRQUFROzs7Ozs7MENBQzNELDhEQUFDTjswQ0FBS1osbUJBQUFBLDZCQUFBQSxPQUFRbUIsTUFBTTs7Ozs7Ozs7Ozs7O2tDQUV0Qiw4REFBQ1A7d0JBQUlGLFdBQVc7a0NBQVcsR0FBMEIsT0FBdkJWLG1CQUFBQSw2QkFBQUEsT0FBUW9CLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7OzBCQUV2RCw4REFBQ1I7Z0JBQUlGLFdBQVc7O2tDQUNkLDhEQUFDRTt3QkFBSUYsV0FBVzs7Ozs7O2tDQUNoQiw4REFBQ2Isa0RBQUtBO3dCQUNKYSxXQUFXO3dCQUNYSyxLQUFLZixDQUFBQSxtQkFBQUEsNkJBQUFBLE9BQVFxQixNQUFNLEtBQUk7d0JBQ3ZCSixPQUFPO3dCQUNQQyxRQUFRO3dCQUNSRixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZjs7QUFDQWpCLFdBQVd1QixXQUFXLEdBQUc7QUFFTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NoYXJlZC9wZXJzb24tY2FyZC9wZXJzb24tY2FyZC50c3g/N2FmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHtEaXNwYXRjaCwgbWVtbywgU2V0U3RhdGVBY3Rpb259IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge0lZTWFzdGVyfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9tb2RlbC95Y2xpZW50cy9tb2RlbFwiO1xuaW1wb3J0IHtjbn0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmludGVyZmFjZSBJUGVyc29uQ2FyZFByb3BzIHtcbiAgbWFzdGVyPzogSVlNYXN0ZXI7XG4gIHNlbGVjdGVkTWFzdGVyPzogbnVtYmVyIHwgbnVsbDtcbiAgc2V0U2VsZWN0ZWRNYXN0ZXI/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXIgfCBudWxsPj47XG59XG5cbmNvbnN0IFBlcnNvbkNhcmQgPSBtZW1vPElQZXJzb25DYXJkUHJvcHM+KCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXN0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE1hc3RlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkTWFzdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoKSA9PiBtYXN0ZXIgJiYgc2V0U2VsZWN0ZWRNYXN0ZXJcbiAgICA/IHNldFNlbGVjdGVkTWFzdGVyKG1hc3Rlci5pZClcbiAgICA6ICgpID0+IHtcbiAgICB9O1xuXG4gIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZE1hc3RlciA9PT0gbWFzdGVyPy5pZDtcbiAgY29uc3QgY29udGFpbmVyQ2xhc3NOYW1lID0gXCJiZy1jLWJnLTEgYmctY292ZXIgdGV4dC1sZWZ0IHRleHQtYy1iZy0zIFwiICtcbiAgICBcImJnLWNlbnRlciBiZy1uby1yZXBlYXQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnRcIjtcblxuICBjb25zdCBkaXNhYmxlZCA9IG1hc3Rlcj8uYm9va2FibGUgPT09IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgY2xhc3NOYW1lPXtjbihjb250YWluZXJDbGFzc05hbWUsIGlzU2VsZWN0ZWQgJiYgXCJib3JkZXItYy1wcmltYXJ5XCIsIGRpc2FibGVkICYmIFwib3BhY2l0eS01MFwiKX1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBwLTRcIn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInctZnVsbCBmb250LWJvbGQgdGV4dC1jLXRleHQtbGlnaHQgdGV4dC14bFwifT57bWFzdGVyPy5uYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJcIn0+e21hc3Rlcj8uc3BlY2lhbGl6YXRpb259PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZsZXggZ2FwLTEgdy1mdWxsXCJ9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaWNvbnMvc3Rhci5zdmdcIiBhbHQ9XCJzdGFyXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fS8+XG4gICAgICAgICAgPGRpdj57bWFzdGVyPy5yYXRpbmd9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3LWZ1bGxcIn0+e2Ake21hc3Rlcj8uY29tbWVudHNfY291bnR9INC+0YLQt9GL0LLQvtCyYH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1widy1bMTM1cHhdXCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJiZy1jLWJnLTEgdy1mdWxsIGgtMC44XCJ9Lz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPXtcImgtZnVsbCByb3VuZGVkLXhsXCJ9XG4gICAgICAgICAgc3JjPXttYXN0ZXI/LmF2YXRhciB8fCBcIi9wZXJzb24tY2FyZC5wbmdcIn1cbiAgICAgICAgICB3aWR0aD17NjQwfVxuICAgICAgICAgIGhlaWdodD17NjQwfVxuICAgICAgICAgIGFsdD17XCJQZXJzb25cIn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICApO1xufSlcblBlcnNvbkNhcmQuZGlzcGxheU5hbWUgPSBcIlBlcnNvbkNhcmRcIlxuXG5leHBvcnQge1BlcnNvbkNhcmR9OyJdLCJuYW1lcyI6WyJtZW1vIiwiSW1hZ2UiLCJjbiIsIlBlcnNvbkNhcmQiLCJtYXN0ZXIiLCJzZWxlY3RlZE1hc3RlciIsInNldFNlbGVjdGVkTWFzdGVyIiwiaGFuZGxlU2VsZWN0IiwiaWQiLCJpc1NlbGVjdGVkIiwiY29udGFpbmVyQ2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJib29rYWJsZSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkaXYiLCJuYW1lIiwic3BlY2lhbGl6YXRpb24iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInJhdGluZyIsImNvbW1lbnRzX2NvdW50IiwiYXZhdGFyIiwiZGlzcGxheU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/shared/person-card/person-card.tsx\n"));

/***/ })

});