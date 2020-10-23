import { GET_PLACES, GET_PLACES_COUNT, GET_LATEST_ORG_IMPORT, GET_LATEST_BRA_IMPORT, GET_LATEST_GEO_IMPORT } from "../actions/types.js";

const initialState = {
  places: [],
  latestorgimport: [],
  latestbraimport: [],
  latestgeoimport: [],
  placescount: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLACES:
      return {
        ...state,
        places: action.payload,
      };
    case GET_PLACES_COUNT:
      return {
        ...state,
        placescount: action.payload,
      };
    case GET_LATEST_ORG_IMPORT:
      return {
        ...state,
        latestorgimport: action.payload,
      };
    case GET_LATEST_BRA_IMPORT:
      return {
        ...state,
        latestbraimport: action.payload,
      };
    case GET_LATEST_GEO_IMPORT:
      return {
        ...state,
        latestgeoimport: action.payload,
      };
    default:
      return state;
  }
}