import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // user sign up
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      
    }

    // user sign in
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

   
    useEffect(() => {
        const subscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => subscribed()
    }, [])
    console.log(user);
    const authInfo = { signUpUser, signInUser, logoutUser, user, loading,setUser }
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