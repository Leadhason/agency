
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const faqData = [
  {
    id: 1,
    question: "How do I get started with Empire Sports Agency?",
    answer: "Getting started is simple. Contact us through our website or phone to schedule an initial consultation. We'll discuss your career goals, current situation, and how we can help you take your football career to the next level."
  },
  {
    id: 2,
    question: "What services do you offer to football players?", 
    answer: "We offer comprehensive representation including contract negotiations, transfer facilitation, career development planning, brand building, marketing opportunities, legal support, and financial advisory services to help maximize your potential both on and off the field."
  },
  {
    id: 3,
    question: "How do you negotiate contracts and transfers?",
    answer: "Our experienced team leverages industry relationships, market knowledge, and proven negotiation strategies to secure the best possible terms for our clients. We handle all aspects of contract negotiations while keeping you informed throughout the process."
  },
  {
    id: 4,
    question: "What makes Empire different from other agencies?",
    answer: "Empire combines personalized attention with industry expertise. We maintain a selective client roster to ensure dedicated service, have established relationships across all levels of football, and focus on long-term career development rather than just individual deals."
  }
]

const FAQSection = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <div className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-black leading-tight">
            Be part of the action<br />
            Empire's journey
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image and Date */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/hero-1.jpeg"
                alt="Empire Sports Agency"
                width={500}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
            <p className="text-gray-600 font-medium text-lg">
              Founded in 2020
            </p>
          </div>

          {/* Right Side - FAQ Accordions */}
          <div className="space-y-4">
            {faqData.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <span className="text-2xl font-semibold text-gray-800 min-w-[2rem]">
                      {item.id}.
                    </span>
                    <h3 className="text-xl font-medium text-gray-800 leading-relaxed">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ml-4 ${
                      openAccordion === item.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {openAccordion === item.id && (
                  <div className="px-6 pb-6 pt-2">
                    <div className="ml-10 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection