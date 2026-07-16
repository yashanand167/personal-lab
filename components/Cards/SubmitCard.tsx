"use client"

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Loader2 } from 'lucide-react'

export default function SubmitCard() {
    const [loading, setIsLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const onClickHandler = async () => {
        if (loading || submitted) return

        try {
            setIsLoading(true)
            // Simulate loading state of 2.5 seconds
            await new Promise((resolve) => setTimeout(resolve, 2500))
            setSubmitted(true)
            // Auto reset success state after 2 seconds
            setTimeout(() => setSubmitted(false), 2000)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full aspect-square max-w-[350px] rounded-3xl bg-zinc-950/70 p-6 relative overflow-hidden backdrop-blur-md shadow-2xl flex flex-col justify-end text-white border border-transparent select-none">
            {/* SVG Animated Border Stroke */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
                {/* Static Solid Border */}
                <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="24"
                    fill="none"
                    stroke={submitted ? "#10b981" : "#27272a"}
                    strokeWidth="1.5"
                    className="transition-colors duration-300"
                    style={{
                        vectorEffect: 'non-scaling-stroke',
                    }}
                />

                {/* Rotating Green Pulse Border */}
                {loading && (
                    <motion.rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        rx="24"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2.5"
                        pathLength={1}
                        strokeDasharray="0.15 0.85"
                        style={{
                            vectorEffect: 'non-scaling-stroke',
                        }}
                        animate={{
                            strokeDashoffset: [0, -1]
                        }}
                        transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                )}
            </svg>

            {/* Button placed in the bottom right */}
            <div className="mt-auto flex justify-end w-full z-10">
                <button
                    onClick={onClickHandler}
                    disabled={loading}
                    className="h-9 px-4 rounded-lg text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-1.5"
                >
                    {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                    <span>{loading ? "Loading" : submitted ? "Submitted" : "Submit"}</span>
                </button>
            </div>
        </div>
    )
}