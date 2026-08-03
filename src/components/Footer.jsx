import React from 'react';
import Link from 'next/link';
import { 
  HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin,
  HiOutlineArrowRight
} from "react-icons/hi2";
import { FaInstagram, FaFacebookF, FaYoutube, FaGoogle } from "react-icons/fa";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const countries = [
    { name: "Russia", slug: "russia" },
    { name: "Georgia", slug: "georgia" },
    { name: "Kyrgyzstan", slug: "kyrgyzstan" },
    { name: "Armenia", slug: "armenia" },
  ];

  const socials = [
    { icon: <FaInstagram />, link: "https://www.instagram.com/stethoverseas/?hl=en" },
    { icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=61590128561867" },
    { icon: <FaYoutube />, link: "https://youtube.com/@steth06?si=aazRHB_hDKjwwW9C" },
    { icon: <FaGoogle />, link: "https://www.google.com/maps/place/STETH+EDUCATION/@22.7278407,75.8826169,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fd8ae408e9ff:0x947e15d36cbcf20b!8m2!3d22.7278407!4d75.8851918!16s%2Fg%2F11zbgl0jsz?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D" },
  ];

  return (
    <footer className="bg-navy pt-24 pb-12 text-white overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-medical/5 rounded-full blur-[120px] -mb-48 -mr-48"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* COLUMN 1: BRANDING */}
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-black tracking-tighter uppercase">
              STETH<span className="text-medical">MBBS</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed font-medium">
              India's leading consultancy for global medical education. We transform aspirants into international doctors through ethical guidance.
            </p>
            <div className="flex gap-4">
              {/* {[FaInstagram, FaYoutube, FaFacebookF, FaLinkedinIn].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-medical hover:text-white transition-all text-white/60">
                  <Icon size={18} />
                </a>

              ))} */}
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-medical hover:text-white transition-all text-white/60"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK NAV */}
          <div>
            <h4 className="text-medical font-black text-[10px] uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors text-sm font-bold flex items-center group">
                <HiOutlineArrowRight className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-medical" />
                Home
              </Link></li>

              <li><Link href="/aboutus" className="text-white/60 hover:text-white transition-colors text-sm font-bold flex items-center group">
                <HiOutlineArrowRight className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-medical" />
                About Us
              </Link></li>

              <li><Link href="/countries" className="text-white/60 hover:text-white transition-colors text-sm font-bold flex items-center group">
                <HiOutlineArrowRight className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-medical" />
                Countries
              </Link></li>

              <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm font-bold flex items-center group">
                <HiOutlineArrowRight className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-medical" />
                Contact Us
              </Link></li>

              <li><Link href="/terms-and-conditions" className="text-white/60 hover:text-white transition-colors text-sm font-bold flex items-center group">
                <HiOutlineArrowRight className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-medical" />
                Terms & Conditions
              </Link></li>

              <li><Link href="/privacy-policy" className="text-white/60 hover:text-white transition-colors text-sm font-bold flex items-center group">
                <HiOutlineArrowRight className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-medical" />
                Privacy Policy
              </Link></li>
            </ul>
          </div>

          {/* COLUMN 3: TOP DESTINATIONS */}
          <div>
            <h4 className="text-medical font-black text-[10px] uppercase tracking-[0.3em] mb-8">Destinations</h4>
            <ul className="grid grid-cols-1 gap-4">
              {countries.map((country) => (
                <li key={country.slug}>
                  <Link href={`/countries/${country.slug}`} className="text-white/60 hover:text-white transition-colors text-sm font-bold">
                    MBBS in {country.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT MINI-WIDGET */}
          <div>
            <h4 className="text-medical font-black text-[10px] uppercase tracking-[0.3em] mb-8">Reach Us</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <HiOutlineMapPin className="text-medical text-xl shrink-0" />
                <p className="text-white/60 text-xs leading-relaxed font-medium">
                  115 First Floor, Bhakatgarh Tower<br/> 10/1 New Palasiya, Indore, M.P. , India <br/>Pin Code - 452001
                </p>
              </div>
              <div className="flex gap-4">
                <HiOutlinePhone className="text-medical text-xl shrink-0" />
                <p className="text-white/60 text-xs font-bold">+91 877047 8972</p>
              </div>
              <div className="flex gap-4">
                <HiOutlineEnvelope className="text-medical text-xl shrink-0" />
                <p className="text-white/60 text-xs font-bold">stethoverseas06@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">
            © {currentYear} STETH MBBS OVERSEAS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-white/30 text-[10px] font-black uppercase tracking-widest">
            <Link href="/privacy-policy" className="hover:text-medical transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-medical transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}