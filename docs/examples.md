# Example Slides

This file contains example slides that demonstrate the different slide types and markdown features available in the Cursor Deck template.

## Slide 1: Title Slide

```typescript
{
  id: 1,
  title: "Your Presentation Title",
  content: `Subtitle or Event Name

**Your Name**

Your Role or Organization`,
  type: "title",
}
```

## Slide 2: Content Slide with Bullets

```typescript
{
  id: 2,
  title: "Agenda",
  content: `## What We'll Cover

- First topic or section
- Second topic or section  
- Third topic or section
- Fourth topic or section

**Pro tip:** Use bullet points for scannable content.`,
  type: "content",
}
```

## Slide 3: Content Slide with Table

```typescript
{
  id: 3,
  title: "Schedule or Comparison",
  content: `## Session Overview

| Time | Topic | Format |
|------|-------|--------|
| 0:00 - 0:15 | **Introduction** | Presentation |
| 0:15 - 0:45 | **Main Content** | Demo |
| 0:45 - 1:00 | **Q&A** | Discussion |

Tables support full GitHub Flavored Markdown.`,
  type: "content",
}
```

## Slide 4: Quote Slide

```typescript
{
  id: 4,
  title: "Key Insight",
  content: `## The Big Idea

> "This is a blockquote. Use it for memorable quotes, key insights, or to highlight important concepts that deserve special attention."
> 
> — Author Name, Source

Blockquotes stand out with the orange accent border.`,
  type: "quote",
}
```

## Slide 5: Code Slide

```typescript
{
  id: 5,
  title: "Code Example",
  content: `## Show Your Code

\`\`\`typescript
// Syntax highlighting works for many languages
interface Example {
  name: string;
  value: number;
}

function greet(example: Example): string {
  return \`Hello, \${example.name}!\`;
}
\`\`\`

Inline code like \`const x = 42\` also works in paragraphs.`,
  type: "code",
}
```

## Slide 6: Diagram Slide

```typescript
{
  id: 6,
  title: "Architecture Overview",
  content: `## System Diagram

\`\`\`
┌─────────────────────────────────────────────┐
│  Your Application                           │
├─────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Frontend │  │   API    │  │ Database │  │
│  └──────────┘  └──────────┘  └──────────┘  │
├─────────────────────────────────────────────┤
│  Infrastructure Layer                        │
└─────────────────────────────────────────────┘
\`\`\`

ASCII diagrams render beautifully in the monospace font.`,
  type: "diagram",
}
```

## Slide 7: Mixed Content Slide

```typescript
{
  id: 7,
  title: "Combining Elements",
  content: `## Mix and Match

You can combine **bold text**, *italics*, and \`inline code\` freely.

### Links Work Too

Check out [cursor.com](https://cursor.com) for more.

### Nested Lists

1. First ordered item
2. Second ordered item
3. Third ordered item`,
  type: "content",
}
```

## Slide 8: Closing Title Slide

```typescript
{
  id: 8,
  title: "Thank You",
  content: `## Questions?

---

**Your Presentation Title**

*Your memorable closing thought.*`,
  type: "title",
}
```
