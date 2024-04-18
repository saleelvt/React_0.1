import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import Buttons from "./Buttons";

function MultiColor() {
  const { name,setName } = useContext(MyContext);

  const [color, setColor] = useState("black");

  return (
    <div className="bg-gray-300   ">
      <div
        style={{ background: color }}
        className=" flex flex-col items-center m-4 space-y-8"
      >
        <button
          onClick={() => {
            setColor("red");
          }}
          className=" px-4 py-4 bg-gray-400"
        >
          {name}
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
          className="px-5 py-2 bg-gray-400"
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("yellow");
          }}
          className="px-4 py-4 bg-gray-400"
        >
          Yellow
        </button>


      </div>
    </div>
  );
}

export default MultiColor;
