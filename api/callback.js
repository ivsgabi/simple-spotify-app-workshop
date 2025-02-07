import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET")
      // TO DO: Handle request failure (1 line)

  const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;
  const code = req.query.code;

  try {
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: COMPLETE_HERE,
        client_id: COMPLETE_HERE,
        client_secret: COMPLETE_HERE,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    // TO DO: Handle request success (1 line)
  } catch (error) {
    console.error("POST TOKEN FAILURE:", error.response?.data || error.message);
    // TO DO: Handle request failure (1 line)
  }
}
