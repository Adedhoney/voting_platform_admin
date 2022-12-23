import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./appSlice"
import positionsReducer from "../positions/positionsSlice"
import candidatesReducer from "../candidates/candidatesSlice"

const store = configureStore({
    reducer: {
        app: appReducer,
        position: positionsReducer,
        candidate: candidatesReducer,
    },
})

export default store
