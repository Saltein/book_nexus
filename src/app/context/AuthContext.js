import { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logoutSuccess, selectUser, selectIsLoggedIn } from '../model/authSlice';
import { authApi } from '../../shared/api/authApi';

// Создаем контекст с начальным значением null
export const AuthContext = createContext(null);

// Провайдер контекста, который будет оборачивать наше приложение
export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const [isInitialized, setIsInitialized] = useState(false);

    const login = (user) => dispatch(loginSuccess(user));
    const logout = () => dispatch(logoutSuccess());

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await authApi.check();
    
                if (response.isAuthenticated) {
                    dispatch(loginSuccess(response.user));
                } else {
                    dispatch(logoutSuccess());
                }
            } catch (err) {
                dispatch(logoutSuccess());
            } finally {
                setIsInitialized(true);
            }
        };
    
        checkAuth();
    }, [dispatch]);

    const value = { isAuthenticated: isLoggedIn, user, login, logout };

    if (!isInitialized) {
        return <div>Loading...</div>;
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


// Хук для удобного использования контекста
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};