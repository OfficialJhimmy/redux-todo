import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "./Input.css";

function Input() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const addTodo = () => {
    dispatch(
      saveTodo({
        activity: input,
        done: false,
        id: Date.now(),
        date: selectedDate.toDateString(),
        time: selectedDate.toLocaleTimeString(),
      })
    );
  };
  return (
    <div className="input__container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input__text"
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="dialog"
          format="MM/dd/yyy"
          margin="normal"
          id="date-picker"
          label="Pick a Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Pick a Time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
      <button onClick={addTodo} className="input__btn">
        Add
      </button>
    </div>
  );
}

export default Input;
