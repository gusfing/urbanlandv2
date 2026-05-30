import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const PrivacyPolicy = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Privacy Policy & Terms | Urbanland Products",
      description: "Learn about the data privacy policies, tracking terms, and legal conditions governing the use of Urbanland Products LLP digital platforms and directories."
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      <section className="max-w-[850px] mx-auto px-6">
        <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Legal Compliance</p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] mb-12">
          Privacy Policy & <br/>
          <span className="text-[#C9A84C]">Terms of Use.</span>
        </h1>

        <div className="prose prose-lg prose-[#2D2D2D] max-w-none text-xs sm:text-sm leading-relaxed text-[#2D2D2D]/80 space-y-8">
          <div>
            <h2 className="text-base font-black text-black uppercase mb-3">— 1. INFORMATION COLLECTION</h2>
            <p>
              We collect corporate names, email addresses, and contact numbers submitted via our master catalogue request forms and scope quotation generators. We utilize this information exclusively to compile technical price sheets and process design request scopes.
            </p>
          </div>

          <div>
            <h2 className="text-base font-black text-black uppercase mb-3">— 2. DATA USAGE & PRIVACY</h2>
            <p>
              Urbanland Products LLP maintains absolute confidentiality regarding architectural blueprints, project blueprints, and design lists submitted through our contact portal. We never sell, lease, or distribute project configurations or email addresses to third-party marketing companies.
            </p>
          </div>

          <div>
            <h2 className="text-base font-black text-black uppercase mb-3">— 3. COOKIES & TRACKING</h2>
            <p>
              We use low-footprint, technical cookies to remember selected product category filters and maintain state for smooth website operations. These analytics help our development team optimize page loading speeds and browser responsiveness.
            </p>
          </div>

          <div>
            <h2 className="text-base font-black text-black uppercase mb-3">— 4. LEGAL CONTACT</h2>
            <p>
              For legal inquiries, data deletion requests, or licensing conditions, please contact our legal counsel team directly at info@urbanlandproducts.com with the subject line 'Legal Affairs'.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
