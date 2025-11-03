'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import Header from '@/components/header'
import FooterSection from '@/components/footer'
import CTASection from '@/components/cta'

const AboutPage = () => {
  const heroRef = useScrollReveal(0.1)
  const storyRef = useScrollReveal(0.1)

  return (
    <div className="bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      <div 
        ref={heroRef.ref}
        className={`relative min-h-screen bg-cover bg-center flex items-center justify-center scroll-animate-fade-in ${heroRef.isVisible ? 'visible' : ''}`}
        style={{backgroundImage: 'url(/hero-1.jpeg)'}}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

            {/* Right side - About Us card */}
            <div className={`scroll-animate-slide-right delay-200 absolute max-w-xl p-3 right-4 top-0 self-end ${heroRef.isVisible ? 'visible' : ''}`}>
              <div className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  About Us
                </h1>
                <p className="text-base text-md text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  Welcome to Empire Sports Agency, your ultimate destination for football excellence! 
                  Whether you're a seasoned professional, a weekend enthusiast, or just 
                  starting your journey into the world of football.
                </p>
                <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-medium px-6 py-3 rounded-xl text-sm transition-colors duration-300">
                  Get A Membership
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
        </div>
      </div>

      {/* Founding Story Section */}
      <div 
        ref={storyRef.ref}
        className={`bg-gray-100 py-12 sm:py-16 lg:py-20 scroll-animate-fade-in ${storyRef.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Founding Story Header */}
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 scroll-animate-slide-up delay-100 ${storyRef.isVisible ? 'visible' : ''}`}>
            <div className="inline-block bg-white rounded-full px-6 sm:px-8 py-2 sm:py-3 mb-6 sm:mb-8">
              <span className="text-gray-800 font-medium tracking-wide text-sm sm:text-base">Founding Story</span>
            </div>
            <p className="text-md sm:text-lg lg:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto font-light">
              Empire Sports Agency was born out of a shared love for the game of football and a desire 
              to create something truly special for players around the world. Our story 
              begins with two friends, Marcus and Jamie who met on a picturesque football 
              pitch during a weekend tournament.
            </p>
          </div>

          {/* Passion for the Game Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-gray-100 mb-8 lg:mb-10">
            
            {/* Left side - Passion card */}
            <div className={`scroll-animate-slide-left delay-200 bg-white w-full h-full p-4 rounded-2xl ${storyRef.isVisible ? 'visible' : ''}`}>
              <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 h-full flex flex-col justify-center items-center text-center">
                <h2 className="text-md sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Passion for the Game
                </h2>
                <p className="text-lg font-light text-gray-700 leading-relaxed">
                  Football is more than just a sport — it's a way of life. We are deeply 
                  passionate about the game & are committed to sharing that 
                  passion with players around the world.
                </p>
              </div>
            </div>

            {/* Right side - Football equipment image */}
            <div className={`scroll-animate-slide-right delay-300 ${storyRef.isVisible ? 'visible' : ''}`}>
              <div className="relative">
                <Image
                  src="/services-1.jpeg"
                  alt="Football equipment on grass field"
                  width={600}
                  height={400}
                  className="object-cover rounded-2xl sm:rounded-3xl w-full h-64 sm:h-80 lg:h-96"
                />
              </div>
            </div>
          </div>

          {/* Community First Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-gray-100 mb-12 lg:mb-16">
            
            {/* Left side - Football training image */}
            <div className={`scroll-animate-slide-left delay-200 ${storyRef.isVisible ? 'visible' : ''}`}>
              <div className="relative">
                <Image
                  src="/services-2.jpeg"
                  alt="Football training and development"
                  width={600}
                  height={400}
                  className="object-cover rounded-2xl sm:rounded-3xl w-full h-64 sm:h-80 lg:h-96"
                />
              </div>
            </div>

            {/* Right side - Community First card */}
            <div className={`scroll-animate-slide-right delay-300 bg-white w-full h-full p-4 rounded-2xl ${storyRef.isVisible ? 'visible' : ''}`}>
              <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 h-full flex flex-col justify-center items-center text-center">
                <h2 className="text-md sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Community First
                </h2>
                <p className="text-lg font-light text-gray-700 leading-relaxed">
                  Empire Sports Agency is built by football enthusiasts, for football players. 
                  We believe in the power of community and are dedicated to fostering 
                  connections among players, coaches, and fans worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-[#6A6E39]">
        {/* Background Video/Image */}

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          

          {/* Testimonials Badge */}
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <span className="text-gray-800 font-medium text-sm">Testimonials</span>
          </div>

          {/* Main Testimonial */}
          <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-32l lg:text-3xl font-light text-white leading-relaxed mb-8">
              "Joining Empire Sports Agency was the best decision I've made for my 
              career. The support is exceptional & the community feels like family."
            </h2>
          </div>

          {/* Profile Images and Info */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white/50">
                <Image
                  src="/player-4.jpeg"
                  alt="Client testimonial"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white scale-110 z-10">
                <Image
                  src="/player-2.jpeg"
                  alt="Marcus Rodriguez"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white/50">
                <Image
                  src="/player-3.jpeg"
                  alt="Client testimonial"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-1">Marcus Rodriguez</h3>
              <p className="text-white/80 text-sm">Professional Player & Client</p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Founders Section */}
      <div className="bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mb-5 sm:mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Meet the founders
            </h2>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-7">
            
            {/* Founder 1 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm">
              <div className="mb-6">
                <Image
                  src="/player-1.jpeg"
                  alt="Cameron Williams"
                  width={400}
                  height={400}
                  className="w-full h-48 sm:h-60 object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-xl font-medium text-gray-900 mb-2">
                  Cameron Williams
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Co-Founder & CEO
                </p>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <Image
                  src="/player-2.jpeg"
                  alt="Marcus Rodriguez"
                  width={400}
                  height={400}
                  className="w-full h-64 sm:h-80 object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
              <div className="text-center">
                <h3 className="text-llg sm:text-xl fonmediumld text-gray-900 mb-2">
                  Marcus Rodriguez
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Co-Founder & Director
                </p>
              </div>
            </div>

            {/* Founder 3 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
              <div className="mb-6">
                <Image
                  src="/player-3.jpeg"
                  alt="Elena Thompson"
                  width={400}
                  height={400}
                  className="w-full h-64 sm:h-80 object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                  Elena Thompson
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Co-Founder & COO
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <CTASection />
      <FooterSection />
    </div>
  )
}

export default AboutPage