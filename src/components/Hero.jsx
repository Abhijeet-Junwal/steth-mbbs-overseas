import Image from 'next/image';
import { HiOutlineArrowRight, HiOutlineShieldCheck } from "react-icons/hi2";
import SocialSidebar from './SocialSidebar';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#13223b]">
        {/* <SocialSidebar/> */}
      
      {/* 1. Background Layer: Subtle & Deep */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.jpg" 
          alt="Medical Background" 
          fill
          className="object-cover opacity-20 grayscale"
          priority
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#192438] via-[#05080D]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
      </div>

      {/* 2. Decorative Blobs (Layered) */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-medical opacity-[0.08] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-medical opacity-[0.05] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <HiOutlineShieldCheck className="text-medical text-lg" />
            <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">NMC & WHO Recognized Universities 2026</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter">
            Secure Your <br/>
            <span className="text-medical drop-shadow-[0_0_30px_rgba(30,192,184,0.3)]">MBBS Seat</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
            At <strong className="text-white ">Steth MBBS Overseas</strong>, we bridge the gap between your medical dreams and global reality with India's most trusted consultant for <span className="text-white font-bold">Georgia, Russia & more.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a href='/countries'>
              <button className="group bg-medical text-white px-10 py-6 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-navy transition-all shadow-2xl shadow-medical/20 active:scale-95">
              Explore Countries 
                <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a href='#testimonials' >
              <button className="bg-white/5 border border-white/10 text-white px-10 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-md active:scale-95">
                Watch Success Stories
              </button>
            </a>
          </div>
          
          {/* Quick Stats Mini-Row */}
          {/* <div className="pt-10 flex flex-wrap justify-center lg:justify-start gap-12 opacity-50">
             <div>
               <p className="text-2xl font-black text-white">500+</p>
               <p className="text-[10px] font-bold uppercase tracking-widest">Placed</p>
             </div>
             <div>
               <p className="text-2xl font-black text-white">25+</p>
               <p className="text-[10px] font-bold uppercase tracking-widest">Partners</p>
             </div>
             <div>
               <p className="text-2xl font-black text-white">100%</p>
               <p className="text-[10px] font-bold uppercase tracking-widest">Visa Rate</p>
             </div>
          </div> */}
        </div>

        {/* RIGHT CONTENT: THE "INVENA" IMAGE STACK */}
        <div className="hidden lg:block relative">
          <div className="relative w-full aspect-square max-w-[550px] ml-auto">
            {/* Main Rounded Box */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[80px] rotate-6 overflow-hidden shadow-2xl">
                <Image 
                  src="/hero-bg.jpg" 
                  alt="Doctor Portrait" 
                  fill
                  className="object-cover -rotate-6 scale-110 grayscale-70 hover:grayscale-50 transition-all duration-500 opacity-70 hover:opacity-80"
                />
            </div>
            
            {/* Floating Glass Card */}
            <div className="absolute -bottom-10 -left-10 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] shadow-2xl max-w-[280px]">
                <p className="text-medical font-black text-4xl mb-2">7+</p>
                <p className="text-white font-bold text-sm leading-tight">Years of expertise in medical education abroad.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}