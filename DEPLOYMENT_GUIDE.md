# Deployment Guide - GitHub & Vercel

This guide will help you deploy your website to GitHub and then to Vercel.

## 📋 Prerequisites

1. **GitHub Account**: Sign up at [github.com](https://github.com) if you don't have one
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) (you can use your GitHub account)

---

## 🚀 Step 1: Prepare Your Code

### 1.1 Make sure all images are in the `public` folder
All images that your website uses should be in the `public` folder, not in the root directory.

### 1.2 Build your project locally (optional, to test)
```bash
npm run build
```

---

## 📤 Step 2: Push to GitHub

### 2.1 Check your current git status
Your repository is already initialized. Let's commit your changes:

### 2.2 Add all necessary files
```bash
git add .
```

### 2.3 Commit your changes
```bash
git commit -m "Update website with local images and new cases"
```

### 2.4 Push to GitHub

**Option A: If you already have a GitHub repository:**
```bash
git push origin main
```

**Option B: If you need to create a new GitHub repository:**

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name your repository (e.g., "belila-dental-website")
4. **Don't** initialize with README, .gitignore, or license (you already have these)
5. Click "Create repository"
6. Copy the repository URL (it will look like: `https://github.com/yourusername/belila-dental-website.git`)
7. Run these commands (replace with your repository URL):
```bash
git remote add origin https://github.com/yourusername/belila-dental-website.git
git branch -M main
git push -u origin main
```

**If you get an error about diverged branches:**
```bash
git pull origin main --allow-unrelated-histories
# Resolve any conflicts if needed, then:
git push origin main
```

---

## 🌐 Step 3: Deploy to Vercel

### 3.1 Connect Vercel to GitHub

1. Go to [vercel.com](https://vercel.com) and sign in (use "Continue with GitHub")
2. Click "Add New..." → "Project"
3. Import your GitHub repository (the one you just pushed)
4. Vercel will automatically detect it's a Vite project

### 3.2 Configure Build Settings

Vercel should auto-detect these settings, but verify:

- **Framework Preset**: Vite
- **Root Directory**: `./` (leave as is)
- **Build Command**: `npm run build` (should be auto-filled)
- **Output Directory**: `dist` (should be auto-filled)
- **Install Command**: `npm install` (should be auto-filled)

### 3.3 Environment Variables

You don't need any environment variables for this project, so you can skip this step.

### 3.4 Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 1-2 minutes)
3. Once deployed, Vercel will give you a URL like: `https://your-project-name.vercel.app`

---

## 🔧 Step 4: Configure Vercel for React Router

Since you're using React Router, you need to add a configuration file for Vercel:

### 4.1 Create `vercel.json` file

I'll create this file for you with the correct configuration.

### 4.2 After deployment, update the configuration

Vercel should handle routing automatically, but if you have issues with routes not working, we'll add a `vercel.json` file.

---

## 📝 Step 5: Update Your Domain (Optional)

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your custom domain if you have one
3. Follow Vercel's instructions to configure DNS

---

## 🔄 Step 6: Future Updates

Whenever you make changes:

1. **Make your changes** in the code
2. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin main
   ```
3. **Vercel will automatically deploy** your changes (usually takes 1-2 minutes)

---

## ❓ Troubleshooting

### Images not showing on Vercel?
- Make sure all images are in the `public` folder
- Check that image paths start with `/` (e.g., `/image.jpg`)
- Clear browser cache and hard refresh (Ctrl+F5)

### Build fails on Vercel?
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Try building locally first: `npm run build`

### Routes not working?
- Vercel should handle this automatically for React Router
- If issues persist, we can add a `vercel.json` configuration file

---

## 📞 Need Help?

If you encounter any issues:
1. Check the Vercel deployment logs
2. Check the browser console for errors
3. Make sure all image files are in the `public` folder

