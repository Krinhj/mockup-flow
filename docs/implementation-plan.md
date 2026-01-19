# Implementation Plan: ACA Inmate Intelligence System

This document outlines the phased approach to building the mockup, following the Vibe Coding Playbook guidelines.

---

## Phase 1: Project Foundation

### 1.1 Next.js Setup
- [ ] Initialize Next.js 15 with App Router: `npx create-next-app@latest . --use-pnpm`
- [ ] Verify TypeScript, Tailwind CSS, ESLint are configured
- [ ] Set up path alias `@/*` → `src/*` in `tsconfig.json`

### 1.2 Shadcn/UI Installation
- [ ] Initialize shadcn: `pnpm dlx shadcn@latest init`
- [ ] Configure with CSS variables and slate base color
- [ ] Install core components:
  ```bash
  pnpm dlx shadcn@latest add button card input label form
  pnpm dlx shadcn@latest add sidebar dropdown-menu avatar
  pnpm dlx shadcn@latest add badge table skeleton separator
  pnpm dlx shadcn@latest add dialog sheet tabs tooltip
  pnpm dlx shadcn@latest add checkbox switch textarea select
  pnpm dlx shadcn@latest add alert sonner scroll-area
  ```

### 1.3 Theming Setup
- [ ] Update `globals.css` with custom color tokens from `project-vibe.md`
- [ ] Add risk-level CSS variables
- [ ] Configure dark mode support (class-based)
- [ ] Add Inter font via `next/font`

### 1.4 Project Structure
- [ ] Create folder structure:
  ```
  src/
  ├── app/
  │   ├── (marketing)/        # Landing page
  │   ├── (auth)/             # Login, Register
  │   │   ├── login/
  │   │   └── register/
  │   ├── (dashboard)/        # Protected routes
  │   │   ├── layout.tsx      # Dashboard shell
  │   │   ├── page.tsx        # Dashboard home
  │   │   ├── inmates/
  │   │   ├── incidents/
  │   │   ├── reports/
  │   │   └── settings/
  │   ├── layout.tsx
  │   ├── globals.css
  │   └── page.tsx            # Redirect or landing
  ├── components/
  │   ├── ui/                 # shadcn components
  │   ├── layout/             # Shell, Sidebar, Header
  │   ├── dashboard/          # Dashboard-specific
  │   ├── inmates/            # Inmate-specific
  │   └── shared/             # Reusable across app
  ├── lib/
  │   ├── utils.ts            # cn() and helpers
  │   └── mock-data.ts        # Static mock data
  └── types/
      └── index.ts            # TypeScript interfaces
  ```

### 1.5 Mock Data Setup
- [ ] Create TypeScript interfaces for Inmate, Incident, AIInsight
- [ ] Generate mock data (20-30 inmates, 50+ incidents)
- [ ] Create utility functions for filtering/searching

**Deliverable:** Empty shell with theming applied, all components installed

---

## Phase 2: Landing Page

### 2.1 Hero Section
- [ ] Two-column layout: `lg:grid-cols-[1.1fr_0.9fr]`
- [ ] Left column:
  - Headline: "AI-Powered Inmate Intelligence"
  - Subheadline: Brief value proposition
  - CTA buttons: "Request Demo" (primary), "Learn More" (outline)
- [ ] Right column:
  - Dashboard preview screenshot/mockup
  - Subtle glassmorphism card effect
- [ ] Background: Gradient with noise overlay per `project-vibe.md`
- [ ] Staggered entrance animations (50-120ms offsets)

### 2.2 Features Section
- [ ] Section heading: "Smarter Decisions, Safer Facilities"
- [ ] 3-column feature cards:
  - AI-Powered Insights (Brain icon)
  - Real-Time Monitoring (Activity icon)
  - Comprehensive Reports (FileText icon)
- [ ] Each card: icon, title, description

### 2.3 How It Works Section
- [ ] 3-step process with numbered badges
- [ ] Step 1: Upload incident reports
- [ ] Step 2: AI analyzes patterns
- [ ] Step 3: Get actionable insights

### 2.4 CTA Section
- [ ] Full-width banner with gradient background
- [ ] "Ready to Transform Your Facility?" heading
- [ ] "Get Started" button

### 2.5 Footer
- [ ] Simple footer with copyright
- [ ] Links: Privacy, Terms, Contact

**Deliverable:** Complete landing page with all sections

---

## Phase 3: Authentication Pages

### 3.1 Shared Auth Layout
- [ ] Two-column grid: `lg:grid-cols-[1fr_420px]`
- [ ] Left panel (visual):
  - Gradient background with animated blobs
  - Tagline: "Secure Intelligence for Safer Facilities"
  - ACA logo placement
- [ ] Right panel (form):
  - Centered card with `max-w-sm`
  - Logo at top
  - Form content
  - Footer links

