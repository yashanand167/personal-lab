"use client"

import { motion } from 'motion/react';
import { Circle } from 'lucide-react';

const MotionCircle = motion(Circle);

export default function DottedCircleLoading() {
    return (
        <div className="relative w-10 h-10">
            {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 360) / 12;
                return (
                    <div
                        key={i}
                        className="absolute inset-0"
                        style={{
                            transform: `rotate(${angle}deg)`,
                        }}
                    >
                        <MotionCircle
                            className="w-1.5 h-1.5 text-foreground fill-current mx-auto"
                            animate={{
                                scale: [0.4, 1, 0.4],
                                opacity: [0.25, 1, 0.25],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * (1.2 / 12),
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}