export function formatTimestamp(ts: number): string {
    const date = new Date(ts * 1000);

    return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
}

export function formatFullDate(ts: number): string {
    const date = new Date(ts * 1000);

    return date.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'short',
    });
}

export function formatDuration(seconds: number): string {
    if (seconds < 0) {
        return '-';
    }

    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const parts: string[] = [];

    if (days > 0) {
        parts.push(`${days}d`);
    }

    if (hours > 0) {
        parts.push(`${hours}h`);
    }

    if (minutes > 0) {
        parts.push(`${minutes}m`);
    }

    if (secs > 0 || parts.length === 0) {
        parts.push(`${secs}s`);
    }

    return parts.join(' ');
}

export function getMemberName(member: { name: string | null; id: number }): string {
    return member.name || `Anonymous #${member.id}`;
}

