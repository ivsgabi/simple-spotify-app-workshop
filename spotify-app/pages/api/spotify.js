import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "UNAUTHORIZED METHOD" });
  }

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("SPOTIFY API ERROR:", error);
    res.status(500).json({ error: "TOKEN RETRIEVE FAILURE" });
  }
}
