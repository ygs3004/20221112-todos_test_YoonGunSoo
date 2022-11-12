import { useState } from "react";
import styled from "styled-components";

function TodoInputBox({ addTodo }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <TodoInputBlock onSubmit={onSubmit}>
      <TodoInput value={input} onChange={handleInput} placeholder="Add todo" />
      <InputBtnBlock>
        <InputBtn type="submit">ADD</InputBtn>
      </InputBtnBlock>
    </TodoInputBlock>
  );
}

const TodoInputBlock = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;

const TodoInput = styled.input`
  height: 30px;
`;

const InputBtn = styled.button`
  margin-top: 2px;
  width: 100%;
  height: 40px;
  background-color: antiquewhite;

  border: 1px solid black;

  cursor: pointer;
`;

const InputBtnBlock = styled.div`
  display: block;
`;

export default TodoInputBox;
