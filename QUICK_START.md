# 🚀 Quick Start - How to Open Maths Hebeca Website

## Method 1: Using Command Line (Easiest)

### Step 1: Open PowerShell or Command Prompt
- Press `Windows + X` and select "Windows PowerShell" or "Terminal"
- OR Press `Windows + R`, type `cmd` and press Enter

### Step 2: Navigate to the Project
Copy and paste this command:
```bash
cd C:\MathsHebeca
```

### Step 3: Install Dependencies (First Time Only)
```bash
npm install
```
**Note:** This might take 1-2 minutes the first time. Make sure you have Node.js installed!

### Step 4: Start the Development Server
```bash
npm run dev
```

### Step 5: Open in Browser
After running `npm run dev`, you'll see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Click on `http://localhost:5173/` or copy it to your browser!**

---

## Method 2: Using File Explorer + PowerShell

1. **Open File Explorer** and go to `C:\MathsHebeca`
2. **Right-click** in the folder and select **"Open in Terminal"** or **"Open PowerShell window here"**
3. Follow Steps 3-5 from Method 1

---

## Method 3: Using VS Code (If you have it)

1. Open VS Code
2. File → Open Folder → Select `C:\MathsHebeca`
3. Open Terminal in VS Code (Ctrl + ` or View → Terminal)
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Click the localhost URL that appears

---

## ⚠️ Important: Install Node.js First!

If you get an error saying `npm` is not recognized, you need to install Node.js:

1. Go to: https://nodejs.org/
2. Download the **LTS version** (recommended)
3. Install it (restart your computer if asked)
4. Verify installation by running:
   ```bash
   node --version
   npm --version
   ```

---

## 🎯 What You'll See

Once the server starts, you'll see:

1. **Homepage** - Beautiful hero section with statistics
2. **Features Section** - Why choose Maths Hebeca
3. **Chapters Grid** - All 13 Class 12 chapters
4. Click any chapter → Chapter Notes page
5. Choose JEE or CBSE → Notes Preview page

---

## 🛑 To Stop the Server

Press `Ctrl + C` in the terminal where the server is running

---

## 📝 Quick Commands Reference

```bash
# Navigate to project
cd C:\MathsHebeca

# Install dependencies (first time)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## ❓ Troubleshooting

**Problem:** `npm` command not found
- **Solution:** Install Node.js from nodejs.org

**Problem:** Port 5173 already in use
- **Solution:** Vite will automatically use another port (like 5174)

**Problem:** Module not found errors
- **Solution:** Run `npm install` again

**Problem:** Website looks broken
- **Solution:** Make sure all dependencies are installed: `npm install`

---

## ✨ Enjoy Your Website!

Once it's running, you'll have a beautiful, modern React website with:
- ✨ Smooth animations
- 🌙 Dark mode
- 📱 Fully responsive
- 🎨 Professional design

**Happy coding!** 🚀
