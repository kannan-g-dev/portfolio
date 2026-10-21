# Kannan Ganesan — Engineering Portfolio

A modern, high-performance, accessible personal portfolio website for **Kannan Ganesan** (Software Engineer | Java Backend Developer).

Built with a dark, near-black technical aesthetic, restrained electric-blue accents, fine borders, responsive typography, and credible engineering case studies based on enterprise OKR backend systems at Profit.co.

---

## 1. Project Overview

This portfolio is designed to communicate three core engineering qualities immediately:
1. **Practical Backend Experience:** 3+ years working on enterprise backend systems, REST APIs, and microservices architectures.
2. **Real-world Problem Solving:** Deep-dive case studies focusing on OKR hierarchy propagation, check-in data synchronization, Elasticsearch index consistency, and API latency optimization.
3. **Engineering Rigor:** Systematic problem investigation, root cause analysis, reproducible fixes, and non-regressive validation.

All claims and metrics are honest and verifiable; there are no fabricated statistics, arbitrary proficiency bars, or invented accolades.

---

## 2. Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Language:** TypeScript 5 (Strict Checking enabled)
- **Styling:** Tailwind CSS 3 (Custom design tokens, dark & light themes)
- **Icons:** Lucide React
- **Motion:** Framer Motion & CSS transitions (Respects `prefers-reduced-motion`)
- **Linting & Quality:** ESLint 9 (Flat Config)
- **Package Manager:** npm

---

## 3. Prerequisites

- **Node.js:** v18.0.0 or later (Tested on Node v22.15.0)
- **npm:** v9.0.0 or later (Tested on npm 10.9.2)

---

## 4. Installation Instructions

Clone the repository and install dependencies:

```bash
cd portfolio
npm install
```

---

## 5. Local Development Command

Start the local Vite development server with hot module replacement:

```bash
npm run dev
```

The application will be accessible at: `http://localhost:3000` (or the next available port).

---

## 6. Production Build Command

Compile TypeScript types and bundle the static assets for production:

```bash
npm run build
```

Production output will be generated in the `dist/` directory:
- `dist/index.html`
- `dist/assets/*.css`
- `dist/assets/*.js`

---

## 7. Type-Check and Lint Commands

Verify strict TypeScript types without emitting files:

```bash
npm run typecheck
```

Check code style and lint rules with zero allowed warnings:

```bash
npm run lint
```

---

## 8. Production Preview Command

Locally preview the built production bundle:

```bash
npm run preview
```

---

