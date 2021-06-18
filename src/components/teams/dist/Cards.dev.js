"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardsP = exports.CardsH2 = exports.CardsH1 = exports.CardsIcon = exports.single_card = exports.CardsWrapper = exports.CardsContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nfont-size: 1rem;\ntext-align: center;\noverflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 190px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    font-size: 0.78rem;\nmargin-bottom: 10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\nfont-size: 2.5rem;\ncolor: #fff;\nmargin-bottom: 64px;\n\n@media screen and (max-width: 480px) {\n    font-size: 2rem;\n}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nheight: 160px;\nwidth: 160px;\nmargin-bottom: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nbackground: #ffffff;\ndisplay: flex;\nflex-direction: column;\njustify-content: flex-start;\nalign-items: center;\nborder-radius: 10px;\nmax-height: 340px;\npadding: 30px;\nbox-shadow: 0 1px 3px rgba(0,0,0,0.2);\ntransition: all 0.2s ease-in-out;\n\n&:hover{\n    transform: scale(1.02);\n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nmax-width: 1000px;\nmargin: 0 auto;\ndisplay: grid;\ngrid-template-columns: 1fr 1fr 1fr;\nalign-items: center;\ngrid-gap: 16px;\npadding:0 50px;\n\n@media screen and (max-width: 1000px) {\n    grid-template-columns: 1fr 1fr;\n}\n\n@media screen and (max-width: 760px) {\n    grid-template-columns: 1fr;\n    padding: 0 20px;\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\nheight:  fit-content;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nbackground: ", ";\n\n@media screen and (max-width: 760px) {\n    height: calc(226vh + 65px);\n    /* height: 1100px; */\n}\n@media screen and (max-width: 480px) {\n    height: calc(226vh + 65px);\n    /* height: 1300px; */\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardsContainer = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var lightBg = _ref.lightBg;
  return lightBg ? '#f9f9f9' : '#112d4e';
});

exports.CardsContainer = CardsContainer;

var CardsWrapper = _styledComponents["default"].div(_templateObject2());

exports.CardsWrapper = CardsWrapper;

var single_card = _styledComponents["default"].div(_templateObject3());

exports.single_card = single_card;

var CardsIcon = _styledComponents["default"].img(_templateObject4());

exports.CardsIcon = CardsIcon;

var CardsH1 = _styledComponents["default"].h1(_templateObject5());

exports.CardsH1 = CardsH1;

var CardsH2 = _styledComponents["default"].h2(_templateObject6());

exports.CardsH2 = CardsH2;

var CardsP = _styledComponents["default"].p(_templateObject7());

exports.CardsP = CardsP;