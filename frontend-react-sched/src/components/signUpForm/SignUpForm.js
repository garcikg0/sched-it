import React, { useState } from 'react';
import './Styles.scss';

const SignUpForm = ({ handleLogin }) => {

    const [signupData, setSignupData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: ""
    })

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.id;

        setSignupData({
            ...signupData,
            [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault()
        fetch("http://localhost:3000/users" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signupData)
        })
        .then(r => r.json())
        .then(data => {
            const { user, token } = data
            handleLogin( {user} )
            localStorage.token = token
        })
    };

    return(
        <>
        <div>
            <form class="login-form" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                
                <label>First Name</label>
                <input
                    class="login-form-input"
                    type="text"
                    name="first_name"
                    autoComplete="off"
                    onChange={handleChange}
                />

                <label>Last Name</label>
                <input
                    class="login-form-input"
                    type="text"
                    name="last_name"
                    autoComplete="off"
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    class="login-form-input"
                    type="text"
                    name="email"
                    autoComplete="off"
                    onChange={handleChange}
                />

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
                    autoComplete="off"
                    onChange={handleChange}
                />

                <input 
                    class="login-form-input"
                    type="submit"
                    value="Signup"
                />
                
            </form> 
        </div>
        </>
    )
};

export default SignUpForm;