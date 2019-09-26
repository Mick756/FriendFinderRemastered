import React from 'react';
import {Button} from 'reactstrap';
import {Link} from "react-router-dom";

import '../styles/home.css';


function Friends() {

    return (
        <div className="Friends-Page">
            <div className="Shadow App-header">Friend Finder</div>
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
                Friends
            </div>

        </div>
    );
}

export default Friends;
