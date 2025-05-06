import { setToken, clearToken } from '../../../entities/user/model/userSlice'
import { authApi } from '../../../shared/api/authApi'

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const response = await authApi.login(credentials)
        if (response) {
            console.log('👍')
        }
    } catch (error) {
        console.error('Ошибка логина:', error.message)
    }
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('token')
    dispatch(clearToken())
};