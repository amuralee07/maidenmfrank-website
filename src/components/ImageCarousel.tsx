import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import carouselImage1 from 'figma:asset/d7a0351691562f9189e0e457ddc156eb870f6edd.png';
import carouselImage2 from 'figma:asset/3fc106cceb944f77c669fe9f0b14d470ce3132b3.png';
import carouselImage3 from 'figma:asset/c3ad2e610c1b884e2724c1241fae2521e5ff3089.png';
import carouselImage4 from 'figma:asset/ded08c689d83474fca612ad51e427b801419bfe6.png';

const images = [
  {
    url: carouselImage1,
    alt: "Maiden receiving recognition at Rotary Peace Center graduation"
  },
  {
    url: carouselImage2,
    alt: "Maiden facilitating workshop with visual tools"
  },
  {
    url: carouselImage3,
    alt: "Maiden speaking on stage to audience"
  },
  {
    url: carouselImage4,
    alt: "Maiden engaging with conference participants"
  }
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative h-full flex flex-col"
    >
      {/* Main Image Display */}
      <div className="relative flex-1 min-h-[700px] rounded-3xl overflow-hidden shadow-2xl border-4 border-sky-200/40 bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 size-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="size-6 text-[#2C1810]" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 size-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 z-10"
          aria-label="Next image"
        >
          <ChevronRight className="size-6 text-[#2C1810]" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#2C1810]/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Indicators */}
      <div className="flex gap-3 mt-6 justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative size-16 rounded-xl overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? 'border-sky-400 scale-110 shadow-lg'
                : 'border-gray-300 hover:border-sky-300 opacity-60 hover:opacity-100'
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
}