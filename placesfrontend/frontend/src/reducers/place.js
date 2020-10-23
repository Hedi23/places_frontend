import { GET_PLACE, GET_PLACE_FROM_ORG, GET_PLACE_FROM_BRA, GET_PLACE_FROM_GEO} from "../actions/types.js";

const initialState = {
  place: [],
  placefromorg: [],
  placefrombra: [],
  placefromgeo: [],
  countplaces: ''
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
    case GET_COUNT_PLACES:
        return {
            ...state,
            countplaces: action.payload,
        };
    default:
      return state;
  }
}