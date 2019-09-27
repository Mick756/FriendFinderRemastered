import React from 'react';
import {Button} from 'reactstrap';
import {Link} from "react-router-dom";

import '../styles/home.css';
import Account from "./Account";

function Search() {

    return (
        <div className="Search-Page">
            <div className="Shadow App-header">
                Friend Finder
                <Account/>
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
                <Link to="/friends">
                    <Button className="Shadow Home-Page-Button" id="Friends">Friends</Button>
                </Link>
            </div>
            <div className="Shadow App-header-2">
                Search
            </div>

        </div>
    );
}

export default Search;
