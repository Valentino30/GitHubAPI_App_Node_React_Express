## What the app does

This is a very simple application that fetches a list of users from the GitHub API and their corresponding repos. Once the data is fetched, it is displayed by a simple list component that allows you to navagate through the users and check out their respective repos.

## How the app is built

- Backend: Node.js
- Frontend: React.js
- Backend Routing: Express.js
- Frontend Routing: React Router
- Testing: Jest & Enzyme

### How to run the application

- Download the repo and open it with your preferred IDE
- Run the command `yarn` to install all backend dependencies
- Run the command `cd client/ && yarn` to install all frontend dependencies
- Run the command `yarn start` to concurrently startup the backend and frontend
- Run the command `cd client/ && yarn test` to run the frontend tests
- Navigate to `http://localhost:3000/users` to see the list of users
- Navigate to `http://localhost:3000/users/:userId/repos` to see the list of repos connected to a user