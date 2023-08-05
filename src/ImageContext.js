import React, { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export const useImageContext = () => useContext(ImageContext);

export const ImageContextProvider = ({ children }) => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <ImageContext.Provider value={{ imageSize, isLarge, setIsLarge }}>
      {children}
    </ImageContext.Provider>
  );
};
