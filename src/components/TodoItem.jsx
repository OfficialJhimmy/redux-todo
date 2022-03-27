import React from "react";
import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";
import { AiFillDelete } from "react-icons/ai";

function TodoItem({ name, done, id, date, time }) {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  return (
    <>
      <div className="todoItem">
        <div>
          <h3>Activity 🥅</h3>
          <p>{name}</p>
        </div>
        <div>
          <h3>Date 📅</h3>
          <p>{date}</p>
        </div>
        <div>
          <h3>Time ⌚</h3>
          <p>{time}</p>
        </div>

        <button onClick={handleCheck} className="todoitem__btn">
          <AiFillDelete className="delete__icon" />
        </button>
      </div>
    </>
  );
}

export default TodoItem;
