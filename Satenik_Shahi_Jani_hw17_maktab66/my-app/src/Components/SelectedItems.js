import React, { useContext } from "react";
import { AllItemsContext } from "../Context/AllItemsContext";
import List from "./List";

function SelectedItems() {
  const { checked } = useContext(AllItemsContext);
  return (
    <ul className="SelectedItems">
      <li key={0}>
        <h3>SelectedItems</h3>
      </li>
      {checked.map((item) =><List key={item.id} title={item.title}/>)}
    </ul>
  );
}

export default SelectedItems;
