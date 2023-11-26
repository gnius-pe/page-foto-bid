import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api-serv-foto-bid.onrender.com',
    withCredentials: true
})

export default instance;