//import { MouseEvent } from "react";
import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";
import { FaTreeCity } from "react-icons/fa6";
import Like from "../Like";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  isActive: boolean;
}

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.isActive ? "pink" : "none")};
  cursor: pointer;
  flex: 1;
  margin-left: 5px;
`;

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

  const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <>
      <HeaderContainer>
        <FaTreeCity size={35} />
        <h1 style={{ marginLeft: "10px" }}>{headings}</h1>
      </HeaderContainer>

      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {message}
      {
        /* <ul className='list-group'>
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
      </ul> */
        <List>
          {items.map((item, index) => (
            <ListItemContainer key={item}>
              <Like />
              <ListItem
                isActive={index === selectedIndex}
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
              </ListItem>
            </ListItemContainer>
          ))}
        </List>
      }
    </>
  );
}

export default ListGroup;
