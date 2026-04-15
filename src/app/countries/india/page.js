"use client";
import React, { useState } from 'react';
import { 
  HiOutlineChevronDown, HiOutlineCheckCircle, HiOutlineGlobeAlt, 
  HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineDocumentText,
  HiOutlineAcademicCap, HiOutlineCurrencyRupee, HiOutlineMapPin 
} from "react-icons/hi2";

export default function IndiaMBBSFullContent() {
    const [activeFaq, setActiveFaq] = useState(null);
    
    const universities = [
        { name: "AIIMS, New Delhi", type: "Govt", fee: "₹1,628 / Yr", cutoff: "705+" },
        { name: "Maulana Azad Medical College (MAMC)", type: "Govt", fee: "₹4,445 / Yr", cutoff: "690+" },
        { name: "Christian Medical College (CMC), Vellore", type: "Pvt", fee: "₹52,830 / Yr", cutoff: "670+" },
        { name: "Kasturba Medical College (KMC), Manipal", type: "Deemed", fee: "₹17.80L / Yr", cutoff: "560+" },
        { name: "St. John's Medical College, Bangalore", type: "Pvt", fee: "₹6.50L / Yr", cutoff: "620+" },
        { name: "King George's Medical University (KGMU)", type: "Govt", fee: "₹54,600 / Yr", cutoff: "675+" },
        { name: "Grant Medical College, Mumbai", type: "Govt", fee: "₹1.15L / Yr", cutoff: "660+" },
        { name: "Amrita School of Medicine, Kochi", type: "Deemed", fee: "₹19.00L / Yr", cutoff: "450+" },
        { name: "Hamdard Institute (HIMSR), Delhi", type: "Deemed", fee: "₹14.00L / Yr", cutoff: "580+" },
        { name: "MS Ramaiah Medical College", type: "Pvt", fee: "₹11.50L / Yr", cutoff: "590+" },
    ];
    
    const faqs = [
        { q: "What is the difference between Deemed and Private Universities?", a: "Private universities are usually affiliated with a State University and follow state fee structures. Deemed universities are independent and managed by the MCC (Medical Counselling Committee) for all-India admissions with their own fee structures." },
        { q: "Is management quota legal in India?", a: "Yes, Management and NRI quotas are legal seats within private and deemed medical colleges. However, admission is only possible if the student has qualified for the NEET-UG exam." },
        { q: "How many total MBBS seats are available in India in 2026?", a: "As of early 2026, India has approximately 1,12,000+ MBBS seats across 700+ medical colleges, with nearly 50% of seats in government institutions." },
        { q: "What is the NExT exam?", a: "The National Exit Test (NExT) is the upcoming common final year exam for all MBBS students in India. It will serve as a licentiate exam for practice and a PG entrance exam, replacing NEET PG." },
        { q: "Can I get a scholarship for MBBS in India?", a: "Government colleges have very low fees. For private colleges, various state-specific schemes (like Post-Matric) and minority scholarships are available for deserving students." }
    ];

    const destinations = [
        { name: "Russia", slug: "russia", flag: "🇷🇺" },
        { name: "Uzbekistan", slug: "uzbekistan", flag: "🇺🇿" },
        { name: "Kazakhstan", slug: "kazakhstan", flag: "🇰🇿" },
        { name: "Georgia", slug: "georgia", flag: "🇬🇪" },
        { name: "Philippines", slug: "philippines", flag: "🇵🇭" },
        { name: "Kyrgyzstan", slug: "kyrgyzstan", flag: "🇰🇬" },
        { name: "Nepal", slug: "nepal", flag: "🇳🇵" },
        { name: "Armenia", slug: "armenia", flag: "🇦🇲" },
    ];

    return (
        <main className="w-full font-sans text-gray-800 leading-relaxed overflow-x-hidden bg-white">
            {/* HERO WRAPPER */}
            <div className="relative w-full">
            
            {/* 1. THE BACKGROUND CURTAIN - Forced to the top layer but behind content */}
            <div 
                className="absolute inset-0 h-[600px] w-full" 
                style={{ 
                    backgroundColor: '#1B365D', // Forced Slate-100 color
                    zIndex: 0 
                }} 
            />

            {/* 2. THE CONTENT - Forced above the curtain */}
            <section className="relative max-w-6xl mx-auto pt-25 md:pt-32 pb-20 px-6" style={{ zIndex: 10 }}>
                
                <h1 className="text-4xl md:text-5xl font-black text-white mb-10 leading-tight">
                MBBS in India Admission Guide 2026: <br/>
                <span className="text-medical">The Ultimate Merit Pathway</span>
                </h1>
                
                {/* The Image that "Pops" */}
                <div className="relative w-full h-[450px] rounded-[40px] overflow-hidden mb-12 shadow-2xl border-[12px] border-white">
                <img 
                    src="https://plus.unsplash.com/premium_photo-1697729844084-c03db2377161?w=1200&auto=format&fit=crop&q=80" 
                    alt="Medical Students in India" 
                    className="w-full h-full object-cover"
                />
                </div>

                <p className="mb-4 text-xl text-justify  text-gray-600 max-w-4xl">
                    Pursuing <strong>MBBS in India</strong> is the dream of every medical aspirant. With the integration of the <strong>National Medical Commission (NMC)</strong>, the standards of medical education have reached global levels. In 2026, the competition is higher than ever, but so is the availability of seats through new AIIMS and Government Medical Colleges (GMCs).
                    <br/> 
                    <br/> 
                    Admission to every seat in India—whether Government, Private, Management, or NRI—is strictly through the <strong>NEET-UG Exam</strong>. Indian medical degrees (MBBS) are recognized globally, allowing students to pursue higher studies and practice worldwide.
                </p>
            </section>
            </div>  

            <div className="max-w-6xl mx-auto px-6 font-sans text-gray-800 leading-relaxed">
                {/* SECTION 2: QUOTA WISE BREAKDOWN */}
                <section className="mb-20 grid lg:grid-cols-3 gap-8">
                {[
                    { title: "Govt Seats", fee: "₹5k - ₹2L / Yr", icon: "🏛️", desc: "Highest competition. Only for high NEET rankers." },
                    { title: "Private Seats", fee: "₹8L - ₹18L / Yr", icon: "🏥", desc: "State-domicile based counseling for middle-rankers." },
                    { title: "Management/NRI", fee: "₹20L - ₹35L / Yr", icon: "💳", desc: "Direct admission possible for NEET qualified students." }
                ].map((item, i) => (
                    <div key={i} className="p-10 bg-white border border-gray-100 rounded-[48px] shadow-sm hover:shadow-xl transition-all text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h4 className="text-2xl font-black text-navy mb-2">{item.title}</h4>
                    <p className="text-medical font-black mb-4">{item.fee}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                ))}
                </section>

                {/* SECTION 3: QUICK OVERVIEW TABLE */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                        <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Quick Information Table</h2>
                    </div>
                    <div className="overflow-hidden rounded-[32px] border border-gray-100 shadow-xl shadow-navy/5">
                        <table className="w-full bg-amber-200 border-collapse">
                            <tbody className="divide-y divide-gray-100 font-bold">
                                {[
                                    { label: "Course Duration", value: "5.5 Years (4.5 Academic + 1 yr Internship)" },
                                    { label: "Entrance Exam", value: "NEET-UG (Only Entrance)" },
                                    { label: "Counselling Authority", value: "MCC (15% AIQ) & State Authorities (85%)" },
                                    { label: "Academic Score", value: "50% in PCB for General, 40% for Reserved" },
                                    { label: "Total Seats", value: "1,12,000+ (Expected 2026)" },
                                    { label: "Total Colleges", value: "700+ (Govt + Private + Deemed)" },
                                    { label: "Internship Stipend", value: "₹15,000 - ₹30,000 (Varies by State)" },
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

                {/* SECTION 4: RESERVATION CATEGORIES 2026 */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                        <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Reservation Policy (AIQ 15%)</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            { cat: "OBC (NCL)", per: "27%", desc: "Central List" },
                            { cat: "SC", per: "15%", desc: "Scheduled Caste" },
                            { cat: "ST", per: "7.5%", desc: "Scheduled Tribe" },
                            { cat: "EWS", per: "10%", desc: "General-EWS" },
                            { cat: "PwD", per: "5%", desc: "Horizontal Res." },
                        ].map((item, i) => (
                            <div key={i} className="bg-ghost p-6 rounded-[32px] text-center border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                                <p className="text-medical text-3xl font-black mb-1">{item.per}</p>
                                <h5 className="font-bold text-navy text-sm">{item.cat}</h5>
                                <p className="text-[10px] text-gray-400 uppercase mt-2 tracking-widest">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 5: COUNSELLING PROCESS STEP-BY-STEP */}
                <section className="mb-20 bg-ghost rounded-[60px] p-10 md:p-16 relative overflow-hidden">
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter mb-10 text-center">Step-by-Step Counselling Roadmap</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {[
                            { step: "Registration", d: "Register on MCC (AIQ) or State portals after NEET results." },
                            { step: "Choice Filling", d: "List colleges in order of preference. The most critical step." },
                            { step: "Seat Allotment", d: "Seats assigned based on Rank, Category, and Availability." },
                            { step: "Reporting", d: "Physical verification of documents and medical fitness at college." }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 rounded-2xl bg-medical text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-medical/20">
                                    0{i+1}
                                </div>
                                <h4 className="font-black text-navy text-lg">{item.step}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 6: DOCUMENT CHECKLIST FOR COUNSELLING */}
                <section className="mb-20 border-2 border-medical/20 rounded-[48px] p-10 md:p-16 relative overflow-hidden">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter mb-6">Counselling Checklist</h2>
                            <p className="text-gray-500 mb-8">Keep these original documents (and 3 sets of photocopies) ready for Round 1:</p>
                            <div className="space-y-3">
                                {[
                                    "NEET Admit Card & Rank Letter",
                                    "Class 10 & 12 Marksheets/Certificates",
                                    "Aadhaar Card / Identity Proof",
                                    "8 Passport Size Photos (Same as Application)",
                                    "Provisional Allotment Letter",
                                    "Category / EWS Certificate (If applicable)",
                                    "Domicile Certificate (For State Quota)"
                                ].map((doc, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <HiOutlineCheckCircle className="text-medical text-xl shrink-0" />
                                        <span className="text-sm font-bold text-navy/80">{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-medical rounded-[40px] p-10 text-white flex flex-col justify-center shadow-2xl">
                            <HiOutlineDocumentText className="text-6xl mb-6 opacity-40" />
                            <h4 className="text-2xl font-black mb-4">Verification Pro-Tip</h4>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Ensure your name exactly matches your Aadhaar Card and Class 10 certificate. Minor spelling mismatches often lead to seat cancellation during physical reporting.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 7: COMPULSORY RURAL SERVICE BONDS */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                        <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Rural Service Bond & Penalties</h2>
                    </div>
                    <div className="overflow-x-auto rounded-[32px] border border-gray-100 shadow-xl">
                        <table className="w-full text-left min-w-[600px]">
                            <thead className="bg-navy text-white text-[10px] md:text-xs uppercase tracking-widest">
                                <tr>
                                    <th className="p-6">State / Region</th>
                                    <th className="p-6">Bond Duration</th>
                                    <th className="p-6">Penalty Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm font-medium">
                                <tr><td className="p-6 bg-ghost/30">Maharashtra / Karnataka</td><td className="p-6">1 Year</td><td className="p-6 text-medical font-bold">₹10L - ₹50L</td></tr>
                                <tr><td className="p-6 bg-ghost/30">Uttar Pradesh / Gujarat</td><td className="p-6">2 Years</td><td className="p-6 text-medical font-bold">₹40L</td></tr>
                                <tr><td className="p-6 bg-ghost/30">Delhi (Central Inst.)</td><td className="p-6">No Bond</td><td className="p-6 text-medical font-bold">N/A</td></tr>
                                <tr><td className="p-6 bg-ghost/30">Assam</td><td className="p-6">5 - 10 Years</td><td className="p-6 text-medical font-bold">₹30L</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-xs text-gray-400 italic">*Bond conditions vary strictly by state health department notifications.</p>
                </section>

                {/* SECTION 8: NMC 2026 REGULATIONS */}
                <section className="mb-20">
                    <div className="bg-navy rounded-[60px] p-10 md:p-16 text-white relative overflow-hidden">
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-display font-black mb-8 uppercase text-medical">NMC 2026 Regulations Checklist</h2>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <HiOutlineCheckCircle className="text-medical text-3xl shrink-0" />
                                        <span><strong>NExT Exam Implementation:</strong> Students starting in 2026 will appear for the National Exit Test.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <HiOutlineCheckCircle className="text-medical text-3xl shrink-0" />
                                        <span><strong>50% Private Seats Rule:</strong> Ongoing efforts to align 50% private seats with government fee structures.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <HiOutlineCheckCircle className="text-medical text-3xl shrink-0" />
                                        <span><strong>CBME Curriculum:</strong> Competency-Based Medical Education focusing on clinical skills from day one.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/5 backdrop-blur-lg rounded-[40px] p-10 border border-white/10 flex flex-col justify-center">
                                <p className="text-2xl font-bold mb-4 italic">"Did you know?"</p>
                                <p className="text-white/60 leading-relaxed">India has the world's largest medical education infrastructure and is the primary exporter of doctors to the UK and USA.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 1: UNIVERSITY TABLE */}
                <section className="mb-20">
                    <h2 className="text-3xl font-black text-navy mb-8 border-l-8 border-medical pl-6 uppercase">Top Medical Institutions in India</h2>
                    <div className="overflow-x-auto shadow-2xl rounded-3xl border border-gray-100">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-navy text-white text-left text-sm uppercase tracking-widest">
                                    <th className="p-6">College Name</th>
                                    <th className="p-6">Type</th>
                                    <th className="p-6">Avg Fee / Yr</th>
                                    <th className="p-6">NEET Cutoff</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {universities.map((uni, idx) => (
                                    <tr key={idx} className="hover:bg-ghost transition-colors font-medium">
                                        <td className="p-6 font-bold text-navy">{uni.name}</td>
                                        <td className="p-6 text-gray-500 font-bold">{uni.type}</td>
                                        <td className="p-6 text-medical font-black">{uni.fee}</td>
                                        <td className="p-6 font-bold">{uni.cutoff}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* SECTION 10: ADMISSION PROCESS */}
                <section className="mb-20">
                    <h2 className="text-3xl font-black text-navy mb-10 border-l-8 border-medical pl-6 uppercase">Admission Roadmap 2026</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "NEET Exam", detail: "Appear for NEET-UG in May. Qualify with minimum 50th percentile." },
                            { step: "AIQ Counselling", detail: "MCC conducts 15% seats counseling for GMCs and 100% for Deemed." },
                            { step: "State Counselling", detail: "Apply for 85% state quota seats based on your domicile." },
                            { step: "College Reporting", detail: "Document verification and fee payment to secure your seat." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-ghost rounded-[40px] space-y-4">
                                <span className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-black">{i+1}</span>
                                <h5 className="font-bold text-navy text-lg">{item.step}</h5>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.detail}</p>
                            </div>
                        ))}
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

                {/* SECTION 12: FAQ */}
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

                {/* SECTION 13: CTA */}
                <section className="bg-medical p-16 rounded-[60px] text-center text-white shadow-xl">
                    <h2 className="text-4xl font-black mb-8 leading-tight">Need Help with NEET Counselling 2026?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href='/cta'>
                            <button className="bg-navy text-white px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all uppercase">TALK TO COUNSELLOR</button>
                        </a>
                        <a href='/countries'>
                            <button className="bg-white text-navy px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all uppercase">GET COUNTRY LIST</button>
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}