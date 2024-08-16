import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    //sign up using email and password
    const createUserUsingEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sing in using email and password
    const loginUsingEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //user logout
    const userSignOut = () => {
        return signOut(auth);
    }

    //user manage
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        createUserUsingEmailPassword,
        loginUsingEmailPassword,
        userSignOut,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.object
}