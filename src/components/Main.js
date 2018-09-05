import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from './Welcome';
import FootballStats from './FootballStats';


const Main = () => (
	<main className='mainApp'>
		<Switch>
			<Route exact path='/' component={Welcome} />
			<Route exact path='/stats' component={FootballStats} />
		</Switch>
	</main>
)

export default Main;
