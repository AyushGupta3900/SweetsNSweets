# 🍬 SweetsNSweets

SweetsNSweets is a full-stack sweet shop management system built using
the MERN stack. It allows users to browse and purchase sweets, while
administrators can manage inventory through a secure, role-based
dashboard.

The project demonstrates real-world full-stack development practices
including authentication, authorization, REST APIs, and a modern
responsive frontend.

------------------------------------------------------------------------

## 🚀 Features

### 👤 User Features

-   User registration and login with JWT authentication\
-   Browse all available sweets\
-   Search sweets by name\
-   Purchase sweets (disabled automatically when stock is zero)\
-   Real-time stock updates after purchase

### 🛠 Admin Features

-   Admin-only access control\
-   Add new sweets to inventory\
-   Update existing sweet details\
-   Delete sweets from inventory\
-   Secure protected routes and APIs

------------------------------------------------------------------------

## 🧱 Tech Stack

### Frontend

-   React (Vite)\
-   Tailwind CSS\
-   React Router\
-   Axios\
-   Lazy loading with React.lazy & Suspense

### Backend

-   Node.js\
-   Express.js\
-   MongoDB & Mongoose\
-   JWT Authentication\
-   bcryptjs for password hashing

------------------------------------------------------------------------

## 📁 Project Structure

### Backend

    backend/
    ├── src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── middlewares/
    │   └── utils/
    ├── server.js
    └── package.json

### Frontend

    frontend/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── pages/
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json

------------------------------------------------------------------------

## 🔐 Authentication & Authorization

-   JWT-based authentication\
-   Tokens stored securely in localStorage\
-   Role-based access (user, admin)\
-   Admin routes and actions protected on both frontend and backend

------------------------------------------------------------------------

## 🧪 API Endpoints

### Auth

-   POST /api/v1/auth/register\
-   POST /api/v1/auth/login

### Sweets (Protected)

-   GET /api/v1/sweets\
-   GET /api/v1/sweets/search\
-   POST /api/v1/sweets (Admin)\
-   PUT /api/v1/sweets/:id (Admin)\
-   DELETE /api/v1/sweets/:id (Admin)

### Inventory

-   POST /api/v1/sweets/:id/purchase\
-   POST /api/v1/sweets/:id/restock (Admin)

------------------------------------------------------------------------

## ⚙️ Environment Variables

Create a `.env` file in the backend directory:

    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

------------------------------------------------------------------------

## ▶️ Running the Project Locally

### 1️⃣ Clone the repository

    git clone https://github.com/your-username/SweetsNSweets.git
    cd SweetsNSweets

### 2️⃣ Backend Setup

    cd backend
    npm install
    npm run dev

### 3️⃣ Frontend Setup

    cd frontend
    npm install
    npm run dev

Frontend runs at:

    http://localhost:5173

Backend runs at:

    http://localhost:5000

------------------------------------------------------------------------

## 📸 UI Highlights

-   Clean and modern dashboard\
-   Responsive design using Tailwind CSS\
-   Admin edit modal for updating sweets\
-   Lazy-loaded pages with loading indicators

------------------------------------------------------------------------

## 🧠 Learning Outcomes

-   Full-stack MERN architecture\
-   Secure authentication & authorization\
-   RESTful API design\
-   Role-based UI rendering\
-   State management and API integration\
-   Professional project structure

------------------------------------------------------------------------

## 🔮 Future Enhancements

-   Pagination and filtering\
-   Order history for users\
-   Admin analytics dashboard\
-   Image upload for sweets\
-   Payment gateway integration

------------------------------------------------------------------------

## 👨‍💻 Author

**Ayush Gupta**\
Full-Stack Developer\
Built as a learning and portfolio project

------------------------------------------------------------------------

## 📸 Application Screenshots

### 🔐 Login Page
![Login Page](./public/1loginPage.png)

### 📝 Register Page
![Register Page](./public/2registerPage.png)

### 🏠 Dashboard (Admin View)
![Dashboard Admin View](./public/3dashboardAdminView.png)

### ✏️ Edit Sweet Modal
![Edit Sweet](./public/4editSweet.png)

### 🔍 Search & Filter
![Search Filter](./public/5searchFilter.png)

### ➕ Add Sweet (Admin)
![Add Sweet](./public/6addSweet.png)

### 👤 Dashboard (User View)
![Dashboard User View](./public/7dashboardUserView.png)

------------------------------------------------------------------------