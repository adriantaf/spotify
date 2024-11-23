import React, { useState } from "react";

const SearchResultContext = React.createContext(null);

// eslint-disable-next-line react/prop-types
export function SearchProvider({ children }) {
  const [data, setData] = useState(null);

  return (
    <SearchResultContext.Provider value={ { data, setData } }>
      { children }
    </SearchResultContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSearchResult() {
  const context = React.useContext(SearchResultContext);

  if (!context) {
    throw new Error("Esta usando SearchResultContext fuera de SearchResultProvider");
  }

  return context;
}