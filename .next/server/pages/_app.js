/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/context.js":
/*!*******************************!*\
  !*** ./components/context.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Provider: () => (/* binding */ Provider),\n/* harmony export */   context: () => (/* binding */ context),\n/* harmony export */   \"default\": () => (/* binding */ Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction Provider({ children }) {\n    let [selectedx, setSelectedx] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const countryCode = localStorage.getItem(\"countrycode\");\n        let parsedCountryCode = {};\n        try {\n            parsedCountryCode = countryCode ? JSON.parse(countryCode) : {};\n            if (Object.keys(parsedCountryCode).length > 0) {\n                setSelectedx(parsedCountryCode.countrycode);\n            } else {\n                setSelectedx(\"GB\");\n            }\n        } catch (error) {\n            console.error(\"Error parsing JSON:\", error);\n        }\n    }, [\n        selectedx\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context.Provider, {\n        value: {\n            selectedx: selectedx,\n            setSelectedx: setSelectedx\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\context.js\",\n        lineNumber: 23,\n        columnNumber: 8\n    }, this);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDN0QsTUFBTUksd0JBQVVILG9EQUFhQTtBQUNmLFNBQVNJLFNBQVMsRUFBQ0MsUUFBUSxFQUFDO0lBQ3ZDLElBQUksQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxjQUFjQyxhQUFhQyxPQUFPLENBQUM7UUFDL0MsSUFBSUMsb0JBQW9CLENBQUM7UUFDekIsSUFBSTtZQUNGQSxvQkFBb0JILGNBQWNJLEtBQUtDLEtBQUssQ0FBQ0wsZUFBZSxDQUFDO1lBQzdELElBQUdNLE9BQU9DLElBQUksQ0FBQ0osbUJBQW1CSyxNQUFNLEdBQUcsR0FBRTtnQkFDM0NULGFBQWFJLGtCQUFrQk0sV0FBVztZQUM1QyxPQUFLO2dCQUNIVixhQUFhO1lBQ2Y7UUFDRixFQUFFLE9BQU9XLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHVCQUF1QkE7UUFDdkM7SUFDSSxHQUFFO1FBQUNaO0tBQVU7SUFHYixxQkFDRyw4REFBQ0gsUUFBUUMsUUFBUTtRQUFDZ0IsT0FBTztZQUN4QmQsV0FBVUE7WUFDVkMsY0FBYUE7UUFDYjtrQkFDRUY7Ozs7OztBQUdWO0FBRTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFiYXIvLi9jb21wb25lbnRzL2NvbnRleHQuanM/NDAxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuIGNvbnN0IGNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm92aWRlcih7Y2hpbGRyZW59KSB7XG4gICAgbGV0IFtzZWxlY3RlZHgsIHNldFNlbGVjdGVkeF0gPSB1c2VTdGF0ZSgnJylcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgY29uc3QgY291bnRyeUNvZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdW50cnljb2RlXCIpO1xubGV0IHBhcnNlZENvdW50cnlDb2RlID0ge307XG50cnkge1xuICBwYXJzZWRDb3VudHJ5Q29kZSA9IGNvdW50cnlDb2RlID8gSlNPTi5wYXJzZShjb3VudHJ5Q29kZSkgOiB7fTtcbiAgaWYoT2JqZWN0LmtleXMocGFyc2VkQ291bnRyeUNvZGUpLmxlbmd0aCA+IDApe1xuICAgIHNldFNlbGVjdGVkeChwYXJzZWRDb3VudHJ5Q29kZS5jb3VudHJ5Y29kZSlcbiAgfWVsc2V7XG4gICAgc2V0U2VsZWN0ZWR4KFwiR0JcIikgIFxuICB9XG59IGNhdGNoIChlcnJvcikge1xuICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcGFyc2luZyBKU09OOlwiLCBlcnJvcik7XG59XG4gICAgfSxbc2VsZWN0ZWR4XSlcblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgPGNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgXG4gICAgICAgIHNlbGVjdGVkeDpzZWxlY3RlZHgsXG4gICAgICAgIHNldFNlbGVjdGVkeDpzZXRTZWxlY3RlZHgsXG4gICAgICAgIH19PlxuICAgICAgICAge2NoaWxkcmVufVxuICAgICAgIDwvY29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCB7UHJvdmlkZXIsIGNvbnRleHR9Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29udGV4dCIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZWxlY3RlZHgiLCJzZXRTZWxlY3RlZHgiLCJjb3VudHJ5Q29kZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZWRDb3VudHJ5Q29kZSIsIkpTT04iLCJwYXJzZSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjb3VudHJ5Y29kZSIsImVycm9yIiwiY29uc29sZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/context.js\n");

