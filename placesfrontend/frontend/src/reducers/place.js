import {
  GET_PLACE,
  GET_PLACE_FROM_ORG,
  GET_PLACE_FROM_BRA,
  GET_PLACE_FROM_GEO,
  EDIT_PLACE,
  DELETE_PLACE,
} from "../actions/types.js";

import _ from "lodash";

const initialState = {
  place: [],
  placefromorg: [],
  placefrombra: [],
  placefromgeo: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLACE:
      return {
        ...state,
        place: action.payload,
      };
    case GET_PLACE_FROM_ORG:
      return {
        ...state,
        placefromorg: action.payload,
      };
    case GET_PLACE_FROM_BRA:
      return {
        ...state,
        placefrombra: action.payload,
      };
    case GET_PLACE_FROM_GEO:
      return {
        ...state,
        placefromgeo: action.payload,
      };
    case DELETE_PLACE:
      return _.omit(state, action.payload);
    case EDIT_PLACE:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
}
