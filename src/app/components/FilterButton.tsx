'use client';

interface FilterButtonProps {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

export function FilterButton({ active, onClick, children }: FilterButtonProps) {
    return (
        <button
            onClick={onClick}
            aria-pressed={active}
            className={`
        px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200
        ${active
            ? 'bg-aoc-gold text-aoc-dark border-aoc-gold'
            : 'bg-aoc-card text-aoc-text border-aoc-border hover:border-aoc-gold hover:bg-aoc-card-hover'
        }
        border
      `}
        >
            {children}
        </button>
    );
}