/***/ }),

/***/ "./components/elements/Preloader.js":
/*!******************************************!*\
  !*** ./components/elements/Preloader.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Preloader)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Preloader() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"preloader\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"loading-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"loading-center-absolute\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"object\",\n                            id: \"object_one\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\elements\\\\Preloader.js\",\n                            lineNumber: 7,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"object\",\n                            id: \"object_two\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\elements\\\\Preloader.js\",\n                            lineNumber: 8,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"object\",\n                            id: \"object_three\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\elements\\\\Preloader.js\",\n                            lineNumber: 9,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\elements\\\\Preloader.js\",\n                    lineNumber: 6,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\elements\\\\Preloader.js\",\n                lineNumber: 5,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\components\\\\elements\\\\Preloader.js\",\n            lineNumber: 4,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VsZW1lbnRzL1ByZWxvYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0E7SUFDcEIscUJBQ0k7a0JBQ0ksNEVBQUNDO1lBQUlDLElBQUc7c0JBQ0osNEVBQUNEO2dCQUFJQyxJQUFHOzBCQUNKLDRFQUFDRDtvQkFBSUMsSUFBRzs7c0NBQ0osOERBQUNEOzRCQUFJRSxXQUFVOzRCQUFTRCxJQUFHOzs7Ozs7c0NBQzNCLDhEQUFDRDs0QkFBSUUsV0FBVTs0QkFBU0QsSUFBRzs7Ozs7O3NDQUMzQiw4REFBQ0Q7NEJBQUlFLFdBQVU7NEJBQVNELElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFiYXIvLi9jb21wb25lbnRzL2VsZW1lbnRzL1ByZWxvYWRlci5qcz84ZWQyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZWxvYWRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBpZD1cInByZWxvYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZy1jZW50ZXItYWJzb2x1dGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2JqZWN0XCIgaWQ9XCJvYmplY3Rfb25lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2JqZWN0XCIgaWQ9XCJvYmplY3RfdHdvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2JqZWN0XCIgaWQ9XCJvYmplY3RfdGhyZWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUHJlbG9hZGVyIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/elements/Preloader.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_elements_Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/elements/Preloader */ \"./components/elements/Preloader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/css/animate.min.css */ \"./public/assets/css/animate.min.css\");\n/* harmony import */ var _public_assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/assets/css/bootstrap.min.css */ \"./public/assets/css/bootstrap.min.css\");\n/* harmony import */ var _public_assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/assets/css/flaticon.css */ \"./public/assets/css/flaticon.css\");\n/* harmony import */ var _public_assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_assets_css_fontawesome_all_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/assets/css/fontawesome-all.min.css */ \"./public/assets/css/fontawesome-all.min.css\");\n/* harmony import */ var _public_assets_css_fontawesome_all_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_fontawesome_all_min_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_assets_css_imageRevealHover_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/assets/css/imageRevealHover.css */ \"./public/assets/css/imageRevealHover.css\");\n/* harmony import */ var _public_assets_css_imageRevealHover_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_imageRevealHover_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _public_assets_css_magnific_popup_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/assets/css/magnific-popup.css */ \"./public/assets/css/magnific-popup.css\");\n/* harmony import */ var _public_assets_css_magnific_popup_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_magnific_popup_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _public_assets_css_main_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/assets/css/main.css */ \"./public/assets/css/main.css\");\n/* harmony import */ var _public_assets_css_main_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_main_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _public_assets_css_slick_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../public/assets/css/slick.css */ \"./public/assets/css/slick.css\");\n/* harmony import */ var _public_assets_css_slick_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_slick_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _public_assets_css_spacing_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../public/assets/css/spacing.css */ \"./public/assets/css/spacing.css\");\n/* harmony import */ var _public_assets_css_spacing_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_spacing_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _public_assets_css_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../public/assets/css/swiper-bundle.css */ \"./public/assets/css/swiper-bundle.css\");\n/* harmony import */ var _public_assets_css_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/context */ \"./components/context.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_18__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setTimeout(()=>{\n            setLoading(false);\n        }, 1000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_context__WEBPACK_IMPORTED_MODULE_17__.Provider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\pages\\\\_app.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400&display=swap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\pages\\\\_app.js\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\pages\\\\_app.js\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                            children: `\n                 @font-face {\n                    font-family: 'Josefin Sans';\n                    font-style: bold;\n                    font-weight: 400;\n                    src: url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400&display=swap') format('woff2');\n                }\n                  @font-face {\n                    font-family: 'Josefin Sans';\n                    font-style: regular;\n                    font-weight: 300;\n                    src: url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap') format('woff2');\n                }\n                \n                    @font-face {\n                        font-family: 'Josefin Sans';\n                        font-style: bold;\n                        font-weight: 700;\n                        src: url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap') format('woff2');\n                    }\n                    \n\n                    body {\n                        font-family: 'Josefin Sans', sans-serif;\n                        margin: 0;\n                        padding: 0;\n                    }\n\n                    h1, h2, h3, h4, h5, h6 {\n                        font-family: 'Josefin Sans', sans-serif;\n                    }\n\n                    p {\n                        font-family: 'Josefin Sans', sans-serif;\n                    }\n                `\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\pages\\\\_app.js\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\pages\\\\_app.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_18___default()), {\n                                    strategy: \"afterInteractive\",\n                                    src: \"https://www.googletagmanager.com/gtag/js?id=G-J8HLPZVV8W\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\pages\\\\_app.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 18\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_18___default()), {\n                                    id: \"google-analytics\",\n                                    strategy: \"afterInteractive\",\n                                    children: `\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n    gtag('config', 'G-J8HLPZVV8W');\n  `\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\pages\\\\_app.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 1\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\pages\\\\_app.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this),\n                        !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            className: \"hide-nextjs-portal\",\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\pages\\\\_app.js\",\n                            lineNumber: 96,\n                            columnNumber: 28\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_Preloader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\pages\\\\_app.js\",\n                            lineNumber: 96,\n                            columnNumber: 90\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\pages\\\\_app.js\",\n                    lineNumber: 87,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\dashboard\\\\project\\\\dabar-user-frontend-master\\\\pages\\\\_app.js\",\n            lineNumber: 32,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ1o7QUFDZjtBQUNUO0FBQ1c7QUFDQTtBQUNlO0FBQ0U7QUFDTDtBQUNXO0FBQ0g7QUFDRjtBQUNWO0FBQ0M7QUFDRTtBQUNNO0FBQ0M7QUFDaEI7QUFFakMsU0FBU00sTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1JVLFdBQVc7WUFDVEQsV0FBVztRQUNiLEdBQUc7SUFDTCxHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFFQSw0RUFBQ04sMERBQVFBOzs4QkFDUCw4REFBQ0Qsa0RBQUlBOztzQ0FLSCw4REFBQ1M7NEJBQ0NDLEtBQUk7NEJBQ0pDLE1BQUs7Ozs7OztzQ0FFUCw4REFBQ0Y7NEJBQ0NDLEtBQUk7NEJBQ0pDLE1BQUs7Ozs7OztzQ0FFUCw4REFBQ0Y7NEJBQ0NDLEtBQUk7NEJBQ0pDLE1BQUs7Ozs7OztzQ0FFUCw4REFBQ0M7c0NBQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBbUNELENBQUM7Ozs7Ozs7Ozs7Ozs4QkFFWCw4REFBQ0M7O3NDQUFLLDhEQUFDQzs7OENBQUksOERBQUNaLHFEQUFNQTtvQ0FBQ2EsVUFBUztvQ0FBbUJDLEtBQUk7Ozs7Ozs4Q0FFekQsOERBQUNkLHFEQUFNQTtvQ0FBQ2UsSUFBRztvQ0FBbUJGLFVBQVM7OENBQ3BDLENBQUM7Ozs7O0VBS0YsQ0FBQzs7Ozs7Ozs7Ozs7O3dCQUNhLENBQUNULHdCQUFVLDhEQUFDRjs0QkFBVWMsV0FBVTs0QkFBc0IsR0FBR2IsU0FBUzs7Ozs7aURBQU8sOERBQUNSLHNFQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25HO0FBRUEsaUVBQWVNLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYWJhci8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJlbG9hZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvZWxlbWVudHMvUHJlbG9hZGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL25hdmlnYXRpb25cIjtcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Fzc2V0cy9jc3MvYW5pbWF0ZS5taW4uY3NzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvYXNzZXRzL2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Fzc2V0cy9jc3MvZmxhdGljb24uY3NzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvYXNzZXRzL2Nzcy9mb250YXdlc29tZS1hbGwubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Fzc2V0cy9jc3MvaW1hZ2VSZXZlYWxIb3Zlci5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9hc3NldHMvY3NzL21hZ25pZmljLXBvcHVwLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Fzc2V0cy9jc3MvbWFpbi5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9hc3NldHMvY3NzL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Fzc2V0cy9jc3Mvc3BhY2luZy5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9hc3NldHMvY3NzL3N3aXBlci1idW5kbGUuY3NzXCI7XG5pbXBvcnQgIHsgUHJvdmlkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbnRleHRcIjtcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSwgMTAwMCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gXG4gICAgPFByb3ZpZGVyPlxuICAgICAgPEhlYWQ+XG4gICAgICBcblxuXG5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEA3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEA0MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDQwMCZkaXNwbGF5PXN3YXAnKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogcmVndWxhcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpIGZvcm1hdCgnd29mZjInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEA3MDAmZGlzcGxheT1zd2FwJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj48ZGl2PjxTY3JpcHQgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCIgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLUo4SExQWlZWOFdcIiAvPlxuXG48U2NyaXB0IGlkPVwiZ29vZ2xlLWFuYWx5dGljc1wiIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiPlxuICB7YFxuICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgIGd0YWcoJ2NvbmZpZycsICdHLUo4SExQWlZWOFcnKTtcbiAgYH1cbjwvU2NyaXB0PjwvZGl2PnshbG9hZGluZyA/IDxDb21wb25lbnQgY2xhc3NOYW1lPVwiaGlkZS1uZXh0anMtcG9ydGFsXCIgey4uLnBhZ2VQcm9wc30gLz4gOiA8UHJlbG9hZGVyIC8+fTwvbWFpbj5cbjwvUHJvdmlkZXI+XG5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUHJlbG9hZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiUHJvdmlkZXIiLCJTY3JpcHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0VGltZW91dCIsImxpbmsiLCJyZWwiLCJocmVmIiwic3R5bGUiLCJtYWluIiwiZGl2Iiwic3RyYXRlZ3kiLCJzcmMiLCJpZCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/assets/css/animate.min.css":
/*!*******************************************!*\
  !*** ./public/assets/css/animate.min.css ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/bootstrap.min.css":
/*!*********************************************!*\
  !*** ./public/assets/css/bootstrap.min.css ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/flaticon.css":
/*!****************************************!*\
  !*** ./public/assets/css/flaticon.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/fontawesome-all.min.css":
/*!***************************************************!*\
  !*** ./public/assets/css/fontawesome-all.min.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/imageRevealHover.css":
/*!************************************************!*\
  !*** ./public/assets/css/imageRevealHover.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/magnific-popup.css":
/*!**********************************************!*\
  !*** ./public/assets/css/magnific-popup.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/main.css":
/*!************************************!*\
  !*** ./public/assets/css/main.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/slick.css":
/*!*************************************!*\
  !*** ./public/assets/css/slick.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/spacing.css":
/*!***************************************!*\
  !*** ./public/assets/css/spacing.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/swiper-bundle.css":
/*!*********************************************!*\
  !*** ./public/assets/css/swiper-bundle.css ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/swiper"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();