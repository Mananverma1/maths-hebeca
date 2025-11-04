# 🚀 How to Add Your Website to GitHub

Follow these steps to upload your Maths Hebeca website to a GitHub repository.

## Prerequisites

### Step 1: Install Git (if not already installed)

1. **Check if Git is installed:**
   - Open PowerShell or Command Prompt
   - Type: `git --version`
   - If you see a version number, Git is installed ✅
   - If you see an error, continue to install Git

2. **Download and Install Git:**
   - Go to: https://git-scm.com/download/win
   - Download the Windows installer
   - Run the installer (use default options)
   - **Restart your terminal/PowerShell after installation**

### Step 2: Create a GitHub Account (if you don't have one)

1. Go to: https://github.com
2. Click "Sign up" and create a free account
3. Verify your email address

---

## 📝 Upload Your Website to GitHub

### Method 1: Using GitHub Desktop (Easiest for Beginners)

1. **Download GitHub Desktop:**
   - Go to: https://desktop.github.com
   - Download and install GitHub Desktop

2. **Sign in to GitHub Desktop:**
   - Open GitHub Desktop
   - Sign in with your GitHub account

3. **Add Your Repository:**
   - Click "File" → "Add Local Repository"
   - Browse to: `C:\MathsHebeca`
   - Click "Add Repository"

4. **Create GitHub Repository:**
   - Click "Publish Repository" (top menu)
   - **Uncheck** "Keep this code private" if you want it public (or leave it checked for private)
   - Enter repository name: `maths-hebeca` (or your preferred name)
   - Click "Publish Repository"

✅ **Done!** Your website is now on GitHub!

---

### Method 2: Using Command Line (For Advanced Users)

#### Step 1: Initialize Git Repository

Open PowerShell in `C:\MathsHebeca`:

```powershell
cd C:\MathsHebeca
git init
```

#### Step 2: Add All Files

```powershell
git add .
```

#### Step 3: Create First Commit

```powershell
git commit -m "Initial commit: Maths Hebeca website"
```

#### Step 4: Create Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: `maths-hebeca` (or your preferred name)
3. Choose Public or Private
4. **DO NOT** initialize with README, .gitignore, or license (you already have these)
5. Click "Create repository"

#### Step 5: Connect and Push

GitHub will show you commands. Run these (replace `YOUR_USERNAME` with your GitHub username):

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/maths-hebeca.git
git push -u origin main
```

Enter your GitHub username and password (or use a Personal Access Token if password doesn't work).

✅ **Done!** Your website is now on GitHub!

---

## 🔐 Using Personal Access Token (Recommended)

GitHub no longer accepts passwords. Use a Personal Access Token instead:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name like "Local Development"
4. Select scopes: **repo** (check the box)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when pushing

---

## 📋 What Gets Uploaded?

The `.gitignore` file ensures these are **NOT** uploaded:
- ❌ `node_modules/` (dependencies)
- ❌ `dist/` (build files)
- ❌ `.env` files (secrets)
- ❌ Log files

These **ARE** uploaded:
- ✅ All source code (`src/`)
- ✅ Configuration files
- ✅ README and documentation
- ✅ Package files

---

## 🔄 Updating Your Repository (After Making Changes)

### Using GitHub Desktop:
1. Make changes to your code
2. Open GitHub Desktop
3. You'll see changes listed
4. Write a commit message (e.g., "Updated colors to teal theme")
5. Click "Commit to main"
6. Click "Push origin" (top menu)

### Using Command Line:
```powershell
cd C:\MathsHebeca
git add .
git commit -m "Your commit message here"
git push
```

---

## 🌐 Deploying Your Website (Optional)

After uploading to GitHub, you can deploy your website for free:

### Option 1: Netlify (Easiest)
1. Go to: https://www.netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

### Option 2: Vercel
1. Go to: https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

### Option 3: GitHub Pages
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: GitHub Actions
4. Or use a static site generator

---

## ❓ Troubleshooting

**Problem:** `git` command not found
- **Solution:** Install Git from https://git-scm.com/download/win

**Problem:** Authentication failed
- **Solution:** Use Personal Access Token instead of password

**Problem:** "Repository already exists" error
- **Solution:** Choose a different repository name

**Problem:** Files are too large
- **Solution:** Make sure `node_modules` is in `.gitignore` (it already is)

---

## ✨ Next Steps

1. ✅ Push your code to GitHub
2. ✅ Add a nice README.md (optional)
3. ✅ Deploy to Netlify/Vercel (optional)
4. ✅ Share your website with others!

**Happy coding!** 🚀

