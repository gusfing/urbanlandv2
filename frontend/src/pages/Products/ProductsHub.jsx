import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Reuse high-res images
import colimg1 from "../../assets/Bench_Planter.png";
import colimg2 from "../../assets/Car_Shelter.png";
import colimg3 from "../../assets/Wicker_Furniture.png";
import colimg4 from "../../assets/Bus_Shelters.png";

const divisions = [
  { id: "benches", name: "Benches & Public Seating", image: colimg1, count: 18, tagline: "WPC, Aluminium, & GFRC architectural benches.", path: "/products/benches" },
  { id: "bus-shelters", name: "Smart Bus Shelters", image: colimg4, count: 6, tagline: "MS/SS intelligent municipal bus stop canopies.", path: "/products/bus-shelters" },
  { id: "car-sheds", name: "Premium Car Sheds", image: colimg2, count: 4, tagline: "High-tensile modular car parking shelters.", path: "/products/car-sheds" },
  { id: "canteen-tables", name: "Canteen Tables & Sets", image: colimg1, count: 5, tagline: "Heavy-duty outdoor corporate dining furniture.", path: "/products/canteen-tables" },
  { id: "planters", name: "Architectural Planters", image: colimg1, count: 12, tagline: "GFRC cultivation islands and planters boxes.", path: "/products/planters" },
  { id: "dustbins", name: "Litter & Recycling Bins", image: colimg1, count: 8, tagline: "Anti-vandalism dual litter recycling receptacles.", path: "/products/dustbins" },
  { id: "cabanas", name: "Luxury Poolside Cabanas", image: colimg3, count: 3, tagline: "Premium shade structures for hotels and resorts.", path: "/products/cabanas" },
  { id: "swings", name: "Wicker & Cane Swings", image: colimg3, count: 4, tagline: "Handcrafted swings for luxury outdoor lounges.", path: "/products/swings" },
  { id: "wicker-furniture", name: "Wicker Outdoor Sets", image: colimg3, count: 14, tagline: "High-density premium polyethylene wicker dining.", path: "/products/wicker-furniture" },
  { id: "poolside-loungers", name: "Sunscape Poolside Loungers", image: colimg3, count: 6, tagline: "Ergonomic weather-proof poolside lounge beds.", path: "/products/poolside-loungers" },
  { id: "metal-wooden-furniture", name: "Metal Wooden Furniture", image: colimg1, count: 9, tagline: "Bespoke hardwood slats on steel framing systems.", path: "/products/metal-wooden-furniture" },
  { id: "ss-bollards", name: "SS Safety Bollards", image: colimg4, count: 11, tagline: "Anti-ram security bollards for urban traffic.", path: "/products/ss-bollards" },
  { id: "indoor-furniture", name: "Indoor Executive Furniture", image: colimg1, count: 5, tagline: "Low-priority corporate lobby seating systems.", path: "/products/indoor-furniture" }
];

const ProductsHub = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Urban Furniture Divisions Catalog | Urbanland Products",
      description: "Explore Urbanland's extensive catalog of premium street furniture including benches, shelters, sheds, planters, wicker lounge, and steel bollards in India.",
      og_type: "website"
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Editorial Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Collection Directories</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Engineered for <br/>
          <span className="text-[#C9A84C]">Vibrant Environments.</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          We manufacture premium street furniture, shelter systems, and outdoor wicker furniture utilizing hot-dip galvanized steel, GFRC, and FSC-certified timbers. Select a division to explore models.
        </p>
      </section>

      {/* Grid Directory Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((div) => (
            <Link
              key={div.id}
              to={div.path}
              className="bg-white rounded-[2.5rem] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between aspect-[16/14] cursor-pointer group no-underline"
            >
              <div>
                <div className="flex justify-between items-center w-full mb-4 select-none">
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 rounded-full">
                    {div.count} Models
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/35 group-hover:text-[#2C5F2E] transition-colors">
                    Explore →
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-[#1A1A1A] group-hover:text-[#2C5F2E] transition-colors leading-none mb-2">
                  {div.name}
                </h3>
                <p className="text-xs text-[#2D2D2D]/60 leading-relaxed max-w-[90%]">
                  {div.tagline}
                </p>
              </div>
              
              {/* Card visual showcase */}
              <div className="w-full h-[50%] rounded-2xl overflow-hidden bg-black/5 relative mt-4 select-none">
                <img 
                  src={div.image} 
                  alt={div.name}
                  className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsHub;
