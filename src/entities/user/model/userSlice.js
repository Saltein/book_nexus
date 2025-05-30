import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "id": -1,
    "email": "",
    "role": "",
    "banned": false,
    "ban_reason": '',
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
        setBanned: (state, action) => {
            state.banned = action.payload
        },
        setBanReason: (state, action) => {
            state.ban_reason = action.payload
        }
    },
});

export const { setId, setEmail, setRole, setBanned, setBanReason } = userSlice.actions;
export default userSlice.reducer;
export const getId = (state) => state.user.id
export const getEmail = (state) => state.user.email
export const getRole = (state) => state.user.role
export const getBanned = (state) => state.user.banned
export const getBanReason = (state) => state.user.ban_reason