### 3.2 Login Page (`/login`)
- [ ] Email input field
- [ ] Password input field with show/hide toggle
- [ ] "Remember me" checkbox
- [ ] "Sign In" button (full width, primary)
- [ ] "Forgot password?" link
- [ ] Separator with "or continue with"
- [ ] Social login buttons (Google, Microsoft) - ghost style
- [ ] "Don't have an account? Register" link

### 3.3 Register Page (`/register`)
- [ ] Full name input
- [ ] Email input
- [ ] Password input with requirements hint
- [ ] Confirm password input
- [ ] Facility selection dropdown (mock data)
- [ ] Terms acceptance checkbox
- [ ] "Create Account" button
- [ ] "Already have an account? Sign in" link

### 3.4 Auth Logic (Mock)
- [ ] Form validation with Zod
- [ ] Accept any email/password for demo
- [ ] Redirect to `/dashboard` on success
- [ ] Store mock session in localStorage

**Deliverable:** Functional login/register with visual polish

---

## Phase 4: Dashboard Shell

### 4.1 Dashboard Layout
- [ ] Full-bleed grid: `grid-cols-[260px_minmax(0,1fr)]`
- [ ] Apply `min-w-0` fix for main content area
- [ ] Sidebar component with:
  - Logo at top
  - Navigation links with icons
  - Active state highlighting
  - User menu at bottom
- [ ] Collapsible sidebar (260px → 64px)
- [ ] Mobile: Sheet-based sidebar

### 4.2 Sidebar Navigation
- [ ] Dashboard (Home icon)
- [ ] Inmates (Users icon)
- [ ] Incidents (AlertTriangle icon)
- [ ] Reports (FileText icon)
- [ ] Settings (Settings icon)
- [ ] Separator before Settings

### 4.3 Top Header
- [ ] Breadcrumb navigation
- [ ] Search input (global search)
- [ ] Notifications bell with badge
- [ ] User avatar dropdown:
  - Profile
  - Settings
  - Sign out

### 4.4 Dashboard Home Page (`/dashboard`)
- [ ] Welcome message with user name
- [ ] Stats cards row (4 cards):
  - Total Inmates (with trend indicator)
  - Active Incidents (24h)
  - High Risk Count
  - Program Enrollment Rate
- [ ] Two-column layout below:
  - Left: Recent Incidents feed (5 items)
  - Right: Risk Distribution chart (pie/donut)
- [ ] Quick Actions card:
  - "Add Incident"
  - "Generate Report"
  - "View All Inmates"

**Deliverable:** Functional dashboard shell with overview page

---

## Phase 5: Inmate Management

### 5.1 Inmates List Page (`/dashboard/inmates`)
- [ ] Page header with "Inmates" title and "Add Inmate" button
- [ ] Filter bar:
  - Search input (name, ID)
  - Housing unit dropdown
  - Risk level multi-select
  - Status filter (active/released/transferred)
- [ ] Inmates table:
  - Columns: Photo, Name, ID, Housing, Risk Level, Admission Date, Actions
  - Sortable columns
  - Risk badge with color coding
  - Row click → navigate to profile
- [ ] Pagination component
- [ ] Empty state for no results

### 5.2 Inmate Profile Page (`/dashboard/inmates/[id]`)
- [ ] Back button with breadcrumb
- [ ] Profile header:
  - Large avatar
  - Name, ID, status badge
  - Quick action buttons (Edit, Generate Insight)
- [ ] Two-column layout:

**Left Column (60%):**
- [ ] Personal Information card:
  - DOB, Admission Date, Housing Unit
  - Status, Programs enrolled
- [ ] Incident Timeline:
  - Chronological list of incidents
  - Each item: date, type badge, severity, brief description
  - "View All" link to filtered incidents

**Right Column (40%):**
- [ ] Risk Assessment card:
  - Large risk score (0-100) with visual gauge
  - Risk level badge
  - Contributing factors list
  - Last updated timestamp
- [ ] AI Insights panel:
  - "Generate New Insight" button
  - Latest insight summary
  - Behavioral patterns
  - Recommendations list

### 5.3 Inmate Data
- [ ] Create 25 mock inmates with varied data
- [ ] Include mix of risk levels
- [ ] Realistic incident history distribution

**Deliverable:** Complete inmate directory and profile pages

---

## Phase 6: Incident Management

### 6.1 Incidents List Page (`/dashboard/incidents`)
- [ ] Page header with "Incidents" title and "Report Incident" button
- [ ] Filter bar:
  - Date range picker
  - Type dropdown (assault, contraband, medical, etc.)
  - Severity filter
  - Location filter
- [ ] Incidents table:
  - Columns: Date/Time, Type, Severity, Location, Involved, Status, Actions
  - Severity badge with color
  - Expandable row for quick preview
