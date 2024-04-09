import React from "react";

function Table({ data }) {
  return (
    <div className="m-4 md:m-24 border rounded-sm shadow-md w-1/3">
      <div className="flex  bg-gray-300 p-2">
        <table className="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Place</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item,index) => {

                return(
                    <tr key={index}>
                    <td >{item.name}</td>
                    <td>{item.place}</td>
                    <td>{item.age}</td>
                  </tr>
                )
             
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
