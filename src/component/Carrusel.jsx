import React from "react";

function Carrusel() {
  return (
    <div className="carousel  w-full h-full shadow-lg ">
      <div
        id="slide1"
        className="carousel-item relative w-full sm:h-64 md:h-96 lg:h-128 flex justify-center items-center h-full"
      >
        <img
          src="https://i.postimg.cc/FKG8ctBN/GX013106-00-02-11-00-Imagen-fija001.jpg"
          className="w-full h-96 object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full sm:h-64 md:h-96 lg:h-128 flex justify-center items-center h-full"
      >
        <img
          src="https://i.postimg.cc/4NZvCK32/alcantarilla.jpg"
          className="w-full h-96 object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full sm:h-64 md:h-96 lg:h-128 flex justify-center items-center h-full"
      >
        <img
          src="https://i.postimg.cc/tTKMJHX2/Piensa-luego-existe.jpg"
          className="w-full h-96 object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative w-full sm:h-64 md:h-96 lg:h-128 flex justify-center items-center h-full"
      >
        <img
          src="https://i.postimg.cc/pLQvfpwK/en-la-plaza.jpg"
          className="w-full h-96 object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle shadow-2xl">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle shadow-2xl">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
