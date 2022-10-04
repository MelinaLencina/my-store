import ItemCount from "./ItemCount";
import {useState, useEffect} from "react";

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    console.log("products", products);

    const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
        <h1>Bienvenidos a {props.nameEcommerce}</h1>
        <ItemCount stock={10} initial={0} />
        </div>
    );
    };

export default ItemListContainer;