'use client';

import { useEffect, useState } from 'react';

import { LeaderboardData } from '@/types/leaderboard';
import Loading from '@/app/loading';

import { Header, StatsOverview, Footer, LeaderboardClient } from './components';

export default function Home() {

    const [data, setData] = useState<LeaderboardData | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getLeaderboardData().then(setData).catch(setError);
    }, []);

    if (error) {
        // Handled by error.tsx
        throw error;
    }

    if (!data) {
        return <Loading />;
    }

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
    const response = await fetch('/api/leaderboard');
    const body = await response.json().catch(() => null) as LeaderboardData & { error?: string } | null;

    if (!response.ok || !body) {
        throw new Error(body?.error ?? `Failed to fetch leaderboard data: ${response.status}`);
    }

    return body;
}
