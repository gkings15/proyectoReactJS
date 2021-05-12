(self["webpackChunkbasketball_leagues"] = self["webpackChunkbasketball_leagues"] || []).push([["src_pages_HomeTeams_HomeTeams_component_jsx"],{

/***/ "./src/components/SearchBarTeam/SeachBarTeam.component.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/SearchBarTeam/SeachBarTeam.component.jsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var _constants_predefinedTeams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/predefinedTeams */ "./src/constants/predefinedTeams.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var SearchBarTeam = function SearchBarTeam(_ref) {
  var validateQTeam = _ref.validateQTeam;
  var CssTextField = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)({
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
  })(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__.default);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      paddingBottom: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__.default, {
    id: "teams",
    freeSolo: true,
    options: _constants_predefinedTeams__WEBPACK_IMPORTED_MODULE_1__.default.map(function (team) {
      return team.full_name;
    }),
    renderInput: function renderInput(params) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CssTextField, _extends({}, params, {
        label: "Select team and press Enter",
        margin: "normal",
        variant: "outlined",
        onKeyPress: function onKeyPress(e) {
          return validateQTeam(e);
        }
      }));
    }
  }));
};

SearchBarTeam.displayName = "SearchBarTeam";
/* harmony default export */ __webpack_exports__["default"] = (SearchBarTeam);

/***/ }),

/***/ "./src/constants/predefinedTeams.js":
/*!******************************************!*\
  !*** ./src/constants/predefinedTeams.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var predefinedTeams = [{
  "id": 1,
  "abbreviation": "ATL",
  "city": "Atlanta",
  "conference": "East",
  "division": "Southeast",
  "full_name": "Atlanta Hawks",
  "name": "Hawks"
}, {
  "id": 2,
  "abbreviation": "BOS",
  "city": "Boston",
  "conference": "East",
  "division": "Atlantic",
  "full_name": "Boston Celtics",
  "name": "Celtics"
}, {
  "id": 3,
  "abbreviation": "BKN",
  "city": "Brooklyn",
  "conference": "East",
  "division": "Atlantic",
  "full_name": "Brooklyn Nets",
  "name": "Nets"
}, {
  "id": 4,
  "abbreviation": "CHA",
  "city": "Charlotte",
  "conference": "East",
  "division": "Southeast",
  "full_name": "Charlotte Hornets",
  "name": "Hornets"
}, {
  "id": 5,
  "abbreviation": "CHI",
  "city": "Chicago",
  "conference": "East",
  "division": "Central",
  "full_name": "Chicago Bulls",
  "name": "Bulls"
}, {
  "id": 6,
  "abbreviation": "CLE",
  "city": "Cleveland",
  "conference": "East",
  "division": "Central",
  "full_name": "Cleveland Cavaliers",
  "name": "Cavaliers"
}, {
  "id": 7,
  "abbreviation": "DAL",
  "city": "Dallas",
  "conference": "West",
  "division": "Southwest",
  "full_name": "Dallas Mavericks",
  "name": "Mavericks"
}, {
  "id": 8,
  "abbreviation": "DEN",
  "city": "Denver",
  "conference": "West",
  "division": "Northwest",
  "full_name": "Denver Nuggets",
  "name": "Nuggets"
}, {
  "id": 9,
  "abbreviation": "DET",
  "city": "Detroit",
  "conference": "East",
  "division": "Central",
  "full_name": "Detroit Pistons",
  "name": "Pistons"
}, {
  "id": 10,
  "abbreviation": "GSW",
  "city": "Golden State",
  "conference": "West",
  "division": "Pacific",
  "full_name": "Golden State Warriors",
  "name": "Warriors"
}, {
  "id": 11,
  "abbreviation": "HOU",
  "city": "Houston",
  "conference": "West",
  "division": "Southwest",
  "full_name": "Houston Rockets",
  "name": "Rockets"
}, {
  "id": 12,
  "abbreviation": "IND",
  "city": "Indiana",
  "conference": "East",
  "division": "Central",
  "full_name": "Indiana Pacers",
  "name": "Pacers"
}, {
  "id": 13,
  "abbreviation": "LAC",
  "city": "LA",
  "conference": "West",
  "division": "Pacific",
  "full_name": "LA Clippers",
  "name": "Clippers"
}, {
  "id": 14,
  "abbreviation": "LAL",
  "city": "Los Angeles",
  "conference": "West",
  "division": "Pacific",
  "full_name": "Los Angeles Lakers",
  "name": "Lakers"
}, {
  "id": 15,
  "abbreviation": "MEM",
  "city": "Memphis",
  "conference": "West",
  "division": "Southwest",
  "full_name": "Memphis Grizzlies",
  "name": "Grizzlies"
}, {
  "id": 16,
  "abbreviation": "MIA",
  "city": "Miami",
  "conference": "East",
  "division": "Southeast",
  "full_name": "Miami Heat",
  "name": "Heat"
}, {
  "id": 17,
  "abbreviation": "MIL",
  "city": "Milwaukee",
  "conference": "East",
  "division": "Central",
  "full_name": "Milwaukee Bucks",
  "name": "Bucks"
}, {
  "id": 18,
  "abbreviation": "MIN",
  "city": "Minnesota",
  "conference": "West",
  "division": "Northwest",
  "full_name": "Minnesota Timberwolves",
  "name": "Timberwolves"
}, {
  "id": 19,
  "abbreviation": "NOP",
  "city": "New Orleans",
  "conference": "West",
  "division": "Southwest",
  "full_name": "New Orleans Pelicans",
  "name": "Pelicans"
}, {
  "id": 20,
  "abbreviation": "NYK",
  "city": "New York",
  "conference": "East",
  "division": "Atlantic",
  "full_name": "New York Knicks",
  "name": "Knicks"
}, {
  "id": 21,
  "abbreviation": "OKC",
  "city": "Oklahoma City",
  "conference": "West",
  "division": "Northwest",
  "full_name": "Oklahoma City Thunder",
  "name": "Thunder"
}, {
  "id": 22,
  "abbreviation": "ORL",
  "city": "Orlando",
  "conference": "East",
  "division": "Southeast",
  "full_name": "Orlando Magic",
  "name": "Magic"
}, {
  "id": 23,
  "abbreviation": "PHI",
  "city": "Philadelphia",
  "conference": "East",
  "division": "Atlantic",
  "full_name": "Philadelphia 76ers",
  "name": "76ers"
}, {
  "id": 24,
  "abbreviation": "PHX",
  "city": "Phoenix",
  "conference": "West",
  "division": "Pacific",
  "full_name": "Phoenix Suns",
  "name": "Suns"
}, {
  "id": 25,
  "abbreviation": "POR",
  "city": "Portland",
  "conference": "West",
  "division": "Northwest",
  "full_name": "Portland Trail Blazers",
  "name": "Trail Blazers"
}, {
  "id": 26,
  "abbreviation": "SAC",
  "city": "Sacramento",
  "conference": "West",
  "division": "Pacific",
  "full_name": "Sacramento Kings",
  "name": "Kings"
}, {
  "id": 27,
  "abbreviation": "SAS",
  "city": "San Antonio",
  "conference": "West",
  "division": "Southwest",
  "full_name": "San Antonio Spurs",
  "name": "Spurs"
}, {
  "id": 28,
  "abbreviation": "TOR",
  "city": "Toronto",
  "conference": "East",
  "division": "Atlantic",
  "full_name": "Toronto Raptors",
  "name": "Raptors"
}, {
  "id": 29,
  "abbreviation": "UTA",
  "city": "Utah",
  "conference": "West",
  "division": "Northwest",
  "full_name": "Utah Jazz",
  "name": "Jazz"
}, {
  "id": 30,
  "abbreviation": "WAS",
  "city": "Washington",
  "conference": "East",
  "division": "Southeast",
  "full_name": "Washington Wizards",
  "name": "Wizards"
}];
/* harmony default export */ __webpack_exports__["default"] = (predefinedTeams);

