import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [toDo, setTodo] = useState("");
  const [todos, settodos] = useState(() =>
    localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : []
  );
  const [edit, setEdit] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [editID, setEditID] = useState(false);
//   const names = ["Saleel", "Gouse", "Sreeji", "Simcy", "Mariyam"];



  const inputRef = useRef(null);
  useEffect(() => {
    console.log(todos);
    
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  let handleTodo = () => {

if(todos.include(toDo)){

    settodos(toDo)
}else{
    alert('this To do alredy adde')
}

    if (edit) {
      settodos((prevTodo) => {
        return prevTodo.map((todo) => {
          if (todo.id === editID) {
            return { ...todo, item: editItem };
          }
          return todo;
        });
      });
      
      setEdit(false);
      setEditID(null);
      setEditItem("");
    } else {
      if (toDo !== "") {
        settodos((prevTodo) => {
          return [
            ...prevTodo,
            { id: crypto.randomUUID(), item: toDo, completed: false },
          ];
        });
        setTodo("");
      } else {
        document.getElementById("add-item").placeholder =
          "Enter an item before push";
      }
    }
  };

  function handleCheck(id, completed) {


    // settodos((current) => {
    //   return current.map((todo) => {
    //     if (todo.id === id) {
    //       return { ...todo, completed };
    //     }
    //     return todo;
    //   });
    // });
  }

  const editTodo = (id, item) => {
    setEdit(true);
    setEditID(id);
    setEditItem(item);
  };

  const deleteTodo = (id) => {
    const confirm = window.confirm("Are you sure to delete");
    if (confirm) {
      settodos((current) => current.filter((todo) => todo.id !== id));
    }
  };

  const [heading, setHeading] = useState(
    names[Math.floor(Math.random() * names.length)]
  );

  let handleHeading = () => {
    setHeading(names[Math.floor(Math.random() * names.length)]);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <button
          onClick={handleHeading}
          className="border shadow-lg py-1 px-1 mb-2"
        >
          Change heading
        </button>
        <h1>{heading}</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Satarday </h2>
      </div>
      <div className="input">
        {edit ? (
          <input
            id="add-item"
            value={editItem}
            onChange={(e) => setEditItem(e.target.value)}
            ref={inputRef}
            type="text"
            placeholder=" Edit item..."
          />
        ) : (
          <input
            id="add-item"
            value={toDo}
            onChange={(e) => setTodo(e.target.value)}
            ref={inputRef}
            type="text"
            placeholder=" Add item..."
          />
        )}
        <i onClick={handleTodo} className="fas fa-plus"></i>
      </div>

      <div className="todos">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="todo">
              <div className="left">
                <input
                  type="checkbox"
                  onChange={(e) => handleCheck(todo.id, e.target.checked)}
                  checked={todo.completed && true}
                />
                {!todo.completed ? (
                  <p>{todo.item}</p>
                ) : (
                  <del>
                    <p>{todo.item}</p>
                  </del>
                )}
              </div>
              <div className="right"></div>

              <div className="">
                <p style={{ color: "blue" }}>lenght is : {todo.item.length}</p>
              </div>
              <div className="">
                <button className="btn" onClick={() => deleteTodo(todo.id)}>
                  X
                </button>
              </div>
              <div className="">
                <button
                  className="btn"
                  onClick={() => editTodo(todo.id, todo.item)}
                >
                  edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
