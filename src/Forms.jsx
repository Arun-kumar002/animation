import React, { useState,useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Global } from "./api/context/context";
import { add } from "./redux/slice";
import jwt from 'jwt-encode'
const Forms = () => {
  let data=useContext(Global)
  let name=useSelector((state)=>state.name)
  let dispatch=useDispatch()
  const [state, setState] = useState([
    {
      subjectName: "",
      subCode: "",
      Question: "",
    },
  ]);

  const handleChange = (e, i) => {
    try {
      let alldata = [...state];
      alldata[i][e.target.name] = e.target.value;
      setState(alldata);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = () => {
    let secret = 'pavan';
    let token = jwt(state, secret);
    console.log(token);
    window.localStorage.setItem('tokenss',token)
    // navigate('/home')
  };
  const handleAdd = () => {
    const adder = {
      subjectName: "",
      subCode: "",
      Question: "",
    };

    setState([...state, adder]);
  };
  return (
    <div>
      {state.map((x, i) => {
        return (
          <>
          <h1>{name}</h1>
            <div>
              <label htmlFor="">subjectName</label>
              <input
                type="text"
                name="subjectName"
                id=""
                value={x.subjectName}
                onChange={(e) => {
                  handleChange(e, i);
                }}
              />
            </div>
            <div>
              <label htmlFor="">subCode</label>
              <input
                type="text"
                name="subCode"
                id=""
                value={x.subCode}
                onChange={(e) => {
                  handleChange(e, i);
                }}
              />
            </div>
            <div>
              <label htmlFor="">Question</label>
              <input
                type="text"
                name="Question"
                id=""
                value={x.Question}
                onChange={(e) => {
                  handleChange(e, i);
                }}
              />
            </div>
          </>
        );
      })}

      <div>
        <button onClick={() => handleAdd()}> add</button>
        <button onClick={() => handleSubmit()}>submit</button>
      </div>
    </div>
  );
};

export default Forms;
