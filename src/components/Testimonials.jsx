import { HiOutlineChatBubbleLeftRight, HiOutlineStar } from "react-icons/hi2";
import Image from "next/image";


export default function Testimonials() {
  const reviews = [
    {
      name: "Vansh Gupta",
      university: "Osh state university",
      country: "kyrgystan",
      img: "/testimonial-2.JPG",
      text: "Choosing the right university abroad is one of the biggest decisions a medical aspirant will make. Steth Overseas makes this process smooth, clear, and stress-free. A highly reliable consultancy that truly cares about the careers of its students."
    },
    {
      name: "Shaikh Musaib",
      university: "Asian International University",
      country: "Kyrgyzstan ",
      img: "/testimonial-1.JPG",
      text: "I had spoken to multiple consultancies before, but Steth felt more genuine. They didn’t push me into a random university and actually explained pros and cons. I’m currently in Asian International University, and I’m happy with my decision."
    },
    {
      name: "Satyam Thomgom",
      university: "Eurasian International University",
      country: "Kyrgyzstan",
      img: "/testimonial-3.JPG",
      text: "I was honestly confused about which country to choose for MBBS, but Steth Overseas explained everything clearly without rushing me. I finally chose Eurasian International University in Kyrgyzstan, and the entire admission and visa process went smoothly. What I liked most is that they didn’t make false promises"
    },
    {
      name: "Anmol Pawar",
      university: "Asian International University",
      country: "Kyrgyzstan",
      img: "/testimonial-4.JPG",
      text: "I would like to sincerely thank you for your guidance and support throughout my admission process. Your help made everything much clearer and easier, and I truly appreciate the time and effort you put into assisting me. I am very grateful for your professionalism and dedication. This opportunity means a lot to me, and I couldn’t have done it without your support.."
    },
    {
      name: "Arpita Rajawat",
      university: "Asian International University",
      country: "Kyrgyzstan",
      img: "/testimonial-5.JPG",
      text: "My parents were initially not convinced about sending me abroad, especially to Kyrgyzstan. But after counseling with Steth Overseas, all their doubts were cleared. Now I’m studying MBBS here confidently and focusing fully on my studies"
    },
    {
      name: "Vishal Kashyap",
      university: "Eurasian International University",
      country: "Kyrgyzstan",
      img: "/testimonial-6.JPG",
      text: "My main concern was budget and transparency. Steth guided me to Eurasian International University in Kyrgyzstan and clearly explained all the costs in advance. There were no hidden charges, which I really appreciated"
    },
  ];

  return (
    <section className="py-24 bg-white " id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-medical font-black tracking-[0.4em] text-[10px] uppercase mb-4">Social Proof</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-navy leading-tight">
              Real Stories from <br /> our <span className="text-medical">Future Doctors</span>
            </h3>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-ghost px-6 py-3 rounded-2xl border border-gray-100">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => <HiOutlineStar key={i} className="fill-current" />)}
            </div>
            <span className="font-black text-navy text-sm">4.9/5 Rating</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((item, i) => (
            <div 
              key={i} 
              className="group p-10 bg-[#dee5f5] rounded-[48px] border border-transparent hover:border-medical/20 hover:bg-white hover:shadow-2xl transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-10 right-10 text-6xl text-medical/10 group-hover:text-medical/20 transition-colors">
                <HiOutlineChatBubbleLeftRight />
              </div>

              <p className="text-gray-600 text-lg italic leading-relaxed mb-10 relative z-10">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={64}
                  height={64}
                  // className="rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all shadow-lg"
                  className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all shadow-lg"
                />
                <div>
                  <h4 className="font-black text-navy text-xl">{item.name}</h4>
                  <p className="text-medical font-bold text-[10px] uppercase tracking-widest">
                    {item.university}, {item.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Video Testimonial Callout */}
        <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm font-medium">
                Want to see video reviews? <a href="#" className="text-medical font-bold border-b-2 border-medical/20 hover:border-medical transition-all">Visit our YouTube Channel</a>
            </p>
        </div>
      </div>
    </section>
  );
}