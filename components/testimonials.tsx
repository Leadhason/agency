'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonialData = [
  {
    id: 1,
    quote: "Working with Empire Sports Agency was the best decision I've made for my career. They helped me secure a contract that exceeded my expectations & the support feels like family.",
    name: "Marcus Johnson",
    title: "Professional Footballer",
    image: "/player-1.jpeg",
    profiles: ["/player-1.jpeg", "/player-2.jpeg", "/player-3.jpeg"]
  },
  {
    id: 2,
    quote: "Empire's dedication to player development is unmatched. They don't just negotiate contracts - they build careers and create opportunities that last a lifetime.",
    name: "Sarah Williams", 
    title: "Rising Star",
    image: "/player-2.jpeg",
    profiles: ["/player-2.jpeg", "/player-3.jpeg", "/player-4.jpeg"]
  },
  {
    id: 3,
    quote: "The personalized attention and professional expertise at Empire helped me navigate the complexities of professional football with confidence.",
    name: "David Thompson",
    title: "Team Captain",
    image: "/player-3.jpeg",
    profiles: ["/player-3.jpeg", "/player-4.jpeg", "/player-1.jpeg"]
  }
]

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialData.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialData.length) % testimonialData.length)
  }

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials Badge */}
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12">
          <div className="bg-gray-100 rounded-full px-6 sm:px-8 py-2 sm:py-3">
            <span className="text-gray-800 font-medium tracking-wide text-sm sm:text-base">Testimonials</span>
          </div>
        </div>

        {/* Main Content with Navigation */}
        <div className="relative flex items-center">
          {/* Left Navigation Button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 sm:left-0 z-10 p-2 sm:p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50 hover:scale-105"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 sm:right-0 z-10 p-2 sm:p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50 hover:scale-105"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          {/* Testimonials Container */}
          <div className="w-full overflow-hidden mx-6 sm:mx-8 lg:mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonialData.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2 sm:px-4 lg:px-8">
                  <div className="flex flex-col items-center text-center">
                    {/* Testimonial Text */}
                    <div className="mb-8 sm:mb-10 lg:mb-12">
                      <blockquote className="text-lg sm:text-2xl lg:text-3xl font-light text-gray-600 leading-relaxed mb-6 sm:mb-8 tracking-wide max-w-4xl">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>

                    {/* Profile Images - Larger and Rectangular */}
                    <div className="flex justify-center items-center space-x-2 sm:space-x-3 lg:space-x-4 mb-4 sm:mb-5 lg:mb-6">
                      {testimonial.profiles.map((profileImg, imgIndex) => (
                        <div key={imgIndex} className="relative">
                          <div className={`rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                            imgIndex === 1 
                              ? 'w-20 h-26 sm:w-28 sm:h-36 lg:w-32 lg:h-40 border-2 sm:border-3 lg:border-4 border-yellow-400 shadow-lg' 
                              : 'w-16 h-20 sm:w-20 sm:h-26 lg:w-24 lg:h-32 opacity-70 hover:opacity-100'
                          }`}>
                            <Image
                              src={profileImg}
                              alt={`Profile ${imgIndex + 1}`}
                              width={128}
                              height={160}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Name and Title */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-1 tracking-wide">{testimonial.name}</h4>
                      <p className="text-sm sm:text-base text-gray-600 font-light tracking-wide">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center space-x-2 mt-8 sm:mt-10 lg:mt-12">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-yellow-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection