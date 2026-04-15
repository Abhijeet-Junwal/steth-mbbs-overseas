export default function CountryGrid() {
  const countries = [
    {
      name: "Russia",
      universities: "50+",
      fee: "15 Lakhs*",
      image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Uzbekistan",
      universities: "12+",
      fee: "14 Lakhs*",
      image: "https://images.unsplash.com/photo-1744873332054-d982edc655dd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Georgia",
      universities: "15+",
      fee: "25 Lakhs*",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=500&auto=format&fit=crop",
    },
    // https://images.pexels.com/photos/17664850/pexels-photo-17664850.jpeg
    {
      name: "Kazakhstan",
      universities: "10+",
      fee: "16 Lakhs*",
      image: "https://images.unsplash.com/photo-1605360723267-6e7faca273de?q=80&w=672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Kyrgyzstan",
      universities: "08+",
      fee: "18 Lakhs*",
      image: "https://images.unsplash.com/photo-1610720684893-619cd7a5cde5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Philippines",
      universities: "20+",
      fee: "20 Lakhs*",
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=500&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 ">
        
        {/* Premium Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-medical"></span>
              <span className="text-medical font-bold tracking-[0.3em] text-xs uppercase">Global Opportunities</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-navy leading-[1.1]">
              Explore Your <span className="text-medical">MBBS</span> Destination
            </h2>
          </div>
          <div className="max-w-2xl flex-col">
            <p className="text-gray-500 lg:max-w-sm text-sm md:text-base leading-relaxed">
              We partner with top-tier, NMC-approved medical universities across the globe to ensure you receive world-class education.
            </p>
            <br />
            <a href="/countries" className="right-0 font-semibold underline text-xl text-medical">view all countries  </a>
          </div>
        </div>

        {/* The Natural Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {countries.map((country, index) => (
            <div 
              key={index} 
              className="group relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Background Destination Image */}
              <img 
                src={country.image} 
                alt={country.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>

              {/* Top Content: Flag & Tag */}
              <div className="absolute top-6 right-6 flex justify-between items-center z-10">
                {/* <span className="text-4xl filter drop-shadow-md">{country.flag}</span> */}
                <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold text-black uppercase tracking-widest">
                  NMC Approved
                </span>
              </div>

              {/* Bottom Content: Details */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h4 className="text-3xl font-bold text-white mb-4">{country.name}</h4>
                
                <div className="flex justify-between items-center mb-6 text-white/80 border-t border-white/10 pt-4">
                  <div className="text-center border-r border-white/10 pr-6">
                    <p className="text-[10px] uppercase tracking-tighter opacity-60">Universities</p>
                    <p className="font-bold text-lg">{country.universities}</p>
                  </div>
                  <div className="text-center pl-6">
                    <p className="text-[10px] uppercase tracking-tighter opacity-60">Investment</p>
                    <p className="font-bold text-lg text-medical">{country.fee}</p>
                  </div>
                </div>

                {/* <button className="w-full bg-white text-navy py-4 rounded-2xl font-bold text-sm hover:bg-medical hover:text-white transition-all transform group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  View University List
                </button> */}
                <a  
                  href={`/countries/${country.name.toLowerCase()}`}
                  className="w-full block bg-white text-navy py-4 rounded-2xl font-bold text-sm hover:bg-medical text-center hover:text-white transition-all transform group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

