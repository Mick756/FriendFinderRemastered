import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap';

import '../styles/home.css';

import Account from "./Account";

function Home() {

    // States
    const [account, setAccount] = useState(localStorage.getItem("user") || null);

    useEffect(() => {

    });

    return (
        <div className="App">
            <div className="Shadow App-header">
                Friend Finder
                <Account />
            </div>
            <div className="Button-Container">
                    <Link to="/signup">
                        <Button className="Shadow Home-Page-Button" id="signUp">Sign Up</Button>
                    </Link>
                    <Link to="/login">
                        <Button className="Shadow Home-Page-Button" id="login">Login</Button>
                    </Link>
                    <Link to="/search">
                        <Button className="Shadow Home-Page-Button" id="Search">Search</Button>
                    </Link>
                    <Link to="/friends">
                        <Button className="Shadow Home-Page-Button" id="Friends">Friends</Button>
                    </Link>
            </div>

            <div className="Shadow App-header-2">
                Get Started
            </div>

            <div>
                <div className="Friend-Finder-App-Description">
                    The Friend Finder App has been made to be a friendly, clean, and easy place to make friends online. <br />
                    Parents no longer need to worry about setting strict boundaries and keeping an extra eye on their kids. <br />
                    Chats will be carefully monitored, censored, and reported if outside of the community guidelines. <br />
                    Please, do not be scared to report abuse or misconduct.<br />
                    <br />
                    To begin,<br />
                    <Link to="/signup">Create an account</Link> or if you already have an account, <Link to="/login">login</Link>.<br />
                    Then:
                </div>
                <Link to="/survey">
                    <Button className="Shadow Home-Page-Button">Take The Friend Matcher Survey</Button>
                </Link>
            </div>

            <footer className="App-Footer">Manuel Arias © 2019</footer>
        </div>
    );
}

export default Home;
