import React, { useState, useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const Downloads = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", purpose: "Architect" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: "Master Catalogue Downloads | Urbanland Products",
      description: "Submit request to download Urbanland's street furniture Master Catalog 2026, CAD drawings, and materials weathering certification sheets."
    });
    return () => cleanPageSEO();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Download Library</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Specifications & <br/>
          <span className="text-[#C9A84C]">Master Catalogues.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          Download our master product catalogs, WPC and metal finishing specs, DWG design files, and certification sheets.
        </p>
      </section>

      {/* Split layout: download links and request form */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left column: available downloads list */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold uppercase tracking-wider text-[#2C5F2E] mb-2">— AVAILABLE DOCUMENTS</h2>
          
          <div className="bg-white rounded-[2rem] border border-black/[0.03] p-6 flex justify-between items-center shadow-[0_5px_15px_rgba(0,0,0,0.008)] select-none">
            <div>
              <h3 className="text-lg font-black text-black uppercase">Urbanland Master Catalog 2026</h3>
              <p className="text-[10px] sm:text-xs text-black/50 mt-1">PDF File • 28.5 MB • Comprehensive model list & options</p>
            </div>
            <span className="text-xs font-bold text-[#2C5F2E] shrink-0">Catalog PDF</span>
          </div>

          <div className="bg-white rounded-[2rem] border border-black/[0.03] p-6 flex justify-between items-center shadow-[0_5px_15px_rgba(0,0,0,0.008)] select-none">
            <div>
              <h3 className="text-lg font-black text-black uppercase">Architectural CAD DWG library</h3>
              <p className="text-[10px] sm:text-xs text-black/50 mt-1">ZIP File • 114 MB • Planter arrays & bench drawing coordinates</p>
            </div>
            <span className="text-xs font-bold text-[#2C5F2E] shrink-0">ZIP (DWG)</span>
          </div>

          <div className="bg-white rounded-[2rem] border border-black/[0.03] p-6 flex justify-between items-center shadow-[0_5px_15px_rgba(0,0,0,0.008)] select-none">
            <div>
              <h3 className="text-lg font-black text-black uppercase">Materials Performance Spec Sheet</h3>
              <p className="text-[10px] sm:text-xs text-black/50 mt-1">PDF File • 4.2 MB • Timber weathering, coating certifications</p>
            </div>
            <span className="text-xs font-bold text-[#2C5F2E] shrink-0">Specs PDF</span>
          </div>
        </div>

        {/* Right column: request access form */}
        <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.02)]">
          {submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-12">
              <svg className="w-16 h-16 text-[#2C5F2E] mb-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-black text-black uppercase mb-3">Request Received!</h3>
              <p className="text-xs sm:text-sm text-black/60 max-w-sm leading-relaxed mb-6">
                Your download link has been dispatched to **{formData.email}**. Check your inbox or spam filters.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-[#2D2D2D] transition-colors cursor-pointer"
              >
                Request Another File
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-black text-black uppercase mb-1">Access Technical Downloads</h3>
                <p className="text-[10px] sm:text-xs text-black/50 leading-relaxed">
                  Enter your corporate credentials to unlock the CAD DWG models and Master specifications.
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Aarav Sharma"
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
                  placeholder="aarav@company.com"
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
                  placeholder="Design Township Architects"
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
