import React, { useReducer } from "react";
import LikeCountReducer from "./Reducer";
import './../App.css'

const LikeCount = () => {
  const [state, dispatch] = useReducer(LikeCountReducer, { likeCount: 0 });

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="box">
      <h1>Like Counter: {state.likeCount}</h1>
      <button onClick={handleIncrement}>Like</button>
      <button onClick={handleDecrement}>Unlike</button>
    </div>
  );
};

export default LikeCount;