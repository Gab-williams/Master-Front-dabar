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

/***/ "./components/layout/Header/Sidebar.js":
/*!*********************************************!*\
  !*** ./components/layout/Header/Sidebar.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaFacebookSquare_FaInstagram_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaFacebookSquare,FaInstagram!=!react-icons/fa */ \"__barrel_optimize__?names=FaFacebookSquare,FaInstagram!=!./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_RiTwitterXFill_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=RiTwitterXFill!=!react-icons/ri */ \"__barrel_optimize__?names=RiTwitterXFill!=!./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_FaLinkedin_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaLinkedin!=!react-icons/fa6 */ \"__barrel_optimize__?names=FaLinkedin!=!./node_modules/react-icons/fa6/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_IoClose_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=IoClose!=!react-icons/io5 */ \"__barrel_optimize__?names=IoClose!=!./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Sidebar(param) {\n    let { handleSidebarClose, selectedx } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let itemsInabout = document.querySelector(\".itemsInabout\");\n        const changlang = async (selectedx, word)=>{\n            const options = {\n                method: \"POST\",\n                url: \"https://deepl-translator2.p.rapidapi.com/translate\",\n                headers: {\n                    \"content-type\": \"application/json\",\n                    \"X-RapidAPI-Key\": \"7bddd58440msh9a827296af53740p1be7eajsn6674d57991b0\",\n                    \"X-RapidAPI-Host\": \"deepl-translator2.p.rapidapi.com\"\n                },\n                data: {\n                    source_lang: \"EN\",\n                    target_lang: selectedx,\n                    text: word\n                }\n            };\n            let res = await axios.request(options);\n            return res.data;\n        };\n        const changeexisting = async ()=>{\n            if (selectedx === \"GB\") {} else if (selectedx !== \"\" && selectedx !== \"GB\") {\n                await changlang(selectedx);\n            } else {}\n        };\n        changeexisting();\n    }, [\n        selectedx\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"offCanvas__wrap\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"offCanvas__body\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"offCanvas__toggle\",\n                            onClick: handleSidebarClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoClose_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoClose, {}, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"offCanvas__content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"offCanvas__logo logo\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/\",\n                                            className: \"logo-dark\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"/assets/img/logo/logo.png\",\n                                                alt: \"Logo\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/\",\n                                            className: \"logo-light\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"/assets/img/logo/w_logo.png\",\n                                                alt: \"Logo\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"title\",\n                                    children: \"About Us\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"itemsInabout\",\n                                    children: \"Welcome to Dabar Media – where business, technology, and workplace culture converge to tell compelling stories. \\\"Dabar,\\\" meaning 'word' or 'talk' in Hebrew, symbolizes our commitment to bringing powerful narratives to the forefront. Our name reflects our mission to uncover and narrate stories that shape the dynamic sectors of business and technology. Join us as we delve into the world of innovative businesses, cutting-edge technology, and evolving workplace trends, offering insights and perspectives that resonate in today's fast-paced world.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"offCanvas__contact\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"title\",\n                                    children: \"Get In Touch\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"offCanvas__contact-list list-wrap\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fas fa-envelope-open\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    href: \"mailto:hello@thedabar.com\",\n                                                    target: \"_blank\",\n                                                    children: \"hello@thedabar.com\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaFacebookSquare_FaInstagram_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaInstagram, {}, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    href: \"https://www.instagram.com/the.dabar/?igshid=YzAwZjE1ZTI0Zg%3D%3D\",\n                                                    target: \"_blank\",\n                                                    children: \"@the.dabar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaFacebookSquare_FaInstagram_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaFacebookSquare, {}, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    href: \"https://www.facebook.com/profile.php?id=61552875998422&mibextid=ZbWKwL\",\n                                                    target: \"_blank\",\n                                                    children: \"@dabar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiTwitterXFill_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiTwitterXFill, {}, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    href: \"https://twitter.com/Dabarnetwork?t=FdWs0919Lh2CqQxq50VUMg\",\n                                                    target: \"_blank\",\n                                                    children: \"@dabarnetwork\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaLinkedin_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__.FaLinkedin, {}, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                                    lineNumber: 111,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    href: \"https://www.linkedin.com/company/darbar-media/\",\n                                                    target: \"_blank\",\n                                                    children: \"@dabar-media\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"offCanvas__overlay\",\n                onClick: handleSidebarClose\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\layout\\\\Header\\\\Sidebar.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Sidebar, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL1NpZGViYXIuanM/ZDVhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBGYUluc3RhZ3JhbSwgRmFGYWNlYm9va1NxdWFyZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgUmlUd2l0dGVyWEZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcbmltcG9ydCB7IEZhTGlua2VkaW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5pbXBvcnQgeyBJb0Nsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKHsgaGFuZGxlU2lkZWJhckNsb3NlLCBzZWxlY3RlZHggfSkge1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGxldCBpdGVtc0luYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW1zSW5hYm91dFwiKVxuICAgIGNvbnN0IGNoYW5nbGFuZyA9IGFzeW5jIChzZWxlY3RlZHgsIHdvcmQpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9kZWVwbC10cmFuc2xhdG9yMi5wLnJhcGlkYXBpLmNvbS90cmFuc2xhdGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgJ1gtUmFwaWRBUEktS2V5JzogJzdiZGRkNTg0NDBtc2g5YTgyNzI5NmFmNTM3NDBwMWJlN2VhanNuNjY3NGQ1Nzk5MWIwJyxcbiAgICAgICAgICAgICAgJ1gtUmFwaWRBUEktSG9zdCc6ICdkZWVwbC10cmFuc2xhdG9yMi5wLnJhcGlkYXBpLmNvbSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgc291cmNlX2xhbmc6ICdFTicsXG4gICAgICAgICAgICAgIHRhcmdldF9sYW5nOiBzZWxlY3RlZHgsXG4gICAgICAgICAgICAgIHRleHQ6IHdvcmRcbiAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MucmVxdWVzdChvcHRpb25zKTtcbiAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgfTtcblxuXG4gIGNvbnN0IGNoYW5nZWV4aXN0aW5nICA9IGFzeW5jKCk9PntcbiAgICBpZiAoc2VsZWN0ZWR4ID09PSAnR0InKSB7XG5cbiAgICB9ZWxzZSBpZiAoc2VsZWN0ZWR4ICE9PSBcIlwiICYmIHNlbGVjdGVkeCAhPT0gJ0dCJykge1xuICAgICBhd2FpdCBjaGFuZ2xhbmcoc2VsZWN0ZWR4LCApXG4gICAgfWVsc2Uge1xuICBcbiAgICB9XG4gIH1cbiAgIGNoYW5nZWV4aXN0aW5nKClcblxuXG4gIH0sW3NlbGVjdGVkeF0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmQ2FudmFzX193cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmQ2FudmFzX19ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZDYW52YXNfX3RvZ2dsZVwiIG9uQ2xpY2s9e2hhbmRsZVNpZGViYXJDbG9zZX0+XG4gICAgICAgICAgPElvQ2xvc2UgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZkNhbnZhc19fY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZDYW52YXNfX2xvZ28gbG9nb1wiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxvZ28tZGFya1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvbG9nby9sb2dvLnBuZ1wiIGFsdD1cIkxvZ29cIiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibG9nby1saWdodFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvbG9nby93X2xvZ28ucG5nXCIgYWx0PVwiTG9nb1wiIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+QWJvdXQgVXM8L2g0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbXNJbmFib3V0XCI+XG4gICAgICAgICAgICAgIFdlbGNvbWUgdG8gRGFiYXIgTWVkaWEg4oCTIHdoZXJlIGJ1c2luZXNzLCB0ZWNobm9sb2d5LCBhbmQgd29ya3BsYWNlXG4gICAgICAgICAgICAgIGN1bHR1cmUgY29udmVyZ2UgdG8gdGVsbCBjb21wZWxsaW5nIHN0b3JpZXMuIFwiRGFiYXIsXCIgbWVhbmluZ1xuICAgICAgICAgICAgICAnd29yZCcgb3IgJ3RhbGsnIGluIEhlYnJldywgc3ltYm9saXplcyBvdXIgY29tbWl0bWVudCB0byBicmluZ2luZ1xuICAgICAgICAgICAgICBwb3dlcmZ1bCBuYXJyYXRpdmVzIHRvIHRoZSBmb3JlZnJvbnQuIE91ciBuYW1lIHJlZmxlY3RzIG91clxuICAgICAgICAgICAgICBtaXNzaW9uIHRvIHVuY292ZXIgYW5kIG5hcnJhdGUgc3RvcmllcyB0aGF0IHNoYXBlIHRoZSBkeW5hbWljXG4gICAgICAgICAgICAgIHNlY3RvcnMgb2YgYnVzaW5lc3MgYW5kIHRlY2hub2xvZ3kuIEpvaW4gdXMgYXMgd2UgZGVsdmUgaW50byB0aGVcbiAgICAgICAgICAgICAgd29ybGQgb2YgaW5ub3ZhdGl2ZSBidXNpbmVzc2VzLCBjdXR0aW5nLWVkZ2UgdGVjaG5vbG9neSwgYW5kXG4gICAgICAgICAgICAgIGV2b2x2aW5nIHdvcmtwbGFjZSB0cmVuZHMsIG9mZmVyaW5nIGluc2lnaHRzIGFuZCBwZXJzcGVjdGl2ZXMgdGhhdFxuICAgICAgICAgICAgICByZXNvbmF0ZSBpbiB0b2RheSdzIGZhc3QtcGFjZWQgd29ybGQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZDYW52YXNfX2NvbnRhY3RcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPkdldCBJbiBUb3VjaDwvaDQ+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwib2ZmQ2FudmFzX19jb250YWN0LWxpc3QgbGlzdC13cmFwXCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGUtb3BlblwiIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIm1haWx0bzpoZWxsb0B0aGVkYWJhci5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIGhlbGxvQHRoZWRhYmFyLmNvbVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxGYUluc3RhZ3JhbSAvPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90aGUuZGFiYXIvP2lnc2hpZD1ZekF3WmpFMVpUSTBaZyUzRCUzRFwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEB0aGUuZGFiYXJcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8RmFGYWNlYm9va1NxdWFyZSAvPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Byb2ZpbGUucGhwP2lkPTYxNTUyODc1OTk4NDIyJm1pYmV4dGlkPVpiV0t3TFwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEBkYWJhclxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxSaVR3aXR0ZXJYRmlsbCAvPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9EYWJhcm5ldHdvcms/dD1GZFdzMDkxOUxoMkNxUXhxNTBWVU1nXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQGRhYmFybmV0d29ya1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxGYUxpbmtlZGluIC8+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9kYXJiYXItbWVkaWEvXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICBAZGFiYXItbWVkaWFcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZDYW52YXNfX292ZXJsYXlcIiBvbkNsaWNrPXtoYW5kbGVTaWRlYmFyQ2xvc2V9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkZhSW5zdGFncmFtIiwiRmFGYWNlYm9va1NxdWFyZSIsIlJpVHdpdHRlclhGaWxsIiwiRmFMaW5rZWRpbiIsIklvQ2xvc2UiLCJ1c2VFZmZlY3QiLCJTaWRlYmFyIiwiaGFuZGxlU2lkZWJhckNsb3NlIiwic2VsZWN0ZWR4IiwiaXRlbXNJbmFib3V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2hhbmdsYW5nIiwid29yZCIsIm9wdGlvbnMiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiZGF0YSIsInNvdXJjZV9sYW5nIiwidGFyZ2V0X2xhbmciLCJ0ZXh0IiwicmVzIiwiYXhpb3MiLCJyZXF1ZXN0IiwiY2hhbmdlZXhpc3RpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImg0IiwicCIsInVsIiwibGkiLCJpIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Header/Sidebar.js\n"));

/***/ })

});