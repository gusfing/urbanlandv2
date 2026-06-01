import React, { useState, useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const faqsList = [
  {
    q: "How soon will I receive a quote?",
    a: "Most quotes are sent within 24 hours during standard business days."
  },
  {
    q: "Do you provide installation across India?",
    a: "Yes. We handle professional pan-India delivery and installation for all commercial, residential, and public projects."
  },
  {
    q: "Can I get samples or material swatches?",
    a: "Yes. We can arrange material samples (WPC, NFC Wood, and powder-coated metal finishes) for your project review."
  },
  {
    q: "Do you support green building certifications?",
    a: "Yes. Our long-life, highly recyclable WPC, NFC, and metal products help achieve IGBC, GRIHA, and LEED points."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    whatsappPref: true,
    email: "",
    projectType: "Real Estate / Gated Community",
    location: "",
    details: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    updatePageSEO({
      title: "Contact Us | Get a Custom Quote for Sustainable Outdoor Furniture | Urbanland Products",
      description: "Get in touch with Urbanland Products for premium, sustainable outdoor furniture – benches, planter boxes, bus shelters and more. Request a custom quote, speak with our team or download brochures. Fast response guaranteed."
    });
    return () => cleanPageSEO();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.company && formData.phone && formData.location) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 text-center md:text-left">
        <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Let's Build Together</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Get a Custom Quote
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          Ready to transform your space with sustainable, high-quality outdoor furniture? Tell us about your project and our team will get back to you within 24 hours with a tailored quote.
        </p>

        {/* Trust Line */}
        <div className="mt-8 flex flex-wrap gap-y-2 gap-x-4 justify-center md:justify-start text-xs font-semibold text-[#2C5F2E] bg-[#EAE5DB]/40 px-5 py-3 rounded-full border border-black/[0.04] w-fit">
          <span>✓ 2-Year Guarantee</span>
          <span className="opacity-30">|</span>
          <span>✓ ISO 9001:2015 Certified</span>
          <span className="opacity-30">|</span>
          <span>✓ Fast Quote Response</span>
          <span className="opacity-30">|</span>
          <span>✓ Pan-India Delivery & Installation</span>
        </div>
      </section>

      {/* Split layout: details and form */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        {/* Left column: contact options & corporate details */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider text-[#2C5F2E] mb-6">— Contact Options</h2>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-[2rem] p-6 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
                <span className="text-[8px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-2.5 py-1 rounded-md mb-2 inline-block">
                  Recommended
                </span>
                <h3 className="text-base font-black text-black uppercase mb-1">Quick Quote Form</h3>
                <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
                  Fill the form on this page to provide project specifics and get a customized quote directly in your inbox.
                </p>
              </div>

              <a 
                href="https://wa.me/919322859776" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white rounded-[2rem] p-6 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)] flex items-center justify-between group no-underline text-[#1A1A1A] hover:border-[#2C5F2E] transition-all"
              >
                <div>
                  <h3 className="text-base font-black text-black uppercase mb-1 group-hover:text-[#2C5F2E]">WhatsApp Us</h3>
                  <p className="text-xs text-[#2D2D2D]/60 leading-relaxed pr-6">
                    Instant chat with our project experts for quick estimates and material swatches.
                  </p>
                  <p className="text-xs font-bold text-[#2C5F2E] mt-2">+91 93228 59776</p>
                </div>
                <span className="w-10 h-10 rounded-full bg-[#2C5F2E]/10 flex items-center justify-center font-bold text-[#2C5F2E] text-xs shrink-0 group-hover:bg-[#2C5F2E] group-hover:text-white transition-all select-none">
                  →
                </span>
              </a>

              <a 
                href="tel:+919322859776"
                className="bg-white rounded-[2rem] p-6 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)] flex items-center justify-between group no-underline text-[#1A1A1A] hover:border-[#2C5F2E] transition-all"
              >
                <div>
                  <h3 className="text-base font-black text-black uppercase mb-1 group-hover:text-[#2C5F2E]">Call Us</h3>
                  <p className="text-xs text-[#2D2D2D]/60 leading-relaxed pr-6">
                    Speak directly with our engineering team from Mon–Sat, 9 AM – 6 PM.
                  </p>
                  <p className="text-xs font-bold text-[#2C5F2E] mt-2">+91 93228 59776</p>
                </div>
                <span className="w-10 h-10 rounded-full bg-[#2C5F2E]/10 flex items-center justify-center font-bold text-[#2C5F2E] text-xs shrink-0 group-hover:bg-[#2C5F2E] group-hover:text-white transition-all select-none">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="bg-[#EAE5DB]/45 rounded-[2.5rem] border border-black/[0.03] p-8 mt-4">
            <h3 className="text-xs font-black uppercase tracking-wider text-black mb-3">— WHY LEADING ORGANISATIONS TRUST US</h3>
            <ul className="text-xs text-[#2D2D2D]/75 leading-relaxed space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="text-[#2C5F2E] font-bold">✓</span>
                <span>Fast quote turnaround (usually within 24 hours)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2C5F2E] font-bold">✓</span>
                <span>Expert advice on WPC, NFC Wood & metals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2C5F2E] font-bold">✓</span>
                <span>Full customization to match design language</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2C5F2E] font-bold">✓</span>
                <span>End-to-end support — BOQ, delivery & anchoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2C5F2E] font-bold">✓</span>
                <span>50+ successful projects across India</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2C5F2E] font-bold">✓</span>
                <span>Strong focus on green building & sustainability</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column: lead capture form */}
        <div className="lg:col-span-7 bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.02)]">
          {submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-12">
              <svg className="w-16 h-16 text-[#2C5F2E] mb-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-black text-black uppercase mb-3">Quote Request Sent!</h3>
              <p className="text-xs sm:text-sm text-black/60 max-w-sm leading-relaxed mb-6">
                Thank you for choosing Urbanland Products. Our commercial sales manager will review your technical project requirements and email a custom quotation to **{formData.email}** within 24 hours.
              </p>
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    company: "",
                    phone: "",
                    whatsappPref: true,
                    email: "",
                    projectType: "Real Estate / Gated Community",
                    location: "",
                    details: ""
                  });
                }}
                className="px-6 py-3 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-[#2D2D2D] transition-colors cursor-pointer"
              >
                Configure Another Quote
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-black text-black uppercase mb-1">Tell Us About Your Project</h3>
                <p className="text-[10px] sm:text-xs text-black/50 leading-relaxed">
                  Provide your project scope details to customize structural rates, dimensions, and logistics profiles.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Aditya Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    placeholder="DLF Landscapes Group"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                  />
                  <label className="flex items-center gap-2 mt-1 select-none cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.whatsappPref}
                      onChange={(e) => setFormData({ ...formData, whatsappPref: e.target.checked })}
                      className="rounded border-gray-300 text-[#2C5F2E] focus:ring-[#2C5F2E]"
                    />
                    <span className="text-[10px] font-semibold text-black/50">Prefer quotes via WhatsApp</span>
                  </label>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Work Email Address</label>
                  <input
                    type="email"
                    placeholder="aditya@dlf.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Project Type *</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2C5F2E] font-medium"
                  >
                    <option value="Real Estate / Gated Community">Real Estate / Gated Community</option>
                    <option value="Hospitality / Hotel / Resort">Hospitality / Hotel / Resort</option>
                    <option value="Municipal / Smart City">Municipal / Smart City</option>
                    <option value="Healthcare / Hospital">Healthcare / Hospital</option>
                    <option value="Education / University">Education / University</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Project Location / City *</label>
                  <input
                    type="text"
                    required
                    placeholder="Gurgaon, NCR"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-full px-5 py-3.5 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black uppercase tracking-wider text-black/50">Brief Project Details & Quantities</label>
                <textarea
                  placeholder="Example: Need 80 WPC benches and 60 planter boxes for a luxury township in Pune..."
                  rows="4"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-[#F7F4EF]/60 border border-black/10 rounded-[1.5rem] px-5 py-4 text-xs text-black focus:outline-none focus:border-[#2C5F2E] font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] transition-all duration-300 cursor-pointer shadow-md mt-2"
              >
                Send Request →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Section 4: Our Corporate Office */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Corporate Headquarters</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-6 leading-none">
                Visit Our Office
              </h2>
              <div className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed space-y-4">
                <p className="font-bold text-black text-sm">
                  Urbanland Products
                </p>
                <p>
                  Unit no 217, Gauri Complex,<br/>
                  Above Bank of Baroda,<br/>
                  Navghar Vasai East, Samarth Krupa Nagar,<br/>
                  Vasai East, Mumbai, Vasai-Virar,<br/>
                  Maharashtra 401202
                </p>
                <p className="border-t border-black/[0.05] pt-4 mt-4 text-xs font-semibold text-black/50">
                  <strong>Business Hours:</strong> Monday to Saturday | 9:00 AM – 6:00 PM
                </p>
              </div>

              <div className="mt-8">
                <a 
                  href="https://maps.google.com/?q=Unit+no+217,+Gauri+Complex,+Above+Bank+of+Baroda,+Navghar+Vasai+East,+Samarth+Krupa+Nagar,+Vasai+East,+Mumbai,+Vasai-Virar,+Maharashtra+401202"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-5 py-3 bg-[#EAE5DB] text-[#2D2D2D] rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-[#C9A84C] hover:text-white transition-all border border-black/[0.04] cursor-pointer no-underline"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 h-[320px] rounded-[2rem] overflow-hidden select-none shrink-0 relative bg-black/5 shadow-md">
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#EAE5DB]/45 p-8 text-center border border-black/[0.03]">
                <svg className="w-12 h-12 text-[#2C5F2E] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-sm font-black uppercase text-black mb-2">— Nationwide Distribution & Support</h4>
                <p className="text-xs text-[#2D2D2D]/60 max-w-sm leading-relaxed">
                  We supply, anchor and support professional installation services across India, with regional hubs and yard installations in **Mumbai, Delhi NCR, Bangalore, and Pune**.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Block */}
      <section className="max-w-[850px] mx-auto px-6 mb-12">
        <div className="text-center mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Quick Answers</span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] leading-none">
            Quick Answers
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqsList.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-[2rem] border border-black/[0.03] overflow-hidden transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.005)]"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-6 md:px-8 flex justify-between items-center text-left cursor-pointer focus:outline-none border-none select-none group bg-white"
                >
                  <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#2C5F2E] pr-6 transition-colors leading-snug">
                    {faq.q}
                  </h3>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all text-xs shrink-0 ${
                    isOpen ? "bg-[#2C5F2E] text-white rotate-45" : "bg-[#F7F4EF] text-[#2D2D2D]"
                  }`}>
                    ＋
                  </span>
                </button>

                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[300px] border-t border-black/[0.05]" : "max-h-0"
                }`}>
                  <p className="px-6 py-6 md:px-8 text-xs sm:text-sm leading-relaxed text-[#2D2D2D]/70 bg-white/50">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Contact;

