import axios from "axios"
import { setVotingPositions } from "./positions/positionsSlice"
import { setCandidates } from "./candidates/candidatesSlice"
import store from "./Redux/reduxStore"

const URL = "http://localhost:4000/admin/"

// Upload user file
export const upload = async (file) => {
    try {
        const res = await axios.post(`${URL}upload_user_files`, file)
        return new Promise((resolve, reject) => resolve(res))
    } catch (error) {
        return new Promise((resolve, reject) => resolve(error))
    }
}
export const addPosition = async (data) => {
    try {
        const res = await axios.post(`${URL}addposition`, {
            positionName: data,
        })
        return new Promise((resolve, reject) => resolve(res))
    } catch (error) {
        console.log(error)
        return new Promise((resolve, reject) => resolve(error))
    }
}
export const addCandidate = async (data) => {
    try {
        const res = await axios.post(`${URL}addcandidate`, data)
        return new Promise((resolve, reject) => resolve(res))
    } catch (error) {
        console.log(error)
        return new Promise((resolve, reject) => resolve(error))
    }
}
export const deleteCandidate = async (data) => {
    try {
        const res = await axios.delete(`${URL}deleteCandidate`, data)
        return new Promise((resolve, reject) => resolve())
    } catch (error) {
        return new Promise((resolve, reject) => resolve(error))
    }
}

export const deletePosition = async (data) => {
    try {
        const res = await axios.delete(`${URL}deletePosition`, data)
        return new Promise((resolve, reject) => resolve())
    } catch (error) {
        return new Promise((resolve, reject) => resolve(error))
    }
}

export const clearDatabase = async () => {
    try {
        const res = await axios.delete(`${URL}deleteElection`)
        return new Promise((resolve, reject) => resolve())
    } catch (error) {
        return new Promise((resolve, reject) => resolve(error))
    }
}

export const getOverview = async () => {
    try {
        const res = await axios.get(`${URL}getOverview`)
        store.dispatch(setVotingPositions(res.data.positions))
        store.dispatch(setCandidates(res.data.candidates))
        console.log(res.data)
        return new Promise((resolve, reject) => resolve())
    } catch (error) {
        return new Promise((resolve, reject) => resolve(error))
    }
}
