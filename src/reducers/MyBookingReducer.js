import { API } from "../Api/Api";

const GET_BOOKINGS = 'GET_BOOKINGS';
const SET_LOADING_BOOKINGS = "SET_LOADING_BOOKINGS";

let initialState = {
    mybookings: [],
    isLoading: false
 };

 const BookingReducer = (state = initialState, action) => {

    let  mybookingsState = {...state}
    switch(action.type){
        case GET_BOOKINGS:{
            mybookingsState.mybookings = action.data
            return  mybookingsState
        }
        case SET_LOADING_BOOKINGS:{
            mybookingsState.isLoading = action.result
            return mybookingsState
        }
        default: 
            return state;
    }
}

export const setBookingsAC = (data) => ({type: GET_BOOKINGS, data})
export const setLoadingBookingPageAC = (result) => ({type:SET_LOADING_BOOKINGS, result})

 export const getMyBookingsThunk =() =>(dispatch) =>{
        dispatch(setLoadingBookingPageAC(true))
        API.getBookings().then(data => {
            dispatch(setBookingsAC(data))
            dispatch(setLoadingBookingPageAC(false))
        })
        
 }

 export default BookingReducer;