import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from "../components/Header";

import Home from '../sections/Home';
import Bible from '../sections/Bible';
import PlayList from '../sections/PlayList';
import Warns from '../sections/Warns';
import ProjectorScreen from '../sections/ProjectorScreen';
import NotFound from '../sections/NotFound';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Header/>

				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/bible" component={Bible}></Route>
					<Route path="/playlist" component={PlayList}></Route>
					<Route path="/warns" component={Warns}></Route>
					<Route path="/projector-screen" component={ProjectorScreen}></Route>
					<Route component={NotFound}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;