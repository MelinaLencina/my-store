import { useState } from "react";

const TukiChild = () => {

  const [count, setCount] = useState(0);

  console.log("TukiChild");

  const increase = () => {
    console.log("Ahora increase funciona");
    setCount(count + 1);
};

  const decrease = () => {
    console.log("Ahora decrease funciona");
    setCount(count - 1);
  };

    return (
      <div className="TukiChild">
        <h1>Tuki Child</h1>
        <h2>Soy hijo de Tuki y nieto de App</h2>
        <h3>Contador: {count}</h3>
        <button onClick={increase}>Aumentar</button>
        <button onClick={decrease}>Disminuir</button>
      </div>
    );
};

export default TukiChild;