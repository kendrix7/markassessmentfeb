import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Game from './components/Game/Game';
import Gitcards from './components/Gitcards/Gitcards';

export default (
    <Switch>
        <Route path='/game' component={Game} />
        <Route path='/gitcards' component={Gitcards} />
        <Route path='/' component={Landing} exact />
    </Switch>
)