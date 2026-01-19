// Force dynamic rendering to avoid prerender issues with client components
export const dynamic = "force-dynamic";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard shell will be built in Phase 4 */}
      {children}
    </div>
  );
}