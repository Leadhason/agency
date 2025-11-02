import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTASection = () => {
  return (
    <div 
      className="w-full h-screen flex items-center justify-between p-2 sm:p-4 lg:p-5 my-8 sm:my-12 lg:my-20 bg-transparent overflow-hidden"
    >

      <div 
      className="relative w-full rounded-2xl sm:rounded-3xl h-screen bg-cover bg-center flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 lg:p-8 gap-6 lg:gap-0"
      style={{backgroundImage: 'url(/training-1.jpeg)'}}
      >
      {/* Overlay */}
      <div className="absolute rounded-2xl sm:rounded-3xl z-10 inset-0 bg-black/40" />
    
      {/* Left side content */}
      <div className="relative z-10 text-white w-full lg:max-w-lg text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-6 sm:mb-8 leading-normal tracking-wide text-nowrap">
          Ready to elevate<br />
          your career?
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 items-center justify-center lg:justify-start p-2 mt-8 lg:mt-12">
          <div>
            <h3 className="text-sm font-semibold mb-2 sm:mb-3 tracking-wide text-white/40">Phone</h3>
            <p className="text-white/90 text-xs sm:text-sm font-light tracking-wider">+001 1236 1258</p>
            <p className="text-white/90 text-xs sm:text-sm font-light tracking-wider">+001 5686 5874</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-2 sm:mb-3 tracking-wide text-white/40">Office</h3>
            <p className="text-white/90 text-xs sm:text-sm font-light tracking-wider">6391 Elgin St. Celina,</p>
            <p className="text-white/90 text-xs sm:text-sm font-light tracking-wider">Delaware 10299</p>
          </div>
        </div>
      </div>
      
      {/* Right side membership card */}
      <div className="relative z-10 bg-white/30 backdrop-blur-3xl flex items-center justify-center rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 w-full lg:max-w-md">
        <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full max-w-sm lg:max-w-md">
          <h2 className="text-2xl font-medium text-black mb-4 sm:mb-6 text-center leading-relaxed tracking-wide">
            Partner with Empire &<br />
            Transform Your Career
          </h2>
          
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 transition-colors duration-200 tracking-wide text-sm sm:text-base">
            Start Your Journey
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
        </div>
    </div>
  )
}

export default CTASection