import React from "react";
import { useSelector } from "react-redux";

const homePage = () => {
  const balance = useSelector(state =  state.balance);
  return <div>
    <h2> Balance :{balance} </h2>
  </div>
};

export default homePage;
