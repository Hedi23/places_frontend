import { GET_PARTNER } from "../actions/types.js";

const initialState = {
  places: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PARTNER:
      return {
        ...state,
        partner: action.payload,
        partner: state.places.filter(
          (place) => place.branch_short_name == action.payload
        ),
      };
    default:
      return state;
  }
}
