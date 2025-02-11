import { useState, useEffect } from "react";

export default function Home() {
  const [token, setToken] = useState(null);
  const [artist, setArtist] = useState("");
  const [artistInfo, setArtistInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch("/api/spotify");
        if (!response.ok) throw new Error("TOKEN RETRIEVING ERROR");
        const data = await response.json();
        setToken(data.access_token);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    if (artist.length > 2) {
      const searchArtist = async () => {
        try {
          const response = await fetch(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) throw new Error("ARTIST SEARCH ERROR");

          const data = await response.json();
          if (data.artists.items.length === 0) {
            setError("Aucun artiste trouvé.");
            setArtistInfo(null);
          } else {
            setArtistInfo(data.artists.items[0]);
            setError(null);
          }
        } catch (err) {
          setError(err.message);
        }
      };

      searchArtist();
    } else {
      setArtistInfo(null);
    }
  }, [artist, token]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Spotify Artist Finder 🎵</h1>

      {token ? <p>ALL SET</p> : <p>Chargement du token...</p>}

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Rechercher un artiste..."
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
      </div>

      {error && <p style={{ color: "red" }}>Erreur : {error}</p>}

      {artistInfo && (
        <div style={{ marginTop: "30px", border: "1px solid #ddd", padding: "20px", borderRadius: "10px", display: "inline-block" }}>
          <h2>{artistInfo.name}</h2>
          {artistInfo.images.length > 0 && <img src={artistInfo.images[0].url} alt={artistInfo.name} width="200" />}
          <p>Popularité : {artistInfo.popularity}/100</p>
          <p>Genres : {artistInfo.genres.join(", ") || "No genre found."}</p>
          <a href={artistInfo.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            🔗 Voir sur Spotify
          </a>
        </div>
      )}
    </div>
  );
}
