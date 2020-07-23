import React from "react";
import quertString from "query-string";
import { Redirect } from "react-router-dom";

export default function About(props) {
  //   const name = new URLSearchParams(props.location.search).get("name");
  const { name } = quertString.parse(props.location.search);

  if (!name) {
    return (
      <div>
        <h1>About no</h1>
      </div>
    );
  }
  if (name === "redirect") {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>About : {name}</h1>
    </div>
  );
}
