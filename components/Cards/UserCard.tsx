"use client"

import { motion } from "motion/react"
import { Suspense, useState } from "react"
import Image from "next/image"
import { AlarmCheck, Circle, Loader2 } from "lucide-react"

export interface User {
    firstName: string,
    lastName: string,
    profilePic: string


    //work related
    profession: string,
    availability: "open for work" | "working currently" | "break mode"
    personalQuote?: string
    email?: string
    portfolioLink?: string
}


const colorPicker = {
    "open for work": "#b2ff46",
    "working currently": "#FF7A00",
    "break mode": "#FF4646"
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

export default function UserCard({ user }: { user: User }) {
    const bgColor = colorPicker[user.availability]

    const [mailCopied, setIsMailCopied] = useState(false)
    const [loading, setIsLoading] = useState(false);

    const handleMailClick = async () => {
        if (user.email && emailRegex.test(user.email)) {
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));

            navigator.clipboard.writeText(user.email)

            setIsLoading(false);
            setIsMailCopied(true);
            // await new Promise((resolve) => setTimeout(resolve, 2000));
            // setIsMailCopied(false);
        }
    }

    const handleHireClick = () => {
        if (user.portfolioLink && urlRegex.test(user.portfolioLink)) {
            let targetUrl = user.portfolioLink;
            if (!/^https?:\/\//i.test(targetUrl)) {
                targetUrl = "https://" + targetUrl;
            }
            window.open(targetUrl, "_blank", "noopener,noreferrer");
        }
    }

    return (
        <div
            className="w-full max-w-[350px] rounded-3xl overflow-hidden relative"
        >
            <div className="bg-gradient-to-tr from-black to-zinc-800 p-5 rounded-t-3xl rounded-b-3xl relative z-10 border border-[#242424]">
                <div className="flex items-center justify-between text-stone-400 text-xs">
                    <p className="font-medium">{user.profession}</p>
                    <div className="flex items-center gap-1.5">
                        <AlarmCheck className="w-3.5 h-3.5" />
                        <p>7:15 PM</p>
                    </div>
                </div>

                <div className="mt-4 text-white flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                        <Image
                            src={user.profilePic}
                            alt={`${user.firstName} ${user.lastName}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-lg font-bold tracking-tight">{`${user.firstName} ${user.lastName}`}</h1>
                        <div className="flex items-center gap-2 text-stone-300 text-xs">
                            <Circle
                                className="w-2 h-2 fill-current"
                                style={{ color: bgColor }}
                            />
                            <p className="capitalize">{user.availability}</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 items-center mt-6 w-full">
                    <button
                        onClick={handleHireClick}
                        style={{
                            background: "linear-gradient(to bottom, #393939, #1D1D1D) padding-box, linear-gradient(to bottom, #8A8A8A, #222222) border-box",
                            border: "1px solid transparent",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)"
                        }}
                        className="flex-1 h-10 flex items-center justify-center rounded-lg text-white font-semibold text-xs hover:opacity-90 transition-opacity cursor-pointer"
                    >
                        Hire Me
                    </button>

                    {user.email && emailRegex.test(user.email) && (
                        <button
                            onClick={handleMailClick}
                            disabled={loading}
                            style={{
                                background: "linear-gradient(to bottom, #1D1D1D, #1C1C1C) padding-box, linear-gradient(to bottom, #686868, #1A1919) border-box",
                                border: "1px solid transparent",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)"
                            }}
                            className="flex-1 h-10 flex items-center justify-center rounded-lg text-white text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer relative overflow-hidden"
                        >
                            <span>{mailCopied ? "Email Copied" : "Copy Email"}</span>

                            {loading && (
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center z-20">
                                    <Loader2 className="w-4 h-4 animate-spin text-stone-300" />
                                </div>
                            )}
                        </button>
                    )}

                </div>
            </div>

            {/* The status background / personal quote section at the bottom */}
            {user.personalQuote ? (
                <div
                    style={{ backgroundColor: bgColor }}
                    className="px-5 py-4 text-stone-950 font-medium text-xs text-center z-0 -mt-4 pt-7 rounded-b-3xl"
                >
                    <span>"{user.personalQuote}"</span>
                </div>
            ) : (
                <div
                    style={{ backgroundColor: bgColor }}
                    className="h-8 z-0 -mt-4 rounded-b-3xl"
                />
            )}
        </div>
    )
}