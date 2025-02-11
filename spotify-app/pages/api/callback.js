import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "UNAUTHORIZED METHOD" });

  const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;
  const code = req.query.code;

  try {
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    res.status(200).json(tokenResponse.data);
  } catch (error) {
    console.error("POST TOKEN FAILURE:", error.response?.data || error.message);
    res.status(500).json({ error: "SPOTITY AUTH FAILURE" });
  }
}
