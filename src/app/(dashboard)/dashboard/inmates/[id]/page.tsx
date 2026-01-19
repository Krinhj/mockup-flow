export default function InmateProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Inmate Profile</h1>
        <p className="mt-2 text-muted-foreground">
          Inmate profile will be built in Phase 5
        </p>
      </div>
    </div>
  );
}