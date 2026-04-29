# 🚀 Task Manager Backend (Advanced)

A full-featured backend system for task tracking and team collaboration built with Node.js, Express, MongoDB, and Socket.IO.

---

## 📌 Features

### 🔐 Authentication

* User Registration
* User Login (JWT-based authentication)
* Secure password hashing (bcrypt)

### 📌 Task Management

* Create, Read, Update, Delete (CRUD) tasks
* Assign tasks to users
* Task status management (OPEN, IN_PROGRESS, COMPLETED)
* Search and filter tasks

### 👥 Project / Team Collaboration

* Create projects
* Add members to projects
* Assign tasks within projects

### 💬 Comments

* Add comments to tasks
* View task discussions

### ⚡ Real-Time Features

* Task creation notifications
* Comment updates using Socket.IO

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Socket.IO (Real-time communication)
* Multer (for future file uploads)

---

## 📂 Project Structure

```
task-manager/
│── src/
│   ├── config/        # DB config
│   ├── controllers/   # Business logic
│   ├── middleware/    # Auth middleware
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
│   ├── app.js         # Entry point
│
│── .env               # Environment variables
│── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone <your-repo-url>
cd task-manager
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file in root:

```
MONGO_URI=mongodb://localhost:27017/taskdb
JWT_SECRET=your_secret_key
```

👉 OR use MongoDB Atlas (recommended):

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskdb
```

---

### 4️⃣ Run the server

```
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 🔐 Auth

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

---

### 📁 Projects

| Method | Endpoint      | Description    |
| ------ | ------------- | -------------- |
| POST   | /api/projects | Create project |

---

### 📌 Tasks

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| POST   | /api/tasks | Create task   |
| GET    | /api/tasks | Get all tasks |

---

### 💬 Comments

| Method | Endpoint      | Description |
| ------ | ------------- | ----------- |
| POST   | /api/comments | Add comment |

---

## 🔑 Authentication

All protected routes require:

```
Authorization: <JWT_TOKEN>
```

---

## 🧪 Testing (Postman)

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

Copy token → use in headers.

---

## ⚡ Real-Time Testing

Open browser console:

```js
const socket = io("http://localhost:5000");

socket.on("taskCreated", data => console.log(data));
socket.on("commentAdded", data => console.log(data));
```

---

## 🚧 Future Improvements

* File attachments (Cloudinary / AWS S3)
* Role-based access control (Admin / Member)
* Notifications per user
* Swagger API documentation
* Docker deployment
* AI task description generator

---

## 👨‍💻 Author

Developed as part of a backend system design and implementation project.

---

## 📜 License

This project is open-source and free to use.
