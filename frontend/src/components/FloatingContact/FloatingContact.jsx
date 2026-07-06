import React, { useState } from 'react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-28 right-6 z-[9998] flex flex-col-reverse items-end gap-3">
      {/* Main Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 bg-[#1a1a1a] hover:bg-black rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer z-10"
        aria-label="Contact Options"
      >
        <span className={`material-symbols-outlined text-white text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          {isOpen ? 'close' : 'forum'}
        </span>
      </button>

      {/* Expanded Buttons */}
      <div className={`flex flex-col-reverse items-end gap-3 transition-all duration-300 origin-bottom ${isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-8 scale-75 pointer-events-none'}`}>
        
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919999999999" 
          target="_blank" 
          rel="noreferrer" 
          className="group relative w-12 h-12 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
          aria-label="WhatsApp Now"
        >
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          <span className="absolute right-16 bg-black/80 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm pointer-events-none">
            WhatsApp
          </span>
        </a>

        {/* Call Button */}
        <a 
          href="tel:+919999999999" 
          className="group relative w-12 h-12 bg-[#C9A84C] hover:bg-[#E5C76B] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Call Now"
        >
          <span className="material-symbols-outlined text-white text-xl font-bold">call</span>
          <span className="absolute right-16 bg-black/80 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm pointer-events-none">
            Call
          </span>
        </a>

        {/* Email Button */}
        <a 
          href="mailto:contact@decorlab.in" 
          className="group relative w-12 h-12 bg-[#2D2D2D] hover:bg-[#1a1a1a] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Email Us"
        >
          <span className="material-symbols-outlined text-white text-xl font-bold">mail</span>
          <span className="absolute right-16 bg-black/80 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm pointer-events-none">
            Email
          </span>
        </a>

      </div>
    </div>
  );
};

export default FloatingContact;
