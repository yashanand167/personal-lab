"use client"

import Header from "@/components/Header"
import { useState } from "react"
import ComponentList from "@/components/ComponentList"
import IsometricLogo from "@/components/IsometricLogo"

export default function Home() {
  const [isActive, setIsActive] = useState("list")

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-4xl w-auto md:w-full mx-4 md:mx-auto border-x border-border/40">
        <div className="pt-8 sm:pt-12 px-4 sm:px-8">
          <p className="text-gray-400 pb-2 text-sm sm:text-base">Lab where I experiment with my UI ideas</p>
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
          <section className="flex justify-between">
            <h1>Few for now, more in future</h1>
            {/* <div className="flex gap-2">
                <Grid3X3 />
                <Eye />
            </div> 
            //future configuration
            */}
          </section>
        </div>
        <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
        <ComponentList />
      </main>
    </div>
  )
}

const DiagonalLines = () => {
  return (
    <div>

    </div>
  )
}
