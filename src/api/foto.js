import axios from "./axios";

export const getFotosRequest = () => axios.get('/fotos');
export const creacteFotoRequest = (foto) => axios.post(`/foto`,foto,{
    headers:{
        'Content-Type': 'multipart/form-data',
    },
});