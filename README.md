# BlogSphere – Blog Website

A modern full-stack **blog website** where users can create, read, update, delete, and search blog posts through a clean and responsive interface.

> 📌 This project was previously hosted on an **AWS EC2 instance**. The instance has been terminated to manage costs, so the project is **currently not deployed live**.

---

## 🚀 Project Overview

BlogSphere is designed as a complete blogging platform with:
- A frontend built with HTML, CSS, and JavaScript
- A backend REST API built with Node.js and Express
- MySQL for persistent blog storage

The goal is to provide a simple, practical, and attractive blog management experience.

---

## ✨ Features

- 📝 Create new blog posts
- 📚 View all blogs in latest-first order
- 🔍 Search blogs by title
- 📄 Read full blog details
- ✏️ Edit existing blogs
- 🗑️ Delete blogs
- ✅ Server-side validation for blog content
- 🎨 Responsive and modern UI

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Node.js, Express.js |
| Database | MySQL |
| API Style | REST |

---

## 🖼️ Screenshots / Preview

Project screenshots will be added in future updates.

> You can add images later in a `screenshots/` folder and link them here for a richer project preview.

---

## ⚙️ Setup & Run Instructions

### 1) Clone the repository
```bash
git clone https://github.com/Krishna-Sahu0-0/blog-website-AWS.git
cd blog-website-AWS
```

### 2) Backend setup
```bash
cd backend
npm install
npm start
```
The backend runs on port `3000` by default.

### 3) Database setup
- Create a MySQL database (for example: `blog_app`).
- Update DB credentials in:
  - `backend/config/db.js`
- Ensure your `blogs` table includes fields used by the app (`id`, `title`, `content`, `author_name`, `created_at`).

### 4) Frontend setup
- Open `frontend/index.html` in your browser.
- Update API base URL in:
  - `frontend/js/config.js`
  so it points to your local or hosted backend.

---

## ☁️ Deployment Notes

- ✅ Previously deployed on AWS EC2
- ⚠️ EC2 instance has been terminated
- ℹ️ No live deployment is currently available

This repository remains a strong showcase of a full-stack blog platform and can be redeployed anytime.

---

## 👤 Contact / Author

**Krishna Sahu**

- GitHub: [@Krishna-Sahu0-0](https://github.com/Krishna-Sahu0-0)

If you liked this project, feel free to star the repo and share feedback.
