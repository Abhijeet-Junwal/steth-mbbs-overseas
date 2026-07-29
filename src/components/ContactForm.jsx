"use client";
import { useState } from 'react';
import { HiOutlineArrowRight } from "react-icons/hi2";
import { FaCircleInfo } from "react-icons/fa6";

export default function ContactForm({ onSuccess }) {
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
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error(err);
      alert("Error sending request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
      <div>
        <label className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-gray-800 ml-1 mb-2 block">Full Name</label>
        <input 
          name="fullName"
          type="text" 
          placeholder="Enter your full name" 
          required
          className="w-full p-4 md:p-5 bg-ghost rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-medical font-bold text-navy transition-all placeholder:text-gray-400" 
        />
      </div>
      
      {/* Mobile: Stacks vertically | Desktop: Side-by-side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <div>
              <label className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-gray-800 ml-1 mb-2 block">WhatsApp Number</label>
              <input 
                name="phone"
                type="tel" 
                placeholder="Enter 10-digit WhatsApp number" 
                required
                className="w-full p-4 md:p-5 bg-ghost rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-medical font-bold text-navy transition-all placeholder:text-gray-400" 
              />
          </div>
          <div>
              <label className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-gray-800 ml-1 mb-2 block">NEET Score</label>
              <input 
                name="neet"
                type="number" 
                placeholder="Enter NEET score (e.g. 450)" 
                required
                className="w-full p-4 md:p-5 bg-ghost rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-medical font-bold text-navy transition-all placeholder:text-gray-400" 
              />
          </div>
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input 
          type="checkbox" 
          id="termsConsent"
          name="termsConsent"
          required 
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-medical focus:ring-medical accent-medical cursor-pointer flex-shrink-0"
        />
        <label htmlFor="termsConsent" className="text-[9px] md:text-[11px] text-gray-600 leading-tight font-medium cursor-pointer select-none">
          I agree to the Terms of Service and Privacy Policy and consent to receive communications from StethMBBS.
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
  );
}
