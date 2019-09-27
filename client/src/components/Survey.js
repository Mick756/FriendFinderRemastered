import React, {useState} from 'react';
import {Button} from 'reactstrap';
import {Link} from "react-router-dom";

import '../styles/home.css';
import '../styles/survey.css';

import Account from "./Account";

function Survey() {

    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("user"));

    return (
        <div className="App">
            <div className="Shadow App-header">
                Friend Finder
                <Account />
            </div>
            <div className="Button-Container">
                <Link to="/">
                    <Button className="Shadow Home-Page-Button" id="signUp">Home</Button>
                </Link>
                <Link to="/signup">
                    <Button className="Shadow Home-Page-Button" id="login">Sign Up</Button>
                </Link>
                <Link to="/login">
                    <Button className="Shadow Home-Page-Button" id="Search">Login</Button>
                </Link>
                <Link to="/search">
                    <Button className="Shadow Home-Page-Button" id="Friends">Search</Button>
                </Link>
            </div>

            <div className="Shadow App-header-2">
                Survey
            </div>

            {loggedIn ?
                <div> </div>
            :
                <div className="Friend-Finder-App-Description">You need to be logged in to view and take the survey!</div>}


        </div>);
}

export default Survey;
