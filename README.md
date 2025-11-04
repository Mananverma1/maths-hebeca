# Maths Hebeca - Class 12 CBSE Mathematics Platform

A modern, beautiful React website for Maths Hebeca YouTube channel featuring comprehensive Class 12 CBSE Mathematics content.

## 🚀 Features

- ✨ Modern React + TypeScript + Vite setup
- 🎨 Beautiful UI with Tailwind CSS
- 🌙 Dark mode support
- 📱 Fully responsive design
- 🎯 React Router for navigation
- 🎭 Smooth animations and transitions
- 📚 13 Class 12 Mathematics chapters
- 📝 JEE Mains and CBSE notes support
- 💳 Payment integration ready

## 📤 Adding to GitHub

📖 **See [GITHUB_SETUP.md](./GITHUB_SETUP.md) for detailed instructions on uploading this website to GitHub.**

Quick steps:
1. Install Git (if needed)
2. Use GitHub Desktop (easiest) or Command Line
3. Create a new repository on GitHub
4. Push your code

## 📦 Installation

1. Navigate to the project directory:
```bash
cd C:\MathsHebeca
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🛠️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service.

## 📁 Project Structure

```
MathsHebeca/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx
│   │   └── ThemeToggle.tsx
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── ChapterNotes.tsx
│   │   └── NotesPreview.tsx
│   ├── data/
│   │   └── chapters.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  /* ... other colors */
}
```

### Adding Chapters
Edit `src/data/chapters.ts`:

```typescript
export const chapters: Chapter[] = [
  // Add your chapters here
];
```

## 🌐 Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 📝 Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 🎯 Future Enhancements

- [ ] PDF viewer integration
- [ ] Payment gateway (Razorpay/Stripe)
- [ ] Video player integration
- [ ] User authentication
- [ ] Progress tracking
- [ ] Download functionality

## 📄 License

© 2024 Maths Hebeca. All rights reserved.

## 👨‍💻 Development

Built with ❤️ using modern web technologies for an amazing user experience.
