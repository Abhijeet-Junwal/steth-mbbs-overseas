"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navBg = isHomePage 
    ? (isScrolled ? "bg-[#20282d]/95 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6")
    : "bg-[#1b273d] py-4 shadow-xl";

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center relative z-[110]">
          
          {/* LOGO */}
          <Link 
            href="/" 
            onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}      
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 scale-130 h-8 md:w-12 md:h-9 transition-transform duration-500 group-hover:scale-140">
              <Image 
                src="/logo without text.PNG" 
                alt="Logo" 
                fill
                className="object-contain"
                priority 
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
            {['HOME', 'ABOUT US', 'COUNTRIES', 'BLOG', 'MENTORS' , 'CONTACT'].map((item) => {
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
              className="bg-white text-navy px-8 py-3 rounded-full font-black text-xs tracking-widest duration-500 hover:bg-medical hover:text-white transition-all shadow-2xl"
            >
              GET COUNSELING
            </Link>
          </div>

          {/* MOBILE TOGGLE - Forced to stay on top */}
          <div className="lg:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white p-2 focus:outline-none relative z-[120]"
              >
                {isOpen ? <HiX size={32} /> : <HiOutlineMenuAlt3 size={32} />}
              </button>
          </div>
        </div>
      </div>  

      {/* MOBILE MENU OVERLAY - Fixed Stacking and Visibility */}
      <div className={`fixed inset-0 h-screen w-full bg-[#1b273d] transition-all duration-500 ease-in-out z-[105] flex flex-col items-center justify-center space-y-10 px-8 lg:hidden ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}>
          {/* Background Decorative Element */}
          <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-medical/10 rounded-full blur-[100px] pointer-events-none"></div>

          {['HOME', 'ABOUT US', 'COUNTRIES', 'BLOG', 'MENTORS', 'CONTACT'].map((item) => (
             <Link 
               key={item}
               onClick={() => setIsOpen(false)} 
               href={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(" ", "")}`} 
               className="text-sm  font-black text-white hover:text-medical transition-all tracking-widest"
             >
               {item}
             </Link>
          ))}
          
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-xs bg-medical text-white py-5 rounded-2xl font-extrabold uppercase tracking-widest text-xs text-center shadow-lg transform active:scale-95 transition-transform"
          >
            Talk to Expert
          </Link>
      </div>
    </nav>
  );
}