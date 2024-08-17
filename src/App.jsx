import CalculateNumbers from "./components/CalculateNumbers/CalculateNumbers";
import DynamicForm from "./components/DynamicForm";
import ProductLists from "./components/DynamicProductLists/ProductLists";

function App() {
  return (
    <>
      <DynamicForm />
      <br />
      <br />
      <ProductLists />
      <br />
      <CalculateNumbers />
    </>
  );
}

export default App;
