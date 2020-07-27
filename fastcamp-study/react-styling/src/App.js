import React from "react";
import logo from "./logo.svg";
// import "./App.css"; // 1
// import styles from "./App.module.css"; // 2
// import "./App.scss"; // or import "./App.ssss" // 3
import styles from "./App.module.scss"; // 4
import Button from "./components/Button";
console.log(styles);
function App() {
  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <p>
          <Button />
        </p>
      </header>
    </div>
  );
}

export default App;
