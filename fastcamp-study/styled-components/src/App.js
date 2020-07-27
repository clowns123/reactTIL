import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  button {
    color: palevioletred;
  }
`;

// const StyledA = styled.a.attrs((props) => ({
//   href: props.href || "https://www.fastcampus.co.kr",
//   color: props.color || "palevioletred",
//   target: "_BLANK",
// }))`
//   color: ${(props) => props.color};
// `;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GlobalStyle />
        <p>
          <Button />
        </p>
      </header>
    </div>
  );
}

export default App;
