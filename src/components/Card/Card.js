import React, { Component } from 'react';

const Card = (props) => {
	return (
		<div>
		  <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
		</div>
	);
};

export default Card;