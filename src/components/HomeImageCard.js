import React from 'react';
import { Row, Col, Card } from 'react-materialize';


const HomeImageIcon = props => (
	<Col s={12} m={6} l={4} xl={4} offset={props.offset}>
        <div className="card grey lighten-5 hoverable home-cards" style={{padding: '5px'}}>
          	<Row className="valign-wrapper" style={{margin: '0'}}>        
	            <Col s={12} style={{marginLeft: '0'}}>
	              <img src={props.image} alt="" className="circle responsive-img" />
	            </Col>    
          	</Row>
    	</div>
    </Col>
)

export default HomeImageIcon;
