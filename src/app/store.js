import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../entities/user/model/userSlice'
import authReducer from './model/authSlice'
import examplesReducer from "../widgets/ExchangeExampleList/model/examplesSlice";
import exchangesReducer from '../widgets/ExchangesHistory/model/exchangesSlice'
import reviewsReducer from '../features/review/model/reviewsSlice'
import bookCatalogReducer from '../widgets/BookCatalogBlock/model/bookCatalogSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        examples: examplesReducer,
        exchanges: exchangesReducer,
        reviews: reviewsReducer,
        bookCatalog: bookCatalogReducer,
    },
})