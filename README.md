# 🛒 GreenCart – Online Grocery Store

GreenCart is a **full-stack MERN (MongoDB, Express, React, Node.js)** based online grocery shopping app.  
It allows customers to browse products, manage cart, place orders with **Cash on Delivery (COD)** or **Stripe Online Payments**, and track orders.  
Sellers/Admins can manage products and view all orders.

---

## ✨ Features

### 👤 User
- Sign up / Login with JWT authentication
- Browse grocery products with offers
- Add/Remove items to cart
- Save multiple delivery addresses
- Checkout with:
  - **Cash on Delivery (COD)**
  - **Stripe Online Payment** (secure with webhooks)
- View order history & order status updates

### 🛍️ Seller/Admin
- Secure login with admin credentials
- Add / Edit / Delete products
- Manage orders from customers
- View all orders with payment status

---

## ⚙️ Tech Stack

- **Frontend:** React + Vite, TailwindCSS  
- **Backend:** Node.js + Express  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JWT + Cookies  
- **Payments:** Stripe Checkout + Webhooks  
- **Hosting:** Vercel (frontend & backend), MongoDB Atlas (DB), Cloudinary (images)  

## 📦 Project Structure

