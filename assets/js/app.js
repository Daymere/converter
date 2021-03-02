(self["webpackChunksingle_page"] = self["webpackChunksingle_page"] || []).push([["app"],{

/***/ "./src/assets/js/currency.js":
/*!***********************************!*\
  !*** ./src/assets/js/currency.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  name: 'Доллар США',
  code: 'USD',
  course: {
    usd: 1,
    eur: 0.83
  }
}, {
  name: 'Евро',
  code: 'EUR',
  course: {
    usd: 1.21,
    eur: 1
  }
}, {
  name: 'Польский злотый',
  code: 'PLN',
  course: {
    usd: 0.27,
    eur: 0.22
  }
}, {
  name: 'Чешский крон',
  code: 'CZK',
  course: {
    usd: 0.046,
    eur: 0.038
  }
}, {
  name: 'Российский рубль',
  code: 'RUB',
  course: {
    usd: 0.013,
    eur: 0.011
  }
}, {
  name: 'Украинская гривна',
  code: 'UAH',
  course: {
    usd: 0.036,
    eur: 0.03
  }
}]);

/***/ }),

/***/ "./src/assets/js/app.jsx":
/*!*******************************!*\
  !*** ./src/assets/js/app.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _currency_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency.js */ "./src/assets/js/currency.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/style.scss */ "./src/assets/scss/style.scss");
/* harmony import */ var _header_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.jsx */ "./src/assets/js/header.jsx");
/* harmony import */ var _converter_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./converter.jsx */ "./src/assets/js/converter.jsx");
/* harmony import */ var _history_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.jsx */ "./src/assets/js/history.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* Components */





function App(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_currency_js__WEBPACK_IMPORTED_MODULE_2__.default),
      _useState2 = _slicedToArray(_useState, 2),
      currency = _useState2[0],
      setCurrency = _useState2[1],
      _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currency[5]),
      _useState4 = _slicedToArray(_useState3, 2),
      currentCurrency = _useState4[0],
      setCurrentCurrency = _useState4[1],
      history = _toConsumableArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_header_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
    currency: currency,
    currentCurrency: currentCurrency,
    setCurrentCurrency: setCurrentCurrency
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_converter_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
    history: history
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_history_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {
    history: history
  }));
}

react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById('app'));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_7__.hot)(App));

/***/ }),

/***/ "./src/assets/js/converter.jsx":
/*!*************************************!*\
  !*** ./src/assets/js/converter.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Converter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _selector_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector.jsx */ "./src/assets/js/selector.jsx");
/* harmony import */ var _currency_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency.js */ "./src/assets/js/currency.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function setInput(item) {
  return item ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "orange"
  }, item.name) : 'Выберите валюту';
}

function useSelector(active, handler) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_selector_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
    items: _currency_js__WEBPACK_IMPORTED_MODULE_2__.default,
    cls: 'input',
    current: active,
    setValue: handler,
    input: setInput(active)
  });
}

function Converter(props) {
  var _props$history = _slicedToArray(props.history, 2),
      history = _props$history[0],
      setHistory = _props$history[1],
      _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1],
      _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      from = _useState4[0],
      setFrom = _useState4[1],
      _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      into = _useState6[0],
      setInto = _useState6[1],
      _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      result = _useState8[0],
      setResult = _useState8[1];

  function convert() {
    var value = +input;
    if (!from || !into || !input || value === 0 || isNaN(value)) return;
    var koef = from.course.usd / into.course.usd;
    var total = (koef * value).toFixed(2);
    var temp = value + ' ' + from.code + ' = ' + total + ' ' + into.code;
    var render = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, temp);
    var copyHistory = history.slice();

    if (copyHistory[0] !== temp) {
      copyHistory.unshift(temp);
    }

    setInput('');
    setHistory(copyHistory);
    setResult(render);
  }

  function reverseCurrence() {
    if (!from || !into) return;
    var temp = from;
    setFrom(into);
    setInto(from);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "converter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "converter__currencies"
  }, useSelector(from, setFrom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: reverseCurrence
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "converter__arrow",
    src: "assets/images/right-arrow.svg",
    alt: ""
  })), useSelector(into, setInto)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    name: "",
    id: "",
    className: "converter__input input",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E \u0434\u043B\u044F \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438",
    value: input,
    onChange: function onChange(e) {
      return setInput(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "converter__doit",
    onClick: convert
  }, "\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "converter__result"
  }, result && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, " \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "converter__result-number"
  }, result))));
}

