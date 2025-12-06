export default function Loading() {
  return (
    <div className="min-h-screen bg-aoc-dark p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <header className="text-center mb-12 animate-pulse">
          <div className="h-12 bg-aoc-card rounded-lg w-96 mx-auto mb-2" />
          <div className="h-4 bg-aoc-card rounded w-40 mx-auto" />
        </header>

        {/* Stats Skeleton */}
        <section className="flex justify-center gap-4 md:gap-8 mb-8 flex-wrap">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-aoc-card px-6 py-4 rounded-xl border border-aoc-border animate-pulse">
              <div className="h-9 bg-aoc-border rounded w-16 mx-auto mb-2" />
              <div className="h-3 bg-aoc-border rounded w-24" />
            </div>
          ))}
        </section>

        {/* Filter Skeleton */}
        <nav className="flex justify-center gap-4 mb-8 flex-wrap">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 bg-aoc-card rounded-lg w-28 animate-pulse" />
          ))}
        </nav>

        {/* Cards Skeleton */}
        <main className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="bg-aoc-card rounded-2xl p-6 border border-aoc-border animate-pulse"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-8 bg-aoc-border rounded w-12" />
                <div className="flex-1">
                  <div className="h-5 bg-aoc-border rounded w-48 mb-2" />
                  <div className="h-4 bg-aoc-border rounded w-32" />
                </div>
                <div className="h-8 bg-aoc-border rounded w-16" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="bg-white/[0.03] rounded-lg p-3 h-24" />
                ))}
              </div>
            </div>
          ))}
        </main>

        {/* Footer Skeleton */}
        <footer className="text-center mt-12 pt-8 border-t border-aoc-border">
          <div className="h-4 bg-aoc-card rounded w-32 mx-auto" />
        </footer>
      </div>
    </div>
  );
}

