import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   todoList: [],
  todoList: localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
      localStorage.setItem("todoList", JSON.stringify(state.todoList));

      // toast.success("Activity Added", {
      //   position: "top-center",
      //   theme: "colored",
      // });
    },

    setCheck: (state, action) => {
      const deleted = state.todoList.filter(
        (item) => item.id !== action.payload
      );

      state.todoList = deleted;
      localStorage.setItem("todoList", JSON.stringify(state.todoList));

      // toast.error("Activity conpleted", {
      //   position: "top-center",
      //   theme: "colored",
      // });
    },
  },
});

export const { saveTodo, setCheck } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