/***/ }),

/***/ "./src/assets/js/header.jsx":
/*!**********************************!*\
  !*** ./src/assets/js/header.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _selector_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector.jsx */ "./src/assets/js/selector.jsx");



function ActualItem(props) {
  var currentItem = props.currentItem,
      tempItem = props.tempItem,
      currentUsd = 1 / currentItem.course.usd,
      currentCode = currentItem.code,
      tempUsd = 1 / tempItem.course.usd,
      tempCode = tempItem.code,
      total = (currentUsd / tempUsd).toFixed(2) + " ".concat(currentCode);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "header__actual-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "orange"
  }, "1 ", tempCode), " = ", total);
}

function Header(props) {
  var currentCurrency = props.currentCurrency,
      setCurrentCurrency = props.setCurrentCurrency,
      currencies = props.currency,
      currentCode = currentCurrency.code,
      tableCodes = ['EUR', 'USD', 'RUB', 'UAH', 'PLN', 'CZK'].filter(function (item) {
    return item !== currentCode.toUpperCase();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__container container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__change-currency"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_selector_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
    current: currentCode,
    setValue: setCurrentCurrency,
    items: currencies,
    input: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "\u0412\u0430\u0448\u0430 \u0432\u0430\u043B\u044E\u0442\u0430: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "selector__title_currency"
    }, currentCode))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "header__actual-currency"
  }, tableCodes.map(function (code) {
    var tempItem = currencies.find(function (item) {
      return item.code.toLowerCase() === code.toLowerCase();
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ActualItem, {
      tempItem: tempItem,
      currentItem: currentCurrency,
      key: code
    });
  }))));
}

/***/ }),

/***/ "./src/assets/js/history.jsx":
/*!***********************************!*\
  !*** ./src/assets/js/history.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function HistoryItem(props) {
  var first = props.first,
      second = props.second;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "history__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "orange"
  }, first, " "), "\u0440\u043E\u0432\u043D\u044F\u0435\u0442\u0441\u044F", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "orange"
  }, " ", second));
}

function History(props) {
  var _props$history = _slicedToArray(props.history, 1),
      history = _props$history[0];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "history"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "history__back"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "history__title"
  }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "history__list"
  }, history.length && history.map(function (item, id) {
    var _item$split = item.split(' = '),
        _item$split2 = _slicedToArray(_item$split, 2),
        first = _item$split2[0],
        second = _item$split2[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HistoryItem, {
      key: id,
      first: first,
      second: second
    });
  }) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "history__empty"
  }, "\u041F\u0443\u0441\u0442\u043E"))));
}

/***/ }),

