import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
    books: [],
    favorites: [],
    filters: {
        genre: 0,
        country: 0,
        yearRange: [1900, new Date().getFullYear()],
        lang: [false, false, false], // соответствует ['ru','en','other']
        filterLists: {}
    }
};

const bookCatalogSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setFavorites: (state, action) => {
            state.favorites = action.payload
        },
        setBooks: (state, action) => {
            state.books = action.payload
        },
        // экшены для обновления каждого параметра фильтра
        setFilterGenre(state, action) {
            state.filters.genre = action.payload;
        },
        setFilterCountry(state, action) {
            state.filters.country = action.payload;
        },
        setFilterYearRange(state, action) {
            state.filters.yearRange = action.payload;
        },
        setFilterLang(state, action) {
            state.filters.lang = action.payload;
        },

        setFilterLists(state, action) {
            state.filters.filterLists = action.payload
        },
    },
});

export const {
    setBooks,
    setFilterGenre,
    setFilterCountry,
    setFilterYearRange,
    setFilterLang,
    setFilterLists,
    setFavorites,
} = bookCatalogSlice.actions
export default bookCatalogSlice.reducer

// Базовые селекторы
export const getFilters = state => state.bookCatalog.filters
export const getFavorites = state => state.bookCatalog.favorites
export const getBooks = state => state.bookCatalog.books
export const getFilterLists = state => state.bookCatalog.filterLists

// Мемоизированный селектор
export const getFilteredBooks = createSelector(
    [getBooks, getFilters],
    (books, filters) => {
        const [minYear, maxYear] = filters.yearRange;
        // Индексы фильтра идут так: 0→ru, 1→en, 2→other
        let genreIndex = parseInt(filters.genre, 10);
        let countryIndex = parseInt(filters.country, 10);

        if (isNaN(genreIndex)) {
            genreIndex = 0;
        }
        if (isNaN(countryIndex)) {
            countryIndex = 0;
        }

        const genreList = filters.filterLists.genre || [];
        const countryList = filters.filterLists.country || [];

        const selectedGenre = genreList[genreIndex - 1];
        const selectedCountry = countryList[countryIndex - 1];

        return books.filter(book => {
            // 1) Фильтрация по жанру
            if (genreIndex !== 0 && book.Genre.name !== selectedGenre?.name) {
                return false;
            }
            // 2) Фильтрация по стране автора
            if (countryIndex !== 0 && book.AuthorCountry.name !== selectedCountry?.name) {
                return false;
            }
            // 3) Фильтрация по году
            if (book.year < minYear || book.year > maxYear) {
                return false;
            }
            // 4) Если не выбран ни один язык — пропускаем всё
            if (!filters.lang.some(Boolean)) {
                return true;
            }

            // 5) Вычисляем индекс языкового фильтра на основе lang_id
            let idx;
            if (book.lang_id === 1) {
                idx = 0; // «ru»
            } else if (book.lang_id === 2) {
                idx = 1; // «en»
            } else {
                idx = 2; // «other»
            }

            return filters.lang[idx];
        });
    }
);
