import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET")
    // TO DO: Handle the case when the authorization code is missing

  const {COMPLETE_HERE, COMPLETE_HERE } = process.env;

  try {
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        complete_here: COMPLETE_HERE,
        complete_here: COMPLETE_HERE,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    //TO DO: Handle request success (1 line)
  } catch (error) {
    console.error("RETRIEVE TOKEN FAILURE:", error.response?.data || error.message);
    // TO DO: Handle the case when the authorization code is missing
  }
}
