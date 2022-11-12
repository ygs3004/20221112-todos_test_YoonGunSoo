import styled from "styled-components";

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

const TodoTemplateBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  width: 70vw;

  border-radius: 10px;
`;

export default TodoTemplate;
