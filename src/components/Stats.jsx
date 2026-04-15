export default function Stats() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
        <div className="space-y-2">
          <p className="text-4xl md:text-5xl font-black text-white">10+</p>
          <p className="text-medical font-medium text-sm tracking-widest uppercase">Years Experience</p>
        </div>

        <div className="space-y-2 border-l border-white/10">
          <p className="text-4xl md:text-5xl font-black text-white">500+</p>
          <p className="text-medical font-medium text-sm tracking-widest uppercase">Students Placed</p>
        </div>

        <div className="space-y-2 border-l border-white/10">
          <p className="text-4xl md:text-5xl font-black text-white">25+</p>
          <p className="text-medical font-medium text-sm tracking-widest uppercase">Global Partners</p>
        </div>

        <div className="space-y-2 border-l border-white/10">
          <p className="text-4xl md:text-5xl font-black text-white">100%</p>
          <p className="text-medical font-medium text-sm tracking-widest uppercase">Visa Success</p>
        </div>

      </div>
    </section>
  );
}