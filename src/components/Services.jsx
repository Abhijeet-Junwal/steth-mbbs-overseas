"use client";
import React, { useEffect, useRef, useState } from 'react';
import { 
  HiOutlineAcademicCap, HiOutlineDocumentText, HiOutlineGlobeAlt, 
  HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineCheckBadge 
} from "react-icons/hi2";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Simple CSS class for the fade-up effect
  const fadeUpClass = (delay = "0ms") => `
    transition-all duration-200 ease-out transform
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
  `;

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8 ${fadeUpClass()}`}>
          <div className="space-y-4">
            <h2 className="text-medical font-bold tracking-[0.4em] text-xs uppercase">The Steth Advantage</h2>
            <h3 className="text-5xl md:text-7xl font-black text-navy leading-none">
              How We <br /> <span className="text-medical">Empower</span> You.
            </h3>
          </div>
          <div className="max-w-xs border-l-2 border-gray-100 pl-6 text-gray-500 text-sm leading-relaxed">
            We’ve redesigned the consultancy experience to be transparent, digital, and student-focused, covering every mile from NEET counseling to your white coat ceremony.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[340px]">
          
          {/* Main Feature - University Selection */}
          <div 
            style={{ transitionDelay: '100ms' }}
            className={`md:col-span-2 md:row-span-2 bg-navy rounded-[48px] p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-navy/20 ${fadeUpClass()}`}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-medical opacity-10 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10">
              <div className="text-5xl text-medical mb-8"><HiOutlineAcademicCap /></div>
              <h4 className="text-4xl font-bold mb-6 leading-tight">Strategic University Selection</h4>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                We don't just pick a college; we map your career. Using your NEET score and budget, we match you with NMC-compliant institutions that have proven FMGE success rates.
              </p>
              <ul className="space-y-3 mb-10">
                {['Clinical exposure analysis', 'Budget-optimized fee mapping', 'Direct Govt. University tie-ups'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-white/80 font-medium">
                    <HiOutlineCheckBadge className="text-medical text-xl" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="relative z-10 w-full md:w-fit bg-medical text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-lg active:scale-95">
              Start Your Journey
            </button>
          </div>

          {/* Documentation & Visa Block */}
          <div 
            style={{ transitionDelay: '200ms' }}
            className={`md:col-span-2 bg-ghost rounded-[48px] p-10 flex flex-col justify-center border border-transparent hover:border-gray-200 transition-all group shadow-sm hover:shadow-xl ${fadeUpClass()}`}
          >
            <div className="flex items-center gap-8 mb-6">
                <div className="w-20 h-20 bg-white rounded-3xl flex-shrink-0 flex items-center justify-center text-4xl text-navy group-hover:text-medical transition-colors shadow-sm">
                  <HiOutlineDocumentText />
                </div>
                <div>
                  <p className="text-medical font-bold text-[10px] uppercase tracking-widest mb-1">Documentation</p>
                  <h4 className="text-2xl font-black text-navy leading-tight">Visa & Legal Assistance</h4>
                </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              From MEA Apostille and HRD verification to final visa stamping. We handle the complex legal paperwork so you can focus on your medical preparations.
            </p>
          </div>

          {/* Global Reach Block */}
          <div 
            style={{ transitionDelay: '300ms' }}
            className={`bg-medical rounded-[48px] p-8 flex flex-col justify-between text-white group shadow-lg hover:rotate-4 transition-all cursor-default ${fadeUpClass()}`}
          >
            <div className="text-4xl"><HiOutlineGlobeAlt /></div>
            <div>
              <h4 className="text-xl font-bold mb-2">Global Network</h4>
              <p className="text-white/70 text-xs leading-relaxed">
                Direct presence in 8+ countries ensures on-ground support for our students during their entire 6-year degree.
              </p>
            </div>
          </div>

          {/* Post-Landing Care Block */}
          <div 
            style={{ transitionDelay: '400ms' }}
            className={`bg-ghost border border-gray-100 rounded-[48px] p-8 flex flex-col justify-between group hover:bg-white hover:shadow-2xl transition-all ${fadeUpClass()}`}
          >
            <div className="text-4xl text-navy group-hover:text-medical transition-colors"><HiOutlineUserGroup /></div>
            <div>
              <h4 className="text-xl font-bold text-navy mb-2">Post-Landing Care</h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                We assist in local registration, hostel allocation, and even provide guidance for your first semester in a new country.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}