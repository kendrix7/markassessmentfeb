import React, { Component } from 'react';
import Card from '../Card/Card';

const Cardlist = (props) => {
	return (
  	<div>
  	  {props.cards.map(card => <Card key={card.id} {...card} />)}
  	</div>
  )
}

export default Cardlist;