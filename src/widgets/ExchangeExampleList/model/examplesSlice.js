import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    examples: []
}

const examplesSlice = createSlice({
    name: 'examples',
    initialState,
    reducers: {
        setExamples: (state, action) => {
            state.examples = action.payload
        }
    },
})

export const {
    setExamples,
} = examplesSlice.actions
export default examplesSlice.reducer

export const getExamples = (state) => state.examples.examples