import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const ListContext = createContext(null);

export default function ListContextProvider({ children }) {
  // State Management
  const [country, setCountry] = useState("BR");
  const [year, setYear] = useState(new Date().getFullYear());
  const URL = `https://date.nager.at/api/v2/publicholidays/${year}/${country}`;

  // Display country list
  const [list, setList] = useState([]);

  const doQuery = () => {
    axios
      .get(URL)
      .then((res) => {
        if (res.status == 200) {
          setList(res.data);
        } else {
          setList([]);
        }
      })
      .catch((err) => console.log(err));
  };

  const updateList = () => {
    doQuery();
  };

  useEffect(updateList, [year, country]);

  const exportable = {
    country,
    setCountry,
    year,
    setYear,
    list,
    setList,
    URL,
    updateList,
  };
  return (
    <ListContext.Provider value={exportable}>{children} </ListContext.Provider>
  );
}
