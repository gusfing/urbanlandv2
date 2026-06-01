import React, { useState, useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const Downloads = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", purpose: "Architect" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: "Downloads | Master Catalogue & Brochures | Urbanland Products",
      description: "Download the latest Master Catalogue, sector-specific brochures, technical documents and sustainable materials guide from Urbanland Products. Premium outdoor furniture resources for real estate, hospitality, municipal, healthcare and education projects."
    });
    return () => cleanPageSEO();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.company) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 text-center md:text-left">
        <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Download Library</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Downloads
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          Instant access to our complete range of sustainable outdoor furniture resources. Download the Master Catalogue, sector brochures, materials guide and technical documents.
        </p>

        {/* Trust Line */}
        <div className="mt-8 flex flex-wrap gap-y-2 gap-x-4 justify-center md:justify-start text-xs font-semibold text-[#2C5F2E] bg-[#EAE5DB]/40 px-5 py-3 rounded-full border border-black/[0.04] w-fit">
          <span>✓ Latest 2026 Master Catalogue</span>
          <span className="opacity-30">|</span>
          <span>✓ Sector-Specific Brochures</span>
          <span className="opacity-30">|</span>
          <span>✓ Sustainable Materials Guide</span>
          <span className="opacity-30">|</span>
          <span>✓ Technical Documents</span>
          <span className="opacity-30">|</span>
          <span>✓ 2-Year Guarantee Included</span>
        </div>
      </section>

      {/* Split layout: download content and lead request form */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: available documents, brochures, and technical files */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          
          {/* Master Catalogue */}
          <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#C9A84C] mb-3 block">— Flagship Resource</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-4">
              Master Catalogue 2026
            </h2>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/70 leading-relaxed mb-8">
              Our most comprehensive resource. Explore the full range of premium benches, planter boxes, bus shelters, dustbins, wicker furniture and amenity solutions.
            </p>

            {submitted ? (
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); alert("Master Catalogue 2026 PDF (28 MB) download started successfully."); }}
                className="inline-block px-8 py-4 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] transition-colors shadow-md no-underline"
              >
                Download Full Master Catalogue (PDF – 28 MB)
              </a>
            ) : (
              <a 
                href="#unlock-form"
                className="inline-block px-8 py-4 bg-[#2D2D2D] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#C9A84C] transition-colors shadow-md no-underline"
              >
                Unlock Master Catalogue (28 MB) ↓
              </a>
            )}
            <p className="text-[9px] font-semibold text-black/40 mt-3">
              Updated January 2026 | Includes WPC, NFC Wood, Aluminium, Mild Steel & Stainless Steel ranges
            </p>
          </div>

          {/* Sector-Specific Brochures */}
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider text-[#2C5F2E] mb-6">— Tailored Brochures for Your Industry</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-white rounded-[2rem] p-6 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)] flex flex-col justify-between aspect-square">
                <div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#2C5F2E] bg-[#2C5F2E]/5 px-2.5 py-1 rounded-md mb-2 inline-block">
                    Real Estate
                  </span>
                  <h3 className="text-base font-black text-black uppercase mb-2">Real Estate & Gated Communities Brochure</h3>
                  <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
                    Luxury villa gardens, clubhouse seating, pool decks, and township park solutions.
                  </p>
                </div>
                {submitted ? (
                  <a href="#" onClick={(e) => {e.preventDefault(); alert("Downloading Real Estate Brochure..."); }} className="text-xs font-bold uppercase tracking-wider text-[#2C5F2E] hover:underline no-underline mt-4 block">
                    Download Real Estate Brochure →
                  </a>
                ) : (
                  <a href="#unlock-form" className="text-xs font-bold uppercase tracking-wider text-black/35 hover:text-[#2C5F2E] no-underline mt-4 block">
                    Unlock to Download →
                  </a>
                )}
              </div>

              <div className="bg-white rounded-[2rem] p-6 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)] flex flex-col justify-between aspect-square">
                <div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#2C5F2E] bg-[#2C5F2E]/5 px-2.5 py-1 rounded-md mb-2 inline-block">
                    Hospitality
                  </span>
                  <h3 className="text-base font-black text-black uppercase mb-2">Hospitality & Hotels Brochure</h3>
                  <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
                    Poolside loungers, synthetic wicker sectional sets, daybeds, and rooftop restaurant seating.
                  </p>
                </div>
                {submitted ? (
                  <a href="#" onClick={(e) => {e.preventDefault(); alert("Downloading Hospitality Brochure..."); }} className="text-xs font-bold uppercase tracking-wider text-[#2C5F2E] hover:underline no-underline mt-4 block">
                    Download Hospitality Brochure →
                  </a>
                ) : (
                  <a href="#unlock-form" className="text-xs font-bold uppercase tracking-wider text-black/35 hover:text-[#2C5F2E] no-underline mt-4 block">
                    Unlock to Download →
                  </a>
                )}
              </div>

              <div className="bg-white rounded-[2rem] p-6 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)] flex flex-col justify-between aspect-square">
                <div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#2C5F2E] bg-[#2C5F2E]/5 px-2.5 py-1 rounded-md mb-2 inline-block">
                    Municipal
                  </span>
                  <h3 className="text-base font-black text-black uppercase mb-2">Municipal & Smart Cities Brochure</h3>
                  <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
                    Custom PV transit bus shelters, security bollards, heavy park benches, and dual dustbins.
                  </p>
                </div>
                {submitted ? (
                  <a href="#" onClick={(e) => {e.preventDefault(); alert("Downloading Municipal Brochure..."); }} className="text-xs font-bold uppercase tracking-wider text-[#2C5F2E] hover:underline no-underline mt-4 block">
                    Download Municipal Brochure →
                  </a>
                ) : (
                  <a href="#unlock-form" className="text-xs font-bold uppercase tracking-wider text-black/35 hover:text-[#2C5F2E] no-underline mt-4 block">
                    Unlock to Download →
                  </a>
                )}
              </div>

              <div className="bg-white rounded-[2rem] p-6 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)] flex flex-col justify-between aspect-square">
                <div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#2C5F2E] bg-[#2C5F2E]/5 px-2.5 py-1 rounded-md mb-2 inline-block">
                    Healthcare
                  </span>
                  <h3 className="text-base font-black text-black uppercase mb-2">Healthcare & Hospitals Brochure</h3>
                  <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
                    Hygienic, anti-bacterial easy-clean benches, healing gardens, and wheelchair planters.
                  </p>
                </div>
                {submitted ? (
                  <a href="#" onClick={(e) => {e.preventDefault(); alert("Downloading Healthcare Brochure..."); }} className="text-xs font-bold uppercase tracking-wider text-[#2C5F2E] hover:underline no-underline mt-4 block">
                    Download Healthcare Brochure →
                  </a>
                ) : (
                  <a href="#unlock-form" className="text-xs font-bold uppercase tracking-wider text-black/35 hover:text-[#2C5F2E] no-underline mt-4 block">
                    Unlock to Download →
                  </a>
                )}
              </div>

              <div className="bg-white rounded-[2rem] p-6 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)] flex flex-col justify-between aspect-square">
                <div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#2C5F2E] bg-[#2C5F2E]/5 px-2.5 py-1 rounded-md mb-2 inline-block">
                    Education
                  </span>
                  <h3 className="text-base font-black text-black uppercase mb-2">Education & Universities Brochure</h3>
                  <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
                    Vandal-resistant canteen diner tables, campus social zones, and courtyard seating.
                  </p>
                </div>
                {submitted ? (
                  <a href="#" onClick={(e) => {e.preventDefault(); alert("Downloading Education Brochure..."); }} className="text-xs font-bold uppercase tracking-wider text-[#2C5F2E] hover:underline no-underline mt-4 block">
                    Download Education Brochure →
                  </a>
                ) : (
                  <a href="#unlock-form" className="text-xs font-bold uppercase tracking-wider text-black/35 hover:text-[#2C5F2E] no-underline mt-4 block">
                    Unlock to Download →
                  </a>
                )}
              </div>

            </div>
          </div>

          {/* Technical & Support Documents */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Architect Specification</span>
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mb-6">
              Technical & Support Documents
            </h2>
            <ul className="text-xs sm:text-sm text-[#2D2D2D]/85 leading-relaxed space-y-4 max-w-2xl mb-8">
              <li className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                <span>• Sustainable Materials Guide (WPC vs NFC Wood vs Metal)</span>
                {submitted && <a href="#" onClick={(e) => {e.preventDefault(); alert("Downloading Materials Guide...");}} className="text-[#2C5F2E] font-bold hover:underline">Download</a>}
              </li>
              <li className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                <span>• Warranty Certificate & Terms</span>
                {submitted && <a href="#" onClick={(e) => {e.preventDefault(); alert("Downloading Warranty Certificate...");}} className="text-[#2C5F2E] font-bold hover:underline">Download</a>}
              </li>
              <li className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                <span>• Professional Installation & Anchoring Guidelines</span>
                {submitted && <a href="#" onClick={(e) => {e.preventDefault(); alert("Downloading Installation Guidelines...");}} className="text-[#2C5F2E] font-bold hover:underline">Download</a>}
              </li>
              <li className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                <span>• BOQ (Bill of Quantities) & Specification Templates</span>
                {submitted && <a href="#" onClick={(e) => {e.preventDefault(); alert("Downloading BOQ Templates...");}} className="text-[#2C5F2E] font-bold hover:underline">Download</a>}
              </li>
              <li className="flex items-center justify-between">
                <span>• Product Quality Test Reports & Compliance Certificates</span>
                {submitted && <a href="#" onClick={(e) => {e.preventDefault(); alert("Downloading Compliance Documents...");}} className="text-[#2C5F2E] font-bold hover:underline">Download</a>}
              </li>
            </ul>

            {submitted ? (
              <p className="text-xs font-semibold text-[#2C5F2E] uppercase">✓ Click individual links above to download technical specifications.</p>
            ) : (
              <a href="#unlock-form" className="inline-block px-5 py-3 bg-[#EAE5DB] text-[#2D2D2D] rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-[#C9A84C] hover:text-white transition-all border border-black/[0.04] cursor-pointer no-underline">
                Unlock Technical Files ↓
              </a>
            )}
          </div>

        </div>

        {/* Right Column: interactive request form */}
        <div id="unlock-form" className="lg:col-span-5 bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.02)] sticky top-32">
          {submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-12">
              <svg className="w-16 h-16 text-[#2C5F2E] mb-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-black text-black uppercase mb-3">All Downloads Unlocked!</h3>
              <p className="text-xs sm:text-sm text-black/60 max-w-sm leading-relaxed mb-6">
                Welcome **{formData.name}**! You can now click any download link on this page to retrieve the technical files instantly. We have also sent a copy to **{formData.email}**.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-[#2D2D2D] transition-colors cursor-pointer"
              >
                Reset Credentials
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-black text-black uppercase mb-1">Unlock Technical Downloads</h3>
                <p className="text-[10px] sm:text-xs text-black/50 leading-relaxed">
                  Enter your professional credentials to instantly unlock our entire CAD libraries, brochures, and specification templates.
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Karan Johar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Work Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="karan@architects.in"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Company / Organization *</label>
                <input
                  type="text"
                  required
                  placeholder="KJ Landscape Designers"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Professional Role</label>
                <select
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                >
                  <option value="Architect">Landscape Architect / Designer</option>
                  <option value="Contractor">General Contractor / Builder</option>
                  <option value="Municipal">Municipal Officer / Smart Cities</option>
                  <option value="Retail">Private Developer / Gated Estates</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] transition-colors cursor-pointer mt-2 shadow-md"
              >
                Unlock Download Links
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Downloads;

