import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';



export const AuthContext = createContext(null);
// google Provider
const googleProvider = new GoogleAuthProvider()
// github provider
const gitHubPorvider = new GithubAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userInfoUpdate = (name, image) => {
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Google signIn 
    const signinWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
// GitHub Signin
const signinWithGitHub =()=>{
    setLoading(true);
    return signInWithPopup(auth, gitHubPorvider)
}
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        signIn,
        signinWithGoogle,
        signinWithGitHub,
        loading,
        logOut,
        userInfoUpdate,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;