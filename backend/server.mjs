import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config({ path: './backend/.env' });

const app = express();

const clientID = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const PORT = process.env.PORT || 3001;

console.log('Spotify Client ID:', clientID);
console.log('Spotify Client Secret:', clientSecret);


// Configura CORS para permitir solicitudes desde tu frontend
app.use(cors({
  origin: 'http://localhost:5173', // URL de tu frontend
  methods: ['GET', 'POST'], // Métodos permitidos
}));

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
      const errorText = await response.text();
      console.error('Error from Spotify API:', errorText); // Log the full error
      return res.status(response.status).json({ error: errorText });
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
