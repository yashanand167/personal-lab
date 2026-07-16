"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import DottedLoading from "@/components/Interactions/Loadings/dotted-loading"
import DottedCircleLoading from "@/components/Interactions/Loadings/dotted-circle"
import DottedTrapezoid from "@/components/Interactions/Loadings/dotted-trapezoid"
import { Loader2 } from "lucide-react"
import { motion } from "motion/react"
import Inifinity from "@/components/Interactions/Loadings/infinity"

export default function InteractionPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden relative">
      <Header />

      <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">

      {/* Left Sidebar - completely left on desktop (fixed position) */}
      <aside className="hidden xl:flex flex-col gap-1.5 w-40 2xl:w-48 shrink-0 fixed left-8 2xl:left-16 top-64 z-10 overflow-y-hidden select-none">
        <div className="flex flex-col gap-1.5">
          <p className="text-[10px] font-bold tracking-wider text-muted-foreground/60 uppercase mb-3 px-3">
            Interaction
          </p>

          <button
            className="relative flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-colors select-none text-left cursor-pointer w-full font-medium text-foreground font-semibold"
          >
            <motion.div
              layoutId="active-interactions-tab"
              className="absolute inset-0 bg-muted/65 border border-border/45 rounded-lg -z-10"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
            <Loader2 className="w-4 h-4 text-primary" />
            <span>Loading Interaction</span>
          </button>
        </div>
      </aside>

      {/* Centered Layout Wrapper with continuous vertical lines */}
      <div className="flex-1 max-w-4xl w-auto md:w-full mx-4 md:mx-auto border-x border-border/40 bg-background flex flex-col relative pb-12">
        
        {/* Sticky Header block (Title + Double Lines) on desktop */}
        <div className="xl:sticky xl:top-0 bg-background z-20">
          {/* Top Header Section */}
          <div className="pt-6 sm:pt-10 px-4 sm:px-10 flex flex-col">
            <p className="text-muted-foreground text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
              Interactions
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground tracking-tight capitalize mt-1">
              Interactions
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              Explore interactive UI micro-interactions and motion designs.
            </p>
          </div>

          {/* Viewport-wide Double Divider Lines */}
          <div className="py-4 sm:py-6 flex flex-col gap-4 sm:gap-6 relative">
            <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
            <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
          </div>
        </div>

        {/* Right Main Content */}
        <main className="flex-1 py-10 bg-background flex flex-col justify-center min-h-[500px]">
          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-dotted border-border bg-card/5">
            <div className="flex flex-col items-center justify-center p-12 border-b md:border-b-0 md:border-r border-dotted border-border h-48 relative">
              <DottedLoading />
              <span className="absolute bottom-3 text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Dotted Grid</span>
            </div>
            <div className="flex flex-col items-center justify-center p-12 border-b md:border-b-0 md:border-r border-dotted border-border h-48 relative">
              <DottedCircleLoading />
              <span className="absolute bottom-3 text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Dotted Circle</span>
            </div>
            <div className="flex flex-col items-center justify-center p-12 h-48 relative">
              <DottedTrapezoid />
              <span className="absolute bottom-3 text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Dotted Trapezoid</span>
            </div>
            <div className="flex flex-col items-center justify-center p-12 border-b md:border-b-0 md:border-r border-dotted border-border h-48 relative">
              <Inifinity />
              <span className="absolute bottom-3 text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Infinity</span>
            </div>
          </div>
        </main>
      </div>

      <Footer />
      </div>
    </div>
  )
}