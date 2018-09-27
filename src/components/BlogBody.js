import React from 'react';


const BlogBody = props => (
  <div>
    <h4 className="center-align">{props.bodyHeader}</h4>

    <blockquote className="right" style={{fontSize: 'x-large'}}>
      {props.bodyBlockquote}
    </blockquote>

    {props.bodyContent}
    
  </div>
)

export default BlogBody;
