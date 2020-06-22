import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Videoplayer from './videoplayer';

//Rendered de componenten om door naar de URL te kijken.
const Switcher = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/buildE" component={Home} />
            <Route path="/buildE/Contact" component={Contact} />
            <Route path="/buildE/videoplayer" component={Videoplayer} />
        </Switch>
    </BrowserRouter>

)

export default Switcher;