import { API } from "../Api/Api";

const GET_BUILDINGS = "GET_BUILDINGS";
const GET_AUDIENCES = "GET_AUDIENCES";

let initialState = {
    building: [],
    audiences:[],
    isFetching: false
};

const buildingReducer = (state = initialState, action) => {
    let buildingState = {...state}
    buildingState.building = [...state.building]

    switch(action.type){
        case GET_BUILDINGS:{
            return{
                ...state, building: action.building
            }
        }
        case GET_AUDIENCES:{
            return{
                ...state, audiences: action.audiences
            }
        }
        default: 
            return state;
    }
}

export const setBuildingAC = (building) => ({type:GET_BUILDINGS, building})
export const setAudiencesAC = (audiences) => ({type:GET_AUDIENCES, audiences})

export function getBuildingsThunk(){ 
    return async(dispatch) => {
     await API.getBuildings().then(data =>{
          dispatch(setBuildingAC(data))
        })
    }
}

export function getAudiencesThunk(id){
    return (dispatch) => {
        API.getAudiences(id).then(data =>{
            dispatch(setAudiencesAC(data))
        })
    }
}
export default buildingReducer