/***/ "./src/assets/js/selector.jsx":
/*!************************************!*\
  !*** ./src/assets/js/selector.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Selector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function setClasses(arr) {
  return arr.join(' ').trim();
}

function SelectorItem(props) {
  var name = props.name,
      click = props.click,
      active = props.active,
      cls = props.cls;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: setClasses(['selector__item', cls ? cls + '__item' : '', active ? 'active' : '']),
    onClick: click
  }, name);
}

function Selector(props) {
  var current = props.current,
      setValue = props.setValue,
      items = props.items,
      input = props.input,
      cls = props.cls,
      _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      toggle = _useState2[1],
      myRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: setClasses(['selector', cls, opened ? 'opened' : '']),
    ref: myRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: setClasses(['selector__title', cls ? cls + '__title' : '']),
    onClick: function onClick() {
      return toggle(!opened);
    }
  }, input), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: setClasses(['selector__list', cls ? cls + '__list' : ''])
  }, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectorItem, {
      name: item.name,
      key: item.code,
      active: item.code === current,
      cls: cls,
      click: function click() {
        setValue(item);
        toggle(false);
      }
    });
  })));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fonts_Lato_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/assets/fonts/Lato-Regular.ttf");
/* harmony import */ var _fonts_Lato_Bold_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/Lato-Bold.ttf */ "./src/assets/fonts/Lato-Bold.ttf");
/* harmony import */ var _fonts_Nunito_Regular_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/Nunito-Regular.ttf */ "./src/assets/fonts/Nunito-Regular.ttf");
/* harmony import */ var _fonts_Nunito_Bold_ttf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fonts/Nunito-Bold.ttf */ "./src/assets/fonts/Nunito-Bold.ttf");
/* harmony import */ var _fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fonts/Roboto-Regular.ttf */ "./src/assets/fonts/Roboto-Regular.ttf");
/* harmony import */ var _fonts_Roboto_Bold_ttf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fonts/Roboto-Bold.ttf */ "./src/assets/fonts/Roboto-Bold.ttf");
/* harmony import */ var _img_down_arrow_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/down-arrow.svg */ "./src/assets/img/down-arrow.svg");
// Imports











