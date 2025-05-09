import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../entities/user/model/userSlice'
import authReducer from './model/authSlice'
import examplesReducer from "../widgets/ExchangeExampleList/model/examplesSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        examples: examplesReducer,
    },
})