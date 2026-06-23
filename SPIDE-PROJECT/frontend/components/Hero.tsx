import { motion } from "framer-motion";
import { ShieldCheck, Quote, ChevronRight, Users, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] flex items-center pt-16 md:pt-20 pb-10 md:pb-14 overflow-hidden">
      {/* Background Image with Gradient Blend */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="https://deoria.upmunicipal.com/assets/img/hero-bg.jpg"
          alt="Modern City Skyline"
          className="w-full h-full object-cover opacity-30 scale-105 active:scale-110 transition-transform duration-[20000ms] animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 via-[#0F172A]/80 to-[#0F172A]/80 -z-10" />
      </div>

      {/* Primary Hero Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-90 -z-10" />

      <div className="relative z-10 px-8 md:px-16 lg:px-20 max-w-full mx-auto text-white w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Left Side: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start w-full lg:max-w-[55%] xl:max-w-[60%]"
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[12px] font-black uppercase tracking-[0.2em] mb-8 border border-white/10 text-blue-300">
              Official Municipal Portal
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95] text-white">
              Building a Smarter,<br />Connected Community
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-xl font-medium leading-relaxed">
              Experience transparent governance and high-efficiency e-services designed for the modern citizen. Your gateway to municipal resources and city updates.
            </p>

            <div className="flex flex-wrap gap-5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2563EB] text-white px-10 py-5 rounded-2xl text-lg font-black shadow-2xl shadow-blue-500/20 hover:bg-blue-600 transition-all border border-blue-400/20"
              >
                Access E-Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/5 backdrop-blur-md text-white px-10 py-5 rounded-2xl text-lg font-black border border-white/10 transition-all"
              >
                Our Mission
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side: Welcome Message Section - Redesigned for Beauty */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex justify-end relative w-full lg:max-w-[38%]"
          >
            {/* Main Glass Card */}
            <div className="relative p-10 md:p-12 rounded-[56px] bg-[#0F172A]/40 backdrop-blur-3xl border border-white/10 shadow-[0_50px_130px_rgba(0,0,0,0.5)] overflow-hidden group max-w-lg">

              {/* Animated Background Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/30 transition-all duration-700" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full group-hover:bg-indigo-600/20 transition-all duration-700" />

              <div className="relative z-10 flex flex-col gap-10">
                {/* Header with Photo and Verified Badge */}
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-[32px] overflow-hidden border-2 border-white/20 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9ce29b2933?q=80&w=2574&auto=format&fit=crop"
                        alt="Chairman"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    {/* Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-xl shadow-lg border border-white/20 animate-bounce group-hover:animate-none">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-white tracking-tighter mb-1 leading-none">Anjali Verma</h3>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                      <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">Executive Chairman</p>
                    </div>
                  </div>
                </div>

                {/* Quote with stylized icon */}
                <div className="relative">
                  <Sparkles className="absolute -top-10 right-0 w-8 h-8 text-blue-400/20 animate-pulse" />
                  <Quote className="absolute -top-6 -left-6 w-12 h-12 text-white/5 -z-0" />
                  <blockquote className="text-xl md:text-2xl font-semibold text-white/90 leading-relaxed tracking-tight group-hover:text-white transition-colors duration-500">
                    <Sparkles className="inline-block w-5 h-5 mr-3 text-blue-400/60 mb-1 animate-pulse" />
                    Welcome to our unified digital portal. We are committed to bridging the gap between governance and citizens through innovation and transparency.
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                    <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Official Statement</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
