import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  //initialize props to be sent to the component
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectedItem = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup items={items} headings="Cities" onSelectItem={handleSelectedItem} />
    </div>
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
