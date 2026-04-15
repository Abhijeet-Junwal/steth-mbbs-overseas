import React from 'react';
import { 
  HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin,
  HiOutlineArrowRight
} from "react-icons/hi2";
import { FaInstagram, FaYoutube, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const countries = [
    { name: "Russia", slug: "russia" },
    { name: "Georgia", slug: "georgia" },
    { name: "Kyrgyzstan", slug: "kyrgyzstan" },
    { name: "Armenia", slug: "armenia" },
  ];

  const socials = [
    { icon: <FaInstagram />, link: "https://www.instagram.com/steth_overseas?igsh=ZXFicGhldnZiN2Ji" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/steth-overseas-education-5514b8401?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
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
              <li><a href="/" className="text-white/60 hover:text-white transition-colors text-sm font-bold flex items-center group">
                <HiOutlineArrowRight className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-medical" />
                Home
              </a></li>

              <li><a href="about_us" className="text-white/60 hover:text-white transition-colors text-sm font-bold flex items-center group">
                <HiOutlineArrowRight className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-medical" />
                About Us
              </a></li>

              <li><a href="countries" className="text-white/60 hover:text-white transition-colors text-sm font-bold flex items-center group">
                <HiOutlineArrowRight className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-medical" />
                Countries
              </a></li>

              <li><a href="contact" className="text-white/60 hover:text-white transition-colors text-sm font-bold flex items-center group">
                <HiOutlineArrowRight className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-medical" />
                Contact Us
              </a></li>
            </ul>
          </div>

          {/* COLUMN 3: TOP DESTINATIONS */}
          <div>
            <h4 className="text-medical font-black text-[10px] uppercase tracking-[0.3em] mb-8">Destinations</h4>
            <ul className="grid grid-cols-1 gap-4">
              {countries.map((country) => (
                <li key={country.slug}>
                  <a href={`/countries/${country.slug}`} className="text-white/60 hover:text-white transition-colors text-sm font-bold">
                    MBBS in {country.name}
                  </a>
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
                <p className="text-white/60 text-xs leading-relaxed font-medium">
                  
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
            <a href="#" className="hover:text-medical transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-medical transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}