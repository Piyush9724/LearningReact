//import { MouseEvent } from "react";
import { useState } from "react";
import './ListGroup.css';

interface ListGroupProps {
  items: string[];
  headings: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, headings, onSelectItem }: ListGroupProps) {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //items = [];
  //let selectedIndex = -1;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  /* if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    ); */

  //const message = items.length === 0 ? <p>No items found</p> : null;
  const message = items.length === 0 && <p>No items found</p>;
  //const handleClick = (event: MouseEvent) => { console.log(event) };

  return (
    <>
      <h1>{headings}</h1>
      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            //className="list-group-item"
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
