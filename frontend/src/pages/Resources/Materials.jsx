import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Reuse high-res images
import colimg1 from "../../assets/Bench_Planter.png";

const Materials = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Materials & Finish Specifications Guide | Urbanland Products",
      description: "An in-depth guide detailing Robinia vs. Jatoba timber weathering characteristics, structural hot-dip galvanization thickness specs, GFRC planter formulas, and PE wicker UV benchmarks."
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Materials Engineering Guide</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Materials & <br/>
          <span className="text-[#C9A84C]">Weathering Specs.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          Every Urbanland product is constructed utilizing materials certified to withstand UV radiation, high foot traffic, and coastal humidity levels.
        </p>
      </section>

      {/* Split layout: detail list and specs grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold uppercase tracking-wider text-[#2C5F2E] mb-2">— ARCHITECTURAL SLATS SPECIFICATION</h2>
          
          <div className="flex flex-col gap-1.5 pb-4 border-b border-black/[0.08]">
            <h3 className="text-lg font-black text-black uppercase">Jatoba Hardwood FSC® (Brazilian Cherry)</h3>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
              Jatoba is an exceptionally dense tropical hardwood (1190 kg/m³) with excellent biological resistance against insects and decay. It slowly weathers from warm red-brown tones into an elegant uniform silver-gray patina if left untreated.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 pb-4 border-b border-black/[0.08]">
            <h3 className="text-lg font-black text-black uppercase">Black Locust (Robinia Pseudoacacia)</h3>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
              The only heavy-duty structural timber native to temperate climates with natural class 1 durability. Thermal modification improves dimensional stability, creating warm golden-brown slats that age into uniform light silver tones.
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg font-black text-black uppercase">WPC (Wood Polymer Composite)</h3>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed">
              Composed of 60% wood fibers and 40% high-density recycled polymers, WPC requires absolutely zero oil coatings or painting, providing complete fade-resistance and splinter-free safety for municipal parks.
            </p>
          </div>
        </div>

        <div className="w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-md relative bg-black/5 select-none">
          <img
            src={colimg1}
            alt="Robinia wooden slat bench planar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </section>

      {/* Engineering specifications table */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mb-8 border-b border-[#2D2D2D]/10 pb-4 select-none">
          Structural Engineering Parameters:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-[2rem] border border-black/[0.03] p-8 shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#C9A84C] mb-4">Galvanization Thickness</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              All carbon steel components undergo complete immersion hot-dip galvanization conforming to **ISO 1461**, establishing a minimum zinc layer thickness of **85 micrometers (μm)** to withstand coastal humidity exposures.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] border border-black/[0.03] p-8 shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#C9A84C] mb-4">GFRC Mix Design Formula</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              Our Glass Fiber Reinforced Concrete (GFRC) incorporates premium white Portland cement, selected sands, and **5% alkali-resistant (AR) glass fibers** with advanced polymers, achieving a high flexural strength of **18-22 MPa**.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] border border-black/[0.03] p-8 shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#C9A84C] mb-4">PE Wicker UV Ratings</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              Synthetic wicker weaves are crafted with premium **Polyethylene (PE)** compound additives. Tested under accelerated UV weathering to **3,000 hours (ISO 4892-2)**, they show zero color fading, rotting, or embrittlement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Materials;
