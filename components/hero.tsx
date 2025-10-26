import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-cover bg-center h-screen"
      style={{backgroundImage: `url(/hero-1.jpeg)`}}>

        <div className="flex flex-col items-start w-full p-2 ml-10 mt-24 pt-20">
            <h1 className="text-8xl font-bold font-sans text-white flex flex-col mb-3">
              <span>Step Into </span>
              <span>Elite Football</span>
            </h1>
            <p className="text-md font-light text-white w-xl p-2 mb-5">
              Football is more than a game. It’s a story — of passion, perseverance, and purpose.
              We’re the agency that helps shape that story, empowering players to reach their peak, make their mark, and inspire the next generation of the sport.
            </p>
            <button className="flex bg-yellow-500 text-lg font-medium cursor-pointer py-3 px-6 rounded-xl ml-2">
              Get in Touch
            </button>
        </div>

        <div className="bg-white/10 backdrop-blur-2xl -mb-10 rounded-2xl shadow-lg w-md h-md p-8 self-end mr-10">
          <p className="p-2 text-md font-light text-white">
            Football is more than a game. It’s a journey of self-discovery, discipline, and infinite horizons — where talent becomes craft, and dreams are built one match at a time.
          </p>
        </div>
    </div>
  )
}

export default HeroSection