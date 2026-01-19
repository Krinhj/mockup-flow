import type {
  Inmate,
  Incident,
  AIInsight,
  DashboardStats,
  User,
  Facility,
  Program,
} from "@/types";

// Helper to generate random date within range
function randomDate(start: Date, end: Date): string {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split("T")[0];
}

// Helper to generate random time
function randomTime(): string {
  const hours = Math.floor(Math.random() * 24)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor(Math.random() * 60)
    .toString()
    .padStart(2, "0");
  return `${hours}:${minutes}`;
}

// Housing units
export const housingUnits = [
  "Block A",
  "Block B",
  "Block C",
  "Block D",
  "Medical Unit",
  "Protective Custody",
  "Maximum Security",
];

// Programs available
export const programs: Program[] = [
  {
    id: "prog-1",
    name: "GED Preparation",
    description: "High school equivalency preparation course",
    category: "education",
    enrolledCount: 45,
  },
  {
    id: "prog-2",
    name: "Anger Management",
    description: "Cognitive behavioral therapy for anger control",
    category: "behavioral",
    enrolledCount: 32,
  },
  {
    id: "prog-3",
    name: "Vocational Welding",
    description: "Certified welding training program",
    category: "vocational",
    enrolledCount: 18,
  },
  {
    id: "prog-4",
    name: "Substance Abuse Recovery",
    description: "12-step based recovery program",
    category: "rehabilitation",
    enrolledCount: 56,
  },
  {
    id: "prog-5",
    name: "Computer Skills",
    description: "Basic computer literacy and office software",
    category: "education",
    enrolledCount: 28,
  },
  {
    id: "prog-6",
    name: "Life Skills",
    description: "Practical skills for reintegration",
    category: "rehabilitation",
    enrolledCount: 41,
  },
];

// Facility data
export const facility: Facility = {
  id: "facility-1",
  name: "Central State Correctional Facility",
  capacity: 500,
  currentPopulation: 423,
  housingUnits,
};

// Mock user (current logged in)
export const currentUser: User = {
  id: "user-1",
  email: "admin@aca.gov",
  name: "John Mitchell",
  role: "admin",
  facilityId: "facility-1",
  avatarUrl: undefined,
};

// Generate inmates
const firstNames = [
  "James",
  "Michael",
  "Robert",
  "David",
  "William",
  "Richard",
  "Joseph",
  "Thomas",
  "Christopher",
  "Charles",
  "Daniel",
  "Matthew",
  "Anthony",
  "Mark",
  "Donald",
  "Steven",
  "Paul",
  "Andrew",
  "Joshua",
  "Kenneth",
  "Kevin",
  "Brian",
  "George",
  "Timothy",
  "Ronald",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
];

