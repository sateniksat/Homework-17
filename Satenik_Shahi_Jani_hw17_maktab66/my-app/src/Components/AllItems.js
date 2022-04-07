import React, { useContext } from "react";
import { AllItemsContext } from "../Context/AllItemsContext";

function AllItems() {
  const { items, checkItem } = useContext(AllItemsContext);

  return (
    <ul className="AllItems">
      <li key={0}>
        <h3>All Items</h3>
      </li>
      {/* <hr/> */}
      {items.map((item) => {
        return (
          <li key={item.id}>
            <input
              value={item.id}
              id={item.id}
              type="checkbox"
              name={item.title}
              onChange={(e) => checkItem(e)}
            />
            <label>{item.title}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default AllItems;
