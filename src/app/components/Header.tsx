interface HeaderProps {
    event: string;
}

export function Header({ event }: HeaderProps) {
    return (
        <header className="text-center mb-12 animate-fade-in-down">
            <h1 className="font-mono text-4xl md:text-5xl font-bold mb-2">
                <span className="text-aoc-green glow-green">Advent of Code </span>
                <span className="text-aoc-gold glow-gold">{event}</span>
            </h1>
            <p className="text-aoc-muted">Private Leaderboard</p>
        </header>
    );
}

