import { useState } from "react";

const useInputValue = (initialState) => {
  const [inputValue, setInputValue] = useState(initialState);

  const handleInputChange = (event) => {
    const { value } = event.target;

    setInputValue(valeu);
    console.log(value); ////////////
  };

  return [inputValue, handleInputChange];
};

export default useInputValue;
