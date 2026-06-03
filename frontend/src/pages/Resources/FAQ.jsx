import React, { useState, useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import faqHeroImage from "../../assets/faq_hero_image.png";

const categories = [
  { id: "all", name: "All Questions" },
  { id: "general", name: "General Info" },
  { id: "products", name: "Products & Materials" },
  { id: "sustainability", name: "Sustainability" },
  { id: "projects", name: "Projects & Delivery" },
  { id: "warranty", name: "Warranty & Support" },
  { id: "customization", name: "Customization & Quotes" }
];

const faqsList = [
  // General Questions
  {
    category: "general",
    q: "What is Urbanland Products?",
    a: "Urbanland Products is a leading Made-in-India manufacturer of premium, sustainable outdoor furniture including benches, planter boxes, bus shelters, dustbins, wicker furniture and more. We specialize in durable, low-maintenance solutions for real estate, hospitality, healthcare, education and municipal & smart city projects."
  },
  {
    category: "general",
    q: "Where are your products manufactured?",
    a: "All our products are proudly manufactured in our state-of-the-art facility in Vasai, Maharashtra, India. This enables us to maintain absolute quality control and offer standard or fully customized products directly to commercial projects."
  },
  {
    category: "general",
    q: "Are your products suitable for Indian climate?",
    a: "Yes. Every product is engineered specifically to withstand extreme heat, intense monsoons, high humidity, UV exposure, and vandalism. We utilize UV-stabilized resins, rust-proof metal prep systems, and tropical-grade hardware to ensure high longevity."
  },
  // Products & Materials
  {
    category: "products",
    q: "What materials do you use?",
    a: "We primarily use WPC (Wood-Plastic Composite), NFC Wood (Natural Fiber Composite), Aluminium, Mild Steel (powder-coated), and Stainless Steel (Grades 304 and 316). We have completely moved away from traditional timber, such as teak or acacia, to support deforestation prevention."
  },
  {
    category: "products",
    q: "What is the difference between WPC and NFC Wood?",
    a: "WPC (Wood-Plastic Composite) combines wood fibers and recycled plastics to offer a warm wood-like aesthetic without rotting, cracking, or splintering. NFC Wood (Natural Fiber Composite) is an advanced evolution, combining agricultural rice-husk natural fibers with polymers for a premium matte texture, higher flexural strength (18-22 MPa), and exceptional weather stability."
  },
  {
    category: "products",
    q: "Which material is best for coastal areas?",
    a: "Aluminium and Grade 304/316 Stainless Steel are highly recommended for coastal and saline high-humidity environments. They offer superior natural resistance to oxidation and marine corrosion, ensuring structural integrity for over 20 years."
  },
  {
    category: "products",
    q: "Are your benches and planters suitable for high-traffic public areas?",
    a: "Absolutely. Our heavy-duty park benches, municipal bus shelters, and high-impact planters are built with structural mild steel (hot-dip galvanized conforming to ISO 1461), thick solid composite profiles, and internal steel reinforcement webs to resist vandal abuse and intensive daily use."
  },
  // Sustainability & Green Products
  {
    category: "sustainability",
    q: "How sustainable are your products?",
    a: "Sustainability is at our core. WPC and NFC Wood prevent deforestation by utilizing 100% recycled polymers and reclaimed natural fibers. Because they require no chemical stains or oils, and carry a long operational lifespan (12 to 20+ years), they drastically lower building carbon footprint and minimize replacement waste."
  },
  {
    category: "sustainability",
    q: "Do your products help with green building certifications?",
    a: "Yes. Architects and developers frequently utilize our eco-friendly, circular-materials composites and fully recyclable metal assemblies to secure critical green points under IGBC, GRIHA, and LEED green building certification programs."
  },
  // Projects & Delivery
  {
    category: "projects",
    q: "What is the typical lead time for projects?",
    a: "Standard catalogue designs are typically completed and dispatched in 2 to 4 weeks from drawing sign-off and order validation. Larger municipal transit shelter runs or highly customized estate orders require 6 to 8 weeks depending on materials allocation."
  },
  {
    category: "projects",
    q: "Do you provide installation services across India?",
    a: "Yes. We offer reliable pan-India delivery alongside technical installation support. We supply concrete chemical anchoring flanged installations (Grade 304/316 expansion bolts) or sub-surface wet-cast anchoring options to secure furniture across any surface type."
  },
  {
    category: "projects",
    q: "Can you handle large-scale developer and municipal projects?",
    a: "Absolutely. We are fully equipped to handle major volumes. We have successfully supplied and installed outdoor solutions for 50+ tier-1 developments, massive commercial business parks, hospitality venues, and smart-city municipal setups in Mumbai, Delhi, Bangalore, and Pune."
  },
  // Warranty & Support
  {
    category: "warranty",
    q: "What is your warranty coverage?",
    a: "Every product we manufacture is backed by our robust 2-Year Comprehensive Warranty, covering frame structural welds, seating composite panels, powder coating adhesion, PE wicker tensile strength, and any manufacturing defects."
  },
  {
    category: "warranty",
    q: "Do you provide after-sales support?",
    a: "Yes. We provide complete after-sales support including material inspection guidance, spare parts provision (such as replacement composite slats or matching wicker threads), and specialized cleaning procedures to ensure your layouts remain stunning."
  },
  // Customization & Quotations
  {
    category: "customization",
    q: "Can products be customised?",
    a: "Yes. Customization is one of our primary strengths. We work closely with landscape architects to create tailored site lengths, custom steel cutouts, bespoke concrete planter radii, custom RAL powder shades, and custom seating designs."
  },
  {
    category: "customization",
    q: "How do I get a quote?",
    a: "You can request a custom quote instantly by filling out the interactive RFP builder on our Contact page, or by contacting our team via email or phone. We pride ourselves on returning fully detailed commercial and technical quotes within 24 hours."
  },
  {
    category: "customization",
    q: "Do you provide BOQ and technical specifications?",
    a: "Yes. We supply landscape architects and planners with fully detailed pre-written BOQ templates, 2D/3D CAD drawing blocks (.dwg), structural loading specs, and certified materials reports to make project tendering seamless."
  }
];

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState({});

  useEffect(() => {
    updatePageSEO({
      title: "FAQ | Urbanland Products – Benches, Planters & Outdoor Furniture",
      description: "Answers to all your questions about Urbanland Products – sustainable outdoor furniture, materials (WPC, NFC Wood, Aluminium, Mild Steel), warranty, customization, delivery, installation, green building certifications and more."
    });
    return () => cleanPageSEO();
  }, []);

  const handleToggle = (faqQuestion) => {
    setOpenIndex(prev => ({
      ...prev,
      [faqQuestion]: !prev[faqQuestion]
    }));
  };

  // Filter FAQs based on active tab and search query
  const filteredFaqs = faqsList.filter((faq) => {
    const matchesTab = activeTab === "all" || faq.category === activeTab;
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32 relative">
      {/* Background ambient radial gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(44,95,46,0.06),transparent_65%)] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(201,168,76,0.04),transparent_65%)] pointer-events-none z-0" />

      {/* Hero Section: 2-column split-view layout */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-7 text-left">
            <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Frequently Asked Questions</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
              All Your <br/>
              <span className="text-[#C9A84C]">Questions Answered.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
              Clear answers to the most common questions about our sustainable outdoor furniture, manufacturing, green materials, warranties, and commercial project support.
            </p>

            {/* B2B Trust Badges - Icon-free, clean dot markers */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-[#EAE5DB]/45 px-4 py-2 rounded-full border border-black/[0.04] text-[10px] sm:text-xs font-semibold text-[#2C5F2E] select-none hover:bg-[#2C5F2E]/5 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2C5F2E]" />
                <span>Honest Answers</span>
              </div>
              <div className="flex items-center gap-2 bg-[#EAE5DB]/45 px-4 py-2 rounded-full border border-black/[0.04] text-[10px] sm:text-xs font-semibold text-[#2C5F2E] select-none hover:bg-[#2C5F2E]/5 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2C5F2E]" />
                <span>2-Year Comprehensive Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-[#EAE5DB]/45 px-4 py-2 rounded-full border border-black/[0.04] text-[10px] sm:text-xs font-semibold text-[#2C5F2E] select-none hover:bg-[#2C5F2E]/5 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2C5F2E]" />
                <span>Sustainable Materials</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero visual mockup */}
          <div className="lg:col-span-5 relative rounded-[2.5rem] overflow-hidden select-none bg-[#EAE5DB]/25 p-4 shadow-sm border border-black/[0.04] aspect-[4/3] flex items-center justify-center">
            <img 
              src={faqHeroImage} 
              alt="Premium sustainable outdoor plaza benches and planters layouts" 
              className="rounded-[2rem] w-full h-full object-cover shadow-inner" 
            />
            <div className="absolute bottom-6 right-6 bg-black/45 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white text-[9px] font-black uppercase tracking-widest pointer-events-none">
              ✦ Urbanland Systems
            </div>
          </div>

        </div>
      </section>

      {/* Search & Tabs Filtering Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 relative z-10">
        
        {/* Live Search Bar - Emojis removed */}
        <div className="relative max-w-2xl mb-10 group text-left">
          <input
            type="text"
            placeholder="Search FAQs by keywords (e.g. 'coastal', 'lead time', 'WPC')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/70 border border-black/10 rounded-full px-7 py-4.5 text-xs sm:text-sm text-black focus:outline-none focus:border-[#2C5F2E] focus:ring-1 focus:ring-[#2C5F2E]/10 font-medium shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-all duration-300 placeholder:text-black/35"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/5 hover:bg-black/15 text-[9px] uppercase font-black tracking-wider px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Tab Filter Buttons - Emojis completely removed */}
        <div className="flex flex-wrap gap-2.5 border-b border-black/[0.06] pb-8">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 border cursor-pointer select-none ${
                  isActive 
                    ? "bg-[#2C5F2E] border-[#2C5F2E] text-white shadow-md transform -translate-y-0.5" 
                    : "bg-white/60 border-black/[0.04] text-[#2D2D2D] hover:bg-[#EAE5DB] hover:border-black/15 hover:text-black"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Accordion Stack */}
      <section className="max-w-[1000px] mx-auto px-6 mb-24 relative z-10">
        {filteredFaqs.length > 0 ? (
          <div className="flex flex-col gap-4.5">
            {filteredFaqs.map((faq) => {
              const isOpen = !!openIndex[faq.q];
              return (
                <div 
                  key={faq.q}
                  className={`bg-white rounded-[2rem] border transition-all duration-500 overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.005)] ${
                    isOpen 
                      ? "border-[#2C5F2E]/40 ring-1 ring-[#2C5F2E]/10" 
                      : "border-black/[0.03] hover:border-black/10"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(faq.q)}
                    className="w-full px-6 py-6 md:px-9 flex justify-between items-center text-left cursor-pointer focus:outline-none border-none select-none group bg-white"
                  >
                    <div className="flex flex-col gap-1.5 pr-6">
                      <span className="text-[8px] font-black uppercase tracking-widest text-[#C9A84C]">
                        {categories.find(c => c.id === faq.category)?.name || faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base lg:text-lg font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#2C5F2E] transition-colors leading-snug">
                        {faq.q}
                      </h3>
                    </div>
                    {/* Text-based toggle indicator button - Emojis & raw icons completely removed */}
                    <span 
                      className={`text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 shrink-0 select-none ${
                        isOpen 
                          ? "bg-[#2C5F2E] text-white" 
                          : "bg-[#F7F4EF] text-[#2D2D2D]/60 group-hover:bg-[#2C5F2E]/10 group-hover:text-[#2C5F2E]"
                      }`}
                    >
                      {isOpen ? "Close" : "Read Answer"}
                    </span>
                  </button>

                  {/* Accordion Body */}
                  <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[350px] border-t border-black/[0.05]" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 py-6 md:px-9 text-xs sm:text-sm leading-relaxed text-[#2D2D2D]/75 bg-[#F7F4EF]/20 text-left">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State - Emojis & icons completely removed */
          <div className="text-center py-20 bg-white rounded-[2.5rem] border border-black/[0.04] p-10 max-w-xl mx-auto shadow-inner">
            <h3 className="text-lg font-black uppercase tracking-tight text-black mb-2">No matching questions found</h3>
            <p className="text-xs text-black/50 leading-relaxed mb-6">
              We couldn't find any FAQs matching "{searchQuery}". Try searching for another keyword or browse questions by clicking on the category tabs above.
            </p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveTab("all"); }}
              className="px-6 py-3 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-[#2D2D2D] transition-colors cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </section>

      {/* Still Have Questions? Banner */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-[#2D2D2D] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(44,95,46,0.2),transparent_60%)] pointer-events-none" />
          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.1),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-4 block">— Specialized Support</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none mb-6">
              Still Have Questions <br className="hidden sm:block"/>
              About Our Commercial Solutions?
            </h2>
            <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-10 max-w-xl mx-auto">
              Our engineering and design experts are available to guide you on anchoring details, certifications, custom layouts, and commercial project lead times.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4.5 bg-[#2C5F2E] hover:bg-[#3d7a40] text-white rounded-full font-bold uppercase tracking-wider text-xs transition-colors shadow-md no-underline inline-block"
              >
                Connect With Us
              </a>
              <a 
                href="/resources/downloads" 
                className="px-8 py-4.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white rounded-full font-bold uppercase tracking-wider text-xs transition-all no-underline inline-block"
              >
                Download Master Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
