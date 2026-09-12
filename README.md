# 🚀 MD Farzid Ahmed - Flutter Developer Portfolio Website

Welcome to your official personal portfolio web codebase! This project is completely standalone, light-weight, and built with modern HTML5, CSS3 Glassmorphism, and Vanilla JavaScript.

---

## 📁 Project Folder Structure

```
farzid-portfolio/
│
├── index.html            # Main webpage structure, sections, and Resume modal
├── portfolio-data.js     # ⚙️ All Projects data, App Store/Play Store links & Theme presets
├── style.css             # Design system, glassmorphism cards, animations & color themes
├── script.js             # Interactive engine (typewriter, modals, toast, clipboard copy)
└── README.md             # Guide on how to customize and deploy
```

---

## 🛠️ How to Customize Later (কীভাবে পরিবর্তন করবেন)

### 1. প্রজেক্ট পরিবর্তন বা নতুন প্রজেক্ট অ্যাড করতে:
Open `portfolio-data.js` in any code editor (VS Code, Sublime, Notepad):
- Edit existing projects: **Direct Bazar**, **Iploy**, **BreathEasy222**, **Romeo Reminder**.
- Add a new project by following the template commented at the bottom of the `projects` list.

### 2. কন্ট্যাক্ট ইনফো ও টেক্সট পরিবর্তন করতে:
Open `index.html`:
- Phone: `+880 1751757891`
- Email: `farzidahmed150@gmail.com`
- Location: `Mohakhali, Dhaka, Bangladesh`
- GitHub / LinkedIn URL

### 3. কালার থিম পরিবর্তন করতে:
Website-এর উপরে ডানপাশের **Palette Icon** থেকে ৫টি ভিন্ন ভিন্ন কালার থিম বেছে নিতে পারবেন অথবা `portfolio-data.js` এর `colorThemes` সেকশন থেকে যেকোনো কালার কোড পরিবর্তন করতে পারেন।

---

## 💻 How to Run Locally (কম্পিউটারে রান করার নিয়ম)

### Option 1: Direct Double Click
Simply double click on `index.html` to open it directly in any browser (Chrome, Safari, Edge).

### Option 2: Live Local Server
Open your terminal inside this folder and run:
```bash
python3 -m http.server 3000
```
Then visit: `http://localhost:3000`

---

## 🌐 How to Deploy to the Web (ইন্টারনেটে লাইভ করার নিয়ম)

### 1. GitHub Pages (Free)
1. Push this folder to a GitHub repository (e.g., `farzid-portfolio`).
2. Go to **Repository Settings** -> **Pages**.
3. Select `main` branch and `/root`, then click **Save**.
4. Your website will be live at `https://farzidahmed.github.io/farzid-portfolio/`.

### 2. Vercel / Netlify (1-Click Free Hosting)
1. Drag and drop this `farzid-portfolio` folder directly into [netlify.com/drop](https://app.netlify.com/drop) or import from GitHub on [vercel.com](https://vercel.com).
2. It will instantly give you a free live URL (e.g. `farzid-ahmed.vercel.app`).
