import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { products } from "../../constants/productsData";

const divisions = [
  { id: "benches", name: "Outdoor Benches", tagline: "WPC, Aluminium, & Concrete architectural benches.", path: "/products/benches", specs: ["FSC Robinia", "Concrete", "HDG Steel"], category: "Street Furniture" },
  { id: "aluminium-benches", name: "Aluminium Benches", tagline: "Premium lightweight rust-proof benches.", path: "/products/benches/aluminium-benches", specs: ["Al-Mg-Si Alloy", "Rust Proof", "Akzonobel Coating"], category: "Street Furniture" },
  { id: "planters", name: "Planters Boxes", tagline: "Concrete cultivation islands and planters boxes.", path: "/products/planters", specs: ["Lightweight Concrete", "Double-Walled", "Root Protection"], category: "Street Furniture" },
  { id: "dustbins", name: "Litter & Recycling Bins", tagline: "Anti-vandalism dual litter recycling receptacles.", path: "/products/dustbins", specs: ["Vandal Resistant", "Segregation Lids", "Casing Locks"], category: "Street Furniture" },
  { id: "bus-shelters", name: "Smart Bus Shelters", tagline: "MS/SS intelligent municipal bus stop canopies.", path: "/products/bus-shelters", specs: ["Structural Steel", "Safety Laminated Glass", "Solar Roofing Option"], category: "Shelters & Structures" },
  { id: "car-shelters", name: "Premium Car Shelters", tagline: "High-tensile modular vehicle shading parking canopies.", path: "/products/car-shelters", specs: ["PVDF Tensile Roof", "Cantilever Columns", "EV Ready"], category: "Shelters & Structures" },
  { id: "canteen-tables", name: "Canteen Tables & Sets", tagline: "Heavy-duty outdoor corporate dining furniture.", path: "/products/canteen-tables", specs: ["HPL Panel Slats", "Morse Frame Series", "Corporate Grade"], category: "Indoor & Dining" },
  { id: "cabanas", name: "Luxury Cabanas", tagline: "Premium daybed shade structures for hotels & pools.", path: "/products/cabanas", specs: ["Sunbrella® Fabric", "Powder Coated Steel", "Beverage Racks"], category: "Shelters & Structures" },
  { id: "poolside-loungers", name: "Poolside Loungers", tagline: "Ergonomic weather-proof poolside lounge beds.", path: "/products/poolside-loungers", specs: ["HDPE Synthetic Wicker", "Rustless Aluminium", "Quick-Dry Core"], category: "Wicker & Outdoor" },
  { id: "wicker-furniture", name: "Wicker Furniture", tagline: "Premium weatherproof outdoor wicker furniture ensembles.", path: "/products/wicker-furniture", specs: ["UV-Resistant HDPE", "Aluminium Frame", "2-Year Guarantee"], category: "Wicker & Outdoor" },
  { id: "wicker-outdoor-products", name: "Wicker Outdoor Products", tagline: "Premium cabanas, poolside loungers, and wicker living/dining sets.", path: "/products/wicker-furniture/wicker-outdoor-products", specs: ["UV-Resistant HDPE", "Aluminium Frame", "2-Year Guarantee"], category: "Wicker & Outdoor" },
  { id: "wicker-living-sets", name: "Wicker Living Sets", tagline: "High-density premium polyethylene wicker sofas.", path: "/products/wicker-living-sets", specs: ["UV-Blocked Weave", "Modular Sofa Sections", "Performance Canvas"], category: "Wicker & Outdoor" },
  { id: "wicker-dining-sets", name: "Wicker Dining Sets", tagline: "Luxury synthetic wicker dining tables and chairs.", path: "/products/wicker-dining-sets", specs: ["Tempered Glass Top", "High-Density Weave", "Leveler Glides"], category: "Wicker & Outdoor" },
  { id: "indoor-furniture", name: "Indoor Furniture", tagline: "Modern luxury indoor dining and accent furniture.", path: "/products/indoor-furniture", specs: ["Modern Luxury Dining", "Timeless Silhouettes", "Architectural Accents"], category: "Indoor & Dining" },
  { id: "metal-wooden-furniture", name: "Metal & Wooden Furniture", tagline: "Premium architectural steel and timber furniture.", path: "/products/metal-wooden-furniture", specs: ["Structural Timber", "Premium Carbon Steel", "Laser-Cut Joins"], category: "Indoor & Dining" },
  { id: "ss-bollards", name: "SS Bollards", tagline: "High-durability stainless steel safety bollards.", path: "/products/ss-bollards", specs: ["High-Impact SS304/316", "Safety Reflector Rings", "Cast In-Place"], category: "Street Furniture" },
  { id: "pergolas", name: "Architectural Pergolas", tagline: "Modern tensioned shading sail and louver structures.", path: "/products/pergolas", specs: ["HDPE Polymer Sails", "High-Tension Rigging", "Severe Weather Proof"], category: "Shelters & Structures" },
  { id: "gazebos", name: "Elegant Gazebos", tagline: "Pre-engineered luxury timber pavilions.", path: "/products/gazebos", specs: ["FSC Teak Pavilions", "Concealed Wiring", "Louver Privacy"], category: "Shelters & Structures" },
  { id: "pre-fab-homes", name: "Pre Fab Homes", tagline: "Modular residential structures and garden cabins.", path: "/products/pre-fab-homes", specs: ["Insulated Chassis", "Eco WPC Cladding", "48h Rapid Install"], category: "Shelters & Structures" }
];

