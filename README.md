# Hydra — Water Bottle Landing Page

A modern, responsive landing page for **Hydra**, a conceptual reusable water bottle brand. Built with Vanilla TypeScript, Tailwind CSS v4, and Vite.

## Live Demo

[View Live Website](https://hydra-landing-page-gamma.vercel.app/)

## Features

- Responsive layout for mobile, tablet, and desktop
- Interactive mobile navigation menu
- Sticky header with scroll-based shadow
- Active navigation highlighting
- Smooth scrolling between sections
- Product showcase and testimonials
- SEO and Open Graph metadata
- Custom SVG favicon

## Tech Stack

- **HTML5** — Semantic page structure
- **TypeScript** — Interactive functionality
- **Tailwind CSS v4** — Utility-first styling
- **Vite** — Development server and production build
- **Vercel** — Deployment and hosting

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/hydra-landing-page.git
cd hydra-landing-page
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Production Build

Build the application:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
hydra-landing-page/
├── public/
│   ├── images/
│   └── favicon.svg
├── src/
│   ├── features/
│   │   ├── active-navigation.ts
│   │   ├── mobile-menu.ts
│   │   └── sticky-header.ts
│   ├── main.ts
│   └── style.css
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Deployment

The project is deployed on Vercel using the following configuration:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## Disclaimer

Hydra is a conceptual brand created for a frontend portfolio project. Product imagery is used for demonstration purposes only.

## License

This project is intended for educational and portfolio purposes.
