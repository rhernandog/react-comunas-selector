(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = require('./lib/React');

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComunasSelect = function (_Component) {
	_inherits(ComunasSelect, _Component);

	function ComunasSelect(props) {
		_classCallCheck(this, ComunasSelect);

		var _this = _possibleConstructorReturn(this, (ComunasSelect.__proto__ || Object.getPrototypeOf(ComunasSelect)).call(this, props));

		_this.renderOption = _this.renderOption.bind(_this);
		_this.valueChangeHandler = _this.valueChangeHandler.bind(_this);

		_this.state = { value: "" };

		return _this;
	}

	_createClass(ComunasSelect, [{
		key: "componentDidUpdate",
		value: function componentDidUpdate(p, s) {
			// if the component updates because the region changed
			// set the value to an empty string
			if (p.comunas.length !== this.props.comunas.length) {
				this.setState({ value: "" });
			}
		}
	}, {
		key: "renderOption",
		value: function renderOption(e, i) {

			return _react2.default.createElement(
				"option",
				{ key: e.code, value: e.name },
				e.name
			);
		}

		// select change handler

	}, {
		key: "valueChangeHandler",
		value: function valueChangeHandler(e) {

			var selection = e.target.value;
			// if the value is not an empty string, update the state
			if (selection !== "") {
				this.setState({ value: selection });
			} else {
				this.setState({ value: "" });
			}

			this.props.update(this.props.type, selection);
		}
	}, {
		key: "render",
		value: function render() {

			return _react2.default.createElement(
				"div",
				{ className: "form-group" },
				_react2.default.createElement(
					"label",
					{ htmlFor: "comuna-selector" },
					"Comuna"
				),
				_react2.default.createElement(
					"select",
					{ className: "form-control", name: "comuna-selector", id: "comuna-selector",
						onChange: this.valueChangeHandler
					},
					_react2.default.createElement(
						"option",
						{ defaultValue: true, value: "" },
						"Seleccione Comuna"
					),
					this.props.comunas.map(this.renderOption)
				)
			);
		}
	}]);

	return ComunasSelect;
}(_react.Component);

exports.default = ComunasSelect;

},{"react":1}]},{},[2]);
