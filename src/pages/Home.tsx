import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { TechStack } from '../components/TechStack';
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

// Import client logos
import prairieCollege from 'figma:asset/d0773189db453ba22cbfdba03b5a4642047939d1.png';
import unesco from 'figma:asset/26e4796f572ce4be28c25daeac7bddd0eca6ea01.png';
import netImpact from 'figma:asset/f4cbaaed2a44dbbd15f8b06cb9a77ab71be05704.png';
import manchesterMet from 'figma:asset/ec2b289bbc70807441f1c63e76aaf2cb9a474bca.png';
import minesParis from 'figma:asset/36e3077cce611e5b19709a7792932c892fdfe475.png';
import ledByCommunity from 'figma:asset/62453349edfde14c7f80017a14862fce732b3f66.png';
import crownLogo from 'figma:asset/748ab0edc8009258e4999acee3b2570f12c0181f.png';
import idrac from 'figma:asset/ff24219285982f8a5793202bf331695d02391a57.png';

export function Home() {
  const clientLogos = [
    { name: "Prairie College", logo: prairieCollege },
    { name: "UNESCO", logo: unesco },
    { name: "Net Impact Edmonton", logo: netImpact },
    { name: "Manchester Metropolitan University", logo: manchesterMet },
    { name: "Mines Paris Executive Education PSL", logo: minesParis },
    { name: "Led by Community", logo: ledByCommunity },
    { name: "Leadership Organization", logo: crownLogo },
    { name: "IDRAC Business School", logo: idrac },
  ];

  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <>
      <Hero />
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#71717a] mb-2">Trusted By Industry Leaders</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full mx-auto" />
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-teal-100 overflow-hidden">
              <div className="relative">
                <motion.div
                  className="flex gap-12 items-center"
                  animate={{ x: [0, -1920] }}
                  transition={{
                    x: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                >
                  {duplicatedLogos.map((client, index) => (
                    <div key={index} className="flex-shrink-0 w-48">
                      <div className="flex items-center justify-center h-20 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className={`max-w-full object-contain ${
                            client.name === "Mines Paris Executive Education PSL" ? "max-h-20" : "max-h-16"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative bg-[#DCB69A] py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-sky-300/20 to-sky-200/10 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-400/15 to-amber-300/10 blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-[#09090b] mb-6">
              Transform Your Leadership
            </h2>
            <p className="text-xl text-[#09090b]/70 max-w-3xl mx-auto">
              I can help transform your leadership impact to the next level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pain Point 1 - Links to Coaching */}
            <Link to="/coaching">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-sky-200/50 cursor-pointer h-full"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-sky-300 rounded-t-2xl" />
                
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-sky-300 flex items-center justify-center mb-4">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#09090b] mb-4 flex items-center gap-2">
                    AMBIGUITY TO CLARITY
                    <ArrowRight className="w-5 h-5 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </h3>
                </div>
                
                <p className="text-[#09090b]/70 leading-relaxed">
                  I come in to provide clarity, strategy, and roadmap for action that will not maintain the status quo but raise the bar.
                </p>
              </motion.div>
            </Link>

            {/* Pain Point 2 - Links to Speaking */}
            <Link to="/speaking">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-200/50 cursor-pointer h-full"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-teal-400 rounded-t-2xl" />
                
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-400 flex items-center justify-center mb-4">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#09090b] mb-4 flex items-center gap-2">
                    CONFUSION TO STRATEGY
                    <ArrowRight className="w-5 h-5 text-teal-500 group-hover:translate-x-1 transition-transform" />
                  </h3>
                </div>
                
                <p className="text-[#09090b]/70 leading-relaxed">
                  The fear of failure, rejection, disapproval from your peers, and the fear of unknown create fear-based leadership.
                </p>
              </motion.div>
            </Link>

            {/* Pain Point 3 - Links to Coaching */}
            <Link to="/coaching">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-200/50 cursor-pointer h-full"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-500 rounded-t-2xl" />
                
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center mb-4">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#09090b] mb-4 flex items-center gap-2">
                    PERFECTION TO EXCELLENCE
                    <ArrowRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
                  </h3>
                </div>
                
                <p className="text-[#09090b]/70 leading-relaxed">
                  Let's me disabuse you: Your frameworks for the future will not work if your mindset is still in the past tense.
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <Features />
      <TechStack />
    </>
  );
}