var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__.default);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_fonts_Lato_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_fonts_Lato_Bold_ttf__WEBPACK_IMPORTED_MODULE_5__.default);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_fonts_Nunito_Regular_ttf__WEBPACK_IMPORTED_MODULE_6__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_fonts_Nunito_Bold_ttf__WEBPACK_IMPORTED_MODULE_7__.default);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_8__.default);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_fonts_Roboto_Bold_ttf__WEBPACK_IMPORTED_MODULE_9__.default);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_img_down_arrow_svg__WEBPACK_IMPORTED_MODULE_10__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\n/* remember to define focus styles! */\n:focus {\n  outline: 0;\n}\n\n/* remember to highlight inserts somehow! */\nins {\n  text-decoration: none;\n}\n\ndel {\n  text-decoration: line-through;\n}\n\n/* tables still need 'cellspacing=\"0\"' in the markup */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\na {\n  display: block;\n  text-decoration: none;\n  color: inherit;\n}\n\ninput {\n  font-family: inherit;\n}\n\nbutton {\n  display: block;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  outline: 0;\n  padding: 0;\n  font-family: inherit;\n}\n\nimg {\n  display: block;\n}\n\n@font-face {\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-family: \"Lato\";\n  font-weight: 400;\n}\n@font-face {\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-family: \"Lato\";\n  font-weight: 700;\n}\n@font-face {\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-family: \"Nunito\";\n  font-weight: 400;\n}\n@font-face {\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  font-family: \"Nunito\";\n  font-weight: 700;\n}\n@font-face {\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  font-family: \"Roboto\";\n  font-weight: 400;\n}\n@font-face {\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  font-family: \"Roboto\";\n  font-weight: 700;\n}\n.selector {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.selector__title {\n  padding: 1.15rem 3rem;\n  border-radius: 2rem;\n  border: 1px solid #fc9639;\n  font-size: 1.5rem;\n  font-family: \"Nunito\";\n  font-weight: 400;\n  color: #c4c4c4;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.selector__title_currency {\n  margin-left: 5px;\n  color: #fc9639;\n  text-decoration: underline;\n}\n.selector__title:after {\n  content: \"\";\n  width: 1rem;\n  height: 1rem;\n  background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") center no-repeat;\n  background-size: contain;\n  margin-left: 1rem;\n}\n.selector__list {\n  display: none;\n  width: 100%;\n  border: 1px solid #c4c4c4;\n  padding: 1rem 0;\n  border-radius: 1rem;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  top: 100%;\n  left: 0;\n  background-color: #fff;\n  z-index: 1000;\n}\n.selector__item {\n  font-family: Nunito;\n  font-size: 1.4rem;\n  font-weight: 400;\n  white-space: nowrap;\n  padding: 0.75rem 1rem;\n  cursor: pointer;\n}\n.selector__item.active, .selector__item:hover {\n  background-color: #fc9639;\n  color: #fff;\n}\n.selector.opened .selector__title:after {\n  transform: rotate(180deg);\n}\n.selector.opened .selector__list {\n  display: block;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Lato\";\n}\n\n.container {\n  padding: 0 1.5rem;\n  max-width: 131rem;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.orange {\n  color: #fc9639;\n}\n\n.header {\n  padding-top: 4rem;\n}\n.header__container {\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 484px) {\n  .header__container {\n    flex-direction: column;\n  }\n}\n@media (max-width: 484px) {\n  .header__change-currency {\n    margin-bottom: 2rem;\n  }\n}\n.header__actual-currency {\n  padding: 2.4rem;\n  border: 1px solid #fc9639;\n  border-radius: 1rem;\n  user-select: none;\n  background-color: #fff;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n}\n.header__actual-item {\n  font-size: 1.7rem;\n  font-weight: bold;\n  color: #c4c4c4;\n}\n.header__actual-item:not(:last-child) {\n  margin-bottom: 0.8rem;\n}\n\n.converter {\n  max-width: 73rem;\n  width: 100%;\n  margin: 9rem auto 0;\n  padding: 0 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media (max-width: 484px) {\n  .converter {\n    margin-top: 5rem;\n  }\n}\n.converter__currencies {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  .converter__currencies {\n    flex-direction: column;\n    margin-bottom: 4rem;\n  }\n}\n.converter__arrow {\n  display: block;\n  max-width: 100%;\n}\n@media (max-width: 768px) {\n  .converter__arrow {\n    margin: 2rem 0;\n    transform: rotate(90deg);\n  }\n}\n.converter__input {\n  width: 100%;\n  height: 6rem;\n  font-size: 1.9rem;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  padding: 0 2rem;\n  text-align: center;\n  border: 1px solid #fc9639;\n  margin-bottom: 2rem;\n}\n.converter__doit {\n  max-width: 25rem;\n  width: 100%;\n  height: 6rem;\n  border-radius: 0.5rem;\n  background-color: #fc9639;\n  margin: 0 1rem;\n  transition: background 0.2s linear;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 2rem;\n  color: #fff;\n  margin-bottom: 4.5rem;\n}\n.converter__doit:hover {\n  background-color: #fc8920;\n}\n.converter__result {\n  font-size: 2.2rem;\n  font-weight: 400;\n  color: #fc9639;\n  text-align: center;\n  margin-bottom: 4rem;\n}\n.converter__result-number {\n  margin-top: 0.8rem;\n  display: block;\n  font-size: 1.8rem;\n  color: #696969;\n}\n\n.input__title {\n  width: 28rem;\n  height: 6rem;\n  display: flex;\n  justify-content: center;\n  border-radius: 5px;\n  font-size: 1.6rem;\n}\n@media (max-width: 768px) {\n  .input__title {\n    width: 100%;\n  }\n}\n\n@media (max-width: 768px) {\n  .input {\n    width: 100%;\n  }\n}\n\n.history {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.history__back {\n  background-color: rgba(196, 196, 196, 0.1);\n  padding: 1.3rem 1.8rem;\n  min-width: 30rem;\n}\n.history__title {\n  text-align: center;\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 3rem;\n}\n.history__list {\n  display: flex;\n  flex-direction: column;\n}\n.history__item {\n  font-size: 1.6rem;\n  font-weight: 400;\n  margin-bottom: 1rem;\n}\n.history__empty {\n  text-align: center;\n  font-size: 1.6rem;\n}", "",{"version":3,"sources":["webpack://./src/assets/scss/reset.scss","webpack://./src/assets/scss/style.scss","webpack://./src/assets/scss/fonts.scss","webpack://./src/assets/scss/selector.scss","webpack://./src/assets/scss/vars.scss","webpack://./src/assets/scss/header.scss","webpack://./src/assets/scss/converter.scss","webpack://./src/assets/scss/history.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASC,SAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;EACA,wBAAA;EACA,uBAAA;ACED;;ADAA;EACC,cAAA;ACGD;;ADDA;EACC,gBAAA;ACID;;ADFA;EACC,YAAA;ACKD;;ADHA;;EAEC,WAAA;EACA,aAAA;ACMD;;ADHA,qCAAA;AACA;EACC,UAAA;ACMD;;ADHA,2CAAA;AACA;EACC,qBAAA;ACMD;;ADJA;EACC,6BAAA;ACOD;;ADJA,sDAAA;AACA;EACC,yBAAA;EACA,iBAAA;ACOD;;ADJA;EACC,cAAA;EACA,qBAAA;EACA,cAAA;ACOD;;ADJA;EACC,oBAAA;ACOD;;ADJA;EACC,cAAA;EACA,eAAA;EACA,6BAAA;EACA,YAAA;EACA,UAAA;EACA,UAAA;EAEA,oBAAA;ACMD;;ADHA;EACC,cAAA;ACMD;;AC/EA;EACE,4CAAA;EACA,mBAAA;EACA,gBAAA;ADkFF;AC/EA;EACE,4CAAA;EACA,mBAAA;EACA,gBAAA;ADiFF;AC9EA;EACE,4CAAA;EACA,qBAAA;EACA,gBAAA;ADgFF;AC7EA;EACE,4CAAA;EACA,qBAAA;EACA,gBAAA;AD+EF;AC5EA;EACE,4CAAA;EACA,qBAAA;EACA,gBAAA;AD8EF;AC3EA;EACE,4CAAA;EACA,qBAAA;EACA,gBAAA;AD6EF;AE9GA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;AFgHF;AE9GE;EACE,qBAAA;EACA,mBAAA;EACA,yBAAA;EAEA,iBAAA;EACA,qBAAA;EACA,gBAAA;EACA,cCbG;EDcH,aAAA;EACA,mBAAA;EACA,eAAA;AF+GJ;AE7GI;EACE,gBAAA;EACA,cCrBG;EDsBH,0BAAA;AF+GN;AE5GI;EACE,WAAA;EACA,WAAA;EACA,YAAA;EACA,gFAAA;EACA,wBAAA;EACA,iBAAA;AF8GN;AE1GE;EACE,aAAA;EACA,WAAA;EACA,yBAAA;EACA,eAAA;EACA,mBAAA;EACA,sCAAA;EAEA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,sBC1CI;ED2CJ,aAAA;AF2GJ;AExGE;EACE,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;EACA,eAAA;AF0GJ;AExGI;EAEE,yBC5DG;ED6DH,WCzDE;AHkKR;AEnGM;EACE,yBAAA;AFqGR;AElGI;EACE,cAAA;AFoGN;;AAtKA;;;EAGE,sBAAA;AAyKF;;AAtKA;EACE,eAAA;AAyKF;;AAtKA;EACE,SAAA;EACA,mBAAA;AAyKF;;AAtKA;EACE,iBAAA;EACA,iBAAA;EACA,WAAA;EACA,cAAA;AAyKF;;AAtKA;EACE,cG7BO;AHsMT;;AItMA;EACE,iBAAA;AJyMF;AIvME;EACE,aAAA;EACA,8BAAA;AJyMJ;AIxMI;EAHF;IAII,sBAAA;EJ2MJ;AACF;AIvMI;EADF;IAEI,mBAAA;EJ0MJ;AACF;AIvME;EACE,eAAA;EACA,yBAAA;EACA,mBAAA;EACA,iBAAA;EAEA,sBDnBI;ECoBJ,sCAAA;AJwMJ;AIrME;EACE,iBAAA;EACA,iBAAA;EACA,cD7BG;AHoOP;AIrMI;EACE,qBAAA;AJuMN;;AKxOA;EACE,gBAAA;EACA,WAAA;EACA,mBAAA;EACA,iBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;AL0OF;AKxOE;EAVF;IAWI,gBAAA;EL2OF;AACF;AKzOE;EACE,WAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;AL2OJ;AKzOI;EAPF;IAQI,sBAAA;IACA,mBAAA;EL4OJ;AACF;AKzOE;EACE,cAAA;EACA,eAAA;AL2OJ;AKzOI;EAJF;IAKI,cAAA;IACA,wBAAA;EL4OJ;AACF;AKzOE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,iCAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;AL2OJ;AKxOE;EACE,gBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,yBFtDK;EEuDL,cAAA;EACA,kCAAA;EAEA,iCAAA;EACA,gBAAA;EACA,eAAA;EACA,WFzDI;EE2DJ,qBAAA;ALwOJ;AKtOI;EACE,yBAAA;ALwON;AKpOE;EACE,iBAAA;EACA,gBAAA;EACA,cFzEK;EE0EL,kBAAA;EACA,mBAAA;ALsOJ;AKpOI;EACE,kBAAA;EACA,cAAA;EACA,iBAAA;EACA,cF/EK;AHqTX;;AKjOA;EACE,YAAA;EACA,YAAA;EAEA,aAAA;EACA,uBAAA;EACA,kBAAA;EAEA,iBAAA;ALkOF;AKhOE;EAVF;IAWI,WAAA;ELmOF;AACF;;AK/NE;EADF;IAEI,WAAA;ELmOF;AACF;;AM3UA;EACE,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AN8UF;AM5UE;EACE,0CAAA;EACA,sBAAA;EACA,gBAAA;AN8UJ;AM5UE;EACE,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;AN8UJ;AM3UE;EACE,aAAA;EACA,sBAAA;AN6UJ;AM1UE;EACE,iBAAA;EACA,gBAAA;EACA,mBAAA;AN4UJ;AMzUE;EACE,kBAAA;EACA,iBAAA;AN2UJ","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\toutline: 0;\r\n\tfont-size: 100%;\r\n\tvertical-align: baseline;\r\n\tbackground: transparent;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\n/* remember to define focus styles! */\r\n:focus {\r\n\toutline: 0;\r\n}\r\n\r\n/* remember to highlight inserts somehow! */\r\nins {\r\n\ttext-decoration: none;\r\n}\r\ndel {\r\n\ttext-decoration: line-through;\r\n}\r\n\r\n/* tables still need 'cellspacing=\"0\"' in the markup */\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\na{\r\n\tdisplay: block;\r\n\ttext-decoration: none;\r\n\tcolor: inherit;\r\n}\r\n\r\ninput{\r\n\tfont-family: inherit;\r\n}\r\n\r\nbutton{\r\n\tdisplay: block;\r\n\tcursor: pointer;\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\toutline: 0;\r\n\tpadding: 0;\r\n\r\n\tfont-family: inherit;\r\n}\r\n\r\nimg{\r\n\tdisplay: block;\r\n}","@import \"~normalize.css\";\r\n@import \"reset.scss\";\r\n@import \"fonts.scss\";\r\n@import \"vars.scss\";\r\n@import \"selector.scss\";\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Lato\";\r\n}\r\n\r\n.container {\r\n  padding: 0 1.5rem;\r\n  max-width: 131rem;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.orange {\r\n  color: $orange;\r\n}\r\n\r\n@import \"header.scss\";\r\n@import \"converter.scss\";\r\n@import \"history.scss\";\r\n","@font-face {\r\n  src: url(\"../fonts/Lato-Regular.ttf\");\r\n  font-family: \"Lato\";\r\n  font-weight: 400;\r\n}\r\n\r\n@font-face {\r\n  src: url(\"../fonts/Lato-Bold.ttf\");\r\n  font-family: \"Lato\";\r\n  font-weight: 700;\r\n}\r\n\r\n@font-face {\r\n  src: url(\"../fonts/Nunito-Regular.ttf\");\r\n  font-family: \"Nunito\";\r\n  font-weight: 400;\r\n}\r\n\r\n@font-face {\r\n  src: url(\"../fonts/Nunito-Bold.ttf\");\r\n  font-family: \"Nunito\";\r\n  font-weight: 700;\r\n}\r\n\r\n@font-face {\r\n  src: url(\"../fonts/Roboto-Regular.ttf\");\r\n  font-family: \"Roboto\";\r\n  font-weight: 400;\r\n}\r\n\r\n@font-face {\r\n  src: url(\"../fonts/Roboto-Bold.ttf\");\r\n  font-family: \"Roboto\";\r\n  font-weight: 700;\r\n}\r\n",".selector {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n\r\n  &__title {\r\n    padding: 1.15rem 3rem;\r\n    border-radius: 2rem;\r\n    border: 1px solid $orange;\r\n\r\n    font-size: 1.5rem;\r\n    font-family: \"Nunito\";\r\n    font-weight: 400;\r\n    color: $gray;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n\r\n    &_currency {\r\n      margin-left: 5px;\r\n      color: $orange;\r\n      text-decoration: underline;\r\n    }\r\n\r\n    &:after {\r\n      content: \"\";\r\n      width: 1rem;\r\n      height: 1rem;\r\n      background: transparent url(\"../img/down-arrow.svg\") center no-repeat;\r\n      background-size: contain;\r\n      margin-left: 1rem;\r\n    }\r\n  }\r\n\r\n  &__list {\r\n    display: none;\r\n    width: 100%;\r\n    border: 1px solid $gray;\r\n    padding: 1rem 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0 5px rgba($black, 0.2);\r\n\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    background-color: $white;\r\n    z-index: 1000;\r\n  }\r\n\r\n  &__item {\r\n    font-family: Nunito;\r\n    font-size: 1.4rem;\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n    padding: 0.75rem 1rem;\r\n    cursor: pointer;\r\n\r\n    &.active,\r\n    &:hover {\r\n      background-color: $orange;\r\n      color: $white;\r\n    }\r\n  }\r\n\r\n  &.opened {\r\n    .selector__title {\r\n      &:after {\r\n        transform: rotate(180deg);\r\n      }\r\n    }\r\n    .selector__list {\r\n      display: block;\r\n    }\r\n  }\r\n}\r\n","$orange: #fc9639;\r\n$gray: #c4c4c4;\r\n$darkgray: #696969;\r\n$black: #000;\r\n$white: #fff;\r\n\r\n$bp-tablet: 768px;\r\n$bp-mobile: 484px;\r\n",".header {\r\n  padding-top: 4rem;\r\n\r\n  &__container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    @media (max-width: $bp-mobile) {\r\n      flex-direction: column;\r\n    }\r\n  }\r\n\r\n  &__change-currency {\r\n    @media (max-width: $bp-mobile) {\r\n      margin-bottom: 2rem;\r\n    }\r\n  }\r\n\r\n  &__actual-currency {\r\n    padding: 2.4rem;\r\n    border: 1px solid $orange;\r\n    border-radius: 1rem;\r\n    user-select: none;\r\n\r\n    background-color: $white;\r\n    box-shadow: 0 0 5px rgba($black, 0.2);\r\n  }\r\n\r\n  &__actual-item {\r\n    font-size: 1.7rem;\r\n    font-weight: bold;\r\n    color: $gray;\r\n\r\n    &:not(:last-child) {\r\n      margin-bottom: 0.8rem;\r\n    }\r\n  }\r\n}\r\n",".converter {\r\n  max-width: 73rem;\r\n  width: 100%;\r\n  margin: 9rem auto 0;\r\n  padding: 0 1.5rem;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  @media (max-width: $bp-mobile) {\r\n    margin-top: 5rem;\r\n  }\r\n\r\n  &__currencies {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 2rem;\r\n\r\n    @media (max-width: $bp-tablet) {\r\n      flex-direction: column;\r\n      margin-bottom: 4rem;\r\n    }\r\n  }\r\n\r\n  &__arrow {\r\n    display: block;\r\n    max-width: 100%;\r\n\r\n    @media (max-width: $bp-tablet) {\r\n      margin: 2rem 0;\r\n      transform: rotate(90deg);\r\n    }\r\n  }\r\n\r\n  &__input {\r\n    width: 100%;\r\n    height: 6rem;\r\n    font-size: 1.9rem;\r\n    font-family: \"Roboto\", sans-serif;\r\n    font-weight: 400;\r\n    padding: 0 2rem;\r\n    text-align: center;\r\n    border: 1px solid $orange;\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  &__doit {\r\n    max-width: 25rem;\r\n    width: 100%;\r\n    height: 6rem;\r\n    border-radius: 0.5rem;\r\n    background-color: $orange;\r\n    margin: 0 1rem;\r\n    transition: background 0.2s linear;\r\n\r\n    font-family: \"Roboto\", sans-serif;\r\n    font-weight: 400;\r\n    font-size: 2rem;\r\n    color: $white;\r\n\r\n    margin-bottom: 4.5rem;\r\n\r\n    &:hover {\r\n      background-color: darken($orange, 5%);\r\n    }\r\n  }\r\n\r\n  &__result {\r\n    font-size: 2.2rem;\r\n    font-weight: 400;\r\n    color: $orange;\r\n    text-align: center;\r\n    margin-bottom: 4rem;\r\n\r\n    &-number {\r\n      margin-top: 0.8rem;\r\n      display: block;\r\n      font-size: 1.8rem;\r\n      color: $darkgray;\r\n    }\r\n  }\r\n}\r\n\r\n.input__title {\r\n  width: 28rem;\r\n  height: 6rem;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  border-radius: 5px;\r\n\r\n  font-size: 1.6rem;\r\n\r\n  @media (max-width: $bp-tablet) {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.input {\r\n  @media (max-width: $bp-tablet) {\r\n    width: 100%;\r\n  }\r\n}\r\n",".history {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  &__back {\r\n    background-color: rgba($gray, 0.1);\r\n    padding: 1.3rem 1.8rem;\r\n    min-width: 30rem;\r\n  }\r\n  &__title {\r\n    text-align: center;\r\n    font-size: 1.8rem;\r\n    font-weight: 700;\r\n    margin-bottom: 3rem;\r\n  }\r\n\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  &__item {\r\n    font-size: 1.6rem;\r\n    font-weight: 400;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  &__empty {\r\n    text-align: center;\r\n    font-size: 1.6rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/fonts/Lato-Bold.ttf":
/*!****************************************!*\
  !*** ./src/assets/fonts/Lato-Bold.ttf ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "5dd5aa0269395f0ea92763e6cb3bc07a.ttf");

/***/ }),

