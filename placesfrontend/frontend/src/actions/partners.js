import axios from "axios";

import { GET_PARTNERS, SEARCH_PARTNER } from "./types";

// GET Partners
export const getPartners = () => (dispatch) => {
  axios
    .get("/api/partners")
    .then((res) => {
      dispatch({
        type: GET_PARTNERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
