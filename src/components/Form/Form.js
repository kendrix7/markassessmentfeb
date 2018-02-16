import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
	state = { userName: '' }
  
	handleSubmit = (event) => {
  	event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`) //44C 44D below 74D-1
    	.then(resp => {
      	this.props.onSubmit(resp.data); //36E
        this.setState({ userName: '' });
      });
  };
  
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input type="text"
        	value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })} // 37D
          placeholder="Github username" required />
        <button type="submit">Add Card</button> 
    	</form>
    );
  }
}

export default Form;