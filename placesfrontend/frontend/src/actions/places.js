import axios from "axios";

import { GET_PLACES, GET_PLACES_COUNT, GET_LATEST_ORG_IMPORT, GET_LATEST_BRA_IMPORT, GET_LATEST_GEO_IMPORT} from "./types";

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

export const getLatestOrgImport = () => (dispatch) => {
  axios
    .get(`/api/latestimport/org-importer`)
    .then((res) => {
      dispatch({
        type: GET_LATEST_ORG_IMPORT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getLatestBraImport = () => (dispatch) => {
  axios
    .get(`/api/latestimport/bra-importer`)
    .then((res) => {
      dispatch({
        type: GET_LATEST_BRA_IMPORT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getLatestGeoImport = () => (dispatch) => {
  axios
    .get(`/api/latestimport/google-geocoding`)
    .then((res) => {
      dispatch({
        type: GET_LATEST_GEO_IMPORT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};