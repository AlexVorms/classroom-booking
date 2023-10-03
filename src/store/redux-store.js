import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import buildingReducer from "../reducers/BuildingReducer";
import SheduleReducer from "../reducers/SheduleReducer";

let reducers = combineReducers({
    buildingPage: buildingReducer,
    shedulePage: SheduleReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;