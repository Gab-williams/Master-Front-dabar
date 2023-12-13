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

/***/ "./components/slider/TrendingSlider.js":
/*!*********************************************!*\
  !*** ./components/slider/TrendingSlider.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TrendingSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _util_blogData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/util/blogData */ \"./util/blogData.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! contentful */ \"./node_modules/contentful/dist/contentful.browser.min.js\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction TrendingSlider(param) {\n    let { showItem } = param;\n    _s();\n    const [Tendall, setTendall] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const client = (0,contentful__WEBPACK_IMPORTED_MODULE_6__.createClient)({\n        space: \"t0pszie0jiqu\",\n        accessToken: \"bm2qgxL1ruXxTPkEQT0KgtAuHOwVxlOzOuj-AoNo-AM\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Tending News\n        const TendData = async ()=>{\n            let tending = await client.getEntries({\n                content_type: \"tending\",\n                select: \"fields\"\n            });\n            // setTendall(tending?.items)\n            const newData = await Promise.all(tending === null || tending === void 0 ? void 0 : tending.items.map(async (item)=>{\n                // console.log(item)\n                // console.log(\"tending\",item.fields)\n                //console.log(item.fields.storyId.fields.writerId.sys.id)\n                //var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };\n                let timez = new Date(item.fields.storyId.sys.createdAt);\n                const monthNames = [\n                    \"Jan\",\n                    \"Feb\",\n                    \"Mar\",\n                    \"Apr\",\n                    \"May\",\n                    \"Jun\",\n                    \"Jul\",\n                    \"Aug\",\n                    \"Sept\",\n                    \"Oct\",\n                    \"Nov\",\n                    \"Dec\"\n                ];\n                const day = timez.getDate();\n                const monthIndex = timez.getMonth();\n                const year = timez.getFullYear();\n                const formattedDate = \"\".concat(day, \" \").concat(monthNames[monthIndex], \" \").concat(year);\n                let data = await client.getEntry(item.fields.storyId.fields.categoryId.sys.id);\n                let writer = await client.getEntry(item.fields.storyId.fields.writerId.sys.id);\n                let answer = data.fields.category;\n                let answriter = writer.fields.name;\n                return {\n                    heading: item.fields.storyId.fields.heading,\n                    summary: item.fields.storyId.fields.summary,\n                    category: answer,\n                    writer: answriter,\n                    thumbnail: item.fields.storyId.fields.thumbnail.fields.file.url,\n                    id: item.sys.id,\n                    timez: formattedDate\n                };\n            }));\n            setTendall(newData);\n        };\n        TendData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {\n            modules: [\n                swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay,\n                swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,\n                swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation\n            ],\n            slidesPerView: showItem,\n            spaceBetween: 30,\n            loop: true,\n            autoplay: {\n                delay: 2500,\n                disableOnInteraction: false\n            },\n            pagination: {\n                clickable: true,\n                el: \".block-gallery-pagination\"\n            },\n            breakpoints: {\n                320: {\n                    slidesPerView: 1,\n                    spaceBetween: 30\n                },\n                575: {\n                    slidesPerView: 2,\n                    spaceBetween: 30\n                },\n                767: {\n                    slidesPerView: 3,\n                    spaceBetween: 30\n                },\n                991: {\n                    slidesPerView: 3,\n                    spaceBetween: 30\n                },\n                1199: {\n                    slidesPerView: showItem,\n                    spaceBetween: 30\n                },\n                1350: {\n                    slidesPerView: showItem,\n                    spaceBetween: 30\n                }\n            },\n            className: \"swiper-wrapper\",\n            children: Tendall.slice(0, 7).map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"trending__post\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"trending__post-thumb tgImage__hover\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/blog/\".concat(item.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: item.thumbnail,\n                                        alt: \"img\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n                                        lineNumber: 115,\n                                        columnNumber: 65\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n                                lineNumber: 113,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"trending__post-content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"tgbanner__content-meta list-wrap\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"category\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                href: \"/business?hello=\".concat(encodeURIComponent(item.category)),\n                                                children: item.category\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n                                                lineNumber: 120,\n                                                columnNumber: 62\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n                                            lineNumber: 120,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"tgbanner__content-meta list-wrap\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-black\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                href: \"/blog/\".concat(item.id),\n                                                children: [\n                                                    \"By \",\n                                                    item.writer\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n                                                lineNumber: 126,\n                                                columnNumber: 109\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n                                            lineNumber: 126,\n                                            columnNumber: 82\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"title tgcommon__hover\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"/blog/\".concat(item.id),\n                                            children: item.heading\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n                                            lineNumber: 127,\n                                            columnNumber: 71\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n                                lineNumber: 118,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n                        lineNumber: 112,\n                        columnNumber: 25\n                    }, this)\n                }, i, false, {\n                    fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n                    lineNumber: 111,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/Mustafaking/Documents/GitHub/Master-Front-dabar/components/slider/TrendingSlider.js\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(TrendingSlider, \"FD2dvftwbMAUkgAJ94rF/+f9Djg=\");\n_c = TrendingSlider;\nvar _c;\n$RefreshReg$(_c, \"TrendingSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDa0UsTUFBTSxTQUFpQixPQUFSNUMsS0FBS2lCLEVBQUU7c0RBQUtqQixLQUFLd0IsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBaEI3RWtCOzs7Ozs7Ozs7OztBQTJCdEM7R0FsSXdCM0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlkZXIvVHJlbmRpbmdTbGlkZXIuanM/ODBjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZGF0YSBmcm9tIFwiQC91dGlsL2Jsb2dEYXRhXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgQXV0b3BsYXksIE5hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tIFwic3dpcGVyXCJcbmltcG9ydCB7Y3JlYXRlQ2xpZW50fSBmcm9tICdjb250ZW50ZnVsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJlbmRpbmdTbGlkZXIoeyBzaG93SXRlbSB9KSB7XG5cbiAgICBjb25zdCAgW1RlbmRhbGwsIHNldFRlbmRhbGxdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgY2xpZW50ID0gIGNyZWF0ZUNsaWVudCh7XG4gICAgICAgIHNwYWNlOid0MHBzemllMGppcXUnLFxuICAgICAgICBhY2Nlc3NUb2tlbjonYm0ycWd4TDFydVh4VFBrRVFUMEtndEF1SE93VnhsT3pPdWotQW9Oby1BTScsXG4gICAgICB9KTtcblxuXG4gICAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgLy8gVGVuZGluZyBOZXdzXG4gICAgY29uc3QgVGVuZERhdGEgPSBhc3luYygpPT57XG4gICAgICAgIGxldCB0ZW5kaW5nID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe2NvbnRlbnRfdHlwZTondGVuZGluZycsICBzZWxlY3Q6J2ZpZWxkcyd9KVxuICAgICAgICAvLyBzZXRUZW5kYWxsKHRlbmRpbmc/Lml0ZW1zKVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICB0ZW5kaW5nPy5pdGVtcy5tYXAoYXN5bmMgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSlcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0ZW5kaW5nXCIsaXRlbS5maWVsZHMpXG4gICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW0uZmllbGRzLnN0b3J5SWQuZmllbGRzLndyaXRlcklkLnN5cy5pZClcbiAgICAgICAgICAgICAgIC8vdmFyIG9wdGlvbnMgPSB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9O1xuICAgICAgICAgICAgICAgbGV0IHRpbWV6ID0gbmV3IERhdGUoaXRlbS5maWVsZHMuc3RvcnlJZC5zeXMuY3JlYXRlZEF0KVxuICAgICAgICAgICAgICAgY29uc3QgbW9udGhOYW1lcyA9IFtcbiAgICAgICAgICAgICAgICBcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLFxuICAgICAgICAgICAgICAgIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsXG4gICAgICAgICAgICAgICAgXCJBdWdcIiwgXCJTZXB0XCIsIFwiT2N0XCIsXG4gICAgICAgICAgICAgICAgXCJOb3ZcIiwgXCJEZWNcIlxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgY29uc3QgZGF5ID0gdGltZXouZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICBjb25zdCBtb250aEluZGV4ID0gdGltZXouZ2V0TW9udGgoKTtcbiAgICAgICAgICAgICAgY29uc3QgeWVhciA9IHRpbWV6LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtkYXl9ICR7bW9udGhOYW1lc1ttb250aEluZGV4XX0gJHt5ZWFyfWA7XG4gICAgXG4gICAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgY2xpZW50LmdldEVudHJ5KGl0ZW0uZmllbGRzLnN0b3J5SWQuZmllbGRzLmNhdGVnb3J5SWQuc3lzLmlkKTtcbiAgICAgICAgICAgICAgbGV0IHdyaXRlciA9IGF3YWl0IGNsaWVudC5nZXRFbnRyeShpdGVtLmZpZWxkcy5zdG9yeUlkLmZpZWxkcy53cml0ZXJJZC5zeXMuaWQpXG4gICAgICAgICAgICAgIGxldCBhbnN3ZXIgPSBkYXRhLmZpZWxkcy5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgIGxldCBhbnN3cml0ZXIgPSB3cml0ZXIuZmllbGRzLm5hbWVcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiBpdGVtLmZpZWxkcy5zdG9yeUlkLmZpZWxkcy5oZWFkaW5nLFxuICAgICAgICAgICAgICAgIHN1bW1hcnk6IGl0ZW0uZmllbGRzLnN0b3J5SWQuZmllbGRzLnN1bW1hcnksXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGFuc3dlcixcbiAgICAgICAgICAgICAgICB3cml0ZXI6YW5zd3JpdGVyLFxuICAgICAgICAgICAgICAgIHRodW1ibmFpbDppdGVtLmZpZWxkcy5zdG9yeUlkLmZpZWxkcy50aHVtYm5haWwuZmllbGRzLmZpbGUudXJsLFxuICAgICAgICAgICAgICAgIGlkOml0ZW0uc3lzLmlkLFxuICAgICAgICAgICAgICAgIHRpbWV6OmZvcm1hdHRlZERhdGVcbiAgICBcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICBcbiAgICAgICAgICBzZXRUZW5kYWxsKG5ld0RhdGEpXG4gICAgfVxuICAgIFxuICAgIFRlbmREYXRhKClcbiAgICBcbiAgICAgXG4gICAgfSxbXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTd2lwZXJcbiAgICAgICAgICAgICAgICBtb2R1bGVzPXtbQXV0b3BsYXksIFBhZ2luYXRpb24sIE5hdmlnYXRpb25dfVxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9e3Nob3dJdGVtfVxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MzB9XG4gICAgICAgICAgICAgICAgbG9vcD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBhdXRvcGxheT17e1xuICAgICAgICAgICAgICAgICAgICBkZWxheTogMjUwMCxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGVsOiAnLmJsb2NrLWdhbGxlcnktcGFnaW5hdGlvbidcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzPXt7XG4gICAgICAgICAgICAgICAgICAgIDMyMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDU3NToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDc2Nzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDk5MToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDExOTk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IHNob3dJdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgMTM1MDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogc2hvd0l0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyLXdyYXBwZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtUZW5kYWxsLnNsaWNlKDAsIDcpLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmdfX3Bvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nX19wb3N0LXRodW1iIHRnSW1hZ2VfX2hvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvJHtpdGVtLmlkfWB9PjxpbWcgc3JjPXtpdGVtLnRodW1ibmFpbH0gYWx0PVwiaW1nXCIgLz48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7aXRlbS50cmVuZGluZyAmJiA8c3BhbiBjbGFzc05hbWU9XCJpc190cmVuZFwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib2x0XCIgLz48L3NwYW4+fSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nX19wb3N0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRnYmFubmVyX19jb250ZW50LW1ldGEgbGlzdC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj48TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9idXNpbmVzcz9oZWxsbz0ke2VuY29kZVVSSUNvbXBvbmVudChpdGVtLmNhdGVnb3J5KX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57aXRlbS5jYXRlZ29yeX08L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0Z2Jhbm5lcl9fY29udGVudC1tZXRhIGxpc3Qtd3JhcFwiPjxsaSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+PExpbmsgaHJlZj17YC9ibG9nLyR7aXRlbS5pZH1gfT5CeSB7aXRlbS53cml0ZXJ9PC9MaW5rPjwvbGk+PC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIHRnY29tbW9uX19ob3ZlclwiPjxMaW5rIGhyZWY9e2AvYmxvZy8ke2l0ZW0uaWR9YH0+e2l0ZW0uaGVhZGluZ308L0xpbms+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlN3aXBlciIsIlN3aXBlclNsaWRlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkYXRhIiwiTGluayIsIkF1dG9wbGF5IiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJjcmVhdGVDbGllbnQiLCJUcmVuZGluZ1NsaWRlciIsInNob3dJdGVtIiwiVGVuZGFsbCIsInNldFRlbmRhbGwiLCJjbGllbnQiLCJzcGFjZSIsImFjY2Vzc1Rva2VuIiwiVGVuZERhdGEiLCJ0ZW5kaW5nIiwiZ2V0RW50cmllcyIsImNvbnRlbnRfdHlwZSIsInNlbGVjdCIsIm5ld0RhdGEiLCJQcm9taXNlIiwiYWxsIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwidGltZXoiLCJEYXRlIiwiZmllbGRzIiwic3RvcnlJZCIsInN5cyIsImNyZWF0ZWRBdCIsIm1vbnRoTmFtZXMiLCJkYXkiLCJnZXREYXRlIiwibW9udGhJbmRleCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZm9ybWF0dGVkRGF0ZSIsImdldEVudHJ5IiwiY2F0ZWdvcnlJZCIsImlkIiwid3JpdGVyIiwid3JpdGVySWQiLCJhbnN3ZXIiLCJjYXRlZ29yeSIsImFuc3dyaXRlciIsIm5hbWUiLCJoZWFkaW5nIiwic3VtbWFyeSIsInRodW1ibmFpbCIsImZpbGUiLCJ1cmwiLCJtb2R1bGVzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwiZWwiLCJicmVha3BvaW50cyIsImNsYXNzTmFtZSIsInNsaWNlIiwiaSIsImRpdiIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJ1bCIsImxpIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/slider/TrendingSlider.js\n"));

/***/ })

});