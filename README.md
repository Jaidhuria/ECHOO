# ECHOO

# 📡 Echoo – Real-Time Chat Engine

**Echoo** is a modern, high‑performance real‑time chat application designed for 2026‑ready systems. Built using the **MERN Stack** (MongoDB, Express, React, Node.js) and powered by **Socket.io**, Echoo delivers ultra‑low latency communication with a clean, scalable architecture.

It is designed for developers who want a production‑grade chat engine with security, performance, and extensibility at its core.

---


## 🚀 Key Highlights

* ⚡ Real‑time bi‑directional messaging using WebSockets
* 🔐 Secure authentication with JWT & Bcrypt
* 🎙 Built‑in WebRTC voice communication
* 🟢 Live online/offline user presence
* ✍️ Typing indicators in real time
* 📱 Fully responsive, modern glassmorphic UI
* 🧩 Scalable architecture for future features

---

## 🛠 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Framer Motion
* Redux Toolkit

### Backend

* Node.js
* Express.js
* Socket.io

### Database

* MongoDB Atlas

### Security

* JWT Authentication
* Bcrypt Password Hashing
* 256‑bit Encryption (v1.1.0+)

---

## 📌 Versioning & Release History

| Version    | Status     | Release Date | Major Updates                                   |
| ---------- | ---------- | ------------ | ----------------------------------------------- |
| **v1.2.0** | 🔵 Planned | Mar 2026     | Group chats, message reactions, media sharing   |
| **v1.1.0** | 🟢 Latest  | Jan 2026     | WebRTC voice support, end‑to‑end encryption     |
| **v1.0.5** | 🟡 Stable  | Dec 2025     | Optimized Socket.io polling, Redux improvements |
| **v1.0.0** | ⚪ Initial  | Oct 2025     | MVP release: private messaging & JWT auth       |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Jaidhuria/echoo.git
cd echoo
```

---

### 2️⃣ Install Dependencies

#### Backend / Root

```bash
npm install
```

#### Frontend

```bash
cd client
npm install
cd ..
```

---

### 3️⃣ Environment Configuration

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
NODE_ENV=development
```

---

### 4️⃣ Run the Application

```bash
npm run dev
```

This will start both the **client** and **server** concurrently.

---

## 📂 Useful Git Commands

### Sync & Save Changes

```bash
git status
git add .
git commit -m "feat: add user authentication"
git push origin main
```

### Feature‑Based Workflow

```bash
git checkout -b new-feature
git merge new-feature
```

---

## ✨ Core Features Breakdown

* **Instant Messaging** – Zero‑lag communication using Socket.io
* **Typing Indicators** – See when other users are typing
* **Online Presence** – Live status tracking
* **Voice Communication** – WebRTC powered voice calls
* **Secure Login** – JWT‑based authentication
* **Modern UI** – Smooth animations & responsive design

---

## 🧭 Future Roadmap

* 📂 File & media sharing
* 👥 Group chat & channels
* 😀 Emoji & reaction support
* 🔔 Push notifications
* 🌙 Dark / light theme toggle
* 📊 Admin dashboard & analytics

---

## 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this software with proper attribution.

---

## 🤝 Contribution

Contributions are welcome! Feel free to fork the repository, create a feature branch, and submit a pull request.

---

### ⭐ If you like this project, don’t forget to star the repository!
