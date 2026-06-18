"use client"

import MagneticButton from "@/components/Buttons/Magnetic-Button"
import SlideButton from "@/components/Buttons/Slide-Button"
import UserCard, { User } from "@/components/Cards/UserCard"
import Header from "@/components/Header"
import LiquidTabs from "@/components/Tabs/Liquid-Tabs"
import { ChefHat } from "lucide-react"

const user1Data: User = {
  firstName: "Yash",
  lastName: "Anand",
  profilePic: "/Profile.jpg",
  profession: "Design Engineer",
  availability: "open for work",
  personalQuote: "Everything is Design!",
  email: "yash.anand167@gmail.com",
  portfolioLink: "https://www.yashanand.com"
}

const user2Data: User = {
  firstName: "David",
  lastName: "Hardy",
  profilePic: "/Profile.jpg",
  profession: "UI/UX Designer",
  availability: "break mode",
  personalQuote: "Making the digital world a more beautiful place!",
  email: "yash.anand167@gmail.com",
  portfolioLink: ""
}

const user3Data: User = {
  firstName: "Alex",
  lastName: "Johnson",
  profilePic: "/Profile.jpg",
  profession: "Software Engineer",
  availability: "working currently",
  personalQuote: "Building the future, one line of code at a time!",
  email: "yash.anand167@gmail.com",
  portfolioLink: ""
}

export default function Showcase() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 max-w-7xl w-auto md:w-full mx-4 md:mx-auto border-x border-border/40 flex flex-col">
        {/* Page Header */}
        <div className="w-full px-6 md:px-8 py-10 space-y-1">
          <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Component Showcase</p>
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            Interactive components crafted with precision!
          </h1>
        </div>

        {/* Bento Column Layout Grid */}
        <div className="w-full border-t border-b border-border/40 bg-border/40 flex flex-col md:flex-row gap-[1px]">
          {/* Column 1: Controls & Interactive Buttons (1/3 Width) */}
          <div className="md:w-1/3 flex flex-col gap-[1px] bg-border/40">
            <div className="bg-background p-10 flex items-center justify-center min-h-[140px] flex-1">
              <SlideButton />
            </div>
            <div className="bg-background p-10 flex items-center justify-center min-h-[140px] flex-1">
              <MagneticButton />
            </div>
            <div className="bg-background p-10 flex items-center justify-center min-h-[220px] flex-1">
              <LiquidTabs />
            </div>
          </div>

          {/* Column 2: User Cards Grouped Together (2/3 Width) */}
          <div className="md:w-2/3 flex flex-col gap-[1px] bg-border/40">
            <div className="bg-background p-10 flex flex-col lg:flex-row lg:flex-wrap gap-8 items-center justify-center min-h-[450px] flex-1">
              <UserCard user={user1Data} />
              <UserCard user={user2Data} />
              <UserCard user={user3Data} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-12 gap-1.5 cursor-pointer group select-none ">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-medium text-foreground/85 group-hover:text-foreground transition-colors duration-200">
              More Components Being cooked!
            </h1>
            <div className="transition-all duration-300 ease-out group-hover:scale-120 group-hover:-rotate-12">
              <ChefHat className="text-foreground w-8 h-8 sm:w-10 sm:h-10" />
            </div>
          </div>
          <div className="flex items-center gap-3 w-full max-w-xs sm:max-w-sm px-4">
            <div className="h-[1px] flex-1 bg-border/60 group-hover:bg-border/80 transition-colors duration-200" />
            <p className="text-xs sm:text-sm text-muted-foreground/70 group-hover:text-muted-foreground/90 transition-colors duration-200 font-medium tracking-wide whitespace-nowrap">
              Stay Tuned
            </p>
            <div className="h-[1px] flex-1 bg-border/60 group-hover:bg-border/80 transition-colors duration-200" />
          </div>
        </div>
      </main>

    </div>
  )
}