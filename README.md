# User Post REST API Project Using Nodejs and Express.js 

This is a Node.js REST API demo project that demonstrates user authentication, JWT-based authorization, and post management using Express.js. The project follows a structured API design and showcases secure login, protected routes, and CRUD operations.

---

## 🚀 Features

- User registration and login
- JWT-based authentication
- Protected routes using middleware
- Token expiration handling
- Post management (Create, Read, Update, Delete)
- RESTful API structure

---

## 🛠 Tech Stack

- Node.js
- Express.js
- JSON Web Token (JWT)
- MongoDB
- Mongoose
- dotenv

---

## 🔐 Authentication Flow

1. User registers or logs in
2. Server generates a JWT token
3. Token is sent in request headers for protected APIs
4. Middleware verifies the token
5. Expired or invalid tokens are rejected

---
## 📁 Project Structure
Ragin Rathod Node Practical
│
├── routes
│ ├── index.js
│ ├── user.js
│ └── userPost.js
│
├── controller
│ ├── user.js
│ └── userPost.js
│
├── middleware
│ └── authToken.js
│
├── validation
│ ├── user.js
│ └── userPost.js
│
├── node_modules
├── package.json
├── package-lock.json
└── README.md


---

## 🔒 JWT Middleware

- Verifies token using secret key
- Automatically checks token expiration
- Sends custom error messages for expired or invalid tokens
- Attaches decoded user data to request object

---

## ▶️ How to Run the Project

1. Install dependencies  
    npm install

2. Create `.env` file and add:
    PORT=3100
    SECRET_KEY=your_secret_key
    DB_URL=your_database_url

3. Start the server 
    npm run dev or npm start

---

## API CURL 

### 🔹 User Registration
curl --location 'http://localhost:3100/api/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user_name":"demo_user",
    "email": "demo@example.com",
    "password": "Demo@123"
}'

### 🔹 User Login
curl --location 'http://localhost:3100/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "demo@example.com",
    "password": "Demo@123"
}'

### 🔹 Get User Profile (Protected)
curl --location 'http://localhost:3100/api/auth/profile' \
--header 'authorization: YOUR_JWT_TOKEN'

### 🔹 Create Post (Protected)
curl --location 'http://localhost:3100/api/posts' \
--header 'Authorization: YOUR_JWT_TOKEN' \
--header 'Content-Type: application/json' \
--data '{
  "caption": "This is a demo post"
}'

### 🔹 Get Posts
curl --location 'http://localhost:3100/api/posts/get?startRow=0&endRow=2'

### 🔹 Like a Post (Protected)
curl --location --request POST 'http://localhost:3100/api/posts/POST_ID/like' \
--header 'Authorization: YOUR_JWT_TOKEN'

### 🔹 Get User Wise Post
curl --location 'http://localhost:3100/api/posts/user/userId'


## 📌 API Usage

- Send JWT token in request headers:
 authorization: your_token_here

- Only authenticated users can access protected routes

---
## ✅ Conclusion

This project demonstrates a secure and well-structured Node.js REST API using Express.js.  
It includes user registration, login, JWT-based authentication, and post management with protected routes.  
The project is designed to showcase best practices in API development and secure data handling.  

**Project developed and submitted by Ragini Rathod.**


