"use client";
import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineCheckCircle, HiOutlineGlobeAlt, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineDocumentText, HiOutlineMapPin, HiOutlineCurrencyRupee } from "react-icons/hi2";

export default function KazakhstanMBBSFullContent() {
    const [activeFaq, setActiveFaq] = useState(null);
    
    const universities = [
        { name: "Kazakh National Medical University", established: "1930", fee: "₹4.50L / Yr", total: "₹22.50L" },
        { name: "Astana Medical University", established: "1964", fee: "₹4.20L / Yr", total: "₹21.00L" },
        { name: "Semey State Medical University", established: "1953", fee: "₹3.80L / Yr", total: "₹19.00L" },
        { name: "Karaganda State Medical University", established: "1950", fee: "₹3.90L / Yr", total: "₹19.50L" },
        { name: "West Kazakhstan State Medical University", established: "1957", fee: "₹3.50L / Yr", total: "₹17.50L" },
        { name: "Al-Farabi Kazakh National University", established: "1934", fee: "₹4.80L / Yr", total: "₹24.00L" },
        { name: "South Kazakhstan Medical Academy", established: "1979", fee: "₹3.60L / Yr", total: "₹18.00L" },
        { name: "Kokshetau State University", established: "1962", fee: "₹3.20L / Yr", total: "₹16.00L" },
        { name: "North Kazakh State University", established: "1937", fee: "₹3.10L / Yr", total: "₹15.50L" },
        { name: "Caspian University", established: "1992", fee: "₹4.00L / Yr", total: "₹20.00L" },
    ];
    
    const faqs = [
        { q: "Is the 5-year MBBS in Kazakhstan valid in India?", a: "Yes, Kazakhstan offers a 5-year MBBS program. As per the NMC FMGL Regulations 2021, the course must be at least 54 months plus a 12-month internship. Kazakhstan's curriculum is designed to meet these specific hourly and duration requirements mandated by the NMC." },
        { q: "What is the medium of instruction?", a: "Top government medical universities in Kazakhstan offer the full 5-year course in English Medium for international students. However, students learn basic Kazakh/Russian to communicate with patients during clinical rotations." },
        { q: "Is Kazakhstan safe for Indian students?", a: "Kazakhstan is the most stable and economically developed country in Central Asia. It has a very low crime rate and maintains excellent diplomatic relations with India, making it highly safe for students." },
        { q: "Can I get Indian food in Kazakhstan hostels?", a: "Yes, almost all universities listed have dedicated Indian messes managed by Indian chefs, providing both North and South Indian vegetarian and non-vegetarian meals." },
        { q: "What are the passing rates for FMGE (NExT)?", a: "Universities like Kazakh National and Astana Medical University have consistently shown high FMGE passing percentages (above 25-30%) due to their focus on the clinical pattern similar to the Indian medical system." }
    ];

    return (
        <main className="max-w-6xl mx-auto pt-32 pb-20 px-6 font-sans text-gray-800 leading-relaxed">
      
            {/* SECTION 1: MAIN INTRODUCTION */}
            <section className="mb-20">
                <h1 className="text-5xl font-black text-navy mb-10 leading-tight">
                    MBBS in Kazakhstan for Indian Students 2026: <span className="text-medical">Modern & Accelerated Guide</span>
                </h1>
                
                <div className="w-full h-[450px] rounded-[40px] overflow-hidden mb-12 shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1645817227685-e97c2f7f1e3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2F6YWtoc3RhbiUyMG1lZGljYWx8ZW58MHx8MHx8fDA%3D" 
                        alt="Astana City, Kazakhstan Skyline" 
                        className="w-full h-full object-cover"
                    />
                </div>

                <p className="mb-4 text-xl text-justify font-medium text-gray-600">
                    Study <strong>MBBS in Kazakhstan</strong> has become the fastest-growing trend among Indian medical aspirants who wish to complete their degree in a shorter timeframe without compromising on quality. Kazakhstan offers a <strong>5-year MBBS program</strong> that is globally recognized and highly focused on modern medical technology.
                    <br/> 
                    <br/> 
                    As the economic powerhouse of Central Asia, Kazakhstan provides students with access to state-of-the-art hospitals and simulation centers. Universities like <strong>Kazakh National Medical University (KNMU)</strong> and <strong>Astana Medical University</strong> are world-ranked and recognized by the <strong>NMC, WHO, and UNESCO</strong>.
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
                                { label: "Course Duration", value: "5 Years (Integrated Clinical Training)" },
                                { label: "Degree Awarded", value: "Bachelor of Medicine (MBBS Equivalent)" },
                                { label: "Medium of Instruction", value: "100% English Medium" },
                                { label: "NEET Requirement", value: "Mandatory Qualified Status" },
                                { label: "Academic Eligibility", value: "50% in PCB for General, 40% for Reserved" },
                                { label: "Average Tuition Fee", value: "₹3.5 Lakhs to ₹4.8 Lakhs Per Year" },
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
                    <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Why Choose Kazakhstan?</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "5-Year Program", text: "Allows students to enter their professional career one year earlier than Russia or Georgia." },
                        { title: "NMC 2021 Compliant", text: "Universities have restructured their credits to meet the 54-month + 12-month internship rule." },
                        { title: "Affordable Cost", text: "The total budget including food and hostel stays under ₹22-25 Lakhs for the full course." },
                        { title: "Top Infrastructure", text: "Kazakhstan government invests heavily in medical research and diagnostic equipment." },
                        { title: "Bilateral Relations", text: "Strong India-Kazakhstan ties ensure easier visa processing and student support." },
                        { title: "Clinical Rotations", text: "Students get exposure to massive National Centers for Surgery, Oncology, and Cardiology." },
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
                        <h4 className="text-medical font-black uppercase text-xs tracking-[0.2em] mb-4">Educational Records</h4>
                        {[ "10th Marksheet (Original)", "12th Marksheet (Original)", "NEET Scorecard (Current Year)", "University Admission Letter" ].map((doc, i) => (
                            <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-3">
                                <HiOutlineCheckCircle className="text-medical text-xl" />
                                <span className="text-sm font-medium">{doc}</span>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-medical font-black uppercase text-xs tracking-[0.2em] mb-4">Personal Records</h4>
                        {[ "Valid Passport (Min. 18 Months)", "12-15 Passport Size Photos", "Medical Fitness Certificate", "Bank Statement (Last 6 Months)" ].map((doc, i) => (
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
                            <HiOutlineMapPin className="text-medical" /> Climate in Kazakhstan
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed text-justify">
                            Kazakhstan has a continental climate. Winters in cities like Astana can be quite cold (-15°C to -20°C), but all buildings, hostels, and universities are equipped with <strong>centralized heating systems</strong>. Indian students adapt well due to the modern infrastructure.
                        </p>
                    </div>
                    <div className="p-10 bg-ghost rounded-[40px] space-y-4 text-justify">
                        <h4 className="text-xl font-bold text-navy flex items-center gap-3">
                            <HiOutlineCurrencyRupee className="text-medical" /> Currency & Living Cost
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The local currency is <strong>Kazakhstani Tenge (KZT)</strong>. 1 INR is roughly 5.5 Tenge. Monthly living costs (Food, Transport, Personal) are approximately ₹10,000 - ₹15,000, making it very economical for Indian families.
                        </p>
                    </div>
                </div>
                <div className="bg-medical rounded-[40px] p-10 text-white flex flex-col justify-between shadow-xl">
                    <div>
                        <h4 className="text-2xl font-black mb-4 uppercase">Direct Flight</h4>
                        <p className="text-white/80 text-sm leading-relaxed italic">
                            "With only a 4-hour flight from Delhi to Almaty, Kazakhstan is one of the closest and most accessible medical destinations for Indians."
                        </p>
                    </div>
                    <div className="pt-8 border-t border-white/20">
                        <p className="text-xs uppercase font-bold tracking-widest opacity-60 mb-2">Main Languages</p>
                        <p className="text-xl font-bold">Kazakh & Russian</p>
                        <p className="text-[10px] mt-1 italic text-white/70">*English is the medium of study for foreign students.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 6: ELIGIBILITY */}
            <section className="mb-20 bg-navy rounded-[60px] p-10 md:p-16 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-display font-black mb-8 uppercase tracking-tighter text-medical">Admission Eligibility 2026</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { label: "Age", val: "Student must be 17 years old on or before Dec 31st of the admission year." },
                            { label: "Academic Score", val: "Min 50% in PCB for General Category and 40% for SC/ST/OBC in 12th Board Exams." },
                            { label: "NEET Exam", val: "NEET-UG qualified status is mandatory for Indian applicants as per NMC guidelines." },
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

            {/* SECTION 7: UNIVERSITY TABLE */}
            <section className="mb-20">
                <h2 className="text-3xl font-black text-navy mb-8 border-l-8 border-medical pl-6 uppercase">Top Government Universities in Kazakhstan</h2>
                <div className="overflow-x-auto shadow-2xl rounded-3xl border border-gray-100">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-navy text-white text-left text-sm uppercase tracking-widest">
                                <th className="p-6">University Name</th>
                                <th className="p-6">Est.</th>
                                <th className="p-6">Annual Tuition</th>
                                <th className="p-6">Total Pkg (5yr)</th>
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

            {/* SECTION 8: ADMISSION PROCESS */}
            <section className="mb-20">
                <h2 className="text-3xl font-black text-navy mb-10 border-l-8 border-medical pl-6 uppercase">Admission & Visa Roadmap</h2>
                <div className="relative border-l-2 border-gray-100 ml-4 space-y-12">
                    {[
                        { step: "Selection & Counseling", detail: "Expert counseling to select the best National or State university based on NEET score." },
                        { step: "Admission Letter", detail: "Submission of scan copies of 10th/12th and Passport to get university approval." },
                        { step: "Visa Invitation", detail: "The university applies to the Ministry of Internal Affairs for the official study visa invitation." },
                        { step: "Departure", detail: "Visa stamping at the Embassy and group travel with our support managers." },
                    ].map((item, i) => (
                        <div key={i} className="relative pl-10">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-medical rounded-full border-4 border-white"></div>
                            <h5 className="font-bold text-navy text-xl mb-2">{item.step}</h5>
                            <p className="text-gray-500">{item.detail}</p>
                        </div>
                    ))}
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
                        { name: "Russia", img: "https://plus.unsplash.com/premium_photo-1697729923597-13ac2cce0ab7?q=80&w=1171", slug: "russia"},
                        { name: "Uzbekistan", img: "https://images.unsplash.com/photo-1664602078796-68ee76b3fc59?w=600", slug: "uzbekistan"},
                        { name: "Georgia", img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200", slug: "georgia"},
                        { name: "Kyrgyzstan", img: "https://plus.unsplash.com/premium_photo-1697729404559-25e36fc1fa8e?w=600", slug: "kyrgyzstan"},
                        { name: "India", img: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?w=600", slug: "india"},
                        { name: "Philippines", img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600", slug: "philippines"},
                        { name: "Armenia", img: "https://images.unsplash.com/photo-1536645152842-6b5fbacf1153?w=600", slug: "armenia"},
                        { name: "Nepal", img: "https://images.unsplash.com/photo-1623492701360-fb4a1205c789?w=600", slug: "nepal"},
                    ].map((item, i) => (
                        <a 
                            href={`/countries/${item.slug}`} 
                            key={i} 
                            className="group bg-white rounded-xl w-full overflow-hidden border border-gray-100 hover:border-medical/40 transition-all duration-500 shadow-sm "
                        >
                            <div className="h-30 overflow-hidden relative">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-3">
                                <h4 className="text-lg font-bold text-navy mb-2">{item.name}</h4>
                                <div className="flex items-center gap-1 text-medical text-xs font-mono tracking-widest">Explore &gt;</div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* SECTION 10: FAQ */}
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

            {/* SECTION 11: CTA */}
            <section className="bg-medical p-16 rounded-[60px] text-center text-white shadow-xl">
                <h2 className="text-4xl font-black mb-8 leading-tight">Apply for 2026 Admissions in Kazakhstan Today</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href='cta'>
                        <button className="bg-navy text-white px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all">CONSULT AN EXPERT</button>
                    </a>
                    <button className="bg-white text-navy px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all uppercase">GET BROCHURE</button>
                </div>
            </section>
        </main>
    );
}