import { useEffect, useState } from 'react'
import Counter from './counter';            
import './App.css'

function App() {

  const [count, setCount] = useState(0,() => {
    
 
    // const localVal = localStorage.getItem("SaleelLocal");
    // if (localVal) {
    //   return JSON.parse(localVal);
    // }
    // return 0;
  });

  // const [name, setName] = useState("Gouse")

  // useEffect(() => {
  //   localStorage.setItem("SaleelLocal", JSON.stringify(count));
  //   console.log(count);
    

  // }, [count]);

  
  return (
    <div className="bg-gray-100 w-1/3 shadow-lg h-56 p-6 rounded-lg flex justify-center sm:w-2/3 md:w-1/2 lg:w-1/3  m-24  p-4  border-4 " >
      <div className="bg-yellow-100 w-1/2 text-lg shadow-lg  rounded-sm   pb-24 flex justify-center items-center  border-4 " >
        <button onClick={() => {setCount(count + 1)
        console.log(count);  
      }
        
        } className='bg-gray-400 shadow-md rounded-md border-2 px-3 py-1' >
          add
        </button>
        <h5> Counter: {count}</h5>
        <Counter count={count}/>
      </div>
  

    </div>
  )
}

export default App;


























// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(() => {
//     const localVal = localStorage.getItem("SaleelLocal");
//     if (localVal) {
//       return JSON.parse(localVal);
//     }
//     return 0;
//   });

//   const [name, setName] = useState("Gouse")

//   useEffect(() => {
//     localStorage.setItem("SaleelLocal", JSON.stringify(count));
//     console.log(count);

//   }, [count]);

  
//   return (
//     <div className="bg-gray-100 w-1/3 shadow-lg h-56 p-6 rounded-lg flex justify-center sm:w-2/3 md:w-1/2 lg:w-1/3  m-24  p-4  border-4 " >
//       <div className="bg-yellow-100 w-1/2 text-lg shadow-lg  rounded-sm   pb-24 flex justify-center items-center  border-4 " >
//         <button onClick={() => setCount(count + 1)} className='bg-gray-400 shadow-md rounded-md border-2 px-3 py-1' >
//           add
//         </button>
//         <h5> Counter: {count}</h5>
//       </div>
  

//     </div>
//   )
// }

// export default App;


