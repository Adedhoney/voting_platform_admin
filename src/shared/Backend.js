import axios from "axios";
import { setVotingPositions } from "../positions/positionsSlice";
import { setCandidates } from "../candidates/candidatesSlice";
import {
  setTotalUsers,
  setUsersVoted,
  setAccessToken,
} from "../Redux/appSlice";
import store from "../Redux/reduxStore";

const URL = process.env.REACT_APP_BACKEND_URL;

export const getAccess = async (accessCode) => {
  try {
    const res = await axios.get(`${URL}getAccess`, {
      params: { accessCode },
    });
    localStorage.setItem("accessToken", res.data.accessToken);
    store.dispatch(setAccessToken(res.data.accessToken));
  } catch (error) {
    if (error.response.status === 410 || 411) {
      localStorage.removeItem("accessToken");
      window.location.reload();
    }

    return new Promise((resolve, reject) => resolve(error.response));
  }
};

// Upload user file
export const upload = async (file) => {
  try {
    const res = await axios.post(`${URL}upload_user_files`, file, {
      headers: {
        authorization: `Basic ${store.getState().app.accessToken}`,
      },
    });
    return new Promise((resolve, reject) => resolve(res));
  } catch (error) {
    return new Promise((resolve, reject) => resolve(error.response));
  }
};
export const addPosition = async (data) => {
  try {
    const res = await axios.post(
      `${URL}addposition`,
      {
        positionName: data,
      },
      {
        headers: {
          authorization: `Basic ${store.getState().app.accessToken}`,
        },
      }
    );
    return new Promise((resolve, reject) => resolve(res));
  } catch (error) {
    console.log(error);
    return new Promise((resolve, reject) => resolve(error.response));
  }
};
export const addCandidate = async (data) => {
  try {
    const res = await axios.post(`${URL}addcandidate`, data, {
      headers: {
        authorization: `Basic ${store.getState().app.accessToken}`,
      },
    });
    return new Promise((resolve, reject) => resolve(res));
  } catch (error) {
    console.log(error);
    return new Promise((resolve, reject) => resolve(error.response));
  }
};
export const deleteCandidate = async (data) => {
  try {
    const res = await axios.post(`${URL}deleteCandidate`, data, {
      headers: {
        authorization: `Basic ${store.getState().app.accessToken}`,
      },
    });
    return new Promise((resolve, reject) => resolve(res));
  } catch (error) {
    return new Promise((resolve, reject) => resolve(error.response));
  }
};

export const deletePosition = async (data) => {
  try {
    const res = await axios.post(`${URL}deletePosition`, data, {
      headers: {
        authorization: `Basic ${store.getState().app.accessToken}`,
      },
    });
    return new Promise((resolve, reject) => resolve(res));
  } catch (error) {
    return new Promise((resolve, reject) => resolve(error.response));
  }
};

export const clearDatabase = async () => {
  try {
    const res = await axios.delete(`${URL}deleteElection`, {
      headers: {
        authorization: `Basic ${store.getState().app.accessToken}`,
      },
    });
    return new Promise((resolve, reject) => resolve(res));
  } catch (error) {
    return new Promise((resolve, reject) => resolve(error.response));
  }
};

export const getOverview = async () => {
  try {
    const res = await axios.get(`${URL}getOverview`, {
      headers: {
        authorization: `Basic ${store.getState().app.accessToken}`,
      },
    });
    store.dispatch(setVotingPositions(res.data.positions));
    store.dispatch(setCandidates(res.data.candidates));
    store.dispatch(setTotalUsers(res.data.totalUsers));
    store.dispatch(setUsersVoted(res.data.usersVoted));
    return new Promise((resolve, reject) => resolve(res));
  } catch (error) {
    console.log(error);
    if (error.response.status === 410 || 411) {
      localStorage.removeItem("accessToken");
      window.location.reload();
    }

    return new Promise((resolve, reject) => resolve(error.response));
  }
};
