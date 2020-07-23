import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";

const GolbalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GolbalStyle />
      <TodoTemplate>안녕</TodoTemplate>
    </>
  );
}

export default App;
