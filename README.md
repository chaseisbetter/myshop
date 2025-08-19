# Full-Stack E-commerce Shop (MyShop)

This project is a complete MERN stack application with Docker support.

## Features
- JWT Authentication
- Product Catalog
- Shopping Cart & Orders
- User Profiles
- Admin Functionality (basic)

## Tech Stack
- **Frontend**: React, Vite, TailwindCSS, React Router
- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Containerization**: Docker, Docker Compose

---

## Running the Project

### 1. Local Development (without Docker)

**Prerequisites:**
- Node.js (v18+)
- npm
- MongoDB installed and running locally

**Instructions:**

1.  **Set up Environment Variables:**
    -   In the `/backend` directory, copy `.env.example` to a new file named `.env`.
    -   Update the `MONGO_URI` to point to your local MongoDB instance.
    -   Change `JWT_SECRET` to a long, random string.

2.  **Install Dependencies:**
    -   In a terminal, navigate to the `/backend` directory and run: `npm install`
    -   In another terminal, navigate to the `/frontend` directory and run: `npm install`

3.  **Run the Servers:**
    -   In the backend terminal, run: `npm run dev` (starts on http://localhost:5000)
    -   In the frontend terminal, run: `npm run dev` (starts on http://localhost:3000)

### 2. Docker Development

**Prerequisites:**
- Docker & Docker Compose

**Instructions:**

1.  **Set up Environment Variables:**
    -   In the `/backend` directory, copy `.env.example` to a new file named `.env`.
    -   The `MONGO_URI` is already set for Docker (`mongodb://mongo:27017/myshop`).
    -   Change `JWT_SECRET` to a long, random string.

2.  **Build and Run Containers:**
    -   From the project root directory, run:
        ```bash
        docker compose up --build
        ```
    -   The frontend will be available at `http://localhost:3000`.
    -   The backend API will be available at `http://localhost:5000`.