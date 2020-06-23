import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import Videoplayer from './videoplayer';
import Landing from './Landing';

//Rendered de componenten om door naar de URL te kijken.
const Switcher = () => (
    <Switch>
        <Route exact path="/buildE/" component={Landing} />
        <Route path="/buildE/Videoplayer" component={Videoplayer} />
        <Route path="/buildE/Contact" component={Contact} />
    </Switch>
)

export default Switcher;