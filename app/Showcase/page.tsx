"use client"

import MagneticButton from "@/components/Buttons/Magnetic-Button"
import SlideButton from "@/components/Buttons/Slide-Button"
import Header from "@/components/Header"


export default function Showcase() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-7xl w-auto md:w-full mx-4 md:mx-auto border-x border-border/40">
        <SlideButton />
        <div className="mt-2">
          <MagneticButton />
        </div>
      </main>

    </div>
  )
}

const ComponentsShowcase = () => {

}