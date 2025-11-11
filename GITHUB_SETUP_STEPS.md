# Quick Setup Steps for GitHub & Vercel

## Step 1: Create a New GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner → **"New repository"**
3. Fill in:
   - **Repository name**: `belila-dental-website` (or any name you prefer)
   - **Description**: "Belila Dental Clinic Website" (optional)
   - **Visibility**: Choose Public or Private
   - **DO NOT** check "Initialize with README" (you already have files)
4. Click **"Create repository"**

## Step 2: Copy Your Repository URL

After creating the repository, GitHub will show you a page with setup instructions. 
**Copy the HTTPS URL** - it will look like:
```
https://github.com/YOUR_USERNAME/belila-dental-website.git
```

## Step 3: Connect Your Local Project to GitHub

Come back here and tell me your GitHub repository URL, and I'll help you connect it.

OR you can run these commands yourself (replace YOUR_USERNAME and REPO_NAME):

```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

## Step 4: Deploy to Vercel

After your code is on GitHub:

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. Click **"Add New..."** → **"Project"**
5. Find and select your repository (`belila-dental-website`)
6. Vercel will auto-detect settings:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Click **"Deploy"**
8. Wait 1-2 minutes for deployment
9. Your website will be live at: `https://your-project-name.vercel.app`

## ✅ That's it!

Your website will automatically update whenever you push changes to GitHub.

