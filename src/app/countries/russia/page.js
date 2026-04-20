"use client";
import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineCheckCircle, HiOutlineGlobeAlt, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineDocumentText } from "react-icons/hi2";


export default function RussiaMBBSFullContent() {
    const [activeFaq, setActiveFaq] = useState(null);
    
    // const universities = [
    //     { name: "Kazan State Medical University", established: "1814", fee: "₹5.50L / Yr", total: "₹33.00L" },
    //     { name: "Orenburg State Medical University", established: "1944", fee: "₹4.80L / Yr", total: "₹28.80L" },
    //     { name: "Bashkir State Medical University", established: "1932", fee: "₹3.60L / Yr", total: "₹21.60L" },
    //     { name: "Mari State University", established: "1972", fee: "₹3.80L / Yr", total: "₹22.80L" },
    //     { name: "Perm State Medical University", established: "1916", fee: "₹4.20L / Yr", total: "₹25.20L" },
    //     { name: "Pirogov Russian NRM University", established: "1906", fee: "₹6.10L / Yr", total: "₹36.60L" },
    //     { name: "I.M. Sechenov First Moscow State", established: "1758", fee: "₹8.50L / Yr", total: "₹51.00L" },
    //     { name: "Volgograd State Medical University", established: "1935", fee: "₹4.50L / Yr", total: "₹27.00L" },
    //     { name: "Crimea Federal University", established: "1918", fee: "₹3.10L / Yr", total: "₹18.60L" },
    //     { name: "Siberian State Medical University", established: "1888", fee: "₹4.40L / Yr", total: "₹26.40L" },
    //     { name: "Tver State Medical University", established: "1936", fee: "₹4.10L / Yr", total: "₹24.60L" },
    //     { name: "Kursk State Medical University", established: "1935", fee: "₹4.90L / Yr", total: "₹29.40L" },
    //     { name: "Omsk State Medical University", established: "1920", fee: "₹2.90L / Yr", total: "₹17.40L" },
    //     { name: "Far Eastern Federal University", established: "2010", fee: "₹4.30L / Yr", total: "₹25.80L" },
    //     { name: "Pskov State University", established: "1932", fee: "₹2.70L / Yr", total: "₹16.20L" },
    //   ];

    const universities = [
        { name: "Ural State Medical University", established: "1930", fee: "₽ 3.6L / Yr", total: "₽ 21.6L" },
        { name: "Samara State Medical University", established: "1957", fee: "₽ 4.5L / Yr", total: "₽ 27.00L" },
        { name: "Kabardino Balkarian State Medical University", established: "1932", fee: "₽ 3.24L / Yr", total: "₽ 19.44L" },
        { name: "North Caucasian State Academy", established: "1936", fee: "₽ 3.5L / Yr", total: "₽ 21.00L" },
        { name: "Amur State Medical Academy", established: "1952", fee: "₽ 3.25L / Yr", total: "₽ 19.50L" },
      ];
    
    const faqs = [
        { q: "Is NEET mandatory for MBBS in Russia?", a: "Yes, qualifying NEET-UG is mandatory for all Indian students as per NMC guidelines. Without qualifying NEET, the degree will not be valid for practicing in India." },
        { q: "What is the medium of instruction for clinical years?", a: "The entire 6-year course is taught in English. However, students learn the Russian language as a subject for the first 3 years to communicate with patients during hospital rotations." },
        { q: "Is the degree from Russia recognized in India?", a: "Yes, Russian medical degrees (MD Physician) are recognized by the NMC (National Medical Commission) and are equivalent to MBBS in India." },
        { q: "Can I get an education loan for Russia?", a: "Yes, nationalized banks like SBI, PNB, and private banks provide education loans for government universities in Russia upon showing the Admission Letter." },
        { q: "What is the food like for Indian students?", a: "Most universities have an 'Indian Mess' providing Indian food. Groceries are also easily available for those who prefer self-cooking." }
      ];
    return (
        <main className="max-w-6xl  mx-auto pt-32 pb-20 px-6 font-sans text-gray-800 leading-relaxed">
      
            {/* SECTION 1: MAIN INTRODUCTION */}
            <section className="mb-20">
                <h1 className="text-5xl font-black text-navy mb-10 leading-tight">
                MBBS in Russia for Indian Students 2026: <span className="text-medical">Complete Admission Guide</span>
                </h1>
                
                {/* ADDED IMAGE COMPONENT */}
                <div className="w-full h-[450px] rounded-[40px] overflow-hidden mb-12 shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1741171249940-c2c129002d12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJ1c3NpYXxlbnwwfDB8MHx8fDA%3D" 
                    alt="Medical University Campus in Russia" 
                    className="w-full h-full object-cover"
                />
                </div>

                
                <p className="mb-4 text-xl text-justify">
                MBBS in Russia has been one of the most preferred choices for Indian medical aspirants for more than three decades. 
                Currently, more than 25,000 Indian students are pursuing their medical degrees in various Government Medical Universities 
                across the Russian Federation. The primary attraction is the high-quality education combined with a highly subsidized 
                fee structure provided by the Ministry of Health and Education of Russia.
                <br/> 
                <br/> 
                Russian medical universities are globally recognized by the <strong>National Medical Commission (NMC)</strong>, 
                <strong>World Health Organization (WHO)</strong>, and are listed in the <strong>World Directory of Medical Schools (WDOMS)</strong>. 
                A degree from Russia (MD Physician) is equivalent to an MBBS in India and allows students to practice worldwide after 
                clearing the respective licensing exams like NExT (India), USMLE (USA), or PLAB (UK).
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
                    { label: "Course Duration", value: "6 Years (Including 1 Year Clinical Internship)" },
                    { label: "Medium of Instruction", value: "English Medium / Bilingual" },
                    { label: "NEET Requirement", value: "Mandatory (Qualified Status)" },
                    { label: "Minimum Academic Score", value: "50% in PCB for General, 40% for Reserved Categories" },
                    { label: "IELTS/TOEFL", value: "Not Required" },
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
                <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Advantages of Studying MBBS in Russia</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {[
                { title: "Subsidized Fees", text: "Education in Russia is highly subsidized by the Russian government, making it much cheaper than private medical seats in India." },
                { title: "Direct Admission", text: "There is no separate entrance exam like IELTS, TOEFL, or university-specific tests. Admission is based on NEET and 12th marks." },
                { title: "World-Class Infrastructure", text: "Universities have massive campuses with ultra-modern laboratories, simulation centers, and multi-specialty hospitals." },
                { title: "NMC Compliance", text: "The 6-year course duration and syllabus are fully compliant with the latest NMC FMGL Regulations 2021." },
                { title: "Safe Environment", text: "Russian campuses are extremely safe for international students with 24/7 security and CCTV." },
                { title: "Indian Mess", text: "Most universities have Indian messes providing North and South Indian food for students." },
                ].map((adv, i) => (
                <div key={i} className="group p-8 bg-white border border-gray-200 rounded-[40px] hover:border-medical/30 hover:shadow-2xl transition-all duration-500">
                    <h4 className="text-xl font-bold text-navy mb-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-medical"></span>
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
                <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Document Checklist</h2>
            </div>
            
            <div className="bg-ghost rounded-[48px] p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                {/* Decorative Icon in background */}
                <div className="absolute -right-10 -bottom-10 opacity-[0.03] text-[200px] text-navy rotate-12 pointer-events-none">
                <HiOutlineDocumentText />
                </div>

                <div className="grid md:grid-cols-2 gap-x-16 gap-y-2 relative z-10">
                {/* Column 1 */}
                <div className="space-y-4">
                    {[
                    "Original 10th & 12th Marksheets",
                    "Valid Passport (Minimum 18 months)",
                    "NEET Scorecard (Qualified)",
                    "Birth Certificate"
                    ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-4 border-b border-gray-200/50 last:border-0">
                        <div className="w-6 h-6 rounded-full bg-medical/10 flex items-center justify-center shrink-0">
                        <HiOutlineCheckCircle className="text-medical text-lg" />
                        </div>
                        <span className="font-bold text-navy text-sm md:text-base">{item}</span>
                    </div>
                    ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                    {[
                    "10-15 Passport size photos (White background)",
                    "Medical Fitness Certificate",
                    "HIV Negative Report",
                    "University Invitation Letter"
                    ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-4 border-b border-gray-200/50 last:border-0">
                        <div className="w-6 h-6 rounded-full bg-medical/10 flex items-center justify-center shrink-0">
                        <HiOutlineCheckCircle className="text-medical text-lg" />
                        </div>
                        <span className="font-bold text-navy text-sm md:text-base">{item}</span>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            
            <p className="mt-6 text-center text-gray-400 text-xs italic">
                Note: All original documents must be apostilled by the Ministry of External Affairs (MEA), India.
            </p>
            </section>

            {/* SECTION 5: ELIGIBILITY CRITERIA */}
            <section className="mb-20 bg-navy rounded-[60px] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-display font-black mb-8 uppercase tracking-tighter text-medical">Eligibility Criteria</h2>
                <p className="mb-10 text-white/70">As per the guidelines issued by the National Medical Commission (NMC), Indian aspirants must satisfy the following conditions:</p>
                <div className="grid md:grid-cols-3 gap-8">
                {[
                    { label: "Age", val: "The student must be at least 17 years old by December 31 of the admission year." },
                    { label: "Academic %", val: "Must have passed 10+2 with Physics, Chemistry, and Biology. Min 50% for Gen, 40% for SC/ST/OBC." },
                    { label: "NEET Exam", val: "Qualifying NEET-UG in the current year or within the last two years is mandatory." },
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

            {/* SECTION 6: MEDIUM OF INSTRUCTION & CLINICAL ROTATIONS (New Detail) */}
            <section className="mb-20 grid md:grid-cols-3 gap-8">
                <div className="p-8 border border-gray-100 rounded-3xl bg-ghost">
                <HiOutlineGlobeAlt className="text-4xl text-medical mb-4" />
                <h4 className="font-bold text-navy mb-2">Medium of Instruction</h4>
                <p className="text-sm text-gray-500">The entire 6-year course is conducted in English. However, Russian language is taught as a minor subject to aid patient communication in the final years.</p>
                </div>
                <div className="p-8 border border-gray-100 rounded-3xl bg-ghost">
                <HiOutlineShieldCheck className="text-4xl text-medical mb-4" />
                <h4 className="font-bold text-navy mb-2">Student Safety</h4>
                <p className="text-sm text-gray-500">All government hostels feature 24/7 CCTV surveillance, biometric entry systems, and dedicated warden offices for international students.</p>
                </div>
                <div className="p-8 border border-gray-100 rounded-3xl bg-ghost">
                <HiOutlineUserGroup className="text-4xl text-medical mb-4" />
                <h4 className="font-bold text-navy mb-2">Indian Community</h4>
                <p className="text-sm text-gray-500">Over 50+ universities have established Indian messes and student unions that celebrate festivals like Diwali and Holi annually.</p>
                </div>
            </section>

            {/* SECTION 7: SYLLABUS & ACADEMICS */}
            <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">MBBS Syllabus in Russia (6 Years)</h2>
            </div>
            <p className="mb-10 text-gray-500">The medical course is divided into pre-clinical, para-clinical, and clinical phases.</p>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                { title: "Years 1 - 2", text: "Basic Sciences: Anatomy, Histology, Biology, Chemistry, Physics, and Russian Language.", type: "Pre-Clinical" },
                { title: "Year 3", text: "Para-Clinical: Microbiology, Physiology, Biochemistry, Pathology, and Pharmacology.", type: "Para-Clinical" },
                { title: "Years 4 - 6", text: "Clinical Phase: Internal Medicine, Surgery, Gynaecology, Pediatrics, Oncology, and Neurology.", type: "Clinical" },
                ].map((phase, i) => (
                <div key={i} className="relative p-10 bg-ghost rounded-[48px] group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100">
                    <span className="text-[10px] font-bold text-medical uppercase tracking-[0.2em] mb-4 block">{phase.type}</span>
                    <h4 className="text-2xl font-black text-navy mb-4">{phase.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{phase.text}</p>
                </div>
                ))}
            </div>
            </section>

            {/* SECTION 8: FEE STRUCTURE TABLE */}
            <section className="mb-20">
                <h2 className="text-3xl font-black text-navy mb-8 border-l-8 border-medical pl-6 uppercase">Top Government Medical Universities in Russia</h2>
                <div className="overflow-x-auto shadow-2xl rounded-3xl border border-gray-100">
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-navy text-white text-left text-sm uppercase tracking-widest">
                        <th className="p-6">University Name</th>
                        <th className="p-6">Est. Year</th>
                        <th className="p-6">Tuition / Year</th>
                        <th className="p-6">Total Package</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    {universities.map((uni, idx) => (
                        <tr key={idx} className="hover:bg-ghost transition-colors">
                        <td className="p-6 font-bold text-navy">{uni.name}</td>
                        <td className="p-6 text-gray-500">{uni.established}</td>
                        <td className="p-6 text-medical font-black">{uni.fee}</td>
                        <td className="p-6 font-bold">{uni.total}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </section>            

            {/* SECTION 9: VISA & ADMISSION PROCESS (New Detail) */}
            <section className="mb-20">
                <h2 className="text-3xl font-black text-navy mb-8 border-l-8 border-medical pl-6 uppercase">Step-by-Step Admission & Visa Process</h2>
                <div className="relative border-l-2 border-gray-100 ml-4 space-y-12">
                {[
                    { step: "University Application", detail: "Submit 10th & 12th marksheets for initial screening and Admission Letter." },
                    { step: "Invitation Letter", detail: "The Ministry of Education, Russia issues an official Invitation Letter (Takes 30-45 days)." },
                    { step: "Visa Stamping", detail: "Submission of original passport and HIV report to the Russian Embassy in India." },
                    { step: "Departure", detail: "Group departure from India with our dedicated student coordinators." }
                ].map((item, i) => (
                    <div key={i} className="relative pl-10">
                    <div className="absolute -left-[11px] top-0 w-5 h-5 bg-medical rounded-full border-4 border-white"></div>
                    <h5 className="font-bold text-navy text-xl mb-2">{item.step}</h5>
                    <p className="text-gray-500">{item.detail}</p>
                    </div>
                ))}
                </div>
            </section>

            {/* SECTION 10: POPULAR DESTINATIONS GRID */}
            <section className="mb-20 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-navy mb-4">
                        Popular MBBS Destination For Indian Students
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[
                        { name: "Georgia", img: "https://images.unsplash.com/photo-1596276614984-a916480dc736?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxnZW9yZ2lhfGVufDB8MHwwfHx8MA%3D%3D", slug: "georgia" },
                        { name: "Uzbekistan", img: "https://images.unsplash.com/photo-1664602078796-68ee76b3fc59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXpiZWtpc3RhbnxlbnwwfDB8MHx8fDA%3D", slug: "uzbekistan" },
                        { name: "Kazakhstan", img: "https://images.unsplash.com/photo-1666975823342-3b755b3784d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2F6YWtoc3RhbnxlbnwwfDB8MHx8fDA%3D", slug: "kazakhstan" },
                        { name: "Kyrgyzstan", img: "https://plus.unsplash.com/premium_photo-1697729404559-25e36fc1fa8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxreXJneXpzdGFufGVufDB8MHwwfHx8MA%3D%3D", slug: "kyrgyzstan" },
                        { name: "India", img: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwwfDB8fHww", slug: "india" },
                        { name: "Philippines", img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbGlwcGluZXN8ZW58MHwwfDB8fHww", slug: "philippines" },
                        { name: "Nepal", img: "https://images.unsplash.com/photo-1623492701360-fb4a1205c789?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5lcGFsfGVufDB8MHwwfHx8MA%3D%3D", slug: "nepal" },
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

            {/* SECTION 11: FAQ */}
            <section className="mb-20 max-w-4xl mx-auto">
                <h2 className="text-4xl font-black text-navy mb-12 text-center uppercase">Frequently Asked Questions</h2>
                <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                    key={index} 
                    className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md"
                      onMouseEnter={() => setActiveFaq(index)}
                      onMouseLeave={() => setActiveFaq(null)}
                    >
                    <button 
                        className="w-full flex items-center justify-between p-8 text-left bg-white"
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    >
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
            
            {/* SECTION 12: CALL TO ACTION */}
            <section className="bg-medical p-16 rounded-[60px] text-center text-white">
                <h2 className="text-4xl font-black mb-8 leading-tight">Secure Your MBBS Admission in Russia for 2026</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href='/cta'>
                    <button className="bg-navy text-white px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all">
                        CONSULT OUR EXPERTS
                    </button>
                </a>
                {/* <button className="bg-white text-navy px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all">
                    GET FREE BROCHURE
                </button> */}
                </div>
            </section>

    </main>
  );
}



{/* SECTION 3: COUNTRY OVERVIEW */}
{/* <section className="relative mb-24 overflow-hidden rounded-[40px]">

  //Background Image (Half Section)
  <div className="absolute inset-0 w-full h-full">
    <img
      src="https://images.unsplash.com/photo-1528150177508-7cc0c36a2c6f"
      alt="Russia Background"
      className="w-full h-full object-cover opacity-20"
    />
  </div>

  //Content Wrapper
  <div className="relative grid md:grid-cols-2 gap-10 items-center p-10 md:p-16">

    //LEFT CONTENT
    <div>
      <h2 className="text-4xl font-black text-navy mb-6">
        Study MBBS in Russia
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Russia is one of the leading destinations for MBBS abroad due to its
        strong academic infrastructure, globally recognized universities, and
        affordable fee structure. Students gain access to advanced laboratories,
        experienced faculty, and international exposure.
      </p>
    </div>

   // RIGHT IMAGE (Half Overlay Style)
    <div className="relative">
      <div className="rounded-[30px] overflow-hidden shadow-2xl transform md:translate-x-10">
        <img
          src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
          alt="Russia University"
          className="w-full h-[350px] object-cover"
        />
      </div>
    </div>

  </div>
</section> */}


