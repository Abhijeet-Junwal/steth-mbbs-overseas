"use client";
import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineCheckCircle, HiOutlineGlobeAlt, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineDocumentText, HiOutlineMapPin, HiOutlineCurrencyRupee } from "react-icons/hi2";

export default function PhilippinesMBBSFullContent() {
    const [activeFaq, setActiveFaq] = useState(null);
    
    const universities = [
        { name: "University of Perpetual Help", established: "1975", fee: "₹3.50L / Yr", total: "₹22.00L" },
        { name: "Davao Medical School Foundation", established: "1976", fee: "₹4.20L / Yr", total: "₹25.50L" },
        { name: "UV Gullas College of Medicine", established: "1919", fee: "₹3.20L / Yr", total: "₹20.00L" },
        { name: "Lyceum Northwestern University", established: "1969", fee: "₹3.00L / Yr", total: "₹18.50L" },
        { name: "Southwestern University", established: "1946", fee: "₹3.80L / Yr", total: "₹23.00L" },
        { name: "Our Lady of Fatima University", established: "1967", fee: "₹4.00L / Yr", total: "₹24.00L" },
        { name: "Bicol Christian College of Medicine", established: "1975", fee: "₹3.10L / Yr", total: "₹19.00L" },
        { name: "Manila Central University", established: "1904", fee: "₹4.50L / Yr", total: "₹27.00L" },
        { name: "Cebu Doctors' University", established: "1975", fee: "₹4.30L / Yr", total: "₹26.00L" },
        { name: "Zamboanga Medical School Foundation", established: "1979", fee: "₹3.20L / Yr", total: "₹19.50L" },
    ];
    
    const faqs = [
        { q: "Is the BS-MD course structure valid according to NMC?", a: "Yes, the BS-MD structure in the Philippines is valid. As per NMC FMGL Regulations 2021, Indian students must ensure their MD program is of 54 months duration with a 12-month internship. We guide students to universities that meet these specific timeframes." },
        { q: "What is the NMAT exam in the Philippines?", a: "NMAT (National Medical Admission Test) is a mandatory eligibility exam in the Philippines for entry into the MD (Doctor of Medicine) program. It is a qualifying exam, and we provide guidance for students to clear it easily." },
        { q: "Why is the Philippines known for high FMGE passing rates?", a: "The Philippines follows the American Pattern of Education. The clinical training is highly practical and the disease patterns are very similar to India, which helps students perform exceptionally well in Indian licensing exams." },
        { q: "Is English the medium of instruction?", a: "Yes, the Philippines is the world’s 3rd largest English-speaking nation. 100% of the medical curriculum, hospital interactions, and daily life are in English, eliminating any language barrier." },
        { q: "Can I practice in the USA after MBBS in Philippines?", a: "Absolutely. The Philippines is one of the largest exporters of doctors to the USA. The curriculum is closely aligned with the USMLE syllabus, making it the best route for US-bound medical aspirants." }
    ];

    const destinations = [
        { name: "Russia", slug: "russia", flag: "🇷🇺" },
        { name: "Uzbekistan", slug: "uzbekistan", flag: "🇺🇿" },
        { name: "Kazakhstan", slug: "kazakhstan", flag: "🇰🇿" },
        { name: "Georgia", slug: "georgia", flag: "🇬🇪" },
        { name: "Kyrgyzstan", slug: "kyrgyzstan", flag: "🇰🇬" },
        { name: "Armenia", slug: "armenia", flag: "🇦🇲" },
        { name: "Nepal", slug: "nepal", flag: "🇳🇵" },
        { name: "India", slug: "india", flag: "🇮🇳" },
    ];

    return (
        <main className="max-w-6xl mx-auto pt-32 pb-20 px-6 font-sans text-gray-800 leading-relaxed">
      
            {/* SECTION 1: MAIN INTRODUCTION */}
            <section className="mb-20">
                <h1 className="text-5xl font-black text-navy mb-10 leading-tight">
                    MBBS in Philippines for Indian Students 2026: <span className="text-medical">The American Standard</span>
                </h1>
                
                <div className="w-full h-[450px] rounded-[40px] overflow-hidden mb-12 shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200&auto=format&fit=crop" 
                        alt="Manila, Philippines Skyline" 
                        className="w-full h-full object-cover"
                    />
                </div>

                <p className="mb-4 text-xl text-justify">
                    Study <strong>MBBS in Philippines</strong> is widely regarded as the best choice for students who want a career in the USA or India. 
                    The Philippines medical education system follows the <strong>American Pattern</strong>, which is globally acclaimed for its clinical depth. 
                    Currently, over 10,000 Indian students are enrolled in Philippine medical colleges because of the English-speaking environment 
                    and the high FMGE/NExT success rates.
                    <br/> 
                    <br/> 
                    The degree awarded is <strong>MD (Doctor of Medicine)</strong>, which is recognized by the <strong>NMC, WHO, and ECFMG</strong>. 
                    Since the Philippines is a tropical country, the disease patterns (Malaria, Typhoid, etc.) are identical to India, 
                    providing students with clinical exposure that is directly relevant to Indian medical practice.
                </p>
            </section>

            {/* SECTION 2: QUICK OVERVIEW TABLE */}
            <section className="mb-20">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Quick Information Table</h2>
                </div>
                <div className="overflow-hidden rounded-[32px] border border-gray-100 shadow-xl shadow-navy/5">
                    <table className="w-full bg-amber-200 border-collapse">
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { label: "Course Duration", value: "5.5 to 6 Years (BS + MD)" },
                                { label: "Degree Awarded", value: "MD (Equivalent to MBBS)" },
                                { label: "Medium of Instruction", value: "100% English (Official Language)" },
                                { label: "NEET Requirement", value: "Mandatory Qualified Status" },
                                { label: "NMAT Requirement", value: "Mandatory for MD Phase Entry" },
                                { label: "Eligibility", value: "50% in PCB (General) / 40% (Reserved)" },
                                { label: "Intake Period", value: "September / October" },
                            ].map((item, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-ghost/50" : "bg-white"}>
                                    <td className="p-6 font-bold text-navy border-r border-gray-100 w-1/3">{item.label}</td>
                                    <td className="p-6 text-gray-600 font-medium">{item.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* SECTION 3: ADVANTAGES */}
            <section className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Why Study in the Philippines?</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "English-Speaking Nation", text: "Zero language barriers. Patients, teachers, and locals all speak fluent English." },
                        { title: "Highest FMGE Success", text: "Consistent records of the highest passing percentage in the FMGE (MCI Screening Test)." },
                        { title: "US-Based Curriculum", text: "The MD degree is modeled after the USA system, making USMLE preparation seamless." },
                        { title: "Tropical Disease Pattern", text: "Clinical experience is similar to India, preparing you better for Indian hospitals." },
                        { title: "World-Class Clinicals", text: "Affiliations with massive tertiary care government and private hospitals." },
                        { title: "No Donation", text: "Transparent admission process with affordable fees and no capitation fees." },
                    ].map((adv, i) => (
                        <div key={i} className="group p-8 bg-white border border-gray-100 rounded-[40px] hover:border-medical/30 hover:shadow-2xl transition-all duration-500">
                            <h4 className="text-xl font-bold text-navy mb-3 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-medical"></span>
                                {adv.title}
                            </h4>
                            <p className="text-gray-500 leading-relaxed text-sm">{adv.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 4: DOCUMENT CHECKLIST */}
            <section className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Documents Required</h2>
                </div>
                <div className="bg-navy rounded-[48px] p-10 md:p-16 text-white relative grid md:grid-cols-2 gap-12">
                    <div className="absolute -right-10 -bottom-10 opacity-[0.03] text-[300px] text-white rotate-17 pointer-events-none">
                        <HiOutlineDocumentText />
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-medical font-black uppercase text-xs tracking-[0.2em] mb-4">Educational Records</h4>
                        {[ 
                            "10th & 12th Marksheet (Apostilled)", 
                            "NEET Scorecard (Qualified status)", 
                            "Transfer/Migration Certificate",
                            "University Invitation Letter"
                        ].map((doc, i) => (
                            <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-3">
                                <HiOutlineCheckCircle className="text-medical text-xl" />
                                <span className="text-sm">{doc}</span>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-medical font-black uppercase text-xs tracking-[0.2em] mb-4">Personal Records</h4>
                        {[ 
                            "Valid Passport ", 
                            "10 Passport Photos (White BG)", 
                            "Personal History Statement (PHS)", 
                            "Police Clearance (PCC)" 
                        ].map((doc, i) => (
                            <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-3">
                                <HiOutlineCheckCircle className="text-medical text-xl" />
                                <span className="text-sm">{doc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: GEOGRAPHY & CULTURE */}
            <section className="mb-20 grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                    <div className="p-10 bg-ghost rounded-[40px] space-y-4 text-justify">
                        <h4 className="text-xl font-bold text-navy flex items-center gap-3">
                            <HiOutlineMapPin className="text-medical" /> Climate & Environment
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The Philippines has a tropical maritime climate. It is usually hot and humid. There are three seasons: the hot dry season from March to May; the rainy season from June to November; and the cool dry season from December to February. This weather is perfect for Indian students as it feels like home.
                        </p>
                    </div>
                    <div className="p-10 bg-ghost rounded-[40px] space-y-4">
                        <h4 className="text-xl font-bold text-navy flex items-center gap-3">
                            <HiOutlineCurrencyRupee className="text-medical" /> Living Costs
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The local currency is the <strong>Philippine Peso (PHP)</strong>. 1 PHP is approx ₹1.5. Living expenses are very manageable, ranging from ₹12,000 to ₹18,000 per month including food and accommodation.
                        </p>
                    </div>
                </div>
                <div className="bg-medical rounded-[40px] p-10 text-white flex flex-col justify-between shadow-lg">
                    <div>
                        <h4 className="text-2xl font-black mb-4 uppercase">Direct Connect</h4>
                        <p className="text-white/80 text-sm leading-relaxed italic">
                            "The Philippines is known as the pearl of the orient seas. It's a country where Indian students find it easiest to merge into the local culture."
                        </p>
                    </div>
                    <div className="pt-8 border-t border-white/20">
                        <p className="text-xs uppercase font-bold tracking-widest opacity-60 mb-2">Main Language</p>
                        <p className="text-xl font-bold">English & Tagalog</p>
                    </div>
                </div>
            </section>

            {/* SECTION 6: ELIGIBILITY */}
            <section className="mb-20 bg-navy rounded-[60px] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                    <h2 className="text-3xl font-display font-black mb-8 uppercase tracking-tighter text-medical">Admission Eligibility</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                        {[
                            { label: "Age", val: "Minimum 17 years by 31st December of admission year." },
                            { label: "12th Grade", val: "50% in PCB for General, 40% for Reserved categories." },
                            { label: "NEET Exam", val: "Mandatory NEET-UG qualified status as per NMC norms." },
                        ].map((elig, i) => (
                            <div key={i} className="p-8 bg-white/5 backdrop-blur-md rounded-[32px] border border-white/10">
                                <h4 className="text-medical font-black uppercase text-xs tracking-widest mb-4">{elig.label}</h4>
                                <p className="text-sm leading-relaxed text-white/80">{elig.val}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-medical/10 blur-[100px] -mr-20 -mt-20"></div>
            </section>

            {/* SECTION 7: ACADEMIC PHASES */}
            <section className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Academic Phases (BS-MD)</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-10 bg-ghost rounded-[40px] border-l-8 border-medical">
                        <span className="text-xs font-black text-medical uppercase tracking-widest mb-2 block">Phase 1</span>
                        <h4 className="text-2xl font-black text-navy mb-4">BS Program (Pre-Med)</h4>
                        <p className="text-gray-500 text-sm leading-relaxed italic">Duration: 1.5 - 2 Years</p>
                        <p className="text-gray-600 text-sm mt-4">Focuses on building foundations in Biology, Chemistry, and Psychology. After this phase, students appear for the NMAT to enter the MD program.</p>
                    </div>
                    <div className="p-10 bg-ghost rounded-[40px] border-l-8 border-navy">
                        <span className="text-xs font-black text-navy uppercase tracking-widest mb-2 block">Phase 2</span>
                        <h4 className="text-2xl font-black text-navy mb-4">MD Program (MBBS)</h4>
                        <p className="text-gray-500 text-sm leading-relaxed italic">Duration: 4 Years</p>
                        <p className="text-gray-600 text-sm mt-4">The core medical education includes 3 years of academic training and 1 year of clinical clerkship in hospitals.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 8: UNIVERSITY TABLE */}
            <section className="mb-20">
                <h2 className="text-3xl font-black text-navy mb-8 border-l-8 border-medical pl-6 uppercase tracking-tight">Top Universities in Philippines</h2>
                <div className="overflow-x-auto shadow-2xl rounded-3xl border border-gray-100">
                    <table className="w-full border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-navy text-white text-left text-sm uppercase tracking-widest">
                                <th className="p-6">University Name</th>
                                <th className="p-6 text-center">Est.</th>
                                <th className="p-6">Annual Tuition</th>
                                <th className="p-6">Total Package</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {universities.map((uni, idx) => (
                                <tr key={idx} className="hover:bg-ghost transition-colors">
                                    <td className="p-6 font-bold text-navy">{uni.name}</td>
                                    <td className="p-6 text-gray-500 text-center">{uni.established}</td>
                                    <td className="p-6 text-medical font-black">{uni.fee}</td>
                                    <td className="p-6 font-bold">{uni.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* SECTION 9: POPULAR DESTINATIONS GRID */}
            <section className="mb-20 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-navy mb-4">
                        Popular MBBS Destination For Indian Students
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[
                        { name: "Russia", img: "https://plus.unsplash.com/premium_photo-1697729923597-13ac2cce0ab7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", slug: "russia" },
                        { name: "Georgia", img: "https://images.unsplash.com/photo-1596276614984-a916480dc736?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxnZW9yZ2lhfGVufDB8MHwwfHx8MA%3D%3D", slug: "georgia" },
                        { name: "Kazakhstan", img: "https://images.unsplash.com/photo-1666975823342-3b755b3784d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2F6YWtoc3RhbnxlbnwwfDB8MHx8fDA%3D", slug: "kazakhstan" },
                        { name: "Uzbekistan", img: "https://images.unsplash.com/photo-1664602078796-68ee76b3fc59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXpiZWtpc3RhbnxlbnwwfDB8MHx8fDA%3D", slug: "uzbekistan" },
                        { name: "Nepal", img: "https://images.unsplash.com/photo-1623492701360-fb4a1205c789?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5lcGFsfGVufDB8MHwwfHx8MA%3D%3D", slug: "nepal" },
                        { name: "India", img: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwwfDB8fHww", slug: "india" },
                        { name: "Kyrgyzstan", img: "https://plus.unsplash.com/premium_photo-1697729404559-25e36fc1fa8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxreXJneXpzdGFufGVufDB8MHwwfHx8MA%3D%3D", slug: "kyrgyzstan" },
                        { name: "Armenia", img: "https://images.unsplash.com/photo-1536645152842-6b5fbacf1153?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFybWVuaWF8ZW58MHwwfDB8fHww", slug: "armenia" },
                    ].map((item, i) => (
                        <a 
                            href={`/countries/${item.slug}`} 
                            key={i} 
                            className="group bg-white rounded-xl w-full overflow-hidden border border-gray-100 hover:border-medical/40 transition-all duration-500 shadow-sm "
                        >
                            {/* Image Wrapper */}
                            <div className="h-30 overflow-hidden relative">
                                <img 
                                    src={item.img} 
                                    alt={`MBBS in ${item.name}`} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-3">
                                <h4 className="text-xl font-display font-bold text-navy mb-2  transition-colors">
                                    {item.name}
                                </h4>
                                    
                                    <div className="flex items-center gap-1 text-medical  text-xs font-mono tracking-widest">
                                        Explore <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
                                    </div>
                                
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* SECTION 10: FAQ */}
            <section className="mb-20 max-w-4xl mx-auto">
                <h2 className="text-4xl font-black text-navy mb-12 text-center uppercase tracking-tighter">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} 
                            className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md"
                            onMouseEnter={() => setActiveFaq(index)}
                            onMouseLeave={() => setActiveFaq(null)}
                        >
                            <button className="w-full flex items-center justify-between p-8 text-left bg-white">
                                <span className="text-lg font-bold text-navy">{faq.q}</span>
                                <HiOutlineChevronDown className={`text-medical text-2xl transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`transition-all duration-300 overflow-hidden ${activeFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="p-8 pt-0 text-gray-500 text-md border-t border-gray-50 bg-white">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 11: CTA */}
            <section className="bg-medical p-16 rounded-[60px] text-center text-white shadow-xl">
                <h2 className="text-4xl font-black mb-8 leading-tight uppercase tracking-tighter">Start Your MD Program in Philippines 2026</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href='/cta'>
                        <button className="bg-navy text-white px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all">
                            FREE CONSULTATION
                        </button>
                    </a>
                    <button className="bg-white text-navy px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all">
                        DOWNLOAD BROCHURE
                    </button>
                </div>
            </section>

        </main>
    );
}