import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.recurringDeposits);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };