import React, {useState, useRef} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Link} from "react-router-dom";

import axios from 'axios';

import '../styles/home.css';
import '../styles/signup.css';

function Login() {

    const [error, displayError] = useState(false);

    const email_ref = useRef(null);
    const password_ref = useRef(null);

    async function submitUserLogin() {

        let email = email_ref.current.value;
        let password = password_ref.current.value;

        if (email && password) {

            let response = await axios.post("/api/login", {email: email, password: password});

            if (response.data.correct) {

                window.localStorage.setItem("user", email);
                window.location.replace("/");

            } else {
                displayError(true);
            }
        } else {
            displayError(true);
        }

    }

    return (
        <div className="Signup-Page">
            <div className="Shadow App-header">Friend Finder</div>
            <div className="Button-Container">
                <Link to="/">
                    <Button className="Shadow Home-Page-Button" id="signUp">Home</Button>
                </Link>
                <Link to="/signup">
                    <Button className="Shadow Home-Page-Button" id="login">Sign Up</Button>
                </Link>
                <Link to="/search">
                    <Button className="Shadow Home-Page-Button" id="Search">Search</Button>
                </Link>
                <Link to="/friends">
                    <Button className="Shadow Home-Page-Button" id="Friends">Friends</Button>
                </Link>
            </div>
            <div className="Shadow App-header-2">
                Login Below
            </div>

            <Form>
                {error ? <div className="Login-Error" >Credentials provided do not match!</div> : <div> </div>}
                <FormGroup className="Shadow Signup-Form-Container">
                    <Label for="login_email_input">Email</Label>
                    <Input className="Signup-Form-Input" type="email" name="email" id="login_email_input" innerRef={email_ref}/>
                </FormGroup>
                <FormGroup className="Shadow Signup-Form-Container">
                    <Label for="login_password_input">Password</Label>
                    <Input className="Signup-Form-Input" type="password" name="password" id="login_password_input" innerRef={password_ref} />
                </FormGroup>
                <Button className="Shadow Signup-Form-Button" onClick={async () => { await submitUserLogin()}}>Submit</Button>
            </Form>

        </div>
    );
}

export default Login;
