import axios from "axios";

import {
  GET_PLACE,
  DELETE_PLACE,
  GET_PLACE_FROM_ORG,
  GET_PLACE_FROM_BRA,
  GET_PLACE_FROM_GEO,
} from "./types";
import history from "../history";

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

// DELETE Place
export const deletePlace = (branch_short_name) => (dispatch) => {
  axios
    .delete(`/api/places/${branch_short_name}`)
    .then((res) => {
      dispatch({
        type: DELETE_PLACE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
  history.push("/");
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
