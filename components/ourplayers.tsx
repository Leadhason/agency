import React from 'react'
import Image from 'next/image'
import { ArrowRight } from "lucide-react" 
import Link from 'next/link'

const players = [
    {
      id: 1,
      title: "Abdullah Zachari",
      subtitle: "Guidance. Negotiation. Success.",
      image: "/player-6.jpeg",
      href: "/player-representation"
    },
    {
      id: 2,
      title: "Kweku Sam",
      subtitle: "Securing the best for our clients.",
      image: "/player-7.jpeg",
    },
    {
        id: 3,
        title: "King Cobra",
        subtitle: "Guidance. Negotiation. Success.",
        image: "/player-8.jpeg",
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
    <div className="bg-[#6A6E39] my-8 sm:my-12 lg:my-20 p-2 sm:p-4 lg:p-5 w-full flex items-center text-center">
        <div className="w-full p-2 sm:p-3 lg:p-4 m-1 sm:m-2 mt-32 sm:mt-48 lg:mt-[400px] mb-8 sm:mb-16 lg:mb-30">
          <div className="relative w-full mb-4 sm:mb-5 flex flex-col sm:flex-row justify-between p-2 sm:p-3 lg:p-4 gap-4 sm:gap-0">
            <div className="sm:absolute p-2 sm:h-full sm:bottom-6 left-0 flex items-end justify-center sm:justify-start order-1 sm:order-1">
              <div className="flex items-center justify-center text-gray-300 text-xs sm:text-sm font-light max-w-md border border-white rounded-full py-2 px-4 sm:px-5">Our Players</div>
            </div>
            <div className="p-2 sm:h-full flex w-full sm:max-w-lg items-center text-white justify-center sm:justify-start sm:ml-auto order-2 sm:order-2">
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold leading-relaxed text-center sm:text-right">Why EMPIRE is the perfect sports agency
              </h1>
            </div>
          </div>
            <div className="gap-4 sm:gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
                {players.map((player) => (
                    <div key={player.id}>
                      <Link href="/" className="flex w-full flex-col p-1 sm:p-2 space-y-3 sm:space-y-4">
                        <Image 
                            src={player.image}
                            alt=""
                            height={600}
                            width={700}
                            className="rounded-xl object-cover w-full h-48 sm:h-56 lg:h-auto hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex items-start w-full text-white justify-between">
                            <p className="text-sm sm:text-base lg:text-lg font-light">{player.title}</p>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        </div>
                      </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OurPlayers