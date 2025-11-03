'use client'

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="absolute top-0 left-0 flex w-full items-center bg-transparent p-2 sm:p-4 lg:p-2 my-2 sm:my-3 mb-12 sm:mb-16 lg:mb-24 z-50">
            <h1 className="text-2xl sm:text-3xl font-bold text-white capitalize">
                <Link href="/">EMPIRE</Link>
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center gap-5 max-w-md bg-white/50 p-3 px-10 text-md font-light rounded-lg mx-auto">
                <Link href="/" className="hover:text-gray-700 cursor-pointer transition-all duration-300 group relative">Home
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[1.5px] bg-gray-700 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/about"  className="hover:text-gray-700 cursor-pointer transition-all duration-300 group relative">About
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[1.5px] bg-gray-700 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/services"  className="hover:text-gray-700 cursor-pointer transition-all duration-300 group relative">Services
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[1.5px] bg-gray-700 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/contact"  className="hover:text-gray-700 cursor-pointer transition-all duration-300 group relative">Contact
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[1.5px] bg-gray-700 group-hover:w-full transition-all duration-300"></span>
                </Link>
            </div>

            {/* Mobile Navigation Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden ml-auto p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-2xl z-50">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-32 left-10 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"></div>
                        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-yellow-500 rounded-full blur-xl"></div>
                    </div>

                    <div className="relative flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
                                    <span className="text-black font-bold text-lg">E</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 tracking-wide">EMPIRE</h2>
                                    <p className="text-sm text-gray-500 font-light">Sports Agency</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-3 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>
                        
                        {/* Navigation Links */}
                        <div className="flex-1 flex items-center justify-center">
                            <div className="space-y-8 text-center">
                                <Link 
                                    href="/" 
                                    className="block text-4xl font-light text-gray-700 hover:text-black hover:text-yellow-600 transition-all duration-500 tracking-wide group"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="relative">
                                        Home
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
                                    </span>
                                </Link>
                                <Link 
                                    href="/about" 
                                    className="block text-4xl font-light text-gray-700 hover:text-black hover:text-yellow-600 transition-all duration-500 tracking-wide group"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="relative">
                                        About
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
                                    </span>
                                </Link>
                                <Link 
                                    href="/services" 
                                    className="block text-4xl font-light text-gray-700 hover:text-black hover:text-yellow-600 transition-all duration-500 tracking-wide group"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="relative">
                                        Services
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
                                    </span>
                                </Link>
                                <Link 
                                    href="/contact" 
                                    className="block text-4xl font-light text-gray-700 hover:text-black hover:text-yellow-600 transition-all duration-500 tracking-wide group"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="relative">
                                        Contact
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Footer Brand Element */}
                        <div className="p-6 text-center border-t border-gray-200/50">
                            <p className="text-sm text-gray-400 font-light tracking-wider">
                                Elevating Football Careers
                            </p>
                            <div className="flex justify-center mt-3 space-x-1">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header