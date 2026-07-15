"use client"

import { Moon, Play, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useSound } from "@/lib/sound-engine";
import { select001Sound } from "@/lib/select-001";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "motion/react"
import Image from "next/image";

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme()
  const [playSelect] = useSound(select001Sound, { volume: 0.5 });
  const pathname = usePathname()

  const isComponentsActive = pathname === "/" || pathname === "/showcase"
  const isDocsActive = pathname === "/docs"
  const isInteractionsActive = pathname === "/interactions"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
      <div className={`mx-4 md:mx-auto flex h-14 w-auto md:w-full items-center justify-between px-3 sm:px-8 border-x border-border/40 ${pathname === "/showcase" ? "max-w-7xl" : "max-w-4xl"
        }`}>
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Logo.png"
              alt="Personal Lab"
              width={36}
              height={36}
              loading="lazy"
              className="h-7 w-7 sm:h-9 sm:w-9 dark:hidden object-contain"
            />
            <Image
              src="/LightLogo.png"
              alt="Personal Lab"
              width={36}
              height={36}
              loading="lazy"
              className="h-7 w-7 sm:h-9 sm:w-9 hidden dark:block object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-2.5 sm:space-x-4 relative h-full">
          <Link
            href="/"
            className={`relative h-full flex items-center px-1 text-xs sm:text-sm font-medium transition-colors duration-200 select-none ${isComponentsActive
              ? "text-foreground font-semibold"
              : "text-muted-foreground hover:text-foreground"
              }`}
          >
            Components
            {isComponentsActive && (
              <motion.span
                layoutId="active-nav-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
          <Link
            href="/docs"
            className={`relative h-full flex items-center px-1 text-xs sm:text-sm font-medium transition-colors duration-200 select-none ${isDocsActive
              ? "text-foreground font-semibold"
              : "text-muted-foreground hover:text-foreground"
              }`}
          >
            Docs
            {isDocsActive && (
              <motion.span
                layoutId="active-nav-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
          <Link
            href="/interactions"
            className={`relative h-full flex items-center px-1 text-xs sm:text-sm font-medium transition-colors duration-200 select-none ${isInteractionsActive
              ? "text-foreground font-semibold"
              : "text-muted-foreground hover:text-foreground"
              }`}
          >
            Interactions
            {isInteractionsActive && (
              <motion.span
                layoutId="active-nav-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        </div>

        <div className="flex items-center space-x-1.5 sm:space-x-3">
          <Button
            variant="outline"
            size="icon"
            asChild
            className="dark:bg-white dark:hover:bg-white/90 dark:border-transparent"
          >
            <Link href="https://github.com/yashanand167/personal-lab" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/Github-Icon.png" 
                alt="Github" 
                width={18} 
                height={18} 
                className="object-contain" 
              />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              playSelect();
              setTheme(resolvedTheme === "dark" ? "light" : "dark");
            }}
            aria-label="Toggle theme"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}