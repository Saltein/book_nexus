import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsLoggedIn } from '../model/authSlice'
import { getRole } from '../../entities/user/model/userSlice';


export const ProtectedRoute = ({ children, allowedRoles = [] }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const role = useSelector(getRole)

    if (!isLoggedIn) {
        return <Navigate to="/auth" replace />
    }
    
    if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
        return <Navigate to="/" replace />
    }

    return children;
};