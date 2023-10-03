import { API } from "../Api/Api";

const GET_SHEDULE = "GET_SHEDULE";

let initialState = {
   array: [],
//    { 
//     date: new Date(),
//     type: "",
//     id: "",
//     lessonNumber: 0, 
//     starts: 0,
//     ends: 0,
//     title: "",
//     lessonType: "",
//     professor:{
//         id:"",
//         fullName:"",
//         shortName:""
//      },
//     audience:{
//         id:"",
//         name:"",
//         shortName:"",
//         building:{
//             id:"",
//             name:"",
//             address:"",
//             latitude: 0.0,
//             longitude: 0.0
//             }
//         }
//     }
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

export default SheduleReducer;