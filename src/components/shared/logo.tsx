import { Shield } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
        <Shield className="h-5 w-5 text-primary-foreground" />
      </div>
      {showText && (
        <span className="font-semibold text-foreground">ACA Intelligence</span>
      )}
    </div>
  );
}
