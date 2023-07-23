import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, del } from "../../redux/slice";
import { Fetch } from "../Fetch";
const Alldata = () => {
  let [data, setData] = useState(null);

  let dispatch = useDispatch();
  let user = useSelector((state) => state);
  let handleSubmit = async () => {
    dispatch(add());
  };
  let handledel = () => {
    dispatch(del());
  };
  useEffect(() => {
    setData(user.user);
  }, [handleSubmit, user]);
  return (
    <>
      <div>
        <button onClick={() => handleSubmit()}>fetch</button>
        <button onClick={() => handledel()}>del</button>
      </div>
      <div>
        {data?.map((value, index) => {
          return (
            <>
              <div>
                <p>{value.login}</p>
                <img src={value.avatar_url} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Alldata;
