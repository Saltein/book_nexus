import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    archive: [],
    pending: [],
    accepted: []
}

const exchangesSlice = createSlice({
    name: 'exchanges',
    initialState,
    reducers: {
        setExchangesArchive: (state, action) => {
            state.archive = action.payload
        },
        setExchangesPending: (state, action) => {
            state.pending = action.payload
        },
        setExchangesAccepted: (state, action) => {
            state.accepted = action.payload
        },
    },
})

export const {
    setExchangesArchive,
    setExchangesPending,
    setExchangesAccepted,
} = exchangesSlice.actions

export default exchangesSlice.reducer

// Селекторы:
export const getExchangesArchive = (state) => state.exchanges.archive
export const getExchangesPending = (state) => state.exchanges.pending
export const getExchangesAccepted = (state) => state.exchanges.accepted
