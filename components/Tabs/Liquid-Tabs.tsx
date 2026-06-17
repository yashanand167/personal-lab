"use client"

import {motion, useMotionValue, useTransform} from 'motion/react';
import {useRef, useState} from 'react';

export default function LiquidTabs() {
    const [tab, setTab] = useState('tab 1');

    const TABS = ['tab 1', 'tab 2'];

    const tabsRef = useRef<HTMLDivElement>(null);

    return (
        <div className=''>
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