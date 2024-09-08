import Button from "@mui/material/Button";

// import CalculateNumbers from "./components/CalculateNumbers/CalculateNumbers";
// import ContactList from "./components/ContactList/ContactList";
// import DynamicForm from "./components/DynamicForm";
// import ProductLists from "./components/DynamicProductLists/ProductLists";
import MaterialUI from "./components/materialUI/MaterialUI";

function App() {
  return (
    <>
      {/* <DynamicForm /> */}
      {/* <br /> */}
      {/* <br /> */}
      {/* <ProductLists /> */}
      {/* <br /> */}
      {/* <CalculateNumbers /> */}
      {/* <br /> */}
      {/* <ContactList /> */}
      {/* <br /> */}
      <MaterialUI />
      <div>
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>
      <div>
        <Button variant="contained">Contained</Button>
      </div>
    </>
  );
}

export default App;
