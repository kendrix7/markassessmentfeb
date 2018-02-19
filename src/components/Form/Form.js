import React, { Component } from 'react';
import { connect } from 'react-redux'; // 43C
import axios from 'axios';

//  43J mapDispatchToProps is for Containers to allow them to send what a Component needs through Props see example below
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

class Form extends Component {
	state = { userName: '' }
  
	handleSubmit = (event) => {
  	event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`) //44C 44D below 74D-1 76E
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

//43H
function mapStateToProps(state) {
	return {
		//userName: state.userName
	};
}

export default connect(mapStateToProps, {})(Form); // 43C