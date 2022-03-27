import React from "react";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";
import { ToastContainer } from "react-toastify";
import "./index.css";

function App() {
  const todoList = useSelector(selectTodoList);

  const getCurrentDate = new Date().toDateString();

  const getHours = new Date().getHours();

  function displayMe() {
    if (getHours < 12) {
      return (
        <>
          <h1>Good Morning 🌅</h1>
        </>
      );
    } else if (getHours < 16) {
      return (
        <>
          <h1>Good Afternoon,🌞</h1>
        </>
      );
    } else if (getHours < 19) {
      return (
        <>
          <h1>Good Evening,🌇</h1>
        </>
      );
    } else {
      return (
        <>
          <p>Good Night 🌛</p>
        </>
      );
    }
  }

  return (
    <div className="app">
      <ToastContainer />
      <div className="app__container">
        <div className="welcome__greeting">
          <h1>{displayMe()}</h1>
          <h1>{getCurrentDate}</h1>
        </div>
        <div className="app__info">
          <h2>
            Welcome user, you currently have {todoList.length} activities on
            your list
          </h2>
        </div>
        <div className="app__todo--container">
          {todoList.map((item) => (
            <TodoItem
              name={item.activity}
              done={item.done}
              id={item.id}
              date={item.date}
              time={item.time}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
