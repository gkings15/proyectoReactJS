(self["webpackChunkbasketball_leagues"] = self["webpackChunkbasketball_leagues"] || []).push([["src_pages_HomePlayers_HomePlayers_component_jsx"],{

/***/ "./src/components/SearchBarPlayers/SearchBarPlayers.component.jsx":
/*!************************************************************************!*\
  !*** ./src/components/SearchBarPlayers/SearchBarPlayers.component.jsx ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var _constants_predefinedPlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/predefinedPlayers */ "./src/constants/predefinedPlayers.js");
/* harmony import */ var _SearchBarPlayer_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBarPlayer.styles.scss */ "./src/components/SearchBarPlayers/SearchBarPlayer.styles.scss");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var SearchBarPlayers = function SearchBarPlayers(_ref) {
  var currentQuery = _ref.currentQuery,
      validateQPlayer = _ref.validateQPlayer;
  var CssTextField = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)({
    root: {
      "& label": {
        color: "#ffffff"
      },
      "& label.Mui-focused": {
        color: "#ffffff"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#ffffff"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#ffffff"
        },
        "& input": {
          color: "#ffffff"
        },
        "&:hover fieldset": {
          borderColor: "#ffffff"
        },
        "&.Mui-focused fieldset": {
          borderColor: "#ffffff"
        }
      }
    }
  })(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__.default);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "SearchBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__.default, {
    id: "teams",
    freeSolo: true,
    options: _constants_predefinedPlayers__WEBPACK_IMPORTED_MODULE_1__.default.map(function (player) {
      return player.name;
    }),
    renderInput: function renderInput(params) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CssTextField, _extends({}, params, {
        label: "First or last name",
        margin: "normal",
        variant: "outlined",
        onKeyPress: function onKeyPress(e) {
          return validateQPlayer(e);
        }
      }));
    }
  }));
};

SearchBarPlayers.displayName = "SearchBarPlayers";
/* harmony default export */ __webpack_exports__["default"] = (SearchBarPlayers);

/***/ }),

/***/ "./src/constants/predefinedPlayers.js":
/*!********************************************!*\
  !*** ./src/constants/predefinedPlayers.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var predefinedPlayers = [{
  "id": 1,
  "name": "Kobe Bryant"
}, {
  "id": 2,
  "name": "Lebron James"
}, {
  "id": 3,
  "name": "Kawhi Leonard"
}, {
  "id": 4,
  "name": "Paul George"
}, {
  "id": 4,
  "name": "Rajon Rondo"
}];
/* harmony default export */ __webpack_exports__["default"] = (predefinedPlayers);

/***/ }),

/***/ "./src/pages/HomePlayers/HomePlayers.component.jsx":
/*!*********************************************************!*\
  !*** ./src/pages/HomePlayers/HomePlayers.component.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _contexts_PlayersContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../contexts/PlayersContext */ "./src/contexts/PlayersContext.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/Pagination/Pagination.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _components_Common_ProgressBar_ProgressBar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/Common/ProgressBar/ProgressBar.component */ "./src/components/Common/ProgressBar/ProgressBar.component.jsx");
/* harmony import */ var _components_Players_Players_Players_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/Players/Players/Players.component */ "./src/components/Players/Players/Players.component.jsx");
/* harmony import */ var _components_SearchBarPlayers_SearchBarPlayers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/SearchBarPlayers/SearchBarPlayers.component */ "./src/components/SearchBarPlayers/SearchBarPlayers.component.jsx");
/* harmony import */ var _components_Common_Message_Message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/Common/Message/Message.component */ "./src/components/Common/Message/Message.component.jsx");
/* harmony import */ var _HomePlayers_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HomePlayers.styles.scss */ "./src/pages/HomePlayers/HomePlayers.styles.scss");










var HomePlayers = function HomePlayers() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_PlayersContext__WEBPACK_IMPORTED_MODULE_1__.PlayersContext),
      currentPage = _useContext.currentPage,
      players = _useContext.players,
      totalPages = _useContext.totalPages,
      doneFetchPlayers = _useContext.doneFetchPlayers,
      validatePage = _useContext.validatePage,
      validateQPlayer = _useContext.validateQPlayer;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-center"
  }, "Players in NBA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SearchBarPlayers_SearchBarPlayers_component__WEBPACK_IMPORTED_MODULE_4__.default, {
    validateQPlayer: validateQPlayer
  }), doneFetchPlayers ? Object.entries(players).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Players_Players_Players_component__WEBPACK_IMPORTED_MODULE_3__.default, {
    players: players
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: "pagination",
    count: totalPages,
    color: "secondary",
    onChange: function onChange(e, page) {
      return validatePage(e, page);
    },
    showFirstButton: true,
    showLastButton: true,
    size: "large",
    variant: "outlined",
    boundaryCount: 3,
    page: currentPage
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Common_Message_Message_component__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: "No results found"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Common_ProgressBar_ProgressBar_component__WEBPACK_IMPORTED_MODULE_2__.default, null));
};

HomePlayers.displayName = "HomePlayers";
/* harmony default export */ __webpack_exports__["default"] = (HomePlayers);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SearchBarPlayers/SearchBarPlayer.styles.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SearchBarPlayers/SearchBarPlayer.styles.scss ***!
  \**************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".SearchBar {\n  padding-bottom: 20px;\n  display: flex;\n  flex-direction: column; }\n", "",{"version":3,"sources":["webpack://./src/components/SearchBarPlayers/SearchBarPlayer.styles.scss"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,aAAa;EACb,sBAAsB,EAAA","sourcesContent":[".SearchBar {\r\n  padding-bottom: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/HomePlayers/HomePlayers.styles.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/HomePlayers/HomePlayers.styles.scss ***!
  \************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".pagination {\n  background-color: #fff8fb; }\n\n.container-pagination {\n  padding: 10px; }\n", "",{"version":3,"sources":["webpack://./src/pages/HomePlayers/HomePlayers.styles.scss"],"names":[],"mappings":"AAAA;EACE,yBAAyB,EAAA;;AAG3B;EACE,aAAa,EAAA","sourcesContent":[".pagination {\r\n  background-color: #fff8fb;\r\n}\r\n\r\n.container-pagination {\r\n  padding: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/SearchBarPlayers/SearchBarPlayer.styles.scss":
/*!*********************************************************************!*\
  !*** ./src/components/SearchBarPlayers/SearchBarPlayer.styles.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchBarPlayer_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./SearchBarPlayer.styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SearchBarPlayers/SearchBarPlayer.styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchBarPlayer_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchBarPlayer_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/HomePlayers/HomePlayers.styles.scss":
/*!*******************************************************!*\
  !*** ./src/pages/HomePlayers/HomePlayers.styles.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomePlayers_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./HomePlayers.styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/HomePlayers/HomePlayers.styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomePlayers_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomePlayers_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_HomePlayers_HomePlayers_component_jsx.bundle.js.map