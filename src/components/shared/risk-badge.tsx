import { Badge } from "@/components/ui/badge";
import type { RiskLevel } from "@/types";
import { cn } from "@/lib/utils";

interface RiskBadgeProps {
  level: RiskLevel;
  className?: string;
}

const riskConfig: Record<
  RiskLevel,
  { label: string; className: string }
> = {
  low: {
    label: "Low",
    className: "bg-risk-low/10 text-risk-low border-risk-low/20 hover:bg-risk-low/20",
  },
  medium: {
    label: "Medium",
    className: "bg-risk-medium/10 text-risk-medium border-risk-medium/20 hover:bg-risk-medium/20",
  },
  high: {
    label: "High",
    className: "bg-risk-high/10 text-risk-high border-risk-high/20 hover:bg-risk-high/20",
  },
  critical: {
    label: "Critical",
    className: "bg-risk-critical/10 text-risk-critical border-risk-critical/20 hover:bg-risk-critical/20",
  },
};

export function RiskBadge({ level, className }: RiskBadgeProps) {
  const config = riskConfig[level];

  return (
    <Badge
      variant="outline"
      className={cn(config.className, className)}
    >
      {config.label}
    </Badge>
  );
}
