import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { fetchPostBySlug, fetchPosts } from "../../lib/wp";
import { updatePageSEO, cleanPageSEO, generateBlogPostingSchema } from "../../lib/seo";
import { 
  MdArrowBack, 
  MdCalendarToday, 
  MdAccessTime, 
  MdKeyboardArrowRight, 
  MdContentCopy, 
  MdCheck, 
  MdChevronRight,
  MdChevronLeft 
} from "react-icons/md";
import { FaLinkedinIn, FaTwitter, FaLink } from "react-icons/fa";

// Sub-component: Premium Sliding Image Carousel with Lightbox Zoom View
const BlogImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full my-8 bg-white border border-black/[0.03] p-3 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative group overflow-hidden select-none">
      <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-white border border-black/[0.01] flex items-center justify-center">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
          className="w-full h-full object-contain transition-all duration-500 cursor-zoom-in hover:scale-102"
          onClick={() => setLightboxOpen(true)}
        />

        {images.length > 1 && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-[#2C5F2E] hover:text-white flex items-center justify-center text-[#2D2D2D] transition-all duration-300 shadow-md backdrop-blur-sm cursor-pointer opacity-0 group-hover:opacity-100"
            >
              <MdChevronLeft className="text-2xl" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-[#2C5F2E] hover:text-white flex items-center justify-center text-[#2D2D2D] transition-all duration-300 shadow-md backdrop-blur-sm cursor-pointer opacity-0 group-hover:opacity-100"
            >
              <MdChevronRight className="text-2xl" />
            </button>
          </>
        )}

        <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full select-none">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
        <p className="text-xs text-[#2D2D2D]/60 italic font-light truncate max-w-sm sm:max-w-md">
          {images[currentIndex].caption || images[currentIndex].alt || "Blog Gallery Image"}
        </p>

        {images.length > 1 && (
          <div className="flex items-center gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "bg-[#2C5F2E] w-3" : "bg-black/10 hover:bg-black/35"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9999] flex flex-col justify-center items-center p-6 animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#C9A84C] text-2xl font-black uppercase tracking-widest cursor-pointer select-none"
          >
            Close ✕
          </button>

          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt} 
            className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <p className="text-white/70 text-sm mt-6 text-center max-w-2xl font-light italic">
            {images[currentIndex].caption || images[currentIndex].alt}
          </p>

          {images.length > 1 && (
            <div className="flex items-center gap-6 mt-6" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <MdChevronLeft className="text-2xl" />
              </button>
              <span className="text-white/50 text-xs font-bold uppercase tracking-widest select-none">
                {currentIndex + 1} / {images.length}
              </span>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <MdChevronRight className="text-2xl" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [headings, setHeadings] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  const [contentSections, setContentSections] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeadingId, setActiveHeadingId] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let active = true;
    const loadPostData = async () => {
      setLoading(true);
      try {
        const singlePost = await fetchPostBySlug(slug);
        if (active) {
          setPost(singlePost);
          if (singlePost) {
            const allPosts = await fetchPosts();
            const filtered = allPosts
              .filter((p) => p.id !== singlePost.id)
              .slice(0, 2);
            setRelatedPosts(filtered);
          }
        }
      } catch (err) {
        console.error("Error loading blog details:", err);
      } finally {
        if (active) setLoading(false);
      }
    };
    loadPostData();
    return () => { active = false; };
  }, [slug]);

  useEffect(() => {
    if (post && post.content?.rendered) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(post.content.rendered, "text/html");
      
      // 1. Process headings and assign IDs
      const headingElements = doc.querySelectorAll("h2, h3");
      const extractedHeadings = [];

      headingElements.forEach((el, index) => {
        const cleanText = el.innerText || el.textContent;
        const cleanId = cleanText
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-") + `-${index}`;

        el.setAttribute("id", cleanId);
        extractedHeadings.push({
          id: cleanId,
          text: cleanText,
          level: el.tagName.toLowerCase()
        });
      });
      setHeadings(extractedHeadings);

      // 2. Identify galleries and columns with multiple images and replace with serializable text markers
      const extractedCarousels = [];
      let carouselCounter = 0;

      // Scan for Gutenberg galleries
      const galleries = doc.querySelectorAll(".wp-block-gallery");
      galleries.forEach((gallery) => {
        const imgs = gallery.querySelectorAll("img");
        if (imgs.length >= 2) {
          const imagesList = Array.from(imgs).map((img) => ({
            src: img.getAttribute("src"),
            alt: img.getAttribute("alt") || img.getAttribute("title") || "Gallery Image",
            caption: img.closest("figure")?.querySelector("figcaption")?.innerText || ""
          }));

          const placeholderMarker = `###CAROUSEL_PLACEHOLDER_${carouselCounter}###`;
          extractedCarousels.push({ images: imagesList });
          
          // Replace gallery node with a text node placeholder
          const textNode = doc.createTextNode(placeholderMarker);
          gallery.parentNode.replaceChild(textNode, gallery);
          carouselCounter++;
        }
      });

      // Scan for columns with multiple images and no long text
      const columns = doc.querySelectorAll(".wp-block-columns");
      columns.forEach((colBlock) => {
        const imgs = colBlock.querySelectorAll("img");
        if (imgs.length >= 2) {
          const paragraphs = Array.from(colBlock.querySelectorAll("p"));
          const hasLongParagraph = paragraphs.some(p => (p.textContent || "").trim().length > 100);
          if (!hasLongParagraph) {
            const imagesList = Array.from(imgs).map((img) => ({
              src: img.getAttribute("src"),
              alt: img.getAttribute("alt") || img.getAttribute("title") || "Column Image",
              caption: img.closest("figure")?.querySelector("figcaption")?.innerText || ""
            }));

            const placeholderMarker = `###CAROUSEL_PLACEHOLDER_${carouselCounter}###`;
            extractedCarousels.push({ images: imagesList });
            
            // Replace columns node with a text node placeholder
            const textNode = doc.createTextNode(placeholderMarker);
            colBlock.parentNode.replaceChild(textNode, colBlock);
            carouselCounter++;
          }
        }
      });

      setCarouselData(extractedCarousels);

      // 3. Serialize to HTML and split by placeholders to build React rendering sections
      const fullHtml = doc.body.innerHTML;
      const parts = fullHtml.split(/(###CAROUSEL_PLACEHOLDER_\d+###)/g);
      
      const sections = parts.map((part) => {
        const match = part.match(/###CAROUSEL_PLACEHOLDER_(\d+)###/);
        if (match) {
          return {
            type: "carousel",
            index: parseInt(match[1], 10)
          };
        } else {
          return {
            type: "html",
            content: part
          };
        }
      }).filter(sec => sec.type === "carousel" || sec.content.trim() !== "");

      setContentSections(sections);
    } else {
      setHeadings([]);
      setCarouselData([]);
      setContentSections([]);
    }
  }, [post]);

  useEffect(() => {
    const handleScrollProgress = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) setScrollProgress((window.scrollY / totalScroll) * 100);
    };
    window.addEventListener("scroll", handleScrollProgress);
    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;
    const handleScrollHighlight = () => {
      const headingPositions = headings.map((h) => ({
        id: h.id,
        top: document.getElementById(h.id)?.getBoundingClientRect().top || 0
      }));
      const active = headingPositions.filter((h) => h.top <= 160).pop();
      setActiveHeadingId(active ? active.id : "");
    };
    window.addEventListener("scroll", handleScrollHighlight);
    handleScrollHighlight();
    return () => window.removeEventListener("scroll", handleScrollHighlight);
  }, [headings]);

  useEffect(() => {
    if (post) {
      const pageUrl = window.location.href;
      const schemaMarkup = post.yoast_head_json?.schema || generateBlogPostingSchema(post, pageUrl);
      updatePageSEO({
        title: post.yoast_head_json?.title || `${post.title?.rendered} | Urbanland Journal`,
        description: post.yoast_head_json?.description || post.excerpt?.rendered?.replace(/<[^>]*>/g, ""),
        og_title: post.yoast_head_json?.og_title || post.title?.rendered,
        og_description: post.yoast_head_json?.og_description || post.excerpt?.rendered?.replace(/<[^>]*>/g, ""),
        og_image: post.yoast_head_json?.og_image || post.featured_image,
        og_type: "article",
        schema: schemaMarkup
      });
    }
    return () => cleanPageSEO();
  }, [post]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, "_blank", "width=600,height=600");
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title?.rendered?.replace(/<[^>]*>/g, "") || "")}`, "_blank", "width=600,height=400");
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#F7F4EF] flex flex-col justify-center items-center text-center p-8">
        <svg className="animate-spin h-10 w-10 text-[#2C5F2E] mb-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <p className="text-[#2D2D2D]/60 text-xs font-bold uppercase tracking-widest">Loading Article Content...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="w-full min-h-screen bg-[#F7F4EF] flex flex-col justify-center items-center text-center p-8">
        <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">Article Not Found</h2>
        <p className="text-[#2D2D2D]/70 mb-8">The requested article could not be resolved from WordPress.</p>
        <Link to="/blog" className="px-6 py-3 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] transition-colors">Back to Journal</Link>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const words = post.content?.rendered?.replace(/<[^>]*>/g, "")?.split(/\s+/)?.length || 0;
  const readingTime = Math.max(1, Math.round(words / 200));

  const getInitials = (name) => {
    if (!name) return "UC";
    return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  };

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      <div className="fixed top-0 left-0 h-[3px] bg-[#2C5F2E] transition-all duration-100 z-50" style={{ width: `${scrollProgress}%` }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-1 text-[10px] md:text-xs text-[#2D2D2D]/50 uppercase tracking-widest font-bold select-none">
          <Link to="/" className="hover:text-[#2C5F2E] transition-colors">Catalog</Link>
          <MdKeyboardArrowRight className="text-sm" />
          <Link to="/blog" className="hover:text-[#2C5F2E] transition-colors">Journal</Link>
          <MdKeyboardArrowRight className="text-sm" />
          <span className="text-[#2D2D2D] font-black truncate max-w-[150px] sm:max-w-xs">{post.title?.rendered?.replace(/<[^>]*>/g, "")}</span>
        </div>
        <button onClick={() => navigate("/blog")} className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#2C5F2E] hover:text-[#C9A84C] transition-colors cursor-pointer">
          <MdArrowBack className="text-base" /> Back to Journal
        </button>
      </div>

      <header className="max-w-[1000px] mx-auto text-center px-6 mt-12 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {post.category_names?.map((cat) => (
            <span key={cat} className="text-[9px] font-black uppercase tracking-widest bg-[#C9A84C] text-[#232120] px-4.5 py-1.5 rounded-full shadow-sm">{cat}</span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#2D2D2D] leading-[1.1] mb-8" dangerouslySetInnerHTML={{ __html: post.title?.rendered }} />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs text-[#2D2D2D]/60 tracking-wider">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#2C5F2E] text-white font-bold text-[10px] flex items-center justify-center shadow-md select-none shrink-0">{getInitials(post.author_name)}</div>
            <span className="font-bold text-[#2D2D2D]">By {post.author_name}</span>
          </div>
          <div className="hidden sm:block text-[#2D2D2D]/20">•</div>
          <div className="flex items-center gap-1.5">
            <MdCalendarToday className="text-sm text-[#C9A84C]" />
            <span>{formattedDate}</span>
          </div>
          <div className="hidden sm:block text-[#2D2D2D]/20">•</div>
          <div className="flex items-center gap-1.5">
            <MdAccessTime className="text-sm text-[#C9A84C]" />
            <span>{readingTime} min read</span>
          </div>
        </div>
      </header>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <div className="w-full aspect-[21/9] md:aspect-[24/9] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-black/5 relative shadow-xl border border-black/[0.02] group">
          <img src={post.featured_image} alt={post.title?.rendered || "Featured banner"} className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out" fetchpriority="high" loading="eager" decoding="async" />
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
        <article className="lg:col-span-8">
          <div className="blog-content-area text-sm sm:text-base leading-relaxed text-[#2D2D2D]/90 space-y-6">
            {contentSections.map((section, idx) => {
              if (section.type === "html") {
                return (
                  <div 
                    key={idx} 
                    dangerouslySetInnerHTML={{ __html: section.content }} 
                    className="space-y-6"
                  />
                );
              } else if (section.type === "carousel") {
                const carousel = carouselData[section.index];
                if (!carousel) return null;
                return (
                  <BlogImageCarousel 
                    key={idx} 
                    images={carousel.images} 
                  />
                );
              }
              return null;
            })}
          </div>
          <div className="flex flex-wrap items-center gap-3 border-t border-black/[0.08] pt-8 mt-12">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D2D2D]/55 mr-2">Share article:</span>
            
            <button 
              onClick={shareLinkedIn}
              className="w-9 h-9 rounded-full bg-white hover:bg-[#2C5F2E] hover:text-white border border-black/[0.05] flex items-center justify-center text-[#2D2D2D] hover:border-[#2C5F2E] shadow-sm transition-all duration-300 cursor-pointer"
              title="Share on LinkedIn"
            >
              <FaLinkedinIn className="text-sm" />
            </button>

            <button 
              onClick={shareTwitter}
              className="w-9 h-9 rounded-full bg-white hover:bg-[#2C5F2E] hover:text-white border border-black/[0.05] flex items-center justify-center text-[#2D2D2D] hover:border-[#2C5F2E] shadow-sm transition-all duration-300 cursor-pointer"
              title="Share on X (Twitter)"
            >
              <FaTwitter className="text-sm" />
            </button>

            <button 
              onClick={handleCopyLink}
              className="relative w-9 h-9 rounded-full bg-white hover:bg-[#2C5F2E] hover:text-white border border-black/[0.05] flex items-center justify-center text-[#2D2D2D] hover:border-[#2C5F2E] shadow-sm transition-all duration-300 cursor-pointer"
              title="Copy URL link"
            >
              {copied ? <MdCheck className="text-base text-[#2C5F2E] group-hover:text-white" /> : <MdContentCopy className="text-sm" />}
              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#2D2D2D] text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded shadow-lg pointer-events-none animate-fade-in-up">
                  Copied!
                </span>
              )}
            </button>
          </div>

          {/* Navigation/CTA box */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 mt-12 border-t border-black/[0.04]">
            <Link
              to="/blog"
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D2D2D] hover:text-[#2C5F2E] transition-all cursor-pointer group"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform">←</span> Back to Journal list
            </Link>

            <Link
              to="/"
              className="px-7 py-3.5 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] shadow-md hover:shadow-lg transition-all duration-300"
            >
              Explore Street Furniture Collection
            </Link>
          </div>
        </article>

        {/* Sticky Sidebar Column */}
        <aside className="hidden lg:block lg:col-span-4">
          <div className="sticky top-32 space-y-8 pb-12">
            
            {/* Table of Contents */}
            {headings.length > 0 && (
              <div className="bg-white rounded-[2rem] border border-black/[0.03] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2D2D2D] mb-6 pb-3 border-b border-black/[0.04]">
                  Table of Contents
                </h4>
                <ul className="space-y-4">
                  {headings.map((h) => (
                    <li 
                      key={h.id} 
                      className="transition-all duration-300"
                      style={{ paddingLeft: h.level === "h3" ? "1rem" : "0" }}
                    >
                      <a 
                        href={`#${h.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(h.id);
                          if (el) {
                            const offsetTop = el.getBoundingClientRect().top + window.scrollY - 120;
                            window.scrollTo({ top: offsetTop, behavior: "smooth" });
                          }
                        }}
                        className={`text-xs font-semibold hover:text-[#2C5F2E] transition-all block relative ${
                          activeHeadingId === h.id 
                            ? "text-[#2C5F2E] translate-x-1.5 font-bold" 
                            : "text-[#2D2D2D]/60"
                        }`}
                      >
                        {activeHeadingId === h.id && (
                          <span className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#2C5F2E]" />
                        )}
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* B2B call to action box */}
            <div className="bg-[#2D2D2D] text-white rounded-[2.25rem] p-8 shadow-lg border border-white/5 relative overflow-hidden group">
              {/* Subtle background radial accent */}
              <div className="absolute -right-24 -bottom-24 w-48 h-48 rounded-full bg-[#2C5F2E]/25 blur-3xl pointer-events-none group-hover:bg-[#2C5F2E]/35 transition-colors duration-500" />
              
              <p className="text-[9px] font-black uppercase tracking-widest text-[#C9A84C] mb-2">— Design Laboratory</p>
              <h4 className="text-xl font-bold uppercase tracking-tight leading-tight mb-4 text-white">
                Need Custom Street Infrastructure?
              </h4>
              <p className="text-xs text-white/70 font-light leading-relaxed mb-6">
                Explore our full catalogue or collaborate with our architectural engineers to customize bench wood selection, sizes, finishes, or solar shelter configurations.
              </p>
              <Link 
                to="/"
                className="w-full py-3.5 bg-white text-[#2D2D2D] group-hover:bg-[#C9A84C] group-hover:text-[#2D2D2D] hover:shadow-lg rounded-full font-bold uppercase tracking-wider text-[10px] text-center transition-all duration-300 block select-none"
              >
                Request Architectural Catalogue
              </Link>
            </div>

            {/* Share and Metadata Sidebar Panel */}
            <div className="bg-white rounded-[2rem] border border-black/[0.03] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col gap-6">
              <div>
                <h5 className="text-[9px] font-black uppercase tracking-widest text-[#2D2D2D]/55 mb-2.5">Share article</h5>
                <div className="flex items-center gap-2.5">
                  <button 
                    onClick={shareLinkedIn}
                    className="w-9 h-9 rounded-full bg-[#F7F4EF] hover:bg-[#2C5F2E] hover:text-white border border-transparent flex items-center justify-center text-[#2D2D2D] shadow-sm transition-all duration-300 cursor-pointer"
                    title="Share on LinkedIn"
                  >
                    <FaLinkedinIn className="text-xs" />
                  </button>

                  <button 
                    onClick={shareTwitter}
                    className="w-9 h-9 rounded-full bg-[#F7F4EF] hover:bg-[#2C5F2E] hover:text-white border border-transparent flex items-center justify-center text-[#2D2D2D] shadow-sm transition-all duration-300 cursor-pointer"
                    title="Share on X (Twitter)"
                  >
                    <FaTwitter className="text-xs" />
                  </button>

                  <button 
                    onClick={handleCopyLink}
                    className="relative w-9 h-9 rounded-full bg-[#F7F4EF] hover:bg-[#2C5F2E] hover:text-white border border-transparent flex items-center justify-center text-[#2D2D2D] shadow-sm transition-all duration-300 cursor-pointer"
                    title="Copy URL"
                  >
                    {copied ? <MdCheck className="text-base text-[#2C5F2E] group-hover:text-white" /> : <FaLink className="text-xs" />}
                    {copied && (
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#2D2D2D] text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded shadow-lg pointer-events-none">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              </div>

              <div className="border-t border-black/[0.04] pt-4.5">
                <h5 className="text-[9px] font-black uppercase tracking-widest text-[#2D2D2D]/55 mb-1">Author</h5>
                <p className="text-xs font-bold text-[#2D2D2D]">{post.author_name}</p>
                <p className="text-[10px] text-[#2D2D2D]/40 uppercase font-black tracking-wider mt-0.5">Urbanland Expert</p>
              </div>

              <div className="border-t border-black/[0.04] pt-4.5">
                <h5 className="text-[9px] font-black uppercase tracking-widest text-[#2D2D2D]/55 mb-1">Published</h5>
                <p className="text-xs font-bold text-[#2D2D2D]">{formattedDate}</p>
              </div>
            </div>

          </div>
        </aside>

      </section>

      {/* Related Insights Carousel Section */}
      {relatedPosts.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mt-24 pt-20 border-t border-black/[0.08]">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-2">— Keep Reading</p>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#2D2D2D] uppercase mb-10">Related Journal Insights</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((rPost) => (
              <Link
                key={rPost.id}
                to={`/blog/${rPost.slug}`}
                className="bg-white rounded-[2.5rem] border border-black/[0.03] p-5 shadow-[0_8px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col sm:flex-row gap-6 cursor-pointer no-underline group"
              >
                <div className="w-full sm:w-[42%] aspect-[16/10] sm:aspect-square rounded-2xl overflow-hidden bg-black/5 shrink-0 relative">
                  <img
                    src={rPost.featured_image}
                    alt={rPost.title?.rendered}
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                  {rPost.category_names?.[0] && (
                    <span className="absolute top-3 left-3 text-[8px] font-black uppercase tracking-wider bg-black/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
                      {rPost.category_names[0]}
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-between py-1 flex-1">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-[#2D2D2D]/40">
                      <MdCalendarToday className="text-xs" />
                      <span>
                        {new Date(rPost.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric"
                        })}
                      </span>
                    </div>
                    <h4 
                      className="text-base sm:text-lg font-bold tracking-tight text-[#1A1A1A] leading-snug group-hover:text-[#2C5F2E] transition-colors line-clamp-3 uppercase"
                      dangerouslySetInnerHTML={{ __html: rPost.title?.rendered }}
                    />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#2C5F2E] group-hover:underline mt-6 flex items-center gap-0.5">
                    Read Article <MdChevronRight className="text-base" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetail;
