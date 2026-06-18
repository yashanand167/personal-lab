"use client"

import {motion, useMotionValue, useTransform} from 'motion/react';
import {useRef, useState} from 'react';

export default function LiquidTabs() {
    const [tab, setTab] = useState('tab 1');

    const TABS = ['tab 1', 'tab 2'];

    return (
        <div
            className="p-10 rounded-2xl shadow-lg shadow-[#DDCAFF] dark:shadow-[#735EDF]/15"
            style={{
                border: "1px solid transparent",
                background: "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(to bottom, #FB5959, #735EDF) border-box",
            }}
        >
            <div className="flex bg-muted/40 p-1.5 rounded-xl border border-border/20 w-fit gap-1 mb-8">
                {TABS.map((t) => {
                    const isActive = tab === t;
                    return (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`relative px-4 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer select-none outline-none ${
                                isActive ? "text-white" : "text-muted-foreground hover:text-foreground"
                            }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-liquid-tab"
                                    className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-700 rounded-lg shadow-sm -z-10"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="capitalize">{t}</span>
                        </button>
                    );
                })}
            </div>

            <div className="mt-4 p-4 rounded-xl border border-border/40 bg-muted/5 min-h-[100px]">
                {tab === 'tab 1' && <div className="text-sm text-foreground">Tab 1 Content - Designing fluid layouts & interactions.</div>}
                {tab === 'tab 2' && <div className="text-sm text-foreground">Tab 2 Content - Crafting modular UI code components.</div>}
            </div>
        </div>
    )
}