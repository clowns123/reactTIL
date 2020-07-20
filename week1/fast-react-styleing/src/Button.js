import React from "react";
import "./Button.scss";
import classNames from "classnames";

const Button = ({ children, size = "medium" }) => {
  // return <button className={["Button", size].join(" ")}>{children}</button>;
  return (
    <button className={classNames("Button", size || "medium")}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "medium",
};

export default Button;
