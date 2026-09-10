# 🧱 Dev Stack Builder

A clean, responsive React website that helps developers explore modern technologies and build a personalized development stack. The interface follows the provided Dev Stack UI with a gradient orange → pink → violet visual identity.

## ✨ Features

- **Technology explorer** — 12 frontend, backend, database, language, styling, and DevOps technologies loaded from a local JSON file.
- **Interactive stack builder** — add technologies once, see them in **Your Stack**, remove individual items, or clear everything.
- **Responsive UI + toast feedback** — mobile navigation, responsive card layouts, loading state, and React-Toastify notifications for every stack action.

## 🛠️ Technology Used

- React.js
- Vite
- JavaScript (ES6+)
- CSS3
- JSON
- React-Toastify

## 📁 Project Structure

```text
DevStack/
├── public/
│   ├── assets/
│   │   ├── banner-stack.png
│   │   ├── hamburger.png
│   │   └── logo-text.png
│   └── data/
│       └── technologies.json
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── StackPanel.jsx
│   │   └── TechnologyCard.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Run Locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

## 🧠 React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like UI inside JavaScript. It makes React components easier to read and build.

### 2. What is the difference between props and state?

**Props** are data passed into a component by its parent. **State** is data a component owns and can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing values in a component. I used it for the technology list, selected stack, loading status, and mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after rendering. I used it to fetch `technologies.json` when the app starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique key helps React identify which list item changed, was added, or was removed so it can update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. In `StackPanel`, an empty-stack message is shown when `stack.length === 0`; otherwise the selected technologies are displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data through **props**. A child can send information back by calling a callback function that the parent passes as a prop. Here, `App` passes `technology` and `onAdd` to `TechnologyCard`.

## 🎨 Theme

The shared gradient is defined once in `src/styles.css` as `--gradient`, using orange → pink → violet. It powers the brand, hero highlight, and primary buttons, so the theme can be changed from one place.

## 📌 Notes

The technology data is intentionally kept outside the React component and fetched from `/data/technologies.json`, as required by the assignment.
