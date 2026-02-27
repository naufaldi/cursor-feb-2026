# Rethinking AI Prompting: From One-Shot to Agentic Workflows

Complete presentation structure for workshop format.

Note: The canonical, presentation-ready deck (including Intro + Bio slides) is in the "Full Slides Array" section below.

---

## Point 1: Rethinking AI Prompting - from one-shot to agentic workflows

### Slide 1.1: Section Cover
```typescript
{
  id: 1,
  title: "Rethinking AI Prompting",
  content: "From One-Shot to Agentic Workflows",
  type: "section",
}
```

### Slide 1.2: The One-Shot Illusion
```typescript
{
  id: 2,
  title: "The One-Shot Illusion",
  content: `## How We Think AI Works

- Single prompt
- Single output
- Whole task solved at once
- No iteration
- No feedback loop

**Reality: This rarely works for real tasks**`,
  type: "content",
}
```

### Slide 1.3: How Engineers Actually Work
```typescript
{
  id: 3,
  title: "How Engineers Actually Work",
  content: `## Engineering Is Iterative

- Read task
- Ask clarification
- Explore codebase
- Plan approach
- Implement
- Run tests
- Fix issues
- Iterate

**Engineering is iterative by nature**`,
  type: "content",
}
```

### Slide 1.4: Why Expect AI to Be Perfect?
```typescript
{
  id: 4,
  title: "Why Do We Expect AI To Be Perfect In One Shot?",
  content: `## Questions to Consider

- Do you never get feedback?
- Do you never refactor?
- Do you never read logs?
- Do you never adjust after code review?

---

**If humans need feedback loops, why design AI without them?**`,
  type: "content",
}
```

### Slide 1.5: The Missing Ingredient
```typescript
{
  id: 5,
  title: "The Missing Ingredient: Feedback",
  content: `## Systems Without Feedback Drift

