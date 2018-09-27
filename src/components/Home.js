import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax, Card, CardTitle, Row } from 'react-materialize';

import HomeImageCard from './HomeImageCard';

import parallax1 from './images/HomeBackground.png';
import parallax2 from './images/parallax2.png';
import homeOverlay from './images/HomeOverlay.png';
import bigHomeOverlay from './images/HomeOverlay-XL.png';
import newsImg from './images/newspaper.svg';
import statsImg from './images/stats2.svg';


const Home = props => (
	<div>

		<div style={{width: '100%'}}>
			<div className="show-on-large hide-on-med-and-down" style={{position: 'absolute', top: '90px', minHeight: '620px', height: '620px', width: '60%', margin: '0 20%', backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
				<img src={bigHomeOverlay} style={{minHeight: '620px', height: '620px', width: '100%'}} alt="overlay" />
			</div>
			<div className="show-on-medium hide-on-small-only hide-on-large-only" style={{position: 'absolute', top: '90px', minHeight: '620px', height: '620px', width: '70%', margin: '0 15%', backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
				<img src={homeOverlay} style={{minHeight: '620px', height: '620px', width: '100%'}} alt="overlay" />
			</div>
			<div className="show-on-small hide-on-med-and-up" style={{position: 'absolute', top: '90px', minHeight: '620px', height: '620px', width: '100%', margin: '0', backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
				<img src={homeOverlay} style={{minHeight: '620px', height: '620px', width: '100%'}} alt="overlay" />
			</div>
		</div>


	  	<Parallax imageSrc={parallax1} />
			<div className="section white z-depth-2">
				<Row>
					<Link to="/blog"><HomeImageCard image={newsImg} offset="l2 xl2" /></Link>
					<Link to="/stats"><HomeImageCard image={statsImg} /></Link>
				</Row>
			</div>
	  	<Parallax imageSrc={parallax2} />
	</div>
)

export default Home;
