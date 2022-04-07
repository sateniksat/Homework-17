import React, { useContext } from "react";
import { AllItemsContext } from "../Context/AllItemsContext";

function AllItems() {
  const { items, checkItem } = useContext(AllItemsContext);

  return (
    <table className="AllItems">
      <thead>
      <tr>
        <th>AllItems</th>
      </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr  key={item.id}>
              <td  key={item.id}>
                <input
                  value={item.id}
                  type="checkbox"
                  name={item.title}
                  onChange={(e) => checkItem(e)}
                />
                <label>{item.title}</label>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default AllItems;
