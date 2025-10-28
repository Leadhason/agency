import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

const WhyChooseUs = () => {
  return (
    <div className="py-20 px-6">
        <div className="grid grid-cols-2 p-3 gap-14">
            <div className="flex w-lg rounded-3xl">
                <Image 
                    src="/training-2.jpeg"
                    alt=""
                    height={50}
                    width={300}
                    className="w-full object-cover rounded-3xl"
                />
            </div>
            <div className="flex flex-col p-6 py-10 space-y-4">
                <h1 className="text-4xl font-semibold mb-4 leading-relaxed">Why EMPIRE is the perfect sports agency
                </h1>
                <p className="text-lg font-light text-gray-400 mb-4 text-justify">We are passionate about the game of football & dedicated to providing an unparalleled experience.</p>
                <div className="items-start flex flex-col space-y-5">
                    <div className="flex min-w-30 px-2 bg-gray-100 rounded-full items-center p-1 gap-8 justify-center">
                        <div className="bg-white flex w-8 h-8 rounded-full items-center text-black font-light justify-center">
                            <Check className="w-5 h-5" />
                        </div>
                        <p className="text-md text-black font-light mr-2">Expert guidance</p>
                    </div>

                    <div className="flex min-w-30 px-2 bg-gray-100 rounded-full items-center p-1 gap-8 justify-center">
                        <div className="bg-white flex w-8 h-8 rounded-full items-center text-black font-light justify-center">
                            <Check className="w-5 h-5" />
                        </div>
                        <p className="text-md text-black font-light mr-2">Premium quality products</p>
                    </div>

                    <div className="flex min-w-30 px-2 bg-gray-100 rounded-full items-center p-1 gap-8 justify-center">
                        <div className="bg-white flex w-8 h-8 rounded-full items-center text-black font-light justify-center">
                            <Check className="w-5 h-5" />
                        </div>
                        <p className="text-md text-black font-light mr-2">Community and inspiration</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs