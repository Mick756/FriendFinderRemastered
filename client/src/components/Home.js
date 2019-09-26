import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import {Button} from 'reactstrap';
import Friend from './Friend';
import '../styles/home.css';

import SignUp from './SignUp';

function Home() {

    const users = [
        {
            name: "Mick Arias",
            age: 18,
            description: "Easy going but most the time super emotional and not easy going."
        },
        {
            name: "James McCormick",
            age: 22,
            description: "Too many words, not too much space.. But he is pretty great so."
        },
        {
            name: "Heather Arias",
            age: 42,
            description: "She don't need no man. She got her life planned!"
        },
        {
            name: "Lorelai Arias",
            age: 15,
            description: "No description needed for this demon. She is a sister."
        }
    ];

    // States
    const [number, setNumber] = useState(5);
    const [account, setAccount] = useState(localStorage.getItem("user") || null);

    function logout() {
        localStorage.removeItem("user");
        setAccount(null);
    }

    useEffect(() => {
        console.log("Mounted.");
    });

    return (
        <div className="App">
            <div className="Shadow App-header">
                Friend Finder
                <div className="Account">
                    {account ? (<div>Logged in as:  <span className="Underline">{account}</span>
                        <Button className="Logout-Button" onClick={() => {logout()}}>Logout</Button></div>) : ""}
                </div>
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
                Friends
                <span className="Query-Amount">
                    <Button className="Shadow Search-Amount-Button" onClick={event => setNumber((number - 1) < 5 ? 5 : (number - 1))}> - </Button>
                    {number}
                    <Button className="Shadow Search-Amount-Button" onClick={event => setNumber((number + 1) > 20 ? 20 : (number + 1))}> + </Button>
                </span>
            </div>
                {
                    users.map(user =>
                    <div className="Shadow Friend-Container">
                        <Friend name={user.name} age={user.age} description={user.description}/>
                    </div>)
                }

        </div>
    );
}

export default Home;
