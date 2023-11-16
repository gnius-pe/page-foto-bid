import React from "react";

function MayorFotoCompModal() {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-violet-800 text-neutral-50 shadow-xl"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Mas detalles
      </button>
      <dialog id="my_modal_5" className="modal sm:modal-middle backdrop-filter backdrop-blur-md">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Fotografia mas comprada</h3>
          <p className="py-4">
            Detalles de la fotografia y el autor :3
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-violet-800 text-neutral-50 shadow-xl">Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default MayorFotoCompModal;
