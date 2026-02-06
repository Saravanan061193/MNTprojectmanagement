DEPLOYING THE BACKEND TO VERCEL
===============================

Your backend is currently a standard Express app. To make it run on Vercel (which uses Serverless functions), we have already configured the necessary files for you.

Follow these exact steps to deploy your backend to Vercel:

STEP 1: PUSH YOUR CODE
----------------------
1. Open your terminal in VS Code.
2. Run these commands to save the changes we made:
   git add .
   git commit -m "Configure backend for Vercel deployment"
   git push

STEP 2: CREATE BACKEND PROJECT IN VERCEL
----------------------------------------
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click "Add New..." -> "Project".
3. Select the SAME GitHub repository (`Saravanan061193/MNTprojectmanagement`).
4. **CRITICAL STEP**:
   - In the "Import Project" screen, look for "Root Directory".
   - Click "Edit".
   - Select the `backend` folder.
   - Click "Continue".
5. In "Environment Variables", add the following (copy from your local .env):
   - `MONGODB_URI`: (Your MongoDB Connection String)
   - `JWT_SECRET`: supersecretkeyShouldBeLongRandom
   - `ENCRYPTION_KEY`: (Your Encryption Key)
6. Click "Deploy".

STEP 3: UPDATE FRONTEND CONNECTION
----------------------------------
1. Once the backend is deployed, copy its URL (e.g., `https://mnt-backend-xyz.vercel.app`).
2. Go back to your **Frontend** project on Vercel.
3. Go to **Settings** -> **Environment Variables**.
4. Add or Edit the variable:
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: `https://mnt-backend-xyz.vercel.app` (The URL you just copied)
5. Go to "Deployments" and click "Redeploy" on the latest deployment so it picks up the new variable.

SUCCESS
-------
Your frontend (on Vercel) will now talk to your backend (also on Vercel).
