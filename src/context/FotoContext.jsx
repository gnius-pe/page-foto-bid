import { createContext, useContext, useState } from "react";
import { creacteFotoRequest, getFotosRequest } from "../api/foto";
//import { useNavigate } from "react-router-dom";
const FotoContext = createContext();
//const navigate = useNavigate();

export const useFotos = () => {
  const context = useContext(FotoContext);
  if (!context) {
    throw new Error("useFOtos munt be used within a FotoProvider");
  }
  return context;
};

export function FotoProvider({ children }) {
  const [fotos, setFotos] = useState([]);
  const [cargaFoto, setCargaFoto] = useState(false)
  const [navega, setNavega] = useState(false)

  const createFoto = async (foto) => {
    setCargaFoto(true)
    const res = await creacteFotoRequest(foto)
    //console.log(foto)
    console.log(res)
    if(res.status == 200){
        setCargaFoto(false)
        //navigate('/profile')
        setNavega(true)
    }
  };

  const getFotos = async () =>{
    try {
        const res = await getFotosRequest();
        setFotos(res.data.reverse())

    } catch (error) {
        console.log(error)
    }
  }

  return (
    <FotoContext.Provider value={{ fotos, createFoto,cargaFoto, getFotos,navega }}>
      {children}
    </FotoContext.Provider>
  );
}
