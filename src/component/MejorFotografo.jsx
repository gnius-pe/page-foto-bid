import React from "react";

function MejorFotografo() {
  return (
    <div className="card card-side bg-base-100 shadow-xl h-72 mx-3 mt-10 lg:mt-0">
      <figure>
        <img
          src="https://i.postimg.cc/prQ17JMH/arte-con-firma.jpg"
          alt="Movie "
          className="w-52 h-96 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Fotografia mas comprada</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn bg-violet-800 text-neutral-50 shadow-xl">Mas detalles</button>
        </div>
      </div>
    </div>
  );
}

export default MejorFotografo;