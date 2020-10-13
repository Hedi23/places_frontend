import axios from "axios";

import { GET_PARTNER } from "./types";

// GET Partners
export const getPartner = () => (dispatch) => {
  axios
    .get(`/api/places/${partner_short_name}`)
    .console.log(partner_short_nam)
    .then((res) => {
      dispatch({
        type: GET_PARTNER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
