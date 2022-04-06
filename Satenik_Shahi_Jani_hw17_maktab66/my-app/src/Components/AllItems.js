import React, { useState,useEffect } from "react";

function AllItems() {
  const [dataFetch, setdataFetch] = useState([]);
  useEffect(() => {
    fetch("https://61f6a5402e1d7e0017fd6e5f.mockapi.io/names")
      .then((response) => response.json())
      .then((res) => {
        setdataFetch(res);
      });
    },[])

  return <div>AllItems</div>;
}

export default AllItems;
