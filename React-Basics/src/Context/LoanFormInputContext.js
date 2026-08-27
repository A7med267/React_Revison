import { createContext } from "react";

export let LoanInputContext = createContext({
  labelTitel: "",
  name:"",
  handelChange: null,
  inputValue: null,
});
