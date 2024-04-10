import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import {Navigate} from 'react-router-dom'


const Protected = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <p>Loading......</p>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>

};

export default Protected;