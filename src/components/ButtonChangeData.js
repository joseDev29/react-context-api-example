import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const data = {
  name: "Levi",
  age: 25,
};

export const ButtonChangeData = () => {
  const { setData } = useContext(DataContext);

  return (
    <div>
      <button
        className="btn btn-info"
        onClick={() => {
          setData(data);
        }}
      >
        Cambiar Data
      </button>
    </div>
  );
};
