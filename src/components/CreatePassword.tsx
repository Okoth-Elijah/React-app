import { useState } from "react";

const CreatePassword = () => {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("red");

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
    setTheme("pupple");
  };
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setTheme("pink");
  };

  return (
    <>
      <button onClick={decrement} type="button" className="btn btn-danger me-3">
        -
      </button>
      <span className="fs-1">{count}</span>
      <span>{theme}</span>
      <button
        onClick={increment}
        type="button"
        className="btn btn-success ms-3"
      >
        +
      </button>
    </>
  );
};

export default CreatePassword;
