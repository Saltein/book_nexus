import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../model/authSlice';


export const ProtectedRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to="/auth" replace />;
    }

    return children;
};