import {instance} from "./axios"
import axios from "axios";

const getBuildings = () => {
    return instance.get("buildings")
        .then(response => response.data)
        .catch(error => error.response);
} 

const getAudiences =(id) => {
    return instance.get("audiences/" + id)
    .then(response => response.data)
    .catch(error => error.response);
}

const getShedule = (id, dateFrom, dateTo) => {
    return instance.get("shedule?id=" +id+ "&dateFrom=" + dateFrom + "&dateTo=" + dateTo)
    .then(response => response.data)
    .catch(error => error.response);
}
export const API = {
    getBuildings: getBuildings,
    getAudiences: getAudiences,
    getShedule: getShedule
}