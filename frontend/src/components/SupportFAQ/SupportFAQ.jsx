import React from "react";

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
            q: "What is the typical lead time?",
            a: "Standard orders are dispatched within 2-4 weeks. Bulk or custom project orders depend on the complexity and volume of the requirements."
        },
        {
            q: "Do you provide installation services?",
            a: "We provide detailed installation guidance and drawings across India. On-site installation support by our team is also available for bulk corporate or township projects."
        }
    ]
};

const SupportFAQ = ({ support = DEFAULT_SUPPORT, faq = DEFAULT_FAQ }) => {
    const supportData = support || DEFAULT_SUPPORT;
    const faqData = faq || DEFAULT_FAQ;

    return (
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
    );
};

export default SupportFAQ;
