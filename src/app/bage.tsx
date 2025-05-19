'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Mail, FileText, User, BookOpen, Linkedin, Github } from "lucide-react";

export default function PortfolioPage() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if the theme is already saved in localStorage or system preference on page load
 
 

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [showName, setShowName] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setShowName(prev => !prev);
  }, 3000); // 3 seconds interval

  return () => clearInterval(interval); // Cleanup on unmount
}, []);

<h1 className="text-4xl font-bold">
  {showName ? "Fabule Samuel Akorede" : "A Frontend Developer"}
</h1>



  return (
    <>
      <Head>
        <title>Fabule Kore | Frontend Developer</title>
        <meta name="description" content="Software Developer from Lagos, Nigeria" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen dark:bg-gray-900   flex justify-center items-center p-2 sm:p-4 transition-colors duration-200">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-5xl p-4 sm:p-6 md:p-8 transition-colors duration-200">
          
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 md:mb-10 gap-2 sm:gap-4">
            <div className="flex justify-between w-full sm:w-auto">
              <Link href="/" className="flex items-center">
                <div className="flex items-center">
                  <div className="relative flex items-center bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 px-3 py-1 rounded-lg shadow-md">
                    
                    <div className="flex items-baseline">
                      <span className="text-gray-800 dark:text-gray-200 font-bold text-2xl font-sans tracking-tight transform hover:scale-105 transition-transform duration-200">K</span>
                      <span className="text-red-500 font-extrabold text-2xl font-sans tracking-tight transform hover:scale-105 transition-transform duration-200">O</span>
                      <span className="text-gray-800 dark:text-gray-200 font-bold text-2xl font-sans tracking-tight transform hover:scale-105 transition-transform duration-200">R</span>
                      <span className="text-red-500 font-extrabold text-2xl font-sans tracking-tight transform hover:scale-105 transition-transform duration-200">E</span>
                    </div>
                  
                  </div>
                </div>
              </Link>

              
              <button 
                className="sm:hidden text-gray-600 dark:text-gray-300"
                onClick={toggleMobileMenu}
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            
            <div className="hidden sm:flex items-center text-gray-600 dark:text-gray-400">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm font-serif mr-4">Fabulekore@gmail.com</span>
              
              
            </div>

            
            <div className="sm:hidden flex items-center justify-between w-full mt-2">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-xs font-serif">Fabulekore@gmail.com</span>
              </div>
    
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden sm:flex items-center space-x-4 md:space-x-6">
              <Link 
              href="/components/aboutMe" 
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <FileText className="w-4 h-4 mr-1" />
                <span className="text-sm">About me</span>
              </Link>
              <a 
                href="/FabuleFrontenddevsResume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <User className="w-4 h-4 mr-1" />
                <div className="text-sm">Resume</div>
              </a>

              <Link href="/components/projectpage" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <BookOpen className="w-4 h-4 mr-1" />
                <span className="text-sm">Projects</span>
              </Link>
            </nav>
          </div>

          
          {mobileMenuOpen && (
            <nav className="sm:hidden flex flex-col space-y-3 mb-4 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <Link 
              href="/components/aboutMe" 
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <FileText className="w-4 h-4 mr-1" />
                <span className="text-sm">About me</span>
              </Link>
              <a 
                href="/FabuleFrontenddevsResume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="w-4 h-4 mr-1" />
                <div className="text-sm">Resume</div>
              </a>

              <Link 
                 href="/components/projectpage" 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BookOpen className="w-4 h-4 mr-1" />
                <span className="text-sm">Projects</span>
              </Link>
            </nav>
          )}

          
          <div className="flex flex-col-reverse md:flex-row justify-between">
            
            <div className="w-full md:w-1/2 pr-0 md:pr-4 mt-6 md:mt-0">
              
              <div className="relative mb-2">
                <div className="bg-gray-900 text-white font-serif font-bold px-3 py-2 rounded-lg inline-block">
                 Hi, I am....
                </div>
                <div className="absolute w-4 h-4 bg-gray-900 transform rotate-45 right-12 -bottom-1"></div>
              </div>

              
              <div className="transition-opacity mb-3 duration-700 ease-in-out">
                <h1 className="text-5xl font-serif font-bold">
                  {showName ? "Fabule Samuel Akorede" : "A Frontend Developer"}
                </h1>
              </div>


              
              <div className="flex space-x-4 mb-4 sm:mb-6">
                <Link href="https://www.linkedin.com/in/fabuloustimsam/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="https://github.com/Fabuloustimsam" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="https://x.com/Fabuloustimsam/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 1200 1227" fill="currentColor">
                    <path d="M857.8 0H1036L678.3 522.6L1095.2 1227H750.4L486.3 807.1L177.8 1227H0L379.3 661.1L0 0H355.7L599.3 390.3L857.8 0ZM796.1 1105.1H887.9L302.6 111.5H205.4L796.1 1105.1Z"/>
                  </svg>
                </Link>
              </div>

              <div className="uppercase text-xs sm:text-sm font-black text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                COFOUNDER OF MELITT & FOUNDER OF KORE
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
              Hi, I&apos;m a Frontend Developer based in Lagos, Nigeria.
              I specialize in building modern, high-performance websites and applications using frameworks like <span className="font-bold underline">Next.js, React.js, JavaScript, Typescript, Tailwind CSS, and Vanilla CSS</span>. I bring rock-solid experience and a passion for creating clean, user-friendly interfaces. I love turning ideas into reality and am always eager to learn and grow in this ever-evolving field. Let&apos;s connect and create something amazing together!


              </p>

              {/* CTA Button */}
              <Link href="/components/Contact">
                <div className="bg-red-400 hover:bg-red-500 text-white rounded-full flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-colors">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm">let&apos;s</div>
                    <div className="text-xs sm:text-sm">talk</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Side - Avatar */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64">
                <Image
                  src="/bortimagereal.png"
                  alt="Fabule Samuel Akorede"
                  fill
                  priority
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}