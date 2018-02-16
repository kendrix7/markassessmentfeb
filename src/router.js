import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Game from './components/Game/Game';
import Gitcards from './components/Gitcards/Gitcards';
import Calendar from './components/Calendar/Calendar';
import Flex from './components/Flex/Flex';

export default (
    <Switch>
        <Route path='/calendar' component={Calendar} />
        <Route path='/game' component={Game} />
        <Route path='/gitcards' component={Gitcards} />
        <Route path='/flex' component={Flex} />
        <Route path='/' component={Landing} exact />
    </Switch>
)