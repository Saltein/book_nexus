import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { getSearchText } from '../../../features/search/model/searchSlice';

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
    [getBooks, getFilters, getSearchText],
    (books, filters, searchText) => {
        const [minYear, maxYear] = filters.yearRange
        let genreIndex = parseInt(filters.genre, 10) || 0
        let countryIndex = parseInt(filters.country, 10) || 0

        const genreList = filters.filterLists.genre || []
        const countryList = filters.filterLists.country || []

        const selectedGenre = genreList[genreIndex - 1]
        const selectedCountry = countryList[countryIndex - 1]

        const normalizedSearch = searchText.trim().toLowerCase()

        return books.filter(book => {
            // Фильтрация по жанру
            if (genreIndex !== 0 && book.Genre.name !== selectedGenre?.name) {
                return false
            }
            // Фильтрация по стране автора
            if (countryIndex !== 0 && book.AuthorCountry.name !== selectedCountry?.name) {
                return false
            }
            // Фильтрация по году
            if (book.year < minYear || book.year > maxYear) {
                return false
            }
            // Фильтрация по языку
            if (filters.lang.some(Boolean)) {
                let idx = book.lang_id === 1 ? 0 : book.lang_id === 2 ? 1 : 2
                if (!filters.lang[idx]) {
                    return false
                }
            }
            // Фильтрация по поисковой строке
            if (normalizedSearch) {
                const fieldsToSearch = [
                    book?.name,
                    book?.author,
                    book.Genre?.name,
                    book.AuthorCountry?.name,
                ]

                console.log('normalizedSearch', fieldsToSearch)

                const matchesSearch = fieldsToSearch.some(field =>
                    field?.toLowerCase().includes(normalizedSearch)
                )

                if (!matchesSearch) return false
            }

            return true
        })
    }
)

// Селектор для фильтрации списка избранного только по поисковой строке
export const getFilteredFavorites = createSelector(
    [getFavorites, getSearchText],
    (favorites, searchText) => {
        const normalizedSearch = searchText.trim().toLowerCase()

        // Если строка поиска пуста, возвращаем весь массив favorites
        if (!normalizedSearch) {
            return favorites
        }

        return favorites.filter(book => {
            const fieldsToSearch = [
                book?.name,
                book?.author,
                book.Genre?.name,
                book.AuthorCountry?.name,
            ];

            return fieldsToSearch.some(field =>
                field?.toLowerCase().includes(normalizedSearch)
            );
        });
    }
);
