import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentTab: "overview",
    totalUsers: 0,
    usersVoted: 0,
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setNewTab: (state, action) => {
            state.currentTab = action.payload
        },
        setTotalUsers: (state, action) => {
            state.totalUsers = action.payload
        },
        setUsersVoted: (state, action) => {
            state.usersVoted = action.payload
        },
    },
})

export const { setNewTab, setTotalUsers, setUsersVoted } = appSlice.actions
export default appSlice.reducer
