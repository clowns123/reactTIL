import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem text="test" done={true} />
      <TodoItem text="asdf" done={true} />
      <TodoItem text="qwer" done={true} />
      <TodoItem text="zxcv" done={false} />
    </TodoListBlock>
  );
};

export default TodoList;
