import React from "react";
import { Link } from "react-router-dom";

const CTASection = ({
    title = "Ready to Specify Outdoor Furniture for Your Project?",
    description = "Get a custom quote, detailed proposal, and technical specifications within 24 hours. Decorlab serves municipalities, developers, and architects nationwide.",
    tagText = "Ready to Partner",
    primaryText = "Request Custom Quote →",
    primaryLink = "/get-quote",
    secondaryText = "Download Specification Guide ↓",
    secondaryLink = "/resources/downloads"
}) => {
    return (
        <section className="max-w-[1400px] 3xl:max-w-[1700px] 4xl:max-w-[2200px] 5xl:max-w-[3000px] mx-auto px-6 md:px-12 mb-12">
            <div className="w-full bg-[#2C5F2E] rounded-[2.5rem] p-8 md:p-16 flex flex-col items-center text-center text-white relative overflow-hidden shadow-xl border border-black/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2C5F2E] to-[#1d4720] opacity-95 pointer-events-none" />
                
                <div className="relative z-10 max-w-4xl flex flex-col items-center">
                    <span className="text-[9px] sm:text-[0.8125rem] md:text-sm font-black uppercase tracking-widest bg-white/10 text-[#C9A84C] px-3.5 py-1.5 rounded-full select-none mb-6">
                        {tagText}
                    </span>
                    
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-white max-w-3xl mb-6">
                        {title}
                    </h2>

                    <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mb-10 font-medium">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 select-none mb-8 w-full sm:w-auto justify-center">
                        {primaryLink.startsWith("http") || primaryLink.startsWith("#") ? (
                            <a
                                href={primaryLink}
                                className="px-8 py-4 bg-[#C9A84C] text-[#232120] hover:bg-white hover:text-[#2C5F2E] rounded-full font-black uppercase tracking-wider text-xs transition-all shadow-lg transform duration-300 text-center font-bold"
                            >
                                {primaryText}
                            </a>
                        ) : (
                            <Link
                                to={primaryLink}
                                className="px-8 py-4 bg-[#C9A84C] text-[#232120] hover:bg-white hover:text-[#2C5F2E] rounded-full font-black uppercase tracking-wider text-xs transition-all shadow-lg transform duration-300 text-center font-bold"
                            >
                                {primaryText}
                            </Link>
                        )}

                        {secondaryText && (
                            secondaryLink.startsWith("http") || secondaryLink.startsWith("#") ? (
                                <a
                                    href={secondaryLink}
                                    className="px-8 py-4 bg-transparent hover:bg-white hover:text-[#2C5F2E] border border-white/20 text-white rounded-full font-bold uppercase tracking-wider text-xs transition-all text-center font-bold"
                                >
                                    {secondaryText}
                                </a>
                            ) : (
                                <Link
                                    to={secondaryLink}
                                    className="px-8 py-4 bg-transparent hover:bg-white hover:text-[#2C5F2E] border border-white/20 text-white rounded-full font-bold uppercase tracking-wider text-xs transition-all text-center font-bold"
                                >
                                    {secondaryText}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
