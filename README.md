# Helman Dacuma - Portfolio & Blog

A modern portfolio and blog website built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Dashboard Home** - Central hub with overview of all sections
- 👤 **About Me** - Personal introduction, skills, and background
- 🖥️ **Projects** - Portfolio of featured projects and systems
- 📚 **Research** - Academic works and system documentation
- 📝 **Blog** - Markdown-based blog posts (including OJT Journey)
- 📧 **Contact** - Get in touch section

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Markdown** (for blog posts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
blog/
├── app/                 # Next.js App Router pages
├── components/          # React components
├── lib/                 # Utility functions
├── content/            # Blog markdown files
└── public/             # Static assets
```

## Adding Blog Posts

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter with title, date, and excerpt:
```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description"
---

Your content here...
```

3. The post will automatically appear on the blog page!

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy!

## License

Personal portfolio project.

