
import React, { useState, useEffect, useCallback, useContext } from "react";
import { demoContext } from "../Demo";

const Data = () => {
  let [data, setData] = useState([])
  const res = useContext(demoContext)

  console.log(res);

  return <div>data</div>;
};

export default Data;
