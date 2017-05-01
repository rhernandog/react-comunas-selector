import React, { Component } from "react";

class ComunasSelect extends Component{

	constructor(props){

		super(props);

		this.renderOption = this.renderOption.bind(this);
		this.valueChangeHandler = this.valueChangeHandler.bind(this);

		this.state = { value: "" };

	}

	renderOption(e,i){
		
		return(
			<option key={e.code} value={i}>{e.name}</option>
		);
	}

	// select change handler
	valueChangeHandler(e){

		const selection = e.target.value;
		// if the value is not an empty string, update the state
		if( selection !== "" ) {
			this.setState({ value:selection });
		} else {
			this.setState({ value:"" });
		}

		this.props.update(this.props.type, selection);

	}

	render(){
		
		return(
			<div className="form-group">
				<label htmlFor="comuna-selector">Comuna</label>
				<select className="form-control" name="comuna-selector" id="comuna-selector"
					onChange={this.valueChangeHandler}
				>
					<option defaultValue value="">Seleccione Comuna</option>
					{ this.props.comunas.map(this.renderOption) }
				</select>
			</div>
		);

	}

}

export default ComunasSelect;
