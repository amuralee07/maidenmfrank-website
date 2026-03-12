import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Rotating words effect
  const [currentIndex, setCurrentIndex] = useState(0);
  const rotatingWords = ['to Lead', 'to Grow', 'to Inspire', 'for Good'];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        // Stop at the last word "for Good"
        if (prev < rotatingWords.length - 1) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 2500);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-[#DCB69A]">
      {/* Video Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        {/* YouTube Video Embed - Playing from 7:30 to 8:00 */}
        <iframe
          src="https://www.youtube.com/embed/OXGO3GhPpE0?autoplay=1&mute=1&loop=1&playlist=OXGO3GhPpE0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&start=450&end=480"
          className="w-full h-full border-0"
          allow="autoplay; encrypted-media"
          style={{ 
            pointerEvents: 'none',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1.3)',
            objectFit: 'cover'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#DCB69A]/50 via-[#DCB69A]/20 to-[#DCB69A]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#DCB69A]/70 via-transparent to-transparent" />
        
        {/* Abstract floating shapes - peaceful ocean/sky blues with creamy browns */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(220, 182, 154, 0.4) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(125, 211, 252, 0.35) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)',
            filter: 'blur(95px)',
          }}
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 left-1/3 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(186, 230, 253, 0.25) 0%, transparent 70%)',
            filter: 'blur(85px)',
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Content Overlay with Parallax */}
      <motion.div 
        className="relative h-full flex items-center z-10 w-full"
        style={{ opacity }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full py-32">
          {/* Scattered layout instead of stacked */}
          <div className="relative min-h-[600px]">
            {/* Label - positioned absolutely top left */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: -5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-0 z-20"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="size-6 text-sky-300 fill-sky-300" />
                <div className="px-4 py-2 rounded-full border border-sky-200/40 backdrop-blur-md bg-sky-100/10 text-sky-50 text-sm font-medium">
                  Author · Speaker · Changemaker
                </div>
              </div>
            </motion.div>

            {/* Main title - with rotating words */}
            <div className="absolute top-32 left-0 right-0">
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-7xl sm:text-8xl lg:text-9xl font-bold text-white leading-tight"
              >
                <div className="flex flex-col gap-4">
                  {/* Static "Provoke" */}
                  <span className="text-white drop-shadow-lg">
                    Provoke
                  </span>
                  
                  {/* Rotating words with AnimatePresence */}
                  <div className="relative h-[1.2em] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentIndex}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#5eead4]"
                        style={{
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                        }}
                      >
                        {rotatingWords[currentIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.h1>
            </div>
            
            {/* Description - positioned diagonally opposite */}
            <motion.p 
              initial={{ opacity: 0, x: 100, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 2 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-[400px] right-0 max-w-xl text-lg lg:text-xl text-sky-50/95 leading-relaxed italic border-l-4 border-sky-300 pl-6 bg-[#e8d5b7]/10 backdrop-blur-sm p-6 rounded-2xl"
            >
              Challenging changemakers to lead with purpose, innovation, and excellence. Author of <em>Provocateurs Not Philanthropists</em>, turning good intentions into global impact.
            </motion.p>

            {/* CTAs - positioned at bottom left, staggered */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute top-[540px] left-0 flex flex-col gap-4"
            >
              <Link to="/speaking">
                <motion.div 
                  whileHover={{ x: 20, rotate: 2 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#7dd3fc] to-[#bae6fd] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-sky-300/50 transition-all flex items-center gap-2 group w-fit"
                >
                  <span>Book a Speaking Engagement</span>
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
              <Link to="/contact">
                <motion.div 
                  whileHover={{ x: 40, rotate: -2 }}
                  className="px-8 py-4 bg-[#e8d5b7]/20 backdrop-blur-md text-sky-50 font-semibold rounded-full border-2 border-sky-200/40 hover:bg-[#e8d5b7]/30 hover:border-sky-200/60 transition-all flex items-center gap-2 w-fit ml-16"
                >
                  <Calendar className="size-5" />
                  <span>Schedule Coaching</span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-sky-200/70 text-sm font-medium">Scroll</div>
          <svg className="w-6 h-10 text-sky-200/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}