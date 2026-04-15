import Image from "next/image";
export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/+918770478972" 
      target="_blank"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <div className="relative w-5 h-5 md:w-8 md:h-8 drop-shadow-2xl">
        <Image 
          src="/whatsapp.svg" 
          alt="Chat on WhatsApp" 
          fill
          className="object-contain"
        />
      </div>
    </a>
  );
}
