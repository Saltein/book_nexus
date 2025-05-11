import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../entities/user/model/userSlice'
import authReducer from './model/authSlice'
import examplesReducer from "../widgets/ExchangeExampleList/model/examplesSlice";
import exchangesReducer from '../widgets/ExchangesHistory/model/exchangesSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        examples: examplesReducer,
        exchanges: exchangesReducer,
    },
})