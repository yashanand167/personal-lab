"use client"

import React from "react"
import { Sparkles, ArrowUpRight, Code, Layers, MousePointer, Cpu } from "lucide-react"
import SlideButton from "@/components/Buttons/Slide-Button"

import Link from "next/link"

interface ComponentItem {
    name: string
    description: string
    category: string
    status: "active" | "experimental" | "coming soon"
    updatedAt: string
}

export default function ComponentList() {
    const components: ComponentItem[] = [
        {
            name: "Button Slider",
            description: "A premium sliding motion button powered by Motion.",
            category: "Interactions",
            status: "active",
            updatedAt: "Jun 14, 2026",
        },
        {
            name: "User Card",
            description: "Premium Load Effect with smooth border animations.",
            category: "Visuals",
            status: "active",
            updatedAt: "Jun 14, 2026",

        },
        {
            name: "Tab Indicator Slider",
            description: "Smooth sliding tab background switcher.",
            category: "Navigation",
            status: "active",
            updatedAt: "Jun 19, 2026",
        },
        {
            name: "Parallax Button",
            description: "Interactive button attracting to mouse coordinates.",
            category: "Interactions",
            status: "experimental",
            updatedAt: "Jun 14, 2026",

        },
        {
            name: "UI with Loader Effect",
            description: "Sleek loaders effects for UI.",
            category: "Visuals",
            status: "active",
            updatedAt: "Jun 19, 2026",
        },
        {
            name: "Asset Bundler",
            description: "Pre-compressing assets utility helper pipeline.",
            category: "Pipelines",
            status: "coming soon",
            updatedAt: "Jun 14, 2026",

        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 bg-border/40 gap-[1px]">
            {components.map((item, i) => (
                <Link
                    key={i}
                    href="/docs"
                    className="bg-background p-6 flex flex-col justify-between group hover:bg-muted/5 transition-colors duration-300 cursor-pointer"
                >
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">{item.category}</span>
                            <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium border ${item.status === "active"
                                ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                                : item.status === "experimental"
                                    ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                                    : "bg-muted text-muted-foreground border-border"
                                }`}>
                                {item.status}
                            </span>
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-base font-semibold tracking-tight text-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                                {item.name}
                                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                {item.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-end items-center text-[10px] text-muted-foreground mt-2">
                        <span>{item.updatedAt}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}