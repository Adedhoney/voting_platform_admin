import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    candidates: [],
}

const candidateSlice = createSlice({
    name: "candidate",
    initialState,
    reducers: {
        setCandidates: (state, action) => {
            state.candidates = action.payload
        },
    },
})

export const { setCandidates } = candidateSlice.actions
export default candidateSlice.reducer
