import React from "react";

function Welcome(props) {
  var { name, age } = props;
  return (
    <>
      <h1>Hey !{name}</h1>
      <h2>"Welcome to Newton School."</h2>
    </>
  );
}
export default Welcome;
