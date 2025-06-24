
# 🎭 Artistly Platform – Frontend Demo

A responsive web demo of **Artistly.com**, a fictional platform to connect Event Planners and Artist Managers. Built with **Next.js**, **Tailwind CSS**, and **ShadCN UI**, this project showcases frontend architecture, UI rendering, and mock data handling.

---

## 🚀 Tech Stack

- **Next.js** (v13+ with App Router)
- **React** (Functional Components)
- **Tailwind CSS**
- **ShadCN/UI**
- **React Hook Form + Zod**
- **TypeScript**
- **pnpm**

---

## 📦 Installation

> Prerequisite: Ensure `pnpm` is installed. If not:
```bash
npm install -g pnpm
```

### Clone & Run the Project:

```bash
pnpm install         # Install dependencies
pnpm dev             # Start the development server
```

---

## 🧩 Project Structure

```bash
.
├── app/              # Next.js App directory (pages, routes)
├── components/       # UI components (Cards, Forms, Filters, etc.)
├── hooks/            # Custom React hooks
├── lib/              # Utilities and helper functions
├── public/           # Static assets
├── styles/           # Tailwind and global styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.mjs
```

---

## 📄 Pages Implemented

1. **Homepage**
   - Hero section, artist categories, CTA buttons.

2. **Artist Listing Page**
   - Responsive grid layout.
   - Filterable by category, location, price range.
   - Uses static JSON data.

3. **Artist Onboarding Form**
   - Multi-section form (Name, Bio, Category, Language, Fee, Image, Location).
   - Validated using `React Hook Form` + `Zod`.

4. **(Optional) Manager Dashboard**
   - Static table with artist data and actions.

---

## 📂 Deployment

Deployed on [Vercel](https://artisty-five.vercel.app/).  
Run this to build and deploy:

```bash
pnpm build       # For production build
pnpm start       # Serve production build locally
```

---

## ✅ Features

- Fully responsive and mobile-friendly
- Component reusability and modular structure
- Form validation and controlled inputs
- Filtering logic using mock JSON
- Clean code with TypeScript safety

---

## 🔗 Suggested UI Libraries

- [ShadCN UI](https://ui.shadcn.com/)
- [Tailwind UI](https://tailwindui.com)
- [Flowbite](https://flowbite.com)

---

## 📌 Notes

- No real backend; uses static or mock data.
- Designed as a test assignment for a frontend role.

---


