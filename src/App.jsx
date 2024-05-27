import { useState } from "react";
import "./App.css";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((prev) => prev + 1);
  };
  const minusCount = () => {
    setCount((prev) => prev - 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  return (
    <>
      <div className="container">
        <h1>Count: {count} </h1>
        <div className="btn_wrap">
          <button onClick={minusCount}>-</button>
          <button onClick={resetCount}>reset</button>
          <button onClick={addCount}>+</button>
        </div>
      </div>
    </>
  );
}

export default App;
