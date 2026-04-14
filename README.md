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

### 🏠 Home Page
<img width="1920" height="1080" alt="Home" src="https://github.com/user-attachments/assets/de9f8583-0f1d-464a-beaf-c7751e08f28f" />

### 🔐 Login
<img width="1920" height="1080" alt="Login" src="https://github.com/user-attachments/assets/95d4d842-5638-4b37-ab50-edc9bd6cda35" />

### 📝 Signup
<img width="1920" height="1080" alt="Signup" src="https://github.com/user-attachments/assets/b462b414-f7ad-476b-8b62-ebab5e196d68" />

### 👔 Men's Collection
<img width="1920" height="1080" alt="Mens" src="https://github.com/user-attachments/assets/e8dc7211-b1bb-42bc-aafd-a770e3006e21" />

### 👗 Women's Collection
<img width="1920" height="1080" alt="Females" src="https://github.com/user-attachments/assets/c953d604-b13d-4834-8ae4-b4a3d9c96c66" />

### 👦 Kids Collection
<img width="1920" height="1080" alt="Kids" src="https://github.com/user-attachments/assets/061bc2eb-a9da-4431-b0cf-7a5578657221" />
