import { useState } from "react";

const ItemCount = ({stock, initial}) => {
  const [count, setCount] = useState(initial);



  const increase = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
  }
};

  const decrease = () => {
    const newValue = count - 1;
    newValue >= initial && setCount(newValue);
};

  return (
    <div>
      <h3>Contador: {count}</h3>
      <h3>Stock: {stock}</h3>
      <button onClick={increase}>Aumentar</button>
      <button onClick={decrease}>Disminuir</button>
    </div>
  );
};

export default ItemCount;
