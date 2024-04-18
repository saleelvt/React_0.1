import React, { useEffect, useState, useRef, createContext, Component } from "react";

import About from "./components/about";
import Profile from "./components/profile";
import Child2 from "./components/Child2";
import Effect from "./components/effect";
// import Like from './components/like'
import Todolist from "./todolist";
import "./App.css";
import Child from "./components/child";
import Form from "./components/form";
import Table from "./components/table";
import Child3 from "./components/child3";
import NavBar from "./Netflix_cmt/NavBar/NavBar";
import Header from "./Netflix_cmt/header/header"
import MultiColor from "./components/multiColor";
import Buttons from "./components/Buttons";
import Context from "./components/context";
import Just from "./components/just";
import Banner from './Netflix_cmt/Banner/Banner'
import RowPost from './Netflix_cmt/RowPost/RowPost'
import Axios from './components/axios'
 

export const MyContext=createContext()
function App(){
  const name='saleel'
const age ='21'
const place ='valanchery '

  return(
    
    <React.Fragment>

{/*    
    <NavBar/>
    <Header/>
    <Banner/>
    <RowPost/> */}


<Axios/>

    </React.Fragment>
  )
}









// useContext  sample method 


// function App() {

// const [name,setName] = useState("Saleel");
// const age='21'
// return (
//   <React.Fragment>


//     <MyContext.Provider value={{ name,setName,age }}>


//       <MultiColor />

//        <Buttons />
//     </MyContext.Provider>
  
  
  
//   </React.Fragment>
// );

// }


























// const [name ,setName]=useState('')
// const [place ,setPlace]=useState('')
// const [age ,setAge]=useState('')
// const [status1,setStatus1]=useState(false)
// const [status2,setStatus2]=useState(false)
// const [status3,setStatus3]=useState(false)

// const [details , setDetails]=useState([])

// const nameHandle=(element)=>{
// setName(element.target.value)
// }
// const placeHandle=(element)=>{
// setPlace(element.target.value)
// }
// const ageHandle=(element)=>{
// setAge(element.target.value)
// }

// const handledata=()=>{

//   if (name=='') {
//     setStatus1(true)
//   }
//   if (place=='') {
//     setStatus2(true)
//   }
//   if (age=='') {
//     setStatus3(true)
//   }

//   setDetails([...details,{name,age,place}])

//   setAge('')
//   setName('')
//   setPlace('')
// }
// useEffect(()=>{

//   console.log(details);

// },[details])

// console.log(name,age,place);

{
  /* <div className=" m-20 p-3  border rounded-sm shadow-md w-56">
        <div className="p-2 ">
          <input value={name} onChange={nameHandle} className=" border rounded-sm shadow-md" type="text" placeholder={status1 ? "enter valied name" :"Enter you name "  } />
        </div>
        <div className="p-2 ">
          <input
            value={place} onChange={placeHandle} className=" border rounded-sm shadow-md" placeholder={status2?'Enter valid place ':'Enter your place'}
            type="text"
          />
        </div>
        <div className="p-2">
          <input
            value={age} onChange={ageHandle} className=" border rounded-sm shadow-md" placeholder={status3?'enter valid age ':'enter your age'}
     
            type="text"
          />
        </div>

        <button onClick={handledata } className="ml-20 mt-2">Submit</button>
      </div>

      <Table data={details}  /> */
}

// function App() {
//   const [count, setCount] = useState(0);
//   const [status, setStatus] = useState("");
//   const [data, setData] = useState("");

//   let inputref=useRef(null)

//   useEffect(()=>{

//   },[])

//   return (
//     <React.Fragment>
//       {/* <div className="m-24 bg-gray-400 w-1/4 p-4  ">
//         <div className=" flex justify-center ">
//         <button  onClick={()=> setCount(count+1)} className="btn-lg rounded shadow-lg border  px-2 py-1 ">+</button>
//         <h1>Counter:{count} </h1>
//         <button onClick={()=> setCount(count >1 ?count-1 : 0)} className="btn-lg rounded shadow-lg border  px-2 py-1 ">-</button>
//         </div>

//         <button className="btn-lg rounded shadow-lg border  px-2 py-1 m-2 ">Increment </button>
//         <button className="btn-lg rounded shadow-lg border  px-2 py-1 m-1 ">pause Count</button>
//         <button className="btn-lg rounded shadow-lg border  px-2 py-1 "> Decrement</button>
//       </div> */}

