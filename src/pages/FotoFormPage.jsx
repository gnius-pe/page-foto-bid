import React, { useState, useEffect, useRef } from "react";
import Navbar from "../component/Navbar";
import { useForm } from "react-hook-form";
import { useFotos } from "../context/FotoContext";
import { NavLink, useNavigate } from "react-router-dom";

function FotoFormPage() {
  const { register, handleSubmit } = useForm();
  const { fotos, createFoto, cargaFoto, navega, setNavega } = useFotos();
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const form = useRef();

  const onSubmit = handleSubmit((data) => {
    let fotoIformation = {
      description: data.description,
      image: data.image[0],
    };
    createFoto(fotoIformation);

    if (cargaFoto == false) {
      console.log("se navega");
    }
    //navigate("/profile");
    form.current.reset();
  });

  useEffect(() => {
    console.log(navega);
    setNavega(false)
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-3 ">
        {navega ? (
          <>
            <div role="alert" className="alert alert-success w-96">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="">Su foto se acaba de subir</span>
            </div>
            <div role="alert" className="alert alert-info w-96">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Nueva foto !</span>
              <NavLink to="/profile">ir al perfil</NavLink>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="w-96 h-96 flex bg-gray-200 shadow-lg justify-center items-center rounded-xl">
          <form ref={form} onSubmit={onSubmit} className="flex flex-col w-80 h-80 ">
            <textarea
              className="textarea textarea-bordered textarea-sm w-full max-w-xs my-3"
              rows="6"
              placeholder="Descripcion"
              {...register("description")}
              onChange={(e)=> setDescription(e.target.value)}
            ></textarea>
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm w-full h-12 max-w-xs my-3"
              {...register("image")}
              onChange={(e) => setImage(e.target.files[0])} 
              
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
