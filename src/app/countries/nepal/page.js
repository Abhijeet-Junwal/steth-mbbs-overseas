"use client";
import React, { useState } from 'react';
import { 
  HiOutlineChevronDown, HiOutlineCheckCircle, HiOutlineGlobeAlt, 
  HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineDocumentText,
  HiOutlineAcademicCap, HiOutlineCurrencyRupee, HiOutlineMapPin 
} from "react-icons/hi2";

export default function NepalMBBSFullContent() {
    const [activeFaq, setActiveFaq] = useState(null);
    
    const universities = [
        { name: "B.P. Koirala Institute of Health Sciences", established: "1993", fee: "₹61.00L", total: "₹61.00L" },
        { name: "Institute of Medicine (IOM), TU", established: "1972", fee: "₹63.75L", total: "₹63.75L" },
        { name: "Kathmandu University (KUSMS)", established: "1994", fee: "₹58.00L", total: "₹58.00L" },
        { name: "Manipal College of Medical Sciences", established: "1994", fee: "₹62.00L", total: "₹62.00L" },
        { name: "Kathmandu Medical College (KMC)", established: "1997", fee: "₹54.00L", total: "₹54.00L" },
        { name: "Nepal Medical College (NMC)", established: "1997", fee: "₹55.00L", total: "₹55.00L" },
        { name: "KIST Medical College", established: "2006", fee: "₹48.00L", total: "₹48.00L" },
        { name: "Universal College of Medical Sciences", established: "1998", fee: "₹58.00L", total: "₹58.00L" },
        { name: "Birat Medical College", established: "2014", fee: "₹50.00L", total: "₹50.00L" },
        { name: "Janaki Medical College", established: "2003", fee: "₹46.00L", total: "₹46.00L" },
    ];
    
    const faqs = [
        { q: "Is a visa required for Indian students to study in Nepal?", a: "No, Indian citizens do not require a visa or a passport to enter Nepal. An Aadhaar Card or Voter ID is sufficient for travel and admission." },
        { q: "How similar is the Nepal MBBS curriculum to India?", a: "The curriculum is almost 95% identical to the Indian medical system (NMC). Textbooks, teaching methods, and clinical patterns are exactly the same, making FMGE/NExT preparation very easy." },
        { q: "Is the degree from Nepal valid in India?", a: "Yes, MBBS degrees from Nepal are recognized by the NMC, WHO, and UNESCO. Graduates are eligible to appear for the NExT/FMGE exam to practice in India." },
        { q: "What is the medium of instruction?", a: "The entire course is conducted in English. Since most Nepalese people understand Hindi and English, communication during clinical rotations is very smooth for Indian students." },
        { q: "What is the FMGE passing percentage for Nepal?", a: "Nepal consistently holds one of the highest FMGE passing rates (approx. 29-30%), outperforming many European and Central Asian countries." }
    ];

    const destinations = [
        { name: "Russia", slug: "russia", flag: "🇷🇺" },
        { name: "Uzbekistan", slug: "uzbekistan", flag: "🇺🇿" },
        { name: "Kazakhstan", slug: "kazakhstan", flag: "🇰🇿" },
        { name: "Georgia", slug: "georgia", flag: "🇬🇪" },
        { name: "Philippines", slug: "philippines", flag: "🇵🇭" },
        { name: "Kyrgyzstan", slug: "kyrgyzstan", flag: "🇰🇬" },
        { name: "Armenia", slug: "armenia", flag: "🇦🇲" },
        { name: "India", slug: "india", flag: "🇮🇳" },
    ];

    return (
        <main className="max-w-6xl mx-auto pt-32 pb-20 px-6 font-sans text-gray-800 leading-relaxed overflow-x-hidden">
      
            {/* SECTION 1: MAIN INTRODUCTION */}
            <section className="mb-20">
                <h1 className="text-5xl font-black text-navy mb-10 leading-tight">
                    MBBS in Nepal for Indian Students 2026: <span className="text-medical">The Perfect Alternative</span>
                </h1>
                
                <div className="w-full h-[450px] rounded-[40px] overflow-hidden mb-12 shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1611516491426-03025e6043c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmVwYWx8ZW58MHx8MHx8fDA%3D" 
                        alt="Kathmandu Valley, Nepal" 
                        className="w-full h-full object-cover"
                    />
                </div>

                <p className="mb-4 text-xl text-justify font-medium text-gray-600">
                    <strong>MBBS in Nepal</strong> is the most sought-after choice for Indian students who want an international degree with a "local" feel. With its proximity to India and a curriculum that mirrors the <strong>NMC standards</strong>, Nepal offers world-class medical training without the need for a visa or long-haul flights.
                    <br/> 
                    <br/> 
                    Top-tier institutes like <strong>BP Koirala Institute</strong> and <strong>Tribhuvan University</strong> are legendary for their clinical patient load and high FMGE passing percentages. The degree (MBBS) is recognized globally by <strong>NMC, WHO, and ECFMG</strong>.
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
                                { label: "Course Duration", value: "5.5 Years (4.5 Years + 1 Year Internship)" },
                                { label: "Degree Awarded", value: "MBBS (Equivalent to Indian Degree)" },
                                { label: "Medium of Instruction", value: "100% English Medium" },
                                { label: "NEET Requirement", value: "Mandatory Qualified Status" },
                                { label: "Passport / Visa", value: "Not Required for Indian Citizens" },
                                { label: "Average Tuition Fee", value: "₹45L to ₹65L (Total Package)" },
                                { label: "Intake Period", value: "September" },
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
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Why Choose Nepal?</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Identical Curriculum", text: "Follows the same textbooks and clinical patterns as the Indian medical system." },
                        { title: "High FMGE Success", text: "Nepal has one of the highest FMGE passing percentages among all abroad destinations." },
                        { title: "No Visa/Passport", text: "Indian students can travel via road or flight without any international travel restrictions." },
                        { title: "Indian Food & Culture", text: "Food, festivals, and cultural habits are 99% similar to India, ensuring zero culture shock." },
                        { title: "English & Hindi Flow", text: "Language is never a barrier in hospitals; doctors and patients understand Hindi/English." },
                        { title: "Top Patient Load", text: "Government and private hospitals in Nepal offer massive patient footfall for clinical practice." },
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

            {/* SECTION: NMC COMPLIANCE CHECKLIST */}
            <section className="mb-20 border-2 border-medical/20 rounded-[48px] p-10 md:p-16 relative overflow-hidden">
                <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter mb-8">NMC Compliance 2026</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { t: "Duration", d: "54 Months of core medical study + 12 Months Internship." },
                        { t: "Medium", d: "100% English medium verified as per NMC guidelines." },
                        { t: "Validity", d: "Listed in WDOMS and recognized by the National Medical Commission." },
                        { t: "License", d: "Eligible for Nepal Medical Council licensing, meeting NMC requirements." }
                    ].map((check, i) => (
                        <div key={i} className="flex gap-4 p-6 bg-ghost/50 rounded-3xl">
                            <HiOutlineCheckCircle className="text-medical text-3xl shrink-0" />
                            <div>
                                <h5 className="font-bold text-navy">{check.t}</h5>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{check.d}</p>
                            </div>
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
                <div className="bg-navy rounded-[48px] p-10 md:p-16 text-white relative grid md:grid-cols-2 gap-12 shadow-2xl overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 opacity-[0.03] text-[300px] text-white rotate-17 pointer-events-none">
                        <HiOutlineDocumentText />
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-medical font-black uppercase text-xs tracking-[0.2em] mb-4">Academic Checklist</h4>
                        {[ "10th Marksheet", "12th Marksheet (Min 50% in PCB)", "NEET Scorecard (Qualified)", "Character Certificate" ].map((doc, i) => (
                            <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-3">
                                <HiOutlineCheckCircle className="text-medical text-xl" />
                                <span className="text-sm font-medium">{doc}</span>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-medical font-black uppercase text-xs tracking-[0.2em] mb-4">Identity & Other</h4>
                        {[ "Aadhaar Card / Voter ID", "Citizenship Certificate (if any)", "10-15 Passport Size Photos", "Medical Fitness Certificate" ].map((doc, i) => (
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
                            <HiOutlineMapPin className="text-medical" /> Climate in Nepal
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed text-justify">
                            Nepal’s climate varies from subtropical in the south to alpine in the north. Most medical colleges are in the Kathmandu Valley or Terai regions where the weather is pleasant year-round, very similar to Uttar Pradesh, Bihar, or Uttarakhand.
                        </p>
                    </div>
                    <div className="p-10 bg-ghost rounded-[40px] space-y-4 text-justify">
                        <h4 className="text-xl font-bold text-navy flex items-center gap-3">
                            <HiOutlineCurrencyRupee className="text-medical" /> Currency & Expenses
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The currency is <strong>Nepalese Rupee (NPR)</strong>. 1 INR is roughly 1.6 NPR. Monthly living costs (Food + Hostel) are approx. ₹10,000 - ₹15,000. Indian currency is widely accepted in local markets.
                        </p>
                    </div>
                </div>
                <div className="bg-medical rounded-[40px] p-10 text-white flex flex-col justify-between shadow-xl">
                    <div>
                        <h4 className="text-2xl font-black mb-4 uppercase">Cultural Bridge</h4>
                        <p className="text-white/80 text-sm leading-relaxed italic">
                            "With identical food habits and similar languages, Nepal is the only country where Indian students never feel like they are away from home."
                        </p>
                    </div>
                    <div className="pt-8 border-t border-white/20 text-center">
                        <p className="text-xl font-bold">Safe & Welcoming Environment</p>
                    </div>
                </div>
            </section>

            {/* SECTION: DETAILED COST OF LIVING */}
            <section className="mb-20">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Living Expenses in Nepal (Monthly)</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: "Accommodation", price: "₹4,000 - ₹8,000", detail: "University Hostels" },
                        { label: "Food / Mess", price: "₹6,000 - ₹9,000", detail: "Indian/Nepalese Cuisine" },
                        { label: "Transport", price: "₹1,000 - ₹1,500", detail: "Local Commute" },
                        { label: "Misc", price: "₹2,000 - ₹3,000", detail: "Books & Personal" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-lg group hover:border-medical/30 transition-all">
                            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-2">{item.label}</p>
                            <p className="text-2xl font-black text-navy">{item.price}</p>
                            <p className="text-[10px] text-medical font-bold mt-2 uppercase">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION: CLINICAL EXPOSURE & HOSPITALS */}
            <section className="mb-20 bg-navy rounded-[60px] p-10 md:p-16 text-white relative overflow-hidden">
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-display font-black mb-6 uppercase text-medical">Clinical Training & Patient Load</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Nepal offers some of the best clinical exposure for Indian students. Since the disease patterns (Malaria, Typhoid, Respiratory issues) are identical to India, the training is 100% applicable to Indian practice.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <HiOutlineShieldCheck className="text-medical text-2xl" />
                                <span>Affiliations with 750+ Bed Tertiary Hospitals</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiOutlineShieldCheck className="text-medical text-2xl" />
                                <span>Hands-on patient interaction from 3rd Year</span>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center">
                            <p className="text-3xl font-black text-medical">30%+</p>
                            <p className="text-[10px] uppercase font-bold tracking-widest mt-1">Avg. FMGE Pass Rate</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center">
                            <p className="text-3xl font-black text-medical">Identical</p>
                            <p className="text-[10px] uppercase font-bold tracking-widest mt-1">Disease Pattern</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: ACADEMIC SYLLABUS BREAKDOWN */}
            <section className="mb-20">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Academic Syllabus (5.5 Years)</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { year: "Year 1 & 2", phase: "Pre-Clinical", sub: "Integrated Basic Medical Science, Anatomy, Physiology, Biochemistry, Community Medicine." },
                        { year: "Year 3", phase: "Para-Clinical", sub: "Pharmacology, Pathology, Microbiology, Forensic Medicine, Clinical Exposure." },
                        { year: "Year 4 & 5", phase: "Clinical Phase", sub: "Internal Medicine, Surgery, Pediatrics, OBG, ENT, Ophthalmology, Psychiatry." },
                        { year: "Final Year", phase: "Internship", sub: "12 Months of Compulsory Rotatory Internship in University-affiliated Teaching Hospitals." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-ghost border border-gray-100 rounded-[40px] hover:bg-white hover:shadow-xl transition-all group">
                            <span className="text-[10px] font-black text-medical uppercase tracking-widest mb-2 block">{item.phase}</span>
                            <h4 className="text-xl font-bold text-navy mb-3">{item.year}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">{item.sub}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 6: UNIVERSITY TABLE */}
            <section className="mb-20">
                <h2 className="text-3xl font-black text-navy mb-8 border-l-8 border-medical pl-6 uppercase">Fees of Top Medical Colleges (2026)</h2>
                <div className="overflow-x-auto shadow-2xl rounded-3xl border border-gray-100">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-navy text-white text-left text-sm uppercase tracking-widest">
                                <th className="p-6">University Name</th>
                                <th className="p-6 text-center">Est.</th>
                                <th className="p-6">Total Package (INR)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {universities.map((uni, idx) => (
                                <tr key={idx} className="hover:bg-ghost transition-colors font-medium">
                                    <td className="p-6 font-bold text-navy">{uni.name}</td>
                                    <td className="p-6 text-gray-500 text-center">{uni.established}</td>
                                    <td className="p-6 text-medical font-black">{uni.total}</td>
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
                        { name: "Kyrgyzstan", img: "https://plus.unsplash.com/premium_photo-1697729404559-25e36fc1fa8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxreXJneXpzdGFufGVufDB8MHwwfHx8MA%3D%3D", slug: "kyrgyzstan" },
                        { name: "India", img: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwwfDB8fHww", slug: "india" },
                        { name: "Philippines", img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbGlwcGluZXN8ZW58MHwwfDB8fHww", slug: "philippines" },
                        { name: "Georgia", img: "https://images.unsplash.com/photo-1596276614984-a916480dc736?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxnZW9yZ2lhfGVufDB8MHwwfHx8MA%3D%3D", slug: "Georgia" },
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
                <h2 className="text-4xl font-black mb-8 leading-tight">Start Your Global Medical Career Next Door</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-navy text-white px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all">CONSULT AN EXPERT</button>
                    <button className="bg-white text-navy px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all uppercase">GET BROCHURE</button>
                </div>
            </section>
        </main>
    );
}