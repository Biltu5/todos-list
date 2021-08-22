import "./App.css";
import Header from "./myComponents/Header";
import { AddToDo } from "./myComponents/AddToDo";
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";
import React, { useState, useEffect } from "react";
import { About } from "./myComponents/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) initTodo = [];
  else initTodo = JSON.parse(localStorage.getItem("todos"));

  const addTodo = (title, desc) => {
    var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const myTodo = {
      sno: (todos.length === 0) ? 0 : todos[todos.length - 1].sno + 1,
      title: title,
      date:date,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    // localStorage.setItem("todos",JSON.stringify(todos));

    console.log("Add todo", myTodo);
  };

  const onDelete = (todo) => {
    console.log("Delete file successfully", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  let [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header searchBar={true} title="To-Do Lists" todo={todos}/>
        <Switch>
          <Route exact path="/" render={() => {
              return (
                <>
                  <AddToDo addTodo={addTodo} />
                  <Todos todo={todos} onDelete={onDelete} />
                </>
              );
            }}>
          </Route>
          
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