## 9. Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg            # Custom SVG monogram favicon (KG)
│   └── resume.pdf             # (Optional) Drop your PDF resume here
├── src/
│   ├── components/
│   │   ├── About.tsx                 # About Me narrative & engineering focus cards
│   │   ├── Contact.tsx               # Contact information & accessible form
│   │   ├── EngineeringHighlights.tsx # "How I Approach Engineering" principles
│   │   ├── Experience.tsx            # Profit.co experience & responsibility groups
│   │   ├── Footer.tsx                # Footer, copyright & back-to-top action
│   │   ├── Hero.tsx                  # Two-column hero with technical runtime panel
│   │   ├── Navbar.tsx                # Sticky navbar, monogram, links, theme switch
│   │   ├── ProjectCard.tsx           # Case study card with tags and quick preview
│   │   ├── ProjectDetailsModal.tsx   # Detailed modal dialog for deep case study inspection
│   │   ├── Projects.tsx              # 4 featured engineering case studies grid
│   │   ├── Resume.tsx                # Resume section with honest availability handling
│   │   ├── SectionHeading.tsx        # Reusable accessible section header
│   │   └── ThemeToggle.tsx           # Dark/Light theme button
│   ├── config/
│   │   └── portfolio.ts              # Single source of truth for all content & links
│   ├── hooks/
│   │   ├── useActiveSection.ts       # Viewport scroll spy for navbar highlights
│   │   └── useTheme.ts               # Dark/Light theme manager with localStorage
│   ├── App.tsx                       # Main layout mounting all sections in sequence
│   ├── index.css                     # Tailwind directives, theme tokens, focus styles
│   └── main.tsx                      # React root entry point
├── eslint.config.js                  # ESLint 9 configuration
├── index.html                        # HTML shell, anti-flash script, meta tags
├── package.json                      # Dependencies and scripts
├── postcss.config.js                 # PostCSS config
├── tailwind.config.js                # Custom theme colors and typography tokens
├── tsconfig.json                     # Strict TypeScript compiler options
└── vite.config.ts                    # Vite build configuration
```

---

## 10. How to Update Professional Details

All profile text, headlines, and company information are centralized in:

`src/config/portfolio.ts`

To change your name, title, company, or hero text, modify the `personal` object:

```typescript
export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'Kannan Ganesan',
    monogram: 'KG',
    title: 'Software Engineer | Java Backend Developer',
    experienceSummary: '3+ years of software development experience',
    currentCompany: 'Profit.co',
    location: 'Sivakasi, Tamil Nadu, India',
    heroHeading: "Hi, I'm Kannan Ganesan.",
    heroHeadline: 'Building reliable backend systems with Java and modern software engineering.',
    heroIntroduction: "I'm a Software Engineer focused on backend development...",
    // ...
  },
};
```

---

## 11. How to Replace the Profile Image or Monogram

By default, the portfolio displays a tasteful technical SVG monogram (`KG`) alongside an architectural system runtime panel, avoiding invented portrait photos.

To use an actual profile photograph:
1. Place your image file in `public/` (for example, `public/profile.jpg`).
2. In `src/components/Hero.tsx`, replace the monogram badge with an `<img>` tag:
   ```tsx
   <img
     src="/profile.jpg"
     alt="Kannan Ganesan"
     className="w-14 h-14 rounded-xl object-cover border border-white/10"
   />
   ```

---

## 12. How to Add or Edit Employment Dates

In `src/config/portfolio.ts`, navigate to the `experience` array. The `period` field can be modified to reflect your exact start and end dates:

```typescript
experience: [
  {
    company: 'Profit.co',
    role: 'Software Engineer',
    location: 'Sivakasi, Tamil Nadu, India',
    period: '2021 – Present', // Update with exact dates
    current: true,
    // ...
  }
]
```

---

## 13. How to Edit Skills and Case Studies

### Skills
In `src/config/portfolio.ts`, locate `skillCategories`. You can add, edit, or categorize skills under:
- `programming`
- `backend`
- `dataAndSearch`
- `tools`
- `frontend`
- `engineeringPractices`

Each item has a `name` and an optional tag (`'Core' | 'Practiced' | 'Learning' | 'Daily Tool'`).

### Case Studies
In `src/config/portfolio.ts`, modify the `caseStudies` array. Each entry follows this typed model:
- `id`: Unique identifier
- `title`: Case study title
- `summary`: Short overview
- `context`: Background in the Profit.co OKR platform
- `challenge`: The technical problem or edge case
- `approach`: Array of steps taken
- `engineeringThemes`: Array of theme tags
- `outcome`: Verified outcome in production
- `technologies`: Array of tech badges

---

## 14. How to Add GitHub and Live-Demo Links

In `src/config/portfolio.ts`, add URLs to any case study:

```typescript
{
  id: 'case-study-okr-backend',
  // ...
  githubUrl: 'https://github.com/kannan-g-dev/your-repo', // Or leave empty ""
  demoUrl: 'https://demo.example.com',                    // Or leave empty ""
}
```

> **Note:** The UI automatically verifies URLs using `isValidUrl()`. If a link is empty, `#`, or points to a placeholder, it is completely hidden rather than showing a broken or disabled button.

---

## 15. How to Configure Contact Information

In `src/config/portfolio.ts`, update the `contact` block:

```typescript
contact: {
  email: 'kannangk4343@gmail.com',
  githubUrl: 'https://github.com/kannan-g-dev',
  linkedinUrl: 'https://linkedin.com/in/kannan-ganesan', // Replace placeholder
  location: 'Sivakasi, Tamil Nadu, India',
  responseExpectation: 'I typically respond within 24-48 hours.',
  // ...
}
```

---

