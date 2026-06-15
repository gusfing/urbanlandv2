import React from 'react';

const InstallationSupport = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 bg-surface-container-low border border-outline-variant rounded-none flex items-start space-x-6 hover:border-[#C9A84C] transition-all duration-300 text-left group hover:shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2C5F2E]/10 rounded-full flex items-center justify-center text-[#2C5F2E] group-hover:scale-110 transition-all duration-300 transform">
                    <span className="material-symbols-outlined text-2xl">local_shipping</span>
                </div>
                <div>
                    <h3 className="font-bold text-on-surface text-lg mb-2 group-hover:text-[#2C5F2E] transition-colors duration-300">Installation Support</h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed text-sm">
                        We provide delivery and professional installation support across India.
                    </p>
                </div>
            </div>
            <div className="p-8 bg-surface-container-low border border-outline-variant rounded-none flex items-start space-x-6 hover:border-[#C9A84C] transition-all duration-300 text-left group hover:shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2C5F2E]/10 rounded-full flex items-center justify-center text-[#2C5F2E] group-hover:scale-110 transition-all duration-300 transform">
                    <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <div>
                    <h3 className="font-bold text-on-surface text-lg mb-2 group-hover:text-[#2C5F2E] transition-colors duration-300">2-Year Comprehensive Warranty</h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed text-sm">
                        Covers frame, seating surface, and manufacturing defects.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InstallationSupport;
