import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {


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

    const authInfo = {
        createUserUsingEmailPassword,
        loginUsingEmailPassword,
        userSignOut
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