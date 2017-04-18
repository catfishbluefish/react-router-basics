//Libs
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Teachers from './components/Teachers';

import HTML from './components/courses/HTML';
import CSS from './components/courses/CSS';
import JavaScript from './components/courses/JavaScript';

//Routes
const routes = (
	<Router>
		<App>
			<Switch>
			<Route exact={true} path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/teachers" component={Teachers} />
			<Route path="/courses" component={Courses} />
			</Switch>
		</App>
	</Router>
);

export default routes;