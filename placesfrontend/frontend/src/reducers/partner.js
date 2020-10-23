import { GET_PARTNER } from "../actions/types.js";

const initialState = {
  partner: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PARTNER:
      return {
        ...state,
        partner: action.payload,
      };
    default:
      return state;
  }
}
