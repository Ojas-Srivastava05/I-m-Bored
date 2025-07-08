# 😐 I'm Bored

A fun, minimal Node.js web app that fetches random activity suggestions based on user preferences using the [Bored API](https://boredapi.com/). Deployed on Render.

## 🌐 Live Demo

👉 [https://i-m-bored-8135.onrender.com](https://i-m-bored-8135.onrender.com)

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** EJS, HTML, CSS
- **API:** [Bored API](https://boredapi.com/)
- **Deployment:** Render

---

## 📂 Project Structure

```
I-m-Bored/
├── public/              # Static assets (CSS, images, etc.)
├── views/               # EJS templates
│   └── index.ejs
├── .env                 # Environment variables (not pushed)
├── index.js             # Main server file
├── package.json
└── README.md
```

---

## 🚀 Running Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Ojas-Srivastava05/I-m-Bored.git
cd I-m-Bored
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
PORT=3000
API_URL=https://bored-api.appbrewery.com
NODE_ENV=development
```

### 4. Start the Server

```bash
node index.js
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌍 Deploying on Render

1. Go to [https://render.com](https://render.com) and log in.
2. Click **“New Web Service”** → connect your GitHub repo.
3. Set the following:

- **Build Command:** `npm install`
- **Start Command:** `node index.js`
- **Environment Variables:**

```
PORT=3000
API_URL=https://bored-api.appbrewery.com
NODE_ENV=production
```

4. Click **Deploy** and wait for it to go live!

---

## 🧠 Features

- 🎲 Random activity suggestions on page load
- 🎯 Filter activities by type and number of participants
- 🧾 Server-side rendering using EJS
- ⚠️ Graceful error handling and fallback messages

---

## 📸 Screenshots

_Add screenshots of your app UI here if needed._

---

## 🧑‍💻 Author

**Ojas Srivastava**  
🔗 [GitHub](https://github.com/Ojas-Srivastava05)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
