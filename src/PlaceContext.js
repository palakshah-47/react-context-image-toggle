import React, { createContext, useContext, useState } from "react";

const PlaceContext = createContext();

export const usePlaceContext = () => useContext(PlaceContext);

export const PlaceContextProvider = ({ children }) => {
  const [place, setPlace] = useState({});
  return (
    <PlaceContext.Provider value={{ place, setPlace }}>
      {children}
    </PlaceContext.Provider>
  );
};
