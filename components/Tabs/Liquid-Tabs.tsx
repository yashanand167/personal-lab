"use client"

import { motion, useMotionValue, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

export default function LiquidTabs() {
    const [tab, setTab] = useState('tab 1');

    const TABS = ['tab 1', 'tab 2'];

    const TRANSITION = {
        duration: 0.6,
        type: "spring" as const,
        bounce: 0.25
    }

    return (
        <div className="relative border border-zinc-200/50 dark:border-zinc-800/50 p-1.5 rounded-xl w-fit bg-zinc-50/20 dark:bg-zinc-950/20">
            {/* Gooey background layer */}
            <div 
                className="absolute inset-1.5 flex gap-4 pointer-events-none"
                style={{ filter: 'url(#gooey)' }}
            >
                {TABS.map((t) => (
                    <div
                        key={`bg-${t}`}
                        className="relative w-20 h-9"
                    >
                        {tab === t && (
                            <motion.div
                                layoutId="active-liquid-tab"
                                className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-900 to-zinc-800 dark:bg-none dark:bg-white rounded-lg -z-10"
                                transition={TRANSITION}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Buttons layer */}
            <div className="flex items-center justify-center gap-4 relative z-10">
                {TABS.map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`w-20 h-9 flex items-center justify-center rounded-lg cursor-pointer select-none outline-none transition-colors duration-200 capitalize ${tab === t ? 'text-white dark:text-zinc-950 font-medium' : 'text-gray-500 hover:text-zinc-900 dark:hover:text-gray-100'
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <GooeySVGFilter />
        </div>
    )
}

const GooeySVGFilter = () => {
    return (
        <svg className="absolute w-0 h-0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                        result="goo"
                    />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
            </defs>
        </svg>
    )
}