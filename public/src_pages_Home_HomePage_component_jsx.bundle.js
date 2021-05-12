(self["webpackChunkbasketball_leagues"] = self["webpackChunkbasketball_leagues"] || []).push([["src_pages_Home_HomePage_component_jsx"],{

/***/ "./src/components/Conferences/conferences-preview.component.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/Conferences/conferences-preview.component.jsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _conferences_preview_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conferences-preview.styles.scss */ "./src/components/Conferences/conferences-preview.styles.scss");




var ConferencesPreview = function ConferencesPreview(_ref) {
  var title = _ref.title,
      conferenceLogo = _ref.conferenceLogo,
      history = _ref.history,
      linkUrl = _ref.linkUrl,
      match = _ref.match;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "conferences-preview",
    onClick: function onClick() {
      return history.push("".concat(match.url, "conference/").concat(linkUrl));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "background-image",
    style: {
      backgroundImage: "url(".concat(conferenceLogo, ")")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "title"
  }, title.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "subtitle"
  }, "LETS GO !")));
};

ConferencesPreview.displayName = "ConferencesPreview";
/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)(ConferencesPreview));

/***/ }),

/***/ "./src/constants/confDATA.js":
/*!***********************************!*\
  !*** ./src/constants/confDATA.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var confDATA = [{
  title: "East",
  conferenceLogo: "https://i.ibb.co/4P1r9ZC/east-conference-logo.png",
  conferenceLetter: "https://i.ibb.co/QYxkf5g/east-conference-letter.png",
  id: 1,
  linkUrl: "East"
}, {
  title: "West",
  conferenceLogo: "https://i.ibb.co/7RcFWzB/west-conference-logo.png",
  conferenceLetter: "https://i.ibb.co/vQYfxmL/west-conference-letter.png",
  id: 2,
  linkUrl: "West"
}];
/* harmony default export */ __webpack_exports__["default"] = (confDATA);

/***/ }),

/***/ "./src/pages/Home/HomePage.component.jsx":
/*!***********************************************!*\
  !*** ./src/pages/Home/HomePage.component.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _constants_confDATA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/confDATA */ "./src/constants/confDATA.js");
/* harmony import */ var _components_Conferences_conferences_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Conferences/conferences-preview.component */ "./src/components/Conferences/conferences-preview.component.jsx");
/* harmony import */ var _HomePage_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage.styles.scss */ "./src/pages/Home/HomePage.styles.scss");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var HomePage = function HomePage() {
  var conferences = _constants_confDATA__WEBPACK_IMPORTED_MODULE_1__.default;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "homepage"
  }, conferences.map(function (_ref) {
    var id = _ref.id,
        otherProps = _objectWithoutProperties(_ref, ["id"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Conferences_conferences_preview_component__WEBPACK_IMPORTED_MODULE_2__.default, _extends({
      key: id
    }, otherProps));
  }));
};

HomePage.displayName = "HomePage";
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Conferences/conferences-preview.styles.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Conferences/conferences-preview.styles.scss ***!
  \*************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".conferences-preview {\n  min-width: 10%;\n  height: 600px;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  margin: 0px 7.5px 15px;\n  overflow: hidden; }\n  .conferences-preview:hover {\n    cursor: pointer; }\n    .conferences-preview:hover .background-image {\n      transform: scale(1.1);\n      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95); }\n    .conferences-preview:hover .content {\n      opacity: 0.9; }\n  .conferences-preview.large {\n    height: 380px; }\n  .conferences-preview:first-child {\n    margin-right: 7.5px; }\n  .conferences-preview:last-child {\n    margin-left: 7.5px; }\n  .conferences-preview .background-image {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: center;\n    margin: 10px; }\n  .conferences-preview .content {\n    height: 90px;\n    padding: 0 25px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid black;\n    background-color: white;\n    opacity: 0.7;\n    position: absolute; }\n    .conferences-preview .content .title {\n      font-weight: bold;\n      margin: 0 6px 0;\n      font-size: 22px;\n      color: #4a4a4a; }\n    .conferences-preview .content .subtitle {\n      font-weight: bold;\n      margin: 0 6px 0;\n      font-size: 22px;\n      color: #4a4a4a; }\n", "",{"version":3,"sources":["webpack://./src/components/Conferences/conferences-preview.styles.scss"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,aAAa;EACb,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,sBAAsB;EACtB,gBAAgB,EAAA;EATlB;IAYI,eAAe,EAAA;IAZnB;MAeM,qBAAqB;MACrB,6DAA6D,EAAA;IAhBnE;MAoBM,YAAY,EAAA;EApBlB;IAyBI,aAAa,EAAA;EAzBjB;IA6BI,mBAAmB,EAAA;EA7BvB;IAiCI,kBAAkB,EAAA;EAjCtB;IAqCI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,2BAA2B;IAC3B,YAAY,EAAA;EAzChB;IA6CI,YAAY;IACZ,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB,EAAA;IAtDtB;MAyDM,iBAAiB;MACjB,eAAe;MACf,eAAe;MACf,cAAc,EAAA;IA5DpB;MAgEM,iBAAiB;MACjB,eAAe;MACf,eAAe;MACf,cAAc,EAAA","sourcesContent":[".conferences-preview {\r\n  min-width: 10%;\r\n  height: 600px;\r\n  flex: 1 1 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 1px solid black;\r\n  margin: 0px 7.5px 15px;\r\n  overflow: hidden;\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n\r\n    & .background-image {\r\n      transform: scale(1.1);\r\n      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);\r\n    }\r\n\r\n    & .content {\r\n      opacity: 0.9;\r\n    }\r\n  }\r\n\r\n  &.large {\r\n    height: 380px;\r\n  }\r\n\r\n  &:first-child {\r\n    margin-right: 7.5px;\r\n  }\r\n\r\n  &:last-child {\r\n    margin-left: 7.5px;\r\n  }\r\n\r\n  .background-image {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    margin: 10px;\r\n  }\r\n\r\n  .content {\r\n    height: 90px;\r\n    padding: 0 25px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 1px solid black;\r\n    background-color: white;\r\n    opacity: 0.7;\r\n    position: absolute;\r\n\r\n    .title {\r\n      font-weight: bold;\r\n      margin: 0 6px 0;\r\n      font-size: 22px;\r\n      color: #4a4a4a;\r\n    }\r\n\r\n    .subtitle {\r\n      font-weight: bold;\r\n      margin: 0 6px 0;\r\n      font-size: 22px;\r\n      color: #4a4a4a;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/Home/HomePage.styles.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/Home/HomePage.styles.scss ***!
  \**************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".homepage {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n", "",{"version":3,"sources":["webpack://./src/pages/Home/HomePage.styles.scss"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,eAAe;EACf,8BAA8B,EAAA","sourcesContent":[".homepage {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Conferences/conferences-preview.styles.scss":
/*!********************************************************************!*\
  !*** ./src/components/Conferences/conferences-preview.styles.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_conferences_preview_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./conferences-preview.styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Conferences/conferences-preview.styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_conferences_preview_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_conferences_preview_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/Home/HomePage.styles.scss":
/*!*********************************************!*\
  !*** ./src/pages/Home/HomePage.styles.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomePage_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./HomePage.styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/Home/HomePage.styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomePage_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomePage_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_Home_HomePage_component_jsx.bundle.js.map