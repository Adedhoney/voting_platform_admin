import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    accessToken: "",
    currentTab: "overview",
    totalUsers: 0,
    usersVoted: 0,
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
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

export const { setNewTab, setTotalUsers, setUsersVoted, setAccessToken } =
    appSlice.actions
export default appSlice.reducer
