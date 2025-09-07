# HGH-school

## Table of Contents
- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture & Folder Structure](#architecture--folder-structure)
- [Key Components & Pages](#key-components--pages)
- [Styling & Responsiveness](#styling--responsiveness)
- [Routing](#routing)
- [Google Maps Integration](#google-maps-integration)
- [Development & Build](#development--build)
- [Linting & Code Quality](#linting--code-quality)
- [How to Run Locally](#how-to-run-locally)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Project Overview
HGH-school is a modern, fully responsive school website built with React, TypeScript, Vite, and Tailwind CSS. It showcases a real-world school portal with dynamic news, notices, student and teacher corners, and rich information about the institution, all in Bangla and English. The project demonstrates best practices in modular frontend development, accessibility, and maintainability.

## Live Demo
> _Add your deployment link here if available._

## Features
- Multi-section homepage with banner, topbar, navbar, news ticker, and more
- Dynamic news and notice board
- Student and teacher corners with quick links
- Google Maps integration for location
- Recent posts and articles
- Responsive design for mobile, tablet, and desktop
- Bangla language support
- Social media links and contact info
- Modular, reusable React components

## Technology Stack
- **React** (TypeScript)
- **Vite** (build tool)
- **Tailwind CSS** (utility-first CSS)
- **PostCSS** (CSS processing)
- **ESLint** (linting)
- **React Router** (routing)
- **React Icons** (icon library)
- **@react-google-maps/api** (Google Maps integration)

## Architecture & Folder Structure
```
public/           # Static assets
src/
  App.tsx        # Main app component
  main.tsx       # Entry point
  index.css      # Global styles
  components/    # Reusable UI components
    Banner.tsx
    Footer.tsx
    Navbar.tsx
    NewsTicker.tsx
    GoogleMapComponent.tsx
    Corner.tsx
    Topbar.tsx
    Body/
      Body.tsx
      Headmaster.tsx
      President.tsx
      Institueinfo.tsx
      News.tsx
      NoticeBoard.tsx
      Recentpost.tsx
      Student-corner.tsx
      Sliderbox.tsx
    imgs/        # Image assets
      Headmaster.jpg
      President.jpg
      img-1.jpg ...
```

## Key Components & Pages
- **App.tsx**: Main layout, routing, and page structure
- **Topbar**: Date, contact info, email
- **Banner**: School banner image
- **Navbar**: Navigation with dropdowns for teacher/staff
- **NewsTicker**: Animated, scrolling news headlines
- **Corner**: Quick access to teacher/student sections
- **Body**: Main content area, split into left (Slider, Institute info, Student corner, Recent posts) and right (President, Headmaster, NoticeBoard, News)
- **Footer**: About, quick links, contact info, social media, Google Map, scroll-to-top
- **GoogleMapComponent**: Embedded Google Map of school location
- **NoticeBoard & News**: Dynamic lists of notices/news with links
- **Student-corner**: Grid of student resources (admit, forms, results, library, etc.)
- **Recentpost**: Latest updates and events
- **Headmaster & President**: Profile cards with images

## Styling & Responsiveness
- Tailwind CSS for rapid, utility-first styling
- Custom styles in `App.css`, `Banner.css`, etc.
- Mobile-first design, grid layouts, rounded corners, shadows
- Color palette: Deep blue (#005181), accent yellow (#ffc107), white backgrounds

## Routing
- Uses `react-router-dom` for client-side routing
- Main routes: Home, About, Admission, Teachers (General/Technical), Staff, Notice, Student Corner, Results, Gallery, Articles, Contact, Complaints
- Subroutes for news, articles, etc.

## Google Maps Integration
- Embedded Google Map via iframe in `GoogleMapComponent`
- Location: Hazi Golam Hossain Girl's High School, তাড়াইল-সাচাইল, কিশোরগঞ্জ

## Development & Build
- Vite for fast dev server and optimized builds
- TypeScript for type safety
- Scripts:
  - `npm run dev` — Start development server
  - `npm run build` — Build for production
  - `npm run preview` — Preview production build
  - `npm run lint` — Lint code

## Linting & Code Quality
- ESLint with recommended configs for JS, TS, React, hooks, refresh
- Strict TypeScript settings for reliability

## How to Run Locally
1. Clone the repo:
   ```powershell
   git clone <repo-url>
   cd HGH-school
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start development server:
   ```powershell
   npm run dev
   ```
4. Build for production:
   ```powershell
   npm run build
   ```
5. Preview production build:
   ```powershell
   npm run preview
   ```

## Future Improvements
- Add authentication and user management
- Integrate backend API for dynamic data
- Improve accessibility and SEO
- Add unit and integration tests
- Add admin dashboard for school management
- Expand student/teacher features (results, attendance, messaging)
- Deploy to cloud (Vercel, Netlify, etc.)

## License
MIT

---

This README provides a full, detailed overview for AI models (ChatGPT, Gemini) to analyze the technological stack, architecture, features, and implementation of the HGH-school project.
