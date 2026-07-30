import React from 'react';
import Link from 'next/link';
import { 
  HiOutlineShieldCheck, HiOutlineLockClosed, HiOutlineEye, 
  HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin, HiOutlineGlobeAlt,
  HiOutlineCheckCircle
} from "react-icons/hi2";

export const metadata = {
  title: "Privacy Policy | Steth MBBS Overseas",
  description: "Privacy Policy explaining how Steth MBBS Overseas collects, uses, discloses, and safeguards your personal information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 30, 2026";

  const userCollectedInfo = [
    "Full Name",
    "Mobile Number",
    "Email Address",
    "City & State",
    "NEET Score",
    "Preferred Country or University",
    "Academic Information",
    "Passport details (only when required for admission procedures)",
    "Any other information voluntarily provided by you"
  ];

  const autoCollectedInfo = [
    "IP Address",
    "Browser Type",
    "Device Information",
    "Pages Visited",
    "Time Spent on Website",
    "Cookies and Analytics Data"
  ];

  const useInformationList = [
    "Provide MBBS abroad counselling services.",
    "Contact you regarding admissions and university options.",
    "Process your enquiries and applications.",
    "Share admission updates and important notifications.",
    "Improve our website and user experience.",
    "Provide customer support.",
    "Send promotional or educational information (you may opt out anytime)."
  ];

  const sharingList = [
    "Partner Universities",
    "Admission Coordinators",
    "Visa Processing Agencies",
    "Payment Service Providers",
    "Government Authorities (where legally required)",
    "Technology and Website Service Providers"
  ];

  const analyticsServices = [
    "Google Analytics",
    "Meta (Facebook) Pixel",
    "Google Ads Conversion Tracking"
  ];

  const rightsList = [
    "Access your personal information.",
    "Correct inaccurate information.",
    "Delete your personal information (subject to legal obligations).",
    "Withdraw consent for marketing communications."
  ];

  return (
    <main className="pt-28 pb-20 bg-gray-50/50 min-h-screen">
      {/* HERO HEADER */}
      <section className="bg-navy text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-medical/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-medical text-xs font-black uppercase tracking-widest mb-6">
            <HiOutlineShieldCheck className="text-base" /> Data Protection & Privacy
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-4">
            Privacy <span className="text-medical">Policy</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base font-medium max-w-2xl mx-auto">
            Last Updated: <span className="text-white font-bold">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* CONTENT CONTAINER */}
      <section className="max-w-5xl mx-auto px-6 -mt-6">
        {/* PREAMBLE CARD */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 mb-10">
          <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-3">
            <HiOutlineLockClosed className="text-medical text-2xl" />
            Our Commitment to Your Privacy
          </h2>
          <p className="text-gray-600 leading-relaxed font-medium text-base mb-4">
            At Steth MBBS Overseas, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p className="text-sm font-semibold text-navy bg-ghost p-4 rounded-xl border border-gray-200">
            By accessing our website, you agree to the terms of this Privacy Policy.
          </p>
        </div>

        {/* SECTIONS */}
        <div className="space-y-8">
          {/* 1. INFORMATION WE COLLECT */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100/80">
            <h2 className="text-2xl font-black text-navy mb-6 tracking-tight">
              1. Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-navy mb-3">
                  When you interact with our website or submit an enquiry, we may collect:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {userCollectedInfo.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 bg-ghost/80 p-3 rounded-xl border border-gray-100">
                      <HiOutlineCheckCircle className="text-medical text-lg shrink-0 mt-0.5" />
                      <span className="text-sm text-navy font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-base font-bold text-navy mb-3">
                  We may also automatically collect:
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {autoCollectedInfo.map((item, index) => (
                    <span key={index} className="px-3.5 py-2 bg-navy/5 text-navy font-bold text-xs rounded-xl border border-navy/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. HOW WE USE YOUR INFORMATION */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100/80">
            <h2 className="text-2xl font-black text-navy mb-6 tracking-tight">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 font-medium mb-4">We use your information to:</p>
            <ul className="space-y-3">
              {useInformationList.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-medical shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. COOKIES */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100/80">
            <h2 className="text-2xl font-black text-navy mb-6 tracking-tight">
              3. Cookies
            </h2>
            <div className="space-y-3 text-gray-600 font-medium leading-relaxed">
              <p>
                Our website may use cookies to improve your browsing experience. Cookies help us understand user behaviour and enhance website performance.
              </p>
              <p className="text-sm bg-ghost p-4 rounded-xl border border-gray-200 text-gray-700">
                You may disable cookies through your browser settings, although some features of the website may not function properly.
              </p>
            </div>
          </div>

          {/* 4. INFORMATION SHARING */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100/80">
            <h2 className="text-2xl font-black text-navy mb-6 tracking-tight">
              4. Information Sharing
            </h2>
            <p className="text-base font-bold text-emerald-700 bg-emerald-50 p-4 rounded-xl border border-emerald-100 mb-4">
              We do not sell, rent, or trade your personal information.
            </p>
            <p className="text-gray-600 font-medium mb-3">
              Your information may be shared only when necessary with:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-4">
              {sharingList.map((item, index) => (
                <li key={index} className="flex items-center gap-2.5 bg-ghost p-3 rounded-xl border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-navy shrink-0"></span>
                  <span className="text-sm font-semibold text-navy">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 font-medium italic">
              Such sharing is limited to the extent required for providing our services.
            </p>
          </div>

          {/* 5. DATA SECURITY */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100/80">
            <h2 className="text-2xl font-black text-navy mb-6 tracking-tight">
              5. Data Security
            </h2>
            <div className="space-y-3 text-gray-600 font-medium leading-relaxed">
              <p>
                We implement reasonable administrative, technical, and organizational measures to protect your personal information against unauthorized access, misuse, alteration, or disclosure.
              </p>
              <p className="text-sm text-gray-500 italic">
                While we strive to protect your data, no method of internet transmission or electronic storage is completely secure.
              </p>
            </div>
          </div>

          {/* 6. THIRD-PARTY LINKS */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100/80">
            <h2 className="text-2xl font-black text-navy mb-6 tracking-tight">
              6. Third-Party Links
            </h2>
            <p className="text-gray-600 font-medium leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </div>

          {/* 7. GOOGLE ANALYTICS & ADVERTISING */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100/80">
            <h2 className="text-2xl font-black text-navy mb-6 tracking-tight">
              7. Google Analytics & Advertising
            </h2>
            <p className="text-gray-600 font-medium mb-3">We may use services such as:</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {analyticsServices.map((item, index) => (
                <span key={index} className="px-4 py-2 bg-medical/10 text-medical font-bold text-xs rounded-xl border border-medical/20">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium">
              These tools help us understand website performance, improve marketing campaigns, and provide a better user experience.
            </p>
          </div>

          {/* 8. YOUR RIGHTS */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100/80">
            <h2 className="text-2xl font-black text-navy mb-6 tracking-tight">
              8. Your Rights
            </h2>
            <p className="text-gray-600 font-medium mb-3">You may request to:</p>
            <ul className="space-y-2.5 mb-4">
              {rightsList.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                  <HiOutlineCheckCircle className="text-medical text-lg shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 font-medium">
              To make any request, please contact us using the details below.
            </p>
          </div>

          {/* 9. CHILDREN'S PRIVACY */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100/80">
            <h2 className="text-2xl font-black text-navy mb-6 tracking-tight">
              9. Children's Privacy
            </h2>
            <p className="text-gray-600 font-medium leading-relaxed">
              Our services are intended for students and parents seeking higher education guidance. We do not knowingly collect personal information from children under the applicable legal age without parental involvement.
            </p>
          </div>

          {/* 10. CHANGES TO THIS PRIVACY POLICY */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100/80">
            <h2 className="text-2xl font-black text-navy mb-6 tracking-tight">
              10. Changes to this Privacy Policy
            </h2>
            <p className="text-gray-600 font-medium leading-relaxed">
              We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page along with the revised "Last Updated" date.
            </p>
          </div>

          {/* 11. CONTACT US */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100/80">
            <h2 className="text-2xl font-black text-navy mb-6 tracking-tight">
              11. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed font-medium mb-6">
              If you have any questions regarding this Privacy Policy or how your information is handled, please contact us:
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
                We are committed to maintaining the privacy and security of your personal information and appreciate your trust in Steth MBBS Overseas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
