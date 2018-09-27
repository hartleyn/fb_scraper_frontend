import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import FootballStats from './FootballStats';
import Blog from './Blog'
import SideNav from './SideNav';


const Main = () => (
	<main className='mainApp'>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/stats' component={FootballStats} />
			<Route exact path='/blog' component={Blog} />
			<Route exact path='/nav' component={SideNav} />
		</Switch>
	</main>
)

export default Main;
