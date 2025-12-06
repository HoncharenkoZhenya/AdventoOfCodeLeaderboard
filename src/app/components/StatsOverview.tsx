import { StatBox } from './StatBox';

interface StatsOverviewProps {
  totalMembers: number;
  activeMembers: number;
  totalStars: number;
  numDays: number;
}

export function StatsOverview({ totalMembers, activeMembers, totalStars, numDays }: StatsOverviewProps) {
  return (
    <section className="flex justify-center gap-4 md:gap-8 mb-8 flex-wrap" aria-label="Statistics Overview">
      <StatBox label="Total Members" value={totalMembers} />
      <StatBox label="Active Members" value={activeMembers} />
      <StatBox label="Total Stars" value={totalStars} />
      <StatBox label="Days Released" value={numDays} />
    </section>
  );
}

