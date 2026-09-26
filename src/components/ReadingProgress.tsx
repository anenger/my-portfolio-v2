// Driven entirely by CSS scroll timelines (see `.reading-progress` in
// globals.css); browsers without support simply don't render it.
export const ReadingProgress = () => {
  return (
    <div
      aria-hidden="true"
      className="reading-progress bg-accent pointer-events-none fixed inset-x-0
        top-0 z-50 h-0.5 origin-left"
    />
  );
};
