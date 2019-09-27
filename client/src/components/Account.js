import React, {useState} from 'react';
import {Button} from 'reactstrap';
import '../styles/home.css';

function Account() {

    // States
    const [account, setAccount] = useState(localStorage.getItem("user") || null);

    function logout() {
        localStorage.removeItem("user");
        setAccount(null);
    }

    return (
        <div className="Account">
            {account ? (<div>Logged in as:  <span className="Underline">{account}</span>
                <Button className="Logout-Button" onClick={() => {logout()}}>Logout</Button></div>) : ""}
        </div>);
}

export default Account;
