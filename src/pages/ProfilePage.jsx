import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import { useFotos } from "../context/FotoContext";
import { useAuth } from "../context/authContext";

function ProfilePage() {
  const { getFotos, fotos } = useFotos();
  const {user} = useAuth();

  useEffect(() => {
    getFotos();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="sm:h-72 h-96 flex justify-center items-center">
        <div className=" sm:h-64 sm:w-6/12 h-80 sm:flex sm:items-center flex justify-center items-center flex-col sm:flex-row sm:justify-center gap-7">
          <div className="avatar">
            <div className="w-32 sm:w-48 rounded-full">
              <img src="https://source.unsplash.com/100x100/?portrait" />
            </div>
          </div>
          <div className=" w-64">
            {" "}
            <p className="label">Nombre :{}</p>{" "}
            <p className="label">Apellido :</p>
            <p className="label">Edad :</p>
            <p className="label">Pais :</p>
            <p className="label">Correo : {user.email}</p>
          </div>
        </div>
      </div>
      <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Captura momentos</h2>
            <p className="font-serif text-sm dark:text-gray-400">
              Cada fotografía cuenta una historia única que perdura en el
              tiempo.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {fotos.map((foto) => (
              <article
                className="flex flex-col dark:bg-gray-900"
                key={foto._id}
              >
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src={foto.image.secure_url}
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracki uppercase hover:underline dark:text-violet-400"
                  >
                    Convenire
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                    {foto.description}
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 2, 2020</span>
                    <span>2.2K views</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
