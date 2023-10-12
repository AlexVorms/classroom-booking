import { API } from "../Api/Api";
import {setErrorToast, setSuccessToast} from "./ToasterReduser";
import { setLoadingDeleteBookingAC, deleteBookingDataAC } from "./BookingDetailsReducer";

const GET_BOOKINGS = 'GET_BOOKINGS';
const SET_LOADING_BOOKINGS = "SET_LOADING_BOOKINGS";
const DELETE_BOOKING = "DELETE_BOOKING";

let initialState = {
    mybookings: [],
    isLoading: false,
 };

 const BookingReducer = (state = initialState, action) => {

    let  mybookingsState = {...state}
    mybookingsState.mybookings = [...state. mybookings];
    switch(action.type){
        case GET_BOOKINGS:{
            mybookingsState.mybookings = action.data
            return  mybookingsState
        }
        case SET_LOADING_BOOKINGS:{
            mybookingsState.isLoading = action.result
            return mybookingsState
        }
        case DELETE_BOOKING:{
            let array = [];
            mybookingsState.mybookings.map(g => {
                if(g.id !== action.id ){
                    array.push(g)
                }
            })
            mybookingsState.mybookings = array;
            return mybookingsState
        }
        default: 
            return state;
    }
}

export const setBookingsAC = (data) => ({type: GET_BOOKINGS, data})
export const setLoadingBookingPageAC = (result) => ({type:SET_LOADING_BOOKINGS, result})
export const deleteBookingAC = (id) => ({type:DELETE_BOOKING, id})

 export const getMyBookingsThunk =() =>(dispatch) =>{
        dispatch(setLoadingBookingPageAC(true))
        API.getBookings().then(response => {
            if(response.status === 200){
            dispatch(setBookingsAC(response.data))
            dispatch(setLoadingBookingPageAC(false))
            }
            else{
                dispatch(setErrorToast("Что-то пошло не так"))
                dispatch(setLoadingBookingPageAC(false))
            }
        })
        
 }

 export const deleteBookingPage = (id) => (dispatch) =>{
    API.DeleteBooking(id).then(async response => {
        if(response.status === 200){
            dispatch(deleteBookingAC(id));
            dispatch(setSuccessToast("Ваша заявка была успешно удалена"))
            await dispatch(setLoadingDeleteBookingAC(true))
            await dispatch(setLoadingDeleteBookingAC(false))
            dispatch(deleteBookingDataAC())
        }
        else{
            dispatch(setErrorToast("Что-то пошло не так"))

        }
    });
 }
 export default BookingReducer;