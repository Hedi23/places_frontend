import axios from "axios";

import { GET_PLACES } from "./types";

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
