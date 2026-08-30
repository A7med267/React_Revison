export default function resultReducer(resultState, action) {
  console.log("calling reducer", resultState, action);

  const type = action.type;

  if (type === "Added") {
    const { firstNumberInput, secondNumberInput } = action.payload;

    return Number(firstNumberInput) + Number(secondNumberInput);
  } 
  
  else if (type === "subtracted") {
    const { firstNumberInput, secondNumberInput } = action.payload;

    return Number(firstNumberInput) - Number(secondNumberInput);
  } 
  
  else if (type === "multiplied") {
    const { firstNumberInput, secondNumberInput } = action.payload;

    return Number(firstNumberInput) * Number(secondNumberInput);
  } 
  
  else if (type === "divided") {
    const { firstNumberInput, secondNumberInput } = action.payload;

    return Number(firstNumberInput) / Number(secondNumberInput);
  }

  return resultState;
}