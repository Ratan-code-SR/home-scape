import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // user sign up
    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user sign in
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const logoutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const subscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => subscribed()
    }, [])

    const authInfo = { signUpUser, signInUser, logoutUser,user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};

AuthProvider.propTypes = {
    children: PropTypes.node
};
export default AuthProvider;