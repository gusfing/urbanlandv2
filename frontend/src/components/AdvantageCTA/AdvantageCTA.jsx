import React from "react";
import { Link } from "react-router-dom";

const DEFAULT_ADVANTAGES = [
    { icon: "verified", title: "ISO 9001:2015", desc: "Certified manufacturing excellence" },
    { icon: "workspace_premium", title: "2-Year Guarantee", desc: "India's only comprehensive warranty" },
    { icon: "precision_manufacturing", title: "Precision Engineering", desc: "Built for high-traffic durability" },
    { icon: "public", title: "Pan-India Delivery", desc: "Professional installation support" }
];

const AdvantageCTA = ({
    advantages = DEFAULT_ADVANTAGES,
    title = "Ready to Install Premium Outdoor Products in Your Space?",
    ctaText = "Request Custom Quote",
    ctaLink = "/contact",
    brochureText = "Download the Brochure",
    brochureLink = "#",
    statsText = "Trusted by 50+ major projects across 15+ Indian cities"
}) => {
    const advList = advantages || DEFAULT_ADVANTAGES;

    return (
        <section className="reveal-section bg-primary text-on-primary py-24 px-margin-mobile md:px-margin-desktop overflow-hidden relative text-left">
            <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Trust Panel */}
                <div className="space-y-10 border-l-2 border-secondary/30 pl-8 md:pl-10">
                    <div className="space-y-2">
                        <span className="font-label-technical text-secondary tracking-[0.2em] uppercase font-semibold text-xs block">
                            The Decorlab Advantage
                        </span>
                        <h3 className="font-headline-md text-3xl md:text-4xl text-on-primary leading-tight">
                            Why Decorlab Stands Apart
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {advList.map((adv, idx) => (
                            <div key={idx} className="flex items-start space-x-4">
                                <span className="material-symbols-outlined text-secondary text-2xl">{adv.icon}</span>
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wider font-label-technical">{adv.title}</p>
                                    <p className="text-xs text-white/70 mt-1">{adv.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Conversion Area Card */}
                <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm rounded-none">
                    <h2 className="font-headline-lg text-3xl md:text-4xl text-on-primary mb-8 leading-tight">
                        {title}
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                        {ctaLink.startsWith("http") || ctaLink.startsWith("#") ? (
                            <a href={ctaLink} className="bg-secondary text-on-secondary px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:opacity-90 transition-all duration-300 rounded-[4px] no-underline">
                                {ctaText} <span className="ml-2">→</span>
                            </a>
                        ) : (
                            <Link to={ctaLink} className="bg-secondary text-on-secondary px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:opacity-90 transition-all duration-300 rounded-[4px] no-underline">
                                {ctaText} <span className="ml-2">→</span>
                            </Link>
                        )}
                        
                        {brochureLink.startsWith("http") || brochureLink.startsWith("#") ? (
                            <a href={brochureLink} className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 rounded-[4px] no-underline">
                                {brochureText} <span className="ml-2">↓</span>
                            </a>
                        ) : (
                            <Link to={brochureLink} className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 rounded-[4px] no-underline">
                                {brochureText} <span className="ml-2">↓</span>
                            </Link>
                        )}
                    </div>
                    {statsText && (
                        <p className="mt-8 text-xs text-white/60 font-label-technical uppercase tracking-widest font-semibold">
                            {statsText}
                        </p>
                    )}
                </div>
            </div>
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-1/4 z-0 animate-pulse-slow"></div>
        </section>
    );
};

export default AdvantageCTA;
