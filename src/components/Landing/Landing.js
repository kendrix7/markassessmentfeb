import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div>
                <Link to='/game' ><button>Game</button></Link>
                <Link to='/gitcards' ><button>Gitcards</button></Link>
            </div>
        )
    }
}

export default Landing;