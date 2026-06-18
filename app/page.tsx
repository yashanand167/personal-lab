"use client"

import Header from "@/components/Header"
import { useState } from "react"
import ComponentList from "@/components/ComponentList"
import IsometricLogo from "@/components/IsometricLogo"
import { LayoutGrid, Play, Pipette } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Home() {
  const [isActive, setIsActive] = useState("list")

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-4xl w-auto md:w-full mx-4 md:mx-auto border-x border-border/40">
        <div className="flex gap-2 pt-8 sm:pt-12 px-4 sm:px-8">
          <Pipette className="w-5 h-5 text-primary" />
          <p className="text-gray-400 pb-2 text-sm sm:text-base">Lab where I experiment with my UI ideas & references</p>
        </div>
        <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
        <div className="w-full md:w-[112%] md:-mx-[6%] aspect-[1113/441] flex items-center justify-center pt-4 pb-0">
          <IsometricLogo className="translate-x-6 sm:translate-x-12 max-w-[85%] sm:max-w-[80%]" />
        </div>

        <DiagonalLines />

        <div className="px-4 sm:px-8 py-4">
          <h1 className="text-xl sm:text-2xl font-semibold">Crafted with ❤️ for the community</h1>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
          <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
        </div>

        <div className="px-4 sm:px-8 pt-4 pb-2">
          <section className="flex justify-between items-center">
            <h1>Few for now, more in future</h1>
            <div className="flex items-center gap-1 bg-muted/40 p-0.5 rounded-lg border border-border/20">
              <button
                onClick={() => setIsActive("list")}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${isActive === "list"
                    ? "bg-black/10 dark:bg-white/10 text-foreground dark:text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                aria-label="List view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <Link href="/showcase" className="block">
                <button
                  className={`p-1.5 rounded-md transition-all cursor-pointer ${isActive === "showcase"
                      ? "bg-black/10 dark:bg-white/10 text-foreground dark:text-white"
                      : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  aria-label="Showcase"
                >
                  <Play className="w-4 h-4" />
                </button>
              </Link>
            </div>

          </section>
        </div>
        <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
        <ComponentList />

      </main>
      <Footer />
    </div>
  )
}

const DiagonalLines = () => {
  return (
    <div>

    </div>
  )
}
