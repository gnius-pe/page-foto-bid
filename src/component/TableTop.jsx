import React from "react";

function TableTop() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-center">Name</th>
            <th className="text-center">Job</th>
            <th className="text-center">Likes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://i.postimg.cc/9Fd24vGd/henrry.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                Technician
              </span>
            </td>
            <td className="text-center w-3">124</td>
            <th>
              <button className="btn btn-ghost  btn-xs">Detalles</button>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://i.postimg.cc/VNVPQ188/iber.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <br />
              <span className="badge badge-ghost badge-sm">Tax</span>
            </td>
            <td className="text-center w-3">98</td>
            <th className="w-2">
              <button className="btn btn-ghost btn-xs">Detalles</button>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://i.postimg.cc/FKRXBzwp/jhimi.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td>
              Rowe-Schoen
              <br />
              <span className="badge badge-ghost badge-sm">
                Office
              </span>
            </td>
            <td className="text-center w-3">69</td>
            <th>
              <button className="btn btn-ghost btn-xs">Detalles</button>
            </th>
          </tr>
          {/* row 4 */}
        </tbody>
      </table>
    </div>
  );
}

export default TableTop;
