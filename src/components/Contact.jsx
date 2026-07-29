"use client";
import { useState } from 'react';
import { HiOutlineChatBubbleBottomCenterText, HiOutlineArrowRight } from "react-icons/hi2";
import { FaCircleInfo } from "react-icons/fa6";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      Name: e.target.fullName.value,
      WhatsApp: e.target.phone.value,
      NEET_Score: e.target.neet.value,
      Country: "General Inquiry"
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbxzS9IuyYttqmGG3-T_Upks7dkfg4oH8gqwYebBsgPaK-pSmlHqjsgLQiIHEtzP8KjH/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      alert("Request received! Our team will call you shortly.");
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("Error sending request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <label className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-gray-800 ml-1 mb-2 block">Full Name</label>
                  <input 
                    name="fullName"
                    type="text" 
                    placeholder="Eg. Rahul Verma" 
                    required
                    className="w-full p-4 md:p-5 bg-ghost rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-medical font-bold text-navy transition-all placeholder:text-gray-300" 
                  />
                </div>
                
                {/* Mobile: Stacks vertically | Desktop: Side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div>
                        <label className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-gray-800 ml-1 mb-2 block">WhatsApp Number</label>
                        <input 
                          name="phone"
                          type="tel" 
                          placeholder="+91 00000 00000" 
                          required
                          className="w-full p-4 md:p-5 bg-ghost rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-medical font-bold text-navy" 
                        />
                    </div>
                    <div>
                        <label className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-gray-800 ml-1 mb-2 block">Expected NEET Score</label>
                        <input 
                          name="neet"
                          type="number" 
                          placeholder="450" 
                          required
                          className="w-full p-4 md:p-5 bg-ghost rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-medical font-bold text-navy" 
                        />
                    </div>
                </div>

                <div className="flex items-start gap-2">
                  <FaCircleInfo className="mt-0.5 text-sm md:text-base flex-shrink-0" />
                  <label className="text-[8px] md:text-[10px] font-mono tracking-widest">
                    By clicking the submit button, I agree to the Terms of Service and Privacy
                    Policy and consent to receive communications from StethMBBS.
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-medical text-white py-5 md:py-6 rounded-xl md:rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-navy transition-all shadow-lg active:scale-95 group disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Request for CallBack"}
                  {!loading && <HiOutlineArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}