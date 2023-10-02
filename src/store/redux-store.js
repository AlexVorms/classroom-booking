import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import buildingReducer from "../reducers/BuildingReducer";

let reducers = combineReducers({
    buildingPage: buildingReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;