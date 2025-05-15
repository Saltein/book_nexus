import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
    books: [],
    filters: {
        genre: 'all',
        country: 'all',
        yearRange: [1900, new Date().getFullYear()],
        lang: [false, false, false], // соответствует ['ru','en','other']
        filterLists: {}
    }
};

const bookCatalogSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
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
} = bookCatalogSlice.actions
export default bookCatalogSlice.reducer

// Базовые селекторы
const getBooks = state => state.bookCatalog.books
const getFilters = state => state.bookCatalog.filters
export const getFilterLists = state => state.bookCatalog.filterLists

// Мемоизированный селектор
export const getFilteredBooks = createSelector(
    [getBooks, getFilters],
    (books, filters) => {
        const [minYear, maxYear] = filters.yearRange;
        const langs = ['ru', 'en', 'other']

        return books.filter(book => {
            if (filters.genre !== 'all' && book.genre !== filters.genre) {
                return false;
            }
            if (filters.country !== 'all' && book.country !== filters.country) {
                return false;
            }
            if (book.year < minYear || book.year > maxYear) {
                return false;
            }
            // если ни один флаг не активен — пропускаем все языки
            if (!filters.lang.some(Boolean)) {
                return true;
            }
            const idx = langs.indexOf(book.lang);
            return idx >= 0 && filters.lang[idx];
        });
    }
);