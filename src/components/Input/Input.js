import React from "react";
import "./Input.css";

function Input(props) {
  const {getInput,onChangeHandler,onClickHandler}=props;
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Your Location"
          value={getInput}
          onChange={onChangeHandler}
        />
        <button onClick={onClickHandler}>Get Forecast</button>
      </div>
    </>
  );
}

export default Input;
