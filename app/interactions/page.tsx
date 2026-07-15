"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function InteractionPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />

      {/* Left Sidebar - completely left on desktop (fixed position) */}
      <aside className="hidden xl:flex flex-col gap-1.5 w-40 2xl:w-48 shrink-0 fixed left-8 2xl:left-16 top-64 z-10">
        {/* Sidebar container placeholder */}
      </aside>

      {/* Centered Layout Wrapper with continuous vertical lines */}
      <div className="flex-1 max-w-4xl w-auto md:w-full mx-4 md:mx-auto border-x border-border/40 bg-background flex flex-col relative pb-12">
        
        {/* Sticky Header block (Title + Double Lines) on desktop */}
        <div className="xl:sticky xl:top-14 bg-background z-20">
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
        <main className="flex-1 p-6 sm:p-10 bg-background flex flex-col min-h-[500px]">
          {/* Main content placeholder */}
        </main>
      </div>

      <Footer />
    </div>
  )
}