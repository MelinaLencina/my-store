import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";

const App = () => {
  console.log("App");
  return (
    <div className="App">
    <NavBar />
      <ItemListContainer nameEcommerce="My store" />
    </div>
  );
}

export default App;
