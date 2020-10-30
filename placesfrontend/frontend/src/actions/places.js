import axios from "axios";

import { GET_PLACES, GET_PLACES_COUNT } from "./types";

// GET Places
export const getPlaces = () => (dispatch) => {
  axios
    .get("/api/places")
    .then((res) => {
      dispatch({
        type: GET_PLACES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// GET Places Count
export const getPlacesCount = () => (dispatch) => {
  axios
    .get("/api/placescount")
    .then((res) => {
      dispatch({
        type: GET_PLACES_COUNT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getLatestImport = (action, contributor) => (dispatch) => {
  axios
    .get(`/api/latestimport/${contributor}`)
    .then((res) => {
      dispatch({
        type: action,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
