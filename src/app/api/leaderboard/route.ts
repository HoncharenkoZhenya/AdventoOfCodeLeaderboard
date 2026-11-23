import { NextResponse } from 'next/server';

const AOC_LEADERBOARD_ID = '5177355';
// AoC asks not to request the leaderboard more often than once per 15 minutes
const REVALIDATE_SECONDS = 900;
const AOC_UTC_OFFSET_MS = 5 * 60 * 60 * 1000;

// The event starts on December 1st (EST). Before that, show the previous event.
function getEventYear(): string {
    if (process.env.AOC_YEAR) {
        return process.env.AOC_YEAR;
    }

    const now = new Date(Date.now() - AOC_UTC_OFFSET_MS);
    const isDecember = now.getUTCMonth() === 11;

    return String(isDecember ? now.getUTCFullYear() : now.getUTCFullYear() - 1);
}

function errorResponse(message: string, status: number) {
    console.error(message);

    return NextResponse.json({ error: message }, { status });
}

export async function GET() {
    const session = process.env.SESSION;

    if (!session) {
        return errorResponse('SESSION env variable is not set', 500);
    }

    const year = getEventYear();
    const url = `https://adventofcode.com/${year}/leaderboard/private/view/${AOC_LEADERBOARD_ID}.json`;

    try {
        const res = await fetch(url, {
            headers: {
                Cookie: `session=${session}`,
            },
            next: { revalidate: REVALIDATE_SECONDS },
        });

        if (!res.ok) {
            return errorResponse(`Advent of Code ${year} responded with ${res.status}`, 502);
        }

        // An expired session is redirected to an HTML page instead of JSON
        if (!res.headers.get('content-type')?.includes('json')) {
            return errorResponse('Advent of Code did not return JSON – the SESSION cookie is probably expired', 502);
        }

        return NextResponse.json(await res.json());
    } catch (error) {
        console.error('Error fetching AoC leaderboard:', error);

        return errorResponse('Failed to fetch the Advent of Code leaderboard', 502);
    }
}