const categories = [
  { id: "All", name: "All Products", icon: "menu" },
  { id: "Benches", name: "Benches", icon: "deck" },
  { id: "Planters", name: "Planters", icon: "local_florist" },
  { id: "Dustbins", name: "Dustbins", icon: "delete_outline" },
  { id: "Bus Shelters", name: "Bus Shelters", icon: "directions_bus" },
  { id: "Car Shelters", name: "Car Shelters", icon: "directions_car" },
  { id: "Canteen Tables", name: "Canteen Tables", icon: "table_restaurant" },
  { id: "Pergolas", name: "Pergolas", icon: "holiday_village" },
  { id: "Gazebos", name: "Gazebos", icon: "bungalow" },
  { id: "Wicker", name: "Wicker", icon: "chair_alt" },
  { id: "Indoor", name: "Indoor", icon: "weekend" },
  { id: "Bollards", name: "Bollards", icon: "traffic" },
];

const ProductsHub = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  useEffect(() => {
    updatePageSEO({
      title: "Urban Furniture Divisions Catalog | Urbanland Products",
      description: "Explore Urbanland's extensive catalog of premium street furniture including benches, shelters, sheds, planters, wicker lounge, and steel/aluminum furniture in India.",
      og_type: "website"
    });

    // Scroll reveal observer for all reveal classes
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -60px 0px" });
    const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-fade, .reveal-scale');
    revealEls.forEach(el => revealObserver.observe(el));

    return () => {
      cleanPageSEO();
      revealEls.forEach(el => revealObserver.unobserve(el));
    };
  }, []);

  const filteredDivisions = divisions.filter(div => {
    const matchesSearch = div.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          div.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Map the new categories back to the division filtering logic
    let matchesCategory = false;
    if (activeCategory === "All") matchesCategory = true;
    else if (activeCategory === "Benches") matchesCategory = div.id.includes("bench");
    else if (activeCategory === "Planters") matchesCategory = div.id.includes("planter");
    else if (activeCategory === "Dustbins") matchesCategory = div.id.includes("dustbin");
    else if (activeCategory === "Bus Shelters") matchesCategory = div.id.includes("bus-shelter");
    else if (activeCategory === "Car Shelters") matchesCategory = div.id.includes("car-shelter");
    else if (activeCategory === "Canteen Tables") matchesCategory = div.id.includes("canteen");
    else if (activeCategory === "Pergolas") matchesCategory = div.id.includes("pergola");
    else if (activeCategory === "Gazebos") matchesCategory = div.id.includes("gazebo");
    else if (activeCategory === "Wicker") matchesCategory = div.id.includes("wicker") || div.id.includes("poolside") || div.id.includes("cabana");
    else if (activeCategory === "Indoor") matchesCategory = div.id.includes("indoor") || div.id.includes("metal");
    else if (activeCategory === "Bollards") matchesCategory = div.id.includes("bollard");

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Editorial Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 reveal-up">
        <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Collection Directories</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Engineered for <br/>
          <span className="text-[#C9A84C]">Vibrant Environments.</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6 mb-8">
          We manufacture premium street furniture, shelter systems, and outdoor wicker furniture utilizing hot-dip galvanized steel, Concrete, and FSC-certified timbers. Select a division to explore models.
        </p>

        {/* Horizontal Scrollable Category Filter */}
        <div className="flex items-center gap-3 w-full bg-white/40 p-3 rounded-full border border-[#2D2D2D]/10 mb-8 shadow-sm">
          <button 
            onClick={scrollLeft}
            className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#E5E1D8] text-[#2D2D2D] rounded-full hover:bg-[#D5D1C8] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back_ios_new</span>
          </button>
          
          <div 
            ref={scrollRef}
            className="flex-1 overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-3 px-1"
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeCategory === cat.id 
                    ? 'bg-[#2C5F2E] text-white border-[#2C5F2E] shadow-md' 
                    : 'bg-transparent text-[#2D2D2D]/70 border-[#2D2D2D]/20 hover:border-[#2C5F2E] hover:text-[#2C5F2E]'
                }`}
              >
                <span className="material-symbols-outlined text-[1.1rem]">
                  {cat.icon}
                </span>
                <span className="whitespace-nowrap uppercase tracking-wider text-xs">{cat.name}</span>
              </button>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#2C5F2E] text-white rounded-full hover:bg-[#1E4220] transition-colors shadow-md"
          >
            <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input 
            type="text" 
            placeholder="Search within divisions..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/60 border border-[#2D2D2D]/10 text-[#1A1A1A] text-sm md:text-base rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#2C5F2E]/30 focus:border-[#2C5F2E]/30 transition-all shadow-sm placeholder:text-[#2D2D2D]/40"
          />
          <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-[#2D2D2D]/40">
            search
          </span>
        </div>
      </section>

      {/* Grid Directory Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 animate-fade-in">
        {filteredDivisions.length === 0 ? (
          <div className="text-center py-20 text-[#2D2D2D]/60 text-lg">
            No divisions found matching "{searchTerm}"
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDivisions.map((div) => {
              let lookupId = div.id;
            if (div.id === "aluminium-benches") lookupId = "benches";
            if (div.id === "wicker-furniture") lookupId = "wicker-living-sets";
            let matchedProd = products.find(p => {
              if (div.id === "aluminium-benches") {
                return p.category === "benches" && 
                  ((p.description || "").toLowerCase().includes("aluminium") || 
                   (p.specifications?.materials || "").toLowerCase().includes("aluminium") || 
                   (p.title || "").toLowerCase().includes("aluminium"));
              }
              return p.category === lookupId;
            });
            if (!matchedProd) {
              matchedProd = products.find(p => p.category === "canteen-tables");
            }
            const image = matchedProd ? matchedProd.image : "";
            const secondImage = matchedProd && matchedProd.gallery && matchedProd.gallery[1] ? matchedProd.gallery[1] : "";
            
            const modelCount = (() => {
              if (div.id === "aluminium-benches") {
                return products.filter(p => p.category === "benches" && 
                  ((p.description || "").toLowerCase().includes("aluminium") || 
                   (p.specifications?.materials || "").toLowerCase().includes("aluminium") || 
                   (p.title || "").toLowerCase().includes("aluminium"))
                ).length;
              }
              if (div.id === "wicker-furniture" || div.id === "wicker-outdoor-products") {
                return products.filter(p => p.category === "wicker-living-sets" || p.category === "wicker-dining-sets").length;
              }
              return products.filter(p => p.category === div.id).length;
            })();
            
            return (
              <Link
                key={div.id}
                to={div.path}
                className={`catalog-card bg-white rounded-[37.5px] p-4 sm:p-5 flex flex-col justify-between items-stretch shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-black/[0.03] transition-all duration-500 group cursor-pointer no-underline block hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] reveal-scale delay-${[100,150,200,100,150,200,100,150,200,100,150,200,100,150,200,100,150,200,100][divisions.indexOf(div)] || 100}`}
              >
                {/* Header info */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl md:text-2xl font-light text-[#1a1a1a] tracking-tight leading-tight group-hover:text-black transition-colors duration-300">
                    {div.name}
                  </h3>
                  
                  {/* Model Count Badge matching home page style */}
                  <div className="flex gap-1.5 shrink-0 pt-1">
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider rounded-full px-3 py-1.5 bg-[#C9A84C]/10 text-[#C9A84C]">
                      {modelCount} Models
                    </span>
                  </div>
                </div>

                {/* Middle: Product rendering with dual hover transition */}
                <div className="shrink-0 mt-4 flex justify-center items-center overflow-hidden relative w-full h-[260px] sm:h-[280px] bg-[#F7F4EF]/60 rounded-2xl group/image">
                  {/* First image */}
                  {image && (
                    <img
                      src={image}
                      alt={`${div.name} manufacturer India — Urbanland Products`}
                      className={`absolute inset-0 h-full w-full object-contain select-none transition-opacity duration-700 ease-in-out scale-105 ${
                        secondImage ? 'group-hover:opacity-0' : ''
                      }`}
                      style={{ mixBlendMode: 'multiply', filter: 'brightness(1.12) contrast(1.05)' }}
                    />
                  )}
                  {/* Second image (UGC installation) */}
                  {secondImage && (
                    <img
                      src={secondImage}
                      alt={`${div.name} installation`}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl select-none opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                    />
                  )}

                  {/* Hover Button */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <span className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 text-[0.7rem] uppercase tracking-wider text-[#2C5F2E] font-semibold bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full transition-all duration-300 shadow-sm block">
                      View Models
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductsHub;
