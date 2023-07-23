import React from "react";

const Hoc = (Wrapper) => {
  let data = [
    {
      name: "arun",
    },
    {
      name: "vijay",
    },
  ];
  return () => {
    return <Wrapper data={data} />;
  };
};

export default Hoc;
