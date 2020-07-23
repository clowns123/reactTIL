import React from "react";
import { withRouter } from "react-router-dom";

const LoginButton = ({ history }) => {
  return <button onClick={click}>로긴</button>;

  function click() {
    setTimeout(() => {
      console.log("이동");
      // 사용하면 안된다.
      // location.href= '/';
      history.push("/");
    }, 1000);
  }
};

export default withRouter(LoginButton);
