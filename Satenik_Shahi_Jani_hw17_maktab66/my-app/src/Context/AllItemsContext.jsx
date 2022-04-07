import React, { useState, createContext, useEffect } from "react";

export const AllItemsContext = createContext();

export const AllItemsProvider = ({children}) => {

  const [items, setdataFetch] = useState([]);

  const [checked, setChecked] = useState([]);

  useEffect(() => {
    fetch("https://61f6a5402e1d7e0017fd6e5f.mockapi.io/names")
      .then((response) => response.json())
      .then((res) => {
        setdataFetch(res);
        setChecked(res.filter((item)=>item.isExpired!==false))
      });
    },[])

  // Add/Remove checked item from list
  const checkItem = (event) => {
    let updatedList = [...checked];
    if (event.target.checked===true) {
      let newItem={
        "id": event.target.value,
        "title":event.target.name,
        "isExpired":event.target.checked
      }
      updatedList = [...checked, newItem];
    } else {
      updatedList.filter((item)=>item.id ===event.target.value);
      // updatedList.map((item)=>item.title =="event.target.value");
      items.map((item)=>{
        if(item.id===event.target.value){
          item.isExpired=false;
        }
      
      });
    }
    console.log(updatedList)
    setChecked(updatedList);
  };

  return (
    <AllItemsContext.Provider value={{items,checkItem,checked}}>
      {children}
    </AllItemsContext.Provider>
  )
}
export default AllItemsProvider