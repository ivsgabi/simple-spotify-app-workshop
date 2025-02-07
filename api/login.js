export default function handler(req, res) {
    const { CLIENT_ID, REDIRECT_URI } = process.env;
    const authUrl = `https://accounts.spotify.com/authorize?client_id=[COMPLETE-HERE]&response_type=code&redirect_uri=${encodeURIComponent([COMPLETE-HERE])}&scope=user-read-private user-read-email`;

  // TO DO: Redirect the user to the authorization URL (1 line)
  }
  