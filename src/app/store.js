import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../entities/user/model/userSlice'
import authReducer from './model/authSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
    },
})