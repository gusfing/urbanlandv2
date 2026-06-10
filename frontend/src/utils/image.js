const WP_BASE_URL = import.meta.env.VITE_WP_API_URL || "https://backend.urbanlandproducts.com";

/**
 * Image CDN Optimization Helper: Uses Cloudflare Image Resizing (/cdn-cgi/image/)
 * to optimize, cache, resize and convert both WP and local images to modern web formats (WebP/AVIF).
 */
export const getOptimizedImageUrl = (url) => {
  if (!url) return url;

  // Skip optimization for base64 data URIs
  if (url.startsWith("data:")) return url;

  // If it's already optimized or external CDN, return as is
  if (url.includes("images.unsplash.com") || url.includes("images.weserv.nl") || url.includes("/cdn-cgi/image/")) {
    return url;
  }

  // 1. WordPress dynamic images (external absolute URLs)
  if (url.startsWith("http://") || url.startsWith("https://")) {
    const isWordPressImage = url.includes("urbanlandproducts.com") || url.includes(WP_BASE_URL.replace(/^https?:\/\//, ""));
    if (isWordPressImage) {
      if (import.meta.env.DEV) {
        // Local dev: Load directly from WP backend to avoid 404s on localhost cdn-cgi
        return url;
      }
      // Production: Route through relative Cloudflare Image Resizing zone on the main domain
      return `/cdn-cgi/image/width=800,quality=85,format=auto/${url}`;
    }
    // Fallback for other external domains to use weserv (which runs on Cloudflare)
    const cleanUrl = url.replace(/^https?:\/\//, "");
    return `https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl)}&w=800&output=webp&q=80`;
  }

  // 2. Relative URLs / local site assets (e.g. /assets/..., /products/..., /src/assets/...)
  // In development, do not wrap local assets to avoid 404s on localhost.
  if (import.meta.env.DEV) {
    return url;
  }

  // Ensure path starts with a slash for production relative Cloudflare Image Resizing
  const cleanPath = url.startsWith("/") ? url : `/${url}`;
  return `/cdn-cgi/image/width=800,quality=85,format=auto${cleanPath}`;
};

