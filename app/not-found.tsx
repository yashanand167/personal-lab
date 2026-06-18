"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 max-w-4xl w-auto md:w-full mx-4 md:mx-auto flex flex-col items-center justify-center py-20 px-6 text-center space-y-5 bg-background">
                <Visual />
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                    The page you are looking for doesn't exist or has been moved to another location.
                </p>
                <Button asChild variant="outline">
                    <Link href="/">
                        Back to Home
                    </Link>
                </Button>
            </main>
        </div>
    )
}

const Visual = () => {
    return (
        <svg
            width="544"
            height="200"
            viewBox="0 0 544 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-lg h-auto"
        >
            <line x1="287.508" y1="138.766" x2="287.508" y2="55.7596" stroke="currentColor" className="text-foreground/30 dark:text-foreground/15" strokeWidth="1.5" />
            <line x1="421.008" y1="138.77" x2="421.008" y2="55.7635" stroke="currentColor" className="text-foreground/30 dark:text-foreground/15" strokeWidth="1.5" />
            <line x1="421.008" y1="139.266" x2="390.008" y2="139.266" stroke="currentColor" className="text-foreground/30 dark:text-foreground/15" strokeWidth="1.5" />
            <line x1="319.008" y1="139.266" x2="288.008" y2="139.266" stroke="currentColor" className="text-foreground/30 dark:text-foreground/15" strokeWidth="1.5" />
            <line x1="355.321" y1="2.37576" x2="421.323" y2="55.3752" stroke="currentColor" className="text-foreground/30 dark:text-foreground/15" strokeWidth="1.5" />
            <line x1="287.687" y1="55.3757" x2="353.693" y2="2.38115" stroke="currentColor" className="text-foreground/30 dark:text-foreground/15" strokeWidth="1.5" />
            <line x1="197.413" y1="64.8728" x2="272.95" y2="1.4897" stroke="currentColor" className="text-foreground/30 dark:text-foreground/15" strokeWidth="1.5" />
            <line x1="122.321" y1="0.382603" x2="197.858" y2="63.7657" stroke="currentColor" className="text-foreground/30 dark:text-foreground/15" strokeWidth="1.5" />
            <line x1="197.5" y1="63.7656" x2="197.5" y2="138.766" stroke="currentColor" className="text-foreground/30 dark:text-foreground/15" strokeWidth="1.5" />

            <g filter="url(#filter0_f_4206_1930)">
                <rect x="60" y="80" width="424" height="90" fill="var(--background)" />
            </g>

            <text
                x="272"
                y="135"
                textAnchor="middle"
                className="fill-foreground font-sans tracking-wider"
                style={{ fontSize: "36px", letterSpacing: "0.15em" }}
            >
                404 Not Found
            </text>

            <defs>
                <filter id="filter0_f_4206_1930" x="0" y="20" width="544" height="180" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_4206_1930" />
                </filter>
            </defs>
        </svg>
    )
}
