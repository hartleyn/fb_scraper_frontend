import React from 'react';


const Preloader = props => (
	<div className="center-align content-preloaders">
		<div className={"preloader-wrapper active " + props.size}>
		    <div className={"spinner-layer spinner-" + props.color + "-only"}>
		      	<div className="circle-clipper left">
			        <div className="circle"></div>
		      	</div>
		      	<div className="gap-patch">
			        <div className="circle"></div>
		      	</div>
		      	<div className="circle-clipper right">
			        <div className="circle"></div>
		      	</div>
		    </div>
	  	</div>
	</div>
)

export default Preloader;