- [ ] Bulk actions (select multiple)
- [ ] Pagination

### 6.2 Incident Detail Page (`/dashboard/incidents/[id]`)
- [ ] Back navigation
- [ ] Incident header:
  - Type and severity badges
  - Date/time, location
  - Status (open/resolved/under review)
- [ ] Full description card
- [ ] Involved parties section:
  - Inmates involved (clickable → profile)
  - Staff involved
- [ ] Outcome/Resolution card
- [ ] Attachments section (mock file list)
- [ ] AI Summary card:
  - Auto-generated summary
  - Key points extracted
  - Related incidents link

### 6.3 Incident Analytics Section
- [ ] Summary stats cards:
  - Total incidents (period)
  - By severity breakdown
  - Resolution rate
- [ ] Charts:
  - Incidents over time (line chart)
  - By type (bar chart)
  - By location heat map (simplified)
  - By time of day (bar chart)

### 6.4 Incident Data
- [ ] Create 60 mock incidents across 6 months
- [ ] Distribute across types and severity levels
- [ ] Link to inmates realistically

**Deliverable:** Complete incident management and analytics

---

## Phase 7: AI Features

### 7.1 AI Insight Generation UI
- [ ] "Generate Insight" button on inmate profile
- [ ] Dialog/Sheet for generation:
  - Loading state with animated skeleton
  - Streaming text effect for response
  - Progress indicator
- [ ] Insight result display:
  - Behavioral Summary section
  - Risk Factors identified
  - Recommendations (numbered list)
  - Confidence score indicator

### 7.2 Document Upload (Mock)
- [ ] Upload area on incidents page
- [ ] Drag-and-drop zone
- [ ] File type validation (PDF, TXT)
- [ ] Mock processing animation
- [ ] "Analysis complete" state with extracted data preview

### 7.3 AI Integration (Real)
- [ ] API route: `/api/generate-insight`
- [ ] Accept inmate data + incidents as context
- [ ] Call OpenAI/OpenRouter API
- [ ] Stream response to client
- [ ] Prompt template from PRD

### 7.4 Risk Score Calculation
- [ ] Visual risk gauge component
- [ ] Score breakdown tooltip
- [ ] Trend indicator (↑↓→)
- [ ] Contributing factors list with weights

**Deliverable:** Working AI insight generation with streaming

---

## Phase 8: Reports & Polish

### 8.1 Reports Page (`/dashboard/reports`)
- [ ] Pre-built report templates:
  - Daily Briefing
  - Weekly Summary
  - Monthly Compliance
  - Inmate Risk Report
- [ ] Report card for each with:
  - Title, description
  - Last generated date
  - "Generate" and "View Last" buttons
- [ ] Custom report builder (simplified):
  - Date range selection
  - Metrics checkboxes
  - Format selection (PDF, Excel)
  - Generate button

### 8.2 Settings Page (`/dashboard/settings`)
- [ ] Profile settings:
  - Name, email (readonly for demo)
  - Avatar upload (mock)
- [ ] Notification preferences:
  - Toggle switches for email/push
- [ ] Display preferences:
  - Theme toggle (light/dark)
  - Density (comfortable/compact)
- [ ] Facility info (readonly display)

### 8.3 Final Polish
- [ ] Loading states (skeletons) on all data pages
- [ ] Error states with retry actions
- [ ] Empty states with helpful CTAs
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Animation refinements
- [ ] Accessibility audit (focus states, contrast)
- [ ] Performance check (no layout shifts)

**Deliverable:** Complete application ready for demo

---

## Phase 9: Deployment

### 9.1 Pre-Deployment
- [ ] Environment variables setup:
  - `OPENAI_API_KEY` or `OPENROUTER_API_KEY`
- [ ] Build test: `pnpm build`
- [ ] Fix any build errors

### 9.2 Vercel Deployment
- [ ] Connect GitHub repository
- [ ] Configure environment variables in Vercel
- [ ] Deploy to production
- [ ] Test deployed URL

### 9.3 Final Review
- [ ] Walk through all user flows
- [ ] Test AI features with real API
- [ ] Verify responsive design
- [ ] Share URL with stakeholders

**Deliverable:** Live demo URL on Vercel

---

## Summary Timeline

| Phase | Description | Status |
|-------|-------------|--------|
| 1 | Project Foundation | Pending |
| 2 | Landing Page | Pending |
| 3 | Authentication Pages | Pending |
| 4 | Dashboard Shell | Pending |
| 5 | Inmate Management | Pending |
| 6 | Incident Management | Pending |
| 7 | AI Features | Pending |
| 8 | Reports & Polish | Pending |
| 9 | Deployment | Pending |

---

*Implementation Plan Created: January 2025*
*Ready for Phase 5: Execute & Iterate*