/***/ }),

/***/ "./src/pages/HomeTeams/HomeTeams.component.jsx":
/*!*****************************************************!*\
  !*** ./src/pages/HomeTeams/HomeTeams.component.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _contexts_TeamsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../contexts/TeamsContext */ "./src/contexts/TeamsContext.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _components_Common_ProgressBar_ProgressBar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/Common/ProgressBar/ProgressBar.component */ "./src/components/Common/ProgressBar/ProgressBar.component.jsx");
/* harmony import */ var _components_Collection_CollectionCard_CollectionCard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/Collection/CollectionCard/CollectionCard.component */ "./src/components/Collection/CollectionCard/CollectionCard.component.jsx");
/* harmony import */ var _components_Common_Message_Message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/Common/Message/Message.component */ "./src/components/Common/Message/Message.component.jsx");
/* harmony import */ var _components_SearchBarTeam_SeachBarTeam_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SearchBarTeam/SeachBarTeam.component */ "./src/components/SearchBarTeam/SeachBarTeam.component.jsx");








var HomeTeams = function HomeTeams() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_TeamsContext__WEBPACK_IMPORTED_MODULE_1__.TeamsContext),
      doneFetch = _useContext.doneFetch,
      teams = _useContext.teams,
      doneFetchSearchedTeams = _useContext.doneFetchSearchedTeams,
      searchedTeams = _useContext.searchedTeams,
      conference = _useContext.conference,
      validateQTeam = _useContext.validateQTeam;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-center"
  }, conference), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SearchBarTeam_SeachBarTeam_component__WEBPACK_IMPORTED_MODULE_5__.default, {
    validateQTeam: validateQTeam
  }), !doneFetchSearchedTeams ? doneFetch ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Collection_CollectionCard_CollectionCard_component__WEBPACK_IMPORTED_MODULE_3__.default, {
    link: "team",
    items: teams
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Common_ProgressBar_ProgressBar_component__WEBPACK_IMPORTED_MODULE_2__.default, null) : searchedTeams.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Collection_CollectionCard_CollectionCard_component__WEBPACK_IMPORTED_MODULE_3__.default, {
    link: "team",
    items: searchedTeams
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Common_Message_Message_component__WEBPACK_IMPORTED_MODULE_4__.default, {
    text: "No results found"
  }));
};

HomeTeams.displayName = "HomeTeams";
/* harmony default export */ __webpack_exports__["default"] = (HomeTeams);

/***/ })

}]);
//# sourceMappingURL=src_pages_HomeTeams_HomeTeams_component_jsx.bundle.js.map