### One Shot
\`\`\`
Input → Output
\`\`\`

### Agentic Workflow
\`\`\`
Context → Plan → Execute → Observe → Adjust → Repeat
\`\`\`

**Every stable system has feedback. Without it, systems drift.**`,
  type: "diagram",
}
```

---

## Point 2: Prompting vs AI Agents - what actually changes

### Slide 2.1: Section Cover
```typescript
{
  id: 6,
  title: "Prompting vs AI Agents",
  content: "What Actually Changes",
  type: "section",
}
```

### Slide 2.2: Not Just Better Prompts
```typescript
{
  id: 7,
  title: "Not Just Better Prompts",
  content: `## A Fundamental Paradigm Shift

### One-Shot Prompting
- Static instructions
- One opportunity to get it right
- No ability to course-correct
- Success depends entirely on prompt quality

### Agentic Workflows
- Dynamic execution
- Self-correcting capabilities
- Multiple attempts until success
- Success depends on feedback loop design`,
  type: "content",
}
```

### Slide 2.3: The Paradigm Shift Table
```typescript
{
  id: 8,
  title: "The Paradigm Shift",
  content: `## Key Differences

| Aspect | One-Shot | Agentic |
|--------|----------|---------|
| Control | Full (you write everything) | Delegated (AI decides next step) |
| Error handling | None | Built-in retry/adjust |
| Context window | Fixed at start | Expands with execution |
| Output quality | Single attempt | Iteratively improved |
| Time to result | Immediate | Minutes, but higher quality |`,
  type: "content",
}
```

### Slide 2.4: What Stays the Same
```typescript
{
  id: 9,
  title: "What Stays the Same",
  content: `## You Are Still Responsible

- Clear requirements still matter
- Context is still king
- Review is still essential
- You are still responsible for the outcome

---

**The shift is in HOW we collaborate with AI, not WHO is responsible**`,
  type: "quote",
}
```

---

## Point 3: Building a simple agent loop for real coding tasks

### Slide 3.1: Section Cover
```typescript
{
  id: 10,
  title: "Building a Simple Agent Loop",
  content: "For Real Coding Tasks",
  type: "section",
}
```

### Slide 3.2: Anatomy of an Agent Loop
```typescript
{
  id: 11,
  title: "Anatomy of an Agent Loop",
  content: `## The Simplest Agent Loop

\`\`\`typescript
async function agentLoop(task: string) {
  const context = await gatherContext(task);
  let plan = await createPlan(context);
  
  while (!isComplete(plan)) {
    const result = await executeStep(plan.currentStep);
    const observation = await observeResult(result);
    
    if (observation.hasIssues) {
      plan = await adjustPlan(plan, observation);
    } else {
      plan = await advancePlan(plan);
    }
  }
  
  return plan.finalOutput;
}
\`\`\``,
  type: "code",
}
```

### Slide 3.3: Real Example - Building a Form Component
```typescript
{
  id: 12,
  title: "Real Example: Building a Form Component",
  content: `## The Agent Loop in Action

### Step 1: Gather Context
- Read existing form components
- Check validation patterns
- Identify state management approach

### Step 2: Create Plan
1. Create form structure
2. Add validation schema
3. Implement error handling
4. Add submit logic`,
  type: "content",
}
```

### Slide 3.4: Execute and Observe
```typescript
{
  id: 13,
  title: "Execute & Observe",
  content: `## The Iterative Part

### Step 3: Execute & Observe
- Generate initial code
- Run type check → 3 errors found
- Observe: Missing imports, wrong types

### Step 4: Adjust
- Add missing imports
- Fix type definitions
- Re-run type check → Pass

### Step 5: Iterate Until Done
- Test with real data → Edge case found
- Adjust validation → Re-test → Pass
- Final review → Done`,
  type: "content",
}
```

### Slide 3.5: Key Components You Need
```typescript
{
  id: 14,
  title: "Key Components You Need",
  content: `## Five Essential Pieces

1. **Context Gatherer** - Reads files, understands codebase
2. **Planner** - Breaks task into steps
3. **Executor** - Runs code/tools
4. **Observer** - Checks results, finds issues
5. **Adjuster** - Modifies plan based on observations

**Missing any piece, and the loop breaks.**`,
  type: "content",
}
```

---

## Point 4: Designing checkpoints to keep agents on track

### Slide 4.1: Section Cover
```typescript
{
  id: 15,
  title: "Designing Checkpoints",
  content: "Keeping Agents on Track",
  type: "section",
}
```

### Slide 4.2: Why Checkpoints Matter
```typescript
{
  id: 16,
  title: "Why Checkpoints Matter",
  content: `## Without Checkpoints
- Agent drifts from original goal
- Accumulates small errors into big problems
- Wastes time on wrong path
- Hard to recover when things go wrong

## With Checkpoints
- Regular validation keeps agent aligned
- Early detection of drift
- Clear rollback points
- Confidence at each stage`,
  type: "content",
}
```

### Slide 4.3: Types of Checkpoints
```typescript
{
  id: 17,
  title: "Types of Checkpoints",
  content: `## Three Essential Types

### 1. Validation Checkpoints
\`\`\`
Type check passes? → Continue
Tests pass? → Continue
\`\`\`

### 2. Alignment Checkpoints
\`\`\`
Still aligned with PRD? → Continue
Drifting from requirements? → Re-align
\`\`\`

### 3. Quality Checkpoints
\`\`\`
Complexity < threshold? → Continue
Coverage > minimum? → Continue
\`\`\``,
  type: "code",
}
```

### Slide 4.4: Checkpoint Design Principles
```typescript
{
  id: 18,
  title: "Checkpoint Design Principles",
  content: `## Four Key Principles

### 1. Fast Feedback
Checkpoints should run quickly. Fail fast.

### 2. Clear Pass/Fail Criteria
Binary results. No ambiguity.

### 3. Actionable Failures
Know what to do when checkpoint fails.

### 4. Progressive Validation
Cheap checks first (lint, type), expensive later (e2e).`,
  type: "content",
}
```

### Slide 4.5: Form Component Checkpoints Example
```typescript
{
  id: 19,
  title: "Form Component Checkpoints",
  content: `## Example Checkpoint Flow

| Stage | Checkpoint | Action if Fail |
|-------|------------|----------------|
| After generate | Type check | Fix type errors |
| After fix types | Unit tests | Fix test failures |
| After unit tests | Manual review | Address feedback |
| After review | Integration test | Fix integration issues |
| Final | Accessibility check | Fix a11y issues |`,
  type: "content",
}
```

---

## Point 5: Keeping AI aligned from start to finish

### Slide 5.1: Section Cover
```typescript
{
  id: 20,
  title: "Keeping AI Aligned",
  content: "From Start to Finish",
  type: "section",
}
```

### Slide 5.2: Alignment Drift - The Silent Killer
```typescript
{
  id: 21,
  title: "Alignment Drift: The Silent Killer",
  content: `## How Drift Happens

**Start:** "Build a user profile form with validation"

**Iteration 1:** Generates basic form ✓

**Iteration 2:** Adds validation logic ✓

**Iteration 3:** "While I'm here, let me add a profile picture upload"
⚠️ SCOPE CREEP

**Iteration 4:** "Actually, let me redesign the whole profile system"
❌ FULLY OFF TRACK`,
  type: "diagram",
}
```

### Slide 5.3: Strategies to Maintain Alignment
```typescript
{
  id: 22,
  title: "Strategies to Maintain Alignment",
  content: `## Four Proven Strategies

### 1. Reference the Source of Truth
Keep PRD/RFC in context throughout.

### 2. Regular Re-anchoring
Every 3-5 iterations, re-state the goal.

### 3. Scope Boundaries
Define what NOT to do explicitly.

### 4. Human-in-the-Loop Milestones
Review after major components.`,
  type: "content",
}
```

### Slide 5.4: Practical Alignment Checklist
```typescript
{
  id: 23,
  title: "Practical Alignment Checklist",
  content: `## Before Each Iteration, Ask:

- [ ] Does this serve the original user story?
- [ ] Would a user find this valuable?
- [ ] Is this the simplest path to the goal?
- [ ] Am I still within the defined scope?

---

**If any answer is "no" → Stop and re-align**`,
  type: "content",
}
```

### Slide 5.5: Summary - The Complete Flow
```typescript
{
  id: 24,
  title: "Summary: The Complete Flow",
  content: `## The Full Agentic Workflow

\`\`\`typescript
async function alignedAgentWorkflow(task) {
  const prd = await understandRequirements(task);
  
  while (!complete) {
    if (!stillAligned(prd)) {
      await reAlign(prd);
    }
    
    const result = await executeStep();
    const checkpoint = await runCheckpoint(result);
    
    if (!checkpoint.passed) {
      await fixIssues(checkpoint.issues);
    }
    
    await updateStatus();
  }
  
  return finalResult;
}
\`\`\``,
  type: "code",
}
```

### Slide 5.6: The Mindset Shift
```typescript
{
  id: 25,
  title: "The Mindset Shift",
  content: `## From Command to Collaboration

| From | To |
|------|-----|
| "AI, build this" | "AI, let's build this together" |
| Set and forget | Continuous collaboration |
| Trust the output | Verify the process |
| One perfect prompt | Iterative refinement |
| AI works for you | You work with AI |

---

**Engineering culture > Technology choice**`,
  type: "content",
}
```

---

## Live Demo Section

### Slide 26: Demo Introduction
```typescript
{
  id: 26,
  title: "Live Demo",
  content: `## One-Shot vs Agentic: Head-to-Head

We'll build the same complex form component using both approaches.

**Task:** Multi-step registration form with:
- Email validation
- Password strength checking
- Terms acceptance
- Error handling
- Accessibility

Watch the difference.`,
  type: "content",
}
```

### Slide 27: Demo - One-Shot Attempt
```typescript
{
  id: 27,
  title: "Demo: One-Shot Approach",
  content: `## Single Prompt, Single Output

\`\`\`
"Build a registration form with email validation, 
password strength checking, terms checkbox, error handling, 
and accessibility. Use React and TypeScript."
\`\`\`

**Watch for:**
- What gets missed
- Edge cases not handled
- Error handling gaps
- Accessibility issues`,
  type: "content",
}
```

### Slide 28: Demo - Agentic Approach
```typescript
{
  id: 28,
  title: "Demo: Agentic Approach",
  content: `## Context → Plan → Execute → Observe → Adjust

**Step 1:** Gather context (existing forms, patterns)
**Step 2:** Create plan (5 steps)
**Step 3:** Execute step 1 (form structure)
**Step 4:** Check types → Pass
**Step 5:** Execute step 2 (validation) → Issue found
**Step 6:** Adjust → Fix → Re-check
**Step 7:** Continue until all steps complete

**Watch the feedback loop in action.**`,
  type: "content",
}
```

### Slide 29: Demo Results Comparison
```typescript
{
  id: 29,
  title: "Demo Results",
  content: `## The Comparison

| Aspect | One-Shot | Agentic |
|--------|----------|---------|
| Lines of code | Similar | Similar |
| Type safety | ⚠️ Missing types | ✓ Fully typed |
| Edge cases | ✗ Missing | ✓ Handled |
| Accessibility | ✗ Missing labels | ✓ WCAG compliant |
| Test coverage | ✗ None | ✓ Unit tests |
| Time spent | 30 seconds | 3 minutes |
| Production ready | ✗ No | ✓ Yes |

**Quality > Speed**`,
  type: "content",
}
```

---

## Closing Section

### Slide 30: Key Takeaways
```typescript
{
  id: 30,
  title: "Key Takeaways",
  content: "",
  type: "section",
}
```

### Slide 31: Remember This
```typescript
{
  id: 31,
  title: "Remember This",
  content: `## Core Principles

- **One-shot is an illusion** - Real engineering is iterative
- **Feedback loops are essential** - Every stable system needs them
- **Checkpoints prevent drift** - Validation at each stage
- **Alignment requires vigilance** - Regular re-anchoring
- **Work WITH AI, not FOR you** - Collaboration, not delegation

**Agentic workflows mirror how engineers actually work.**`,
  type: "content",
}
```

### Slide 32: Workshop Exercise
```typescript
{
  id: 32,
  title: "Your Turn: Workshop Exercise",
  content: `## Hands-On Practice

**Task:** Build a simple todo list component

**Constraints:**
- Must use agentic workflow
- Minimum 3 checkpoints
- Handle empty state
- Add item validation
- Mark items complete

**Time:** 30 minutes

**Deliverable:** Share your checkpoint design`,
  type: "content",
}
```

### Slide 33: Final Quote
```typescript
{
  id: 33,
  title: "Final Thought",
  content: `## The Real Change

> "The question isn't whether AI can write code.
>
> The question is: are we giving AI the same feedback loops
> that make human engineers effective?"

---

**Thank you!**

Questions?`,
  type: "quote",
}
```

---

## Full Slides Array

```typescript
import { Slide } from "./types";

