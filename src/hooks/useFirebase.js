import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import authInit from "../Firebase/firebase.init";
authInit();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
           
    }

signInWithEmailAndPassword(auth, email, password)
    .then(result => {
         setEmail(result.email); 
         setPassword(result.password);    
     })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
   
    return {
        user,
        isLoading,
        signInUsingGoogle,
        signInWithEmailAndPassword,
        logOut,
     
    }
}

export default useFirebase;