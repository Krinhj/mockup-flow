# PRD: ACA Inmate Intelligence System

## Project Overview

| Field | Value |
|-------|-------|
| **Client** | American Corrections Association (ACA) |
| **Project Name** | Inmate Intelligence System |
| **Purpose** | AI-powered inmate management platform that generates actionable insights from incident reports and records |
| **Primary Users** | Facility Administrators (Wardens, Directors) |
| **Mockup Type** | Demo/Sales presentation for ACA |

---

## Problem Statement

Facility administrators manage large volumes of inmate records, incident reports, behavioral logs, and case files. Extracting meaningful patterns and insights from this data is time-consuming and often reactive rather than proactive. Administrators need a system that:

1. Centralizes inmate information in one accessible dashboard
2. Automatically analyzes incident reports and behavioral data
3. Generates AI-powered insights to support decision-making
4. Identifies risk patterns and trends across the facility

---

## Target Users

### Primary: Facility Administrators
- **Role:** Wardens, Assistant Wardens, Facility Directors
- **Goals:**
  - Monitor facility-wide inmate metrics at a glance
  - Identify high-risk inmates before incidents occur
  - Make data-driven decisions about housing, programs, and staffing
  - Generate reports for stakeholders and compliance

### Secondary: Case Managers
- **Role:** Staff managing individual inmate cases
- **Goals:**
  - Quick access to inmate profiles and history
  - Review AI-generated risk assessments
  - Track program participation and progress

---

## Core Features

### 1. Dashboard Overview
- **Facility metrics at a glance:** Total population, capacity, incident count (24h/7d/30d)
- **Risk distribution chart:** Visual breakdown of inmates by risk level
- **Recent incidents feed:** Live feed of latest incidents with severity indicators
- **Quick stats cards:** Key KPIs (avg. time to incident resolution, program enrollment rate, etc.)

### 2. Inmate Directory
- **Searchable inmate list:** Filter by housing unit, risk level, program enrollment
- **Inmate cards:** Photo, ID, name, housing unit, risk badge, days in facility
- **Quick actions:** View profile, view incidents, generate insight report

### 3. Inmate Profile
- **Personal information:** ID, name, photo, DOB, housing assignment, admission date
- **Risk assessment panel:** AI-generated risk score with contributing factors
- **Incident timeline:** Chronological list of all incidents involving this inmate
- **Program participation:** Enrolled programs, completion status, attendance
- **AI Insights panel:** Generated summary of behavioral patterns and recommendations

### 4. AI Insight Generation (Core Feature)
- **Document upload:** Upload incident reports (PDF, text) for analysis
- **Automatic extraction:** Parse incident details, participants, outcomes
- **Pattern recognition:** Identify behavioral trends, trigger patterns, associations
- **Insight reports:** Generate natural language summaries such as:
  - "Inmate has shown increased agitation during evening counts over the past 30 days"
  - "3 of 4 recent incidents occurred near the recreation yard with the same group"
  - "Recommended: Consider program enrollment to address anger management"
- **Risk scoring:** Update risk levels based on new incident data

### 5. Incident Reports
- **Incident log:** Filterable list of all facility incidents
- **Incident detail view:** Full report with participants, location, outcome, attachments
- **Incident analytics:** Charts showing trends by type, location, time of day
- **AI summary:** Quick AI-generated summary of each incident

### 6. Reports & Analytics
- **Pre-built reports:** Daily briefing, weekly summary, monthly compliance
- **Custom report builder:** Select metrics, date ranges, filters
- **Export options:** PDF, Excel for stakeholder distribution
- **Trend visualizations:** Line charts, bar graphs, heat maps

---

## User Flows

### Flow 1: Daily Administrator Check-in
1. Admin logs in → lands on Dashboard
2. Reviews facility metrics and recent incidents
3. Clicks on flagged high-risk inmate
4. Reviews AI insights and recent incident timeline
5. Takes action (adds note, adjusts housing, enrolls in program)

### Flow 2: Incident Report Analysis
1. Admin navigates to Incidents → uploads new incident report PDF
2. System processes document, extracts details
3. AI generates insight: identifies involved inmates, updates risk scores
4. Admin reviews AI summary and recommendations
5. Admin can drill down into specific inmate profiles

### Flow 3: Generate Insight Report for Specific Inmate
1. Admin searches for inmate in directory
2. Opens inmate profile
3. Clicks "Generate AI Insight Report"
4. System analyzes all incidents, programs, and behavioral data
5. Displays comprehensive insight report with recommendations
6. Admin can export or share report

---

## Pages Required

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Marketing/info page about the system |
| Login | `/login` | Authentication for facility staff |
| Register | `/register` | New user registration (admin-approved) |
| Dashboard | `/dashboard` | Main overview with metrics and feeds |
| Inmates | `/dashboard/inmates` | Searchable inmate directory |
| Inmate Profile | `/dashboard/inmates/[id]` | Individual inmate details + AI insights |
| Incidents | `/dashboard/incidents` | Incident log and analytics |
| Incident Detail | `/dashboard/incidents/[id]` | Full incident report view |
| Reports | `/dashboard/reports` | Report generation and export |
| Settings | `/dashboard/settings` | User preferences, facility config |

---

## Data Models (Mock Data Structure)

### Inmate
```typescript
{
  id: string
  firstName: string
  lastName: string
  inmateNumber: string
  photoUrl: string
  dateOfBirth: string
  admissionDate: string
  housingUnit: string
  riskLevel: 'low' | 'medium' | 'high' | 'critical'
  riskScore: number // 0-100
  programs: string[]
  status: 'active' | 'released' | 'transferred'
}
```

### Incident
```typescript
{
  id: string
  date: string
  time: string
  type: 'assault' | 'contraband' | 'medical' | 'behavioral' | 'property' | 'other'
  severity: 'low' | 'medium' | 'high' | 'critical'
  location: string
  description: string
  involvedInmates: string[] // inmate IDs
  involvedStaff: string[]
  outcome: string
  attachments: string[]
  aiSummary?: string
}
```

### AIInsight
```typescript
{
  id: string
  inmateId: string
  generatedAt: string
  type: 'risk_assessment' | 'behavioral_pattern' | 'recommendation'
  content: string
  confidence: number // 0-1
  contributingFactors: string[]
}
```

---

## Design Requirements

Following the **Vibe Coding Playbook**:

### Theming
- **Primary:** Deep blue (authority, trust) - `#1e3a5f`
- **Accent:** Teal/cyan for data highlights - `#0ea5e9`
- **Background:** Light gray for readability - `#f8fafc`
- **Risk colors:**
  - Low: Green `#22c55e`
  - Medium: Yellow `#eab308`
  - High: Orange `#f97316`
  - Critical: Red `#ef4444`

### Layout
- **Dashboard:** Full-bleed shell with 260px sidebar
- **Auth pages:** Two-column (visual left, form right)
- **Landing:** Hero-first with product screenshots

### Components (shadcn/ui)
- Cards for metrics and inmate profiles
- Data tables for incidents and inmate lists
- Badges for risk levels and status
- Charts (integrate with Recharts or similar)
- Dialog for AI insight generation
- Sheet for quick inmate preview

### Spacing
- 4px base unit, 8px multiples
- Card padding: `p-6`
- Section gaps: `gap-6`
- Dashboard content: `px-6 lg:px-10 py-8`

---

## AI Features Specification

### Insight Generation
- **Input:** Incident reports (text or PDF), inmate history
- **Processing:** LLM analyzes content, extracts patterns
- **Output:** Natural language insights with confidence scores

### Risk Scoring
- Factors: Incident frequency, severity, recent behavior, program participation
- Scale: 0-100 with thresholds for low/medium/high/critical
- Updates: Recalculated when new incidents are logged

### Prompt Templates (for implementation)
```
Analyze the following incident reports for inmate {name}:
{incident_data}

Provide:
1. Behavioral pattern summary
2. Risk factors identified
3. Recommended interventions
4. Predicted risk trajectory
```

---

## Success Metrics (Demo Goals)

For the mockup to be successful, it should demonstrate:

1. **Visual polish:** Professional, modern UI that inspires confidence
2. **Data density:** Show meaningful information without overwhelming
3. **AI value prop:** Clear demonstration of AI-generated insights
4. **Workflow efficiency:** Intuitive navigation between related data
5. **Responsiveness:** Works on desktop and tablet (admin may use both)

---

## Out of Scope (for Mockup)

- Real authentication/authorization system
- Actual database persistence
- Real PDF processing
- Integration with existing correctional systems
- Mobile app version
- Multi-facility support

---

## Implementation Priority

### Phase 1: Core UI
1. Landing page
2. Auth pages (login/register)
3. Dashboard shell with sidebar
4. Dashboard overview with mock metrics

### Phase 2: Inmate Management
1. Inmate directory with search/filter
2. Inmate profile page
3. Mock inmate data

### Phase 3: Incidents
1. Incident list view
2. Incident detail view
3. Incident analytics charts

### Phase 4: AI Features
1. AI insight panel on inmate profile
2. "Generate Insight" action with streaming response
3. Risk score visualization

### Phase 5: Polish
1. Reports page
2. Settings page
3. Animations and transitions
4. Final review and adjustments

---

*PRD Created: January 2025*
*Ready for Phase 3: Visual References & Theming*