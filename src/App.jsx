import CalculateNumbers from "./components/CalculateNumbers/CalculateNumbers";
import ContactList from "./components/ContactList/ContactList";
import DynamicForm from "./components/DynamicForm";
import ProductLists from "./components/DynamicProductLists/ProductLists";

function App() {
  return (
    <>
      <DynamicForm />
      <br />
      <br />
      {/* <ProductLists /> */}
      <br />
      {/* <CalculateNumbers /> */}
      <br />
      <ContactList />
    </>
  );
}

export default App;
