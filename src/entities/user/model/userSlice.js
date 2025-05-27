import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "id": -1,
    "email": "",
    "role": "",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setRole: (state, action) => {
            state.role = action.payload
        },
    },
});

export const { setId, setEmail, setRole } = userSlice.actions;
export default userSlice.reducer;
export const getId = (state) => state.user.id
export const getEmail = (state) => state.user.email
export const getRole = (state) => state.user.role