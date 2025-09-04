# 🛒 GreenCart – Online Grocery Store

GreenCart is a **full-stack MERN (MongoDB, Express, React, Node.js)** grocery app. Customers can browse products, manage a shopping cart, save addresses, and place orders via **Cash on Delivery (COD)** or **Stripe Online Payments**. Sellers/Admins can manage products and view all orders.

👉 Live demo: [greencart-sand.vercel.app](https://greencart-sand.vercel.app)

---

##  Features

###  User
- Register & login using JWT & cookies
- Browse categories and products with offers
- Add/remove items in the cart
- Save delivery addresses
- Checkout with:
  - **Cash on Delivery (COD)**
  - **Stripe Online Payment** (secure with webhook order updates)
- View order history and real-time payment status

###  Seller/Admin
- Secure login (email + password via environment vars)
- Add / edit / delete products (with images hosted on Cloudinary)
- View all customer orders with payment status

---

##  Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React + Vite, Tailwind CSS           |
| Backend    | Node.js, Express, JWT auth           |
| Database   | MongoDB Atlas with Mongoose ODM      |
| Storage    | Cloudinary for product images        |
| Payments   | Stripe Checkout & Webhooks           |
| Hosting    | Vercel (frontend ), render (backend) |

---
## 📸 Screenshots

### 👤 User Side
- **Home Page**
  ![Home](./client/src/assets/Home.JPG)

- **All Products Page**
  ![All Products](./client/src/assets/all-products_page.JPG)

- **Single Product Page**
  ![Product Page](./client/src/assets/product_page.JPG)

- **Related Products**
  ![Related Products](./client/src/assets/related-product_page.JPG)

- **Cart Page**
  ![Cart](./client/src/assets/cart_page.JPG)

- **Sign Up Page**
  ![Sign Up](./client/src/assets/sign-up_page.JPG)

- **Login Page**
  ![Login](./client/src/assets/login_page.JPG)

- **My Orders Page**
  ![My Orders](./client/src/assets/my-orders_page.JPG)


### 🛍️ Seller/Admin Side
- **Seller Login**
  ![Seller Login](./client/src/assets/seller-login_page.JPG)

- **Seller Dashboard (Home)**
  ![Seller Home](./client/src/assets/seller-home_page.JPG)

- **Seller Product List**
  ![Seller Product List](./client/src/assets/seller-productlist_page.JPG)

- **Seller Orders**
  ![Seller Orders](./client/src/assets/seller-orders_page.JPG)


