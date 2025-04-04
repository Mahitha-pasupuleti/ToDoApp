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

Create a `.env` file in the `frontend` folder:

```env
VITE_API_URL=https://your-backend-url.com
```

---

## 🧪 Test Users

You can use the following **test user credentials** to log in directly:

🔐 **User 1**
- **Email**: `mahi@gmail.com`
- **Password**: `Mahi@123`

🔐 **User 2**
- **Email**: `kavi@gmail.com`
- **Password**: `Kavi@123`

---

## 🔐 API Routes
- `POST /api/v1/users/signup` - Register a new user
- `POST /api/v1/users/login` - Login
- `POST /api/v1/users/logout` - Logout
- `GET /api/v1/users/getTasks` - Get all user tasks
- `POST /api/v1/users/addTask` - Add new task
- `DELETE /api/v1/users/deleteATask` - Delete existing task
- `PUT /api/v1/users/updateATask` - Update existing task

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


