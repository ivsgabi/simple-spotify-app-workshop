export default function handler(req, res) {
    const { CLIENT_ID, REDIRECT_URI } = process.env;
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=user-read-private user-read-email`;
    
    res.redirect(authUrl);
  }
  