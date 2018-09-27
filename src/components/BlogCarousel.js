import React from 'react';
import { Col, Carousel } from 'react-materialize';


const BlogCarousel = props => (
	<div>
		<Carousel
			fixedItem={<button className='btn'>MORE</button>}
			options={{ fullWidth: true }}
			style={{height: '400px'}}
		>
			<div className='red' style={{height: '400px'}}>
				<h2>First Panel</h2>
				<p className='white-text'>This is your first panel</p>
			</div>
			<div className='amber' style={{height: '400px'}}>
				<h2>Second Panel</h2>
				<p className='white-text'>This is your second panel</p>
			</div>
			<div className='green' style={{height: '400px'}}>
				<h2>Third Panel</h2>
				<p className='white-text'>This is your third panel</p>
			</div>
			<div className='blue' style={{height: '400px'}}>
				<h2>Fourth Panel</h2>
				<p className='white-text'>This is your fourth panel</p>
			</div>
		</Carousel>
	</div>
)

export default BlogCarousel;
