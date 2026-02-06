# Full Stack Deployment Guide (Next.js + Node/Express)

Your project is built with **Next.js** (Frontend) and **Node.js/Express** (Backend).
Here is the exact step-by-step guide to connecting them in production.

---

## Part 1: Deploy Backend to Render

1.  **Register/Login:** Go to [dashboard.render.com](https://dashboard.render.com/).
2.  **Create Service:**
    *   Click the **"New +"** button.
    *   Select **"Web Service"**.
3.  **Connect GitHub:**
    *   Find your repository `Saravanan061193/MNTprojectmanagement` and click **"Connect"**.
4.  **Configure Settings:**
    *   **Name:** `mnt-backend` (or similar)
    *   **Region:** Select one close to you (e.g., Singapore or Oregon).
    *   **Branch:** `main`
    *   **Root Directory:** `backend` (Important! This tells Render the server code is in the backend folder).
    *   **Runtime:** `Node`
    *   **Build Command:** `npm install`
    *   **Start Command:** `node server.js`
    *   **Instance Type:** `Free`
5.  **Environment Variables (CRITICAL):**
    *   Scroll down to the "Environment Variables" section. Add these:
    *   `NODE_ENV` = `production`
    *   `MONGODB_URI` = `mongodb://admin:Magizh%40Vault2026@ac-jr7hkva-shard-00-00.lvnxfa7.mongodb.net:27017,ac-jr7hkva-shard-00-01.lvnxfa7.mongodb.net:27017,ac-jr7hkva-shard-00-02.lvnxfa7.mongodb.net:27017/magizh_asset_manager?ssl=true&replicaSet=atlas-jy8dhk-shard-0&authSource=admin`
        *(This is the same one you use locally)*
    *   `JWT_SECRET` = `supersecretkeyShouldBeLongRandom`
    *   `ENCRYPTION_KEY` = `e4349147eb862f92f76711685ef34eb5188f5888e6319803855a40134f54d194`
6.  **Deploy:** Click **"Create Web Service"**.
7.  **Wait:** It will take a few minutes. Once it says "Live", copy the URL at the top (e.g., `https://mnt-backend.onrender.com`).

---

## Part 2: Connect Frontend (Vercel)

You do **NOT** need to change any code. The code is already written to be dynamic. You just need to tell Vercel where the backend is.

1.  **Go to Vercel Dashboard:** Open your project `mntprojectmanagement`.
2.  **Settings:** Click the **"Settings"** tab at the top.
3.  **Environment Variables:** Click **"Environment Variables"** on the left menu.
4.  **Add Variable:**
    *   **Key:** `NEXT_PUBLIC_API_URL`
    *   **Value:** `https://mnt-backend.onrender.com` (Paste your Render URL here).
    *   *Note: Do NOT include a slash `/` at the very end.*
5.  **Save:** Click "Save".
6.  **Redeploy:**
    *   For the changes to take effect, you must rebuild the app.
    *   Go to the **"Deployments"** tab.
    *   Click the **three dots (...)** next to the latest deployment.
    *   Select **"Redeploy"**.

---

## Part 3: Why This Works (Production Architecture)

1.  **Frontend (User's Browser):** When a user visits your Vercel site, the React/Next.js code loads in their browser.
2.  **API Call:** The frontend uses `NEXT_PUBLIC_API_URL` to know where to send login requests.
3.  **Backend (Render):** The request travels across the internet to Render.
4.  **Database (Atlas):** Render talks to MongoDB Atlas to check the password.
5.  **Response:** The result goes back to the user.

Locally, `localhost` works because everything is on one machine.
Online, `localhost` breaks because the "server" isn't on the user's laptop.
