import { useState } from "react";

export default function Home() {
  const [token, setToken] = COMPLETE_HERE;
  const [error, setError] = COMPLETE_HERE;

  const fetchToken = async () => {
    try {
      const response = await fetch("/api/token");
      if (!response.ok)
        throw new Error(COMPLETE_HERE);
      const data = await response.json();
      setToken(data.access_token);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to my Web Application with Spotify API</h1>

      <button onClick={completeHere} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Test Spotify API
      </button>

      {token && <p>Access Token: {token}</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}
