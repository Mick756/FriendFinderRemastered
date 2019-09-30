import React, {useState, useRef} from 'react';
import {Label, Input, Button} from 'reactstrap';
import {Link} from "react-router-dom";
import axios from 'axios';

import '../styles/home.css';
import '../styles/search.css';

import Account from "./Account";
import Friend from "./Friend";

function Search() {

    let [noResults, setNoResults] = useState("");
    let [results, setResults] = useState([]);
    let search_ref = useRef(null);

    async function search() {

        let search = search_ref.current.value;

        if (search.includes('@')) {

            let response = await axios.get("/api/get_friend/" + search);

            if (response.data != false ) {

                setResults(<Friend name={response.data.name} email={response.data.email} survey={response.data.survey}></Friend>);

            } else {

            }

        }

    }

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

            <br />

            <Label className="Search-Bar-Input-Label" for="Search-Input">Search anyone by email.</Label>
            <span>
                <Input id="Search-Input" className="Shadow Search-Input-Bar" type="text" placeholder="Email." innerRef={search_ref}></Input>
                <Button className="Shadow Search-Bar-Button" onClick={async () => {await search()}}>Search</Button>
            </span>

            <div className="Shadow App-header-2">
                Friend Results
            </div>

            <div className="Search-Results-Container">
                {results ? results : <div className="Friend-Finder-App-Description">{noResults}</div> }
            </div>

        </div>
    );
}

export default Search;
