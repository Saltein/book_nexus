import { configureStore } from "@reduxjs/toolkit"
import userReducer from '../entities/user/model/userSlice'
import authReducer from './model/authSlice'
import examplesReducer from "../widgets/ExchangeExampleList/model/examplesSlice"
import exchangesReducer from '../widgets/ExchangesHistory/model/exchangesSlice'
import reviewsReducer from '../features/review/model/reviewsSlice'
import bookCatalogReducer from '../widgets/BookCatalogBlock/model/bookCatalogSlice'
import addBookReducer from '../features/book/model/addBookSlice'
import genresReducer from '../entities/dictionaries/genres/genresSlice'
import countriesReducer from '../entities/dictionaries/countries/countriesSlice'
import deliveryReducer from '../entities/dictionaries/delivery/deliverySlice'
import languagesReducer from '../entities/dictionaries/languages/languagesSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        examples: examplesReducer,
        exchanges: exchangesReducer,
        reviews: reviewsReducer,
        bookCatalog: bookCatalogReducer,
        addBook: addBookReducer,
        genres: genresReducer,
        countries: countriesReducer,
        delivery: deliveryReducer,
        languages: languagesReducer,
    },
})