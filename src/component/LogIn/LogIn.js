import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './LogIn.css';

const LogIn = () => { 
    const {signInUsingGoogle,signInWithEmailAndPassword} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url =location.state?.from || '/home';
    const handleSingInGoogle =()=>{
        signInUsingGoogle()
        .then(result => {
           // setUser(result.user); 
           history.push(redirect_url);  
        })
        .finally(() => history.push(false));
    }
    //console.log('came from', location.state?.from);
    return (
        <div className="login-form">  
            <div className="form-body">
            <h1 className="signin-text">Sing In</h1>
                <form onSubmit="">
                    <input type="email" name="email" id="" placeholder="Enter Your Email"/>
                    <br />
                    <input type="password" name="password" id="" placeholder="Enter Your Password"/>
                    <br />
                    <input onClick={signInWithEmailAndPassword} className="submit-btn" type="submit" value="Submit" />
                </form>
                <div>
                    <button className="submit-btn" onClick={handleSingInGoogle}>Google Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;