//       <div>
//         <input type="text" ref={inputref} />
//       </div>

//       <Todolist/>
//     </React.Fragment>
//   );
// }

// function App(params) {

//   const [color,setColor]=useState('black')
//   return (
//     <React.Fragment>

//       <h1 style={{color: color, background: "white"}}> saleel</h1>
// <button onClick={()=> setColor('blue')} className=" bg-blue-600">blue</button>
// <button onClick={()=> setColor('red')} className=" bg-red-600">red</button>
// <button onClick={()=> setColor('green')} className=" bg-green-600">green</button>
//     </React.Fragment>
//   )

// }

// function App() {
//   const [name, setName] = useState("");
//   const [place, setPlace] = useState("");
//   const [age, setAge] = useState("");
//   const [nameVali, setNameVali] = useState(false);

//   const [lastName, setLastName] = useState([]);
//   let handler = () => {
//     setLastName((previous) => {
//       if (name === "") {
//         setNameVali(true);
//         return previous;
//       }

//       setLastName((previous) => {
//         return [...lastName,
//           { name, age, place}
//         ];
//       });

//     });

//     setName("");
//     setPlace("");
//     setAge("");
//   };

//   useEffect(() => {
//     console.log(lastName);
//   }, [lastName]);

//   return (
//     <React.Fragment>
//       <div className=" m-20 p-3  border rounded-sm shadow-md w-56">
//         <div className="p-2 ">
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className=" border rounded-sm shadow-md"
//             placeholder={nameVali ? "Please provide a name" : "Enter Name"}
//             type="text"
//           />
//         </div>
//         <div className="p-2 ">
//           <input
//             value={place}
//             onChange={(e) => setPlace(e.target.value)}
//             className=" border rounded-sm shadow-md"
//             placeholder="Enter Place"
//             type="text"
//           />
//         </div>
//         <div className="p-2">
//           <input
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             className=" border rounded-sm shadow-md"
//             placeholder="Enter Age"
//             type="text"
//           />
//         </div>

//         <button onClick={handler} className="ml-20 mt-2">
//           Submit
//         </button>
//       </div>

//       <Table data={lastName} />
//     </React.Fragment>
//   );

// const [data,setdata]=useState(0)

// const handleDataFromChild=(data)=>{
//   setdata(data)
// }
// <Effect sentToChild={handleDataFromChild}/>
// <h1 > Counter : {data}</h1>

// const [dataFromChild,setDataFromChild]=useState('')

// const handleDataFromChild=(data)=>{
//   setDataFromChild(data)
// }

// return (
//   <React.Fragment>

//   <h1> This data from child :{dataFromChild} </h1>

//   <Child  sendDataToParent={handleDataFromChild}/>

//   </React.Fragment>

export default App;

/* <div className="App">

<button onClick={()=>{
  
  setCount(count+1)

  }}>add</button>

<Counter data={count} />



<button onClick={()=>{
  if(count>0){

    setCount(count-1)}
  }

} >remove</button>

</div> */

// routing with about and profitl,.e

// function App() {
//   const [state,setState]=useState('')

//   let components
//   if(state==='About'){
//     components= <About/>
//   }
//   if(state==='Profile'){
//     components=<Profile/>
//   }
//   return (

//     <React.Fragment >

// <div className="div  m-12">
//   <h1><button className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
//     onClick={ ()=> setState('About')} > About </button></h1>
//   <br />
//   <h1><button className='saleel bg-blue-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded '  onClick={()=> setState('Profile')} > Profile </button></h1>
// </div>

// {components}

//     </React.Fragment>

// )

// routing about or profile
//---------------------------

// const [count, setCount] = useState(0)
// ,() => {

// const localVal = localStorage.getItem("SaleelLocal");
// if (localVal) {
//   return JSON.parse(localVal);
// }
// return 0;
// });

// useEffect(() => {
// console.log(count);
// }, [count]);

// const [name, setName] = useState("Gouse")
//   localStorage.setItem("SaleelLocal", JSON.stringify(count));

//   let obj =[
//     {name: 'saleel',age:21,place : 'valanchery' },
//     {name: 'ijas',age:22,place : 'kannur' },
//     {name: 'sreejith',age:35,place : 'mavoor' },

// ]

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
