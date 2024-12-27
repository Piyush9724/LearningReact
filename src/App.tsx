import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Cart } from "./components/Cart";
import { ExpandableText } from "./components/ExpandableText";

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
      <div>
        <ExpandableText characterCount={100}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet. C
        Xum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec id elit non mi porta gravida at eget metus. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
        Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
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
