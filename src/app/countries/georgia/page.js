"use client";
import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineCheckCircle, HiOutlineGlobeAlt, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineDocumentText, HiOutlineMapPin, HiOutlineCurrencyRupee } from "react-icons/hi2";

export default function GeorgiaMBBSFullContent() {
    const [activeFaq, setActiveFaq] = useState(null);
    
    const universities = [
        { name: "Tbilisi State Medical University", established: "1918", fee: "₹6.50L / Yr", total: "₹39.00L" },
        { name: "Batumi Shota Rustaveli State University", established: "1923", fee: "₹4.80L / Yr", total: "₹28.80L" },
        { name: "Ilia State University", established: "2006", fee: "₹4.40L / Yr", total: "₹26.40L" },
        { name: "New Vision University", established: "2013", fee: "₹5.80L / Yr", total: "₹34.80L" },
        { name: "Caucasus International University", established: "1995", fee: "₹4.20L / Yr", total: "₹25.20L" },
        { name: "East European University (EEU)", established: "2012", fee: "₹4.15L / Yr", total: "₹24.90L" },
        { name: "Georgian National University SEU", established: "2001", fee: "₹4.50L / Yr", total: "₹27.00L" },
        { name: "European University", established: "1995", fee: "₹4.20L / Yr", total: "₹25.20L" },
        { name: "University of Georgia", established: "2004", fee: "₹5.00L / Yr", total: "₹30.00L" },
        { name: "Akaki Tsereteli State University", established: "1930", fee: "₹3.80L / Yr", total: "₹22.80L" },
    ];
    
    const faqs = [
        { q: "Is Georgia safe for Indian students?", a: "Georgia is consistently ranked among the top 10 safest countries globally. Local law enforcement is very efficient, and the crime rate is extremely low, making it ideal for international students." },
        { q: "What is the duration of MBBS in Georgia?", a: "As per the European Credit Transfer System (ECTS), the course duration is 6 years. This includes 5 years of academic study and 1 year of clinical internship, fully compliant with NMC regulations." },
        { q: "Is the degree from Georgia valid in India?", a: "Yes, Georgian medical degrees are recognized by the NMC (National Medical Commission), WHO, and ECFMG. Students can practice in India after clearing the NExT/FMGE exam." },
        { q: "Can I get an education loan for Georgia?", a: "Yes, most nationalized banks in India like SBI and PNB provide loans for NMC-recognized universities in Georgia once the student receives the official visa invitation." },
        { q: "Is NEET mandatory for Georgia?", a: "Yes, qualifying NEET-UG is a mandatory requirement for Indian students to study medicine abroad and to practice back in India." }
    ];

    return (
        <main className="max-w-6xl mx-auto pt-32 pb-20 px-6 font-sans text-gray-800 leading-relaxed">
      
            {/* SECTION 1: MAIN INTRODUCTION */}
            <section className="mb-20">
                <h1 className="text-5xl font-black text-navy mb-10 leading-tight">
                    MBBS in Georgia for Indian Students 2026: <span className="text-medical">European Standards Guide</span>
                </h1>
                
                <div className="w-full h-[450px] rounded-[40px] overflow-hidden mb-12 shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop" 
                        alt="Tbilisi, Georgia Cityscape" 
                        className="w-full h-full object-cover"
                    />
                </div>

                <p className="mb-4 text-xl text-justify">
                    Study <strong>MBBS in Georgia</strong> has become a hallmark for quality medical education in Europe. Georgia offers a unique blend of 
                    European higher education standards and affordable living costs. Currently, thousands of Indian students are pursuing medical programs 
                    in Tbilisi, Batumi, and Kutaisi due to the high-tech medical infrastructure and global recognition.
                    <br/> 
                    <br/> 
                    Medical universities in Georgia follow the <strong>European Credit Transfer and Accumulation System (ECTS)</strong> and are recognized 
                    by the <strong>NMC, WHO, and FAIMER</strong>. The degree awarded is 'MD Physician', which is globally equivalent to MBBS. 
                    The clinical training in Georgia is exceptionally hands-on, with universities being affiliated with top multi-specialty 
                    Georgian and European clinics.
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
                                { label: "Course Duration", value: "6 Years (Including Internship)" },
                                { label: "Degree Awarded", value: "MD Physician (MBBS Equivalent)" },
                                { label: "Medium of Instruction", value: "100% English Medium" },
                                { label: "NEET Requirement", value: "Mandatory Qualified Status" },
                                { label: "Eligibility", value: "50% in PCB (General) / 40% (Reserved)" },
                                { label: "IELTS / TOEFL", value: "Not Mandatory (Depends on University)" },
                                { label: "Intake Period", value: "September & February (Spring Intake)" },
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
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Why Choose MBBS in Georgia?</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "No Entrance Exams", text: "Admission is direct based on NEET and 12th marks. No need for IELTS/TOEFL in most government universities." },
                        { title: "High Safety Ranking", text: "Georgia is globally recognized for its safety, ranking among the world's most secure nations for international students." },
                        { title: "European Curriculum", text: "Follows the ECTS system, allowing students to participate in exchange programs across European universities." },
                        { title: "NMC/WHO Approved", text: "All top-tier universities are fully compliant with NMC regulations and WHO listings for global practice." },
                        { title: "Affordable Luxury", text: "Students enjoy a high European standard of living at a fraction of the cost found in Western Europe." },
                        { title: "Indian Food Availability", text: "Dedicated Indian messes and Indian grocery stores are widely available in student hubs like Tbilisi." },
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

            {/* SECTION 4: DOCUMENT CHECKLIST */}
            <section className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Documents Required</h2>
                </div>
                <div className="bg-navy rounded-[48px] p-10 md:p-16 text-white relative grid md:grid-cols-2 gap-12">

                    {/* Decorative Icon in background */}
                    <div className="absolute -right-10 -bottom-10 opacity-[0.03] text-[300px] text-white rotate-17 pointer-events-none">
                    <HiOutlineDocumentText />
                    </div>
                    
                    <div className="space-y-4">
                        <h4 className="text-medical font-black uppercase text-xs tracking-[0.2em] mb-4">Educational Records</h4>
                        {[ 
                            "10th & 12th Marksheet (Original)", 
                            "NEET Qualification Scorecard ", 
                            "Transfer Certificate",
                            "University Offer Letter"
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
                            "Passport (Valid for 5 Years)", 
                            "15 Passport Photos (White BG)", 
                            "Medical Fitness Certificate", 
                            "Bank Statement (6 Months)" 
                        ].map((doc, i) => (
                        <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-3">
                            <HiOutlineCheckCircle className="text-medical text-xl" />
                            <span className="text-sm">{doc}</span>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: COUNTRY & LIFESTYLE BASICS */}
            <section className="mb-20 grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                    <div className="p-10 bg-ghost rounded-[40px] space-y-4">
                        <h4 className="text-xl font-bold text-navy flex items-center gap-3">
                            <HiOutlineMapPin className="text-medical" /> Geography & Climate
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Situated at the intersection of Europe and Asia, Georgia offers a mild, subtropical climate. Winters average -2°C to 4°C, while summers are pleasant at 25°C—making it much easier for Indian students to adapt compared to Northern Russia or Kazakhstan.
                        </p>
                    </div>
                    <div className="p-10 bg-ghost rounded-[40px] space-y-4">
                        <h4 className="text-xl font-bold text-navy flex items-center gap-3">
                            <HiOutlineCurrencyRupee className="text-medical" /> Currency & Economy
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The local currency is the <strong>Georgian Lari (GEL)</strong>. 1 GEL is approximately ₹30-32. The economy is stable, and students can manage all monthly utilities (Electricity, Water, Gas, high-speed Internet) within ₹3,000 - ₹4,500.
                        </p>
                    </div>
                </div>
                <div className="bg-medical rounded-[40px] p-10 text-white flex flex-col justify-between">
                    <div>
                        <h4 className="text-2xl font-black mb-4">Quick Fact</h4>
                        <p className="text-white/80 text-sm leading-relaxed italic">
                            "Georgia is known as the 'Cradle of Wine' and for its legendary hospitality. Locals refer to their country as 'Sakartvelo'."
                        </p>
                    </div>
                    <div className="pt-8 border-t border-white/20">
                        <p className="text-xs uppercase font-bold tracking-widest opacity-60 mb-2">Primary Language</p>
                        <p className="text-xl font-bold">Georgian (Kartuli)</p>
                        <p className="text-[10px] opacity-70 mt-1">*English widely spoken in urban centers & universities</p>
                    </div>
                </div>
            </section>

            {/* SECTION 6: TECHNICAL MEDICAL STANDARDS & ACCREDITATION */}
            <section className="mb-20 bg-ghost rounded-[60px] p-10 md:p-16">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Global Medical Recognition</h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">
                            Georgian medical universities are not just locally accredited but hold prestigious global recognitions that allow graduates to practice in nearly any country. The curriculum is meticulously designed to meet the standards of the <strong>World Federation for Medical Education (WFME)</strong>.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { title: "WFME", desc: "Global Standards" },
                                { title: "ECFMG", desc: "USA Eligibility" },
                                { title: "FAIMER", desc: "World Directory" },
                                { title: "AMEE", desc: "EU Association" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                    <h4 className="text-medical font-black text-xl mb-1">{item.title}</h4>
                                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-navy rounded-[40px] p-10 text-white flex flex-col justify-center">
                        <h4 className="text-2xl font-bold mb-4 italic text-medical">"The Clinical Edge"</h4>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Unlike many countries where international students only observe, Georgia’s healthcare system integrates students into <strong>Clinical Clerkships</strong> from the 3rd year. Universities utilize Objective Structured Clinical Examinations (OSCE) to ensure practical mastery before graduation.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-medical/20 flex items-center justify-center">
                                <HiOutlineShieldCheck className="text-medical text-2xl" />
                            </div>
                            <span className="font-bold text-sm">USMLE & PLAB Integrated Coaching Available</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: NMC FMGL REGULATIONS 2021/2026 COMPLIANCE */}
            <section className="mb-20">
                <div className="bg-white border-2 border-medical/20 rounded-[48px] p-10 md:p-16 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                            <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">NMC Compliance Verification</h2>
                        </div>
                        <p className="text-gray-500 mb-10 max-w-2xl">
                            Every university recommended by Steth MBBS Overseas strictly adheres to the <strong>National Medical Commission (NMC)</strong> Foreign Medical Graduate Licentiate Regulations.
                        </p>
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                            {[
                                { q: "Course Duration", a: "Minimum 54 months of theoretical and practical training as mandated." },
                                { q: "Internship Location", a: "12-month internship completed within the same Georgian university." },
                                { q: "Instruction Medium", a: "100% English medium verified through official university transcripts." },
                                { q: "License to Practice", a: "Graduates are eligible to register and practice medicine in Georgia, meeting NMC’s 'Equal Rights' clause." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5">
                                    <HiOutlineCheckCircle className="text-medical text-3xl shrink-0" />
                                    <div>
                                        <h5 className="font-black text-navy text-lg mb-1">{item.q}</h5>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Background Subtle Watermark */}
                    <div className="absolute right-0 bottom-0 opacity-[0.02] text-[150px] font-black -mr-10 -mb-10 text-navy uppercase">Compliance</div>
                </div>
            </section>     

            {/* SECTION 8: STUDENT FACILITIES */}
            <section className="mb-20 grid md:grid-cols-3 gap-8">
                <div className="p-8 border border-gray-100 rounded-3xl bg-ghost">
                    <HiOutlineGlobeAlt className="text-4xl text-medical mb-4" />
                    <h4 className="font-bold text-navy mb-2">Modern Infrastructure</h4>
                    <p className="text-sm text-gray-500">Georgian universities offer smart classrooms, digital libraries, and advanced diagnostic labs.</p>
                </div>
                <div className="p-8 border border-gray-100 rounded-3xl bg-ghost">
                    <HiOutlineShieldCheck className="text-4xl text-medical mb-4" />
                    <h4 className="font-bold text-navy mb-2">Safe Campus</h4>
                    <p className="text-sm text-gray-500">24/7 CCTV surveillance and security guards ensure a protected environment for students.</p>
                </div>
                <div className="p-8 border border-gray-100 rounded-3xl bg-ghost">
                    <HiOutlineUserGroup className="text-4xl text-medical mb-4" />
                    <h4 className="font-bold text-navy mb-2">Indian Hostel & Mess</h4>
                    <p className="text-sm text-gray-500">Separate wings for boys and girls with North and South Indian food options available.</p>
                </div>
            </section>       

            {/* SECTION 9: ELIGIBILITY CRITERIA */}
            <section className="mb-20 bg-navy rounded-[60px] p-10 md:p-16 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-display font-black mb-8 uppercase tracking-tighter text-medical">Admission Eligibility</h2>
                    <p className="mb-10 text-white/70">As per the guidelines for Georgian Medical Universities:</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { label: "Age Requirement", val: "The applicant must be 17 years old on or before 31st December." },
                            { label: "Academic Marks", val: "Minimum 50% in PCB (Physics, Chemistry, Biology) in 10+2 standard." },
                            { label: "NEET Exam", val: "A valid qualifying NEET scorecard is mandatory for Indian citizens." },
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

            {/* SECTION 10: SYLLABUS PHASE */}
            <section className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Academic Curriculum (6 Years)</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Pre-Clinical", text: "Anatomy, Histology, Biochemistry, Physiology, Latin, and Behavioral Sciences.", type: "Phase 1" },
                        { title: "Para-Clinical", text: "Pathology, Microbiology, Pharmacology, Forensic Medicine, and Clinical Prep.", type: "Phase 2" },
                        { title: "Clinical Phase", text: "Surgery, Pediatrics, Internal Medicine, OBG, Neurology, and Internship.", type: "Phase 3" },
                    ].map((phase, i) => (
                        <div key={i} className="relative p-10 bg-ghost rounded-[48px] group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100">
                            <span className="text-[10px] font-bold text-medical uppercase tracking-[0.2em] mb-4 block">{phase.type}</span>
                            <h4 className="text-2xl font-black text-navy mb-4">{phase.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{phase.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 11: UNIVERSITY TABLE */}
            <section className="mb-20">
                <h2 className="text-3xl font-black text-navy mb-8 border-l-8 border-medical pl-6 uppercase">Top Universities in Georgia</h2>
                <div className="overflow-x-auto shadow-2xl rounded-3xl border border-gray-100">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-navy text-white text-left text-sm uppercase tracking-widest">
                                <th className="p-6">University Name</th>
                                <th className="p-6">Established</th>
                                <th className="p-6">Annual Tuition</th>
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

            {/* SECTION 12: ADMISSION PROCESS */}
            <section className="mb-20">
                <h2 className="text-3xl font-black text-navy mb-8 border-l-8 border-medical pl-6 uppercase">Step-by-Step Admission Process</h2>
                <div className="relative border-l-2 border-gray-100 ml-4 space-y-12">
                    {[
                        { step: "Selection & Counseling", detail: "Get a detailed overview of universities and finalize based on budget." },
                        { step: "Offer Letter", detail: "Submit documents to receive the university's official offer letter." },
                        { step: "Ministry Approval", detail: "University applies to the Georgian Ministry of Education & Science for approval." },
                        { step: "Visa Stamping", detail: "Interview and visa stamping at the Georgian Embassy in India." },
                    ].map((item, i) => (
                        <div key={i} className="relative pl-10">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-medical rounded-full border-4 border-white"></div>
                            <h5 className="font-bold text-navy text-xl mb-2">{item.step}</h5>
                            <p className="text-gray-500">{item.detail}</p>
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

            {/* SECTION 14: FAQ */}
            <section className="mb-20 max-w-4xl mx-auto">
                <h2 className="text-4xl font-black text-navy mb-12 text-center uppercase">Frequently Asked Questions</h2>
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

            {/* SECTION 15: CTA */}
            <section className="bg-medical p-16 rounded-[60px] text-center text-white">
                <h2 className="text-4xl font-black mb-8 leading-tight">Start Your Medical Career in Georgia Today</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href='/cta'>
                        <button className="bg-navy text-white px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all">
                        FREE COUNSELING
                    </button>
                    </a>
                    <a href='/countries'>
                        <button className="bg-white text-navy px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all">
                            Explore Other Destinations
                        </button>
                    </a>
                </div>
            </section>

            {/* SECTION: EXPLORE OTHER DESTINATIONS */}
            {/* <section className="mb-20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-navy uppercase tracking-tighter">Explore Other Destinations</h2>
                        <p className="text-gray-500 mt-2">Compare top medical hubs and find the best fit for your budget and career goals.</p>
                    </div>
                    <div className="hidden md:block h-[2px] flex-1 bg-gray-100 mx-10"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[
                        { name: "Russia", slug: "russia", usp: "Largest Legacy", fee: "₹18L - 35L", flag: "🇷🇺" },
                        { name: "Uzbekistan", slug: "uzbekistan", usp: "Bilingual Ease", fee: "₹15L - 22L", flag: "🇺🇿" },
                        { name: "Kazakhstan", slug: "kazakhstan", usp: "Modern Campus", fee: "₹20L - 35L", flag: "🇰🇿" },
                        { name: "Philippines", slug: "philippines", usp: "US Curriculum", fee: "₹15L - 25L", flag: "🇵🇭" },
                        { name: "Kyrgyzstan", slug: "kyrgyzstan", usp: "Lowest Budget", fee: "₹12L - 18L", flag: "🇰🇬" },
                        { name: "Armenia", slug: "armenia", usp: "Personalized", fee: "₹22L - 35L", flag: "🇦🇲" },
                        { name: "Nepal", slug: "nepal", usp: "Next Door", fee: "₹45L - 65L", flag: "🇳🇵" },
                        { name: "India", slug: "india", usp: "Private Hubs", fee: "₹60L - 1Cr", flag: "🇮🇳" },
                    ].map((item, i) => (
                        <a 
                            href={`/countries/${item.slug}`} 
                            key={i} 
                            className="group relative bg-white border border-gray-100 p-6 rounded-[32px] hover:border-medical/40 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-3xl">{item.flag}</span>
                                <span className="text-[10px] font-bold text-medical bg-medical/5 px-3 py-1 rounded-full uppercase tracking-widest">
                                    {item.usp}
                                </span>
                            </div>
                            <h4 className="text-xl font-black text-navy group-hover:text-medical transition-colors">MBBS in {item.name}</h4>
                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase font-bold">Total Pkg</p>
                                    <p className="text-sm font-black text-navy">{item.fee}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-ghost group-hover:bg-medical group-hover:text-white flex items-center justify-center transition-all">
                                    →
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section> */}

             
        </main>
    );
}