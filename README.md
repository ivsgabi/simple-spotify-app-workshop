# Creating a Simple Application Using the Spotify API

## Objective
Create a basic web application that displays information about an artist or a playlist using the Spotify API.

## Compétences
- Understanding and using a REST API
- Handling authentication with OAuth 2.0
- Manipulating JSON data
- Dynamically displaying results in JavaScript

## Prerequisites
- A Spotify account (and a Spotify Developer account: developer.spotify.com)
- Node.js and npm installed (Installation Guide Here)

## Let's Start
### 1. Creating a Spotify Developer Application (15 min)
- Go to the Spotify Developer Dashboard.
- Sign in and click Create an App.
- Fill in the required information (name, description) and create the application.
- In the Settings tab, retrieve the Client ID and Client Secret.
- Add a Redirect URI (e.g., http://localhost:3000/callback) in Edit Settings.

### 2. Initializing the Project
- Create a new folder for the project (e.g., spotify-app).
- Initialize a Node.js project and install the necessary dependencies:
```
npm init -y
npm install express axios dotenv cors
```

### 3. Creating a Basic Server to Handle Authentication (15 min)
- Create a .env file and add the following information::
```
CLIENT_ID=YOUR_CLIENT_ID
CLIENT_SECRET=YOUR_CLIENT_SECRET
REDIRECT_URI=http://localhost:3000/callback
```
- Copy the server.js file into your project folder.
- Start the server:
```
node server.js
```

Make sure everything is working. You should be able to find the page to check if the server.js file is configured correctly.

### 4. Retrieving the Access Token (15 min)
- Add this route in server.js:
```
app.get('/callback', async (req, res) => {
    const code = req.query.code;

    const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
    }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    res.json(tokenResponse.data);
});
```
- Restart the server and log in to see the access token.

### 4. Displaying Information About an Artist (20 min)
- Copy the index.html file and fill in the missing parts.
- Modify the searchArtist function to include audio previews.
- Test the application using an access token obtained via the callback.

### 5.  Amélioration et présentation des résultats (20 min)
- Make small modifications to display the found artists properly.
  - Documentation: 

### 6. Pour finir (10 min)
- Now that you understand the basics:
  - Add a button to fetch popular playlists.
  - Improve the UI by making it more visually appealing with CSS.
  - Store the token more securely by integrating a backend solution.

