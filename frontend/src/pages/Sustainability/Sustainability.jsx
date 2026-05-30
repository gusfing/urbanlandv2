import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Reuse assets
import welcome2 from '../../assets/welcome-2.png';

const Sustainability = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Sustainability & Ecological Commitment | Urbanland Products",
      description: "Discover Urbanland's biological neutral design framework: FSC-certified tropical wood sourcing, structural carbon footprint reduction, and 100% recyclable steel assemblies.",
      og_image: welcome2
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Ecological Compliance</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Sustainable Urbanism <br/>
          <span className="text-[#C9A84C]">for the Future.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          We design public furniture on the principle of biological neutrality. Our materials, engineering processes, and operations respect local ecosystems and mitigate urban heat effects.
        </p>
      </section>

      {/* Grid Content */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold uppercase tracking-wider text-[#2C5F2E] mb-2">— OUR GREEN PLEDGES</h2>
          
          <div className="flex flex-col gap-1.5 pb-4 border-b border-black/[0.08]">
            <h3 className="text-lg font-black text-black uppercase">FSC® Certified Sourcing</h3>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
              We verify that all timber slats (such as Jatoba and Robinia) are harvested from forests managed to preserve biodiversity and protect native rights, ensuring 100% ecological traceability.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 pb-4 border-b border-black/[0.08]">
            <h3 className="text-lg font-black text-black uppercase">Low Carbon Steel Metallurgy</h3>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
              All supporting structure steel channels are sourced from mills utilizing low-emission electric arc furnaces (EAF). They are designed for infinite lifecycle recyclability.
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg font-black text-black uppercase">Micro-climate Planning</h3>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
              Our modular PLATFORM cultivation islands introduce green bioswales and planter beds directly into thermal-heavy paved streets, helping lower localized ambient city temperatures.
            </p>
          </div>
        </div>

        <div className="w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-md relative bg-black/5 select-none">
          <img
            src={welcome2}
            alt="Lush green plant integration in public street planter boxes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
