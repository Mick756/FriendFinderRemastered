import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../styles/home.css';

import Home from './Home.js';
import SignUp from './SignUp';

function Main() {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/login"/>
                    <Route exact path="/search"/>
                    <Route exact path="/friends"/>
                </Switch>
            </div>
        </Router>
    );
}

export default Main;
