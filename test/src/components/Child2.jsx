import React from "react";

function Child2({sendtoChild}) {
  let data = "saleel is a good boy ";
  let parentHandle = () => {
    sendtoChild(data);
  };

  return (
    <div>
      <button onClick={parentHandle}>click me </button>
    </div>
  );
}

export default Child2;
