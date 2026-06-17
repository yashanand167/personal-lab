"use client"

import { motion, useMotionValue } from 'motion/react'
import { useRef } from 'react'
import { useTheme } from 'next-themes'

export default function MagneticButton() {
    const ref = useRef(null)
    const { resolvedTheme } = useTheme()

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2
        
        const rotateXValue = ((y - centerY) / centerY) * -15
        const rotateYValue = ((x - centerX) / centerX) * 15

        rotateX.set(rotateXValue)
        rotateY.set(rotateYValue)
    }

    function reset() {
        rotateX.set(0);
        rotateY.set(0);
    }

    const handleClick = () => {
        console.log("clicked")
    }

    const shadowColor = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.25)"

    return (
        <motion.button
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            initial={false}
            animate={{
                boxShadow: `0px 4px 0px ${shadowColor}`,
            }}
            whileTap={{
                y: 4,
                boxShadow: `0px 0px 0px ${shadowColor}`,
            }}
            style={{
                rotateX,
                rotateY,
                transformPerspective: 800,
            }}
            ref={ref}
            onClick={handleClick}
            className="flex items-center justify-center w-[170px] h-14 bg-gradient-to-r from-[#747474] to-[#FBFBFB] border-[1px] border-white rounded-xl text-black hover:opacity-90 transition-all duration-75 cursor-pointer"
        >
            <span className="select-none">Click Me</span>
        </motion.button>
    )
}