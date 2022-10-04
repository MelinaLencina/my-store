import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    console.log("Ahora increase funciona");
    setCount(count + 1);
  };

  const decrease = () => {
    console.log("Ahora decrease funciona");
    setCount(count - 1);
  };

  return (
    <div>
      <h3>Contador: {count}</h3>
      <button onClick={increase}>Aumentar</button>
      <button onClick={decrease}>Disminuir</button>
    </div>
  );
};

export default Count;
