# Swiggy Clone 🍔

**Live Demo**: [View Live](https://swiggy-opal-ten.vercel.app/)
**GitHub Repo**: [Gopalshukla0018/Swiggy](https://github.com/Gopalshukla0018/Swiggy)

---

## 📌 Overview

A fully responsive **Swiggy-inspired food delivery web app** built using modern frontend tools and fake REST API (JSON Server). It supports real-time menu loading, cart functionality, filters, and mobile-first design.

---

## ✨ Features

* 🔍 Restaurant search functionality
* 🍽 Dynamic menu fetching from live JSON Server
* ✅ Filter restaurants by rating
* 🛒 Redux-based cart system
* 🌐 Client-side routing with React Router
* 🔐 Authentication system *(Coming Soon)*
* 📱 Fully responsive UI (mobile-first)
* 🛠 Monitored API uptime using UptimeRobot (100% uptime, 212ms avg. response)

---

## 🧰 Tech Stack

* **React.js**
* **Tailwind CSS**
* **React Router**
* **Redux Toolkit**
* **Firebase** *(Coming Soon - for authentication)*
* **JSON Server** (Hosted on Render)
* **Vercel** (Frontend Hosting)
* **Render** (Backend API Hosting)
* **UptimeRobot** (API Monitoring)

---


## 🌐 Backend (JSON Server)

The REST API is hosted on **Render** using a custom `db.json` file.
**API Endpoint**: `https://swiggy-api-server-gopal.onrender.com/restaurants`

Example:

```bash
GET https://swiggy-api-server-gopal.onrender.com/restaurants
```

---



## 🚀 How to Run Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/Gopalshukla0018/Swiggy.git
   cd Swiggy
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm start
   ```

4. To run backend JSON Server locally (optional):

   ```bash
   npm install -g json-server
   json-server --watch db.json --port 3001
   ```

---

## 📌 Note

* This is a personal project made for learning React, Tailwind CSS, API integration, and state management using Redux.
* Authentication with Firebase is currently **under development (Coming Soon)**.

---

## 🙋‍♂️ Author

Made with ❤️ by [Gopal Shukla](https://github.com/Gopalshukla0018)

---
