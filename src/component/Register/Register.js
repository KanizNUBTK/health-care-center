import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const LogIn = () => { 
    return (
        <div className="login-form">  
            <div className="form-body">
            <h1 className="signin-text">Please Register</h1>
                <form action="">
                    <input type="email" name="email" id="" placeholder="Enter Your Email"/>
                    <br />
                    <input type="password" name="password" id="" placeholder="Enter Your Password"/>
                    <br />
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
                <p>Do you have account? <Link to="/login">Create Account</Link></p>
                <div>
                    <button className="submit-btn">Google Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;