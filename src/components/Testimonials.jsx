import { HiOutlineChatBubbleLeftRight, HiOutlineStar } from "react-icons/hi2";

export default function Testimonials() {
  const reviews = [
    {
      name: "Aditya Sharma",
      university: "Tbilisi State Medical University",
      country: "Georgia",
      img: "https://i.pravatar.cc/150?u=aditya",
      text: "Choosing Steth was the best decision. From visa processing to finding a local Indian mess in Tbilisi, they supported me like family. Now in my 3rd year, I couldn't be happier."
    },
    {
      name: "Sneha Reddy",
      university: "Davao Medical School Foundation",
      country: "Philippines",
      img: "https://i.pravatar.cc/150?u=sneha",
      text: "The US-based curriculum here is amazing. Steth team clearly explained the BS-MD process which was confusing at first. Their on-ground representative was there to pick me up at Manila airport."
    },
    {
      name: "Rohan Verma",
      university: "Kazakh National Medical University",
      country: "Kazakhstan",
      img: "https://i.pravatar.cc/150?u=rohan",
      text: "I wanted a budget-friendly option without compromising quality. Steth suggested Kazakhstan and helped me get a government hostel seat. The processing was 100% transparent."
    },
    {
      name: "Priya Das",
      university: "Yerevan State Medical University",
      country: "Armenia",
      img: "https://i.pravatar.cc/150?u=priya",
      text: "Armenia is so safe and peaceful. Steth helped me with the MEA Apostille and all the documentation which was very overwhelming. They made my dream of becoming a doctor a reality."
    }
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
                <img 
                  src={item.img} 
                  alt={item.name} 
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