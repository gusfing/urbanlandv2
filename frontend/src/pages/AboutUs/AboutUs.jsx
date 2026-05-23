import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Import images
import welcome1 from '../../assets/welcome-1.png';

const AboutUs = () => {
  useEffect(() => {
    updatePageSEO({
      title: "About Us | Urbanland Products",
      description: "Learn about Urbanland Products LLP, India's leading manufacturer of high-end street furniture, architectural GFRC planters, and transit shelters.",
      og_image: welcome1
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Editorial Title */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Shaping the Urban Footprint</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Crafting Premium <br/>
          <span className="text-[#C9A84C]">Urban Landmarks.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          Urbanland Products LLP is an ISO 9001 certified engineering firm specializing in high-performance public space furniture, planters box assemblies, and transit infrastructure.
        </p>
      </section>

      {/* Grid Layout about sections */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
        <div className="w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-md relative bg-black/5 select-none">
          <img
            src={welcome1}
            alt="Urbanland manufacturing facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold uppercase tracking-wider text-[#2C5F2E] mb-2">— CORE MANUFACTURING PRINCIPLES</h2>
          
          <div className="flex flex-col gap-1.5 pb-4 border-b border-black/[0.08]">
            <h3 className="text-lg font-black text-black uppercase">1. Material Integrity</h3>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
              We never compromise on base metallurgy. All steel elements are double-layer zinc primed and architectural powder-coated. Timbers are FSC-certified tropical Jatoba or thermo-processed Robinia.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 pb-4 border-b border-black/[0.08]">
            <h3 className="text-lg font-black text-black uppercase">2. Advanced GFRC Castings</h3>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
              Our Glass Fiber Reinforced Concrete (GFRC) offers structural thickness with lightweight flexural properties. Planters, benches, and parklets retain high frost and moisture resistance layers.
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg font-black text-black uppercase">3. Ecological Neutrals</h3>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
              All steel hardware components are fully recyclable at the end of their lifecycle. Timbers decompose organically, leaving a net-zero microplastics footprint in public soil ecosystems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
