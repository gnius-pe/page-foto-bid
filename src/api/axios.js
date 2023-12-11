import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api-serv-foto-bid.onrender.com/api',
    withCredentials: true
})

export default instance;