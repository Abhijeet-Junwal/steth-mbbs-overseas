"use client";
import React from 'react';
import { 
  HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin, 
  HiOutlineChatBubbleLeftRight, HiOutlineClock 
} from "react-icons/hi2";
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-medical font-black tracking-[0.4em] text-[10px] uppercase mb-4">Connect With Us</h2>
          <h1 className="text-5xl md:text-7xl font-display font-black text-navy leading-none mb-8">
            Let’s Build Your <br /> <span className="text-medical">Medical Career.</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium leading-relaxed">
            Have questions about NMC regulations, university fees, or the admission process? Our expert counselors are ready to help you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT: CONTACT INFO CARDS */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Phone & WhatsApp */}
            <div className="p-10 bg-ghost rounded-[48px] border border-gray-100 group hover:border-medical/30 transition-all">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-navy text-2xl mb-6 shadow-sm group-hover:bg-medical group-hover:text-white transition-colors">
                <HiOutlinePhone />
              </div>
              <h4 className="text-xl font-black text-navy mb-2">Call or WhatsApp</h4>
              <p className="text-gray-500 text-sm font-bold mb-4">Direct helpline for students</p>
              <a href="tel:+918770478972" className="block text-lg font-black text-navy hover:text-medical transition-colors">+91 87704 78972</a>
              <a href="https://wa.me/+918770478972" className="inline-flex items-center gap-2 mt-4 text-medical font-bold uppercase text-xs tracking-widest border-b-2 border-medical/20 hover:border-medical transition-all">
                Connect on WhatsApp →
              </a>
            </div>

            {/* Email Support */}
            <div className="p-10 bg-ghost rounded-[48px] border border-gray-100 group hover:border-medical/30 transition-all">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-navy text-2xl mb-6 shadow-sm group-hover:bg-medical group-hover:text-white transition-colors">
                <HiOutlineEnvelope />
              </div>
              <h4 className="text-xl font-black text-navy mb-2">Email Support</h4>
              <p className="text-gray-500 text-sm font-bold mb-4">For documentation queries</p>
              <a href="mailto:info@stethmbbs.com" className="block text-lg font-black text-navy hover:text-medical transition-all">stethoverseas06@gmail.com</a>
            </div>

            {/* Office Hours */}
            <div className="p-10 bg-ghost rounded-[48px] border border-gray-100 group hover:border-medical/30 transition-all">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-navy text-2xl mb-6 shadow-sm group-hover:bg-medical group-hover:text-white transition-colors">
                <HiOutlineClock />
              </div>
              <h4 className="text-xl font-black text-navy mb-2">Office Hours</h4>
              <p className="text-gray-500 text-sm font-bold">Mon - Sat: 10AM to 7PM</p>
              <p className="text-medical text-[10px] font-black uppercase tracking-widest mt-2">Closed on Sundays</p>
            </div>

          </div>

          {/* RIGHT: MAP & PHYSICAL ADDRESS */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* ADDRESS BOX */}
            <div className="bg-navy rounded-[60px] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-medical opacity-10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-medical text-3xl flex-shrink-0">
                    <HiOutlineMapPin />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-4">Visit Our Headquarters</h3>
                    <p className="text-white/60 text-lg leading-relaxed max-w-md">
                      115 First Floor, Bhakatgarh Tower <br />
                      10/1 New Palasiya, Indore, M.P. , India <br/> 
                      Pin Code - 452001
                    </p>
                    <a href="https://www.google.com/maps/place/Bakhatgarh+Tower/@22.7277952,75.8852328,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fd47098e09ed:0x180ca353626d3205!8m2!3d22.7277952!4d75.8852328!16s%2Fg%2F11hck17qwm?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
                     target="_blank" >
                        <button className="mt-8 bg-medical text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-navy transition-all">
                            GET DIRECTIONS
                        </button>
                    </a>    
                  </div>
                </div>
              </div>
            </div>

            {/* MAP EMBED PLACEHOLDER */}
            <div className="w-full h-[400px] bg-ghost rounded-[60px] border border-gray-100 overflow-hidden relative shadow-inner">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0120040601087!2d75.8852328!3d22.7277952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd47098e09ed%3A0x180ca353626d3205!2sBakhatgarh%20Tower!5e0!3m2!1sen!2sin!4v1775997620965!5m2!1sen!2sin"
               className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" 
               style={{border:0}} 
               allowFullScreen="" 
               ></iframe>
            </div>

          </div>
        </div>
      <Contact />   
      </div>
    </main>
  );
}