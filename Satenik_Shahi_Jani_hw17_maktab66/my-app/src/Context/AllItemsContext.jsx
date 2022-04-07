import React, { useState, createContext, useEffect } from "react";

export const AllItemsContext = createContext();

export const AllItemsProvider = ({ children }) => {

  const [items, setdataFetch] = useState([]);

  const [checked, setChecked] = useState([]);

  useEffect(() => {
    fetch("https://61f6a5402e1d7e0017fd6e5f.mockapi.io/names")
      .then((response) => response.json())
      .then((res) => {
        setdataFetch(res);
        setChecked(res.filter((item) => item.isExpired !== false));
      });
  }, []);

  // Add/Remove checked item from list
  const checkItem = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      let newItem = {
        id: event.target.id,
        title: event.target.name,
        isExpired: event.target.checked,
      };
      // console.log(newItem)
      updatedList = [...checked, newItem];
      items.map((item) => {
        if (item.id === event.target.id) {
         item.isExpired = true;
        }
        return true
      });
    } else {
      // updatedList.filter((item) => item.title !== event.target.name);
      updatedList.map((item, index) => {
        if (item.id === event.target.id) {
          updatedList.splice(index, 1);
        }
        return true
      });
      items.map((item) => {
        if (item.id === event.target.id) {
          item.isExpired = false;
        }
        return true
      });
      // console.log(items)
    }
    // console.log(updatedList);
    setChecked(updatedList);
  };

  return (
    <AllItemsContext.Provider value={{ items, checkItem, checked }}>
      {children}
    </AllItemsContext.Provider>
  );
};
export default AllItemsProvider;
