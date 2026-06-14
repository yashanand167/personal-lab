export default function GridLine() {
    return (
        <main className="flex flex-col gap-2">
            <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/20" />
            <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
            <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/60" />
            <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/80" />
            <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border" />
        </main>
    )
}