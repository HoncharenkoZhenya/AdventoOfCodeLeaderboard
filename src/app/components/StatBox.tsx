interface StatBoxProps {
  label: string;
  value: number;
}

export function StatBox({ label, value }: StatBoxProps) {
  return (
    <article className="bg-aoc-card px-6 py-4 rounded-xl border border-aoc-border text-center">
      <div className="font-mono text-3xl font-bold text-aoc-gold">{value}</div>
      <div className="text-xs text-aoc-muted uppercase tracking-wider">{label}</div>
    </article>
  );
}

