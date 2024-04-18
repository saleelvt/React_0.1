import React, { useContext } from "react";
import { MyContext } from "../App";

function Buttons() {
  const { name, setName,age } = useContext(MyContext);
  return (
    <div>
      <h1 className="text-center text-white">Welcome {name} my age is {age}</h1>
      <div className="container">
        
      </div>
      <button
        className="p-5 my-2 bg-gray-400"
        onClick={() => {
          setName("Gouse") ;
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Buttons;
