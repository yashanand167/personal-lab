"use client"

import GridLine from "@/components/GridLine"
import Header from "@/components/Header"
import { useState } from "react"
import { Grid3X3, Eye } from "lucide-react"

export default function Home() {
  const [isActive, setIsActive] = useState("list")

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-4xl w-auto md:w-full mx-4 md:mx-auto border-x border-border/40">
        <div className="pt-8 sm:pt-12 px-4 sm:px-8">
          <p className="text-gray-400 pb-2 text-sm sm:text-base">UI Components for developers</p>
        </div>
        <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
        <div className="px-4 sm:px-8 py-4">
          <h1 className="text-xl sm:text-2xl font-semibold">Crafted with ❤️ for the community</h1>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
          <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
        </div>

        <div className="px-4 sm:px-8 py-4">
          <section className="flex justify-between ">
            <h1 className="pb-2">Few for now, more in future</h1>
            {/* <div className="flex gap-2">
                <Grid3X3 />
                <Eye />
            </div> 
            //future configuration
            */}
          </section>
          <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
        </div>
      </main>
    </div>
  )
}
