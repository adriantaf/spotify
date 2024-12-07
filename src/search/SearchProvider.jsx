/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const SearchResultContext = React.createContext(null);

export function SearchProvider({ children }) {
  const [data, setData] = useState(null);

  return (
    <SearchResultContext.Provider value={ { data, setData } }>
      { children }
    </SearchResultContext.Provider>
  );
}

export function useSearchResult() {
  const context = React.useContext(SearchResultContext);

  if (!context) {
    throw new Error("Esta usando SearchResultContext fuera de SearchResultProvider");
  }

  return context;
}