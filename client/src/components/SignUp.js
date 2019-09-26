import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import '../styles/home.css';
import '../styles/signup.css';
import {Link} from "react-router-dom";

function SignUp() {

    const [error, displayError] = useState(false);

    function submitUserSignUp(name, email, phone_number, password) {

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
                    <Input className="Signup-Form-Input" type="text" name="name" id="signup_name_input" />
                </FormGroup>
                <FormGroup className="Shadow Signup-Form-Container">
                    <Label for="email_input">Email</Label>
                    <Input className="Signup-Form-Input" type="email" name="email" id="signup_email_input" />
                </FormGroup>
                <FormGroup className="Shadow Signup-Form-Container">
                    <Label for="phone_number_input">Phone Number</Label>
                    <Input className="Signup-Form-Input" type="text" name="phone_number" id="signup_phone_number_input" />
                </FormGroup>
                <FormGroup className="Shadow Signup-Form-Container">
                    <Label for="examplePassword">Password</Label>
                    <Input className="Signup-Form-Input" type="password" name="password" id="signup_password_input" />
                </FormGroup>
                <Button className="Shadow Signup-Form-Button">Submit</Button>
            </Form>

        </div>
    );
}

export default SignUp;
