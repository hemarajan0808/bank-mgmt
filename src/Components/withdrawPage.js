import React from "react";
import { useSelector, useDispatch } from "react-redux";


const withdrawPage = () => {
    const balance = useSelector(state => state.balance)
    const dispatch = useDispatch();
    function withdrawHandler(){
        dispatch({type:'WITHDRAW', payload:5})
    }

  return (
    <div>
      <h2> welcome to Withdraw Page </h2>
      <button onClick={withdrawHandler}>Withdraw Money</button>
    </div>
  );
};

export default withdrawPage;
