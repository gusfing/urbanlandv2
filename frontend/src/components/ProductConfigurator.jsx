import React, { useState } from "react";

const ProductConfigurator = ({ config }) => {
    const [hoveredCard, setHoveredCard] = useState(null);

    // Extract dynamic configuration or use user's defaults for poolside loungers
    const configurator = config.configurator || {};
    const radialMap = configurator.radialMap || {
        centralImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYJvCBmZa45Y9Ol85cj95UOnxNe7wyd-1ECb82CgpAJkPDelfnBEz-5Zn858GsHTwykVJIztjhkHfKdwbJRM6AvxjU26AwSnAOwixWipTUoGF4NA55rn39aPNZzvtrnjz-4Pwa1XKjw53-AFw-mQLhqM3nmCOf34Gf40xepcDeX4EDSC_rf1S1_AVjufNfyQEstMZzZDe7LiiNN1xMrlajkGQrtLEvHED7_p6m3mWr_WU2bvM-Hqo9wzgBps1uSv4ZDErcnOe92oXu",
        centralImageAlt: "Premium Urbanland poolside lounger centered in a bright gallery",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFmkQaFcNjNSWUmutrieGqYQK4ZUsxjwMumPQIERWBhUZcVqdhl4afYrwCs_oSXFHJkjw81vRim4flN36IhBRSj0-mOQSQ60KYEsSpju7VYn1NQEEQvZ7JvfdGJbKGe-YzHiFPokKN2wLuow9xl0KiSR-LQW9ivwz_focKQ6c3a4HCmGYEx8fK32U7P6ezMhYzzVYDtsU0tHbHo7H-Yg0AHecMNtC75wjChhfJsfI7Nksy5fudY0CaFXhCYcIZEqFl7IFIdQlx4NkM",
        cards: [
            {
                title: "Materials Focus",
                desc: 'Hand-woven <span class="text-deep-ink font-semibold">High-Density PE Rattan</span> provides UV-resistance and weatherproof durability for long-term coastal exposure.',
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYHezBXVUZgyX00ZAhxxDwNkpWOj9xBluScWgyA96w54lR899qZRVaSUQBnSBjmSlmO0sSqGFjCLnIDZo3hBbTQi6zCablc_ji-RcadshsIdlPPD4ORGDmaMhCPSsh_v8wvdkitIRT-U5fxvJvS3cnygwXeNr7dDt4mJqt6IlTq05ybWLZhOttHVpZbBVDnDVUHfbB19rKOO03PGj7_Kl1l6L28k4NwNgyUOQ0nC50UC90guxTxCKS07Y31hX6lFy89fxgGnM_dZiU",
                imageAlt: "PE Rattan texture close-up",
                positionClass: "absolute top-[5%] left-[5%] md:top-[10%] md:left-[5%] w-72",
                line: { x1: "320", x2: "550", y1: "200", y2: "350", cx: "550", cy: "350" }
            },
            {
                title: "Frame & Ventilation",
                desc: 'Marine-grade <span class="text-deep-ink font-semibold">T6 Aluminum</span> chassis with integrated ventilation channels to prevent moisture buildup and heat retention.',
                colors: ["bg-deep-ink border border-craftsman-gold", "bg-surface-dim border border-outline", "bg-primary border border-outline"],
                positionClass: "absolute bottom-[5%] left-[5%] md:bottom-[15%] md:left-[5%] w-72",
                line: { x1: "320", x2: "480", y1: "550", y2: "480", cx: "480", cy: "480" }
            },
            {
                title: "Styles & Adjustments",
                desc: 'Available in <span class="text-deep-ink font-semibold">Single or Double</span> configurations. Features a 5-step precision ratchet system for the backrest.',
                icon: "settings_overscan",
                positionClass: "absolute top-[5%] right-[5%] md:top-[10%] md:right-[5%] w-72 text-right md:text-left",
                line: { x1: "960", x2: "750", y1: "200", y2: "320", cx: "750", cy: "320" }
            },
            {
                title: "Premium Add-ons",
                bullets: [
                    "Retractable Sun Canopies",
                    "Integrated Recessed Wheels",
                    "Antimicrobial Cushions"
                ],
                positionClass: "absolute bottom-[5%] right-[5%] md:bottom-[15%] md:right-[5%] w-72 text-right md:text-left",
                line: { x1: "960", x2: "820", y1: "550", y2: "520", cx: "820", cy: "520" }
            }
        ],
        specs: [
            { label: "Weight Cap.", value: "250kg / 550lbs" },
            { label: "Upholstery", value: "Sunbrella® Fabric" },
            { label: "Warranty", value: "10 Year Structural" }
        ]
    };

    return (
        <section className="reveal-section bg-surface pt-24 pb-40 lg:pb-24 px-margin-mobile md:px-margin-desktop border-b border-outline-variant overflow-hidden">
            <div className="max-w-container-max mx-auto">
                {/* Header */}
                <div className="mb-16 text-left space-y-4 reveal-up">
                    <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block font-label-caps">
                        {configurator.badge || "MATERIALS & CUSTOMIZATION"}
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                        {configurator.title || "MATERIALS & CUSTOMIZATION OPTIONS FOR POOLSIDE LOUNGERS"}
                    </h2>
                    <div className="w-24 h-[2px] bg-craftsman-gold"></div>
                    {configurator.description && (
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                            {configurator.description}
                        </p>
                    )}
                </div>

                {/* Desktop layout: lg and up */}
                <div className="hidden lg:flex relative w-full max-w-container-max mx-auto h-[700px] items-center justify-center">
                    {/* Ambient Background Image */}
                    {radialMap.backgroundImage && (
                        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
                            <img
                                className="w-full h-full object-cover grayscale-[0.5]"
                                alt="Background Ambient Scene"
                                src={radialMap.backgroundImage}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
                        </div>
                    )}

                    {/* Central Product Render: perfectly centered, no parallax scroll */}
                    <div className="relative z-20 w-3/5 lg:w-1/2 float-anim flex items-center justify-center">
                        <img
                            className="w-full h-auto drop-shadow-2xl grayscale-[0.2]"
                            alt={radialMap.centralImageAlt}
                            src={radialMap.centralImage}
                        />
                    </div>

                    {/* SVG Leader Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1280 700">
                        {radialMap.cards.map((card, idx) => {
                            if (!card.line) return null;
                            const isHovered = hoveredCard === idx;
                            return (
                                <g key={idx}>
                                    <line
                                        className="transition-all duration-500 ease-in-out"
                                        stroke={isHovered ? "#C9A84C" : "#2D2D2D"}
                                        strokeDasharray={isHovered ? "0" : "4"}
                                        strokeWidth={isHovered ? "2" : "1"}
                                        x1={card.line.x1}
                                        x2={card.line.x2}
                                        y1={card.line.y1}
                                        y2={card.line.y2}
                                    />
                                    <circle
                                        className="transition-all duration-300"
                                        cx={card.line.cx}
                                        cy={card.line.cy}
                                        fill="#C9A84C"
                                        r={isHovered ? "6" : "4"}
                                    />
                                </g>
                            );
                        })}
                    </svg>

                    {/* Modular Text Cards */}
                    <div className="absolute inset-0 z-30 pointer-events-auto">
                        {radialMap.cards.map((card, idx) => {
                            const isRightAligned = card.positionClass.includes("text-right");
                            return (
                                <div
                                    key={idx}
                                    className={card.positionClass}
                                    onMouseEnter={() => setHoveredCard(idx)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="bg-[#fcf9f4]/85 backdrop-blur-md border border-charcoal-industrial p-6 transition-all duration-300 hover:border-craftsman-gold hover:-translate-y-1 shadow-sm">
                                        <div className={`flex items-center gap-3 mb-4 ${isRightAligned ? "justify-end md:justify-start" : "justify-start"}`}>
                                            {card.image && (
                                                <img
                                                    className="w-12 h-12 object-cover border border-charcoal-industrial"
                                                    alt={card.imageAlt || "Texture Detail"}
                                                    src={card.image}
                                                />
                                            )}
                                            <h3 className="font-montserrat font-bold text-xs uppercase tracking-widest text-deep-ink">
                                                {card.title}
                                            </h3>
                                        </div>

                                        {card.desc && (
                                            <p
                                                className="text-sm font-body-md text-secondary leading-relaxed"
                                                dangerouslySetInnerHTML={{ __html: card.desc }}
                                            />
                                        )}

                                        {card.colors && (
                                            <div className="mt-4 flex gap-2 justify-start">
                                                {card.colors.map((colorClass, cIdx) => (
                                                    <span
                                                        key={cIdx}
                                                        className={`w-4 h-4 rounded-full ${colorClass}`}
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {card.icon && (
                                            <div className={`mt-4 flex ${isRightAligned ? "justify-end md:justify-start" : "justify-start"}`}>
                                                <span className="material-symbols-outlined text-craftsman-gold">
                                                    {card.icon}
                                                </span>
                                            </div>
                                        )}

                                        {card.bullets && (
                                            <ul className="text-sm font-body-md text-secondary space-y-2">
                                                {card.bullets.map((bullet, bIdx) => (
                                                    <li
                                                        key={bIdx}
                                                        className={`flex items-center gap-2 ${isRightAligned ? "justify-end md:justify-start" : "justify-start"}`}
                                                    >
                                                        <span className="w-1 h-1 bg-craftsman-gold rounded-full shrink-0" />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile/Tablet layout: below lg */}
                <div className="lg:hidden flex flex-col w-full items-center">
                    {/* Ambient Background & Central Product Render */}
                    <div className="relative w-full aspect-video flex items-center justify-center overflow-hidden mb-8 rounded-[8px]">
                        {radialMap.backgroundImage && (
                            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
                                <img
                                    className="w-full h-full object-cover grayscale-[0.5]"
                                    alt="Background Ambient Scene"
                                    src={radialMap.backgroundImage}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
                            </div>
                        )}
                        <div className="relative z-20 w-3/4 max-w-[280px] float-anim flex items-center justify-center">
                            <img
                                className="w-full h-auto drop-shadow-2xl grayscale-[0.2]"
                                alt={radialMap.centralImageAlt}
                                src={radialMap.centralImage}
                            />
                        </div>
                    </div>

                    {/* Mobile Text Cards Flow */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {radialMap.cards.map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-[#fcf9f4]/80 backdrop-blur-md border border-charcoal-industrial p-6 rounded-[8px] hover:border-craftsman-gold transition-all duration-300 shadow-sm text-left"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    {card.image && (
                                        <img
                                            className="w-10 h-10 object-cover border border-charcoal-industrial rounded-sm"
                                            alt={card.imageAlt || "Texture Detail"}
                                            src={card.image}
                                        />
                                    )}
                                    <h3 className="font-montserrat font-bold text-xs uppercase tracking-widest text-deep-ink">
                                        {card.title}
                                    </h3>
                                </div>

                                {card.desc && (
                                    <p
                                        className="text-xs sm:text-sm font-body-md text-secondary leading-relaxed mb-2"
                                        dangerouslySetInnerHTML={{ __html: card.desc }}
                                    />
                                )}

                                {card.colors && (
                                    <div className="mt-3 flex gap-2">
                                        {card.colors.map((colorClass, cIdx) => (
                                            <span
                                                key={cIdx}
                                                className={`w-3.5 h-3.5 rounded-full ${colorClass}`}
                                            />
                                        ))}
                                    </div>
                                )}

                                {card.icon && (
                                    <div className="mt-3 flex">
                                        <span className="material-symbols-outlined text-craftsman-gold text-lg">
                                            {card.icon}
                                        </span>
                                    </div>
                                )}

                                {card.bullets && (
                                    <ul className="text-xs sm:text-sm font-body-md text-secondary space-y-1.5 mt-2">
                                        {card.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="flex items-center gap-2">
                                                <span className="w-1 h-1 bg-craftsman-gold rounded-full shrink-0" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Specification Badges */}
                <div className="mt-12 z-20">
                    <div className="flex flex-wrap justify-center gap-8 border-t border-b border-surface-container-highest py-6 px-gutter">
                        {radialMap.specs.map((spec, idx) => (
                            <React.Fragment key={idx}>
                                <div className="flex flex-col items-center">
                                    <span className="text-xs font-montserrat font-bold text-deep-ink uppercase tracking-wider">
                                        {spec.label}
                                    </span>
                                    <span className="text-sm text-secondary mt-1">
                                        {spec.value}
                                    </span>
                                </div>
                                {idx < radialMap.specs.length - 1 && (
                                    <div className="w-px h-12 bg-surface-container-highest hidden md:block" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductConfigurator;
