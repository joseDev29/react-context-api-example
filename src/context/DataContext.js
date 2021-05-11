import { createContext, useState } from "react";

export const DataContext = createContext();

const initialData = {
  name: "Eren",
  age: 19,
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
