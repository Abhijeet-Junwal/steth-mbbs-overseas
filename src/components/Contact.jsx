"use client";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section className="py-12 md:py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4w md:px-6">
        {/* Adjusted border radius for mobile (rounded-3xl to rounded-[60px] on desktop) */}
        <div className="bg-navy rounded-[40px] md:rounded-[60px] p-6 sm:p-10 md:p-20 relative overflow-hidden shadow-2xl">
          
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-medical opacity-10 rounded-full blur-[80px] md:blur-[120px] -mr-10 -mt-10"></div>
          
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-6xl font-display font-black text-white leading-tight mb-4 md:mb-6">
                Ready to wear the <span className="text-medical">White Coat?</span>
              </h2>
              <p className="text-white/60 text-base md:text-lg mb-8 md:mb-10 max-w-md mx-auto lg:mx-0">
                Don't let complex documentation stop your dream. Get a complete 6-year roadmap from our expert doctors and counselors.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-medical text-lg md:text-xl">
                        <HiOutlineChatBubbleBottomCenterText />
                    </div>
                    <div className="text-left">
                        <p className="text-[10px] uppercase font-bold tracking-widest text-white/40">Response Time</p>
                        <p className="text-sm md:text-base font-bold uppercase tracking-tight">Under 24 Hours</p>
                    </div>
                </div>
              </div>
            </div>

            {/* The Form Container */}
            <div className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-12 shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}