"use client"

import React, { useState } from "react"
import { motion, useMotionValue, useTransform } from "motion/react"
import { ArrowRight, Check, ChevronsRight } from "lucide-react"

export default function SlideButton() {
  const [done, setDone] = useState(false);

  const x = useMotionValue(0);

  const textOpacity = useTransform(
    x,
    [0, 120],
    [1, 0]
  )

  const progress = useTransform(
    x,
    [0, 260],
    ["#111", "#16a34a"]
  )

  return (
    <motion.div
      className="relative flex items-center justify-center w-96 bg-black px-10 py-4 rounded-xl"
    >
      <motion.div
        className="absolute left-6 bg-yellow-500 p-2"
        style={{
          x
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 260 }}
        dragElastic={0}
        dragTransition={{ bounceStiffness: 0 }}
        onDragEnd={(e, info) => {
          if (info.point.x > 260) {
            setDone(true);
          }
        }}
      >
        <ChevronsRight className="w-5 h-5 text-black" />
      </motion.div>

      {!done && (
        <motion.div className="pl-5">
          <h1 className="text-white">Slide to Unlock</h1>
        </motion.div>
      )}

      {done && (
        <motion.div>
          Successful
        </motion.div>
      )}
    </motion.div>
  )
}