// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [responseData, setResponseData] = useState([]);

  return (
    <DataContext.Provider value={{ responseData, setResponseData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
