"use client";
import React from 'react';
import Link from 'next/link';
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function CountriesLanding() {
  const countryList = [
    { 
      name: "Russia", 
      desc: "Top-tier government universities with a century of medical excellence.", 
      fee: "₹18L - 35L", 
      slug: "russia",
      image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=800"
    },
    { 
      name: "Georgia", 
      desc: "European standards with 100% English medium courses and global exposure.", 
      fee: "₹25L - 40L", 
      slug: "georgia",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800"
    },
    { 
      name: "Kazakhstan", 
      desc: "Modern infrastructure and affordable living for Indian medical aspirants.", 
      fee: "₹20L - 28L", 
      slug: "kazakhstan",
      image: "https://images.unsplash.com/photo-1605360723267-6e7faca273de?q=80&w=672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      name: "Philippines", 
      desc: "Clinical-focused US curriculum with high success rates in NEXT/USMLE.", 
      fee: "₹22L - 35L", 
      slug: "philippines",
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800"
    },
    { 
      name: "Armenia", 
      desc: "Rich clinical history with massive patient inflow in state hospitals.", 
      fee: "₹25L - 35L", 
      slug: "armenia",
      image: "https://images.unsplash.com/photo-1536645152842-6b5fbacf1153?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFybWVuaWF8ZW58MHwwfDB8fHww"
    },
    { 
      name: "Kyrgyzstan", 
      desc: "The most cost-effective gateway to your medical degree abroad.", 
      fee: "₹12L - 18L", 
      slug: "kyrgyzstan",
      image: "https://images.unsplash.com/photo-1610720684893-619cd7a5cde5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      name: "Nepal", 
      desc: "Proximity to India with no visa requirements and excellent clinical labs.", 
      fee: "₹45L - 65L", 
      slug: "nepal",
      image: "https://images.unsplash.com/photo-1623492701360-fb4a1205c789?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5lcGFsfGVufDB8MHwwfHx8MA%3D%3D" 
    },
    { 
      name: "Uzbekistan", 
      desc: "Highly subsidized tuition fees with high-quality medical training.", 
      fee: "₹15L - 22L", 
      slug: "uzbekistan",
      image: "https://images.unsplash.com/photo-1744873332054-d982edc655dd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      name: "India", 
      desc: "Expert counseling for Private & Deemed medical colleges via NEET.", 
      fee: "NEET Based", 
      slug: "india",
      image: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwwfDB8fHww"
    },
  ];

  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20 text-center md:text-left">
          <h2 className="text-medical font-black tracking-[0.4em] text-[10px] uppercase mb-4">Global Destinations</h2>
          <h1 className="text-4xl md:text-7xl font-display font-black text-navy leading-[0.9] tracking-tighter mb-8">
            Explore Your <span className="text-medical">Future</span> Medical Hub.
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Compare budget, clinical exposure, and lifestyle across 9+ countries curated for Indian medical aspirants.
          </p>
        </div>

        {/* 9-Block Country Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {countryList.map((item, i) => (
            <Link 
              href={`/countries/${item.slug}`} 
              key={i} 
              className="group relative h-[400px] rounded-[60px] overflow-hidden flex flex-col justify-end p-8 shadow-2xl transition-all duration-700 hover:-translate-y-2"
            >
              {/* Image Background Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale-50 group-hover:grayscale-10 group-hover:scale-110 transition-all duration-1000" 
                />
                {/* Dark Overlays for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              {/* Content Layer */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-4xl font-black text-white uppercase tracking-tighter">
                    {item.name}
                  </h4>
                  <div className="w-12 h-12 rounded-2xl bg-medical text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                    <HiOutlineArrowLongRight className="text-2xl" />
                  </div>
                </div>
                
                <p className="text-white/70 text-sm font-medium leading-relaxed line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.desc}
                </p>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-black text-medical uppercase tracking-[0.2em]">Package Starts From</p>
                    <p className="text-xl font-black text-white">{item.fee}</p>
                  </div>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    NMC Approved
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-24 p-12 md:p-20 bg-ghost shadow-2xl rounded-[80px] border border-gray-100 flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-5xl font-black text-navy mb-6">Confused about the right choice?</h3>
            <p className="text-gray-500 text-lg mb-10 max-w-xl font-medium">
              Every country has its pros and cons. Let our experts help you decide based on your NEET score and budget.
            </p>
            <a href='/contact'>
              <button className="bg-navy text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-medical transition-all shadow-xl">
                Get Personalized Advice
              </button>
            </a>
        </div>
      </div>
    </main>
  );
}