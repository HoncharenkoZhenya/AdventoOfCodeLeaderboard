import { LeaderboardData } from '@/types/leaderboard';
import { Header, StatsOverview, Footer, LeaderboardClient } from './components';

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

async function getLeaderboardData(): Promise<LeaderboardData> {
  const baseUrl = getBaseUrl();

  const response = await fetch(`${baseUrl}/api/leaderboard`, {
    next: { revalidate: 960 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch leaderboard data: ${response.status}`);
  }

  return response.json();
}

function getBaseUrl() {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000';
    }

    const vercelUrl = process.env.VERCEL_URL;

    if (!vercelUrl) {
        throw new Error('VERCEL_URL is not set');
    }

    return `https://${vercelUrl}`;
}
