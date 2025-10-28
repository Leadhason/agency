import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 1,
    title: "Player Representation",
    subtitle: "Guidance. Negotiation. Success.",
    image: "/services-1.jpeg",
    href: "/player-representation"
  },
  {
    id: 2,
    title: "Contract Management",
    subtitle: "Securing the best for our clients.",
    image: "/services-2.jpeg",
  },
  {
    id: 3,
    title: "Career Development",
    subtitle: "Building legacies beyond the field.",
    image: "/services-3.jpeg",
  },
  {
    id: 4,
    title: "Brand Building",
    subtitle: "Visibility. Identity. Influence.",
    image: "/services-4.jpeg",
  },

]

const ServicesSection = () => {
  return (
    <div className="py-20 p-2">
        <div className="grid grid-cols-2 gap-12">
        {services.map((service) => (
          <div key = {service.id} className="relative w-full max-h-[850px]">
            <Image
              src={service.image}
              alt="player taking a shot"
              width={500}
              height={400}
              className="object-cover w-full rounded-4xl h-full transition-transform duration-500 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-b-4xl" />

            <div className="absolute bottom-4 space-y-3 left-0 p-4 flex flex-col items-center justify-center w-full">
              <h1 className="text-4xl font-semibold text-white hover:text-yellow-400 text-center">{service.title}</h1>
              <p className="text-md font-light text-white text-center">{service.subtitle}</p>
              <div className="flex rounded-full items-center font-light justify-center w-14 h-14 text-white bg-white/10">
                <ArrowRight className="w-5 h-5"/>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default ServicesSection