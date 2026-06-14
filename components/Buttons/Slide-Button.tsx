"use client"

import React, { useState } from "react"
import { motion, useMotionValue, useTransform } from "motion/react"
import { ArrowRight, Check } from "lucide-react"

export default function SlideButton() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const x = useMotionValue(0)
  
  const opacity = useTransform(x, [0, 80], [1, 0])
  const scale = useTransform(x, [0, 80], [1, 0.9])
  const bgOpacity = useTransform(x, [0, 100], [0, 1])

  const handleDragEnd = () => {
    if (x.get() >= 90) {
      setIsUnlocked(true)
      x.set(100)
    } else {
      x.set(0)
    }
  }

  const handleReset = () => {
    setIsUnlocked(false)
    x.set(0)
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {isUnlocked ? (
        <motion.button
          onClick={handleReset}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex h-10 items-center justify-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-5 text-xs font-semibold text-emerald-500 shadow-lg shadow-emerald-500/10 cursor-pointer"
        >
          <Check className="h-4 w-4" />
          Success! Reset
        </motion.button>
      ) : (
        <div className="relative flex h-10 w-36 items-center rounded-full bg-muted/40 p-1 border border-border/40 overflow-hidden select-none">
          <motion.span
            style={{ opacity, scale }}
            className="absolute inset-0 flex items-center justify-center pl-8 text-[10px] font-medium text-muted-foreground/80 pointer-events-none"
          >
            Slide to send
          </motion.span>

          <motion.div
            style={{ 
              opacity: bgOpacity, 
              width: x 
            }}
            className="absolute left-1 top-1 bottom-1 bg-gradient-to-r from-emerald-500/10 to-emerald-500/20 rounded-full pointer-events-none border border-emerald-500/10"
          />

          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 100 }}
            dragElastic={0.05}
            dragMomentum={false}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex h-8 w-8 cursor-grab items-center justify-center rounded-full bg-foreground text-background shadow-md active:cursor-grabbing hover:scale-105 transition-transform"
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </div>
      )}
    </div>
  )
}