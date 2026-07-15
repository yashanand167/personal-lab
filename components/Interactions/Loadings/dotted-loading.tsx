"use client"

import { Square } from "lucide-react"
import { motion } from 'motion/react'

export default function DottedLoading() {

    return (
        <div>
            <Dots />
        </div>
    )
}

const MotionSquare = motion(Square)

const Dots = () => {
    return (
        <main className="grid grid-cols-3 gap-2 w-fit">
            {Array.from({ length: 9 }).map((_, i) => {
                const row = Math.floor(i / 3);
                const col = i % 3;
                const diagonalIndex = row + col;

                return (
                    <MotionSquare
                        key={i}
                        className="w-2 h-2 text-foreground fill-current"
                        animate={{
                            opacity: [0.15, 1, 0.15],
                            scale: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                            ease: "easeInOut",
                            delay: diagonalIndex * 0.15
                        }}
                    />
                );
            })}
        </main>
    )
}