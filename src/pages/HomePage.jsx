import React from "react";
import { useNavigate } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import Carrusel from "../component/Carrusel";
import TableTop from "../component/TableTop";
import MejorFotografo from "../component/MejorFotografo";

function HomePage() {
  const navigate = useNavigate();

  const handlerLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-md flex justify-between">
        <a className="btn btn-ghost text-xl">Foto Bid</a>
        <button className="btn" onClick={handlerLogin}>
          Login
        </button>
      </div>
      <Carrusel />
      <div className="flex justify-around flex-col sm:flex-row my-9">
        <div className="">
          <h1>categoria con mas likes</h1>
        <TableTop className="w-full sm:w-1/2 sm:mr-2 " />
        </div>
        <MejorFotografo/>
      </div>
    </div>
  );
}

export default HomePage;
