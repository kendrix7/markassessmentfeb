import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to='/game' >Game</Link>
                <Link to='/gitcards' >Gitcards</Link>
            </div>
        )
    }
}