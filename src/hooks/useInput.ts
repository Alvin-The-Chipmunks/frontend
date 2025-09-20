import { useState } from "react";

export function useInput(initialValue = "") {
  const [enteredValue, setEnteredValue] = useState(initialValue);

  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setEnteredValue(event?.target?.value);
  }

  function inputReset() {
    setEnteredValue("");
  }

  return {
    value: enteredValue,
    onChange,
    inputReset,
  };
}
