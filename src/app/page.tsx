import { LeaderboardData } from '@/types/leaderboard';
import { Header, StatsOverview, Footer, LeaderboardClient } from './components';

async function getLeaderboardData(): Promise<LeaderboardData> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const response = await fetch(`${baseUrl}/api/leaderboard`, {
    next: { revalidate: 960 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch leaderboard data: ${response.status}`);
  }

  return response.json();
}

export default async function Home() {
  const data = await getLeaderboardData();

  const members = Object.values(data.members);
  const activeMembers = members.filter(m => m.stars > 0);
  const totalStars = members.reduce((sum, m) => sum + m.stars, 0);

  return (
    <div className="min-h-screen bg-aoc-dark p-8">
      <div className="max-w-7xl mx-auto">
        <Header event={data.event} />

        <StatsOverview
          totalMembers={members.length}
          activeMembers={activeMembers.length}
          totalStars={totalStars}
          numDays={data.num_days}
        />

        <LeaderboardClient
          members={members}
          numDays={data.num_days}
        />

        <Footer />
      </div>
    </div>
  );
}
