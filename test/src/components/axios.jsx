import axios from "axios";
import { useState } from "react";

function Axios() {

    const [state,setState]=useState([])
  return (
    
    <div className=" bg-gray-700">
      <div>
        <button
          onClick={() => {
            axios
              .get("https://jsonplaceholder.typicode.com/users/1")
              .then((respons) => {
                console.log(respons.data);
                setState([respons.data])
              })

              .catch((error)=>{
                console.log('not working ',error);
              })
              
          }}
          className="p-2 bg-gray-500"
        >
     
          Click me
        </button>
      </div>

      <div className="">
        {
<h1>Saele {state ? state[0] :''}</h1>

        }
      {
        state.map((x,index)=>{
            return(

                <div key={index} className=" bg-gray-300">

                    <h1>{index +1}</h1>,
                    <h1>name:{x.name}</h1>,
                    <h1>email:{x.email}</h1>
                    <h1>email:{x.address.street}</h1>
                </div>
            )
        })
      }
       
      </div>
    </div>
  );
}

export default Axios;
