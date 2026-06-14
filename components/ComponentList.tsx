"use client"

import React from "react"
import { Sparkles, ArrowUpRight, Code, Layers, MousePointer, Cpu } from "lucide-react"
import SlideButton from "@/components/Buttons/Slide-Button"

interface ComponentItem {
    name: string
    description: string
    category: string
    status: "active" | "experimental" | "coming soon"
    updatedAt: string
    preview: React.ReactNode
}

export default function ComponentList() {
    const components: ComponentItem[] = [
        {
            name: "Button Slider",
            description: "A premium sliding motion button powered by Motion.",
            category: "Interactions",
            status: "active",
            updatedAt: "Jun 14, 2026",
            preview: <SlideButton />,
        },
        {
            name: "Glassmorphism Card",
            description: "Premium glass effect card with smooth border animations.",
            category: "Visuals",
            status: "active",
            updatedAt: "Jun 14, 2026",
            preview: (
                <div className="relative group/card cursor-pointer w-full max-w-[150px] rounded-xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-md transition-all hover:bg-white/10">
                    <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/25 via-transparent to-muted-foreground/15 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <div className="space-y-1 relative z-10">
                        <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
                        <h4 className="text-xs font-semibold">Glassmorphic</h4>
                        <p className="text-[10px] text-muted-foreground">Hover to inspect highlights</p>
                    </div>
                </div>
            ),
        },
        {
            name: "Tab Indicator Slider",
            description: "Smooth sliding tab background switcher.",
            category: "Navigation",
            status: "active",
            updatedAt: "Jun 14, 2026",
            preview: (
                <div className="flex space-x-1 rounded-lg bg-muted/50 p-1 text-[10px]">
                    <button className="rounded-md bg-background px-3 py-1 font-medium shadow-sm border border-border/10">Home</button>
                    <button className="rounded-md px-3 py-1 text-muted-foreground hover:text-foreground transition-colors">Lab</button>
                </div>
            ),
        },
        {
            name: "Magnetic Button",
            description: "Interactive button attracting to mouse coordinates.",
            category: "Interactions",
            status: "experimental",
            updatedAt: "Jun 14, 2026",
            preview: (
                <div className="flex items-center gap-2 text-xs border border-border/60 rounded-full px-4 py-2 hover:bg-muted/50 cursor-pointer relative group/mag transition-colors">
                    <MousePointer className="h-3 w-3 text-muted-foreground group-hover/mag:translate-x-1 group-hover/mag:-translate-y-1 transition-transform" />
                    <span>Magnetic</span>
                </div>
            ),
        },
        {
            name: "Performance Monitor",
            description: "Sleek frame analysis graphs for local testing.",
            category: "Tooling",
            status: "coming soon",
            updatedAt: "Jun 14, 2026",
            preview: (
                <div className="flex flex-col gap-1.5 w-full max-w-[130px] p-2 bg-muted/20 border border-border/30 rounded-lg">
                    <div className="flex justify-between text-[9px] text-muted-foreground font-mono">
                        <span>FPS</span>
                        <span className="text-emerald-500 font-bold">60.0</span>
                    </div>
                    <div className="h-5 w-full bg-muted/40 rounded flex items-end overflow-hidden p-0.5 gap-0.5">
                        <div className="bg-emerald-500/80 w-full h-[80%] rounded-sm" />
                        <div className="bg-emerald-500/80 w-full h-[90%] rounded-sm" />
                        <div className="bg-emerald-500/80 w-full h-[85%] rounded-sm" />
                        <div className="bg-emerald-500/80 w-full h-[95%] rounded-sm" />
                    </div>
                </div>
            ),
        },
        {
            name: "Asset Bundler",
            description: "Pre-compressing assets utility helper pipeline.",
            category: "Pipelines",
            status: "coming soon",
            updatedAt: "Jun 14, 2026",
            preview: (
                <div className="flex items-center gap-2 text-xs bg-muted/40 border border-dashed border-border rounded-lg p-2 px-3">
                    <Cpu className="h-4 w-4 text-muted-foreground animate-pulse" />
                    <span className="font-mono text-[9px]">main.wasm</span>
                </div>
            ),
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 bg-border/40 gap-[1px]">
            {components.map((item, i) => (
                <div
                    key={i}
                    className="bg-background p-6 flex flex-col justify-between group hover:bg-muted/5 transition-colors duration-300"
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

                    <div className="my-6 aspect-[16/10] rounded-lg border border-border/40 bg-muted/10 flex items-center justify-center p-4 relative overflow-hidden group-hover:border-border/60 transition-colors">
                        {item.preview}
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                        <span>{item.updatedAt}</span>
                        <span className="flex items-center gap-1 cursor-pointer font-medium hover:text-foreground transition-colors">
                            <Code className="h-3 w-3" />
                            Code
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}