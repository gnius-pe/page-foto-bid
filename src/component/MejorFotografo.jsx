import React from "react";

function MejorFotografo() {
  return (
    <div className="card card-side bg-base-100 shadow-xl my-6">
      <figure>
        <img
          src="https://i.postimg.cc/zB3xbZF9/318570262-3455958431302283-6094704812653594676-n.jpg"
          alt="Movie "
          className="w-60 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
}

export default MejorFotografo;