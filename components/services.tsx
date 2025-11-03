'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

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
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <div 
      ref={ref}
      className={`py-12 sm:py-16 lg:py-20 p-2 sm:p-4 lg:p-5 scroll-animate-fade-in ${isVisible ? 'visible' : ''}`}>
      <div className={`flex w-full items-center p-2 sm:p-4 lg:p-5 mb-6 sm:mb-8 lg:mb-10 scroll-animate-slide-up delay-100 ${isVisible ? 'visible' : ''}`}>
            <p className="w-full max-w-2xl text-left text-2xl sm:text-4xl lg:text-5xl font-semibold leading-relaxed">Explore Our
            <br /> Services</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {services.map((service, index) => (
          <div key = {service.id} className={`relative w-full h-64 sm:h-80 lg:max-h-[850px] lg:h-auto scroll-animate-slide-up delay-${200 + (index * 100)} ${isVisible ? 'visible' : ''}`}>
            <Image
              src={service.image}
              alt="player taking a shot"
              width={500}
              height={400}
              className="object-cover w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl h-full transition-transform duration-500 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-2xl sm:rounded-3xl lg:rounded-4xl" />

            <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 space-y-2 sm:space-y-3 left-0 p-3 sm:p-4 flex flex-col items-center justify-center w-full">
              <h1 className="text-lg sm:text-2xl lg:text-4xl font-semibold text-white hover:text-yellow-400 text-center">{service.title}</h1>
              <p className="text-sm sm:text-base lg:text-md font-light text-white text-center">{service.subtitle}</p>
              <div className="flex rounded-full items-center font-light justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white bg-white/10">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5"/>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default ServicesSection