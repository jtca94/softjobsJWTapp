# Soft Jobs App
- The Soft Jobs App is a web application designed to support junior developers in finding short and simple jobs to gain work experience and improve their opportunities. It provides a platform for developers to register, authenticate, and search for available jobs. The app also allows employers to post job opportunities and review applications from developers.

## Features
- User Registration: Developers can register on the platform by providing their email address and password. This allows them to access additional features and functionalities.

1. User Authentication: Registered users can log in to the app using their email and password. This enables them to access their profile and interact with the platform.

2. User Profile: Each developer has a personalized profile on Soft Jobs. They can add information about their experience, skills, and previous projects. This information helps employers assess their suitability for specific jobs.

3. Authentication and Authorization: Soft Jobs uses JSON Web Tokens (JWT) for user authentication and authorization. Users receive a token upon successful login, which is used to authenticate subsequent requests.

## Technologies Used
- The Soft Jobs App is built using the following technologies:

* Node.js: A JavaScript runtime environment for executing server-side code.
* Express.js: A fast and minimalist web application framework for Node.js.
* PostgreSQL: An open-source relational database management system.
* pg: A PostgreSQL client for Node.js that enables interaction with the database.
* JSON Web Tokens (JWT): A method for securely transmitting information between parties as a JSON object.
* bcrypt: A library for hashing and encrypting passwords.

# Getting Started
To get started with the Soft Jobs App, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/jtca94/softjobsJWTapp.git
```
2. Install the dependencies:

```bash
cd softjobs-app
npm install
```
3. Set up the PostgreSQL database and configure the connection details in a .env file:

```makefile
PG_USER=your_postgres_user
PG_PASSWORD=your_postgres_password
PG_HOST=your_postgres_host
PG_PORT=your_postgres_port
PG_DATABASE=softjobs
JWT_SECRET=your_jwt_secret
```

Start the development server:

```bash
npm run start
```
Access the application at http://localhost:4000 in your web browser.

## API Endpoints
- The Soft Jobs App exposes the following API endpoints:

* POST /usuarios: Registers a new user.
* POST /login: Authenticates a user and generates a JWT token.
* GET /usuarios: Retrieves user data if authenticated.

## Error Handling
- The Soft Jobs App incorporates error handling to provide meaningful error responses. The application includes an error handling middleware that catches any errors thrown during request processing and returns appropriate responses to the client.

## Dependencies
- The Soft Jobs App utilizes the following major dependencies:

* express
* pg
* jsonwebtoken
* bcrypt
* dotenv

Make sure to check the package.json file for a complete list of dependencies and their versions.
