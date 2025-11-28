# Chiron Website

Chiron marketing and blog website — landing pages, training articles, and subscriber signup.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (20 recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/chironapp/chiron-website.git
cd chiron-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`.

### Build for Production

```bash
npm run build
```

The built site will be in the `./dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   └── images/              # Static images
├── src/
│   ├── components/
│   │   ├── Header.astro           # Site navigation
│   │   ├── Footer.astro           # Site footer with social links
│   │   ├── NewsletterSignup.astro # Mailchimp newsletter form
│   │   ├── BlogCard.astro         # Blog post summary card
│   │   ├── TrainingArticleCard.astro # Training article card
│   │   └── SEO.astro              # SEO meta tags component
│   ├── layouts/
│   │   ├── BaseLayout.astro       # Common layout with header/footer
│   │   ├── LandingLayout.astro    # Landing page layout
│   │   └── BlogLayout.astro       # Blog/article post layout
│   ├── pages/
│   │   ├── index.astro            # Home/landing page
│   │   ├── about.astro            # About page
│   │   ├── contact.astro          # Contact page with newsletter
│   │   ├── blog/
│   │   │   ├── index.astro        # Blog listing
│   │   │   └── [slug].astro       # Individual blog posts
│   │   └── training/
│   │       ├── index.astro        # Training articles listing
│   │       └── [slug].astro       # Individual training articles
│   └── content/
│       ├── config.ts              # Content collections config
│       ├── blog/                  # Blog post markdown files
│       └── training/              # Training article markdown files
├── astro.config.mjs               # Astro configuration
├── tailwind.config.cjs            # Tailwind CSS configuration
└── package.json
```

## 📝 Content Collections

### Adding a Blog Post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Post Title"
pubDate: "2025-11-28"
tags: ["tag1", "tag2"]
description: "Short description of the post"
image: "/images/post-image.jpg"
---

Your content here...
```

### Adding a Training Article

Create a new `.md` file in `src/content/training/`:

```markdown
---
title: "Training Article Title"
pubDate: "2025-11-28"
tags: ["marathon", "beginner"]
description: "Short description of the training article"
image: "/images/training-image.jpg"
---

Your content here...
```

## 📧 Newsletter Setup (Mailchimp)

To configure the Mailchimp newsletter form:

1. Open `src/components/NewsletterSignup.astro`
2. Replace `YOUR_MAILCHIMP_U_VALUE` with your Mailchimp `u` value
3. Replace `YOUR_MAILCHIMP_ID_VALUE` with your Mailchimp list `id`
4. Update the form action URL if needed

## 🚀 Deployment

This site is configured for GitHub Pages deployment.

### Automatic Deployment

Push to the `main` branch to trigger automatic deployment via GitHub Actions.

### Manual Setup

1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. The site will deploy on next push to `main`

### Configuration

Update `astro.config.mjs` if deploying to a different URL:

```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  base: '/your-base-path', // or '/' for root
  // ...
});
```

## 🛠️ Development

### Available Commands

| Command           | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Start development server                 |
| `npm run build`   | Build production site                    |
| `npm run preview` | Preview production build                 |
| `npm run astro`   | Run Astro CLI commands                   |

### Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## 📄 License

See [LICENSE](LICENSE) for details.
