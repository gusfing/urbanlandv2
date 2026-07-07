import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../ui/Breadcrumbs";
import { getOptimizedImageUrl } from "../../utils/image";
import faqHeroImage from "../../assets/faq_hero_image.png";

const DEFAULT_SUPPORT = {
    badge: "Service & Support",
    title: "Installation & Support",
    list: [
        {
            icon: "engineering",
            title: "Seamless Installation",
            desc: "We provide on-site installation guidance or turnkey setup services for major municipal and corporate projects across India."
        },
        {
            icon: "verified",
            title: "Extended Warranty",
            desc: "Our 2-year manufacturer guarantee covers structural integrity and material defects, ensuring your investment is protected."
        }
    ]
};

const DEFAULT_FAQ = {
    badge: "Common Inquiries",
    title: "Frequently Asked Questions",
    list: [
        {
            q: "What are the primary materials used in your products?",
            a: "We primarily use galvanized steel, high-grade aluminum, and Wood Polymer Composite (WPC) or FSC-certified hardwoods. All metals are powder-coated for maximum durability."
        },
        {
            q: "Which material is best for coastal areas?",
            a: "For coastal areas, Aluminium and Stainless Steel (Grade 304 or 316) are highly recommended due to their excellent corrosion resistance. Our polymer-coated and anodized finishes provide extra protection against salt air."
        },
        {
            q: "Can products be customized in length and design?",
            a: "Yes, we offer custom lengths and dimensions. You can also customize armrests, backrests, base colors, and materials to match your project specifications."
        },
        {
            q: "Are WPC and NFC Wood suitable for outdoor use?",
            a: "Absolutely. Both WPC (Wood Plastic Composite) and NFC (Natural Fiber Composite) wood are engineered to resist rotting, splitting, warping, and UV damage, making them ideal for heavy outdoor usage in Indian weather."
        },
        {
            q: "How do Urbanland products handle the Indian monsoon?",
            a: "Our products are tested for salt spray resistance and high humidity. WPC components are non-porous and do not absorb water, while our metal coatings prevent oxidation even in coastal areas."
        },
        {
            q: "What is the typical lead time?",
            a: "Standard orders are dispatched within 2-4 weeks. Bulk or custom project orders depend on the complexity and volume of the requirements."
        },
        {
            q: "Do you provide installation services?",
            a: "We provide detailed installation guidance and drawings across India. On-site installation support by our team is also available for bulk corporate or township projects."
        },
        {
            q: "Are 3D models and CAD files available for architects?",
            a: "Yes, we provide .dwg and .skp files for our entire standard range to facilitate seamless integration into your architectural plans and mood boards."
        }
    ]
};

const SupportFAQ = ({ support = DEFAULT_SUPPORT, faq = DEFAULT_FAQ, showHero = false, heroImage = faqHeroImage }) => {
    const supportData = support || DEFAULT_SUPPORT;
    const faqData = faq || DEFAULT_FAQ;

    return (
        <div className="w-full">
            {showHero && (
                <section className="bg-surface pt-32 pb-20 border-b border-outline-variant/10 text-center">
                    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">

                        <Breadcrumbs
                            items={[
                                { label: 'Home', href: '/' },
                                { label: 'Resources', href: '/resources' },
                                { label: 'FAQ' }
                            ]}
                            theme="light"
                            className="mx-auto mb-8"
                        />

                        <h1 className="font-display-lg text-4xl md:text-5xl text-on-surface mb-6 font-bold leading-tight max-w-3xl mx-auto">
                            Frequently Asked Questions
                        </h1>
                        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-lg">
                            Clear answers to the most common questions about our sustainable outdoor furniture, materials, projects, warranty and services.
                        </p>

                        {/* Trust Line */}
                        <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-12 pt-8 border-t border-outline-variant/30">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-forest-green" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                                <span className="font-label-technical text-xs text-on-surface uppercase tracking-wider font-semibold">Honest Answers</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-forest-green" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                                <span className="font-label-technical text-xs text-on-surface uppercase tracking-wider font-semibold">2-Year Guarantee</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-forest-green" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                                <span className="font-label-technical text-xs text-on-surface uppercase tracking-wider font-semibold">Sustainable & Green Focus</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-forest-green" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                                <span className="font-label-technical text-xs text-on-surface uppercase tracking-wider font-semibold">Made in India</span>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="reveal-section py-20 md:py-24 bg-surface px-margin-mobile md:px-margin-desktop border-b border-outline-variant text-left">
                <div className="max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Support Block */}
                        <div className="space-y-10 reveal-up">
                            <div className="space-y-2">
                                <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                                    {supportData.badge}
                                </span>
                                <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                                    {supportData.title}
                                </h2>
                                <div className="w-20 h-1 bg-craftsman-gold"></div>
                            </div>

                            <div className="space-y-8">
                                {supportData.list && supportData.list.map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-start p-6 bg-surface-container/50 border border-outline-variant hover:border-craftsman-gold rounded-[8px] transition-all duration-300">
                                        <div className="w-12 h-12 shrink-0 bg-forest-green text-on-primary flex items-center justify-center rounded-[8px]">
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-headline-md text-xl font-bold mb-2 text-deep-ink">{item.title}</h4>
                                            <p className="text-body-md text-on-surface-variant leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Block */}
                        <div className="space-y-10 reveal-up" style={{ transitionDelay: "150ms" }}>
                            <div className="space-y-2">
                                <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                                    {faqData.badge}
                                </span>
                                <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                                    {faqData.title}
                                </h2>
                                <div className="w-20 h-1 bg-craftsman-gold"></div>
                            </div>

                            <div className="space-y-4">
                                {faqData.list && faqData.list.map((item, idx) => (
                                    <details key={idx} className="group border border-outline-variant bg-surface-container p-4 sm:p-6 open:bg-[#f0ede9] transition-all duration-300 rounded-[8px]">
                                        <summary className="list-none flex justify-between items-center cursor-pointer font-semibold text-deep-ink text-base md:text-lg select-none">
                                            <span>{item.q}</span>
                                            <span className="material-symbols-outlined text-forest-green transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                        </summary>
                                        <div className="mt-4 text-on-surface-variant text-body-md leading-relaxed border-t border-outline-variant/30 pt-4">
                                            {item.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SupportFAQ;
