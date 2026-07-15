"use client"

import { motion } from 'motion/react';

export default function DottedTrapezoid() {
    return (
        <div>
            <Dots />
        </div>
    );
}

const Dots = () => {
    // 3 rows: 3 dots on top, 4 in the middle, 5 at the bottom to form a trapezoid
    const trapezoidRows = [
        [0, 1, 2],       // Row 0 (3 items)
        [0, 1, 2, 3],    // Row 1 (4 items)
        [0, 1, 2, 3, 4]  // Row 2 (5 items)
    ];

    return (
        <main className="flex flex-col items-center gap-2 w-fit">
            {trapezoidRows.map((rowItems, rowIndex) => {
                const numItems = rowItems.length;
                return (
                    <div key={rowIndex} className="flex justify-center gap-2">
                        {rowItems.map((_, colIndex) => {
                            // Compute relative column coordinate to center-align the waves
                            const colCoord = colIndex - (numItems - 1) / 2;
                            // Shift by 1 so index starts at 0
                            const diagonalIndex = rowIndex + colCoord + 1;

                            return (
                                <motion.div
                                    key={colIndex}
                                    className="w-2 h-2 bg-foreground"
                                    animate={{
                                        scale: [0.5, 1, 0.75, 0.5],
                                        opacity: [0.2, 1, 0.6, 0.2],
                                        borderRadius: ["0%", "0%", "50%", "0%"],
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        repeatDelay: 0.4,
                                        ease: "easeInOut",
                                        delay: diagonalIndex * 0.15
                                    }}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </main>
    );
}