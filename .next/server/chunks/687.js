exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 9061:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 6702:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5442));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4001))

/***/ }),

/***/ 4001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5176);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const DarkMode = ()=>{
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { theme, setTheme, systemTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .F)();
    // useEffect only runs on the client, so now we can safely show the UI
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    const currentTheme = theme === "system" ? systemTheme : theme;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                className: "hidden",
                value: theme,
                onChange: (e)=>setTheme(e.target.value),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "system",
                        children: "System"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "dark",
                        children: "Dark"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "light",
                        children: "Light"
                    })
                ]
            }),
            currentTheme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                id: "theme-toggle",
                type: "button",
                class: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-6 h-6 cursor-pointer text-yellow-500",
                    onClick: ()=>setTheme("light"),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    })
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                id: "theme-toggle",
                type: "button",
                class: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg text-sm p-2.5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "currentColor",
                    className: "w-6 h-6 cursor-pointer ",
                    onClick: ()=>setTheme("dark"),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkMode);


/***/ }),

/***/ 5442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Providers: () => (/* binding */ Providers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5176);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ Providers,default auto */ 


const Providers = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_1__/* .ThemeProvider */ .f, {
        attribute: "class",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Providers);


/***/ }),

/***/ 4422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports Providers, __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`E:\plusultrabuilds\src\app\Providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Providers"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 1062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5553);
// EXTERNAL MODULE: ./src/app/Providers.tsx
var Providers = __webpack_require__(4422);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(4834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/app/DarkMode.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`E:\plusultrabuilds\src\app\DarkMode.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const DarkMode = (__default__);
;// CONCATENATED MODULE: ./src/app/layout.tsx





const metadata = {
    title: "Jay Singh Portfolio",
    description: "Portfolio website by Jay Singh"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        type: "image/png",
                        href: "/public/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
                        integrity: "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",
                        crossOrigin: "anonymous",
                        referrerPolicy: "no-referrer"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: "min-h-screen flex flex-col text-inherit ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Providers/* default */.ZP, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                            className: "... backdrop-filter backdrop-blur-lg bg-opacity-30 flex p-4 sm:p-5 border-b",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex font-medium text-xs sm:text-sm items-center max-w-[900px] mx-auto w-full",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "logo.png",
                                                className: "w-200 h-10",
                                                alt: "Logo"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            className: "hidden sm:inline",
                                            children: "Jay Singh"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            className: "sm:hidden",
                                            children: "JS"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(DarkMode, {})
                            ]
                        }),
                        children,
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                            className: "flex p-4 py-16  text-xs border-t text-inherit sm:text-sm items-center justify-center flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-center gap-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            download: true,
                                            href: "/Jay-Singh-CV.pdf",
                                            target: "_blank",
                                            className: "cursor-pointer hover:opacity-60 duration-200",
                                            children: "PDF CV"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "|"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/projects",
                                            className: "cursor-pointer hover:opacity-60 duration-200",
                                            children: "projects"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "|"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://github.com/JayUnitTest/plusultrabuilds",
                                            target: "_blank",
                                            className: "cursor-pointer hover:opacity-60 duration-200",
                                            children: "Source"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "|"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-center gap-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://github.com/JayUnitTest",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-brands fa-github cursor-pointer hover:opacity-60 duration-200 "
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "|"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.linkedin.com/in/jay-singh-51ba87142/",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-brands fa-linkedin-in cursor-pointer hover:opacity-60 duration-200"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "|"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://github.com/JayUnitTest/plusultrabuilds",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-brands fa-square-github cursor-pointer hover:opacity-60 duration-200"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 2819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;