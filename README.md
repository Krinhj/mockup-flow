# Zaigo Mockup Workflow

This repository is a template and guide for creating mockups (demo projects for potential clients) at Zaigo using AI-assisted development.

## For AI Coding Agents

When a user says "Read the README" or opens this project, use this document as your primary context for guiding them through the mockup creation process.

### Your Role

You are assisting in building a polished mockup/demo application. Your responsibilities:
- Guide the user through each workflow phase
- Reference the `docs/vibe-coding-playbook/` for all styling, spacing, and component decisions
- Check in with the user after completing each phase
- Never proceed to the next phase without user approval

### Key Reference: Vibe Coding Playbook

Located at `docs/vibe-coding-playbook/`, this contains all the design system rules you must follow:
- **Theming:** Token-driven CSS variables (no hardcoded hex values)
- **Components:** Always use shadcn/ui via CLI (never hand-roll)
- **Layouts:** Full-bleed dashboards, two-column auth, hero-first landing pages
- **Spacing:** 4px-based scale (prefer 8px multiples)
- **Motion:** Subtle animations that respect `prefers-reduced-motion`

Read the playbook files before implementing any UI.

---

## The Workflow

### Phase 1: Project Setup

If starting fresh (not already done):
1. Create `docs/` folder and add the `vibe-coding-playbook/`
2. Initialize Next.js: `npx create-next-app@latest . --use-pnpm`
3. **Update `.gitignore`** - Ensure files we don't want committed are ignored (`.mcp.json`, `.env*`, etc.)
4. **Strip the default Next.js boilerplate** - Remove all demo content from `app/page.tsx`, clean `globals.css`, prepare a blank canvas

### Phase 2: PRD Creation

Before any coding, help the user create a **PRD (Project Requirements Document)**:
- Ask what the mockup is for (client name, industry, purpose)
- Document the core features and user flows
- Define the pages needed (landing, auth, dashboard, etc.)
- Save as `docs/PRD.md`

The PRD is your north star for the entire project.

### Phase 3: Visual References & Theming

Gather from the user:
- Screenshots of desired UI/UX (if available)
- Company logo and brand colors
- Any specific design preferences

Then create a `docs/project-vibe.md` using the template at `docs/vibe-coding-playbook/playbook-instance-template.md` to define:
- Color tokens (primary, accent, background, etc.)
- Typography choices
- Spacing and radius values

### Phase 4: Implementation Planning

Create a phased implementation plan following Zaigo's approach:

**Frontend First:**
- Build all UI/UX with static or mock data
- Focus on the visual experience and navigation
- Implement: Landing page → Auth pages → Dashboard shell → Feature pages

**Features Second:**
- Add AI functionalities using mock/fake data initially
- Examples: Insight Generation, RAG Chats, data visualizations

Save the plan as `docs/implementation-plan.md`.

### Phase 5: Execute & Iterate

For each phase in the implementation plan:
1. Announce what you're building
2. Implement it following the vibe-coding-playbook guidelines
3. **Stop and check in with the user**
4. User tests manually and provides feedback
5. Make adjustments as needed
6. Only proceed when user approves

### Phase 6: AI Features Integration

When ready to add real AI capabilities:
- Ask the user for their **OpenAI API Key** or **OpenRouter API Key**
- Implement LLM-powered features (chat, insights, etc.)
- Use streaming responses where appropriate

### Phase 7: Deployment

Deploy to Vercel:
- Help configure environment variables
- Set up the Vercel project
- Provide the deployment URL to the user

---

## Tech Stack

| Category | Choice |
|----------|--------|
| Framework | Next.js 15 (App Router) |
| Package Manager | pnpm |
| UI Components | shadcn/ui |
| Styling | Tailwind CSS |
| AI/LLM | OpenAI API or OpenRouter |
| Auth | Basic sign-in (any email/password works for mockups) |
| Hosting | Vercel |

---

## Project Structure

```
project/
├── docs/
│   ├── vibe-coding-playbook/   # Design system & guidelines (READ THIS)
│   ├── PRD.md                  # Project requirements
│   ├── project-vibe.md         # Project-specific theming
│   └── implementation-plan.md  # Phased build plan
├── public/                     # Static assets (logos, images)
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Tailwind tokens
│   │   ├── (auth)/             # Login/register
│   │   ├── (dashboard)/        # Main app
│   │   └── api/                # API routes
│   ├── components/             # Shared UI
│   ├── lib/                    # Utilities
│   └── server/                 # Server actions
└── README.md
```

---

## Quick Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm dlx shadcn@latest add [component]  # Add shadcn component
```

---

## Checklist for AI Agents

Before implementing any UI, verify:
- [ ] Read `docs/vibe-coding-playbook/README.md`
- [ ] PRD exists or has been created with user
- [ ] Project theming tokens are defined
- [ ] Implementation plan is approved by user

During implementation:
- [ ] Using shadcn/ui components (via CLI)
- [ ] No hardcoded colors (use CSS variables)
- [ ] Following spacing guidelines (4px base, 8px multiples)
- [ ] Full-bleed layouts for dashboards
- [ ] Checking in with user after each phase

---

*Ready to build? Ask the user what mockup they want to create, then follow the workflow above.*
