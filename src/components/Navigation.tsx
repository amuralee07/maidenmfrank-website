import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Mic, BookOpen, Users, Mail, Sparkles, Home } from 'lucide-react';
import { Link } from 'react-router';
import svgPaths from '../imports/svg-pitvnxg9t7';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      icon: Mic, 
      title: 'Speaking', 
      subtitle: 'Keynote engagements that transform',
      color: 'from-teal-600 to-cyan-600',
      href: '/speaking',
      rotation: -3
    },
    { 
      icon: Sparkles, 
      title: 'Meet Maiden', 
      subtitle: 'Community Builder, Rotary Peace Fellow',
      color: 'from-emerald-600 to-amber-500',
      href: '/about',
      rotation: 3
    },
    { 
      icon: BookOpen, 
      title: 'Proven Frameworks', 
      subtitle: 'Published frameworks for leaders',
      color: 'from-blue-600 to-sky-600',
      href: '/books',
      rotation: 2
    },
    { 
      icon: Users, 
      title: 'Strategic Opportunities', 
      subtitle: 'Executive development programs',
      color: 'from-amber-700 to-yellow-700',
      href: '/coaching',
      rotation: -2
    },
    { 
      icon: Mail, 
      title: 'Connect', 
      subtitle: 'Start a conversation',
      color: 'from-teal-600 to-emerald-600',
      href: '/contact',
      rotation: 3
    },
  ];

  return (
    <>
      {/* Home Button - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed top-8 left-8 z-[100]"
      >
        <Link to="/" className="block group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            {/* Background blob */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-600 blur-xl opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ width: '70px', height: '70px' }}
            />
            
            {/* Button */}
            <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-teal-200 group-hover:border-teal-400 transition-colors">
              <Home className="size-8 text-teal-600" />
            </div>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute left-20 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap pointer-events-none"
            >
              Home
              <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-black" />
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Floating Morphing Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: isOpen ? 0.9 : 1,
          rotate: isOpen ? 90 : 0
        }}
        transition={{ 
          duration: 0.6, 
          delay: 0.5,
          type: "spring",
          stiffness: 200
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-[100] group"
      >
        <div className="relative">
          {/* Morphing blob background - natural rock shape */}
          <motion.div
            className="absolute inset-0"
            animate={{
              borderRadius: isOpen 
                ? ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 50% 50% / 50% 50% 50% 50%"]
                : ["45% 55% 60% 40% / 55% 65% 35% 45%", "55% 45% 40% 60% / 45% 35% 65% 55%", "45% 55% 60% 40% / 55% 65% 35% 45%"],
              rotate: [0, 360],
            }}
            transition={{
              duration: isOpen ? 0.6 : 8,
              repeat: isOpen ? 0 : Infinity,
              ease: "linear"
            }}
            style={{
              width: '80px',
              height: '80px',
              background: scrolled 
                ? 'linear-gradient(135deg, #7dd3fc 0%, #38bdf8 100%)'
                : 'linear-gradient(135deg, #bae6fd 0%, #7dd3fc 100%)',
            }}
          />
          
          {/* Button content */}
          <div className="relative w-20 h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.div
                  key="logo"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  <svg className="size-10 text-white" fill="currentColor" viewBox="0 0 32 32">
                    <g>
                      <path d={svgPaths.p1b7acd70} />
                      <path d="M15 20V18L28 5V7L15 20Z" />
                      <path d="M15 24V22L28 9V11L15 24Z" />
                      <path d="M15 28V26L20 21V23L15 28Z" />
                    </g>
                  </svg>
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="text-white font-black text-3xl"
                >
                  ×
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Orbit rings */}
          {!isOpen && (
            <>
              <motion.div
                className="absolute inset-0 border-2 border-white/30"
                style={{ 
                  borderRadius: "45% 55% 60% 40% / 55% 65% 35% 45%",
                  width: '80px', 
                  height: '80px' 
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-white/20"
                style={{ 
                  borderRadius: "55% 45% 40% 60% / 45% 35% 65% 55%",
                  width: '80px', 
                  height: '80px' 
                }}
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.3, 0, 0.3],
                  rotate: [360, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </>
          )}
        </div>
      </motion.button>

      {/* Full-screen Abstract Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90]"
            onClick={() => setIsOpen(false)}
          >
            {/* Abstract animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950">
              {/* Animated gradient blobs */}
              <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-teal-400/35 rounded-full blur-3xl"
                animate={{
                  x: [0, 100, 0],
                  y: [0, 150, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl"
                animate={{
                  x: [0, -100, 0],
                  y: [0, -150, 0],
                  scale: [1.2, 1, 1.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-400/25 rounded-full blur-3xl"
                animate={{
                  x: [-200, 200, -200],
                  y: [-100, 100, -100],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />

            {/* Navigation content */}
            <div
              className="relative h-full flex items-center justify-center px-4 py-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-4xl w-full mx-auto">
                {/* Main Title */}
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6 text-center"
                >
                  <h2 className="text-3xl lg:text-5xl font-black text-white mb-2 tracking-tighter">
                    Explore
                  </h2>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/50" />
                    <Sparkles className="size-5 text-amber-400 fill-amber-400" />
                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/50" />
                  </div>
                </motion.div>

                {/* Menu Items Grid - first 4 items in a 2x2 layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 max-w-2xl mx-auto">
                  {menuItems.slice(0, 4).map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 100, rotate: 0 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotate: item.rotation
                      }}
                      exit={{ opacity: 0, y: 100 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3 + (index * 0.08),
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{
                        scale: 1.05,
                        rotate: 0,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block h-full"
                      >
                        {/* Abstract shape background */}
                        <div className="absolute inset-0">
                          {/* Speech-bubble body */}
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                            />
                          </div>

                          {/* Speech-bubble tail */}
                          <div
                            className="absolute bottom-5 left-10 size-6 bg-white/5 backdrop-blur-xl border border-white/10 rotate-45"
                            style={{ borderBottomRightRadius: '6px' }}
                          />
                        </div>

                        {/* Content */}
                        <div className="relative p-4 lg:p-5">
                          {/* Icon with number */}
                          <div className="flex items-start justify-between mb-3">
                            <motion.div
                              className={`size-11 lg:size-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                              whileHover={{ rotate: 12 }}
                            >
                              <item.icon className="size-6 lg:size-7 text-white" />
                            </motion.div>
                            <span className="text-3xl lg:text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                              0{index + 1}
                            </span>
                          </div>

                          {/* Text */}
                          <h3 className="text-lg lg:text-xl font-black text-white mb-1.5 tracking-tight">
                            {item.title}
                          </h3>
                          <p className="text-white/60 text-xs lg:text-sm group-hover:text-white/80 transition-colors">
                            {item.subtitle}
                          </p>

                          {/* Arrow indicator */}
                          <motion.div
                            className="absolute bottom-5 right-5 text-white/40 group-hover:text-white transition-colors"
                            animate={{
                              x: [0, 10, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </motion.div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Fifth item (Contact) centered below */}
                {menuItems[4] && (() => {
                  const ContactIcon = menuItems[4].icon;
                  return (
                    <div className="mt-5 flex justify-center">
                      <motion.div
                        key={menuItems[4].title}
                        initial={{ opacity: 0, y: 80, rotate: 0 }}
                        animate={{ opacity: 1, y: 0, rotate: menuItems[4].rotation }}
                        exit={{ opacity: 0, y: 80 }}
                        transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
                        whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative w-full max-w-sm"
                      >
                        <Link
                          to={menuItems[4].href}
                          onClick={() => setIsOpen(false)}
                          className="block h-full"
                        >
                          <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                              <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${menuItems[4].color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                              />
                            </div>
                            <div
                              className="absolute bottom-5 left-10 size-6 bg-white/5 backdrop-blur-xl border border-white/10 rotate-45"
                              style={{ borderBottomRightRadius: '6px' }}
                            />
                          </div>

                          <div className="relative p-4 lg:p-5">
                            <div className="flex items-start justify-between mb-3">
                              <motion.div
                                className={`size-11 lg:size-12 rounded-2xl bg-gradient-to-br ${menuItems[4].color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                                whileHover={{ rotate: 12 }}
                              >
                                <ContactIcon className="size-6 lg:size-7 text-white" />
                              </motion.div>
                              <span className="text-3xl lg:text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                                05
                              </span>
                            </div>
                            <h3 className="text-lg lg:text-xl font-black text-white mb-1.5 tracking-tight">
                              {menuItems[4].title}
                            </h3>
                            <p className="text-white/60 text-xs lg:text-sm group-hover:text-white/80 transition-colors">
                              {menuItems[4].subtitle}
                            </p>
                            <motion.div
                              className="absolute bottom-5 right-5 text-white/40 group-hover:text-white transition-colors"
                              animate={{ x: [0, 10, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </motion.div>
                          </div>
                        </Link>
                      </motion.div>
                    </div>
                  );
                })()}

                {/* Bottom CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-10 text-center"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <button className="px-10 py-4 bg-white text-black font-bold text-base lg:text-lg rounded-full hover:bg-white/90 transition-all hover:scale-105 shadow-2xl relative overflow-hidden group">
                      <span className="relative z-10">Book a Free Consultation</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold">
                        Book a Free Consultation
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}