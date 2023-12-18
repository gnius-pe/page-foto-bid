import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import { useForm } from "react-hook-form";
import { useFotos } from "../context/FotoContext";
import { useNavigate } from "react-router-dom";

function FotoFormPage() {
  
  const { register, handleSubmit } = useForm();
  const { fotos, createFoto, cargaFoto, navega} = useFotos();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    let fotoIformation = {
      description: data.description,
      image: data.image[0],
    };
    createFoto(fotoIformation);
    //navigate('/profile')
    if(cargaFoto ==false){
      console.log("se navega")
    }
  });

  useEffect(()=>{
    console.log(navega)
  },[])

  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="w-72 h-96 flex bg-slate-600 justify-center items-center">
          <form onSubmit={onSubmit} className="flex flex-col w-64 h-80">
            <textarea
              className="textarea textarea-bordered textarea-sm w-full max-w-xs my-3"
              rows="6"
              placeholder="Descripcion"
              {...register("description")}
            ></textarea>
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm w-full h-12 max-w-xs my-3"
              {...register("image")}
            ></input>
            <button className="btn btn-primary my-3" disabled={cargaFoto}>
              Subir
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FotoFormPage;
