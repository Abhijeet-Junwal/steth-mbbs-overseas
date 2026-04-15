export default function AdmissionJourney() {
  const steps = [
    { title: "Counseling", desc: "Expert guidance to find your perfect medical hub." },
    { title: "Registration", desc: "Securing your seat with the official offer letter." },
    { title: "Documentation", desc: "Handling Apostille, HRD, and Visa paperwork." },
    { title: "Departure", desc: "Safe travel and on-campus hostel allocation." },
  ];

  return (
    <section className="py-24 bg-ghost">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-medical font-black tracking-[0.3em] text-[10px] uppercase mb-4">The Roadmap</h2>
          <h3 className="text-4xl md:text-6xl font-display font-black text-navy leading-tight">
            Your Journey to <span className="text-medical">Doctorate</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-navy text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:bg-medical transition-colors">
                0{idx + 1}
              </div>
              
              <h4 className="text-2xl font-black text-navy mb-4 mt-2">{step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {step.desc}
              </p>
              
              {/* Subtle Arrow for Desktop */}
              {idx !== 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-gray-200 text-3xl">
                  →
                </div>
              )}
            </div>
          ))}
          
          </div>
          <div className="w-full h-fit bg-ghost rounded-[60px] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1605176173609-a0067079b419?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1lZGljYWwlMjBzdHVkeSUyMHdpdGhvdXQlMjBodW1hbnN8ZW58MHx8MHx8fDA%3D" 
                alt="Team Steth" 
                className="w-full h-full object-cover"
              />
            </div>
        </div>
      </div>
    </section>
  );
}