import React, { useReducer } from "react";
import useRduceFunction from "../reducers/reducerFunctions";

// useReducer function contain the 2 argument one {previous state : llike O , and  dispatch function argument {that contain object or array eny things }}

const intialState = {
  value: 0,
  color: "black",
};

function Reducer() {
  //   const [count, setCount] = useState(0);
  // const [color, setColor] = useState("black");

  const [states, dispatch] = useReducer(useRduceFunction, intialState);
  return (
    <div className="m-24">
      <div
        style={{ backgroundColor: states.color }}
        className={`bg-${states.color} text-white border  w-24`}
      >
        <button
          className="bg-gray-300 text-black p-2 m-2 rounded"
          onClick={() => {
            // setCount(count + 1);
            dispatch({
              type:'change-value',
              payload:+1
            });
          }}
        >
          +
        </button>
        <h1>Counter : {states.value} </h1>
        {/* <label htmlFor="">{count}</label> */}

        <button
          className="  text-black m-2 bg-gray-300 p-2 rounded"
          onClick={() => {
            // setCount(count > 0 ? count - 1 : 0);
            dispatch({
              type:'change-value',
              payload:-1
            });
          }}
        >
          -
        </button>
      </div>
      <button
        onClick={() => {
          dispatch({
            type : 'change-color',
            payload:'green'
          });
        }}
        className="  text-black m-2 bg-gray-300 p-2 rounded"
      >
        Green
      </button>
      <button
        onClick={() => {
          dispatch({
            type : 'change-color',
            payload:'blue'
          });
        }}
        className="  text-black m-2 bg-gray-300 p-2 rounded"
      >
        blue
      </button>
    </div>
  );
}

export default Reducer;
