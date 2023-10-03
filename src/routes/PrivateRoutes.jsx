import { useContext } from 'react';
import PropTypes from "prop-types"
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if( loading ){
        return <>
            <div className='h-screen flex items-center justify-center'>
                <h1 className='text-4xl text-red-600 font-bold'>Loading...</h1>
            </div>
        </>
    }

    if( user ){
        return children;
    }

    return <Navigate to={'/'}></Navigate>;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;