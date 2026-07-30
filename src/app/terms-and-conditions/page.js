import React from 'react';
import Link from 'next/link';
import { 
  HiOutlineShieldCheck, HiOutlineDocumentText, HiOutlineScale, 
  HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin, HiOutlineGlobeAlt,
  HiOutlineCheckCircle
} from "react-icons/hi2";

export const metadata = {
  title: "Terms & Conditions | Steth MBBS Overseas",
  description: "Terms & Conditions governing your use of Steth MBBS Overseas website and educational consultancy services.",
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "July 30, 2026";

  const sections = [
    {
      id: "1",
      title: "1. Acceptance of Terms",
      content: (
        <p className="text-gray-600 leading-relaxed font-medium">
          By accessing this website, submitting an enquiry, or availing our services, you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions and our Privacy Policy.
        </p>
      )
    },
    {
      id: "2",
      title: "2. Services",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed font-medium">
            Steth MBBS Overseas provides educational consultancy services including but not limited to:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 font-medium">
            {[
              "MBBS Abroad Counselling",
              "University Selection Guidance",
              "Admission Assistance",
              "Documentation Support",
              "Visa Guidance",
              "Travel Assistance",
              "Pre-Departure Support",
              "Student Assistance after Admission (where applicable)"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2.5 bg-ghost/80 p-3 rounded-xl border border-gray-100">
                <HiOutlineCheckCircle className="text-medical text-xl shrink-0 mt-0.5" />
                <span className="text-sm text-navy font-semibold">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 italic bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
            Admission decisions are solely made by the respective universities and government authorities. We do not guarantee admission, visa approval, scholarships, or employment opportunities.
          </p>
        </div>
      )
    },
    {
      id: "3",
      title: "3. User Responsibilities",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed font-medium">You agree to:</p>
          <ul className="space-y-2.5 text-gray-700">
            {[
              "Provide accurate and complete information.",
              "Submit genuine educational and personal documents.",
              "Keep your contact information updated.",
              "Comply with the admission rules of universities and immigration authorities.",
              "Use the website only for lawful purposes."
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-medical shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm font-semibold text-rose-600 bg-rose-50 p-4 rounded-xl border border-rose-100">
            Providing false or misleading information may result in rejection of your application or discontinuation of our services.
          </p>
        </div>
      )
    },
    {
      id: "4",
      title: "4. Admission Disclaimer",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed font-medium">
            Admission to any university depends upon:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Eligibility Criteria",
              "NEET Qualification (where applicable)",
              "Academic Performance",
              "University Requirements",
              "Government Regulations",
              "Availability of Seats"
            ].map((item, index) => (
              <div key={index} className="p-3 bg-ghost rounded-xl border border-gray-100 text-center font-bold text-xs text-navy">
                {item}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 font-medium pt-2">
            Steth MBBS Overseas cannot influence or guarantee admission decisions made by universities.
          </p>
        </div>
      )
    },
    {
      id: "5",
      title: "5. Fees & Payments",
      content: (
        <div className="space-y-3 text-gray-600 leading-relaxed font-medium">
          <p>
            Any consultancy or service fees communicated by Steth MBBS Overseas must be paid according to the agreed payment schedule.
          </p>
          <p>
            Payments made to universities, embassies, visa authorities, airlines, or third-party service providers are governed by their respective policies.
          </p>
        </div>
      )
    },
    {
      id: "6",
      title: "6. Refund Policy",
      content: (
        <div className="space-y-3 text-gray-600 leading-relaxed font-medium">
          <p>
            Refunds, if applicable, shall be governed by the service agreement signed with the student.
          </p>
          <p>
            University application fees, embassy charges, visa fees, medical examination fees, travel expenses, and other third-party charges are generally non-refundable unless otherwise specified by the respective organization.
          </p>
        </div>
      )
    },
    {
      id: "7",
      title: "7. Intellectual Property",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed font-medium">
            All content available on this website, including but not limited to:
          </p>
          <div className="flex flex-wrap gap-2">
            {["Text", "Images", "Graphics", "Logos", "Videos", "Documents", "Website Design"].map((item, index) => (
              <span key={index} className="px-3.5 py-1.5 bg-navy/5 text-navy font-bold text-xs rounded-lg border border-navy/10">
                {item}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600 font-medium">
            is the intellectual property of Steth MBBS Overseas unless otherwise stated.
          </p>
          <p className="text-sm text-gray-700 font-semibold bg-ghost p-4 rounded-xl border border-gray-200">
            No content may be copied, reproduced, distributed, modified, or published without prior written permission.
          </p>
        </div>
      )
    },
    {
      id: "8",
      title: "8. Website Usage",
      content: (
        <div className="space-y-3">
          <p className="text-gray-600 leading-relaxed font-medium">You agree not to:</p>
          <ul className="space-y-2 text-gray-700 text-sm font-medium">
            {[
              "Attempt unauthorized access to the website.",
              "Introduce malware or malicious software.",
              "Interfere with website functionality.",
              "Copy or misuse website content.",
              "Use the website for unlawful activities."
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs font-bold text-rose-700 uppercase tracking-wider pt-2">
            Violation of these terms may result in legal action.
          </p>
        </div>
      )
    },
    {
      id: "9",
      title: "9. Third-Party Links",
      content: (
        <p className="text-gray-600 leading-relaxed font-medium">
          Our website may contain links to third-party websites for your convenience. We are not responsible for the content, policies, or practices of these external websites.
        </p>
      )
    },
    {
      id: "10",
      title: "10. Limitation of Liability",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed font-medium">
            While we strive to provide accurate and updated information, Steth MBBS Overseas shall not be liable for:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2.5 text-sm font-medium text-gray-700">
            {[
              "University policy changes",
              "Visa rejection",
              "Delays caused by universities or government authorities",
              "Changes in tuition fees",
              "Changes in immigration regulations",
              "Technical issues beyond our control",
              "Losses arising from reliance on third-party information"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2 bg-ghost p-3 rounded-lg border border-gray-100">
                <span className="text-medical font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 font-medium italic">
            Users are advised to verify important information directly with the concerned authorities whenever necessary.
          </p>
        </div>
      )
    },
    {
      id: "11",
      title: "11. Privacy",
      content: (
        <p className="text-gray-600 leading-relaxed font-medium">
          Your use of our website is also governed by our <Link href="/privacy-policy" className="text-medical font-bold hover:underline">Privacy Policy</Link>, which explains how we collect, use, and protect your personal information.
        </p>
      )
    },
    {
      id: "12",
      title: "12. Changes to Terms",
      content: (
        <p className="text-gray-600 leading-relaxed font-medium">
          Steth MBBS Overseas reserves the right to update or modify these Terms & Conditions at any time without prior notice. Any changes will become effective immediately upon publication on this page.
        </p>
      )
    },
    {
      id: "13",
      title: "13. Governing Law",
      content: (
        <p className="text-gray-600 leading-relaxed font-medium">
          These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising from the use of this website or our services shall be subject to the exclusive jurisdiction of the courts located in Indore, Madhya Pradesh.
        </p>
      )
    }
  ];

  return (
    <main className="pt-28 pb-20 bg-gray-50/50 min-h-screen">
      {/* HERO HEADER */}
      <section className="bg-navy text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-medical/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-medical text-xs font-black uppercase tracking-widest mb-6">
            <HiOutlineScale className="text-base" /> Legal Information
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-4">
            Terms & <span className="text-medical">Conditions</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base font-medium max-w-2xl mx-auto">
            Last Updated: <span className="text-white font-bold">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* CONTENT CONTAINER */}
      <section className="max-w-5xl mx-auto px-6 -mt-6">
        {/* INTRO CARD */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 mb-10">
          <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-3">
            <HiOutlineDocumentText className="text-medical text-2xl" />
            Welcome to Steth MBBS Overseas
          </h2>
          <p className="text-gray-600 leading-relaxed font-medium text-base">
            These Terms & Conditions govern your use of our website and the educational consultancy services provided by us. By accessing our website or using our services, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please refrain from using our website or services.
          </p>
        </div>

        {/* SECTIONS LIST */}
        <div className="space-y-8">
          {sections.map((sec) => (
            <div key={sec.id} className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100/80 transition-all hover:shadow-lg">
              <h2 className="text-2xl font-black text-navy mb-6 tracking-tight">
                {sec.title}
              </h2>
              {sec.content}
            </div>
          ))}

          {/* SECTION 14: CONTACT INFO */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100/80">
            <h2 className="text-2xl font-black text-navy mb-6 tracking-tight">
              14. Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed font-medium mb-6">
              If you have any questions regarding these Terms & Conditions, please contact us:
            </p>

            <div className="bg-ghost rounded-2xl p-6 border border-gray-200/60 space-y-4 max-w-2xl">
              <h3 className="font-black text-navy text-lg">Steth MBBS Overseas</h3>
              
              <div className="space-y-3 text-sm text-gray-700 font-medium">
                <div className="flex items-start gap-3">
                  <HiOutlineMapPin className="text-medical text-xl shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-navy">Address:</span>
                    <p className="text-gray-600">115, First Floor, Bhakatgarh Tower, 10/1 New Palasia, Indore, Madhya Pradesh – 452001</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <HiOutlinePhone className="text-medical text-xl shrink-0" />
                  <div>
                    <span className="font-bold text-navy">Phone: </span>
                    <a href="tel:+918770478972" className="text-medical font-bold hover:underline">+91 87704 78972</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <HiOutlineEnvelope className="text-medical text-xl shrink-0" />
                  <div>
                    <span className="font-bold text-navy">Email: </span>
                    <a href="mailto:stethoverseas06@gmail.com" className="text-medical font-bold hover:underline">stethoverseas06@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <HiOutlineGlobeAlt className="text-medical text-xl shrink-0" />
                  <div>
                    <span className="font-bold text-navy">Website: </span>
                    <a href="https://www.stetheducation.com" target="_blank" rel="noopener noreferrer" className="text-medical font-bold hover:underline">https://www.stetheducation.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-navy font-bold text-sm leading-relaxed bg-medical/10 p-4 rounded-xl border border-medical/20 text-center">
                By using our website and services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
