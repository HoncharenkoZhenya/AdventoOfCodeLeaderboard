import { Member } from '@/types/leaderboard';
import { getMemberName } from '@/utils/formatters';
import { DayBlock } from './DayBlock';

interface MemberCardProps {
  member: Member;
  rank: number;
  numDays: number;
  delay: number;
}

export function MemberCard({ member, rank, numDays, delay }: MemberCardProps) {
  const completedDays = Object.keys(member.completion_day_level).sort((a, b) => Number(a) - Number(b));
  const rankClass = rank === 1 
    ? 'text-yellow-400 glow-gold' 
    : rank === 2 
      ? 'text-gray-300 glow-silver' 
      : rank === 3 
        ? 'text-amber-600 glow-bronze' 
        : 'text-aoc-muted';
  const nameClass = member.name ? '' : 'italic text-aoc-muted';

  return (
    <article 
      className="bg-aoc-card rounded-2xl p-6 border border-aoc-border transition-all duration-300 hover:bg-aoc-card-hover hover:-translate-y-0.5 hover:shadow-xl animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
      aria-label={`${getMemberName(member)}, rank ${rank}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <span className={`font-mono text-2xl font-bold min-w-12 ${rankClass}`}>
          #{rank}
        </span>
        <div className="flex-1">
          <h2 className={`text-lg font-semibold ${nameClass}`}>{getMemberName(member)}</h2>
          <div className="flex gap-6 text-sm text-aoc-muted mt-1">
            <span>Score: <strong className="text-aoc-text">{member.local_score}</strong></span>
            <span>Days: <strong className="text-aoc-text">{completedDays.length}/{numDays}</strong></span>
          </div>
        </div>
        <div className="font-mono text-2xl font-bold text-aoc-gold flex items-center gap-1" aria-label={`${member.stars} stars`}>
          <span>★</span>
          <span>{member.stars}</span>
        </div>
      </div>

      {completedDays.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
          {completedDays.map(day => (
            <DayBlock 
              key={day} 
              day={day} 
              dayData={member.completion_day_level[day]} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-4 text-aoc-muted italic">No completed challenges yet</div>
      )}
    </article>
  );
}

