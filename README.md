# 🎓 Laurnit — E-Learning Platform Concept (Frontend Prototype)

> **A localized EdTech frontend prototype designed for a University Business Idea Competition.**

Laurnit is a web application prototype that simulates a localized online learning marketplace tailored for Myanmar—conceptually framed as a "Coursera for Myanmar." This repository showcases the frontend application architecture, responsive user interfaces, and routing flows developed to demonstrate the business concept during competition evaluation.

---

## 💡 Business Idea & Concept

- **The Problem:** International e-learning platforms often lack localized Myanmar language content, tailored regional pricing options, and dedicated visibility for local educators.
- **The Concept:** A modern learning hub where top local instructors (_Sayars_ and _Teachers_) can list specialization tracks and modular courses for students and professionals across Myanmar.
- **The Prototype:** A fully interactive web UI built to demonstrate user journeys, course exploration, instructor profiles, and modular checkout flows to competition judges.

---

## 🎨 Key UI/UX Highlights

- 📚 **Interactive Course Directory:** Dynamic views for browsing skill-focused learning paths.
- 🧩 **Modular Enrollment Flow:** Features both full specialization bundles and a custom _Single Course Option_ selector that dynamically calculates totals based on user choices.
- 👨‍🏫 **Dedicated Instructor Pages:** Unique landing pages designed to highlight local educators and educational organizations.
- 📱 **Responsive Design:** Mobile-first, modern layout built with clean navigation structures and intuitive breadcrumbs.

---

## 🛠️ Frontend Tech Stack

- **Core Framework:** React + TypeScript + Vite
- **Navigation & Routing:** React Router (`react-router`)
- **Styling & Components:** Tailwind CSS
- **Hosting & Deployment:** Vercel

---

## 📂 Project Structure

```text
src/
├── components/           # Reusable UI components (Header, Footer, cards)
├── pages/                # Main application views
│   ├── Home.tsx          # Landing page & hero section
│   ├── Course.tsx        # Course catalog & filtering
│   ├── detailspages/     # Specialization overview pages (e.g., Data Analysis)
│   ├── singleoption/     # Modular single course selection pages
│   └── instructorsPages/ # Individual instructor profile pages
├── routes.tsx            # Client-side routing configuration
└── main.tsx              # Application entry point

📂 Project Structure
src/
├── components/ # Reusable UI components (Header, Footer, cards)
├── pages/ # Main application views
│ ├── Home.tsx # Landing page & hero section
│ ├── Course.tsx # Course catalog & filtering
│ ├── detailspages/ # Specialization overview pages (e.g., Data Analysis)
│ ├── singleoption/ # Modular single course selection pages
│ └── instructorsPages/ # Individual instructor profile pages
├── routes.tsx # Client-side routing configuration
└── main.tsx # Application entry point

⚙️ Setup & Local Development
Prerequisites
Node.js (v18.x or higher)

npm or yarn

Quick Start

1. Clone the repository:
   git clone https://github.com/saithuta776-spec/laurnit.git
   cd laurnit

2. Install dependencies:
   npm install

3. Run development server:
   npm run dev

4. Build for production:
   npm run build

🏆 Competition Context
This project was engineered as part of a University Innovation & Business Competition to demonstrate a viable software product lifecycle—from market research and target audience identification to interface design and production deployment.

⚖️ License
Distributed under the MIT License. See LICENSE for details.

Developed by Sai Thuta Hlaing
```
