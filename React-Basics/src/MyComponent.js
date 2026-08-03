import React, { useContext } from "react";
import { LoanInputContext } from "./Context/LoanFormInputContext";
function MyComponent() {
  
    const inputContext = useContext(LoanInputContext)
    return (
    <>
    <label>{inputContext.label}</label>
      <input 
        value={inputContext.value}
        onChange={(e) => inputContext.handelChange(inputContext.name, e.target.value)}
      />
    </>
  );
}

export default MyComponent;