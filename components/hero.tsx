import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-cover bg-center h-screen z-0 py-4 sm:py-8 lg:py-20 px-2 sm:px-4"
      style={{backgroundImage: `url(/hero-1.jpeg)`}}>

        <div className="flex flex-col items-start w-full p-4 sm:p-6 lg:p-7 mt-8 sm:mt-16 lg:mt-24 pt-8 sm:pt-12 lg:pt-20">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-sans animate-slide-in-left text-white flex flex-col mb-3 ">
              <span>Step Into </span>
              <span>Elite Football</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-md font-light text-white max-w-xs sm:max-w-lg lg:w-xl p-2 mb-5 animate-slide-in-up delay-150">
              Football is more than a game. It's a story — of passion, perseverance, and purpose.
              We're the agency that helps shape that story, empowering players to reach their peak, make their mark, and inspire the next generation of the sport.
            </p>
            <button className="flex bg-yellow-500 text-base sm:text-lg font-medium cursor-pointer py-3 px-4 sm:px-6 rounded-xl ml-0 sm:ml-2 animate-slide-in-left delay-200">
              Get in Touch
            </button>
        </div>

        <div className="bg-white/20 backdrop-blur-2xl rounded-2xl shadow-lg w-full max-w-sm z-0 p-4 p-7 self-end mr-10 mt-4 hidden md:block animate-slide-in-up delay-300">
          <p className="text-sm lg:text-md font-light text-white">
            Football is more than a game. It's a journey of self-discovery, discipline, and infinite horizons — where talent becomes craft, and dreams are built one match at a time.
          </p>
        </div>
    </div>
  )
}

export default HeroSection