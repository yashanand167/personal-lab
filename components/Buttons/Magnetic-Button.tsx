"use client"

import { motion, useMotionValue } from 'motion/react'
import { useRef } from 'react'


export default function MagneticButton() {
    const ref = useRef(null)

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
        const rect = e.currentTarget.getBoundingClientRect()
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

    return (
        <motion.button
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            whileTap={{
                y: 4,
                boxShadow: "0px 0px 0px rgba(0,0,0,0)"
            }}
            style={{
                rotateX,
                rotateY,
                transformPerspective: 800,
            }}
            ref={ref}
            onClick={handleClick}
            className="flex items-center justify-center w-[170px] h-14 bg-gradient-to-r from-[#747474] to-[#FBFBFB] border-[1px] border-white rounded-xl text-black shadow-[0px_4px_0px_rgba(0,0,0,0.25)] dark:shadow-[0px_4px_0px_rgba(255,255,255,0.5)] hover:opacity-90 transition-all cursor-pointer"
        >
            <span className="select-none">Click Me</span>
        </motion.button>
    )

}