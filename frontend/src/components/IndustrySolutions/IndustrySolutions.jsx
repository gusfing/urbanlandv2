import React from 'react';
import InteractiveBentoGallery from '../ui/InteractiveBentoGallery';
import educationImg from '../../assets/educational_campus_furniture.png';

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Residential & Townships",
    desc: "Premium outdoor furniture for vibrant communities and modern living.",
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200", 
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Hospitality & Hotels",
    desc: "Luxurious outdoor settings for guests to relax and unwind.",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200", 
    span: "md:col-span-1 md:row-span-2 col-span-1 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Municipal & Smart City",
    desc: "Durable, weather-resistant urban infrastructure for public spaces.",
    url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200", 
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Healthcare Facilities",
    desc: "Comfortable seating designed for healing environments.",
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200", 
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "Education Campuses",
    desc: "Inspiring and collaborative outdoor spaces for students.",
    url: educationImg, 
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 6,
    type: "image",
    title: "Corporate Parks",
    desc: "Modern seating for professionals to connect and recharge.",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200", 
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
];

const IndustrySolutions = () => {
  return (
    <section className="bg-surface-container-low border-y border-outline-variant/30 reveal-up">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Solutions for Every Industry"
        description="We provide specialized urban furniture solutions tailored to the unique functional and aesthetic demands of diverse sectors across India. Drag and explore our curated collection."
      />
    </section>
  );
};

export default IndustrySolutions;
