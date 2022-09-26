import React from "react";
import { useSelector, useDispatch } from "react-redux";
const depositPage = () => {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  const depositHandler = () => {
    dispatch({ type: "DEPOSIT", payload:10 });
  };
  return (
    <div>
      <h2> Balance : {balance} </h2>
      <button onClick={depositHandler}> Deposit Money </button>
    </div>
  );
};

export default depositPage;
