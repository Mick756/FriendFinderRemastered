import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../styles/home.css';

import Home from './Home.js';
import SignUp from './SignUp';
import Login from "./Login";
import Search from "./Search";
import Friends from "./Friends";

function Main() {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/search" component={Search}/>
                    <Route exact path="/friends" component={Friends}/>
                </Switch>
            </div>
        </Router>
    );
}

export default Main;
