"use client"

import { useState } from "react"
import { motion } from "motion/react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MagneticButton from "@/components/Buttons/Magnetic-Button"
import SlideButton from "@/components/Buttons/Slide-Button"
import UserCard, { User } from "@/components/Cards/UserCard"
import LiquidTabs from "@/components/Tabs/Liquid-Tabs"
import { LoaderEffectShowcase } from "@/components/Effects/LoaderEffect"
import { ChefHat, BookOpen, MousePointer, Sliders, Loader2, CreditCard } from "lucide-react"

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

export default function Docs() {
  const [activeTab, setActiveTab] = useState("introduction")

  return (
    <div className="flex flex-col h-screen overflow-hidden relative">
      <Header />

      <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">

      {/* Left Sidebar - completely left on desktop (fixed position) */}
      <aside className="hidden xl:flex flex-col gap-1.5 w-40 2xl:w-48 shrink-0 fixed left-8 2xl:left-16 top-64 z-10 overflow-y-hidden select-none">
        <div className="flex flex-col gap-1.5">
          <p className="text-[10px] font-bold tracking-wider text-muted-foreground/60 uppercase mb-3 px-3">
            Documentation
          </p>

          {/* Introduction link */}
          <button
            onClick={() => setActiveTab("introduction")}
            className={`relative flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-colors select-none text-left cursor-pointer w-full font-medium ${activeTab === "introduction"
                ? "text-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {activeTab === "introduction" && (
              <motion.div
                layoutId="active-docs-tab-desktop"
                className="absolute inset-0 bg-muted/60 border border-border/40 rounded-lg -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <BookOpen className="w-4 h-4" />
            <span>Introduction</span>
          </button>

          <div className="h-[1px] bg-border/40 my-2" />

          <p className="text-[10px] font-bold tracking-wider text-muted-foreground/60 uppercase mb-2 px-3">
            Components
          </p>

          {/* Component links */}
          {[
            { id: "buttons", label: "Buttons", icon: MousePointer },
            { id: "slider", label: "Slider", icon: Sliders },
            { id: "loader", label: "Loader", icon: Loader2 },
            { id: "cards", label: "Cards", icon: CreditCard },
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-colors select-none text-left cursor-pointer w-full font-medium ${isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-docs-tab-desktop"
                    className="absolute inset-0 bg-muted/60 border border-border/40 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </aside>

      {/* Centered Layout Wrapper with continuous vertical lines */}
      <div className="flex-1 max-w-4xl w-auto md:w-full mx-4 md:mx-auto border-x border-border/40 bg-background flex flex-col relative pb-12">

        {/* Sticky Header block (Title + Double Lines) on desktop */}
        <div className="xl:sticky xl:top-0 bg-background z-20">
          {/* Top Header Section */}
          <div className="pt-6 sm:pt-10 px-4 sm:px-10 flex flex-col">
            <p className="text-muted-foreground text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
              {activeTab === "introduction" ? "Docs" : "Components"}
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground tracking-tight capitalize mt-1">
              {activeTab}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              {activeTab === "introduction" && "Welcome to the documentation for Personal Lab! Select any component from the sidebar menu to view its live preview, description, and details."}
              {activeTab === "buttons" && "Interactive sliding motion and magnetic cursor-attracting button effects."}
              {activeTab === "slider" && "Smooth tab switcher with gooey SVG filter liquid animations."}
              {activeTab === "loader" && "Sleek loading screen overlay with dynamic paths and smooth line drawing transitions."}
              {activeTab === "cards" && "User profile cards with premium loaders and interactive availability states."}
            </p>
          </div>

          {/* Viewport-wide Double Divider Lines */}
          <div className="py-4 sm:py-6 flex flex-col gap-4 sm:gap-6 relative">
            <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
            <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border/40" />
          </div>
        </div>

        {/* Mobile/Tablet navigation (visible below xl) */}
        <div className="flex xl:hidden sticky top-0 bg-background border-b border-border/40 p-3 overflow-x-auto gap-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] z-20">
          {/* Introduction link */}
          <button
            onClick={() => setActiveTab("introduction")}
            className={`relative flex items-center gap-2 px-3.5 py-1.5 text-xs rounded-full transition-colors select-none shrink-0 cursor-pointer font-medium ${activeTab === "introduction"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {activeTab === "introduction" && (
              <motion.div
                layoutId="active-docs-tab-mobile"
                className="absolute inset-0 bg-muted/65 border border-border/45 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <BookOpen className="w-3.5 h-3.5" />
            <span>Introduction</span>
          </button>

          {[
            { id: "buttons", label: "Buttons", icon: MousePointer },
            { id: "slider", label: "Slider", icon: Sliders },
            { id: "loader", label: "Loader", icon: Loader2 },
            { id: "cards", label: "Cards", icon: CreditCard },
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-3.5 py-1.5 text-xs rounded-full transition-colors select-none shrink-0 cursor-pointer font-medium ${isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-docs-tab-mobile"
                    className="absolute inset-0 bg-muted/65 border border-border/45 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Right Main Content */}
        <main className="flex-1 p-6 sm:p-10 bg-background flex flex-col min-h-[500px]">
          {activeTab === "introduction" && (
            <div className="space-y-8">
              {/* Introduction Title and Description */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground tracking-tight">Introduction</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Personal Lab is a curated collection of beautiful, interactive UI micro-interactions, layout components, and custom motion designs. Built using modern technologies like Tailwind CSS, Framer Motion, and Lucide React, these components are designed to feel premium, responsive, and alive.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Whether you are looking to build a sleek navigation system, an animated button, or a custom loading indicator, this lab acts as a library of experiments and references to copy-paste or learn from.
                </p>
              </div>

              {/* Source Code Note */}
              <div className="p-4 border border-dotted border-border rounded-xl bg-muted/5 flex gap-3 items-start">
                <ChefHat className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs text-foreground font-semibold">More is on the way!</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    More components are being designed and coded actively. Detailed documentation and **source code files for each component will be provided shortly**.
                  </p>
                </div>
              </div>

              {/* Prerequisites Table */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Prerequisites</h3>
                <p className="text-xs text-muted-foreground">
                  To use these components in your own projects, ensure you have the following packages installed:
                </p>
                <div className="overflow-hidden border border-dotted border-border rounded-lg bg-card/5">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-dotted border-border bg-muted/20">
                        <th className="p-3 font-semibold text-foreground">Package</th>
                        <th className="p-3 font-semibold text-foreground">Version / Status</th>
                        <th className="p-3 font-semibold text-foreground">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-dotted divide-border">
                      <tr>
                        <td className="p-3 font-medium text-foreground">Tailwind CSS</td>
                        <td className="p-3 text-muted-foreground">v4.0+</td>
                        <td className="p-3 text-muted-foreground">Core utility-first styling and theme values.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-foreground">Framer Motion</td>
                        <td className="p-3 text-muted-foreground">v11.0+ (motion/react)</td>
                        <td className="p-3 text-muted-foreground">Fluid, spring-based UI animations and gesture tracking.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-foreground">Lucide React</td>
                        <td className="p-3 text-muted-foreground">Latest</td>
                        <td className="p-3 text-muted-foreground">Crisp, SVG-based icons for indicators and UI elements.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "buttons" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border border-border/40 rounded-xl overflow-hidden bg-background">
              <div className="bg-background/40 p-6 sm:p-12 flex flex-col items-center justify-center min-h-[200px] border-b sm:border-b-0 sm:border-r border-border/40 hover:bg-muted/5 transition-colors duration-300">
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60 mb-5 select-none">
                  Slide Motion Button
                </span>
                <SlideButton />
              </div>
              <div className="bg-background/40 p-6 sm:p-12 flex flex-col items-center justify-center min-h-[200px] hover:bg-muted/5 transition-colors duration-300">
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60 mb-5 select-none">
                  Magnetic Cursor Button
                </span>
                <MagneticButton />
              </div>
            </div>
          )}

          {activeTab === "slider" && (
            <div className="border border-border/40 rounded-xl overflow-hidden bg-background p-6 sm:p-12 flex items-center justify-center min-h-[240px] hover:bg-muted/5 transition-colors duration-300">
              <LiquidTabs />
            </div>
          )}

          {activeTab === "loader" && (
            <div className="border border-border/40 rounded-xl overflow-hidden bg-background p-6 sm:p-12 flex items-center justify-center min-h-[240px] hover:bg-muted/5 transition-colors duration-300">
              <LoaderEffectShowcase />
            </div>
          )}

          {activeTab === "cards" && (
            <div className="grid grid-cols-1 gap-6 border border-border/40 rounded-xl p-6 bg-background">
              <div className="flex items-center justify-center bg-background/30 rounded-lg py-6 hover:bg-muted/5 transition-colors duration-300">
                <UserCard user={user1Data} />
              </div>
              <div className="flex items-center justify-center bg-background/30 rounded-lg py-6 hover:bg-muted/5 transition-colors duration-300">
                <UserCard user={user2Data} />
              </div>
              <div className="flex items-center justify-center bg-background/30 rounded-lg py-6 hover:bg-muted/5 transition-colors duration-300">
                <UserCard user={user3Data} />
              </div>
            </div>
          )}
        </main>
      </div>

      <Footer />
      </div>
    </div>
  )
}