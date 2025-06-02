import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    text: ''
};

const searchSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        setSearchText: (state, action) => {
            state.text = action.payload;
        },
    },
});

export const {
    setSearchText
} = searchSlice.actions;

export default searchSlice.reducer;
export const getSearchText = (state) => state.searchBar.text;
