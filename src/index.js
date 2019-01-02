import React from "react";
import ReactDom from "react-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';

ReactDom.render(
	<div>
		<CssBaseline />
		<App/>
	</div>,
	document.getElementById("app")
);