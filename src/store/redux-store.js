import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import buildingReducer from "../reducers/BuildingReducer";
import SheduleReducer from "../reducers/SheduleReducer";
import BookingReducer from "../reducers/MyBookingReducer";
import toasterReducer from "../reducers/ToasterReduser";

let reducers = combineReducers({
    buildingPage: buildingReducer,
    shedulePage: SheduleReducer,
    bookingPage: BookingReducer,
    toaster: toasterReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;