import { countryData } from "../../data/countries.js";
import { notFound } from "next/navigation";

export default async function CountryDetail({ params }) {
  const { slug } = await params;
  const data = countryData[slug];

  if (!data) return notFound();

  return (
    <main className="pt-32 pb-40 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* AUTHORITY HEADER */}
        <section className="border-b border-gray-100 pb-16 mb-16">
          <h1 className="text-5xl md:text-8xl font-display font-black text-navy leading-none mb-6">
            MBBS In <br /> <span className="text-medical">{data.name}</span>
          </h1>
          <h2 className="text-2xl font-bold text-gray-400 mb-8">{data.headline}</h2>
          
          <div className="space-y-6">
            {data.intro.map((para, i) => (
              <p key={i} className="text-lg text-gray-600 leading-relaxed">{para}</p>
            ))}
          </div>
        </section>

        {/* CORE INFORMATION BLOCKS */}
        <div className="grid gap-16">
          
          {/* 1. Course Details */}
          <section className="space-y-6">
            <h3 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Course Overview</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-ghost p-8 rounded-[32px]">
                <p className="text-xs font-bold text-medical uppercase tracking-widest mb-2">Duration</p>
                <p className="text-xl font-bold text-navy">{data.duration}</p>
              </div>
              <div className="bg-ghost p-8 rounded-[32px]">
                <p className="text-xs font-bold text-medical uppercase tracking-widest mb-2">Medium of Instruction</p>
                <p className="text-xl font-bold text-navy">{data.medium}</p>
              </div>
            </div>
          </section>

          {/* 2. Eligibility (Informative List) */}
          <section className="space-y-6">
            <h3 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Eligibility Requirements</h3>
            <ul className="space-y-4">
              {data.eligibility.map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-gray-600 text-lg">
                  <span className="text-medical font-black">✓</span> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 3. Fee Structure (Data Table) */}
          <section className="space-y-6">
            <h3 className="text-3xl font-display font-black text-navy uppercase tracking-tighter">Fee Structure (2026)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-xs font-bold uppercase tracking-widest text-gray-400">
                    <th className="py-4">University Name</th>
                    <th className="py-4">Annual Tuition</th>
                    <th className="py-4">Full Course Package</th>
                  </tr>
                </thead>
                <tbody className="text-lg font-bold text-navy">
                  {data.fees.map((fee, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-6">{fee.univ}</td>
                      <td className="py-6 text-medical">{fee.annual}</td>
                      <td className="py-6">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Living Cost & Checklist */}
          <div className="grid md:grid-cols-2 gap-12">
            <section className="bg-navy text-white p-10 rounded-[48px]">
              <h3 className="text-2xl font-bold mb-6">Required Documents</h3>
              <ul className="space-y-3 opacity-80">
                {data.documents.map((doc, i) => <li key={i}>• {doc}</li>)}
              </ul>
            </section>
            <section className="bg-ghost p-10 rounded-[48px]">
              <h3 className="text-2xl font-bold text-navy mb-6">Living Expenses</h3>
              <div className="space-y-4">
                <p className="flex justify-between"><span>Mess Fees:</span> <span className="font-bold">{data.livingCost.food}</span></p>
                <p className="flex justify-between"><span>Hostel:</span> <span className="font-bold">{data.livingCost.hostel}</span></p>
                <p className="flex justify-between border-t pt-4 font-black"><span>Total Monthly:</span> <span className="text-medical">{data.livingCost.total}</span></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}