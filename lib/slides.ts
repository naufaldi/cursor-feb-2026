import { Slide } from "./types";

export const slides: Slide[] = [
  {
    id: 1,
    title: "Agentic AI for Builders: From Prompt to Autonomous Coding Loop",
    content: "From One-Shot to Agentic Workflows",
    type: "cover",
  },
  {
    id: 2,
    title: "Hi, I'm Naufaldi Rafif Satriya",
    content: `**Dev Ambassador @ Cursor**

Senior Software Engineer • Frontend Specialist • Mentor

TypeScript, JavaScript • React, Next.js, Node.js

Community: Mentor • Blogger • Open Source

faldi.xyz · @f2aldi · github.com/naufaldi`,
    type: "title",
  },

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

  {
    id: 12,
    title: "Building a Simple Agent Loop",
    content: "For Real Coding Tasks",
    type: "section",
  },
  {
    id: 13,
    title: "Agent Harness (What Drives the Loop)",
    content: `## The 3 Inputs to Every Agent Run

**Instructions**  
Rules, constraints, definition of done

**Tools**  
Search, read/edit files, run commands, etc.

**User messages**  
Requirements + feedback that steer the run

**Harness matters:** it shapes how the model plans, executes, and self-corrects.`,
    type: "diagram",
  },
  {
    id: 14,
    title: "Cursor Agent Loop (Part 1: Understand + Plan)",
    content: `## Step-by-step

**Ask mode** → explore & understand (read-only)  
Output: key files, what the system does, unknowns

**Plan mode (Shift+Tab)** → get a reviewable plan  
Output: steps + file paths + test/verify plan

**Rule of thumb:** plan before you let the agent edit files.`,
    type: "diagram",
  },
  {
    id: 15,
    title: "Cursor Agent Loop (Part 2: Execute + Verify)",
    content: `## Step-by-step

**Approve plan** → then run it in **Agent mode**  
Output: diffs (multi-file edits), commands executed

**Verify** → typecheck / tests / quick manual checks  
If it fails: iterate in Agent mode (fix → re-verify)

**Key idea:** checkpoints make progress visible and reversible.`,
    type: "diagram",
  },
  {
    id: 16,
    title: "Cursor Agent Loop (Part 3: Debug + Repeat)",
    content: `## Step-by-step

**If stuck: Debug mode**  
hypotheses → instrumentation → reproduce → fix

**Repeat** until the result matches the original goal

**Bottom line:** design the feedback loop, don’t bet on one perfect prompt.`,
    type: "diagram",
  },
  {
    id: 17,
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
    id: 18,
    title: "Cursor Plan Mode (Practical Guardrail)",
    content: `## Make Planning the Default

This is the **Plan** step from the loop (Shift+Tab) — before writing code.

- Clarify requirements first
- Research the codebase and find relevant files
- Produce a step-by-step plan (with file paths)
- **Wait for approval** before edits

**Why it matters:** planning reduces rework and prevents drift.`,
    type: "content",
  },
  {
    id: 19,
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
    id: 20,
    title: "Step 3: Execute & Observe",
    content: `## Execute & Observe

**Generate initial code**  
Create implementation based on plan

**Run type check**  
3 errors found

**Observe**  
Missing imports, wrong types`,
    type: "content",
  },
  {
    id: 21,
    title: "Step 4: Adjust",
    content: `## Adjust

**Add missing imports**  
Fix dependency issues

**Fix type definitions**  
Correct TypeScript errors

**Re-run type check**  
Pass`,
    type: "content",
  },
  {
    id: 22,
    title: "Step 5: Iterate Until Done",
    content: `## Iterate Until Done

**Test with real data**  
Edge case found

**Adjust validation**  
Re-test → Pass

**Final review**  
Done`,
    type: "content",
  },
  {
    id: 23,
    title: "Planning: Quick-Plan vs ExecPlan",
    content: `## Hierarchical Planning

**Complexity Assessment**  
5 criteria: components, unknowns, cross-cutting, breaking changes, workflows

**Quick-Plan (0-2 criteria)**  
User Stories → Acceptance Criteria → Edge Cases → Implementation Steps

**ExecPlan (3+ criteria)**  
Workdocs-First with living documentation`,
    type: "content",
  },
  {
    id: 24,
    title: "Planning + TDD Workflow",
    content: `## Plan First, Test First

**Planning Phase**  
Complexity check → Choose Quick-Plan or ExecPlan

**TDD Phase**  
Write User Journeys → Generate Test Cases → Watch Tests Fail

**Implementation Phase**  
Write Code → Run Tests → Refactor → Verify 80%+ Coverage

**Result: Production-ready code with confidence**`,
    type: "content",
  },

  {
    id: 25,
    title: "Designing Checkpoints",
    content: "Keeping Agents on Track",
    type: "section",
  },
  {
    id: 26,
    title: "Plan Mode: Your First Checkpoint",
    content: `## Plan Mode Checklist

**Press Shift+Tab**  
Enter Plan mode from chat input

**Answer clarifying questions**  
Help the agent understand requirements

**Review the generated plan**  
Check steps, file paths, validation approach

**Click "Build" when ready**  
Or save to workspace for team review

**Fast Feedback: Plan before you build**`,
    type: "content",
  },
  {
    id: 27,
    title: "When to Stop and Go Back",
    content: `## 3 Signs You Need to Revert

**Output mismatch**  
Result doesn't match what you asked for → Revert

**Scope creep**  
Agent says "While I'm here..." → Revert

**Stuck > 10 minutes**  
Same issue, multiple attempts → Revert

**Clear Pass/Fail: Know when to go back**`,
    type: "content",
  },
  {
    id: 28,
    title: "Revert → Refine → Retry",
    content: `## The Revert Workflow

**Revert the changes**  
Use git restore or Cursor undo

**Refine the plan**  
Make requirements more specific

**Run the plan again**  
Cleaner output, less time than fixing drift

**Actionable Failure: Don't fix drift, restart**`,
    type: "content",
  },
  {
    id: 29,
    title: "Automated Checkpoints with Hooks",
    content: `## Hooks Quick Start

**beforeShellExecution**  
Approve risky commands before they run

**afterFileEdit**  
Auto-format, lint, type check (fast)

**stop**  
Run tests, validate coverage (expensive)

**Progressive Validation: Cheap first, expensive last**`,
    type: "content",
  },
  {
    id: 30,
    title: "Checkpoint Design Principles",
    content: `## Four Key Principles

**1. Fast Feedback**  
Checkpoints should run quickly. Fail fast.

**2. Clear Pass/Fail Criteria**  
Binary results. No ambiguity.

**3. Actionable Failures**  
Know what to do when checkpoint fails.

**4. Progressive Validation**  
Cheap checks first (lint, type), expensive later (e2e).`,
    type: "content",
  },
  {
    id: 31,
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

  {
    id: 32,
    title: "Keeping AI Aligned",
    content: "From Start to Finish",
    type: "section",
  },
  {
    id: 33,
    title: "Catch Drift with Cursor Modes",
    content: `## Detect Alignment Drift

**Ask mode**  
Explore context before committing to approach

**Plan mode**  
Review plan before building (Shift+Tab)

**Agent mode**  
Check output every 3-5 iterations

**Debug mode**  
When output feels wrong, investigate first`,
    type: "content",
  },
  {
    id: 34,
    title: "Maintain Alignment at Scale",
    content: `## Four Proven Strategies

**Reference the Source of Truth**  
Keep PRD, RFC, or tests in agent context. Agent checks these instead of guessing.

**Regular Re-anchoring**  
Every 3-5 iterations, ask: "Does this still match our goal?" Restate the task.

**Scope Boundaries**  
Explicitly say what NOT to do: "Don't refactor other files" or "No new dependencies"

**Human-in-the-Loop Milestones**  
Use Plan mode reviews after major components. Don't let agent run unsupervised too long`,
    type: "content",
  },
  {
    id: 35,
    title: "Rules",
    content: "Always-On Standards for Every Agent",
    type: "section",
  },
  {
    id: 36,
    title: "What Are Rules?",
    content: `## Persistent Instructions for Every Agent Run

Rules live in \`.cursor/rules/\`

They are **always active** — the agent reads them before every task

Think of rules as your team's coding standards,  
but enforced automatically on every AI interaction

**One goal: Set the baseline so you never have to repeat yourself**`,
    type: "content",
  },
  {
    id: 37,
    title: "Rules I Apply",
    content: `## My Cursor Rules in Practice

**Rule 1: Plan-First Workflow**  
Always use MCP Sequential Thinking → Plan First → Confirm → Execute  
Agent never jumps straight to code

**Rule 2: Skill-First Workflow**  
Before responding to ANY request — check for a relevant skill first  
Even 1% chance a skill applies → invoke it  
Process skills (brainstorming, debugging) before implementation skills  
Do not rationalize "this is too simple" or "just a question"

**Result:** Every agent run follows the same thinking discipline — automatically`,
    type: "content",
  },

  {
    id: 38,
    title: "Skills",
    content: "On-Demand Expertise for Specific Workflows",
    type: "section",
  },
  {
    id: 39,
    title: "What Are Skills?",
    content: `## Reusable Workflow Templates

Skills live in \`.cursor/skills/\`

They are **invoked on demand** — triggered when a task type matches

Think of skills as specialized agents-in-waiting:  
Planning skill, TDD skill, Debugging skill, Design skill

**One goal: Package expert workflows so every run gets consistent, high-quality results**`,
    type: "content",
  },
  {
    id: 40,
    title: "Skills I Apply",
    content: `## Superpowers Skills in Practice

**brainstorming** — Refines rough ideas through questions before any code is written

**writing-plans** — Breaks work into tasks with exact file paths and verification steps

**test-driven-development** — Enforces RED → GREEN → REFACTOR, write failing test first

**systematic-debugging** — 4-phase root cause process before proposing any fix

**subagent-driven-development** — Dispatches fresh subagent per task with two-stage review

**finishing-a-development-branch** — Decides merge / PR / discard when implementation is done

> github.com/obra/superpowers`,
    type: "content",
  },

  {
    id: 41,
    title: "Commands",
    content: "Fast Triggers for Common Workflows",
    type: "section",
  },
  {
    id: 42,
    title: "What Are Commands?",
    content: `## Keyboard Shortcuts for Agent Workflows

Commands live in \`.cursor/commands/\`

They are **one-click triggers** — launch a full workflow instantly

Think of commands as macros that combine:  
Rules (baseline) + Skills (expertise) + Context (your task)

**One goal: Make the right workflow the fastest workflow**`,
    type: "content",
  },
  {
    id: 43,
    title: "Commands I Apply",
    content: `## My 2 Commands in Practice

**\`/council\`**  
Spawns parallel subagents to investigate a codebase area  
→ All agents follow my rules automatically  
→ Uses the councel skill under the hood

**\`/plan\`**  
Assesses feature complexity → picks the right planning format  
→ 0–2 criteria: Quick-Plan (user stories, acceptance criteria, steps)  
→ 3+ criteria: ExecPlan (workdoc folder with living plan + todos)

**Rules + Skills + Commands = Consistency at every level**`,
    type: "content",
  },

  {
    id: 44,
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
    id: 45,
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
    id: 46,
    title: "Putting It All Together",
    content: "One Real Task, Three Tools in Action",
    type: "section",
  },
  {
    id: 47,
    title: "My Daily Workflow",
    content: `## One Task, Every Day

**Task arrives**  
Rule fires automatically → plan-first, skill-check before anything else

**Skill invoked**  
\`/plan\` → brainstorming refines the idea → writing-plans breaks it into steps

**Agent executes**  
Follows the plan → deslop cleans the output → systematic-debugging if something breaks

**Result**  
Consistent, high-quality output — every run, no manual reminders needed

---

**Rules set the floor. Skills bring the expertise. Commands make it instant.**`,
    type: "content",
  },
  {
    id: 48,
    title: "Thank You",
    content: `## Questions?

> "The hardest part isn't the AI.
> It's building the habits that make AI reliable."

---

**Naufaldi Rafif Satriya**`,
    type: "quote",
  },
];

export function getSlide(id: number): Slide | undefined {
  return slides.find((s) => s.id === id);
}

export function getTotalSlides(): number {
  return slides.length;
}
