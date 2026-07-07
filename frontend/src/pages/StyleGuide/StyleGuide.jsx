import React, { useState } from "react";
import CTASection from "../../components/CTASection/CTASection";

const StyleGuide = () => {
    const [copiedColor, setCopiedColor] = useState(null);
    const [faqOpen, setFaqOpen] = useState(false);

    const colors = [
        { name: "Forest Green", hex: "#2C5F2E", desc: "Primary brand identity, main CTAs background, headers accent" },
        { name: "Accent Gold", hex: "#C9A84C", desc: "Highlight badges, primary buttons, borders and accent highlights" },
        { name: "Sleek Obsidian", hex: "#2D2D2D", desc: "Dark charcoal for body text contrast, footers, and structural cards" },
        { name: "Warm Ecru", hex: "#F7F4EF", desc: "Premium off-white editorial background for clean visual space" },
        { name: "Clean White", hex: "#FFFFFF", desc: "Standard card panels, input fields, and clean layouts" }
    ];

    const copyToClipboard = (hex) => {
        navigator.clipboard.writeText(hex);
        setCopiedColor(hex);
        setTimeout(() => setCopiedColor(null), 2000);
    };

    return (
        <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
            {/* Header */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] bg-[#2C5F2E]/10 px-3.5 py-1.5 rounded-full select-none mb-4 inline-block">
                    System Architecture
                </span>
                <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none text-[#1A1A1A] mb-6">
                    Design System & <br/>
                    <span className="text-[#C9A84C]">Style Guide.</span>
                </h1>
                <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed">
                    This documentation page defines the design tokens and reusable UI elements that drive visual consistency across the entire Urbanland site. Use these guidelines to maintain visual order.
                </p>
            </section>

            {/* Colors Section */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
                <div className="border-t border-black/[0.08] pt-10">
                    <span className="text-xs font-black uppercase tracking-widest text-[#2C5F2E] mb-2 block">— Color Palette</span>
                    <h2 className="text-2xl sm:text-3.5xl font-black uppercase tracking-tight text-black mb-8">Brand Color Tokens</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {colors.map((color) => (
                            <div 
                                key={color.hex} 
                                onClick={() => copyToClipboard(color.hex)}
                                className="bg-white rounded-3xl p-5 border border-black/[0.03] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between aspect-[1/1.1]"
                            >
                                <div>
                                    <div 
                                        className="w-full aspect-square rounded-2xl mb-4 relative flex items-center justify-center shadow-inner"
                                        style={{ backgroundColor: color.hex }}
                                    >
                                        <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full transition-opacity duration-300">
                                            Copy HEX
                                        </span>
                                    </div>
                                    <h3 className="text-sm font-black uppercase text-black">{color.name}</h3>
                                    <p className="text-[10px] text-[#2D2D2D]/60 mt-1 leading-snug">{color.desc}</p>
                                </div>
                                <div className="flex justify-between items-center mt-4 pt-3 border-t border-black/[0.04]">
                                    <code className="text-xs font-bold text-[#2D2D2D]/70">{color.hex}</code>
                                    {copiedColor === color.hex && (
                                        <span className="text-[9px] bg-[#2C5F2E] text-white px-2 py-0.5 rounded-full font-bold uppercase animate-fadeIn">
                                            Copied!
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Typography Section */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
                <div className="border-t border-black/[0.08] pt-10">
                    <span className="text-xs font-black uppercase tracking-widest text-[#2C5F2E] mb-2 block">— Typography Scale</span>
                    <h2 className="text-2xl sm:text-3.5xl font-black uppercase tracking-tight text-black mb-8">Headings & Copy</h2>
                    
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-black/[0.03] shadow-sm flex flex-col gap-10">
                        {/* Display Heading */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
                            <span className="text-xs font-black text-black/45 uppercase font-mono tracking-widest lg:pt-2">Display Title</span>
                            <div className="lg:col-span-3">
                                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
                                    Urban Seating
                                </h1>
                                <code className="text-[10px] text-black/50 block mt-2">font-black uppercase tracking-tight leading-none text-4xl sm:text-6xl lg:text-7xl</code>
                            </div>
                        </div>

                        {/* Page Title H1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start border-t border-black/[0.04] pt-8">
                            <span className="text-xs font-black text-black/45 uppercase font-mono tracking-widest lg:pt-2">H1 Page Title</span>
                            <div className="lg:col-span-3">
                                <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-[#1A1A1A]">
                                    Architectural Benches
                                </h1>
                                <code className="text-[10px] text-black/50 block mt-2">font-black uppercase tracking-tight leading-tight text-3xl sm:text-5xl</code>
                            </div>
                        </div>

                        {/* Section Header H2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start border-t border-black/[0.04] pt-8">
                            <span className="text-xs font-black text-black/45 uppercase font-mono tracking-widest lg:pt-2">H2 Section Heading</span>
                            <div className="lg:col-span-3">
                                <h2 className="text-2xl sm:text-3.5xl font-black uppercase tracking-tight text-black">
                                    Engineered For Performance
                                </h2>
                                <code className="text-[10px] text-black/50 block mt-2">font-black uppercase tracking-tight text-2xl sm:text-3.5xl</code>
                            </div>
                        </div>

                        {/* Subsection H3 */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start border-t border-black/[0.04] pt-8">
                            <span className="text-xs font-black text-black/45 uppercase font-mono tracking-widest lg:pt-2">H3 Subsection</span>
                            <div className="lg:col-span-3">
                                <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-[#1A1A1A]">
                                    Standard Configurations
                                </h3>
                                <code className="text-[10px] text-black/50 block mt-2">font-black uppercase tracking-tight text-lg sm:text-2xl</code>
                            </div>
                        </div>

                        {/* Card Title H4 */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start border-t border-black/[0.04] pt-8">
                            <span className="text-xs font-black text-black/45 uppercase font-mono tracking-widest lg:pt-2">H4 Card / Small Title</span>
                            <div className="lg:col-span-3">
                                <h4 className="text-sm sm:text-base font-black uppercase text-black">
                                    Solid Composite Slats
                                </h4>
                                <code className="text-[10px] text-black/50 block mt-2">font-black uppercase text-sm sm:text-base</code>
                            </div>
                        </div>

                        {/* Body Text */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start border-t border-black/[0.04] pt-8">
                            <span className="text-xs font-black text-black/45 uppercase font-mono tracking-widest lg:pt-1">Body Paragraph</span>
                            <div className="lg:col-span-3">
                                <p className="text-xs sm:text-sm md:text-base text-[#2D2D2D]/75 leading-relaxed font-semibold">
                                    Our products are designed for longevity (12–20+ years), drastically reducing replacement waste. We focus on recyclable materials, low-VOC finishes and energy-efficient manufacturing processes.
                                </p>
                                <code className="text-[10px] text-black/50 block mt-2">text-xs sm:text-sm md:text-base text-[#2D2D2D]/75 leading-relaxed font-semibold</code>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Border Radius Section */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
                <div className="border-t border-black/[0.08] pt-10">
                    <span className="text-xs font-black uppercase tracking-widest text-[#2C5F2E] mb-2 block">— Border Radius Tokens</span>
                    <h2 className="text-2xl sm:text-3.5xl font-black uppercase tracking-tight text-black mb-8">Rounding Guidelines</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-[3rem] p-8 border border-black/[0.03] shadow-sm flex flex-col justify-between min-h-[160px]">
                            <span className="text-[10px] font-black uppercase tracking-wider text-[#2C5F2E]">rounded-[3rem] (48px)</span>
                            <p className="text-[11px] text-[#2D2D2D]/60 mt-4">Used for outer hero containers, massive image wrappers, and full-screen layouts.</p>
                        </div>

                        <div className="bg-white rounded-[2.5rem] p-8 border border-black/[0.03] shadow-sm flex flex-col justify-between min-h-[160px]">
                            <span className="text-[10px] font-black uppercase tracking-wider text-[#2C5F2E]">rounded-[2.5rem] (40px)</span>
                            <p className="text-[11px] text-[#2D2D2D]/60 mt-4">Used for standard product page section cards, final CTA containers, and large grid blocks.</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-black/[0.03] shadow-sm flex flex-col justify-between min-h-[160px]">
                            <span className="text-[10px] font-black uppercase tracking-wider text-[#2C5F2E]">rounded-2xl (16px)</span>
                            <p className="text-[11px] text-[#2D2D2D]/60 mt-4">Used for specs grids, inner cards, and thumbnail image frames.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* UI Components Showcase */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
                <div className="border-t border-black/[0.08] pt-10">
                    <span className="text-xs font-black uppercase tracking-widest text-[#2C5F2E] mb-2 block">— UI Reusable Elements</span>
                    <h2 className="text-2xl sm:text-3.5xl font-black uppercase tracking-tight text-black mb-8">Accordion & Buttons</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Accordion Preview */}
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-black/[0.03] shadow-sm">
                            <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A84C] mb-6">— FAQ Accordion Preview</h3>
                            
                            <div className="border border-black/[0.03] rounded-[2rem] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
                                <button
                                    onClick={() => setFaqOpen(!faqOpen)}
                                    className="w-full px-6 py-6 flex justify-between items-center text-left cursor-pointer select-none bg-white border-none group"
                                >
                                    <h4 className="text-xs sm:text-sm font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#2C5F2E] transition-colors pr-6">
                                        Is the Style Guide consistent?
                                    </h4>
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 shrink-0 ${
                                        faqOpen ? "bg-[#2C5F2E] text-white rotate-45" : "bg-[#F7F4EF] text-[#2D2D2D]"
                                    }`}>
                                        ＋
                                    </span>
                                </button>
                                <div className={`transition-all duration-500 overflow-hidden ${
                                    faqOpen ? "max-h-[150px] border-t border-black/[0.05]" : "max-h-0"
                                }`}>
                                    <p className="px-6 py-5 text-[11px] sm:text-xs leading-relaxed text-[#2D2D2D]/70 bg-[#F7F4EF]/25">
                                        Yes. All FAQs follow this accordion transition: rotating the expansion plus-indicator, toggling border shadows, and smoothly expanding the body height.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <span className="text-[10px] font-black uppercase tracking-wider text-black/45 block mb-1">HTML Structure Classname</span>
                                <code className="text-[10px] text-black/50 block">bg-white rounded-[2rem] border border-black/[0.03] overflow-hidden transition-all duration-300</code>
                            </div>
                        </div>

                        {/* Buttons Showcase */}
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-black/[0.03] shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A84C] mb-6">— Button Styles & States</h3>
                                
                                <div className="flex flex-wrap gap-4 select-none">
                                    <button className="px-6 py-3.5 bg-[#C9A84C] hover:bg-black text-[#232120] hover:text-white rounded-full font-black uppercase tracking-wider text-[10px] transition-all cursor-pointer">
                                        Primary Gold Action →
                                    </button>

                                    <button className="px-6 py-3.5 bg-[#2C5F2E] hover:bg-black text-white rounded-full font-black uppercase tracking-wider text-[10px] transition-all cursor-pointer">
                                        Primary Green Action →
                                    </button>

                                    <button className="px-6 py-3.5 bg-transparent border border-black/25 hover:bg-black hover:border-black hover:text-white text-[#1A1A1A] rounded-full font-black uppercase tracking-wider text-[10px] transition-all cursor-pointer">
                                        Secondary Outline ↓
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-black/[0.04] pt-4">
                                <span className="text-[10px] font-black uppercase tracking-wider text-black/45 block mb-1">Standard Hover Scale</span>
                                <p className="text-[11px] text-[#2D2D2D]/60">All buttons are fully rounded (<code className="font-bold">rounded-full</code>), styled in uppercase font weight, and use smooth transition timings for background-color and scaling triggers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Standardized CTA Live Preview */}
            <section className="w-full">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-6">
                    <span className="text-xs font-black uppercase tracking-widest text-[#2C5F2E] mb-2 block">— Reusable CTA Section</span>
                    <h2 className="text-2xl sm:text-3.5xl font-black uppercase tracking-tight text-black">Unified Live Component</h2>
                </div>
                
                <CTASection 
                    title="Live CTA Standardized Component Example"
                    description="This is the standard CTASection rendered live directly from the reusable components folder. All product pages and core brand pages reference this same component to preserve strict styling guidelines."
                    primaryText="Example Action Link →"
                    secondaryText="Example Sub-Action ↓"
                />
            </section>
        </div>
    );
};

export default StyleGuide;
