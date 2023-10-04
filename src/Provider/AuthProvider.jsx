import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import auth from '../services/firebase/firebase';
import { FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
const googleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login user with email and password
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Signin
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Facebook Signin
    const FacebookLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, FacebookProvider)
    }

    // Twitter login
    const twitterLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, twitterProvider);
    }

    // Signout user
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // Update user
    const updateUser = (name, url) => {
        setLoading(true)
        return updateProfile(auth.currentUser , {
            displayName: name, 
            photoURL: url,
        })
    }


    useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    },[])

    const userInfo = {
        createUser,
        loginUser,
        updateUser,
        logoutUser,
        googleLogin,
        FacebookLogin,
        twitterLogin,
        loading,
        user,
    }
    return (
        <AuthContext.Provider value={userInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;