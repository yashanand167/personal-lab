"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useTransform } from "motion/react"
import { Check, ChevronsRight } from "lucide-react"

export default function SlideButton() {
  const [done, setDone] = useState(false);

  const x = useMotionValue(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const knobSize = 30
  const [maxDrag, setMaxDrag] = useState(260);

  const widthTransform = useTransform(x, (val) => val + knobSize + 8);

  const handleDragStart = () => {
    if (buttonRef.current) {
      const range = buttonRef.current.clientWidth - knobSize - 16;
      setMaxDrag(Math.max(0, range));
    }
  }

  return (
    <motion.div
      layout
      animate={{
        width: done ? 150 : 320,
        borderRadius: done ? 28 : 12,
      }}
      transition={{
        type: "spring",
        stiffness: 175,
        damping: 20,
      }}
      onClick={() => {
        if (done) {
          setDone(false);
          x.set(0);
        }
      }}
      className={`relative flex items-center justify-center h-14 bg-black border-[0.5px] ${
        done ? "border-emerald-500" : "border-white/20"
      } overflow-hidden cursor-pointer`}
    >
      {!done && (
        <motion.div className="pl-5">
          <h1 className="text-white select-none">Slide to Unlock</h1>
        </motion.div>
      )}

      {!done && (
        <motion.div
          className="absolute left-0 top-0 bottom-0 bg-black p-2 rounded-md pointer-events-none"
          style={{
            width: widthTransform
          }}
        />
      )}

      {!done && (
        <motion.div
          className="absolute left-2 bg-yellow-500 p-2 rounded-md"
          style={{
            x
          }}
          drag="x"
          dragConstraints={{ left: 0, right: maxDrag }}
          dragElastic={0}
          dragTransition={{ bounceStiffness: 0 }}
          onDragStart={handleDragStart}
          onDragEnd={() => {
            if (x.get() > maxDrag * .95) {
              setDone(true);
              x.set(maxDrag);
            } else {
              x.set(0);
            }
          }}
        >
          <ChevronsRight className="w-5 h-5 text-black" />
        </motion.div>
      )}

      {done && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
          className="flex items-center justify-center text-emerald-500 gap-2"
        >
          <Check className="w-6 h-6" />
          <h1 className="text-emerald-500">Successful</h1>
        </motion.div>
      )}
    </motion.div>
  )
}