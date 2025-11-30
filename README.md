# Chiron Website

Chiron marketing and blog website — landing pages, training articles, subscriber signup, and endurance sports content. Features a comprehensive blog migrated from WordPress with enhanced SEO and modern signup forms.

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
│   │   ├── Footer.astro           # Site footer with Instagram & GitHub links
│   │   ├── NewsletterSignup.astro # Simple newsletter signup form
│   │   ├── MailchimpSignup.astro  # Enhanced Mailchimp signup with beta access
│   │   ├── BlogCard.astro         # Blog post summary card
│   │   ├── TrainingArticleCard.astro # Training article card
│   │   └── SEO.astro              # Enhanced SEO component with Open Graph
│   ├── layouts/
│   │   ├── BaseLayout.astro       # Common layout with header/footer
│   │   ├── LandingLayout.astro    # Landing page layout
│   │   └── BlogLayout.astro       # Blog/article post layout
│   ├── pages/
│   │   ├── index.astro            # Home/landing page
│   │   ├── about.astro            # About page with founder info
│   │   ├── contact.astro          # Contact page with dual signup forms
│   │   ├── privacy.astro          # Privacy policy page
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

### WordPress Migration

The blog content has been successfully migrated from WordPress using `wordpress-export-to-markdown`. All 29+ blog posts include:

- Co-located images in individual post directories
- Proper frontmatter with tags, dates, and descriptions
- Enhanced SEO metadata
- Clean Markdown formatting

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

## 📧 Newsletter & Signup Forms

### MailchimpSignup Component

The enhanced `MailchimpSignup.astro` component includes:

- Beta access signup options
- User type selection (runner, cyclist, triathlete, etc.)
- Use case selection (personal training, coaching, clinical)
- Enhanced validation and error handling
- Modern responsive design

### NewsletterSignup Component

Simple newsletter signup form placeholder for basic email collection.

Both forms are configured for the Mailchimp audience and ready to use.

## 🚀 Deployment

This site is configured for GitHub Pages deployment with custom domain.

### Custom Domain Setup

- **Domain**: www.chironapp.com
- **CNAME file**: Configured in `public/CNAME`
- **SSL**: Automatically handled by GitHub Pages

### Automatic Deployment

Push to the `main` branch to trigger automatic deployment via GitHub Actions.

### DNS Configuration Required

To use the custom domain, set up DNS with your registrar:

```
Type: CNAME
Name: www
Value: chironapp.github.io
```

### Manual Setup

1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. Enter custom domain: `www.chironapp.com`
4. Enable "Enforce HTTPS"

### Configuration

Current configuration in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: "https://www.chironapp.com",
  // base path removed for custom domain
  // ...
});
```

## 🛠️ Development

### Available Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build production site    |
| `npm run preview` | Preview production build |
| `npm run astro`   | Run Astro CLI commands   |

### Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## 📄 License

See [LICENSE](LICENSE) for details.
