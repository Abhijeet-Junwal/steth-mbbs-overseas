"use client";
import React from 'react';
import { 
  HiOutlineUserCircle, HiOutlineRocketLaunch, HiOutlineEye, 
  HiOutlineHeart, HiOutlineSparkles, HiOutlineCheckBadge 
} from "react-icons/hi2";
import Contact from '@/components/Contact';

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION: STORYTELLING */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-medical font-black tracking-[0.4em] text-[10px] uppercase mb-4">Our Legacy</h2>
            <h1 className="text-5xl md:text-7xl font-display font-black text-navy leading-none mb-8">
              Pioneering <span className="text-medical">Ethical</span> Medical Admissions.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-6 font-medium">
              Steth MBBS Overseas was founded with a simple goal: to bridge the gap between Indian medical aspirants and high-quality, affordable global education. 
            </p>
            <p className="text-gray-500 text-lg leading-relaxed italic border-l-4 border-medical pl-6">
              "We believe every deserving student should have the chance to wear the white coat, regardless of the competition in India."
            </p>
          </div>
          <div className="relative">
             <div className="w-full h-[500px] bg-ghost rounded-[60px] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop" 
                  alt="Team Steth" 
                  className="w-full h-full object-cover"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-medical/10 rounded-full blur-3xl -z-0"></div>
          </div>
        </section>

        {/* MISSION & VISION BLOCKS */}
        <section className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="p-12 bg-navy rounded-[60px] text-white flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-medical opacity-20 rounded-full blur-3xl"></div>
            <HiOutlineRocketLaunch className="text-5xl text-medical mb-8" />
            <div>
              <h3 className="text-3xl font-black mb-4">Our Mission</h3>
              <p className="text-white/60 leading-relaxed font-medium">
                To simplify the complex process of abroad medical admissions through transparency, personalized counseling, and unwavering post-landing support.
              </p>
            </div>
          </div>

          <div className="p-12 bg-ghost rounded-[60px] flex flex-col justify-between border border-gray-100 shadow-sm hover:shadow-xl transition-all">
            <HiOutlineEye className="text-5xl text-navy mb-8" />
            <div>
              <h3 className="text-3xl font-black text-navy mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                To become India's most trusted gateway for international medical education, producing 10,000+ skilled doctors who serve humanity globally.
              </p>
            </div>
          </div>
        </section>

        {/* CORE VALUES GRID */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-medical font-black tracking-[0.4em] text-[10px] uppercase mb-4">The DNA of Steth</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-navy leading-tight">
              Values That <span className="text-medical">Define Us</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Transparency", d: "No hidden costs. Direct fees paid to universities.", i: <HiOutlineSparkles /> },
              { t: "Student First", d: "Personalized roadmaps based on your NEET score.", i: <HiOutlineHeart /> },
              { t: "Integrity", d: "We only partner with NMC & WHO recognized colleges.", i: <HiOutlineCheckBadge /> },
              { t: "End-to-End", d: "From first call to the day you graduate.", i: <HiOutlineUserCircle /> },
            ].map((value, i) => (
              <div key={i} className="p-10 bg-white border border-gray-100 rounded-[40px] text-center hover:shadow-2xl hover:border-medical/20 transition-all group">
                <div className="w-16 h-16 bg-ghost rounded-2xl flex items-center justify-center text-3xl text-navy mx-auto mb-6 group-hover:bg-medical group-hover:text-white transition-all shadow-inner">
                  {value.i}
                </div>
                <h4 className="text-xl font-black text-navy mb-2">{value.t}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM / LEADERSHIP TEASER */}
        <section className="bg-ghost rounded-[80px] p-10 md:p-20 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-black text-navy mb-8">Guided by Experts.</h3>
              <p className="text-gray-500 text-lg mb-10 font-medium">
                Our leadership team consists of seasoned educationists and former doctors who understand the medical journey inside out.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-6 py-3 bg-white rounded-full text-navy font-bold text-xs uppercase tracking-widest border border-gray-100 shadow-sm">10+ Years Exp.</span>
                <span className="px-6 py-3 bg-white rounded-full text-navy font-bold text-xs uppercase tracking-widest border border-gray-100 shadow-sm">MBBS Alumni Team</span>
                <span className="px-6 py-3 bg-white rounded-full text-navy font-bold text-xs uppercase tracking-widest border border-gray-100 shadow-sm">8+ Countries Presence</span>
              </div>
            </div>
        </section>

        <Contact/>

      </div>
    </main>
  );
}