// Calculator.jsx
import React, { useState } from "react";
import ButtonComponent from "./Buttons";

function ButtonContainer() {
  const [displayValue, setDisplayValue] = useState("");

  const handleButtonClick = (value) => {
    if (displayValue == 'Invalid expression'){
        setDisplayValue("")
    }
        setDisplayValue((prevValue) => prevValue + value);
 
  };

  const handleEqual=()=>{
    let ans;
   try{
     ans = String(eval(displayValue))
   } catch(error){
    ans ="Invalid expression"
   }
    setDisplayValue(ans)
  }

  return (
    <>
      <div id="display">
        <div id="inputs">
          <h3>{displayValue}</h3>
        </div>
        <div className="buttonContainer">
          <div className="NumBtn">
            <ButtonComponent count={10} onButtonClick={handleButtonClick} />
          </div>
          <div className="NumBtn">
            <button  onClick={() => handleButtonClick("+")}>+</button>
            <button onClick={() => handleButtonClick("-")}>-</button>
            <button onClick={() => handleButtonClick("*")}>*</button>
            <button onClick={() => handleButtonClick("/")}>/</button>
            <button  onClick={() => handleButtonClick(".")}>.</button>
            <button onClick={()=>setDisplayValue("")}>C</button>
            <button onClick={handleEqual}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonContainer;
