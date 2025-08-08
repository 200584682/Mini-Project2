# MEN Stack Micro Project

This project is a simple web application built with MongoDB, Express, and Node.js (MEN stack). It shows how to add new data (CREATE operation) to a database using a well-structured schema with validation rules.

## What This Project Does

- Connects to a MongoDB database hosted on MongoDB Atlas.
- Uses a schema with 5 fields and validation to keep data correct.
- Lets you add new workout records through an API.
- Keeps sensitive data like connection strings safe using a `.env` file.
- Uses Nodemon for easy development by restarting the server automatically when files change.

## Project Structure

- `/models` — Defines the data schema.
- `/routes` — Handles API routes.
- `/controllers` — Contains the main logic for CRUD operations.
- `/config` — Sets up database connection and environment variables.
- `server.js` — Main application file.

## How to Run

1. Clone this repository.
2. Run `npm install` to install the required packages.
3. Create a `.env` file with your MongoDB connection string.
4. Run `npm run dev` to start the server using Nodemon.
5. Use Postman or similar tool to send POST requests to `/api/workouts` to add new workouts.

---
