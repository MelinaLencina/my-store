import TukiChild from "./TukiChild";

const TukiComponents = () => {
  console.log("TukiComponents");

    return (
        <div className="TukiComponents">
            <h1>Hola Tukis</h1>
            <TukiChild />
        </div>
    );
}

export default TukiComponents;