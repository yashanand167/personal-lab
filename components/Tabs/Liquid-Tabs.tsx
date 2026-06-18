"use client"

import {motion, useMotionValue, useTransform} from 'motion/react';
import {useRef, useState} from 'react';

export default function LiquidTabs() {
    const [tab, setTab] = useState('tab 1');

    const TABS = ['tab 1', 'tab 2'];

    const tabsRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="p-10 rounded-2xl"
            style={{
                border: "1px solid transparent",
                background: "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(to bottom, #FB5959, #735EDF) border-box",
            }}
        >
            <motion.div className='flex gap-5'>
                <div onClick={() => setTab('tab 1')}>
                    <h1>Tab 1</h1>
                </div>

                <div onClick={() => setTab('tab 2')}>
                    Tab 2
                </div>
            </motion.div>

            {tab === 'tab 1' && <div>Tab 1 Content</div>}
            {tab === 'tab 2' && <div>Tab 2 Content</div>}
        </div>
    )
}