import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const PrivacyPolicy = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Privacy Policy | Urbanland Products – Sustainable Outdoor Furniture",
      description: "Urbanland Products Privacy Policy. Learn how we collect, use, and protect your personal information when you request a quote, download catalogues, or contact us. Committed to data security and data privacy."
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      <section className="max-w-[850px] mx-auto px-6">
        <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Legal Compliance</p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-[#2D2D2D]/60 mb-12 font-medium">
          Last Updated: June 2026
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-[#2D2D2D]/80 mb-12">
          At Urbanland Products, we are committed to protecting your privacy and handling your personal data responsibly. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, request a quote, download resources, or interact with us.
        </p>

        <div className="prose prose-lg prose-[#2D2D2D] max-w-none text-xs sm:text-sm leading-relaxed text-[#2D2D2D]/80 space-y-8">
          <div>
            <h2 className="text-base sm:text-lg font-black text-black uppercase mb-3">— 1. Introduction</h2>
            <p>
              Urbanland Products (hereinafter “we”, “us”, or “our”) respects your privacy and is committed to protecting your personal data. This Privacy Policy applies to the website https://urbanlandproducts.com and all related services.
            </p>
            <p className="mt-3">
              By using our website or providing your information, you consent to the practices described in this policy.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-black text-black uppercase mb-3">— 2. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li><strong>Personal Information you provide:</strong> Name, company name, phone number, email address, project details, and location when you fill quote forms, download catalogues, or contact us.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on the site (via analytics tools).</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to improve user experience, remember preferences, and analyze website traffic.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-black text-black uppercase mb-3">— 3. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>Process quote requests and respond to inquiries</li>
              <li>Send product catalogues, brochures, and updates</li>
              <li>Improve our website and services</li>
              <li>Communicate with you regarding orders, projects, or support</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-3 font-semibold text-black">
              We do not sell your personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-black text-black uppercase mb-3">— 4. Sharing of Your Information</h2>
            <p>We may share your information only in the following cases:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>With trusted service providers (delivery partners, hosting, analytics) who help us operate the website and fulfill services</li>
              <li>When required by law or government authorities</li>
              <li>In case of business transfer or merger (with appropriate safeguards)</li>
            </ul>
            <p className="mt-3">
              We ensure all third parties maintain adequate data protection standards.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-black text-black uppercase mb-3">— 5. Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your personal data from unauthorized access, loss, misuse, or alteration. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-black text-black uppercase mb-3">— 6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>Access, update, or delete your personal data</li>
              <li>Withdraw consent at any time</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us at the details provided below.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-black text-black uppercase mb-3">— 7. Cookies</h2>
            <p>
              We use essential and analytics cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-black text-black uppercase mb-3">— 8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated “Last Updated” date.
            </p>
          </div>

          <div className="bg-[#EAE5DB]/40 p-6 md:p-8 rounded-[2rem] border border-black/[0.04] mt-8">
            <h2 className="text-base sm:text-lg font-black text-[#2C5F2E] uppercase mb-3">— 9. Contact Us</h2>
            <p className="font-bold text-black mb-1">Urbanland Products</p>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/85 leading-relaxed">
              Unit no 217, Gauri Complex,<br/>
              Above Bank of Baroda,<br/>
              Navghar Vasai East, Samarth Krupa Nagar,<br/>
              Vasai East, Mumbai, Vasai-Virar,<br/>
              Maharashtra 401202
            </p>
            <p className="mt-4 text-xs sm:text-sm">
              <strong>Email:</strong> info@urbanlandproducts.com<br/>
              <strong>Phone:</strong> +91 93228 59776
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-white border border-black/[0.04] p-8 md:p-12 rounded-[2rem] text-center shadow-[0_10px_30px_rgba(0,0,0,0.005)]">
          <h3 className="text-xl sm:text-2xl font-black uppercase text-black mb-3">
            Questions About Our Privacy Practices?
          </h3>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link
              to="/contact"
              className="px-5 py-3 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-[#2D2D2D] transition-colors cursor-pointer no-underline"
            >
              Contact Us →
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 bg-[#EAE5DB] text-[#2D2D2D] rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-[#C9A84C] hover:text-white transition-colors border border-black/[0.04] cursor-pointer no-underline"
            >
              Request a Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

