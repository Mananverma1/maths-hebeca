# 🚀 Setup Instructions for Maths Hebeca Website

## Quick Start Guide

### Step 1: Install Node.js
Make sure you have Node.js installed (version 18 or higher).
Download from: https://nodejs.org/

### Step 2: Navigate to Project
```bash
cd C:\MathsHebeca
```

### Step 3: Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide Icons

### Step 4: Start Development Server
```bash
npm run dev
```

The website will be available at:
**http://localhost:5173**

### Step 5: Build for Production
```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 📁 Project Structure

```
C:\MathsHebeca\
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── data/            # Data files (chapters)
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.ts       # Vite configuration
```

## ✨ Features

✅ Modern React + TypeScript  
✅ Beautiful Tailwind CSS design  
✅ Dark mode support  
✅ Fully responsive  
✅ React Router navigation  
✅ Smooth animations  
✅ All 13 Class 12 chapters  
✅ JEE and CBSE notes support  

## 🎨 Customization

- **Colors**: Edit `src/index.css` CSS variables
- **Chapters**: Edit `src/data/chapters.ts`
- **Styling**: Tailwind classes in components

## 📦 Dependencies

All dependencies are listed in `package.json`. No external API calls required - fully self-contained!

## 🌐 Deployment

Ready to deploy to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting

Just run `npm run build` and upload the `dist` folder!

## 💡 Troubleshooting

**Issue**: `npm install` fails
- Solution: Make sure Node.js is installed and try `npm cache clean --force`

**Issue**: Port 5173 already in use
- Solution: Vite will automatically use the next available port

**Issue**: TypeScript errors
- Solution: Run `npm install` again to ensure all types are installed

---

🎉 **You're all set!** Run `npm run dev` and start developing!
