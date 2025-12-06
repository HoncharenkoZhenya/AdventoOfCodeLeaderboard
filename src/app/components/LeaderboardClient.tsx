'use client';

import { useState } from 'react';
import { Member } from '@/types/leaderboard';
import { getMemberName } from '@/utils/formatters';
import { FilterButton } from './FilterButton';
import { MemberCard } from './MemberCard';

type SortFilter = 'score' | 'stars' | 'name';

interface LeaderboardClientProps {
  members: Member[];
  numDays: number;
}

export function LeaderboardClient({ members, numDays }: LeaderboardClientProps) {
  const [sortFilter, setSortFilter] = useState<SortFilter>('score');
  const [showActiveOnly, setShowActiveOnly] = useState(false);

  const getSortedMembers = (): Member[] => {
    let filteredMembers = [...members];
    
    if (showActiveOnly) {
      filteredMembers = filteredMembers.filter(m => m.stars > 0);
    }

    switch (sortFilter) {
      case 'score':
        return filteredMembers.sort((a, b) => b.local_score - a.local_score);
      case 'stars':
        return filteredMembers.sort((a, b) => b.stars - a.stars || b.local_score - a.local_score);
      case 'name':
        return filteredMembers.sort((a, b) => getMemberName(a).localeCompare(getMemberName(b)));
      default:
        return filteredMembers.sort((a, b) => b.local_score - a.local_score);
    }
  };

  const sortedMembers = getSortedMembers();

  return (
    <>
      {/* Filter Controls */}
      <nav className="flex justify-center gap-4 mb-8 flex-wrap" aria-label="Sorting options">
        <FilterButton 
          active={sortFilter === 'score'} 
          onClick={() => setSortFilter('score')}
        >
          Sort by Score
        </FilterButton>
        <FilterButton 
          active={sortFilter === 'stars'} 
          onClick={() => setSortFilter('stars')}
        >
          Sort by Stars
        </FilterButton>
        <FilterButton 
          active={sortFilter === 'name'} 
          onClick={() => setSortFilter('name')}
        >
          Sort by Name
        </FilterButton>
        <FilterButton 
          active={showActiveOnly} 
          onClick={() => setShowActiveOnly(!showActiveOnly)}
        >
          Active Only
        </FilterButton>
      </nav>

      {/* Leaderboard */}
      <main className="space-y-4" aria-label="Leaderboard">
        {sortedMembers.length === 0 && (
          <div className="text-center py-12 text-aoc-muted italic">No members to display</div>
        )}
        {sortedMembers.map((member, index) => (
          <MemberCard 
            key={member.id} 
            member={member} 
            rank={index + 1} 
            numDays={numDays}
            delay={index * 0.05}
          />
        ))}
      </main>
    </>
  );
}

