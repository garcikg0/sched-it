import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, handleLogout }) => {

    // const [currentUser, setCurrentUser] = useState(currentUser)

    // const handleLogout = e => {
    //     e.preventDefault()
    //     handleLogout()
    // }

    // useEffect(() => {
    //     let newCurrentUser = currentUser
    //     setCurrentUser(newCurrentUser)
    // }, [currentUser] )

    return(
        <header>
            <div>
                <Link to="/home">Home</Link>
            </div>
            <div>
                {currentUser ? (
                    <>
                    <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                    </>
                )}
            </div>
        </header>
    )
}

export default NavBar;