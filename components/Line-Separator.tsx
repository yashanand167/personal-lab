export default function LineSeparator() {
    return (
        <div className="w-screen relative left-1/2 -translate-x-1/2 h-8 border-y border-border/40 overflow-hidden bg-muted/5">
            <div
                className="absolute inset-0 opacity-[0.06] dark:opacity-[0.12]"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        -45deg,
                        var(--foreground) 0,
                        var(--foreground) 1.5px,
                        transparent 1.5px,
                        transparent 8px
                    )`
                }}
            />
        </div>
    )
}