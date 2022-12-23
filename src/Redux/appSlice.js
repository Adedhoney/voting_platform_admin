import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentTab: "candidate",
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setNewTab: (state, action) => {
            state.currentTab = action.payload
        },
    },
})

export const { setNewTab } = appSlice.actions
export default appSlice.reducer
