'use client'

import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <div 
      ref={ref}
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 scroll-animate-fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-2 sm:p-3 gap-8 sm:gap-10 lg:gap-14 mb-8">
            <div className={`flex w-full rounded-3xl order-2 lg:order-1 scroll-animate-slide-left delay-100 ${isVisible ? 'visible' : ''}`}>
                <Image 
                    src="/training-2.jpeg"
                    alt=""
                    height={50}
                    width={300}
                    className="w-full h-64 sm:h-80 lg:h-auto object-cover rounded-3xl"
                />
            </div>
            <div className={`flex flex-col p-3 sm:p-4 lg:p-6 py-6 sm:py-8 lg:py-10 space-y-4 order-1 lg:order-2 scroll-animate-slide-right delay-200 ${isVisible ? 'visible' : ''}`}>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 leading-relaxed">Why EMPIRE is the perfect sports agency
                </h1>
                <p className="text-sm sm:text-base lg:text-md font-light text-gray-400 mb-4 text-justify">We are passionate about the game of football & dedicated to providing an unparalleled experience.</p>
                <div className="items-start flex flex-col space-y-4 sm:space-y-5">
                    <div className="flex min-w-30 px-2 bg-gray-100 rounded-full items-center p-1 gap-4 sm:gap-6 lg:gap-8 justify-start sm:justify-center">
                        <div className="bg-white flex w-8 h-8 rounded-full items-center text-black font-light justify-center flex-shrink-0">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <p className="text-xs sm:text-sm text-black font-light mr-2">Expert guidance</p>
                    </div>

                    <div className="flex min-w-30 px-2 bg-gray-100 rounded-full items-center p-1 gap-4 sm:gap-6 lg:gap-8 justify-start sm:justify-center">
                        <div className="bg-white flex w-8 h-8 rounded-full items-center text-black font-light justify-center flex-shrink-0">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <p className="text-xs sm:text-sm text-black font-light mr-2">Premium quality products</p>
                    </div>

                    <div className="flex min-w-30 px-2 bg-gray-100 rounded-full items-center p-1 gap-4 sm:gap-6 lg:gap-8 justify-start sm:justify-center">
                        <div className="bg-white flex w-8 h-8 rounded-full items-center text-black font-light justify-center flex-shrink-0">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <p className="text-xs sm:text-sm text-black font-light mr-2">Community and inspiration</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs