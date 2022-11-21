import { Children, useRef, useState } from "react";
import styled from "styled-components";
import "./App.css";
import TodoInputBox from "./components/TodoInputBox";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import TodoTitle from "./components/TodoTitle";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "해야 할 일을 입력해주세요",
      done: false,
    },
    {
      id: 2,
      text: "추가, 제거, 체크가 가능합니다",
      done: true,
    },
  ]);

  const nextId = useRef(3);

  const addTodo = (input) => {
    setTodos([
      ...todos,
      {
        id: nextId.current,
        text: input,
        done: true,
      },
    ]);
    nextId.current++;
    console.log(todos);
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <TodoTemplate>
      <TodoTitle>{Children}</TodoTitle>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}>
        {Children}
      </TodoList>
      <TodoInputBox addTodo={addTodo} />
    </TodoTemplate>
  );
}

export default App;
