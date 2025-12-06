import { formatTimestamp, formatFullDate, formatDuration } from '@/utils/formatters';

interface DayBlockProps {
    day: string;
    dayData: { '1'?: { get_star_ts: number }; '2'?: { get_star_ts: number } };
}

export function DayBlock({ day, dayData }: DayBlockProps) {
    const part1 = dayData['1'];
    const part2 = dayData['2'];
    const diff = part1 && part2 ? part2.get_star_ts - part1.get_star_ts : null;

    return (
        <article
            className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.05]"
            aria-label={`Day ${day} completion`}
        >
            <div className="flex justify-between items-center mb-2">
                <span className="font-mono font-semibold text-aoc-green">Day {day}</span>
                <div className="flex gap-1" aria-label={`${(part1 ? 1 : 0) + (part2 ? 1 : 0)} of 2 stars`}>
                    <span className={`text-base ${part1 ? 'text-aoc-gold' : 'text-aoc-muted opacity-30'}`}>★</span>
                    <span className={`text-base ${part2 ? 'text-aoc-gold' : 'text-aoc-muted opacity-30'}`}>★</span>
                </div>
            </div>
            <div className="font-mono text-xs space-y-1">
                {part1 && (
                    <div className="flex items-center gap-2">
                        <span className="text-aoc-silver min-w-12">Part 1:</span>
                        <span className="text-aoc-text" title={formatFullDate(part1.get_star_ts)}>
                            {formatTimestamp(part1.get_star_ts)}
                        </span>
                    </div>
                )}
                {part2 && (
                    <div className="flex items-center gap-2">
                        <span className="text-aoc-silver min-w-12">Part 2:</span>
                        <span className="text-aoc-text" title={formatFullDate(part2.get_star_ts)}>
                            {formatTimestamp(part2.get_star_ts)}
                        </span>
                    </div>
                )}
                {diff !== null && (
                    <div className="flex items-center gap-2 mt-1 pt-1 border-t border-dashed border-white/10">
                        <span className="text-aoc-blue min-w-12">Δ Diff:</span>
                        <span className="text-aoc-gold font-semibold">{formatDuration(diff)}</span>
                    </div>
                )}
            </div>
        </article>
    );
}

