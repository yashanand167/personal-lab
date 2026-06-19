"use client"

import MagneticButton from "@/components/Buttons/Magnetic-Button"
import SlideButton from "@/components/Buttons/Slide-Button"
import UserCard, { User } from "@/components/Cards/UserCard"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import LiquidTabs from "@/components/Tabs/Liquid-Tabs"
import { ChefHat, LayoutGrid, Play } from "lucide-react"
import Link from "next/link"

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
        <div className="w-full px-6 md:px-8 py-10 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Component Showcase</p>
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
              Interactive components crafted with precision!
            </h1>
          </div>
          <div className="flex items-center gap-1 bg-muted/40 p-0.5 rounded-lg border border-border/20 self-start sm:self-auto shrink-0 mb-1">
            <Link href="/" className="block">
              <button
                className="p-1.5 rounded-md transition-all cursor-pointer text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                aria-label="List view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </Link>
            <button
              className="p-1.5 rounded-md transition-all cursor-pointer bg-black/10 dark:bg-white/10 text-foreground dark:text-white"
              aria-label="Showcase"
            >
              <Play className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="w-full border-t border-b border-border/40 flex flex-col bg-background">
          {/* Row 1: Interactive Components */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 border-b border-border/40 bg-background">
            {/* Column 1: Slide & Magnetic Buttons */}
            <div className="flex flex-col border-b border-border/40 md:border-b-0 md:border-r border-border/40">
              <div className="bg-background p-10 flex items-center justify-center min-h-[140px] flex-1 border-b border-border/40">
                <SlideButton />
              </div>
              <div className="bg-background p-10 flex items-center justify-center min-h-[140px] flex-1">
                <MagneticButton />
              </div>
            </div>

            {/* Column 2: Liquid Tabs */}
            <div className="bg-background p-6 sm:p-10 flex items-center justify-center min-h-[280px] border-b border-border/40 md:border-b-0 md:border-r border-border/40">
              <LiquidTabs />
            </div>

            {/* Column 3: Future Component Placeholder */}
            <div className="bg-background p-6 sm:p-10 flex items-center justify-center min-h-[280px]">
              <div className="text-muted-foreground/40 text-sm font-medium tracking-wide">
                Coming Soon
              </div>
            </div>
          </div>

          {/* Row 2: User Cards (Full Width layout with 3 columns on larger screens) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 bg-background">
            <div className="bg-background p-10 flex items-center justify-center">
              <UserCard user={user1Data} />
            </div>
            <div className="bg-background p-10 flex items-center justify-center">
              <UserCard user={user2Data} />
            </div>
            <div className="bg-background p-10 flex items-center justify-center">
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
        <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
      </main>
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  )
}