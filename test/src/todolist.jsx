import React from "react";
import { useState } from "react";
import './App.css'

function App() {

const [toDo, setTodo] = useState('')
const [todos,settodos]=useState([])
    


    return (

        <div className="app">
  

            <div className="mainHeading">
                <h1>ToDo List</h1>
            </div>
            <div className="subHeading">
                <br />
                <h2>Whoop, it's Satarday </h2>
            </div>
            <div className="input">

                <input value={toDo} onChange={(e)=> setTodo(e.target.value) } type="text" placeholder=" Add item..." />
                <i onClick={() =>{
settodos([...todos, toDo])


                } } className="fas fa-plus"></i>

            </div>
            <div className="todos">

              { todos.map((item)=>{
                return(
                    <div className="todo">
                    <div className="left">
                        <input  type="checkbox"  name="" id="" />
                        <p>{item}</p>
                    </div>
                    <div className="right">
                        <i className="fas fa-times"></i>
                    </div>
                </div>
                )
              })}

            </div>
        </div>
    )
}
export default App