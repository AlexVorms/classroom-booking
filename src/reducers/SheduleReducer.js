import { API } from "../Api/Api";

const GET_SHEDULE = "GET_SHEDULE";

let initialState = {
   array: [],
};

const SheduleReducer = (state = initialState, action) => {

    let lessonsState = {...state}
    switch(action.type){
        case GET_SHEDULE:{
            lessonsState.array = action.data
            return lessonsState
        }
        default: 
            return state;
    }
}

export const setSheduleAC = (data) => ({type:GET_SHEDULE, data})

export function getSheduleThunk(id, dateFrom, dateTo){
    return (dispatch) => {
       API.getShedule(id, dateFrom, dateTo).then(data => {
            dispatch(setSheduleAC(data))
        })
    }
}

export function AddBookingThunk(data){
    return(dispatch)=>{
        API.AddBooking(data).then(response =>{
            console.log(response)
        } )
    }
}
export default SheduleReducer;