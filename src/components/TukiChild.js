import { useState } from "react";

const TukiChild = () => {

  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({ name: "Fabi", age: 28 });
  const [loading, setLoading] = useState(false);
  const [animals, setAnimals] = useState(["perro", "gato", "conejo", "pez"]);

  console.log("info", info);
  console.log("loading", loading);
  console.log("animals", animals);

  const increase = () => {
    console.log("Ahora increase funciona");
    setCount(count + 1);
};

  const decrease = () => {
    console.log("Ahora decrease funciona");
    setCount(count - 1);
  };

    const changeInfo = () => {
      setInfo({ ...info, name: "Fabián", lastName: "Tureo", age: 29 });
  };

  const handleLoading = () => {
    setLoading(!loading);
  };

  const animalsArray = ["elefante", "jirafa", "tigre", "leon"];

  const addAnimal = () => {
    setAnimals([...animals, ...animalsArray]);
  };

    return (
      <div className="TukiChild">
        <h1>Tuki Child</h1>
        <h2>Soy hijo de Tuki y nieto de App</h2>
        <h3>Contador: {count}</h3>
        <button onClick={increase}>Aumentar</button>
        <button onClick={decrease}>Disminuir</button>
        <button onClick={changeInfo}>Change info</button>
        <button onClick={handleLoading}>Loading</button>
        <button onClick={addAnimal}>Add animal</button>
      </div>
    );
};

export default TukiChild;