import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "UNAUTHORIZED METHOD" });

  const { CLIENT_ID, CLIENT_SECRET } = process.env;

  try {
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    res.status(200).json(tokenResponse.data);
  } catch (error) {
    console.error("RETRIEVE TOKEN FAILURE:", error.response?.data || error.message);
    res.status(500).json({ error: "RETRIEVE TOKEN FAILURE" });
  }
}
