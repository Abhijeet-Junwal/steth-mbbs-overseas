"use client";
import { useState, useEffect } from 'react';
import { HiX } from "react-icons/hi";
import ContactForm from './ContactForm';

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown in this browser session
    const hasBeenShown = sessionStorage.getItem('steth_popup_shown');
    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('steth_popup_shown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Disable body scroll while popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm transition-opacity duration-300"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
          className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-navy bg-ghost hover:bg-gray-200 rounded-full transition-colors"
        >
          <HiX className="text-xl" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 text-center pr-6 pl-6">
          <span className="text-medical font-black tracking-[0.2em] text-[10px] uppercase block mb-1">
            Free Counseling & Admission Guidance
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-black text-navy leading-tight">
            Apply Now for <span className="text-medical">2026 MBBS Seats</span>
          </h3>
          <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">
            Get complete roadmap & guidance from expert doctors & counselors
          </p>
        </div>

        {/* Reused Working Form */}
        <ContactForm onSuccess={() => setIsOpen(false)} />
      </div>
    </div>
  );
}
