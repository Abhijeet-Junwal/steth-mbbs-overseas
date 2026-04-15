"use client";
import React, { useState } from 'react';
import { 
  HiOutlineChevronDown, HiOutlineCheckCircle, HiOutlineGlobeAlt, 
  HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineDocumentText,
  HiOutlineAcademicCap, HiOutlineCurrencyRupee, HiOutlineMapPin
} from "react-icons/hi2";
import Image from 'next/image';

export default function UzbekistanMBBSFullContent() {
    const [activeFaq, setActiveFaq] = useState(null);
    
    const universities = [
        { name: "Tashkent Medical Academy (Main)", established: "1919", fee: "₹3.80L / Yr", total: "₹22.80L" },
        { name: "Bukhara State Medical Institute", established: "1990", fee: "₹3.50L / Yr", total: "₹21.00L" },
        { name: "Samarkand State Medical University", established: "1930", fee: "₹3.20L / Yr", total: "₹19.20L" },
        { name: "Fergana State University", established: "1930", fee: "₹3.40L / Yr", total: "₹20.40L" },
        { name: "Andijan State Medical Institute", established: "1955", fee: "₹3.30L / Yr", total: "₹19.80L" },
        { name: "Urgench Branch of TMA", established: "1992", fee: "₹3.10L / Yr", total: "₹18.60L" },
        { name: "Tashkent Pediatric Medical Institute", established: "1972", fee: "₹3.60L / Yr", total: "₹21.60L" },
        { name: "Tashkent State Dental Institute", established: "2014", fee: "₹3.50L / Yr", total: "₹21.00L" },
        { name: "Namangan State University (Medical Faculty)", established: "1942", fee: "₹3.20L / Yr", total: "₹19.20L" },
        { name: "Karshi State University (Medical Faculty)", established: "1976", fee: "₹3.10L / Yr", total: "₹18.60L" },
    ];
    
    const faqs = [
        { q: "Is NEET mandatory for MBBS in Uzbekistan?", a: "Yes, qualifying NEET-UG is mandatory for all Indian students as per NMC guidelines. The result is valid for 3 years for overseas admission." },
        { q: "What is the duration of the course?", a: "The total duration is 6 years. This is divided into 5 years of academic and clinical study followed by 1 year of mandatory clinical internship in a university-affiliated hospital." },
        { q: "How is the clinical exposure in Uzbekistan?", a: "Uzbekistan provides extensive clinical exposure. Starting from the 2nd and 3rd years, students visit multi-specialty government hospitals to observe and interact with patients under supervision." },
        { q: "Is the Uzbek degree valid for USMLE or PLAB?", a: "Yes, most universities are WHO and ECFMG recognized, allowing students to appear for USMLE (USA) and PLAB (UK) licensing exams." },
        { q: "Is the food spicy like in India?", a: "Uzbek food is moderate, but Indian students don't face issues as universities have dedicated 'Indian Mess' facilities serving Indian spices and dishes." }
      ];

    return (
        <main className="max-w-6xl mx-auto pb-20 px-6 font-sans text-gray-800 leading-relaxed">
      
            {/* SECTION 1: MAIN INTRODUCTION */}
            <section className="mb-20 ">
                <div className=" max-w-6xl mx-auto flex items-center pt-32 px-6 gap-3 mb-6">
                  <span className="w-12 h-[2px] bg-medical"></span>
                  <span className="text-medical  font-bold tracking-[0.3em] text-xs uppercase">Authority Guide 2026</span>
                </div>
                <h1 className="max-w-6xl mx-auto text-4xl px-6 font-black text-navy mb-10 leading-tight">
                MBBS in Uzbekistan for Indian Students 2026: <span className="text-medical">Comprehensive Roadmap</span>
                </h1>
                
                <div className="w-full h-[450px] rounded-[40px] overflow-hidden mb-12 shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1557841089-d82280fcc341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHV6YmVraXN0YW58ZW58MHwwfDB8fHww" 
                    alt="Samarkand, Uzbekistan" 
                    className="w-full h-full object-cover"
                />
                </div>

                <p className="mb-4 text-xl text-justify">
                    MBBS in Uzbekistan has emerged as the most sought-after alternative for Indian students due to its high-quality education and extremely affordable fee structure. The medical universities in Uzbekistan follow a curriculum that is highly aligned with Indian standards, making it easier for students to clear the FMGE/NExT exams. In 2026, over 5,000 Indian students are choosing Uzbekistan for its infrastructure that is at par with UK and Canadian standards.
                    <br/>
                    <br/>
                    With universities like Tashkent Medical Academy and Samarkand State Medical University leading the way, Uzbekistan offers a safe, culturally rich, and technologically advanced environment for medical aspirants. The medical universities are recognized by <strong>WHO, NMC, UNESCO and FAIMER</strong>. The 5+1 year course is designed for international students to excel in licensing exams like NExT and USMLE.
                </p>

            </section>

            {/* SECTION 2: INTAKE & DEADLINES */}
            <section className="mb-20 grid lg:grid-cols-2 gap-10">
              <div className="bg-navy rounded-[48px] p-12 text-white">
                <h3 className="text-3xl font-black mb-6">Intake 2026 Roadmap</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4"><span className="text-medical font-black">JULY:</span> Application procedure starts.</li>
                  <li className="flex gap-4"><span className="text-medical font-black">AUGUST:</span> University Interviews & Admission Letters.</li>
                  <li className="flex gap-4"><span className="text-medical font-black">SEPTEMBER:</span> Visa Stamping & Departure.</li>
                  <li className="flex gap-4"><span className="text-medical font-black">OCTOBER:</span> Academic session begins in Uzbekistan.</li>
                </ul>
              </div>
              <div className="p-12 border-2 border-dashed border-gray-200 rounded-[48px] flex flex-col justify-center">
                <h3 className="text-2xl font-black text-navy mb-4">Admissions Status: <span className="text-medical">OPEN</span></h3>
                <p className="text-gray-500 mb-6 italic">Seats are limited in Tashkent & Samarkand universities. Early application is advised for preferred hostels.</p>
                <button className="bg-medical text-white py-4 px-8 rounded-2xl font-black">CHECK ELIGIBILITY NOW</button>
              </div>
            </section>

            {/* SECTION 3: QUICK OVERVIEW TABLE */}
            <section className="mb-20">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Quick Information Table</h2>
            </div>
            <div className="overflow-hidden rounded-[32px] bg-amber-200 border border-gray-100 shadow-xl shadow-navy/5">
                <table className="w-full border-collapse">
                <tbody className="divide-y divide-gray-100">
                    {[
                    { label: "Course Duration", value: "6 Years (5+1 Year Internship)" },
                    { label: "Medium of Instruction", value: "100% English" },
                    { label: "NEET Requirement", value: "Mandatory Qualified Status" },
                    { label: "Minimum Academic Score", value: "50% in PCB for General, 40% for Others" },
                    { label: "Climate", value: "Moderate (-2°C to 35°C)" },
                    { label: "Intake Period", value: "September / February" },
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

            {/* SECTION 4: ADVANTAGES */}
            <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-8 bg-medical rounded-full"></div>
                <h2 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Advantages of MBBS in Uzbekistan</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {[
                { title: "Affordable Tuition", text: "Uzbekistan offers some of the lowest tuition fees in Central Asia without compromising on the quality of clinical training." },
                { title: "NMC/WHO Approved", text: "All top-tier universities are listed in the World Directory of Medical Schools and recognized by the NMC." },
                { title: "Modern Pedagogy", text: "Heavy focus on practical training with simulation centers and modern hospital attachments." },
                { title: "Easy Connectivity", text: "Multiple direct flights from Delhi to Tashkent with a flight time of only 3 hours." },
                { title: "Safe Environment", text: "Uzbekistan is known for its hospitality and has a very low crime rate, making it safe for female students." },
                { title: "Cultural Similarity", text: "The culture, food habits, and cost of living are very similar to India, helping students adapt quickly." },
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

            {/* SECTION 5: DOCUMENT CHECKLIST */}
            <section className="mb-20">
            <h2 className="text-3xl font-black text-navy mb-8 border-l-8 border-medical pl-6 uppercase">Required Documents</h2>
            <div className="bg-navy rounded-[48px] p-10 md:p-16 text-white relative grid md:grid-cols-2 gap-12">

                {/* Decorative Icon in background */}
                <div className="absolute -right-10 -bottom-10 opacity-[0.03] text-[300px] text-white rotate-17 pointer-events-none">
                <HiOutlineDocumentText />
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-medical font-black uppercase text-xs tracking-[0.2em] mb-4">Educational Records</h4>
                  {[ "10th Marksheet (Original)", "12th Marksheet (Original)", "NEET Scorecard (Current Year)", "Transfer Certificate" ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-3">
                      <HiOutlineCheckCircle className="text-medical text-xl" />
                      <span className="text-sm">{doc}</span>
                    </div>
                  ))}
                  
                </div>
                <div className="space-y-4">
                  <h4 className="text-medical font-black uppercase text-xs tracking-[0.2em] mb-4">Personal Records</h4>
                  {[ "Passport (Valid for 5 Years)", "15 Passport Photos (White BG)", "Medical Fitness Certificate", "Bank Statement (6 Months)" ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-3">
                      <HiOutlineCheckCircle className="text-medical text-xl" />
                      <span className="text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
            </div>
            </section>

            {/* SECTION 6: DETAILED COST OF LIVING */}
            <section className="mb-20">
              <h2 className="text-3xl font-display font-black text-navy mb-8 border-b-2 border-medical pb-2">Living Expenses in Uzbekistan (Monthly)</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Accommodation", price: "₹3,000 - ₹5,000", detail: "University Govt Hostels" },
                  { label: "Food / Mess", price: "₹8,000 - ₹10,000", detail: "Three Meals (Indian Spices)" },
                  { label: "Transport", price: "₹1,000 - ₹2,000", detail: "Local Bus & Metro Pass" },
                  { label: "Miscellaneous", price: "₹2,000 - ₹3,000", detail: "SIM, Books & Personal" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-lg">
                    <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-2">{item.label}</p>
                    <p className="text-2xl font-black text-navy">{item.price}</p>
                    <p className="text-xs text-medical font-medium mt-2">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 7: ACADEMIC SYLLABUS BREAKDOWN */}
            <section className="mb-20">
              <h2 className="text-3xl font-black text-navy mb-10 border-l-8 border-medical pl-6 uppercase">Year-wise Academic Syllabus</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { year: "Year 1", sub: "Human Anatomy, General Psychology, Bio-organic Chemistry, Cytology, Latin Language." },
                  { year: "Year 2", sub: "Histology, Microbiology, Biochemistry, Physiology, Patient Care." },
                  { year: "Year 3", sub: "Pathology, Pharmacology, Radiology, Forensic Medicine, Medical Chemistry." },
                  { year: "Year 4", sub: "Surgery, ENT, Gynaecology, Clinical Medicine, Community Medicine." },
                  { year: "Year 5", sub: "Ophthalmology, Infectious Diseases, Internal Medicine, Oncology." },
                  { year: "Year 6", sub: "Mandatory Clinical Internship at University-Affiliated Hospitals." },
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

            {/* SECTION 8: ELIGIBILITY CRITERIA */}
            <section className="mb-20 bg-navy rounded-[60px] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-display font-black mb-8 uppercase tracking-tighter text-medical">Eligibility Criteria</h2>
                <p className="mb-10 text-white/70">Admission eligibility for Indian medical students in Uzbekistan:</p>
                <div className="grid md:grid-cols-3 gap-8">
                {[
                    { label: "Age Limit", val: "Student must be 17 years old by 31st December of the admission year." },
                    { label: "PCB Score", val: "50% for Gen, 40% for SC/ST/OBC in Physics, Chemistry, and Biology." },
                    { label: "NEET Status", val: "Must have qualified NEET-UG in the current or previous two years." },
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

            {/* SECTION 9: STUDENT LIFE */}
            <section className="mb-20 grid md:grid-cols-3 gap-8">
                <div className="p-8 border border-gray-100 rounded-3xl bg-ghost">
                <HiOutlineGlobeAlt className="text-4xl text-medical mb-4" />
                <h4 className="font-bold text-navy mb-2">Hostel & Living</h4>
                <p className="text-sm text-gray-500">Separate hostels for boys and girls with 24/7 security, high-speed Wi-Fi, and laundry services.</p>
                </div>
                <div className="p-8 border border-gray-100 rounded-3xl bg-ghost">
                <HiOutlineShieldCheck className="text-4xl text-medical mb-4" />
                <h4 className="font-bold text-navy mb-2">FMGE Coaching</h4>
                <p className="text-sm text-gray-500">Many universities provide special NExT/FMGE coaching by Indian professors from the 3rd year onwards.</p>
                </div>
                <div className="p-8 border border-gray-100 rounded-3xl bg-ghost">
                <HiOutlineUserGroup className="text-4xl text-medical mb-4" />
                <h4 className="font-bold text-navy mb-2">Hospital Exposure</h4>
                <p className="text-sm text-gray-500">Students get excellent clinical exposure in high-patient-load government hospitals attached to the universities.</p>
                </div>
            </section>            

            
            {/* SECTION 9: FEE STRUCTURE TABLE */}
            <section className="mb-20">
                <h2 className="text-3xl font-black text-navy mb-8 border-l-8 border-medical pl-6 uppercase">Fees of Top Universities (2026-27)</h2>
                <div className="overflow-x-auto shadow-2xl rounded-3xl border border-gray-100">
                <table className="w-full border-collapse">
                    <thead className="bg-navy text-white text-left text-sm uppercase tracking-widest">
                      <tr>
                        <th className="p-6">University Name</th>
                        <th className="p-6">Est. Year</th>
                        <th className="p-6">Tuition / Year</th>
                        <th className="p-6">Total 6 Yr Package</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    {universities.map((uni, idx) => (
                        <tr key={idx} className="hover:bg-ghost transition-colors font-medium">
                        <td className="p-6 font-bold text-navy">{uni.name}</td>
                        <td className="p-6 text-gray-400">{uni.established}</td>
                        <td className="p-6 text-medical font-black">{uni.fee}</td>
                        <td className="p-6 font-bold">{uni.total}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </section>

            
            {/* NEW SECTION 10: FMGE / NEXT PERFORMANCE */}
            <section className="mb-20 bg-ghost p-10 md:p-16 rounded-[60px]">
              <h2 className="text-3xl font-display font-black text-navy mb-8 border-b-2 border-medical pb-2">FMGE (NExT) Passing Statistics</h2>
              <p className="text-gray-600 mb-8">One of the biggest concerns for parents is the FMGE success rate. Uzbekistan universities have shown an improving trend, with some institutions achieving higher passing rates than the global average.</p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Bukhara State Medical Institute", rate: "47.83%" },
                  { name: "Tashkent Medical Academy", rate: "Above 35%" },
                  { name: "Urgench Branch (TMA)", rate: "32.41%" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
                    <p className="text-medical text-3xl font-black mb-2">{stat.rate}</p>
                    <p className="text-navy font-bold text-sm">{stat.name}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-gray-400 italic text-center">*Based on 2024 FMGE December Session Performance Data.</p>
            </section>

            {/* SECTION 11: COMPARISON TABLE - INDIA VS UZBEKISTAN */}
            <section className="mb-20">
              <h2 className="text-3xl font-display font-black text-navy mb-8 border-b-2 border-medical pb-2">India vs Uzbekistan MBBS Comparison</h2>
              <div className="overflow-x-auto rounded-[32px] border border-gray-100 shadow-lg">
                <table className="w-full text-left">
                  <thead className="bg-navy text-white text-xs uppercase tracking-widest">
                    <tr>
                      <th className="p-6">Feature</th>
                      <th className="p-6">MBBS In India</th>
                      <th className="p-6">MBBS In Uzbekistan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-medium">
                    <tr><td className="p-6 bg-ghost/50 font-bold">Total Fees</td><td className="p-6">₹60L - ₹1.2Cr (Private)</td><td className="p-6 text-medical">₹18L - ₹25L (Total)</td></tr>
                    <tr><td className="p-6 bg-ghost/50 font-bold">Entrance</td><td className="p-6">High NEET Merit Required</td><td className="p-6">NEET Qualified Status</td></tr>
                    <tr><td className="p-6 bg-ghost/50 font-bold">Clinical Exposure</td><td className="p-6">Limited in some Private Colleges</td><td className="p-6">High (Govt Hospital Attachments)</td></tr>
                    <tr><td className="p-6 bg-ghost/50 font-bold">Donation</td><td className="p-6">High Donations in some cases</td><td className="p-6 text-medical font-bold">Zero Donation</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 12: POPULAR DESTINATIONS GRID */}
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
        

            {/* SECTION 13: FAQ SECTION */}
            <section className="mb-20 max-w-4xl mx-auto">
                <h2 className="text-4xl font-black text-navy mb-12 text-center uppercase">Student FAQs</h2>
                <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                    <button 
                        className="w-full flex items-center justify-between p-8 text-left bg-white"
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    >
                        <span className="text-lg font-bold text-navy">{faq.q}</span>
                        <HiOutlineChevronDown 
                            className={`text-medical text-2xl transition-transform duration-300 ${
                                activeFaq === index ? 'rotate-180' : ''
                            }`} 
                        />
                    </button>
                    <div className={`transition-all duration-300 overflow-hidden ${activeFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                        <div className="p-8 pt-0 text-gray-500 text-md border-t border-gray-50 bg-white leading-relaxed">{faq.a}</div>
                    </div>
                    </div>
                ))}
                </div>
            </section>
            
            {/* SECTION 14: CALL TO ACTION */}
            <section className="bg-medical p-16 rounded-[60px] text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl font-black mb-8 leading-tight">Secure Your MBBS Admission in Uzbekistan 2026</h2>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-navy text-white px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all">CONSULT AN EXPERT</button>
                  <button className="bg-white text-navy px-12 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all">GET FREE BROCHURE</button>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-64 h-64 border-[30px] border-white/5 rounded-full -ml-32 -mt-32"></div>
            </section>
        </main>
    );
}