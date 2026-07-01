import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items, theme = 'dark', className = '' }) => {
  const isDark = theme === 'dark';

  const containerClasses = isDark
    ? 'bg-white/5 text-white/80 border border-white/10 shadow-lg'
    : 'bg-[#1c1c19]/5 text-[#1c1c19]/80 border border-[#1c1c19]/10 shadow-sm';

  const linkClasses = isDark
    ? 'text-white/60 hover:text-[#C9A84C]'
    : 'text-[#1c1c19]/60 hover:text-[#2C5F2E]';

  const separatorClasses = isDark ? 'text-white/30' : 'text-[#1c1c19]/30';

  const activeClasses = isDark ? 'text-[#C9A84C]' : 'text-[#2C5F2E]';

  return (
    <nav className={`flex items-center justify-center select-none text-[9px] sm:text-[10px] font-black uppercase tracking-widest gap-2 px-4 py-2.5 rounded-full w-fit backdrop-blur-md ${containerClasses} ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {isLast ? (
              <span className={`font-bold ${activeClasses}`}>
                {item.label}
              </span>
            ) : (
              <>
                {item.href ? (
                  <Link to={item.href} className={`${linkClasses} transition-colors no-underline`}>
                    {item.label}
                  </Link>
                ) : (
                  <span className={linkClasses}>{item.label}</span>
                )}
                <span className={separatorClasses}>/</span>
              </>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
