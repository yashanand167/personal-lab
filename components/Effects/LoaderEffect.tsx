"use client"

import { motion } from 'motion/react'
import { useState } from 'react'
import Image from 'next/image'

type SkeletonProps = {
    variant?: "text" | "avatar" | "card";
    className?: string;
}

export default function LoaderEffect({ variant = "text", className }: SkeletonProps) {
    const baseStyle = "inline-block bg-zinc-200/25 dark:bg-zinc-800/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)] dark:shadow-none rounded animate-pulse"
    
    switch (variant) {
        case "text":
            return <span className={`${baseStyle} h-4 ${className}`} />
        case "avatar":
            return <div className={`${baseStyle} rounded-full ${className}`} />
        case "card":
            return <div className={`${baseStyle} w-full ${className}`} />
        default:
            return <span className={`${baseStyle} h-4 ${className}`} />
    }
}

export function Shimmer({ className }: { className?: string }) {
    return (
        <div className={`relative overflow-hidden bg-zinc-200/25 dark:bg-zinc-800/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)] dark:shadow-none rounded ${className}`}>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear",
                }}
            />
        </div>
    )
}

export function CardSkeleton() {
    return (
        <div className="w-full max-w-[270px] p-4 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50/20 dark:bg-zinc-950/20 space-y-3 text-left">
            <div className="flex items-center gap-3">
                <Shimmer className="w-10 h-10 rounded-full flex-shrink-0" />
                <div className="space-y-1.5 flex-1">
                    <Shimmer className="h-4 w-3/4" />
                    <Shimmer className="h-3 w-1/2" />
                </div>
            </div>
            <Shimmer className="w-full h-28 rounded-lg" />
            <div className="space-y-2">
                <Shimmer className="h-3 w-full" />
                <Shimmer className="h-3 w-5/6" />
                <Shimmer className="h-3 w-2/3" />
            </div>
            <div className="flex gap-2 pt-2">
                <Shimmer className="h-8 flex-1 rounded-lg" />
                <Shimmer className="h-8 flex-1 rounded-lg" />
            </div>
        </div>
    )
}

export function CardContent() {
    return (
        <div className="w-full max-w-[270px] p-4 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-background shadow-sm space-y-3 text-left">
            <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                        src="/image.png"
                        alt="Profile"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <h2 className="text-sm font-semibold truncate text-foreground">Yash Lab UI</h2>
                    <p className="text-xs text-muted-foreground truncate">Ready to build</p>
                </div>
            </div>
            <div className="w-full h-28 rounded-lg relative overflow-hidden">
                <Image
                    src="/Landscape.jpg"
                    alt="Card cover"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="space-y-1">
                <p className="text-xs text-foreground font-medium leading-normal">
                    Fluid shimmering skeletons powered by Framer Motion facilitate premium UI state loads.
                </p>
            </div>
            <div className="flex gap-2 pt-2">
                <button className="h-8 flex-1 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity cursor-pointer">
                    Preview
                </button>
                <button className="h-8 flex-1 rounded-lg text-xs font-semibold border border-border/60 hover:bg-muted/50 transition-colors cursor-pointer">
                    Dismiss
                </button>
            </div>
        </div>
    )
}

export function LoaderEffectShowcase() {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="flex flex-col items-center gap-4 w-full">
            <div className="min-h-[230px] w-full flex items-center justify-center">
                {isLoading ? <CardSkeleton /> : <CardContent />}
            </div>
            <button
                onClick={() => setIsLoading(!isLoading)}
                className="px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-muted/40 hover:bg-muted/80 transition-colors text-foreground cursor-pointer select-none outline-none"
            >
                {isLoading ? "Toggle Loaded State" : "Toggle Loading Skeleton"}
            </button>
        </div>
    )
}
