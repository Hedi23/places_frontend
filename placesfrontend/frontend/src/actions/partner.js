import axios from "axios";

import { GET_PARTNER } from "./types";

// GET Partners
export const getPartner = (partner_short_name) => (dispatch) => {
  axios
    .get(`/api/partners/${partner_short_name}`)
    .then((res) => {
      dispatch({
        type: GET_PARTNER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
