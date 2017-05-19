import React, { Component } from "react";
import ReactDOM from "react-dom";

import { comunas } from "./api/comunas.js";

import MainSelector from "./modules/MainSelector.jsx";

class App extends Component{

	render(){
		
		return(
			<div className="container">
				<div className="row">

					<div className="col-sm-12">
						
						<h2 className="text-center">Selector de Comunas de Chile para formularios</h2>
						<hr />
					
					</div>

					<div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">

						<MainSelector />

					</div>

				</div>
			</div>
		);

	}

}


ReactDOM.render(
	<App />, document.getElementById("app-wrap")
);
