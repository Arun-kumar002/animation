import React, { useState } from "react";

const Btn = () => {
  let [btn, setBtn] = useState(false);
  let check = () => {
    console.log("hi");
    setBtn(!btn);
  };
  return (
    <div>
      <button disabled={btn ? false : true}>send</button>
      <p onClick={check}>hi</p>
    </div>
  );
};

export default Btn;
