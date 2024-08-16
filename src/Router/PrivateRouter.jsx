import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <div className='flex justify-center items-center h-32'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRouter;
PrivateRouter.propTypes = {
    children: PropTypes.object
}