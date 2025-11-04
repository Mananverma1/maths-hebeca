# 📥 How to Install Node.js and npm

## Quick Installation Guide

### Step 1: Download Node.js

1. **Open your web browser** and go to:
   ```
   https://nodejs.org/
   ```

2. **Download the LTS version** (Recommended for most users)
   - You'll see two big green buttons
   - Click on the **LEFT button** that says **"LTS"** (Long Term Support)
   - The file will be something like: `node-v20.x.x-x64.msi` (for Windows)

### Step 2: Install Node.js

1. **Find the downloaded file** (usually in your Downloads folder)
2. **Double-click** the `.msi` file to run the installer
3. **Follow the installation wizard:**
   - Click "Next" on welcome screen
   - Accept the license agreement → Click "Next"
   - Keep the default installation path → Click "Next"
   - **IMPORTANT:** Make sure "Add to PATH" is checked ✅
   - Click "Install"
   - Wait for installation to complete
   - Click "Finish"

### Step 3: Verify Installation

1. **Close and reopen** your PowerShell or Command Prompt
   - (This is important so it picks up the new PATH)

2. **Test if it's installed:**
   ```bash
   node --version
   npm --version
   ```

   You should see version numbers like:
   ```
   v20.11.0
   10.2.4
   ```

   ✅ **If you see version numbers, you're all set!**

### Step 4: Now You Can Run Your Website!

After Node.js is installed, go back to the project and run:

```bash
cd C:\MathsHebeca
npm install
npm run dev
```

---

## 🎯 Direct Download Links

**Windows 64-bit (Most Common):**
- https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi

**Windows 32-bit (If your computer is older):**
- https://nodejs.org/dist/v20.11.0/node-v20.11.0-x86.msi

---

## ⚠️ Troubleshooting

### Problem: "node is not recognized" after installation
**Solution:**
1. Restart your computer
2. Close and reopen PowerShell/Command Prompt
3. Try again

### Problem: Installation fails
**Solution:**
- Make sure you're logged in as Administrator
- Disable antivirus temporarily during installation
- Try downloading again

### Problem: Don't know if you need 32-bit or 64-bit?
**Solution:**
1. Right-click "This PC" or "My Computer"
2. Select "Properties"
3. Look for "System type" - it will say either:
   - 64-bit operating system → Download 64-bit
   - 32-bit operating system → Download 32-bit

---

## ✅ After Installation

Once Node.js is installed, npm (Node Package Manager) is automatically included!

You can now:
- ✅ Run `npm install` to install dependencies
- ✅ Run `npm run dev` to start your website
- ✅ Use npm to install any other packages

---

## 📞 Need Help?

If you're still having issues:
1. Make sure you downloaded from the official site: nodejs.org
2. Restart your computer after installation
3. Open a NEW PowerShell/Command Prompt window
4. Try the commands again

**Good luck! 🚀**
