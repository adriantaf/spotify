import { createContext, useContext, useEffect, useState } from "react";

const TokenContext = createContext();

// eslint-disable-next-line react/prop-types
export function TokenProvider({ children }) {
  const [token, setToken] = useState('');

  async function fetchToken() {
    try {
      const response = await fetch('/api/getSpotifyToken'); // Llama a tu backend
      if (!response.ok) {
        throw new Error('Error al obtener el token del backend');
      }
      const data = await response.json();

      const newToken = data.access_token;
      const expiresIn = data.expires_in * 1000;

      localStorage.setItem('spotify_token', newToken);
      localStorage.setItem('spotify_token_expiry', Date.now() + expiresIn);

      setToken(newToken);
    } catch (error) {
      console.error('Error al obtener el token:', error);
    }
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('spotify_token');
    const storedTokenExpiry = localStorage.getItem('spotify_token_expiry');

    if (storedToken && storedTokenExpiry && Date.now() < storedTokenExpiry) {
      setToken(storedToken);
    } else {
      fetchToken();
    }
  }, []);

  return (
    <TokenContext.Provider value={ { token } }>
      { children }
    </TokenContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToken() {
  const context = useContext(TokenContext);

  if (!context) {
    throw new Error('useToken must be used within a TokenProvider');
  }

  return context;
}
