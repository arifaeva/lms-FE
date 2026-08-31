export default function NotAvailable() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-medium tracking-tight">
          This experience is designed for larger screens.
        </h1>
        <h1 className="text-xl font-light tracking-tight">
          Please access the LMS from a laptop or desktop.
        </h1>
      </div>
    </main>
  );
}
