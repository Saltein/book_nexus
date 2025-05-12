import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reviews: []
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        setReviews: (state, action) => {
            state.reviews = action.payload
        },
    },
});

export const { setReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer;
export const getReviews = (state) => state.reviews.reviews