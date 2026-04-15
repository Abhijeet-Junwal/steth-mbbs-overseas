import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

export default function SocialSidebar() {
  const socials = [
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
  ];

  return (
    // Hidden on mobile, fixed on desktop left
    <div className="hidden lg:flex absolute left-4  top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-[#baf6be]/70 backdrop-blur-lg text-[#1c2539] flex items-center justify-center text-md transition-all duration-300 rounded-lg hover:text-[#baf6be] hover:bg-[#1c2539]"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}