import React, { Component } from "react";

import RegionesSelect from "./Regiones.jsx";
import ComunasSelect from "./Comunas.jsx";

class MainSelector extends Component{

	constructor(props){

		super(props);

		this.updateHandler = this.updateHandler.bind(this);

		this.state = { region:null, selectedRegion:null, comuna:null, selectedComuna:null };

	}

	// method to update the main component state
	// @param {srting}, t: the type of element selected
	// @param {int}, v: the index of the selected item
	updateHandler(t, v){

		
		if( t === "region" ){
			// update the selected region
			this.setState({
				region: v !== "" ? this.props.data[v] : null,
				selectedRegion:v !== "" ? v : null,
				comuna: null, selectedComuna:null
			});
		} else {
			this.setState({
				comuna: v !== "" ? this.state.region.comunas[v] : null,
				selectedComuna:v
			});
		}

	}

	render(){
		
		return(
			<div>
				<RegionesSelect update={this.updateHandler} regiones={this.props.data} type="region" />
				<ComunasSelect
					update={this.updateHandler}
					comunas={this.state.region !== null ? this.state.region.comunas : []}
				type="comuna" />
			</div>
		);

	}

}

export default MainSelector;
