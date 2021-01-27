import React, { useState } from 'react';
import './Styles.scss';

const LoginForm = ({ handleLogin }) => {


    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.id;

        setLoginData({
            ...loginData,
            [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "applicatoin/json"
            },
            body: JSON.stringify(loginData)
        })
        .then(r => r.json())
        .then(data => {
            const { user, token } = data
            handleLogin( {user} )
            localStorage.token = token
        })
    };

    return (
        <>
        <div>
            <form class='login-form'onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Username</label>
                <input 
                    class="login-form-input" 
                    type="text" 
                    name="username" 
                    autoComplete="off" 
                    onChange={handleChange} 
                />
                <label>Password</label>
                <input 
                    class="login-form-input" 
                    type="password" 
                    name="password" 
                    onChange={handleChange} 
                    autoComplete="current-password" 
                />
                <input 
                    class="login-form-input" 
                    type="submit" 
                    value="Login" 
                />
            </form>
            <hr />
        </div>
        
        </>
    )
};

export default LoginForm;