import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/", 
    headers: {
        accept: "application/json",
        Authorization: 123, // Api token 
    },
});

export default instance;
