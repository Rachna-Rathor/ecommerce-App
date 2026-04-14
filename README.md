# 🛒 E-Commerce Web Application (MERN Stack)

A full-stack E-Commerce web application with authentication, product management, search functionality, and cart features. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

---

## 🚀 Features

### 🔐 Authentication
- User Signup & Login
- JWT-based Authentication
- Secure Password Handling (bcrypt)
- Logout functionality

### 🛍️ Product Management
- Create, Read, Update, Delete (CRUD) operations
- Categorized products (Men, Women, Kids, Accessories)
- Backend API for product handling

### 🔍 Search & Filter
- Search products by keyword
- Filter products by category and gender
- Backend-powered filtering for better performance

### 🛒 Cart System
- Add to Cart functionality
- Manage cart items
- Dynamic UI updates

### 🎨 Frontend UI
- Responsive design
- Clean and modern UI
- Product listing with images
- Category-based pages

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Atlas)

### Authentication
- JWT (JSON Web Token)
- bcrypt

---

## 📁 Project Structure

```bash
project/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── App.js

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/ecommerce-app.git

2️⃣ Backend Setup
cd backend
npm install

Create .env file:

PORT=8000
DATABASE_URL=your_mongodb_url
JWT_SECRET=your_secret_key

Run backend:

npm start
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🔗 API Endpoints
👤 User Routes
POST /api/signup → Register user
POST /api/login → Login user
📦 Product Routes
GET /item/v1/getItem → Get all items
POST /item/v1/createItem → Add item
PUT /item/v1/updateItem/:id → Update item
DELETE /item/v1/deleteItem/:id → Delete item
🔍 Search
GET /search?query=keyword → Search products
---
📌 Future Improvements
Payment Integration
Order Management System
Admin Dashboard
Wishlist Feature
---
## 📸 Screenshots
<img width="1599" height="807" alt="Screenshot 2026-04-14 142006" src="https://github.com/user-attachments/assets/ca0a3767-ecfe-4fdb-845f-2a64305e92bf" />
<img width="1583" height="811" alt="Screenshot 2026-04-14 141834" src="https://github.com/user-attachments/assets/d21ef2f9-327b-4e9f-a954-14917316b00f" />
<img width="1594" height="799" alt="Screenshot 2026-04-14 141921" src="https://github.com/user-attachments/assets/3ddf7d2f-eb04-459a-a52b-33b29beb7f9b" />
<img width="1582" height="809" alt="Screenshot 2026-04-14 141947" src="https://github.com/user-attachments/assets/b6790dad-a18b-4430-8ed7-8c6ee659895f" />
<img width="1596" height="805" alt="Screenshot 2026-04-14 141856" src="https://github.com/user-attachments/assets/c70c0760-f5b2-4b9d-b988-f2c20c1ad143" />


