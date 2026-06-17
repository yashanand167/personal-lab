"use client"

import MagneticButton from "@/components/Buttons/Magnetic-Button"
import SlideButton from "@/components/Buttons/Slide-Button"
import UserCard, { User } from "@/components/Cards/UserCard"
import Header from "@/components/Header"
import LiquidTabs from "@/components/Tabs/Liquid-Tabs"

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
      
      {/* Page Header */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 py-10 space-y-1">
        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Component Showcase</p>
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
          Pixel-perfect, uniquely crafted.
        </h1>
      </div>

      {/* Bento Column Layout Grid */}
      <main className="max-w-7xl w-full mx-auto border-t border-b border-border bg-border flex flex-col md:flex-row gap-[1px]">
        {/* Column 1: Controls & Interactive Buttons (1/3 Width) */}
        <div className="md:w-1/3 flex flex-col gap-[1px] bg-border">
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
        <div className="md:w-2/3 flex flex-col gap-[1px] bg-border">
          <div className="bg-background p-10 flex flex-col lg:flex-row lg:flex-wrap gap-8 items-center justify-center min-h-[450px] flex-1">
            <UserCard user={user1Data} />
            <UserCard user={user2Data} />
            <UserCard user={user3Data} />
          </div>
        </div>
      </main>
    </div>
  )
}