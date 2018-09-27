import React from 'react';
import chartIcon from './images/bars-chart.svg';
import { Link } from 'react-router-dom';


const svgPath = `${chartIcon}#svgView(preserveAspectRatio(none))`;
const Welcome = props => (
	<div>
		<div className="row">

			<div id='main-sidebar' className='card small col xl3 z-depth-2'>
				<ul className="collection">
				  <li className="collection-item">Alvin</li>
				  <li className="collection-item">Alvin</li>
				  <li className="collection-item">Alvin</li>
				  <li className="collection-item">Alvin</li>
				</ul>
			</div>
			
			<div id='home-cards-container' className="col xl9 push-xl3">
				<div className="card large home-cards z-depth-2">
			    	<div>
			          <img className="home-cards-icons" src={svgPath} width="500px" height="500px" alt="icon" />
			        </div>
			        <div className="card-action">
			          <Link to="/stats">Historical Tables</Link>
			        </div>
				</div>
				<div className="card large home-cards z-depth-2">
			    	Stuff
				</div>
				<div className="card large home-cards z-depth-2">
			    	Stuff
			    	<div><small>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></small></div>
				</div>
			</div>
		</div>
	</div>
)

export default Welcome;
