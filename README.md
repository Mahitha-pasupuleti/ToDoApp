# 📝 ToDo Application

A full-stack ToDo application with user authentication, task creation, task management, and real-time UI updates. Built with **React (Vite)** on the frontend and **Node.js + Express.js + MongoDB Atlas** on the backend.

## 🌐 Live Demo

👉 [Click here to use the application in real-time](https://todoapplication-kqk9.onrender.com)

---

## ✨ Features

- ✅ User Registration & Login (JWT-based Auth)
- 📋 Add, Edit, Delete Tasks
- 🗖️ Set Due Dates
- 🧠 Backend Validation & Error Handling
- 🔐 Protected Routes
- 🌍 Deployed and Live!

---

## 🧑‍💻 Tech Stack

| Frontend  | Backend        | Database      |
|-----------|----------------|----------------|
| React (Vite) | Node.js, Express.js | MongoDB Atlas |

---

## 📁 Project Structure

```
Backend Intern - Digital Factory, Inc.
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middlewares
│   │   ├── utils
│   │   └── index.js
│   └── .env
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── App.jsx
│   ├── index.html
│   └── vite.config.js
```

---

## 🔑 .env Configuration (Backend)

Create a `.env` file in the `backend` folder:

```env
PORT=8000
MONGODB_URI=your-mongodb-atlas-uri
CORS_ORIGIN=https://your-frontend-url.com

ACCESS_TOKEN_SECRET=yourAccessTokenSecret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=yourRefreshTokenSecret
REFRESH_TOKEN_EXPIRY=10d
```

---

## 📦 Installation & Running Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Mahitha-pasupuleti/ToDoApp.git
cd ToDoApp
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 4. Build Frontend

```bash
npm run build
```

### 5. Start Backend Server

```bash
cd ../backend
npm run dev
```
