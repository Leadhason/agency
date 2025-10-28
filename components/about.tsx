import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <div className="bg-white p-2 w-full z-10 py-10">
        <div className="flex w-full items-center p-5 mt-20">
            <p className="w-lg text-left text-5xl font-semibold leading-relaxed">A community built on the love of football</p>
        </div>
        <div className="grid grid-cols-2 gap-10 w-full p-5">
            <div className="flex flex-col">
                <div className="flex w-md h-md rounded-lg mb-4">
                    <Image 
                        src="/training-2.jpeg"
                        alt="training image"
                        height={200}
                        width={300}
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="text-7xl font-semibold">168+</span>
                    <span className="text-lg font-light text-gray-600">Official Event</span>
                </div>
            </div>
            <div className="flex flex-col">
            <div className="flex rounded-lg h-5xl w-xl mb-2">
                    <Image 
                        src="/training-3.jpeg"
                        alt="training image"
                        height={900}
                        width={600}
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="flex">
                    <p className="text-md text-gray-500">Where passion meets precision, and every kick tells a story. At Empire, we believe that football is more than just a sport it’s a lifestyle a community, & a journey of continuous improvement.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection