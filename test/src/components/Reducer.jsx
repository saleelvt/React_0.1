import React, { useReducer, useState } from "react";

// useReducer function contain the 2 argument one {previous state : llike O , and  dispatch function argument {that contain object or array eny things }}
const useRduceFunction = (previous, action) => {


    if (action==='increment'){

        return previous +1 
    }else if(action ==='decrement'){
        // if(previous>0){
        //     return previous-1
        // }
       return  previous >0 ? previous -1:0
    }
};

function Reducer() {
  //   const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");
  const [value, dispatch] = useReducer(useRduceFunction, 0);
  return (
    <div className="m-24">
      <div style={{ background: color }} className="  text-white border  w-24">
        <button
          className="bg-gray-300 text-black p-2 m-2 rounded"
          onClick={() => {
            // setCount(count + 1);
            dispatch('increment');
          }}
        >
            
          +
        </button>
        <h1>Counter : {value} </h1>
        {/* <label htmlFor="">{count}</label> */}

        <button
          className="  text-black m-2 bg-gray-300 p-2 rounded"
          onClick={() => {
            // setCount(count > 0 ? count - 1 : 0);
            dispatch('decrement');
          }}
        >
          -
        </button>
      </div>
      <button
        onClick={() => {
          setColor("green");
        }}
        className="  text-black m-2 bg-gray-300 p-2 rounded"
      >
        Green
      </button>
      <button
        onClick={() => {
          setColor("blue");
        }}
        className="  text-black m-2 bg-gray-300 p-2 rounded"
      >
        blue
      </button>
    </div>
  );
}

export default Reducer;
