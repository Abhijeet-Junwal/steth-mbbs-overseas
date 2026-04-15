"use client";
import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineCheckCircle, HiOutlineGlobeAlt, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineDocumentText, HiOutlineMapPin, HiOutlineCurrencyRupee } from "react-icons/hi2";

export default function KyrgyzstanMBBSFullContent() {
    const [activeFaq, setActiveFaq] = useState(null);
    
    const universities = [
        { name: "Kyrgyz State Medical Academy (KSMA)", established: "1939", fee: "₹3.20L / Yr", total: "₹19.20L" },
        { name: "Osh State Medical University", established: "1992", fee: "₹2.80L / Yr", total: "₹16.80L" },
        { name: "International School of Medicine (ISM)", established: "2003", fee: "₹3.50L / Yr", total: "₹21.00L" },
        { name: "Jalal-Abad State Medical University", established: "1993", fee: "₹3.00L / Yr", total: "₹18.00L" },
        { name: "Asian Medical Institute", established: "2004", fee: "₹2.50L / Yr", total: "₹15.00L" },
        { name: "Kyrgyz-Russian Slavic University", established: "1993", fee: "₹3.40L / Yr", total: "₹20.40L" },
    ];
    
    const faqs = [
        { q: "Is the degree from Kyrgyzstan valid in India?", a: "Yes, Kyrgyzstan medical degrees are fully recognized by the NMC, WHO, and UNESCO. Indian students are eligible to sit for the NExT/FMGE exam upon graduation to practice in India." },
        { q: "What is the duration of MBBS in Kyrgyzstan?", a: "The course duration is 6 years. It includes 5 years of rigorous academic and clinical training followed by 1 year of mandatory internship, strictly following the NMC 2021 guidelines." },
        { q: "What is the medium of instruction?", a: "The entire 6-year course is conducted in English for international students. However, students are taught basic Kyrgyz/Russian to interact with patients in local hospitals." },
        { q: "Are Indian hostels and food available?", a: "Yes, Kyrgyzstan hosts one of the largest Indian student communities in Central Asia. All top universities have dedicated Indian messes serving Indian food and separate hostels for girls." },
        { q: "What is the minimum eligibility for admission?", a: "A student must have scored at least 50% in PCB (General Category) or 40% (Reserved Category) in 12th standard and must have qualified the NEET-UG exam." }
    ];

    const destinations = [
        { name: "Russia", slug: "russia", flag: "🇷🇺" },
        { name: "Uzbekistan", slug: "uzbekistan", flag: "🇺🇿" },
        { name: "Kazakhstan", slug: "kazakhstan", flag: "🇰🇿" },
        { name: "Georgia", slug: "georgia", flag: "🇬🇪" },
        { name: "Philippines", slug: "philippines", flag: "🇵🇭" },
        { name: "Armenia", slug: "armenia", flag: "🇦🇲" },
        { name: "Nepal", slug: "nepal", flag: "🇳🇵" },
        { name: "India", slug: "india", flag: "🇮🇳" },
    ];

    return (
        <main className="max-w-6xl mx-auto pt-32 pb-20 px-6 font-sans text-gray-800 leading-relaxed overflow-x-hidden">
      
            {/* SECTION 1: MAIN INTRODUCTION */}
            <section className="mb-20">
                <h1 className="text-5xl font-black text-navy mb-10 leading-tight">
                    MBBS in Kyrgyzstan for Indian Students 2026: <span className="text-medical">The Budget Hub</span>
                </h1>
                
                <div className="w-full h-[450px] rounded-[40px] overflow-hidden mb-12 shadow-2xl">
                    <img 
                        src="https://plus.unsplash.com/premium_photo-1697729404559-25e36fc1fa8e?w=1200&auto=format&fit=crop&q=80" 
                        alt="Bishkek Cityscape, Kyrgyzstan" 
                        className="w-full h-full object-cover"
                    />
                </div>

                <p className="mb-4 text-xl text-justify font-medium text-gray-600">
                    <strong>MBBS in Kyrgyzstan</strong> is the most affordable destination for Indian medical aspirants today. Known for its mountainous beauty and historic medical colleges, Kyrgyzstan has become a safe haven for students who seek a quality medical degree at a total package starting from just <strong>₹15 Lakhs</strong>.
                    <br/> 
                    <br/> 
                    Kyrgyzstan’s top government medical universities are recognized by <strong>WHO, NMC, and FAIMER</strong>. The education system is highly standardized, and the curriculum focuses heavily on preparing students for global licensing exams, especially the Indian FMGE/NExT.
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
                        <tbody className="divide-y divide-gray-100 font-bold">
                            {[
                                { label: "Course Duration", value: "6 Years (Incl. Internship)" },
                                { label: "Degree Awarded", value: "MD Physician (Equivalent to MBBS)" },
                                { label: "Medium of Instruction", value: "100% English Medium" },
                                { label: "NEET Requirement", value: "Mandatory Qualified Status" },
                                { label: "Min. PCB %", value: "50% (General) / 40% (SC/ST/OBC)" },
                                { label: "Average Tuition Fee", value: "₹2.5L to ₹3.5L Per Year" },
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
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Why Choose Kyrgyzstan?</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Lowest Fee Structure", text: "MBBS in Kyrgyzstan offers the lowest tuition fees across the globe for Indian students." },
                        { title: "MCI/NMC Coaching", text: "Universities have dedicated departments focused on helping Indian students clear the FMGE exam." },
                        { title: "Direct Admission", text: "No separate entrance exam or English language test (like IELTS) is required for admission." },
                        { title: "Indian Community", text: "Home to over 15,000+ Indian students, creating a home-away-from-home environment." },
                        { title: "Easy Visa Process", text: "Transparent and fast documentation with 100% visa success rates for qualified students." },
                        { title: "Global Recognition", text: "Degrees recognized in India, UK, USA, and across Europe." },
                    ].map((adv, i) => (
                        <div key={i} className="group p-8 bg-white border border-gray-100 rounded-[40px] hover:border-medical/30 hover:shadow-2xl transition-all duration-500">
                            <h4 className="text-xl font-bold text-navy mb-3 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-medical shrink-0"></span>
                                {adv.title}
                            </h4>
                            <p className="text-gray-500 leading-relaxed text-sm">{adv.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 4: DOCUMENTS REQUIRED */}
            <section className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Required Documents</h2>
                </div>
                <div className="bg-navy rounded-[48px] p-10 md:p-16 text-white relative grid md:grid-cols-2 gap-12 shadow-2xl">
                    <div className="absolute -right-10 -bottom-10 opacity-[0.03] text-[300px] text-white rotate-17 pointer-events-none">
                        <HiOutlineDocumentText />
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-medical font-black uppercase text-xs tracking-[0.2em] mb-4">Academic Checklist</h4>
                        {[ "10th Marksheet (Original)", "12th Marksheet (Original)", "NEET Scorecard (Current Year)", "Migration Certificate" ].map((doc, i) => (
                            <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-3">
                                <HiOutlineCheckCircle className="text-medical text-xl" />
                                <span className="text-sm font-medium">{doc}</span>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-medical font-black uppercase text-xs tracking-[0.2em] mb-4">Legal & Identity</h4>
                        {[ "Original Passport (Valid for 2 years)", "12-15 Passport Photos (White BG)", "Medical Health Report", "HIV Negative Certificate" ].map((doc, i) => (
                            <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-3">
                                <HiOutlineCheckCircle className="text-medical text-xl" />
                                <span className="text-sm font-medium">{doc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: LIFESTYLE & CLIMATE */}
            <section className="mb-20 grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                    <div className="p-10 bg-ghost rounded-[40px] space-y-4">
                        <h4 className="text-xl font-bold text-navy flex items-center gap-3">
                            <HiOutlineMapPin className="text-medical" /> Life in Bishkek
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed text-justify">
                            Bishkek is a vibrant and peaceful city. The weather is similar to North India, with pleasant summers and snowy winters. The city is very safe, and the presence of a huge Indian community ensures all Indian food and grocery items are readily available.
                        </p>
                    </div>
                    <div className="p-10 bg-ghost rounded-[40px] space-y-4 text-justify">
                        <h4 className="text-xl font-bold text-navy flex items-center gap-3">
                            <HiOutlineCurrencyRupee className="text-medical" /> Low Living Costs
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The local currency is <strong>Kyrgyzstani Som (KGS)</strong>. Monthly food and personal expenses stay between ₹8,000 to ₹12,000. Public transport is highly subsidized and very efficient.
                        </p>
                    </div>
                </div>
                <div className="bg-medical rounded-[40px] p-10 text-white flex flex-col justify-between shadow-xl">
                    <div>
                        <h4 className="text-2xl font-black mb-4 uppercase">Direct Connect</h4>
                        <p className="text-white/80 text-sm leading-relaxed italic">
                            "With only a 3.5-hour flight from Delhi, Kyrgyzstan is the nearest international destination for an MBBS degree outside South Asia."
                        </p>
                    </div>
                    <div className="pt-8 border-t border-white/20 text-center">
                        <p className="text-xl font-bold">Safe & Secure Cities</p>
                    </div>
                </div>
            </section>

            {/* SECTION 6: UNIVERSITY TABLE */}
            <section className="mb-20">
                <h2 className="text-3xl font-black text-navy mb-8 border-l-8 border-medical pl-6 uppercase">Fees of Top Universities (2026)</h2>
                <div className="overflow-x-auto shadow-2xl rounded-3xl border border-gray-100">
                    <table className="w-full border-collapse">
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
                                <tr key={idx} className="hover:bg-ghost transition-colors font-medium">
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

            {/* SECTION 13: POPULAR DESTINATIONS GRID */}
            <section className="mb-20 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-navy mb-4">
                        Popular MBBS Destination For Indian Students
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[
                        { name: "Russia", img: "https://plus.unsplash.com/premium_photo-1697729923597-13ac2cce0ab7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", slug: "russia" },
                        { name: "Uzbekistan", img: "https://images.unsplash.com/photo-1664602078796-68ee76b3fc59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXpiZWtpc3RhbnxlbnwwfDB8MHx8fDA%3D", slug: "uzbekistan" },
                        { name: "Kazakhstan", img: "https://images.unsplash.com/photo-1666975823342-3b755b3784d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2F6YWtoc3RhbnxlbnwwfDB8MHx8fDA%3D", slug: "kazakhstan" },
                        { name: "India", img: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwwfDB8fHww", slug: "india" },
                        { name: "Nepal", img: "https://images.unsplash.com/photo-1623492701360-fb4a1205c789?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5lcGFsfGVufDB8MHwwfHx8MA%3D%3D", slug: "nepal" },
                        { name: "Philippines", img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbGlwcGluZXN8ZW58MHwwfDB8fHww", slug: "philippines" },
                        { name: "Georgia", img: "https://images.unsplash.com/photo-1596276614984-a916480dc736?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxnZW9yZ2lhfGVufDB8MHwwfHx8MA%3D%3D", slug: "georgia" },
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

            {/* SECTION 8: FAQ */}
            <section className="mb-20 max-w-4xl mx-auto">
                <h2 className="text-4xl font-black text-navy mb-12 text-center uppercase tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} 
                            className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md"
                            onMouseEnter={() => setActiveFaq(index)}
                            onMouseLeave={() => setActiveFaq(null)}
                        >
                            <button className="w-full flex items-center justify-between p-8 text-left bg-white">
                                <span className="text-lg font-bold text-navy pr-4">{faq.q}</span>
                                <HiOutlineChevronDown className={`text-medical text-2xl transition-transform duration-300 shrink-0 ${activeFaq === index ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`transition-all duration-300 overflow-hidden ${activeFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="p-8 pt-0 text-gray-500 text-md border-t border-gray-50 bg-white leading-relaxed">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 9: CTA */}
            <section className="bg-medical p-16 rounded-[60px] text-center text-white shadow-xl">
                <h2 className="text-4xl font-black mb-8 leading-tight">Start Your Global Medical Career at Lowest Cost</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-navy text-white px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all">CONSULT AN EXPERT</button>
                    <button className="bg-white text-navy px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all uppercase">GET BROCHURE</button>
                </div>
            </section>
        </main>
    );
}