export const agenticWorkflowSlides: Slide[] = [
  // ============================================================
  // INTRO
  // ============================================================
  {
    id: 1,
    title: "Rethinking AI Prompting",
    content: "From One-Shot to Agentic Workflows",
    type: "cover",
  },
  {
    id: 2,
    title: "Hi, I'm Naufaldi Rafif Satriya",
    content: `Senior Software Engineer at FMCG Company

**8 Years Experience in Software Development**

TypeScript, JavaScript • React, Next.js, Node.js

**8 Months Experience in Vibe Coding**

Tools: Cursor (Agent Harness), Opencode
Frameworks: Ralph, BMAD, Beads
Models: Anthropic, Gemini, GPT, MiniMax`,
    type: "title",
  },

  // ============================================================
  // POINT 1: RETHINKING AI PROMPTING
  // ============================================================
  {
    id: 3,
    title: "Rethinking AI Prompting",
    content: "From One-Shot to Agentic Workflows",
    type: "section",
  },
  {
    id: 4,
    title: "The One-Shot Illusion",
    content: `## How We Think AI Works

- Single prompt
- Single output
- Whole task solved at once
- No iteration
- No feedback loop

**Reality: This rarely works for real tasks**`,
    type: "content",
  },
  {
    id: 5,
    title: "How Engineers Actually Work",
    content: `## Engineering Is Iterative

- Read task
- Ask clarification
- Explore codebase
- Plan approach
- Implement
- Run tests
- Fix issues
- Iterate

**Engineering is iterative by nature**`,
    type: "content",
  },
  {
    id: 6,
    title: "Why Do We Expect AI To Be Perfect In One Shot?",
    content: `## Questions to Consider

- Do you never get feedback?
- Do you never refactor?
- Do you never read logs?
- Do you never adjust after code review?

---

**If humans need feedback loops, why design AI without them?**`,
    type: "content",
  },
  {
    id: 7,
    title: "The Missing Ingredient: Feedback",
    content: `## Systems Without Feedback Drift

### One Shot
\`\`\`
Input → Output
\`\`\`

### Agentic Workflow
\`\`\`
Context → Plan → Execute → Observe → Adjust → Repeat
\`\`\`

**Every stable system has feedback. Without it, systems drift.**`,
    type: "diagram",
  },

  // ============================================================
  // POINT 2: PROMPTING VS AI AGENTS
  // ============================================================
  {
    id: 8,
    title: "Prompting vs AI Agents",
    content: "What Actually Changes",
    type: "section",
  },
  {
    id: 9,
    title: "Not Just Better Prompts",
    content: `## A Fundamental Paradigm Shift

### One-Shot Prompting
- Static instructions
- One opportunity to get it right
- No ability to course-correct
- Success depends entirely on prompt quality

### Agentic Workflows
- Dynamic execution
- Self-correcting capabilities
- Multiple attempts until success
- Success depends on feedback loop design`,
    type: "content",
  },
  {
    id: 10,
    title: "The Paradigm Shift",
    content: `## Key Differences

| Aspect | One-Shot | Agentic |
|--------|----------|---------|
| Control | Full (you write everything) | Delegated (AI decides next step) |
| Error handling | None | Built-in retry/adjust |
| Context window | Fixed at start | Expands with execution |
| Output quality | Single attempt | Iteratively improved |
| Time to result | Immediate | Minutes, but higher quality |`,
    type: "content",
  },
  {
    id: 11,
    title: "What Stays the Same",
    content: `## You Are Still Responsible

- Clear requirements still matter
- Context is still king
- Review is still essential
- You are still responsible for the outcome

---

**The shift is in HOW we collaborate with AI, not WHO is responsible**`,
    type: "quote",
  },

  // ============================================================
  // POINT 3: BUILDING A SIMPLE AGENT LOOP
  // ============================================================
  {
    id: 12,
    title: "Building a Simple Agent Loop",
    content: "For Real Coding Tasks",
    type: "section",
  },
  {
    id: 13,
    title: "Anatomy of an Agent Loop",
    content: `## The Simplest Agent Loop

\`\`\`typescript
async function agentLoop(task: string) {
  const context = await gatherContext(task);
  let plan = await createPlan(context);
  
  while (!isComplete(plan)) {
    const result = await executeStep(plan.currentStep);
    const observation = await observeResult(result);
    
    if (observation.hasIssues) {
      plan = await adjustPlan(plan, observation);
    } else {
      plan = await advancePlan(plan);
    }
  }
  
  return plan.finalOutput;
}
\`\`\``,
    type: "code",
  },
  {
    id: 14,
    title: "Real Example: Building a Form Component",
    content: `## The Agent Loop in Action

### Step 1: Gather Context
- Read existing form components
- Check validation patterns
- Identify state management approach

### Step 2: Create Plan
1. Create form structure
2. Add validation schema
3. Implement error handling
4. Add submit logic`,
    type: "content",
  },
  {
    id: 15,
    title: "Cursor Plan Mode (Practical Guardrail)",
    content: `## Make Planning the Default

In Cursor, you can start in **Plan Mode** before writing code.

- Clarify requirements first
- Research the codebase and find relevant files
- Produce a step-by-step plan (with file paths)
- **Wait for approval** before edits

**Why it matters:** planning reduces rework and prevents drift.`,
    type: "content",
  },
  {
    id: 16,
    title: "Context Hygiene (So Agents Stay Accurate)",
    content: `## Keep the Context Clean

- Tag a file when you *know* it matters
- Otherwise, let the agent search and pull context
- Start a new conversation when changing tasks or when the agent gets confused
- Reference prior work with **@Past Chats** instead of copy-pasting everything

**Rule of thumb:** less noise → better decisions.`,
    type: "content",
  },
  {
    id: 17,
    title: "Execute & Observe",
    content: `## The Iterative Part

### Step 3: Execute & Observe
- Generate initial code
- Run type check → 3 errors found
- Observe: Missing imports, wrong types

### Step 4: Adjust
- Add missing imports
- Fix type definitions
- Re-run type check → Pass

### Step 5: Iterate Until Done
- Test with real data → Edge case found
- Adjust validation → Re-test → Pass
- Final review → Done`,
    type: "content",
  },
  {
    id: 18,
    title: "Key Components You Need",
    content: `## Five Essential Pieces

1. **Context Gatherer** - Reads files, understands codebase
2. **Planner** - Breaks task into steps
3. **Executor** - Runs code/tools
4. **Observer** - Checks results, finds issues
5. **Adjuster** - Modifies plan based on observations

**Missing any piece, and the loop breaks.**`,
    type: "content",
  },

  // ============================================================
  // POINT 4: DESIGNING CHECKPOINTS
  // ============================================================
  {
    id: 19,
    title: "Designing Checkpoints",
    content: "Keeping Agents on Track",
    type: "section",
  },
  {
    id: 20,
    title: "Why Checkpoints Matter",
    content: `## Without Checkpoints
- Agent drifts from original goal
- Accumulates small errors into big problems
- Wastes time on wrong path
- Hard to recover when things go wrong

## With Checkpoints
- Regular validation keeps agent aligned
- Early detection of drift
- Clear rollback points
- Confidence at each stage`,
    type: "content",
  },
  {
    id: 21,
    title: "Hooks = Enforced Checkpoints (in Cursor)",
    content: `## Make Guardrails Non-Optional

Cursor **Hooks** let you observe, block, or extend the agent loop with scripts.

Examples:
- Block risky shell commands
- Gate writes (SQL, deploys) behind approval
- Scan for secrets/PII before edits or commits
- Auto-run formatters after file edits

**Idea:** checkpoints you can *enforce*, not just recommend.`,
    type: "content",
  },
  {
    id: 22,
    title: "Hook Events You Actually Need",
    content: `## Common Hook Points

- \`beforeShellExecution\` → approve/deny commands
- \`beforeMCPExecution\` → control external tools
- \`afterFileEdit\` → format / lint / audit
- \`beforeSubmitPrompt\` → policy checks on prompts
- \`stop\` → post-run automation (tests, reports)

Hooks run via JSON over stdio, so they can be simple scripts.`,
    type: "content",
  },
  {
    id: 23,
    title: "Types of Checkpoints",
    content: `## Three Essential Types

### 1. Validation Checkpoints
\`\`\`
Type check passes? → Continue
Tests pass? → Continue
\`\`\`

### 2. Alignment Checkpoints
\`\`\`
Still aligned with PRD? → Continue
Drifting from requirements? → Re-align
\`\`\`

### 3. Quality Checkpoints
\`\`\`
Complexity < threshold? → Continue
Coverage > minimum? → Continue
\`\`\``,
    type: "code",
  },
  {
    id: 24,
    title: "Checkpoint Design Principles",
    content: `## Four Key Principles

### 1. Fast Feedback
Checkpoints should run quickly. Fail fast.

### 2. Clear Pass/Fail Criteria
Binary results. No ambiguity.

### 3. Actionable Failures
Know what to do when checkpoint fails.

### 4. Progressive Validation
Cheap checks first (lint, type), expensive later (e2e).`,
    type: "content",
  },
  {
    id: 25,
    title: "Form Component Checkpoints",
    content: `## Example Checkpoint Flow

| Stage | Checkpoint | Action if Fail |
|-------|------------|----------------|
| After generate | Type check | Fix type errors |
| After fix types | Unit tests | Fix test failures |
| After unit tests | Manual review | Address feedback |
| After review | Integration test | Fix integration issues |
| Final | Accessibility check | Fix a11y issues |`,
    type: "content",
  },

  // ============================================================
  // POINT 5: KEEPING AI ALIGNED
  // ============================================================
  {
    id: 26,
    title: "Keeping AI Aligned",
    content: "From Start to Finish",
    type: "section",
  },
  {
    id: 27,
    title: "Alignment Drift: The Silent Killer",
    content: `## How Drift Happens

**Start:** "Build a user profile form with validation"

**Iteration 1:** Generates basic form ✓

**Iteration 2:** Adds validation logic ✓

**Iteration 3:** "While I'm here, let me add a profile picture upload"
⚠️ SCOPE CREEP

**Iteration 4:** "Actually, let me redesign the whole profile system"
❌ FULLY OFF TRACK`,
    type: "diagram",
  },
  {
    id: 28,
    title: "Strategies to Maintain Alignment",
    content: `## Four Proven Strategies

### 1. Reference the Source of Truth
Keep PRD/RFC in context throughout.

### 2. Regular Re-anchoring
Every 3-5 iterations, re-state the goal.

### 3. Scope Boundaries
Define what NOT to do explicitly.

### 4. Human-in-the-Loop Milestones
Review after major components.`,
    type: "content",
  },
  {
    id: 29,
    title: "Rules vs Skills (Staying Consistent at Scale)",
    content: `## Encode Your Standards

- **Rules**: always-on project standards (commands, style, workflow)
- **Skills**: on-demand workflows and expertise (loaded when relevant)
- **Commands**: repeatable triggers for common multi-step work

**Why it matters:** consistency prevents alignment drift across long runs.`,
    type: "content",
  },
  {
    id: 30,
    title: "MCP: Give Agents Real Context",
    content: `## Beyond the Codebase

MCP connects agents to external systems so they can work with real data:

- GitHub / GitLab (issues, PRs)
- Linear (tickets)
- Playwright (E2E testing)
- Context7 (up-to-date library docs)

**Better context → better plans → fewer wrong turns.**`,
    type: "content",
  },
  {
    id: 31,
    title: "Practical Alignment Checklist",
    content: `## Before Each Iteration, Ask:

- [ ] Does this serve the original user story?
- [ ] Would a user find this valuable?
- [ ] Is this the simplest path to the goal?
- [ ] Am I still within the defined scope?

---

**If any answer is "no" → Stop and re-align**`,
    type: "content",
  },
  {
    id: 32,
    title: "Summary: The Complete Flow",
    content: `## The Full Agentic Workflow

\`\`\`typescript
async function alignedAgentWorkflow(task) {
  const prd = await understandRequirements(task);
  
  while (!complete) {
    if (!stillAligned(prd)) {
      await reAlign(prd);
    }
    
    const result = await executeStep();
    const checkpoint = await runCheckpoint(result);
    
    if (!checkpoint.passed) {
      await fixIssues(checkpoint.issues);
    }
    
    await updateStatus();
  }
  
  return finalResult;
}
\`\`\``,
    type: "code",
  },
  {
    id: 33,
    title: "The Mindset Shift",
    content: `## From Command to Collaboration

| From | To |
|------|-----|
| "AI, build this" | "AI, let's build this together" |
| Set and forget | Continuous collaboration |
| Trust the output | Verify the process |
| One perfect prompt | Iterative refinement |
| AI works for you | You work with AI |

---

**Engineering culture > Technology choice**`,
    type: "content",
  },

  // ============================================================
  // LIVE DEMO
  // ============================================================
  {
    id: 34,
    title: "Live Demo",
    content: `## One-Shot vs Agentic: Head-to-Head

We'll build the same complex form component using both approaches.

**Task:** Multi-step registration form with:
- Email validation
- Password strength checking
- Terms acceptance
- Error handling
- Accessibility

Watch the difference.`,
    type: "content",
  },
  {
    id: 35,
    title: "Demo: One-Shot Approach",
    content: `## Single Prompt, Single Output

\`\`\`
"Build a registration form with email validation, 
password strength checking, terms checkbox, error handling, 
and accessibility. Use React and TypeScript."
\`\`\`

**Watch for:**
- What gets missed
- Edge cases not handled
- Error handling gaps
- Accessibility issues`,
    type: "content",
  },
  {
    id: 36,
    title: "Demo: Agentic Approach",
    content: `## Context → Plan → Execute → Observe → Adjust

**Step 1:** Gather context (existing forms, patterns)
**Step 2:** Create plan (5 steps)
**Step 3:** Execute step 1 (form structure)
**Step 4:** Check types → Pass
**Step 5:** Execute step 2 (validation) → Issue found
**Step 6:** Adjust → Fix → Re-check
**Step 7:** Continue until all steps complete

**Watch the feedback loop in action.**`,
    type: "content",
  },
  {
    id: 37,
    title: "Demo Results",
    content: `## The Comparison

| Aspect | One-Shot | Agentic |
|--------|----------|---------|
| Lines of code | Similar | Similar |
| Type safety | ⚠️ Missing types | ✓ Fully typed |
| Edge cases | ✗ Missing | ✓ Handled |
| Accessibility | ✗ Missing labels | ✓ WCAG compliant |
| Test coverage | ✗ None | ✓ Unit tests |
| Time spent | 30 seconds | 3 minutes |
| Production ready | ✗ No | ✓ Yes |

**Quality > Speed**`,
    type: "content",
  },

  // ============================================================
  // CLOSING
  // ============================================================
  {
    id: 38,
    title: "Key Takeaways",
    content: "",
    type: "section",
  },
  {
    id: 39,
    title: "Remember This",
    content: `## Core Principles

- **One-shot is an illusion** - Real engineering is iterative
- **Feedback loops are essential** - Every stable system needs them
- **Checkpoints prevent drift** - Validation at each stage
- **Alignment requires vigilance** - Regular re-anchoring
- **Work WITH AI, not FOR you** - Collaboration, not delegation

**Agentic workflows mirror how engineers actually work.**`,
    type: "content",
  },
  {
    id: 40,
    title: "Your Turn: Workshop Exercise",
    content: `## Hands-On Practice

**Task:** Build a simple todo list component

**Constraints:**
- Must use agentic workflow
- Minimum 3 checkpoints
- Handle empty state
- Add item validation
- Mark items complete

**Time:** 30 minutes

**Deliverable:** Share your checkpoint design`,
    type: "content",
  },
  {
    id: 41,
    title: "Final Thought",
    content: `## The Real Change

> "The question isn't whether AI can write code.
>
> The question is: are we giving AI the same feedback loops
> that make human engineers effective?"

---

**Thank you!**

Questions?`,
    type: "quote",
  },
];

export function getAgenticSlide(id: number): Slide | undefined {
  return agenticWorkflowSlides.find((s) => s.id === id);
}

export function getTotalAgenticSlides(): number {
  return agenticWorkflowSlides.length;
}
```
