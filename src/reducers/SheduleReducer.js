import { API } from "../Api/Api";
import {setErrorToast, setSuccessToast} from "./ToasterReduser";

const GET_SHEDULE = "GET_SHEDULE";
const SET_LOADING_SHEDULE = "SET_LOADING_SHEDULE";

let initialState = {
   array: [],
   isLoading: false,
};

const SheduleReducer = (state = initialState, action) => {

    let lessonsState = {...state}
    switch(action.type){
        case GET_SHEDULE:{
            lessonsState.array = action.data
            return lessonsState
        }
        case SET_LOADING_SHEDULE:{
            lessonsState.isLoading = action.result
            return lessonsState
        }
        default: 
            return state;
    }
}

export const setSheduleAC = (data) => ({type:GET_SHEDULE, data})
export const setSheduleLoadingAC = (result) => ({type:SET_LOADING_SHEDULE, result})

export const getSheduleThunk =(id, dateFrom, dateTo) => (dispatch) =>{
        dispatch(setSheduleLoadingAC(true));
       API.getShedule(id, dateFrom, dateTo).then(response => {
            if(response.status === 200) {
            dispatch(setSheduleAC(response.data))
            dispatch(setSheduleLoadingAC(false));
            }
            else{
                dispatch(setErrorToast("Что-то пошло не так"))
                dispatch(setSheduleLoadingAC(false));
            }
        })
}

export const AddBookingThunk = (data) =>(dispatch) =>{
        API.AddBooking(data).then(response =>{
            debugger
            if(response.status === 200){
                dispatch(setSuccessToast("Заявка принята"))
            }
            else{
                dispatch(setErrorToast("Что-то пошло не так"))
            }
        } )

}
export default SheduleReducer;