export const inmates: Inmate[] = Array.from({ length: 25 }, (_, i) => {
  const firstName = firstNames[i % firstNames.length];
  const lastName = lastNames[i % lastNames.length];
  const riskLevels: Inmate["riskLevel"][] = [
    "low",
    "low",
    "low",
    "medium",
    "medium",
    "medium",
    "high",
    "high",
    "critical",
  ];
  const riskLevel = riskLevels[Math.floor(Math.random() * riskLevels.length)];
  const riskScoreRanges = {
    low: [10, 30],
    medium: [31, 55],
    high: [56, 80],
    critical: [81, 100],
  };
  const [min, max] = riskScoreRanges[riskLevel];
  const riskScore = Math.floor(Math.random() * (max - min + 1)) + min;

  const availablePrograms = programs.map((p) => p.name);
  const numPrograms = Math.floor(Math.random() * 3);
  const enrolledPrograms = availablePrograms
    .sort(() => 0.5 - Math.random())
    .slice(0, numPrograms);

  return {
    id: `inmate-${i + 1}`,
    firstName,
    lastName,
    inmateNumber: `ACA-${String(10000 + i).padStart(6, "0")}`,
    photoUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${firstName}%20${lastName}&backgroundColor=1e3a5f`,
    dateOfBirth: randomDate(new Date(1960, 0, 1), new Date(2000, 0, 1)),
    admissionDate: randomDate(new Date(2020, 0, 1), new Date(2024, 11, 1)),
    housingUnit: housingUnits[Math.floor(Math.random() * housingUnits.length)],
    riskLevel,
    riskScore,
    programs: enrolledPrograms,
    status: Math.random() > 0.1 ? "active" : "released",
  };
});

// Generate incidents
const incidentTypes: Incident["type"][] = [
  "assault",
  "contraband",
  "medical",
  "behavioral",
  "property",
  "other",
];

const incidentLocations = [
  "Recreation Yard",
  "Cafeteria",
  "Block A Common Area",
  "Block B Common Area",
  "Block C Common Area",
  "Block D Common Area",
  "Library",
  "Chapel",
  "Medical Unit",
  "Visitation Room",
  "Shower Area",
  "Work Assignment Area",
];

const incidentDescriptions: Record<Incident["type"], string[]> = {
  assault: [
    "Physical altercation between two inmates during recreation period.",
    "Inmate attacked another inmate in the cafeteria line.",
    "Fight broke out in the common area, multiple inmates involved.",
    "Assault on staff member during cell inspection.",
  ],
  contraband: [
    "Contraband cell phone discovered during routine search.",
    "Unauthorized medications found in inmate's possession.",
    "Homemade weapon discovered in cell block.",
    "Prohibited items found during mail inspection.",
  ],
  medical: [
    "Inmate complained of chest pains, transported to medical.",
    "Self-harm incident reported, inmate placed on suicide watch.",
    "Diabetic emergency, insulin administered.",
    "Inmate fell and sustained head injury.",
  ],
  behavioral: [
    "Inmate refused to comply with direct orders.",
    "Verbal altercation with corrections officer.",
    "Disruptive behavior during program session.",
    "Inmate incited disturbance in housing unit.",
  ],
  property: [
    "Vandalism of cell property during lockdown.",
    "Theft of personal items from another inmate.",
    "Damage to facility equipment in workshop.",
    "Destruction of library materials.",
  ],
  other: [
    "Attempted escape from work detail.",
    "Suspicious activity reported by staff.",
    "Policy violation during visitation.",
    "Unauthorized area access detected.",
  ],
};

export const incidents: Incident[] = Array.from({ length: 60 }, (_, i) => {
  const type = incidentTypes[Math.floor(Math.random() * incidentTypes.length)];
  const severities: Incident["severity"][] = [
    "low",
    "low",
    "medium",
    "medium",
    "high",
    "critical",
  ];
  const severity = severities[Math.floor(Math.random() * severities.length)];
  const statuses: Incident["status"][] = [
    "resolved",
    "resolved",
    "resolved",
    "under_review",
    "open",
  ];
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const descriptions = incidentDescriptions[type];
  const description = descriptions[Math.floor(Math.random() * descriptions.length)];

  // Randomly assign 1-3 inmates to this incident
  const numInvolved = Math.floor(Math.random() * 3) + 1;
  const involvedInmates = inmates
    .filter((inmate) => inmate.status === "active")
    .sort(() => 0.5 - Math.random())
    .slice(0, numInvolved)
    .map((inmate) => inmate.id);

  const staffNames = [
    "Officer Rodriguez",
    "Officer Thompson",
    "Sgt. Williams",
    "Officer Chen",
    "Lt. Martinez",
  ];
  const involvedStaff = staffNames
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 2) + 1);

  return {
    id: `incident-${i + 1}`,
    date: randomDate(new Date(2024, 6, 1), new Date(2025, 0, 20)),
    time: randomTime(),
    type,
    severity,
    location:
      incidentLocations[Math.floor(Math.random() * incidentLocations.length)],
    description,
    involvedInmates,
    involvedStaff,
    outcome:
      status === "resolved"
        ? "Incident resolved. Disciplinary action taken where appropriate."
        : status === "under_review"
          ? "Under investigation by internal affairs."
          : "Pending initial review.",
    attachments:
      Math.random() > 0.7 ? [`report-${i + 1}.pdf`, `evidence-${i + 1}.jpg`] : [],
    status,
    aiSummary:
      Math.random() > 0.5
        ? `AI Analysis: This ${severity} severity ${type} incident shows patterns consistent with ${Math.random() > 0.5 ? "escalating tensions in the housing unit" : "isolated behavioral issues"}. Recommend ${Math.random() > 0.5 ? "increased monitoring" : "intervention program enrollment"}.`
        : undefined,
  };
});

// Generate AI insights for some inmates
export const aiInsights: AIInsight[] = inmates
  .filter((_, i) => i < 15) // Only first 15 inmates have insights
  .map((inmate, i) => ({
    id: `insight-${i + 1}`,
    inmateId: inmate.id,
    generatedAt: randomDate(new Date(2024, 11, 1), new Date(2025, 0, 20)),
    type: ["risk_assessment", "behavioral_pattern", "recommendation"][
      Math.floor(Math.random() * 3)
    ] as AIInsight["type"],
    content: generateInsightContent(inmate),
    confidence: Math.round((0.7 + Math.random() * 0.25) * 100) / 100,
    contributingFactors: generateContributingFactors(inmate),
  }));

function generateInsightContent(inmate: Inmate): string {
  const patterns = [
    `Analysis of ${inmate.firstName} ${inmate.lastName}'s incident history reveals ${inmate.riskLevel === "high" || inmate.riskLevel === "critical" ? "concerning patterns of escalating behavior" : "generally stable behavioral patterns"}. `,
    `Recent behavioral data indicates ${Math.random() > 0.5 ? "positive engagement with rehabilitation programs" : "resistance to program participation"}. `,
    `Social network analysis shows ${Math.random() > 0.5 ? "association with known high-risk individuals" : "positive peer relationships within the housing unit"}. `,
  ];

  const recommendations = [
    "Recommend continued monitoring and evaluation.",
    "Consider enrollment in anger management program.",
    "Suggest housing reassignment to lower-risk unit.",
    "Maintain current program participation requirements.",
    "Schedule follow-up psychological evaluation.",
  ];

  return (
    patterns.slice(0, 2).join("") +
    recommendations[Math.floor(Math.random() * recommendations.length)]
  );
}

function generateContributingFactors(inmate: Inmate): string[] {
  const allFactors = [
    "Incident frequency in past 30 days",
    "Program participation rate",
    "Peer associations",
    "Behavioral compliance score",
    "Time since last incident",
    "Housing unit stability",
    "Visitation regularity",
    "Work assignment performance",
  ];

  const numFactors = inmate.riskLevel === "critical" ? 5 : inmate.riskLevel === "high" ? 4 : 3;
  return allFactors.sort(() => 0.5 - Math.random()).slice(0, numFactors);
}

// Dashboard statistics
export const dashboardStats: DashboardStats = {
  totalInmates: inmates.filter((i) => i.status === "active").length,
  activeIncidents24h: incidents.filter(
    (i) => i.status === "open" || i.status === "under_review"
  ).length,
  highRiskCount: inmates.filter(
    (i) =>
      i.status === "active" &&
      (i.riskLevel === "high" || i.riskLevel === "critical")
  ).length,
  programEnrollmentRate: 72, // percentage
  capacityPercentage: Math.round(
    (facility.currentPopulation / facility.capacity) * 100
  ),
};

// Helper functions for filtering and searching
export function getInmateById(id: string): Inmate | undefined {
  return inmates.find((inmate) => inmate.id === id);
}

export function getIncidentById(id: string): Incident | undefined {
  return incidents.find((incident) => incident.id === id);
}

export function getIncidentsForInmate(inmateId: string): Incident[] {
  return incidents.filter((incident) =>
    incident.involvedInmates.includes(inmateId)
  );
}

export function getInsightsForInmate(inmateId: string): AIInsight[] {
  return aiInsights.filter((insight) => insight.inmateId === inmateId);
}

export function searchInmates(query: string): Inmate[] {
  const lowercaseQuery = query.toLowerCase();
  return inmates.filter(
    (inmate) =>
      inmate.firstName.toLowerCase().includes(lowercaseQuery) ||
      inmate.lastName.toLowerCase().includes(lowercaseQuery) ||
      inmate.inmateNumber.toLowerCase().includes(lowercaseQuery)
  );
}

export function filterInmates(filters: {
  housingUnit?: string;
  riskLevel?: Inmate["riskLevel"];
  status?: Inmate["status"];
}): Inmate[] {
  return inmates.filter((inmate) => {
    if (filters.housingUnit && inmate.housingUnit !== filters.housingUnit)
      return false;
    if (filters.riskLevel && inmate.riskLevel !== filters.riskLevel)
      return false;
    if (filters.status && inmate.status !== filters.status) return false;
    return true;
  });
}

// Recent incidents (last 5)
export function getRecentIncidents(limit: number = 5): Incident[] {
  return [...incidents]
    .sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, limit);
}

// Risk distribution for charts
export function getRiskDistribution(): { level: string; count: number }[] {
  const distribution = {
    low: 0,
    medium: 0,
    high: 0,
    critical: 0,
  };

  inmates
    .filter((i) => i.status === "active")
    .forEach((inmate) => {
      distribution[inmate.riskLevel]++;
    });

  return [
    { level: "Low", count: distribution.low },
    { level: "Medium", count: distribution.medium },
    { level: "High", count: distribution.high },
    { level: "Critical", count: distribution.critical },
  ];
}

// Incidents by type for charts
export function getIncidentsByType(): { type: string; count: number }[] {
  const byType: Record<string, number> = {};

  incidents.forEach((incident) => {
    const typeLabel = incident.type.charAt(0).toUpperCase() + incident.type.slice(1);
    byType[typeLabel] = (byType[typeLabel] || 0) + 1;
  });

  return Object.entries(byType).map(([type, count]) => ({ type, count }));
}
