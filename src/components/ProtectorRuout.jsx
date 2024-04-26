import PropTypes from 'prop-types';
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const ProtectorRuout = ({ children }) => {
    const { user } = useContext(AuthContext)

    if (user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>

};
ProtectorRuout.propTypes ={
    children: PropTypes.node
}


export default ProtectorRuout;