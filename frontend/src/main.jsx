import "./lib/gsap-register"; // One-time GSAP plugin registration (must be first)
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// --- GLOBAL DRAG-TO-SCROLL FOR ALL SLIDERS ---
if (typeof window !== "undefined" && typeof document !== "undefined") {
  // Prevent browser's default image drag ghost preview to allow custom drag-to-scroll
  document.addEventListener("dragstart", (e) => {
    if (e.target.closest(".overflow-x-auto")) {
      e.preventDefault();
    }
  });

  document.addEventListener("mousedown", (e) => {
    // Find the closest parent that has horizontal overflow scrolling
    const scrollContainer = e.target.closest(".overflow-x-auto");
    if (!scrollContainer) return;

    // Prevent drag-to-scroll on text inputs, selects, and textareas where text selection/focus is needed
    if (e.target.closest("input, select, textarea")) return;

    // Cancel any active momentum scrolling animation on click/mousedown
    if (scrollContainer.momentumId) {
      cancelAnimationFrame(scrollContainer.momentumId);
      scrollContainer.momentumId = null;
    }

    let isDown = true;
    let startX = e.pageX - scrollContainer.offsetLeft;
    let scrollLeft = scrollContainer.scrollLeft;
    let hasMoved = false;

    // Kinetic velocity tracking variables (100ms moving window)
    let dragHistory = [{ x: e.pageX, time: Date.now() }];

    scrollContainer.style.cursor = "grabbing";
    
    // Temporarily disable smooth scrolling and CSS scroll snapping during drag to prevent drag lag and snapping fights
    const originalScrollBehavior = scrollContainer.style.scrollBehavior;
    const computedStyle = getComputedStyle(scrollContainer);
    const originalSnapType = scrollContainer.style.scrollSnapType || computedStyle.scrollSnapType || computedStyle.getPropertyValue("scroll-snap-type");
    
    scrollContainer.style.scrollBehavior = "auto";
    scrollContainer.style.scrollSnapType = "none";

    const onMouseMove = (moveEvent) => {
      if (!isDown) return;
      
      const currentX = moveEvent.pageX;
      const currentTime = Date.now();
      dragHistory.push({ x: currentX, time: currentTime });
      
      // Keep only events from the last 100ms
      const cutoff = currentTime - 100;
      while (dragHistory.length > 0 && dragHistory[0].time < cutoff) {
        dragHistory.shift();
      }
      
      // Calculate delta
      const x = moveEvent.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1.5; // Drag speed multiplier
      
      if (Math.abs(walk) > 5) {
        hasMoved = true;
      }
      
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const onMouseUpOrLeave = () => {
      isDown = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUpOrLeave);
      document.removeEventListener("mouseleave", onMouseUpOrLeave);

      const restoreDefaults = () => {
        scrollContainer.style.cursor = "grab";
        scrollContainer.style.scrollBehavior = originalScrollBehavior;
        scrollContainer.style.scrollSnapType = ""; // remove inline override to restore CSS stylesheet snapping
      };

      // If dragging occurred, intercept next click to prevent routing/actions
      if (hasMoved) {
        const preventClick = (clickEvent) => {
          clickEvent.preventDefault();
          clickEvent.stopPropagation();
          scrollContainer.removeEventListener("click", preventClick, true);
        };
        scrollContainer.addEventListener("click", preventClick, true);

        // Apply kinetic momentum scroll animation if released with speed
        const currentTime = Date.now();
        const cutoff = currentTime - 100;
        while (dragHistory.length > 0 && dragHistory[0].time < cutoff) {
          dragHistory.shift();
        }

        let velocity = 0;
        if (dragHistory.length >= 2) {
          const first = dragHistory[0];
          const last = dragHistory[dragHistory.length - 1];
          const dt = last.time - first.time;
          if (dt > 10) {
            velocity = (last.x - first.x) / dt; // pixels per ms
          }
        }

        if (Math.abs(velocity) > 0.05) {
          let momentumVelocity = velocity * 16; // speed factor
          
          const step = () => {
            scrollContainer.scrollLeft -= momentumVelocity;
            momentumVelocity *= 0.95; // decay factor (friction)
            
            if (Math.abs(momentumVelocity) > 0.15 && !isDown) {
              scrollContainer.momentumId = requestAnimationFrame(step);
            } else {
              scrollContainer.momentumId = null;
              restoreDefaults();
            }
          };
          scrollContainer.momentumId = requestAnimationFrame(step);
        } else {
          restoreDefaults();
        }
      } else {
        restoreDefaults();
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUpOrLeave);
    document.addEventListener("mouseleave", onMouseUpOrLeave);
  });
}