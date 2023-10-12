import { API } from "../Api/Api";
import {setErrorToast, setSuccessToast} from "./ToasterReduser";

const GET_BOOKINGS_DETAILS = 'GET_BOOKINGS_DETAILS ';
const SET_LOADING_BOOKINGS_DETAILS = "SET_LOADING_BOOKINGS_DETAILS";
const SET_LOADING_DELETE_BOOKINGS = "SET_LOADING_DELETE_BOOKINGS";
const DELETE_BOOKINGS_DETAILS = "DELETE_BOOKINGS_DETAILS"

let initialState = {
    bookingDetails: [],
    isLoading: false,
    isDelete: false
 };

 const BookingDetailsReducer = (state = initialState, action) => {

    let  bookingsState = {...state}
    switch(action.type){
        case GET_BOOKINGS_DETAILS :{
            bookingsState.bookingDetails = action.data
            return  bookingsState
        }
        case SET_LOADING_BOOKINGS_DETAILS:{
            bookingsState.isLoading = action.result
            return bookingsState
        }
        case SET_LOADING_DELETE_BOOKINGS:{
            bookingsState.isDelete = action.result
            return bookingsState
        }
        case DELETE_BOOKINGS_DETAILS:
            bookingsState.bookingDetails = [];
            bookingsState.isDelete = false;
        default: 
            return state;
    }
}

export const setBookingsDetailsAC = (data) => ({type: GET_BOOKINGS_DETAILS , data})
export const setLoadingBookingDetailsPageAC = (result) => ({type:SET_LOADING_BOOKINGS_DETAILS, result})
export const setLoadingDeleteBookingAC = (result) => ({type:SET_LOADING_DELETE_BOOKINGS, result})
export const deleteBookingDataAC = () => ({type:DELETE_BOOKINGS_DETAILS})

export const getBookingsDetailsThunk = (id) =>(dispatch) =>{
        dispatch(setLoadingBookingDetailsPageAC(true))
        API.GetBookingDetails(id).then(response => {
            if(response.status === 200){
            dispatch(setBookingsDetailsAC(response.data))
            dispatch(setLoadingBookingDetailsPageAC(false))
            }
            else{
                dispatch(setErrorToast("Что-то пошло не так"))
                dispatch(setLoadingBookingDetailsPageAC(false))
            }
        })
        
 }

 export default BookingDetailsReducer;