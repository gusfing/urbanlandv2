import React from "react";
import { Link } from "react-router-dom";

const BenchesConfigurator = ({
    config,
    materialKeys,
    materialData,
    configMaterial,
    setConfigMaterial,
    lengthOptions,
    configLength,
    setConfigLength,
    designOptions,
    configDesign,
    configAntiGraffiti,
    setConfigAntiGraffiti,
    configGroundFixing,
    setConfigGroundFixing,
    activeMaterialData,
    totalCostMultiplier
}) => {
    if (materialKeys.length === 0) return null;

    return (
        <section className="reveal-section bg-surface pt-24 pb-40 lg:pb-24 px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
            <div className="max-w-container-max mx-auto">
                <div className="mb-16 text-left space-y-4 reveal-up">
                    <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                        {config.configurator.badge}
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                        {config.configurator.title}
                    </h2>
                    <div className="w-24 h-1 bg-craftsman-gold"></div>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                        {config.configurator.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Controls */}
                    <div className="lg:col-span-7 space-y-12 reveal-up">
                        {/* Material Selection */}
                        <div className="space-y-4 text-left">
                            <div>
                                <h3 className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest font-semibold">01 / Choose Material</h3>
                                <h4 className="font-headline-sm text-2xl text-deep-ink mt-1">
                                    {materialData[configMaterial]?.title || "Select Material"}
                                </h4>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-2">
                                {materialKeys.map((key) => {
                                    const data = materialData[key];
                                    const isSelected = configMaterial === key;
                                    const bgColor = key === "wpc" ? "bg-[#8B5E3C]"
                                        : key === "nfc" ? "bg-[#A0522D]"
                                        : key === "aluminium" ? "bg-[#C0C0C0]"
                                        : key === "mild_steel" ? "bg-[#4A4A4A]"
                                        : "bg-[#E5E4E2]";
                                        
                                    return (
                                        <button
                                            key={key}
                                            onClick={() => setConfigMaterial(key)}
                                            className={`group relative w-16 h-16 sm:w-20 sm:h-20 rounded-[12px] transition-all duration-300 ${bgColor} ${
                                                isSelected
                                                    ? "ring-2 ring-offset-4 ring-craftsman-gold shadow-md scale-105"
                                                    : "border border-outline-variant/30 hover:opacity-80 hover:scale-105"
                                            }`}
                                        >
                                            {/* Tooltip on hover */}
                                            <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-[200px] scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-charcoal-industrial text-white text-[11px] py-1.5 px-3 leading-relaxed z-20 normal-case font-medium rounded-[6px] shadow-lg text-center">
                                                {data.title}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Dimensions & Features */}
                        <div className="space-y-8 text-left">
                            <h3 className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest font-semibold">02 / Dimensions &amp; Features</h3>
                            <div className="space-y-6">
                                {/* Length */}
                                <div>
                                    <label className="font-body-md block mb-3 font-bold text-on-surface text-xs uppercase tracking-wider font-label-technical">Size / Length Specification</label>
                                    <div className="flex flex-wrap gap-2">
                                        {lengthOptions.map((len) => {
                                            const isSelected = configLength === len;
                                            return (
                                                <button
                                                    key={len}
                                                    onClick={() => setConfigLength(len)}
                                                    className={`px-6 py-2 border text-sm font-medium transition-colors rounded-[8px] ${isSelected
                                                        ? "border-primary bg-primary text-on-primary"
                                                        : "border-outline-variant text-on-surface hover:bg-surface-container-low"
                                                        }`}
                                                >
                                                    {len === "Custom" || isNaN(Number(len)) ? len : `${len}m`}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Design */}
                                <div>
                                    <label className="font-body-md block mb-3 font-bold text-on-surface text-xs uppercase tracking-wider font-label-technical">Design Architecture</label>
                                    <div className="flex flex-wrap gap-2">
                                        {designOptions.map((design) => {
                                            const isSelected = configDesign === design;
                                            return (
                                                <button
                                                    key={design}
                                                    onClick={() => setConfigDesign(design)}
                                                    className={`px-6 py-2 border text-sm font-medium transition-colors rounded-[8px] ${isSelected
                                                        ? "border-primary bg-primary text-on-primary"
                                                        : "border-outline-variant text-on-surface hover:bg-surface-container-low"
                                                        }`}
                                                >
                                                    {design}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Technical Add-ons */}
                                <div>
                                    <label className="font-body-md block mb-3 font-bold text-on-surface text-xs uppercase tracking-wider font-label-technical">Technical Add-ons</label>
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <label className="flex items-center space-x-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={configAntiGraffiti}
                                                onChange={() => setConfigAntiGraffiti(!configAntiGraffiti)}
                                                className="appearance-none h-5 w-5 border border-outline-variant bg-transparent checked:bg-forest-green checked:border-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green/30 rounded-[4px] relative cursor-pointer before:content-[''] before:absolute before:left-[6px] before:top-[2px] before:w-[6px] before:h-[11px] before:border-r-2 before:border-b-2 before:border-white before:rotate-45 before:opacity-0 checked:before:opacity-100 transition-all"
                                            />
                                            <span className="text-sm font-medium text-on-surface">Anti-graffiti Coating</span>
                                        </label>

                                        <label className="flex items-center space-x-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={configGroundFixing}
                                                onChange={() => setConfigGroundFixing(!configGroundFixing)}
                                                className="appearance-none h-5 w-5 border border-outline-variant bg-transparent checked:bg-forest-green checked:border-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green/30 rounded-[4px] relative cursor-pointer before:content-[''] before:absolute before:left-[6px] before:top-[2px] before:w-[6px] before:h-[11px] before:border-r-2 before:border-b-2 before:border-white before:rotate-45 before:opacity-0 checked:before:opacity-100 transition-all"
                                            />
                                            <span className="text-sm font-medium text-on-surface">Ground Fixing Kit</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Preview */}
                    <div className="lg:col-span-5 lg:sticky lg:top-28 text-left reveal-up" style={{ transitionDelay: "150ms" }}>
                        <div className="bg-[#f0ede9] border border-outline-variant p-6 sm:p-8 rounded-[8px] space-y-8">
                            {/* Image Preview */}
                            {activeMaterialData.image && (
                                <div className="aspect-video overflow-hidden rounded-[8px] bg-surface-dim relative border border-outline-variant">
                                    <img
                                        alt="Material Preview"
                                        className="w-full h-full object-cover transition-all duration-300"
                                        src={activeMaterialData.image}
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold font-label-caps border border-outline-variant uppercase tracking-widest rounded-[4px]">LIVE PREVIEW</div>
                                </div>
                            )}

                            {/* Technical Scorecard */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end border-b border-craftsman-gold pb-4">
                                    <div>
                                        <h4 className="font-label-caps text-xs text-on-surface-variant font-semibold">TECHNICAL SCORECARD</h4>
                                        <h2 className="font-headline-md text-2xl text-deep-ink mt-1">
                                            {activeMaterialData.title}
                                        </h2>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-label-caps text-[10px] text-on-surface-variant font-semibold">BUILD INDEX</span>
                                        <div className="text-forest-green font-bold text-sm">
                                            {configAntiGraffiti && configMaterial === "wpc" ? "ULTRA-ENDURANT" : activeMaterialData.status}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    {/* Lifespan */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold font-label-caps text-on-surface">
                                            <span>LIFESPAN</span>
                                            <span>{activeMaterialData.lifespan}</span>
                                        </div>
                                        <div className="h-2 bg-outline-variant/30 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-forest-green transition-all duration-700 rounded-full"
                                                style={{ width: activeMaterialData.lifespanBar || "0%" }}
                                            />
                                        </div>
                                    </div>

                                    {/* Maintenance */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold font-label-caps text-on-surface">
                                            <span>MAINTENANCE FREQUENCY</span>
                                            <span>
                                                {configAntiGraffiti ? "SELF-CLEANING / ULTRA LOW" : activeMaterialData.maintenance}
                                            </span>
                                        </div>
                                        <div className="h-2 bg-outline-variant/30 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-craftsman-gold transition-all duration-700 rounded-full"
                                                style={{ width: configAntiGraffiti ? "5%" : (activeMaterialData.maintenanceBar || "0%") }}
                                            />
                                        </div>
                                    </div>

                                    {/* Cost */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold font-label-caps text-on-surface">
                                            <span>COST INDEX</span>
                                            <span>
                                                {activeMaterialData.cost} ({totalCostMultiplier.toFixed(1)}x)
                                            </span>
                                        </div>
                                        <div className="h-2 bg-outline-variant/30 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-charcoal-industrial transition-all duration-700 rounded-full"
                                                style={{ width: activeMaterialData.costBar || "0%" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <Link
                                to="/contact"
                                className="w-full bg-forest-green text-on-primary py-3.5 sm:py-4 px-4 rounded-[8px] font-bold font-label-caps hover:bg-primary transition-all flex items-center justify-center gap-3 text-center uppercase tracking-[0.1em] sm:tracking-widest text-xs sm:text-sm"
                            >
                                Request Technical Spec Sheet
                                <span className="material-symbols-outlined">download</span>
                            </Link>
                            <p className="text-[11px] text-center text-on-surface-variant font-label-caps italic">
                                Estimated delivery: 4-6 Weeks for custom specifications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenchesConfigurator;
