import { FaInstagram, FaFacebookF, FaYoutube, FaGoogle } from "react-icons/fa";

export default function SocialSidebar() {
  const socials = [
    { icon: <FaInstagram />, link: "https://www.instagram.com/stethoverseas/?hl=en" },
    { icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=61590128561867" },
    { icon: <FaYoutube />, link: "https://youtube.com/@steth06?si=aazRHB_hDKjwwW9C" },
    { icon: <FaGoogle />, link: "https://www.google.com/maps/place/STETH+EDUCATION/@22.7278407,75.8826169,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fd8ae408e9ff:0x947e15d36cbcf20b!8m2!3d22.7278407!4d75.8851918!16s%2Fg%2F11zbgl0jsz?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D" },
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