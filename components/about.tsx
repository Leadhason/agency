import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <div className="bg-white p-2 sm:p-4 lg:p-5 w-full z-20 py-6 sm:py-8 lg:py-10 relative">
        <div className="flex w-full items-center p-2 sm:p-4 lg:p-5 mt-8 sm:mt-12 lg:mt-20">
            <p className="w-full max-w-2xl text-left text-2xl sm:text-4xl lg:text-5xl font-semibold leading-relaxed">A community built on 
            <br className="hidden sm:block"/> the love of football</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full p-2 sm:p-4 lg:p-5">
            <div className="flex flex-col">
                <div className="flex w-full max-w-md rounded-lg mb-4">
                    <Image 
                        src="/training-2.jpeg"
                        alt="training image"
                        height={200}
                        width={300}
                        className="object-cover rounded-lg w-full lg:w-72 h-48 sm:h-56"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-semibold">168+</span>
                    <span className="text-base sm:text-lg font-light text-gray-600">Official Event</span>
                </div>
            </div>
            <div className="flex flex-col">
            <div className="flex rounded-lg w-full mb-2">
                    <Image 
                        src="/training-3.jpeg"
                        alt="training image"
                        height={900}
                        width={600}
                        className="object-cover rounded-lg w-full h-64 sm:h-80 lg:h-full"
                    />
                </div>
                <div className="flex">
                    <p className="text-sm sm:text-base lg:text-md text-gray-500">Where passion meets precision, and every kick tells a story. At Empire, we believe that football is more than just a sport it's a lifestyle a community, & a journey of continuous improvement.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection