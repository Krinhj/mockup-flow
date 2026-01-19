import Link from "next/link";
import {
  Brain,
  Activity,
  FileText,
  Shield,
  Upload,
  Sparkles,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/landing" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">
              ACA Intelligence
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        {/* Background gradient */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse at 20% 0%, rgba(30, 58, 95, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 100%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
              linear-gradient(180deg, var(--background) 0%, #f1f5f9 100%)
            `,
          }}
        />
        {/* Noise overlay */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
            {/* Left: Content */}
            <div className="flex flex-col gap-6">
              <Badge
                variant="outline"
                className="w-fit border-accent/30 bg-accent/10 text-accent"
              >
                AI-Powered Corrections Management
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Transform Inmate Data Into{" "}
                <span className="text-primary">Actionable Intelligence</span>
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                Leverage AI to analyze incident reports, identify behavioral
                patterns, and make data-driven decisions for safer, more
                efficient correctional facilities.
              </p>

              {/* Key benefits */}
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-positive" />
                  Real-time risk assessment and monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-positive" />
                  AI-generated insights from incident reports
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-positive" />
                  Comprehensive analytics dashboard
                </li>
              </ul>

              {/* CTAs */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/register">
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />

                {/* Mock dashboard card */}
                <Card className="relative overflow-hidden border-border/50 bg-card/80 shadow-xl backdrop-blur-sm">
                  <CardContent className="p-6">
                    {/* Mock header */}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-risk-low" />
                        <div className="h-3 w-3 rounded-full bg-risk-medium" />
                        <div className="h-3 w-3 rounded-full bg-risk-high" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Live Dashboard
                      </Badge>
                    </div>

                    {/* Mock stats */}
                    <div className="mb-4 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-muted/50 p-3">
                        <p className="text-xs text-muted-foreground">
                          Total Inmates
                        </p>
                        <p className="text-2xl font-bold text-foreground">
                          423
                        </p>
                      </div>
                      <div className="rounded-lg bg-muted/50 p-3">
                        <p className="text-xs text-muted-foreground">
                          Active Incidents
                        </p>
                        <p className="text-2xl font-bold text-foreground">12</p>
                      </div>
                      <div className="rounded-lg bg-muted/50 p-3">
                        <p className="text-xs text-muted-foreground">
                          High Risk
                        </p>
                        <p className="text-2xl font-bold text-risk-high">28</p>
                      </div>
                      <div className="rounded-lg bg-muted/50 p-3">
                        <p className="text-xs text-muted-foreground">
                          Program Rate
                        </p>
                        <p className="text-2xl font-bold text-positive">72%</p>
                      </div>
                    </div>

                    {/* Mock AI insight */}
                    <div className="rounded-lg border border-accent/30 bg-accent/5 p-3">
                      <div className="mb-2 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-accent" />
                        <span className="text-xs font-medium text-accent">
                          AI Insight
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Pattern detected: 3 incidents in Block C this week
                        involve the same group. Recommend increased monitoring.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t border-border/40 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Smarter Decisions, Safer Facilities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Our AI-powered platform provides comprehensive tools to manage
              inmates, analyze incidents, and generate actionable insights.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  AI-Powered Insights
                </h3>
                <p className="text-sm text-muted-foreground">
                  Automatically analyze incident reports and behavioral data to
                  identify patterns, predict risks, and generate actionable
                  recommendations.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Activity className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Real-Time Monitoring
                </h3>
                <p className="text-sm text-muted-foreground">
                  Track facility metrics, incidents, and risk levels in
                  real-time with a comprehensive dashboard designed for
                  administrators.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-positive/10">
                  <FileText className="h-6 w-6 text-positive" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Comprehensive Reports
                </h3>
                <p className="text-sm text-muted-foreground">
                  Generate detailed reports for compliance, stakeholder
                  meetings, and internal reviews with just a few clicks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              From Data to Decisions in 3 Steps
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                1
              </div>
              <div className="mb-2 flex items-center justify-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Upload Reports
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Upload incident reports, behavioral logs, and case files to the
                platform securely.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-bold text-accent-foreground">
                2
              </div>
              <div className="mb-2 flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">
                  AI Analyzes
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Our AI processes the data, identifies patterns, and generates
                risk assessments automatically.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-positive text-2xl font-bold text-white">
                3
              </div>
              <div className="mb-2 flex items-center justify-center gap-2">
                <BarChart3 className="h-5 w-5 text-positive" />
                <h3 className="text-lg font-semibold text-foreground">
                  Get Insights
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Receive actionable insights, recommendations, and comprehensive
                reports to guide your decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40">
        <div
          className="relative overflow-hidden"
          style={{
            background: `
              linear-gradient(135deg, var(--primary) 0%, #2d4a6f 100%)
            `,
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to Transform Your Facility?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Join correctional facilities across the nation using AI to improve
              safety, efficiency, and outcomes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/register">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
                <Shield className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">
                ACA Intelligence
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-foreground">
                Contact
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} American Corrections Association
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
