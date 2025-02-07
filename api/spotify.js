import axios from "axios";

export default async function handler(COMPLETE_HERE) {
  if (req.method !== "GET") {
    // TO DO: Handle request failure (1 line)
  }

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.COMPLETE_HERE,
        client_secret: process.env.COMPLETE_HERE,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    //TO DO: Handle request success (1 line)
  } catch (error) {
    console.error("SPOTIFY API ERROR:", error);
    // TO DO: Handle request failure (1 line)
  }
}
