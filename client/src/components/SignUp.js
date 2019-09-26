import React, {useState, useRef} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import '../styles/home.css';
import '../styles/signup.css';
import {Link} from "react-router-dom";

function SignUp() {

    const [error, displayError] = useState(false);
    const name_ref = useRef(null);
    const email_ref = useRef(null);
    const phone_number_ref = useRef(null);
    const password_ref = useRef(null);

    function submitUserSignUp() {

        let name = name_ref.current.value;
        let email = email_ref.current.value;
        let phone_number = phone_number_ref.current.value;
        let password = password_ref.current.value;

        // Check if user already exists

        // If not add new user

        // "login" then redirect


    }

    return (
        <div className="Signup-Page">
            <div className="Shadow App-header">Friend Finder</div>
            <div className="Button-Container">
                <Link to="/">
                    <Button className="Shadow Home-Page-Button" id="signUp">Home</Button>
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
                Sign Up Below
            </div>

            <Form>
                <FormGroup className="Shadow Signup-Form-Container">
                    <Label for="name_input">Name</Label>
                    <Input className="Signup-Form-Input" type="text" name="name" id="signup_name_input" innerRef={name_ref} />
                </FormGroup>
                <FormGroup className="Shadow Signup-Form-Container">
                    <Label for="email_input">Email</Label>
                    <Input className="Signup-Form-Input" type="email" name="email" id="signup_email_input" innerRef={email_ref}/>
                </FormGroup>
                <FormGroup className="Shadow Signup-Form-Container">
                    <Label for="phone_number_input">Phone Number</Label>
                    <Input className="Signup-Form-Input" type="text" name="phone_number" id="signup_phone_number_input" innerRef={phone_number_ref} />
                </FormGroup>
                <FormGroup className="Shadow Signup-Form-Container">
                    <Label for="examplePassword">Password</Label>
                    <Input className="Signup-Form-Input" type="password" name="password" id="signup_password_input" innerRef={password_ref}/>
                </FormGroup>
                <Button className="Shadow Signup-Form-Button">Submit</Button>
            </Form>

        </div>
    );
}

export default SignUp;
