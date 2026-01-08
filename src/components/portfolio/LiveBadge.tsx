'use client';

export default function LiveBadge({ status }: { status: string }) {
    const colors = {
        live: 'bg-green-500',
        building: 'bg-amber-500',
        soon: 'bg-blue-500'
    };

    const color = colors[status as keyof typeof colors] || 'bg-gray-500';

    return (
        <span className="relative flex h-3 w-3">
            {status === 'live' && (
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${color}`}></span>
            )}
            <span className={`relative inline-flex rounded-full h-3 w-3 ${color}`}></span>
        </span>
    );
}
