import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    positions: [],
}

const positionSlice = createSlice({
    name: "position",
    initialState,
    reducers: {
        setVotingPositions: (state, action) => {
            state.positions = action.payload
        },
    },
})

export const { setVotingPositions } = positionSlice.actions
export default positionSlice.reducer
