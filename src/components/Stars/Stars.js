import React, { Component } from 'react';
import _ from 'lodash';
//import FontAwesome from 'react-font-awesome';

const Stars = (props) => {
	const numberOfStars = 1 + Math.floor(Math.random()*9);
  
  // let stars = [];
  // for (let i=0; i<numberOfStars; i++) {
  // 	stars.push(<i key={i} className='fa fa-star'></i>);
  // }
  
	return (
  	<div className='col-5'>
    	{_.range(props.numberOfStars).map(i =>
      	<i key={i} className='fa fa-star'></i>
      )}
    </div>
  );
}

export default Stars;