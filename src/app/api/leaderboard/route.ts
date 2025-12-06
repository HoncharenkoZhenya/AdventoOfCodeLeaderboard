import { NextResponse } from 'next/server';

const AOC_LEADERBOARD_ID = '5177355';

export async function GET() {
    const session = process.env.SESSION;

    if (!session) {
        console.error('AOC_SESSION is not set – returning mock data');
    }

    const url = `https://adventofcode.com/2025/leaderboard/private/view/${AOC_LEADERBOARD_ID}.json`;

    try {
        const res = await fetch(url, {
            headers: {
                Cookie: `session=${session}`,
            },
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching AoC leaderboard:', error);
        return NextResponse.error()
    }
}

