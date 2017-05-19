"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Regiones = require("./Regiones.js");

var _Regiones2 = _interopRequireDefault(_Regiones);

var _Comunas = require("./Comunas.js");

var _Comunas2 = _interopRequireDefault(_Comunas);

var _comunas = require("../api/comunas");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// get data


var MainSelector = function (_Component) {
	_inherits(MainSelector, _Component);

	function MainSelector(props) {
		_classCallCheck(this, MainSelector);

		var _this = _possibleConstructorReturn(this, (MainSelector.__proto__ || Object.getPrototypeOf(MainSelector)).call(this, props));

		_this.updateHandler = _this.updateHandler.bind(_this);

		_this.state = { region: null, selectedRegion: null, selectedComuna: null };

		return _this;
	}

	// method to update the main component state
	// @param {srting}, t: the type of element selected
	// @param {int}, v: the index of the selected item


	_createClass(MainSelector, [{
		key: "updateHandler",
		value: function updateHandler(t, v) {

			if (t === "region") {
				// update the selected region
				this.setState({
					region: v !== "" ? _comunas.comunas[v] : null,
					selectedRegion: v !== "" ? v : null,
					selectedComuna: null
				});
			} else {
				this.setState({
					selectedComuna: v
				});
			}
		}
	}, {
		key: "render",
		value: function render() {

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(_Regiones2.default, {
					update: this.updateHandler,
					regiones: _comunas.comunas,
					type: "region"
				}),
				_react2.default.createElement(_Comunas2.default, {
					update: this.updateHandler,
					comunas: this.state.region !== null ? this.state.region.comunas : [],
					type: "comuna" })
			);
		}
	}]);

	return MainSelector;
}(_react.Component);

exports.default = MainSelector;