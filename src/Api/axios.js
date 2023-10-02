import axios from "axios";


export const instance = axios.create({
    baseURL: "https://localhost:7251/"
    //headers: {'Authorization': `Bearer ${localStorage.getItem("user")}`}
});

instance.interceptors.response.use(response => response,
    error => {
        if (error.response?.status === 401) {
            // localStorage.removeItem('user');
            // deleteUserData();
            // window.location.pathname = "/login";
        }
        return Promise.reject(error);
    });