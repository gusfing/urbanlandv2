import React, { useState, useEffect } from "react";

const ImageDebugMenu = () => {
  const [size, setSize] = useState(52);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedSize = localStorage.getItem("urbanland_img_size") || "52";
    const parsed = parseInt(savedSize, 10);
    setSize(parsed);
    document.documentElement.style.setProperty("--product-img-size", `${parsed}%`);
  }, []);

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setSize(newSize);
    localStorage.setItem("urbanland_img_size", newSize.toString());
    document.documentElement.style.setProperty("--product-img-size", `${newSize}%`);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999] font-sans select-none">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-black hover:bg-zinc-800 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-2xl transition-all cursor-pointer border border-white/10"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        🔧 Debug Image Size: {size}%
      </button>

      {/* Menu Drawer */}
      {isOpen && (
        <div className="mt-3 p-6 bg-white/95 backdrop-blur-md rounded-3xl border border-black/10 shadow-2xl max-w-xs w-72 flex flex-col gap-4 text-black animate-fadeIn">
          <div className="flex justify-between items-center border-b border-black/5 pb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
              Visual Debugger
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[10px] font-bold text-black/40 hover:text-black"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-black uppercase text-black/80 flex justify-between">
              <span>Image Limit Size:</span>
              <span className="text-emerald-600 font-bold">{size}%</span>
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={size}
              onChange={handleSizeChange}
              className="w-full h-1 bg-black/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          <p className="text-[9px] leading-relaxed text-black/50 font-medium border-t border-black/5 pt-2">
            Adjust this slider to find the perfect product size on your screen. Once satisfied, copy the final percentage (e.g. 45%) and send it to me so I can hardcode it permanently.
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageDebugMenu;
