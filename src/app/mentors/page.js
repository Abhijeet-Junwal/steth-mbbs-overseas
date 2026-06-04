"use client";
import React from 'react';
import Image from 'next/image';
import { HiOutlineEnvelope, HiOutlineAcademicCap, HiOutlineCheck, HiOutlineBriefcase } from "react-icons/hi2";

export default function MentorsPage() {
  const mentors = [
    {
      name: "Dr. Arun Swami",
      role: "Chief Medical Advisor & Strategic Mentor",
      qualification: "MBBS, MS (Surgical Specialization)",
      experience: "Ex-Assistant Professor & Premier Clinical Institutional Consultant",
      bio: "Dr. Arun Swami is the elite cornerstone of the advisory board at Steth MBBS Overseas. A veteran clinician and former Assistant Professor, his medical career spans decades of intricate surgical practice and high-level medical pedagogy. Dr. Swami monitors the academic viability, clinical training safety frameworks, and global rankings of international state universities before they are recommended to Indian students. His evaluation metrics ensure complete alignment with National Medical Commission (NMC) guidelines and World Health Organization (WHO) benchmarks, guaranteeing that students don't just secure degrees, but transform into top-tier global medical practitioners.",
      impact: "Oversees macro-level university screening, clinical research integration, and long-term residency blueprints for our students across global destinations.",
      imagePath: "/Arun.PNG", // Place his photo in public/arun.jpg
      badge: "Institutional Board Chair",
      icon: <HiOutlineAcademicCap />
    },
    {
      name: "Dr. Ritik Swami",
      role: "Director of Global Student Counseling & Admissions",
      qualification: "MBBS, Medical Education Strategist",
      experience: "7+ Years in Foreign University Alignment & International Logistics",
      bio: "Dr. Ritik Swami brings a deep, contemporary understanding of foreign medical curriculum layouts, international student welfare laws, and on-ground campus logistics. As an MBBS graduate, he approaches student counseling from a peer perspective rather than a transactional one. Dr. Ritik works directly on the front lines, matching an aspirant's NEET score, raw budget, and clinical preferences to the perfect geographic hub. He maps out the comprehensive verification processing, handles legal transcripts, coordinates directly with the ministries of foreign destinations, and leads the dedicated on-ground teams that support our Indian student communities abroad from day one to graduation.",
      impact: "Leads the core medical counseling workflow, document parsing, eligibility matching, and direct international admission execution.",
      imagePath: "/ritik.JPG", // Place his photo in public/ritik.jpg
      badge: "Lead Admission Architect",
      icon: <HiOutlineCheck />
    },
    {
      name: "Mr. Shashank Kumar Jain",
      role: "Head of Academic Foundations & Pre-Med Training",
      qualification: "M.Sc (Zoology), B.Ed | Jiwaji University",
      experience: "22+ Years of Elite CBSE Senior Secondary & Medical Entrance Prep",
      bio: "Mr. Shashank Kumar Jain is a legendary figure in biology education and academic leadership with over 22 years of elite experience in senior secondary CBSE education and pre-medical entrance test preparation. As a former Head of Department, CBSE Class XII Board Deputy Superintendent, and appointed Head Examiner for Biology evaluation, his grasp over conceptual biological sciences is unmatched. At Steth MBBS Overseas, Mr. Jain structures the foundational academic prep modules in Botany and Zoology. He bridges the gap between Indian high school frameworks and international pre-med standards, preparing students deeply to tackle demanding foreign medical licensing exam standards effortlessly.",
      impact: "Heads the pre-departure academic preparation layouts, concept-driven biology training systems, and global medical licensing exam adaptability strategies.",
      imagePath: "/shashank.JPG", // Place his photo in public/shashank.jpg
      badge: "22+ Yrs CBSE Head Examiner",
      icon: <HiOutlineBriefcase />
    }
  ];

  return (
    <main className="pt-32 pb-24 bg-white text-[#20282d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-4xl mb-24 text-center md:text-left">
          <h2 className="text-medical font-black tracking-[0.4em] text-[10px] uppercase mb-4">The Advisory Board</h2>
          <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9] text-navy mb-8 tracking-tighter">
            Guided by Doctors. <br /> Backed by <span className="text-medical">Academicians.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            At Steth MBBS Overseas, we eliminate transactional sales pitches. Your entire medical roadmap is monitored and evaluated by fully qualified clinical practitioners and veteran teachers.
          </p>
        </div>

        {/* 3 Person Layout */}
        <div className="space-y-24">
          {mentors.map((mentor, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 p-8 md:p-14 rounded-[60px] bg-ghost border border-gray-50 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-700 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Profile Image Graphic Block */}
              <div className="w-full lg:w-1/3 flex flex-col items-center">
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[50px] overflow-hidden bg-navy shadow-xl group border-4 border-white">
                  <Image 
                    src={mentor.imagePath}
                    alt={mentor.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle dark gradient overlay for badging text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 bg-navy/80 backdrop-blur-md py-2 px-4 rounded-2xl text-center border border-white/10">
                    <span className="text-[10px] font-black tracking-widest text-white uppercase">
                      {mentor.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Core Content Block */}
              <div className="w-full lg:w-2/3 space-y-6">
                <div>
                  <span className="text-xs font-black tracking-widest text-medical uppercase bg-medical/5 px-4 py-1.5 rounded-full inline-block">
                    {mentor.role}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black text-navy mt-4 tracking-tight uppercase">
                    {mentor.name}
                  </h3>
                  <p className="text-xs md:text-sm font-bold text-gray-400 mt-2 tracking-wide uppercase">
                    {mentor.qualification} • <span className="text-medical font-extrabold">{mentor.experience}</span>
                  </p>
                </div>

                <hr className="border-gray-100" />

                <div className="space-y-4">
                  <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
                    {mentor.bio}
                  </p>
                  <div className="bg-ghost border border-gray-100 p-6 rounded-[32px] shadow-sm border-l-4 border-l-medical">
                    <span className="text-medical font-extrabold uppercase tracking-widest text-[10px] block mb-2">Strategic Advisory Focus:</span>
                    <p className="text-navy text-sm font-bold leading-relaxed">{mentor.impact}</p>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <a href ='/cta'>
                    <button className="flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-xl font-black text-[10px] tracking-widest uppercase hover:bg-medical transition-all active:scale-95 shadow-lg">
                      {mentor.icon} Book Advisory Consultation
                    </button> 
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Business Engagement Callout */}
        <div className="mt-32 bg-navy text-white rounded-[80px] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-medical opacity-10 rounded-full blur-[140px]"></div>
          <div className="max-w-3xl relative z-10 space-y-6">
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase">
              Schedule a personalized profile evaluation slot.
            </h3>
            <p className="text-white/60 text-sm md:text-lg font-medium leading-relaxed max-w-2xl">
              Don't leave your medical career to luck or slick salesmen. Get a complete, medical-grade breakdown of passing percentages, fee architectures, and clinical exposure options directly from our mentors.
            </p>
            <div className="pt-4">
              <a href='/cta'>
                <button className="bg-medical text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-xl">
                  Initiate Expert Consultation Flow
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}