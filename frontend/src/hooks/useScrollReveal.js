import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * useScrollReveal — activates all scroll-reveal animation classes via IntersectionObserver.
 * Classes observed: .reveal-up, .reveal-left, .reveal-right, .reveal-fade, .reveal-scale
 * Adds `.active` when element enters the viewport.
 */
const useScrollReveal = (options = {}) => {
  const location = useLocation();

  useEffect(() => {
    const {
      threshold = 0.08,
      rootMargin = "0px 0px -60px 0px",
    } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Once revealed, stop observing to save resources
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    const selectors = [
      ".reveal-up",
      ".reveal-left",
      ".reveal-right",
      ".reveal-fade",
      ".reveal-scale",
    ];

    const elements = document.querySelectorAll(selectors.join(", "));
    elements.forEach((el) => {
      // Don't re-add active if already animated
      if (!el.classList.contains("active")) {
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [location.pathname]);
};

export default useScrollReveal;
