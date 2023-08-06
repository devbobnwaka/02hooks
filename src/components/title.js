import React from "react";

function Title() {
    console.log('1-title');
  return (
    <>
      <h1>My App</h1>
      <hr/>
    </>
  );
}


export default React.memo(Title);
