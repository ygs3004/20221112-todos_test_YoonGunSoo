import styled from "styled-components";

function TodoTitle() {
  return <TodoTitleBlock>TodoListTest</TodoTitleBlock>;
}

const TodoTitleBlock = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  vertical-align: middle;

  padding-bottom: 20px;
  margin-bottom: 40px;

  border-bottom: 2px solid black;
  width: 50%;
`;

export default TodoTitle;
