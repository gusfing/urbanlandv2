import React, { useState, useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", project: "", scope: "benches", desc: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: "Contact & Scope Quote Builder | Urbanland Products",
      description: "Generate a custom manufacturing quote scope or contact Urbanland Products LLP team for your residential townships or municipal projects."
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
        <p className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Let's Build Together</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Request Quote & <br/>
          <span className="text-[#C9A84C]">Scope Builder.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          Submit your product list, CAD requirements, or township blueprints. Our engineering team compiles structural quotes within 48 hours.
        </p>
      </section>

      {/* Split layout: details and form */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left column: corporate details */}
        <div className="flex flex-col gap-8 justify-between">
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider text-[#2C5F2E] mb-4">— OFFICE & FACTORY</h2>
            <div className="flex flex-col gap-1.5 pb-4 border-b border-black/[0.08]">
              <span className="text-[9px] font-bold uppercase tracking-wider text-black/50">Factory Headquarters</span>
              <span className="text-sm font-semibold text-black/85 leading-relaxed">
                Urbanland Products LLP, <br/>
                Industrial Zone Sector 4, Pune, Maharashtra - 411048
              </span>
            </div>
            <div className="flex flex-col gap-1.5 pb-4 border-b border-black/[0.08] mt-4">
              <span className="text-[9px] font-bold uppercase tracking-wider text-black/50">Sales & Quotations</span>
              <span className="text-sm font-semibold text-black/85">
                Email: info@urbanlandproducts.com <br/>
                Phone: +91 20 6789 2200
              </span>
            </div>
          </div>

          {/* Map coordinate mock */}
          <div className="bg-[#EAE5DB]/45 rounded-[2rem] border border-black/[0.03] p-8 mt-6">
            <h3 className="text-xs font-black uppercase tracking-wider text-black mb-2">— LOCATION COORDINATES</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              We anchor products and support installation nationwide, with distribution yards in **Mumbai, Delhi, Pune, and Bangalore**. Contact our regional sales directors for site mockups.
            </p>
          </div>
        </div>

        {/* Right column: interactive form */}
        <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.02)]">
          {submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-12">
              <svg className="w-16 h-16 text-[#2C5F2E] mb-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-black text-black uppercase mb-3">Quote Submitted!</h3>
              <p className="text-xs sm:text-sm text-black/60 max-w-sm leading-relaxed mb-6">
                Our sales director will reach out to **{formData.email}** within 24 hours with an initial pricing matrix.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-[#2D2D2D] transition-colors cursor-pointer"
              >
                Submit Another Quote
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <h3 className="text-lg font-black text-black uppercase mb-1">Generate Scope Quotation</h3>
                <p className="text-[10px] sm:text-xs text-black/50 leading-relaxed">
                  Provide project volumes and product details to configure structural estimate rates.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Kabir Mehta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Contact Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="kabir@adani.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Project Location Name</label>
                  <input
                    type="text"
                    placeholder="Adani Shantigram, Ahmedabad"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Furniture Scope Division</label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                  >
                    <option value="benches">Benches & Public Seating</option>
                    <option value="bus-shelters">Smart Bus Shelters</option>
                    <option value="car-sheds">Car Parking Canopies</option>
                    <option value="planters">GFRC & Wooden Planters</option>
                    <option value="wicker-furniture">Wicker Outdoor lounge sets</option>
                    <option value="multiple">Multiple Divisions Supply</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Scope Details / Models / Quantities</label>
                <textarea
                  placeholder="Need 40 models of Morse integrated tables and 15 planter boxes..."
                  rows="4"
                  value={formData.desc}
                  onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                  className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-[1.5rem] px-5 py-4 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] transition-colors cursor-pointer mt-2 shadow-md"
              >
                Send RFP Quote Request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
