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
    .then(response => response)
    .catch(error => error.response);
}

const getBookings = () => {
    return instance.get('/31298ace-27ed-4b8c-82e8-47dfa05c58e0')
    .then(response => response)
    .catch(error => error.response);
}

const AddBooking = (data) => {
    return instance.post('/api/Booking', data)
    .then(response => response)
    .catch(error => error.response);
}
export const API = {
    getBuildings: getBuildings,
    getAudiences: getAudiences,
    getShedule: getShedule,
    getBookings: getBookings,
    AddBooking: AddBooking
}