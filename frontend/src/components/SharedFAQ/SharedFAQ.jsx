import React, { useState } from "react";

const SharedFAQ = ({ faqs, title = "Frequently Asked Questions", badge = "FAQ" }) => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="reveal-section py-24 bg-surface-container-lowest/30">
      <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16 text-left space-y-4">
          <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
            {badge}
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink uppercase">
            {title}
          </h2>
          <div className="w-24 h-1 bg-craftsman-gold"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className="bg-white border border-black/[0.05] shadow-sm rounded-lg overflow-hidden transition-all duration-300">
                <button
                  className="w-full text-left p-8 flex justify-between items-center outline-none bg-white select-none cursor-pointer group"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="font-bold text-sm uppercase tracking-widest text-deep-ink group-hover:text-forest-green transition-colors">
                    {faq.q}
                  </span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180 text-forest-green' : 'text-deep-ink/50'}`}>
                    expand_more
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 p-8 border-t border-black/[0.05] pt-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p className="text-sm text-deep-ink/75 leading-relaxed whitespace-pre-line">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SharedFAQ;
