"use client";
import React, { useState } from 'react';
import { 
  HiOutlineChevronDown, HiOutlineCheckCircle, HiOutlineGlobeAlt, 
  HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineDocumentText,
  HiOutlineAcademicCap, HiOutlineCurrencyRupee, HiOutlineMapPin 
} from "react-icons/hi2";

export default function ArmeniaMBBSFullContent() {
    const [activeFaq, setActiveFaq] = useState(null);
    
    const universities = [
        { name: "Yerevan State Medical University", established: "1920", fee: "₹5.20L / Yr", total: "₹31.20L" },
        { name: "Yerevan Haybusak University", established: "1990", fee: "₹3.80L / Yr", total: "₹22.80L" },
        { name: "University of Traditional Medicine (UTM)", established: "1991", fee: "₹3.50L / Yr", total: "₹21.00L" },
        { name: "Mkhitar Gosh Armenian-Russian University", established: "1996", fee: "₹3.30L / Yr", total: "₹19.80L" },
        { name: "St. Tereza Medical University", established: "1992", fee: "₹3.40L / Yr", total: "₹20.40L" },
        { name: "Armenian Medical Institute", established: "1990", fee: "₹3.60L / Yr", total: "₹21.60L" },
    ];
    
    const faqs = [
        { q: "Is the Armenian MBBS degree valid for NExT in India?", a: "Yes, Armenian medical universities are recognized by the National Medical Commission (NMC). Indian students are eligible to appear for the NExT/FMGE exam to practice in India." },
        { q: "What is the medium of instruction in Armenia?", a: "The course is strictly conducted in English for international students. Armenian language is taught as a subject to help students communicate with local patients during hospital rotations." },
        { q: "What is the course duration?", a: "The total duration is 6 years. This includes 5 years of theoretical and clinical study followed by a 1-year mandatory internship, fully aligned with the NMC FMGL 2021 guidelines." },
        { q: "Is Armenia safe for female Indian students?", a: "Armenia is one of the safest countries in the world with an extremely low crime rate. The people are hospitable, and campuses are monitored 24/7, making it a safe choice for all students." },
        { q: "Do I need to clear IELTS or TOEFL for Armenia?", a: "No, Indian students do not need to provide IELTS or TOEFL scores. Admission is granted based on your 12th standard marks and NEET qualification." }
    ];

    const destinations = [
        { name: "Russia", slug: "russia", flag: "🇷🇺" },
        { name: "Uzbekistan", slug: "uzbekistan", flag: "🇺🇿" },
        { name: "Kazakhstan", slug: "kazakhstan", flag: "🇰🇿" },
        { name: "Georgia", slug: "georgia", flag: "🇬🇪" },
        { name: "Philippines", slug: "philippines", flag: "🇵🇭" },
        { name: "Kyrgyzstan", slug: "kyrgyzstan", flag: "🇰🇬" },
        { name: "Nepal", slug: "nepal", flag: "🇳🇵" },
        { name: "India", slug: "india", flag: "🇮🇳" },
    ];

    return (
        <main className="max-w-6xl mx-auto pt-32 pb-20 px-6 font-sans text-gray-800 leading-relaxed overflow-x-hidden">
      
            {/* SECTION 1: MAIN INTRODUCTION */}
            <section className="mb-20">
                <h1 className="text-5xl font-black text-navy mb-10 leading-tight">
                    MBBS in Armenia for Indian Students 2026: <span className="text-medical">European Quality, Affordable Price</span>
                </h1>
                
                <div className="w-full h-[450px] rounded-[40px] overflow-hidden mb-12 shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1536645152842-6b5fbacf1153?q=80&w=1200&auto=format&fit=crop" 
                        alt="Yerevan, Armenia - The Pink City" 
                        className="w-full h-full object-cover"
                    />
                </div>

                <p className="mb-4 text-xl text-justify font-medium text-gray-600">
                    <strong>MBBS in Armenia</strong> is an excellent choice for Indian medical aspirants seeking a peaceful European environment and high-quality education. With a 100% literacy rate and a legacy of academic excellence, Armenia offers medical programs recognized by <strong>WHO, NMC, and ECFMG</strong>.
                    <br/> 
                    <br/> 
                    Yerevan, the capital, is often called the "Pink City" and houses some of the most historic medical universities in the region. The education system focuses on small batch sizes, ensuring personalized attention from professors and early clinical exposure in government clinics.
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
                                { label: "Course Duration", value: "6 Years (Incl. 1 Year Internship)" },
                                { label: "Degree Awarded", value: "MD Physician (Equivalent to MBBS)" },
                                { label: "Medium of Instruction", value: "100% English Medium" },
                                { label: "NEET Requirement", value: "Mandatory Qualified Status" },
                                { label: "Min. PCB %", value: "50% (General) / 40% (Reserved)" },
                                { label: "Average Tuition Fee", value: "₹3.3L to ₹5.2L Per Year" },
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
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Why Choose Armenia?</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "No Entrance Exam", text: "Admission is direct based on NEET score and academic eligibility. No IELTS/TOEFL required." },
                        { title: "European Lifestyle", text: "Experience a high quality of life with European culture at a very low cost of living." },
                        { title: "Personalized Batches", text: "Small teacher-student ratios ensure better learning and faster doubt resolution." },
                        { title: "Safe & Secure", text: " Consistently ranked among the safest countries globally for international students." },
                        { title: "NMC Compliance", text: "The 6-year course structure and 12-month internship fully meet NMC FMGL 2021 norms." },
                        { title: "Global Opportunities", text: "Students are eligible to sit for USMLE (USA), PLAB (UK), and NExT (India) exams." },
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
                <div className="bg-navy rounded-[48px] p-10 md:p-16 text-white relative grid md:grid-cols-2 gap-12 shadow-2xl overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 opacity-[0.03] text-[300px] text-white rotate-17 pointer-events-none">
                        <HiOutlineDocumentText />
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-medical font-black uppercase text-xs tracking-[0.2em] mb-4">Educational Records</h4>
                        {[ "10th Marksheet (Original)", "12th Marksheet (Original)", "NEET Scorecard (Qualified)", "Transfer Certificate" ].map((doc, i) => (
                            <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-3">
                                <HiOutlineCheckCircle className="text-medical text-xl" />
                                <span className="text-sm font-medium">{doc}</span>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-medical font-black uppercase text-xs tracking-[0.2em] mb-4">Personal & Identity</h4>
                        {[ "Valid Passport (Min. 2 Years)", "12 Passport Size Photos", "Medical Fitness Certificate", "Bank Statement (3-6 Months)" ].map((doc, i) => (
                            <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-3">
                                <HiOutlineCheckCircle className="text-medical text-xl" />
                                <span className="text-sm font-medium">{doc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: YEAR-BY-YEAR SYLLABUS */}
            <section className="mb-20">
              <h2 className="text-3xl font-black text-navy mb-10 border-l-8 border-medical pl-6 uppercase">Academic Syllabus Breakdown</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { year: "Year 1", sub: "Anatomy, Chemistry, Biology, Physics, Latin, Armenian Language." },
                  { year: "Year 2", sub: "Histology, Biochemistry, Microbiology, Pharmacology, Anatomy, Physical Training." },
                  { year: "Year 3", sub: "Pathology, Surgery, Pharmacology, Neurology, Medical Genetics." },
                  { year: "Year 4", sub: "Traumatology, Obstetrics & Gynecology, Pediatrics, Epidemiology." },
                  { year: "Year 5", sub: "Internal Medicine, Surgery, Infectious Diseases, Oncology." },
                  { year: "Year 6", sub: "Clinical Internship: Forensic Medicine, Psychiatry, Clinical Pharmacology." },
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-ghost border border-gray-100 rounded-[40px] hover:bg-white hover:shadow-xl transition-all group">
                    <h4 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-medical"></div>
                      {item.year}
                    </h4>
                    <p className="text-sm text-gray-500">{item.sub}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 11: ADMISSION TIMELINE 2026 */}
            <section className="mb-20">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Admission Timeline 2026</h2>
            </div>
            <div className="relative border-l-2 border-medical/20 ml-4 space-y-12">
                {[
                { month: "May - June", task: "Registration & Document Submission", detail: "Start your application with 10th/12th marksheets." },
                { month: "July - August", task: "University Interview & Offer Letter", detail: "Short online interview (Skype/Zoom) for English proficiency." },
                { month: "September", task: "Visa Processing & MEA Apostille", detail: "Document verification and Visa stamping through VFS Global." },
                { month: "October", task: "Departure & University Registration", detail: "Travel to Armenia and complete local registration." }
                ].map((item, i) => (
                <div key={i} className="relative pl-10">
                    <div className="absolute -left-[11px] top-0 w-5 h-5 bg-white rounded-full border-4 border-medical shadow-sm"></div>
                    <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-medical font-black uppercase text-[10px] tracking-widest">{item.month}</span>
                    <h5 className="font-black text-navy text-xl mt-1">{item.task}</h5>
                    <p className="text-gray-500 text-sm mt-2">{item.detail}</p>
                    </div>
                </div>
                ))}
            </div>
            </section>

            

            {/* SECTION 13: PERFORMANCE & COST STATS */}
            <section className="mb-20 grid lg:grid-cols-2 gap-10">
            <div className="p-10 bg-ghost rounded-[48px] border border-gray-100">
                <h3 className="text-2xl font-black text-navy mb-6">FMGE (NExT) Statistics</h3>
                <p className="text-gray-500 text-sm mb-8">Armenia has shown a consistent improvement in passing rates, with Yerevan State Medical University (YSMU) being a top performer.</p>
                <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full border-[6px] border-medical flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-navy">17%</span>
                </div>
                <div>
                    <p className="font-bold text-navy">Average Pass Rate</p>
                    <p className="text-xs text-gray-400 mt-1">Based on 2024 NBEMS Performance Data</p>
                </div>
                </div>
            </div>
            
            <div className="p-10 bg-white rounded-[48px] border border-gray-100 shadow-xl">
                <h3 className="text-2xl font-black text-navy mb-6">Living Costs (Monthly)</h3>
                <div className="space-y-4">
                {[
                    { label: "Accommodation (Hostel)", price: "₹4,000 - ₹7,000" },
                    { label: "Food / Mess Charges", price: "₹8,000 - ₹10,000" },
                    { label: "Transport & Internet", price: "₹1,500 - ₹2,500" }
                ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                    <span className="text-gray-500 font-medium">{item.label}</span>
                    <span className="text-navy font-black">{item.price}</span>
                    </div>
                ))}
                </div>
            </div>
            </section>

            {/* SECTION 12: NMC FMGL 2021 COMPLIANCE CHECKLIST */}
            <section className="mb-20 bg-navy rounded-[60px] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-display font-black mb-8 uppercase text-medical">NMC Compliance Verification</h2>
                <p className="text-white/70 mb-10">Steth MBBS ensures every university in Armenia adheres to the latest Indian regulations:</p>
                <div className="grid md:grid-cols-2 gap-8">
                {[
                    { t: "Course Duration", d: "54 months of theory + 12 months internship in the same campus." },
                    { t: "English Medium", d: "100% English instruction for all academic and clinical sessions." },
                    { t: "Clinical Practice", d: "Students interact with patients in Armenian multi-specialty hospitals." },
                    { t: "License Eligibility", d: "Graduates are eligible for local license to practice in Armenia." }
                ].map((check, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                    <HiOutlineCheckCircle className="text-medical text-3xl shrink-0" />
                    <div>
                        <h5 className="font-bold text-white">{check.t}</h5>
                        <p className="text-xs text-white/60 mt-1 leading-relaxed">{check.d}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-medical/10 blur-[120px] -mr-20 -mb-20"></div>
            </section>

            {/* SECTION 6: LIFESTYLE & CLIMATE */}
            <section className="mb-20 grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                    <div className="p-10 bg-ghost rounded-[40px] space-y-4">
                        <h4 className="text-xl font-bold text-navy flex items-center gap-3">
                            <HiOutlineMapPin className="text-medical" /> Life in Yerevan
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed text-justify">
                            Yerevan is a safe and modern city with a European atmosphere. The weather consists of four distinct seasons: pleasant summers (~25°C) and cold winters (0 to -5°C). Most students find the weather much easier to adapt to than that of Russia or Kazakhstan.
                        </p>
                    </div>
                    <div className="p-10 bg-ghost rounded-[40px] space-y-4 text-justify">
                        <h4 className="text-xl font-bold text-navy flex items-center gap-3">
                            <HiOutlineCurrencyRupee className="text-medical" /> Living Costs
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The currency is <strong>Armenian Dram (AMD)</strong>. Monthly food and hostel expenses generally range from ₹15,000 to ₹20,000. Indian food items and dedicated messes are widely available.
                        </p>
                    </div>
                </div>
                <div className="bg-medical rounded-[40px] p-10 text-white flex flex-col justify-between shadow-xl">
                    <div>
                        <h4 className="text-2xl font-black mb-4 uppercase">Direct Entry</h4>
                        <p className="text-white/80 text-sm leading-relaxed italic">
                            "Armenia offers one of the most transparent admission processes in Europe for Indian medical students."
                        </p>
                    </div>
                    <div className="pt-8 border-t border-white/20 text-center">
                        <p className="text-xl font-bold">Safe for All Students</p>
                    </div>
                </div>
            </section>

            {/* SECTION 7: UNIVERSITY TABLE */}
            <section className="mb-20">
                <h2 className="text-3xl font-black text-navy mb-8 border-l-8 border-medical pl-6 uppercase">Top Universities in Armenia</h2>
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

            {/* SECTION 8: POPULAR DESTINATIONS GRID */}
            <section className="mb-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-navy mb-4">
                        Popular MBBS Destination For Indian Students
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {destinations.map((item, i) => (
                        <a 
                            href={`/countries/${item.slug}`} 
                            key={i} 
                            className="group relative bg-white border border-gray-100 p-6 rounded-[32px] hover:border-medical/40 hover:shadow-2xl transition-all duration-500 shadow-sm"
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-3xl">{item.flag}</span>
                                <h4 className="text-lg font-black text-navy group-hover:text-medical transition-colors">MBBS in {item.name}</h4>
                                <div className="w-10 h-10 rounded-full bg-ghost group-hover:bg-medical group-hover:text-white flex items-center justify-center transition-all">→</div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* SECTION 9: FAQ */}
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

            {/* SECTION 10: CTA */}
            <section className="bg-medical p-16 rounded-[60px] text-center text-white shadow-xl">
                <h2 className="text-4xl font-black mb-8 leading-tight">Apply for European Standards MBBS in Armenia</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-navy text-white px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all">CONSULT AN EXPERT</button>
                    <button className="bg-white text-navy px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all uppercase">GET BROCHURE</button>
                </div>
            </section>
        </main>
    );
}