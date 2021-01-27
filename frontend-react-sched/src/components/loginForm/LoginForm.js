import React, { useState } from 'react';
import './styles.scss';

const LoginForm = () => {


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
        //TODO
    }

    return (
        <>
        <div>
            <form class='login-form'onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Username</label>
                <input class="login-form-input" type="text" name="username" autoComplete="off" onChange={handleChange} />
                <label>Password</label>
                <input class="login-form-input" type="password" name="password" onChange={handleChange} autoComplete="current-password" />
                <input class="login-form-input" type="submit" value="Login" />
            </form>
            <hr />
        </div>
        
        </>
    )
};

export default LoginForm;