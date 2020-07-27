import React from "react";

export default function Profile(props) {
  const id = props.match.params.id;
  console.log(id, typeof id);
  return (
    <>
      <div>Profile입니다. </div>
      {id && <p>id 는 {id} 입니다.</p>}
    </>
  );
}
