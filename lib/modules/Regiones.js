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

var RegionesSelect = function (_Component) {
	_inherits(RegionesSelect, _Component);

	function RegionesSelect(props) {
		_classCallCheck(this, RegionesSelect);

		var _this = _possibleConstructorReturn(this, (RegionesSelect.__proto__ || Object.getPrototypeOf(RegionesSelect)).call(this, props));

		_this.renderRegiones = _this.renderRegiones.bind(_this);
		_this.valueChangeHandler = _this.valueChangeHandler.bind(_this);
		// set the selected state, this indicates the dependent
		// component to change it's visibility
		_this.state = { value: "" };

		return _this;
	}

	// select change handler


	_createClass(RegionesSelect, [{
		key: "valueChangeHandler",
		value: function valueChangeHandler(e) {

			var selection = e.target.value;
			var selectedRegion = selection !== "" ? this.props.regiones[selection].region : "";

			// update the selected region
			this.setState({ value: selectedRegion });

			this.props.update(this.props.type, selection);
		}
	}, {
		key: "renderRegiones",
		value: function renderRegiones(e, i) {
			return _react2.default.createElement(
				"option",
				{ key: e.region_number, value: i },
				e.region
			);
		}
	}, {
		key: "render",
		value: function render() {

			return _react2.default.createElement(
				"div",
				{ className: "form-group" },
				_react2.default.createElement(
					"label",
					{ htmlFor: "region-selector" },
					"Regi\xF3n"
				),
				_react2.default.createElement(
					"select",
					{
						className: "form-control", name: "region-selector", id: "region-selector",
						onChange: this.valueChangeHandler
					},
					_react2.default.createElement(
						"option",
						{ defaultValue: true, value: "" },
						"Seleccione Regi\xF3n"
					),
					this.props.regiones.map(this.renderRegiones)
				)
			);
		}
	}]);

	return RegionesSelect;
}(_react.Component);

exports.default = RegionesSelect;