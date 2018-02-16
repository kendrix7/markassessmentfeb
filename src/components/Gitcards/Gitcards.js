import React, { Component } from 'react';
import Form from '../Form/Form';
import Cardlist from '../Cardlist/Cardlist';

class Gitcards extends Component {
	state = {
  	cards: []
  };
  
  addNewCard = (cardInfo) => {
  	this.setState(prevState => ({
    	cards: prevState.cards.concat(cardInfo)
    }));
  };
  
	render() {
  	return (
    	<div>
    	  <Form onSubmit={this.addNewCard} />
          <Cardlist cards={this.state.cards} />
    	</div>
    );
  }
}

export default Gitcards;