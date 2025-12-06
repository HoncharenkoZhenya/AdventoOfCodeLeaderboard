'use client';

import { useEffect } from 'react';

export default function Error({ error, reset}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-aoc-dark p-8 flex items-center justify-center">
            <div className="max-w-md mx-auto text-center">
                <div className="bg-red-900/20 rounded-2xl p-8 border border-red-500/30">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong!</h2>
                    <p className="text-aoc-muted mb-6">
                        {error.message || 'Failed to load leaderboard data.'}
                    </p>
                    <button
                        onClick={reset}
                        className="px-6 py-3 bg-aoc-gold text-aoc-dark font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                    >
                        Try again
                    </button>
                </div>
            </div>
        </div>
    );
}

