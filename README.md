# Yash Lab

A personal development playground and design lab built to experiment with premium micro-interactions, custom UI components, and modern frontend technologies.

---

## Features

- **Theme Aware**: Seamless support for Light and Dark modes using `next-themes`, complete with custom SVG assets and theme-synchronized styling.
- **Micro-interactions**: Rich animations and transitions powered by Framer Motion (`motion`).
- **Modern Tech Stack**: Bootstrapped with Next.js 16 and styled using Tailwind CSS v4.
- **Fast Execution**: Designed to be run and managed utilizing the high-performance Bun runtime.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State & Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Runtime & Package Manager**: [Bun](https://bun.sh/)

---

## Project Structure

```bash
├── app/                  # Next.js App Router pages (Home, Showcase, Docs, etc.)
├── components/           # Reusable UI component library
│   ├── Buttons/          # Magnetic and interactive buttons
│   ├── Cards/            # Dynamic card layouts
│   ├── Tabs/             # Liquid transition tabs
│   ├── ui/               # Base shadcn component configurations
│   ├── Header.tsx        # Responsive site header with theme toggle
│   └── Footer.tsx        # Detailed footer featuring outline theme-friendly background SVGs
├── public/               # Static assets (logos, icons)
└── package.json          # Dependency and script definitions
```

---

## Featured Components

- **Buttons**:
  - `Magnetic Button`: Attracts to the cursor within a radius for a highly tactile experience.
  - `Slide Button`: Fluid slide hover effect transitions.
- **Cards**:
  - `User Card`: Interactive profiles showcasing responsive hover elements and visual highlights.
- **Tabs**:
  - `Liquid Tabs`: Liquid-style sliding transition bar indicator between active states.

---

## Getting Started

First, make sure you have [Bun](https://bun.sh/) installed.

### 1. Install Dependencies

```bash
bun install
```

### 2. Run the Development Server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production

```bash
bun run build

https://lab.yashanand.com
```
