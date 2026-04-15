import { 
  HiOutlineShieldCheck, HiOutlineCurrencyDollar, HiOutlineHomeModern, 
  HiOutlinePresentationChartLine, HiOutlineHandThumbUp, HiOutlineLightBulb 
} from "react-icons/hi2";

export default function WhyChooseUs() {
  const features = [
    {
      title: "NMC & WHO Recognized",
      desc: "We only partner with universities that are 100% compliant with National Medical Commission guidelines for global practice.",
      icon: <HiOutlineShieldCheck />
    },
    {
      title: "Direct University Tie-ups",
      desc: "No hidden agents. We provide direct admission and transparent fee structures paid directly to the university accounts.",
      icon: <HiOutlineCurrencyDollar />
    },
    {
      title: "FMGE / NExT Coaching",
      desc: "Specialized online and offline classes integrated with your degree to ensure you clear the Indian licensing exam on the first attempt.",
      icon: <HiOutlinePresentationChartLine />
    },
    {
      title: "Indian Mess & Hostels",
      desc: "Verified on-campus hostels with dedicated Indian kitchens providing veg and non-veg meals cooked by Indian chefs.",
      icon: <HiOutlineHomeModern />
    },
    {
      title: "On-Ground Assistance",
      desc: "Our local representatives are present in every country to assist students with airport pickup, SIM cards, and local registration.",
      icon: <HiOutlineHandThumbUp />
    },
    {
      title: "Clinical Exposure",
      desc: "Hands-on training in high-patient-inflow government hospitals ensuring you become a skilled clinician, not just a graduate.",
      icon: <HiOutlineLightBulb />
    }
  ];

  return (
    <section className="py-24 bg-ghost">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-medical font-black tracking-[0.4em] text-[10px] uppercase mb-4">The Steth Standard</h2>
          <h3 className="text-4xl md:text-6xl font-display font-black text-navy leading-tight">
            Why Thousands of <br /> Students <span className="text-medical">Trust Us</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div 
              key={i} 
              className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-3xl bg-ghost flex items-center justify-center text-3xl text-navy group-hover:bg-medical group-hover:text-white transition-all mb-8 shadow-inner">
                {item.icon}
              </div>
              
              <h4 className="text-2xl font-black text-navy mb-4 group-hover:text-medical transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Mini-Bar */}
        <div className="mt-20 bg-navy rounded-[40px] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical opacity-10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
                <h4 className="text-2xl font-black mb-2">Still confused about the right country?</h4>
                <p className="text-white/60 text-sm font-medium">Get a free 1-on-1 counseling session with our expert advisors.</p>
            </div>
            <a href="#contact">
                <button className="relative z-10 bg-medical text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-lg whitespace-nowrap">
                    Book Free Consultation
                </button>
            </a>
        </div>
      </div>
    </section>
  );
}