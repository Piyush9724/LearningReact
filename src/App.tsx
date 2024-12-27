import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Cart } from "./components/Cart";

function App() {
  //initialize props to be sent to the component
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectedItem = (item: string) => console.log(item);

  const [cartItems, setCartItems] = useState([
    "Product1",
    "Product2",
    "Product3",
  ]);

  return (
    <>
      <NavBar cartItemsCounts={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <div>
        <ListGroup
          items={items}
          headings="Cities"
          onSelectItem={handleSelectedItem}
        />
      </div>
    </>
  );

  /* const handleClick = (counter: number) => {
    console.log("Button clicked", counter, "number of times");
    setShowAlert(true);
  };

  const handleCloseAlert = (counter: number) => {
    setShowAlert(false);
  }

  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && (
        <div >
          <Alert>
            This is sample alert message from App Component
            <Button
              buttonLabel="X"
              color="danger"
              onButtonClick={handleCloseAlert}
            />
          </Alert>
        </div>
      )}
      <Button
        buttonLabel="Click Me!"
        color="success"
        onButtonClick={handleClick}
      />
    </>
  ); */
}

export default App;