/***/ "./src/assets/fonts/Lato-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Lato-Regular.ttf ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9919edff6283018571add043109dc20b.ttf");

/***/ }),

/***/ "./src/assets/fonts/Nunito-Bold.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Nunito-Bold.ttf ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7ddd6722d49bf5270cf1018587bc1653.ttf");

/***/ }),

/***/ "./src/assets/fonts/Nunito-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Nunito-Regular.ttf ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e4eb7682710458841b1080acceacd501.ttf");

/***/ }),

/***/ "./src/assets/fonts/Roboto-Bold.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Roboto-Bold.ttf ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "4f39c5796e60c9d8e7327a00e9a4442e.ttf");

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "03523cf578d69fa923226ff457b92d90.ttf");

/***/ }),

/***/ "./src/assets/img/down-arrow.svg":
/*!***************************************!*\
  !*** ./src/assets/img/down-arrow.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/extra/images/down-arrow.svg");

/***/ }),

/***/ "./src/assets/scss/style.scss":
/*!************************************!*\
  !*** ./src/assets/scss/style.scss ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

},
0,[["./src/assets/js/app.jsx","runtime","vendors-node_modules_css-loader_dist_cjs_js_node_modules_normalize_css_normalize_css-node_mod-6303e6"]]]);
//# sourceMappingURL=app.js.map