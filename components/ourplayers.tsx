import React from 'react'
import Image from 'next/image'
import { ArrowRight } from "lucide-react" 

const players = [
    {
      id: 1,
      title: "Abdullah Zachari",
      subtitle: "Guidance. Negotiation. Success.",
      image: "/player-1.jpeg",
      href: "/player-representation"
    },
    {
      id: 2,
      title: "Kweku Sam",
      subtitle: "Securing the best for our clients.",
      image: "/player-2.jpeg",
    },
    {
        id: 3,
        title: "King Cobra",
        subtitle: "Guidance. Negotiation. Success.",
        image: "/player-3.jpeg",
        href: "/player-representation"
      },
      {
        id: 2,
        title: "Gyamfi Cudjoe",
        subtitle: "Securing the best for our clients.",
        image: "/player-4.jpeg",
      },
]

const OurPlayers = () => {
  return (
    <div className="bg-[#6A6E39] w-full flex items-center text-center">
        <div className="w-full p-4">
            <div  className="gap-8 mt-20 grid grid-cols-4 w-full">
                {players.map((player) => (
                    <div key={player.id} className="flex flex-col p-2 space-y-4">
                        <Image 
                            src={player.image}
                            alt=""
                            height={200}
                            width={200}
                            className="rounded-xl object-cover w-full"
                        />
                        <div className="flex items-start w-full text-white justify-between">
                            <p className="text-lg font-light">{player.title}</p>
                            <ArrowRight className="w-5 w-5" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OurPlayers