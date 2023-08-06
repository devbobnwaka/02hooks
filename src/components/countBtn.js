import React from "react";

function CountBtn({handleCount}) {
    console.log('3-countBtn');
    return (
      <>
        <button onClick={handleCount}>Increment the Count</button>
      </>
    );
  }
  
  
export default React.memo(CountBtn);
  