import React, { useState, useEffect } from "react";
import { useRouteError, Link } from "react-router-dom";
import { MdHome, MdRefresh, MdWarning } from "react-icons/md";

const RootErrorBoundary = ({ layout = false }) => {
  const error = useRouteError();
  const [showDetails, setShowDetails] = useState(false);

  console.error("ErrorBoundary caught an active route error:", error);

  // Determine error message and metadata details
  const errorMessage = 
    error?.message || 
    error?.statusText || 
    (typeof error?.data === "string" ? error.data : null) || 
    "An unexpected error occurred in our system.";
  const errorStatus = error?.status || "500";
  const errorStack = error?.stack || "";

  useEffect(() => {
    // Reset scroll to top when error boundary mounts to ensure visibility
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [layout]);

  return (
    <div 
      className={`w-full flex flex-col justify-center items-center text-center select-none font-outfit transition-all duration-500 ${
        layout 
          ? "min-h-[70vh] py-20 px-6 bg-transparent" 
          : "min-h-screen p-6 bg-[#F7F4EF]"
      }`}
    >
      {/* Soft yellow warning circle icon */}
      <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] text-3xl mb-6 shadow-sm animate-pulse">
        <MdWarning />
      </div>

      <p className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-2">
        — System Interruption ({errorStatus})
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#2D2D2D] leading-none mb-4">
        Unexpected Encounter
      </h1>

      <p className="text-xs sm:text-sm text-[#2D2D2D]/70 max-w-md leading-relaxed mb-8">
        Our landscape design interface experienced an interruption. This might be due to a temporary connection drop or a configuration shift.
      </p>

      {/* Action Buttons Row */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-3.5 bg-[#2C5F2E] text-white hover:bg-[#2D2D2D] hover:shadow-md rounded-full font-bold uppercase tracking-wider text-xs flex items-center gap-2 transition-all duration-300 cursor-pointer"
        >
          <MdRefresh className="text-base" /> Reload Interface
        </button>

        <Link 
          to="/"
          className="px-6 py-3.5 bg-white text-[#2D2D2D] border border-black/[0.06] hover:bg-black/5 rounded-full font-bold uppercase tracking-wider text-xs flex items-center gap-2 transition-all duration-300 shadow-sm"
        >
          <MdHome className="text-base" /> Return Home
        </Link>
      </div>

      {/* Developer Details Accordion */}
      <div className="w-full max-w-2xl bg-white border border-black/[0.04] rounded-[2rem] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] overflow-hidden">
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="w-full text-left flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#2D2D2D]/60 hover:text-[#2D2D2D] transition-colors cursor-pointer select-none"
        >
          <span>Diagnostic Log Details</span>
          <span>{showDetails ? "Hide ✕" : "Show ▽"}</span>
        </button>

        <div 
          className={`transition-all duration-300 ease-in-out overflow-hidden text-left ${
            showDetails ? "max-h-[500px] mt-4 border-t border-black/[0.04] pt-4" : "max-h-0"
          }`}
        >
          <p className="text-xs font-bold text-[#2D2D2D] mb-1.5 uppercase tracking-wider">Error Details:</p>
          <div className="bg-[#2D2D2D] text-white rounded-xl p-4 font-mono text-[10px] sm:text-xs overflow-x-auto select-text shadow-inner">
            <span className="text-[#C9A84C] font-semibold">{errorMessage}</span>
            {errorStack && (
              <div className="mt-3 text-white/50 max-h-48 overflow-y-auto pr-2 scrollbar-none leading-relaxed border-t border-white/5 pt-2">
                {errorStack}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootErrorBoundary;