## 16. How to Connect a Contact Form Service or Backend

The contact form includes client-side validation for required fields, minimum lengths, and email format.

### Default Static Behavior (Email Client Draft Workflow)
By default, `formService.configured` is set to `false`. When a visitor submits the form, it validates their input and opens their default email client with a pre-formatted message addressed to your email, avoiding fake "Message Sent!" alerts. A "Copy message text" button is also provided.

### Connecting an External Form Service (e.g., Formspree, Basin, Getform)
1. Sign up for a form endpoint provider (or deploy a serverless function).
2. In `src/config/portfolio.ts`, update `formService`:
   ```typescript
   formService: {
     configured: true,
     endpointUrl: 'https://formspree.io/f/your-form-id',
   }
   ```
3. The form will now perform a real asynchronous `POST` request with JSON body `{ name, email, subject, message }`, displaying genuine loading, success, and error feedback states.

---

## 17. How to Add or Replace the Resume PDF

1. Export your resume as a PDF.
2. Save it as `public/resume.pdf`.
3. In `src/config/portfolio.ts`, set `enabled: true`:
   ```typescript
   resume: {
     enabled: true,
     filePath: '/resume.pdf',
     fileName: 'Kannan_Ganesan_Resume.pdf',
     note: 'Resume PDF is available for download.',
   }
   ```
4. The site will verify file availability and activate the **Download Resume PDF** and **View in New Tab** buttons. If the file is not present or disabled, it cleanly falls back to an "Available upon request" workflow.

---

## 18. How to Configure SEO and Social Preview Metadata

In `src/config/portfolio.ts`, update the `seo` block:

```typescript
seo: {
  title: 'Kannan Ganesan | Software Engineer | Java Backend Developer',
  description: 'Portfolio of Kannan Ganesan — Software Engineer with 3+ years...',
  ogTitle: 'Kannan Ganesan — Software Engineer & Java Backend Developer',
  ogDescription: 'Backend Software Engineer specializing in Java, Spring Boot...',
  siteUrl: 'https://kannan-g-dev.github.io/portfolio/',
}
```

Additional static meta tags and preconnect hints are maintained in `index.html`.

---

## 19. Deployment Guidance for Static Hosting

Because this is a pure static single-page application, it can be hosted on any static hosting provider.

### GitHub Pages Deployment

There are two easy methods to deploy this Vite/React portfolio to GitHub Pages:

#### Method 1: Automated GitHub Actions (Recommended)
An automated workflow is configured in `.github/workflows/deploy.yml`.
1. Push your latest changes to GitHub:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```
2. Go to your GitHub repository on github.com.
3. Click **Settings** → **Pages** (under Code and automation in the left sidebar).
4. Under **Build and deployment** → **Source**, change from *Deploy from a branch* to **GitHub Actions**.
5. GitHub will now automatically run the build and deploy your portfolio to `https://<username>.github.io/<repo>/` on every push!

#### Method 2: One-Command Deploy via `gh-pages`
If you prefer deploying compiled assets directly to a `gh-pages` branch:
1. Run the deploy script in your terminal:
   ```bash
   npm run deploy
   ```
   *(This automatically runs `npm run build` and pushes the `dist/` bundle to a `gh-pages` branch).*
2. In your repository **Settings** → **Pages**:
   - **Source:** *Deploy from a branch*
   - **Branch:** Select `gh-pages` and folder `/ (root)`
   - Click **Save**.

### Vercel / Netlify / Cloudflare Pages
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node.js Version:** `20.x` or `22.x`

---

## 20. Known Limitations & Unconfigured Integrations

- **Contact Form Backend:** Unless an external form endpoint URL is provided in `portfolioConfig.contact.formService.endpointUrl`, the form operates via the honest email client draft workflow (`mailto:`).
- **Resume PDF:** `public/resume.pdf` is not bundled by default to ensure no outdated or private information is committed without your review. Add your PDF to `public/` and toggle `enabled: true` in `portfolio.ts` when ready.
- **LinkedIn Profile:** Stored as an empty placeholder `""` until you provide your exact profile handle. The UI hides the button until a valid URL is configured.
