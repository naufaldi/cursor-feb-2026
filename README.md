# How to Ship AI Slop into Production

A presentation deck about engineering culture, AI-generated code quality, and implementing guardrails to ship production-ready software. Built with Next.js, Tailwind CSS, and Framer Motion.

**[View Live Presentation](https://cursor-deck-template.vercel.app)**

---

## About This Talk

This presentation explores a critical question in the age of AI-assisted development: *How do we prevent low-quality AI-generated code ("AI slop") from reaching production?*

### Key Topics Covered

- **The Nature of Slop**: Understanding that AI slop is really just amplified engineer slop
- **Engineering Guardrails**: Three-phase approach (Before/During/After code) to maintain quality
- **AI Automation**: Using agentic AI to automate documentation and enforce standards
- **Practical Tools**: MCP, Agent Skills, and AGENTS.md for better AI context

### Presentation Structure

| Section | Slides | Description |
|---------|--------|-------------|
| Opening | 1-3 | Introduction and speaker background |
| Problem Definition | 4-16 | What is slop? Examples and the reality of bad code |
| Solution: Guardrails | 17-27 | Engineering culture and quality processes |
| Automation with AI | 28-38 | Tools and demos for automating guardrails |
| Closing | 39-41 | Key takeaways and conclusion |

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/cursor-deck-template.git
cd cursor-deck-template

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the presentation.

---

## How It Works

**All presentation content lives in one file:** `lib/slides.ts`

```typescript
export const slides: Slide[] = [
  {
    id: 1,
    title: "How to Ship AI Slop into Production",
    content: "",
    type: "cover",
  },
  {
    id: 2,
    title: "Hi, I'm Naufaldi Rafif Satriya",
    content: `Senior Software Engineer...

**8 Years Experience** in Software Development`,
    type: "title",
  },
  // Add more slides...
];
```

Edit the slides array, save, and your presentation updates instantly.

---

## Slide Types

Each slide has a `type` that affects its layout and styling:

### `cover`

Bold opening slide with large typography. Perfect for provocative presentation titles.

```typescript
{
  id: 1,
  title: "How to Ship AI Slop into Production",
  content: "",
  type: "cover",
}
```

### `title`

Full-screen centered layout with the Cursor logo. Perfect for opening and closing slides.

```typescript
{
  id: 2,
  title: "Hi, I'm Naufaldi Rafif Satriya",
  content: `Senior Software Engineer at FMCG Company

**8 Years Experience in Software Development**

TypeScript, JavaScript • React, Next.js, Node.js`,
  type: "title",
}
```

### `section`

Section divider slides with large centered text and accent color. Use to separate major sections.

```typescript
{
  id: 4,
  title: "What is Slop?",
  content: "",
  type: "section",
}
```

### `content`

Standard slide with left-aligned content. Use for bullets, lists, and general content.

```typescript
{
  id: 5,
  title: "Slop Code Characteristics",
  content: `## What is Slop?

- Bad code that doesn't work as expected
- Hard to read and maintain
- Possibility of bugs (Security, Performance, etc.)
- Technical debt accumulation`,
  type: "content",
}
```

### `image`

Image-focused slides with balanced layout. Ideal for diagrams, screenshots, or visual content.

```typescript
{
  id: 9,
  title: "Example 1: Bad Code",
  content: `![Example 1: Bad Code](/bad-code-1.webp)

**Meaningless constants** - Creating constants like \`ONE = 1\` adds no semantic value`,
  type: "image",
}
```

### `quote`

Styled for impactful quotes with the orange accent border.

```typescript
{
  id: 15,
  title: "The Reality",
  content: `## Slop Code

> "Slop Code existed before AI.
> 
> AI just embraced it."`,
  type: "quote",
}
```

### `video`

Embed video content from external sources (Google Drive, YouTube, etc.).

```typescript
{
  id: 32,
  title: "PRD Demo",
  content: "",
  type: "video",
  video: "https://drive.google.com/file/d/.../preview",
}
```

### `code`

Optimized for code blocks with syntax highlighting.

```typescript
{
  id: 3,
  title: "Code Example",
  content: `## Implementation

\`\`\`typescript
function hello(name: string) {
  return \`Hello, \${name}!\`;
}
\`\`\``,
  type: "code",
}
```

### `diagram`

For ASCII art, architecture diagrams, or visual layouts.

---

## Markdown Features

The content field supports full GitHub Flavored Markdown:

| Feature | Syntax | Example |
|---------|--------|---------|
| Bold | `**text**` | **bold** |
| Italic | `*text*` | *italic* |
| Code | `` `code` `` | `code` |
| Link | `[text](url)` | [Cursor](https://cursor.com) |
| Image | `![alt](url)` | — |
| Table | GFM tables | ✓ |
| Blockquote | `> text` | ✓ |
| Lists | `- item` or `1. item` | ✓ |

### Code Blocks

Syntax highlighting is automatic. Just specify the language:

````markdown
```typescript
const x = 42;
```

```python
x = 42
```

```bash
npm install
```
````

---

## Navigation

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |

Click the progress bar at the bottom to jump to any slide.

---

## Customization

### Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --background: #14120b;      /* Dark background */
  --foreground: #edecec;      /* Light text */
  --accent-primary: #f54e00;  /* Cursor orange */
  --accent-secondary: #34785C; /* Green accent */
}
```

### Fonts

The template uses **CursorGothic** (included in `public/fonts/`). To use a different font, update the `@font-face` declarations in `globals.css`.

---

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/cursor-deck-template)

### Other Platforms

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

The build output is a standard Next.js app that works on any Node.js hosting platform.

---

## Project Structure

```
cursor-deck-template/
├── app/
│   ├── globals.css        # Cursor theme & typography
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Redirects to /slides/1
│   └── slides/[id]/       # Dynamic slide routes
├── components/
│   ├── Slide.tsx          # Main slide component
│   ├── SlideNav.tsx       # Navigation controls
│   ├── CodeBlock.tsx      # Syntax highlighting
│   └── MarkdownRenderer.tsx # Markdown to React
├── lib/
│   ├── slides.ts          # PRESENTATION CONTENT
│   └── types.ts           # TypeScript interfaces
└── public/
    ├── logo.svg           # Cursor logo
    ├── fonts/             # CursorGothic font files
    └── *.webp/png         # Slide images
```

---

## Key Takeaways from the Presentation

1. **AI Slop = Engineer Slop** (just amplified)
2. The problem is **engineering culture**, not the AI
3. **Guardrails work** for both human and AI code
4. AI can help **automate guardrails** (PRD/RFC generation)
5. Give AI better context (**MCP, Skills, Rules**)
6. **Engineering culture > Technology choice**

---

## Tips for Using This Template

1. **Start simple** — Begin with title, content, and code slides. Add variety as needed.

2. **Use speaker notes** — Each slide supports an optional `notes` field for your reference:
   ```typescript
   {
     id: 1,
     title: "...",
     content: "...",
     type: "content",
     notes: "Remember to mention X and Y here",
   }
   ```

3. **Test on your target display** — Run `npm run build && npm start` to test production mode before presenting.

4. **Keep slides scannable** — Aim for 3-5 bullet points max. Put details in speaker notes.

5. **Check example slides** — See `lib/slides.ts` for the full presentation structure and patterns.

---

## License

MIT — Use this template for any purpose.

---

Built by [Naufaldi Rafif Satriya](https://github.com/naufaldi), Senior Software Engineer.

Original template by [Agrim Singh](https://x.com/agrimsingh), Cursor Ambassador for Singapore.

Powered by Next.js.
