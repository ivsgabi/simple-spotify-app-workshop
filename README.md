# Creating a Simple Application Using the Spotify API

## Objective
Create a basic web application that displays information about an artist or a playlist using the Spotify API.

## Skills
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
- Fill in the required information (name, description and Redirect URIs with http://localhost:3000/callback (this is where Spotify will send the authorization code)) and create the application.
- In the Settings tab, retrieve the Client ID and Client Secret.

### 2. Initializing the Project
- Initialize a Next.js project and install the necessary dependencies:
```
npm init -y
npm install express axios dotenv cors
npx create-next-app@latest app-folder-name // example: spotify-app
cd app-folder-name
```
- You should have something like that in your app folder:
```
➜  example-app git:(main) ✗ ls
app  eslint.config.mjs  next.config.ts  next-env.d.ts  node_modules  package.json  package-lock.json  postcss.config.mjs  public  README.md  tailwind.config.ts  tsconfig.json
```
- PS: You may not need all these files but don't delete any without instructions.

- You have just created your Next Web Application. Try this to if everything works.
```
npm run dev
```

### 3. Creating a Basic Server to Handle Authentication (15 min)
- Create a .env file and add the following information:
```
CLIENT_ID=YOUR_CLIENT_ID
CLIENT_SECRET=YOUR_CLIENT_SECRET
REDIRECT_URI=http://localhost:3000/callback
```
- Rename app/ into pages/.
- Delete pages/page.tsx.
- Create a pages/index.js file.

### 4. Retrieving informations from spotify - Back-end (30 min)
- In api/ there are 4 folders to handle different side of .... the first one is done, complete the others ones.
  - login.js: This route generates the Spotify authentication URL and redirects the user to it. The user will need to log in and grant permission for the application to access certain data from their Spotify account.
  - callback.js: After the user authenticates, Spotify redirects to this route with a temporary authorization code. This route uses the code to retrieve an access token, which allows the application to access user data.
  - token.js: This route retrieves an access token using the client ID and client secret of the application. This token is then used to make authorized requests to the Spotify API.
  - /spotify: This route allows the application to make requests to the Spotify API, using the retrieved access token to access data such as playlists, artists, albums, etc., based on the user's permissions.

- Copy the folder api/ into pages/ in your project and fill the gaps in api/ files.
- Tips to verify your results: Each files and folder in pages/ represent a page of your web application
```
http://localhost:3000/api/callback -> http://localhost:3000/api/callback
```

### 5. Displaying Information About an Artist - Front-end (20 min)
- In Next.js, the front-end and back-end are integrated in a single project, enabling seamless data fetching via API routes. While traditional apps separate the front-end and back-end, Next.js offers a unified structure. This makes it easy to display dynamic content directly in React components. Now it could be great to display an actual web page with data fetched from the back-end. 
- Copy index.js in your pages folder and fill the gaps.

### 5. Upgrade Displaying (20 min)
- Now that you're able to fetch back-end data in your front, let's make a proper search interface for our app. You can use components and other web tools to improve the UI.
Suggestions: Search bar, music preview, navbar, buttons, artist details, colors...
- Links: ShadCN/UI (UI components), Tailwind CSS (Utility-first styling), Radix UI (Accessible components), React Icons (Icons for UI), Ant Design (UI components), Spotify API Docs,...
- See how to use Tailwing and CSS.
### 6. To End
- Now that you understand the basics:
  - You can a button to fetch popular playlists.
  - Improve the UI by making it more visually appealing with CSS.
  - Store the token more securely by integrating a backend solution.
  - Add more features.

