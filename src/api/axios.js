import axios from "axios";

const instance = axios.create({
    baseURL: 'https://serv-api-user-photo.up.railway.app/api',
    withCredentials: true
})

export default instance;