import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addBook: {
        author: '',
        title: '',
        year: '',
        description: '',
        genre: null,
        language: null,
        country: null,
        cover_url: '',
    }
};

const addBookSlice = createSlice({
    name: 'addBook',
    initialState,
    reducers: {
        setAuthor: (state, action) => {
            state.addBook.author = action.payload;
        },
        setTitle: (state, action) => {
            state.addBook.title = action.payload;
        },
        setYear: (state, action) => {
            state.addBook.year = action.payload;
        },
        setDescription: (state, action) => {
            state.addBook.description = action.payload;
        },
        setGenre: (state, action) => {
            state.addBook.genre = action.payload;
        },
        setLanguage: (state, action) => {
            state.addBook.language = action.payload;
        },
        setCountry: (state, action) => {
            state.addBook.country = action.payload;
        },
        setBookCoverUrl: (state, action) => {
            state.addBook.cover_url = action.payload;
        },
        resetAddBook: (state) => {
            state.addBook = initialState.addBook;
        }
    },
});

export const {
    setAuthor,
    setTitle,
    setYear,
    setDescription,
    setGenre,
    setLanguage,
    setCountry,
    setBookCoverUrl,
    resetAddBook
} = addBookSlice.actions;

export default addBookSlice.reducer;

export const selectAddBook = (state) => state.addBook.addBook;

export const selectAuthor = (state) => state.addBook.addBook.author;
export const selectTitle = (state) => state.addBook.addBook.title;
export const selectYear = (state) => state.addBook.addBook.year;
export const selectDescription = (state) => state.addBook.addBook.description;
export const selectGenre = (state) => state.addBook.addBook.genre;
export const selectLanguage = (state) => state.addBook.addBook.language;
export const selectCountry = (state) => state.addBook.addBook.country;
export const selectCoverUrl = (state) => state.addBook.addBook.cover_url;