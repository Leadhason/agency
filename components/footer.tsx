import React from 'react'
import Link from 'next/link'

const FooterSection = () => {
  return (
    <footer className="bg-gray-100 py-10 sm:py-12  lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12 text-center sm:text-left">
          {/* Brand section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-medium">E</span>
              </div>
              <span className="text-xl sm:text-2xl font-medium text-black tracking-wide">Empire</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-xs font-light leading-relaxed tracking-wide text-sm sm:text-base mx-auto sm:mx-0">
              Empire Sports Agency elevates football careers.
            </p>
            
            {/* Social media icons */}
            <div className="flex gap-4 sm:gap-6 lg:gap-8 justify-center sm:justify-start">
              <Link href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <span className="text-white text-xs sm:text-sm font-bold">f</span>
              </Link>
              <Link href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <span className="text-white text-xs sm:text-sm font-bold">X</span>
              </Link>
              <Link href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <span className="text-white text-xs sm:text-sm font-bold">in</span>
              </Link>
            </div>
          </div>
          
          {/* Services links */}
          <div className="sm:ml-0 lg:ml-5">
            <h4 className="font-medium text-black mb-4 sm:mb-5 tracking-wide text-sm sm:text-base">Services</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><Link href="#" className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-xs sm:text-sm">Player Representation</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-xs sm:text-sm">Contract Management</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-xs sm:text-sm">Career Development</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-xs sm:text-sm">Brand Building</Link></li>
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h4 className="font-medium text-black mb-4 sm:mb-5 tracking-wide text-sm sm:text-base">Company</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><Link href="#" className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-xs sm:text-sm">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-xs sm:text-sm">Our Players</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-xs sm:text-sm">Testimonials</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-xs sm:text-sm">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Support links */}
          <div>
            <h4 className="font-medium text-black mb-4 sm:mb-5 tracking-wide text-sm sm:text-base">Support</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><Link href="#" className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-xs sm:text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-xs sm:text-sm">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-xs sm:text-sm">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-gray-300">
          <p className="text-center text-gray-600 font-light tracking-wider text-xs sm:text-sm">
            © 2025 Empire. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection