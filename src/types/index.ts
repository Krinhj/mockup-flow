// Inmate types
export type RiskLevel = "low" | "medium" | "high" | "critical";
export type InmateStatus = "active" | "released" | "transferred";

export interface Inmate {
  id: string;
  firstName: string;
  lastName: string;
  inmateNumber: string;
  photoUrl: string;
  dateOfBirth: string;
  admissionDate: string;
  housingUnit: string;
  riskLevel: RiskLevel;
  riskScore: number; // 0-100
  programs: string[];
  status: InmateStatus;
}

// Incident types
export type IncidentType =
  | "assault"
  | "contraband"
  | "medical"
  | "behavioral"
  | "property"
  | "other";

export type IncidentSeverity = "low" | "medium" | "high" | "critical";
export type IncidentStatus = "open" | "under_review" | "resolved";

export interface Incident {
  id: string;
  date: string;
  time: string;
  type: IncidentType;
  severity: IncidentSeverity;
  location: string;
  description: string;
  involvedInmates: string[]; // inmate IDs
  involvedStaff: string[];
  outcome: string;
  attachments: string[];
  status: IncidentStatus;
  aiSummary?: string;
}

// AI Insight types
export type InsightType =
  | "risk_assessment"
  | "behavioral_pattern"
  | "recommendation";

export interface AIInsight {
  id: string;
  inmateId: string;
  generatedAt: string;
  type: InsightType;
  content: string;
  confidence: number; // 0-1
  contributingFactors: string[];
}

// Dashboard stats
export interface DashboardStats {
  totalInmates: number;
  activeIncidents24h: number;
  highRiskCount: number;
  programEnrollmentRate: number;
  capacityPercentage: number;
}

// User types (for mock auth)
export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "officer" | "case_manager";
  facilityId: string;
  avatarUrl?: string;
}

// Facility type
export interface Facility {
  id: string;
  name: string;
  capacity: number;
  currentPopulation: number;
  housingUnits: string[];
}

// Program type
export interface Program {
  id: string;
  name: string;
  description: string;
  category: "education" | "vocational" | "behavioral" | "rehabilitation";
  enrolledCount: number;
}