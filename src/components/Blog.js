import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPostById } from '../actions/blogActions';
import Parser from 'html-react-parser';
import { /*Icon, */Row, Col, Preloader, Carousel } from 'react-materialize';
//import { DiscussionEmbed/*, CommentCount */} from 'disqus-react';
/*import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';*/
import smHeader from './images/bars-chart.png';
import medHeader from './images/NewNoWords-BrandLogo.png';
import bigHeader from './images/bg-image6.png';

import BlogBody from './BlogBody';
import BlogCarousel from './BlogCarousel';


class Blog extends Component {

	componentDidMount() {
		this.props.fetchPostById();
	}

	componentDidUpdate(prevProps) {
		if(this.props.post !== prevProps.post) {
			console.log(this.props.post);
			
			document.getElementById('blogPreloader').classList.add('hidden');
			document.getElementById('blogContainer').classList.remove('hidden');
		}
	}

	render() {
		//const photoCredit = Parser(String(this.props.post.photo_credit));
		const bodyHeader = Parser(String(this.props.post.body_header));
		const bodyBlockquote = Parser(String(this.props.post.blockquote));
		const bodyContent = Parser(String(this.props.post.body_content));

		/*const disqusShortname = 'example';
        const disqusConfig = {
            url: 'www.example.com',
            identifier: 1,
            title: 'La Liga\'s Lost Point System',
        };*/

		return (
			<div>
				<div id='blogPreloader' className="center-align" style={{position: 'absolute', top: '300px', width: '100%'}}>
					<Preloader size="big" color="red" />
				</div>
				<div id="blogContainer" className="z-depth-3 hidden" style={{marginBottom: '20px', overflowX: 'hidden', overflowY: 'hidden'}}>

				
					<img src={this.props.post.header_image_large} height='600px' width='100%' alt='' className="hide-on-med-and-down" />
					<img src={this.props.post.header_image_medium} height="600px" width="100%" alt='' className="show-on-medium hide-on-small-only hide-on-large-only" />
					<img src={this.props.post.header_image_small} height="600px" width="100%" alt='' className="show-on-small hide-on-med-and-up" />
					
					

					{/*<p className="right-align" style={{margin: '0'}}><small>{photoCredit}</small></p>
				







				<Row>

					<Col xl={4}>
						<Row>
							<Col offset="xl7" className="share-buttons"><FacebookShareButton url='www.example.com' children={<FacebookIcon size={32} round={true} />} /></Col>
							<div className="col share-buttons"><TwitterShareButton url='www.example.com' children={<TwitterIcon size={32} round={true} />} /></div>
							<div className="col share-buttons"><WhatsappShareButton url='www.example.com' children={<WhatsappIcon size={32} round={true} />} /></div>
							<div className="col share-buttons"><RedditShareButton url='www.example.com' children={<RedditIcon size={32} round={true} />} /></div>
							<div className="col share-buttons"><EmailShareButton url='www.example.com' children={<EmailIcon size={32} round={true} />} /></div>
						</Row>
					</Col>
				</Row>

				<CommentCount shortname={disqusShortname} config={disqusConfig}>
	                    Comments
	                </CommentCount>

				<hr className="blog-divider" />*/}

					<div style={{margin: '0 20px'}}>

						{/*<Preloader color="red" />*/}

						<BlogBody bodyHeader={bodyHeader} bodyBlockquote={bodyBlockquote} bodyContent={bodyContent} />

						<Row>

							{/*<div id='main-sidebar' className='card small col xl3 z-depth-2'>
								<ul className="collection">
								  <li className="collection-item">Alvin</li>
								  <li className="collection-item">Alvin</li>
								  <li className="collection-item">Alvin</li>
								  <li className="collection-item">Alvin</li>
								</ul>
							</div>*/}

							<Col s={12} m={10} l={8} xl={6} offset="m1 l2 xl3">
								{/*<BlogCarousel />*/}

								<Carousel
								  fixedItem={<button className='btn'>MORE</button>}
								  options={{ fullWidth: true }}
								  images={[
								    smHeader,
								    medHeader,
								    bigHeader,
								  ]}
								/>
							</Col>
							
							
						</Row>

						{/*<Row>
							<Col s={12} m={12} l={12} xl={12} style={{padding: '0'}}>
								<DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
							</Col>
						</Row>*/}

					</div>

				{/*<Button floating fab='horizontal' icon='share' className='red' small style={{bottom: '45px', right: '24px'}}>
 					<FacebookShareButton url='www.example.com' children={<FacebookIcon size={32} round={true} />} />
					<TwitterShareButton url='www.example.com' children={<TwitterIcon size={32} round={true} />} />
					<WhatsappShareButton url='www.example.com' children={<WhatsappIcon size={32} round={true} />} />
					<RedditShareButton url='www.example.com' children={<RedditIcon size={32} round={true} />} />
					<EmailShareButton url='www.example.com' children={<EmailIcon size={32} round={true} />} />
				</Button>

				<div className="fixed-action-btn click-to-toggle">
				  <a className="btn-floating btn-small red">
				    <i className="small material-icons">share</i>
				  </a>
				  <ul>
				    <li><FacebookShareButton url='www.example.com' children={<FacebookIcon size={32} round={true} />} /></li>
				    <li><TwitterShareButton url='www.example.com' children={<TwitterIcon size={32} round={true} />} /></li>
				    <li><WhatsappShareButton url='www.example.com' children={<WhatsappIcon size={32} round={true} />} /></li>
				    <li><RedditShareButton url='www.example.com' children={<RedditIcon size={32} round={true} />} /></li>
				    <li><EmailShareButton url='www.example.com' children={<EmailIcon size={32} round={true} />} /></li>
				  </ul>
				</div>*/}

				</div>

			</div>
		)
	}
}

Blog.propTypes = {
	fetchPostById: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
	post: state.blog.post,
});

export default connect(mapStateToProps, { fetchPostById })(Blog);
