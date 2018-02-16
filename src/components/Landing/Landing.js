import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div>
                <a href={process.env.REACT_APP_LOGIN}><button className='landing_sign_in_button'>Auth0</button></a>
                <Link to='/game' ><button>Game</button></Link>
                <Link to='/gitcards' ><button>Gitcards</button></Link>
            </div>
        )
    }
}

export default Landing;