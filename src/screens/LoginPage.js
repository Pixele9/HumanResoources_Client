import React, { useState, useEffect }  from 'react'
import { useHistory } from "react-router-dom";
import './LoginPage.css'

const axios = require('axios');

function LoginPage() {

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            history.push("/");
        }
    });

    const login = () => {
        axios({
            url: "https://humanresources.cleverapps.io/login", 
            method: 'POST',
            data: {
                email: email,
                password: password,
            }
        }).then((res) => {
            localStorage.setItem("token", res.data.message);
            history.push("/");
        })
    }

    return (
        <div id="main">
            <div id="login" >
                <h2>Login</h2>
                <input type="text" id="email" onChange={(arg) => setEmail(arg.target.value)} placeholder="Email"/>
                <span id="email-border"></span>
                <input type="password" id="password" onChange={(arg) => setPassword(arg.target.value)} placeholder="Password" />
                <span id="password-border"></span>
                <button className="button" onClick={login} >login</button>
            </div>
        </div>
    )
}

export default LoginPage;