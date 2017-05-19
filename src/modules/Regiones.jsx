import React, { Component } from "react";

class RegionesSelect extends Component {

	constructor(props) {

		super(props);
		this.renderRegiones = this.renderRegiones.bind(this);
		this.valueChangeHandler = this.valueChangeHandler.bind(this);
		// set the selected state, this indicates the dependent
		// component to change it's visibility
		this.state = { value: "" };

	}

	// select change handler
	valueChangeHandler(e) {

		const selection = e.target.value;
		const selectedRegion = selection !== "" ? this.props.regiones[selection].region : "";

		// update the selected region
		this.setState({ value: selectedRegion });

		this.props.update(this.props.type, selection);

	}

	renderRegiones(e, i) {
		return (
			<option key={e.region_number} value={i}>{e.region}</option>
		);
	}

	render() {

		return (
			<div className="form-group">
				<label htmlFor="region-selector">Región</label>
				<select className="form-control" name="region-selector" id="region-selector"
					onChange={this.valueChangeHandler}
				>
					<option defaultValue value="">Seleccione Región</option>
					{this.props.regiones.map(this.renderRegiones)}
				</select>
			</div>
		);

	}

}

export default RegionesSelect;