"use client"

import MagneticButton from "@/components/Buttons/Magnetic-Button"
import SlideButton from "@/components/Buttons/Slide-Button"
import UserCard, { User } from "@/components/Cards/UserCard"
import Header from "@/components/Header"

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

export default function Showcase() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-7xl w-auto md:w-full mx-4 md:mx-auto border-x border-border/40">
        <SlideButton />
        <div className="mt-2">
          <MagneticButton />
        </div>
        <div className="mt-2">
          <UserCard user={user1Data}/>
        </div>
        <div className="mt-2">
          <UserCard user={user2Data}/>
        </div>
      </main>

    </div>
  )
}

const ComponentsShowcase = () => {

}