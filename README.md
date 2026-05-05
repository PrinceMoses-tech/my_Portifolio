# Moses Portfolio

Modern, responsive personal portfolio built with React (Vite), Tailwind CSS, and Framer Motion.

## Features

- Dark/light mode toggle with saved preference
- Sticky navbar with smooth-scroll navigation
- Responsive hero section with typing animation
- Circular profile image with gradient glow + hover effects
- About, Projects, and Contact sections
- Scroll-triggered reveal animations
- Local image support with fallback image handling

## Tech Stack

- React + Vite
- Tailwind CSS (`@tailwindcss/vite`)
- Framer Motion
- React Icons

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run development server:

   ```bash
   npm run dev
   ```

3. Build production bundle:

   ```bash
   npm run build
   ```

4. Preview production build:

   ```bash
   npm run preview
   ```

## Replace Profile Image

1. Put your image at: `src/assets/profile.jpg`
2. Keep a square-ish image for best circular framing.
3. The app already has a local fallback image (`src/assets/profile-fallback.svg`) if loading fails.

## Folder Structure

```text
src/
  assets/
  components/
    About.jsx
    Contact.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Projects.jsx
    SectionHeading.jsx
  data/
    portfolioData.js
  hooks/
    useTheme.js
    useTypingEffect.js
  App.jsx
  index.css
  main.jsx
```
