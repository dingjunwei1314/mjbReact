import React from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from '../App';
import Home from '../components/Home/Home';
import Score from '../components/Score/Score';
import About from '../components/About/About';
import Down from '../components/Down/Down';


const routers=
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute  component={Home}/>
			<Route path="/down" component={Down}/>
			<Route path="/score" component={Score}/>
			<Route path="/about" component={About}/>
		</Route>
	</Router>

export default routers