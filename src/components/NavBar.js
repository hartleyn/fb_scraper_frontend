import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
	render() {
		return (
			<div className='row navBar'>
				<nav className="blue darken-1 nav-extended">
					<div className="nav-wrapper">
					  <a data-target="main-menu" className="sidenav-trigger show-on-large">
					  	<i className="fa fa-bars"></i>
					  </a>
					  <ul id="nav-mobile" className="right col m1 l1 xl1 hide-on-small-only">
					    <li><Link to="/stats">Stats</Link></li>
					  </ul>
					</div>
				</nav>
			</div>
		)
	}
}


//const mapStateToProps = state => ({});

//export default connect(mapStateToProps)(NavBar);
export default NavBar;
