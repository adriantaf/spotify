import dotenv from 'dotenv';  // Cargar variables de entorno
import express from 'express'; // Framework Express
import fetch from 'node-fetch'; // Hacer peticiones HTTP

dotenv.config(); // Cargar el archivo .env
const app = express();

const clientID = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const PORT = process.env.PORT || 3001;

// Middleware para manejar JSON
app.use(express.json());

// Endpoint para obtener un token de Spotify
app.post('/api/token', async (req, res) => {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${clientID}:${clientSecret}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
      }),
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Error al obtener el token' });
    }

    const data = await response.json();
    res.json(data); // Devuelve el token al frontend
  } catch (error) {
    console.error('Error al obtener el token:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
