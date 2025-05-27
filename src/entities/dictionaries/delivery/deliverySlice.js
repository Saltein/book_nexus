import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    delivery: []
};

const deliverySlice = createSlice({
    name: 'delivery',
    initialState,
    reducers: {
        setDelivery: (state, action) => {
            state.delivery = action.payload
        }
    },
});

export const { setDelivery } = deliverySlice.actions;
export default deliverySlice.reducer;
export const getDelivery = (state) => state.delivery.delivery