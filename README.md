# anenger.com

My personal site and blog, built with Next.js, MDX, and Tailwind CSS.

## Development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint
```

## Deployment

Hosted on Vercel. The project uses pnpm 12 (pinned via `packageManager`), so
the Vercel project needs the environment variable
`ENABLE_EXPERIMENTAL_COREPACK=1`; otherwise Vercel falls back to pnpm 10.

## Content

- **Profile, experience, projects, education**: `src/data/site.ts`
- **Blog posts**: add an `.mdx` file to `src/content/posts/` with frontmatter:

  ```mdx
  ---
  title: Post title
  description: A one-line summary for the index and RSS feed.
  date: 2026-09-26
  draft: true # optional; drafts are hidden in production
  ---
  ```

- **Photos**: drop web-sized images into `public/photos/`. They're sorted by
  filename, and the name becomes the alt text, so
  `07-brooklyn-bridge-at-dusk.jpg` becomes "Brooklyn bridge at dusk". Strip
  location metadata before adding them.
- **Resume**: `public/resume.pdf`

## Forking / Licensing

Feel free to use any of this code with attribution, but please don't copy the
whole site and just swap in your own text and images.
