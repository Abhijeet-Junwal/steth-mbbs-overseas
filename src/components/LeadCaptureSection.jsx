"use client";
import ContactForm from './ContactForm';
import { HiOutlineCheckCircle, HiOutlineSparkles, HiOutlineShieldCheck, HiOutlineUserGroup } from "react-icons/hi2";

export default function LeadCaptureSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-[#13223b] via-[#1B365D] to-navy text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-medical/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] md:rounded-[48px] p-6 sm:p-10 md:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Side */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical/10 border border-medical/30 text-medical">
                <HiOutlineSparkles className="text-sm" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Quick Application 2026</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-black leading-tight text-white">
                Start Your Medical <br />
                <span className="text-medical">Journey Today</span>
              </h2>

              <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                Get personalized guidance on top NMC & WHO-recognized medical universities, budget planning, and hassle-free admission.
              </p>

              {/* Trust Badges */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2 text-left max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-medical/20 text-medical flex items-center justify-center flex-shrink-0">
                    <HiOutlineShieldCheck className="text-lg" />
                  </div>
                  <span className="text-xs font-bold text-white/90">100% Free Consultation</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-medical/20 text-medical flex items-center justify-center flex-shrink-0">
                    <HiOutlineUserGroup className="text-lg" />
                  </div>
                  <span className="text-xs font-bold text-white/90">Expert Doctor Counselors</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-medical/20 text-medical flex items-center justify-center flex-shrink-0">
                    <HiOutlineCheckCircle className="text-lg" />
                  </div>
                  <span className="text-xs font-bold text-white/90">NMC Compliant Colleges</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-medical/20 text-medical flex items-center justify-center flex-shrink-0">
                    <HiOutlineSparkles className="text-lg" />
                  </div>
                  <span className="text-xs font-bold text-white/90">End-to-End Support</span>
                </div>
              </div>
            </div>

            {/* Right Form Side */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-[28px] md:rounded-[36px] p-6 md:p-8 shadow-2xl text-navy">
                <div className="mb-6 text-center lg:text-left">
                  <h3 className="text-xl md:text-2xl font-display font-black text-navy">
                    Apply for <span className="text-medical">Free Counseling</span>
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>
                
                {/* Reused Working Form */}
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
