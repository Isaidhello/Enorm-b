import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Videoplayer from './Videoplayer';

//Rendered de componenten om door naar de URL te kijken.
const Switcher = () => (
    <Switch>
        <Route exact path="/buildE" component={Home} />
        <Route path="/buildE/Videoplayer" component={Videoplayer} />
        <Route path="/buildE/Contact" component={Contact} />
    </Switch>
)

export default Switcher;