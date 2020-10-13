import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import placesReducer from "./places";
import partnersReducer from "./partners";
import partnerReducer from "./partner";

export default combineReducers({
  form: formReducer,
  places: placesReducer,
  partners: partnersReducer,
  partner: partnerReducer,
});
