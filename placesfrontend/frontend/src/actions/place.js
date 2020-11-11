import axios from "axios";

import {
  GET_PLACE,
  ADD_PLACE,
  DELETE_PLACE,
  GET_PLACE_FROM_ORG,
  GET_PLACE_FROM_BRA,
  GET_PLACE_FROM_GEO,
} from "./types";

// GET Place
export const getPlace = (branch_short_name) => (dispatch) => {
  axios
    .get(`/api/places/${branch_short_name}`)
    .then((res) => {
      dispatch({
        type: GET_PLACE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// ADD Place
export const addPlace = (formValues) => (dispatch) => {
  axios
    .post(`/api/places`, { ...formValues })
    .then((res) => {
      dispatch({
        type: ADD_PLACE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
  dispatch(reset("placeForm"));
};

// DELETE Place
export const deletePlace = (branch_short_name) => (dispatch) => {
  axios.delete(`/api/places/${branch_short_name}`);
  dispatch({
    type: DELETE_PLACE,
    payload: branch_short_name,
  });
};

export const getPlaceFromOrg = (branch_short_name) => (dispatch) => {
  axios
    .get(`/api/places/${branch_short_name}/org-importer`)
    .then((res) => {
      dispatch({
        type: GET_PLACE_FROM_ORG,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getPlaceFromBra = (branch_short_name) => (dispatch) => {
  axios
    .get(`/api/places/${branch_short_name}/bra-importer`)
    .then((res) => {
      dispatch({
        type: GET_PLACE_FROM_BRA,
        GET_PLACE_FROM_BRA,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getPlaceFromGeo = (branch_short_name) => (dispatch) => {
  axios
    .get(`/api/places/${branch_short_name}/google-geocoding`)
    .then((res) => {
      dispatch({
        type: GET_PLACE_FROM_GEO,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
