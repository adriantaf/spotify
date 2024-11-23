/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

// Crear el contexto
const TokenContext = createContext();

export function TokenProvider({ children }) {
  const [token, setToken] = useState('');

  // Función para obtener el token desde el backend
  async function fetchToken() {
    try {
      const response = await fetch('http://localhost:3001/api/token', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Error al obtener el token');
      }

      const data = await response.json();
      const newToken = data.access_token;
      const expiresIn = data.expires_in * 1000;

      // Guardar el token y su fecha de expiración en localStorage
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
    <TokenContext.Provider value={{ token }}>
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(TokenContext);

  if (!context) {
    throw new Error('useToken must be used within a TokenProvider');
  }

  return context;
}
