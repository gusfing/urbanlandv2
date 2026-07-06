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
    const selectorString = selectors.join(", ");

    // 1. Observe existing elements in the DOM
    const elements = document.querySelectorAll(selectorString);
    elements.forEach((el) => {
      if (!el.classList.contains("active")) {
        observer.observe(el);
      }
    });

    // 2. Observe dynamically added elements (fixes blank space on route change / async render)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // ELEMENT_NODE
            if (node.matches && node.matches(selectorString)) {
              if (!node.classList.contains("active")) observer.observe(node);
            }
            if (node.querySelectorAll) {
              const childElements = node.querySelectorAll(selectorString);
              childElements.forEach((child) => {
                if (!child.classList.contains("active")) observer.observe(child);
              });
            }
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [location.pathname, options]);
};

export default useScrollReveal;
