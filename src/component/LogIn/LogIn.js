import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './LogIn.css';

const LogIn = () => { 
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="login-form">  
            <div className="form-body">
            <h1 className="signin-text">Sing In</h1>
                <form action="">
                    <input type="email" name="email" id="" placeholder="Enter Your Email"/>
                    <br />
                    <input type="password" name="password" id="" placeholder="Enter Your Password"/>
                    <br />
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
                <p>New to CHK? <Link to="/register">Create Account</Link></p>
                <div>
                    <button className="submit-btn" onClick={signInUsingGoogle}>Google Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;