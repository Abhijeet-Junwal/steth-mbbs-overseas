"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"; // Install react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if we are on the Home Page
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // If not on home page, we want it "scrolled" by default
    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      // Re-check scroll position on Home page mount
      handleScroll();
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, pathname]);

  // Logic for Background Classes
  const navBg = isHomePage 
    ? (isScrolled ? "bg-[#20282d]/90 backdrop-blur-md py-4 shadow-lg border- border-gray-100" : "bg-transparent py-6")
    : "bg-[#1b273d] md:bg-[#20282d]/90 backdrop-blur-md py-4 shadow-xl border-b border-white/5";

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link 
          href="/" 
          onClick={(e) => { {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}      
          className="relative z-[110] flex items-center gap-3 group"
          >
            <div className="relative w-10 h- md:w-12 md:h-11 transition-transform duration-500 group-hover:scale-110">
              <Image 
                src="/logo without text.PNG" 
                alt="Steth MBBS Logo" 
                fill
                className="object-contain"
                priority // Ensures logo loads immediately
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg md:text-xl tracking-tighter uppercase text-[#3a7bdd] leading-none">
                STETH <span className="text-blue-200">MBBS</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.3em] text-blue-200/80 uppercase mt-1 md:block">
                Overseas Education
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-10 font-bold text-xs tracking-widest text-white">
            {['HOME', 'ABOUT US', 'COUNTRIES', 'BLOG', 'CONTACT'].map((item) => {
            const href = item === 'HOME' ? '/' : `/${item.toLowerCase().replace(" ", "")}`;

            return (
              <Link 
                key={item}
                href={href}
                onClick={(e) => {
                  if (item === 'HOME' && pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="hover:text-medical transition-colors"
              >
                {item}
              </Link>
            );
          })}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden sm:block">
            <Link 
              href="/contact" 
              className={`px-8 py-3 rounded-full font-black text-xs tracking-widest transition-all duration-500 shadow-2xl ${
                // isHomePage && !isScrolled ?
                 "bg-white text-navy hover:bg-medical hover:text-white shadow-2xl" 
                // : "bg-medical text-white hover:bg-white hover:text-navy"
              }`}
            >
              GET COUNSELING
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden relative z-[110]">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white p-2 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <HiX size={32} /> : <HiOutlineMenuAlt3 size={32} />}
              </button>
            </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-[#1b273d] transition-transform duration-500 ease-in-out z-[-1] flex flex-col items-center justify-center space-y-8 px-8 lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
          {['HOME', 'ABOUT US', 'COUNTRIES', 'BLOG', 'CONTACT'].map((item) => (
             <Link 
               key={item}
               onClick={() => setIsOpen(false)} 
               href={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(" ", "")}`} 
               className="text-sm font-bold text-white hover:text-medical transition-colors"
             >
               {item}
             </Link>
          ))}
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-xs bg-medical text-white py-5 rounded-2xl font-extrabold uppercase tracking-widest text-xs text-center shadow-lg"
          >
            Talk to Expert
          </Link>
      </div>
    </nav>
  );
}