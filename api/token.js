// /api/token.js
import fetch from 'node-fetch';
export default async function handler(req, res) {
  const clientID = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

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
    res.status(200).json(data); // Devuelve el token al frontend
  } catch (error) {
    console.error('Error al obtener el token:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
