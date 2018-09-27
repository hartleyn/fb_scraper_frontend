import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';
import BrandLogo from './images/New-BrandLogo.png';


class NavBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			slide: 0,  // How much should the Navbar slide up or down
			lastScrollY: 0,  // Keep track of current position in state
		};

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentWillMount() {
		// When this component mounts, begin listening for scroll changes
		//window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		// If this component is unmounted, stop listening
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		const { lastScrollY } = this.state; 
		const currentScrollY = window.scrollY;


		if (currentScrollY > lastScrollY) {
		  this.setState({ slide: '-64px' });
		} else {
		  this.setState({ slide: '0px' });
		}
		this.setState({ lastScrollY: currentScrollY });
	};


	render() {
		return (
			<div 
				style={{
					transform: `translate(0, ${this.state.slide})`,
          			transition: 'transform 90ms linear',
          			position: 'fixed',
          			top: '0px',
          			width: '100%',
          			zIndex: '500',
				}}
				className='row navBar'
			>
				<nav id="mainNav" className="nav-extended" style={{height: '100%', backgroundColor: '#f63440'}} >
				    <div className="nav-wrapper" style={{minHeight: '50px'}}>
				      	<Link to="/" className="brand-logo hoverable" style={{padding: '0 6.25px', height: '50px'}}><img src={BrandLogo} height="50px" width="115px" alt='logo' /></Link>
				      	<div className="right hide-on-med-and-down" style={{minHeight: '50px'}}>
				      		<Row style={{marginBottom: '0px'}}>
						        <Col x={4} className="navBarLinks valign-wrapper hoverable"><Link to="/" className="white-text waves-effect waves-light">Home</Link></Col>
						        <Col x={4} className="navBarLinks valign-wrapper hoverable"><Link to="/stats" className="white-text waves-effect waves-light">Stats</Link></Col>
						        <Col x={4} className="navBarLinks valign-wrapper hoverable"><Link to="/blog" className="white-text waves-effect waves-light">Insights</Link></Col>
						    </Row>
				      	</div>
				    </div>
			  	</nav>
			</div>
		)
	}
}

export default NavBar;
