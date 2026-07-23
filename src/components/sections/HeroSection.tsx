"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "../ui/Button";
import { SITE_CONFIG } from "@/data/siteData";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212] text-white">
      {/* Immersive Full Bleed Ambient Imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2200&auto=format&fit=crop"
          alt="Ba Hên Jewelry Luxury Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 scale-105 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-[#121212]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#121212]/50 to-[#121212]" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-24 flex flex-col items-center">
        {/* Roman Era Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="inline-flex items-center space-x-3 px-5 py-2 rounded-full border border-[#D4AF37]/40 bg-[#121212]/70 backdrop-blur-xl mb-10"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#D4AF37] font-medium">
            Maison Hơn 25 Năm Di Sản • EST. {SITE_CONFIG.romanEra}
          </span>
        </motion.div>

        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight leading-[1.1] max-w-5xl text-white drop-shadow-lg"
        >
          Tuyệt Tác Kim Hoàn <br />
          <span className="gold-metallic-text font-normal italic">
            Vượt Thời Gian
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-8 text-base sm:text-xl text-gray-300 font-light max-w-2xl leading-relaxed tracking-wide"
        >
          Tôn vinh khí chất thượng lưu qua những tác phẩm Vàng 9999, Vàng Ý 18K và Kim Cương GIA được chế tác thủ công tinh xảo độc bản.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <a href="#collections" className="w-full sm:w-auto">
            <Button variant="gold" size="lg" fullWidth>
              Khám Phá Bộ Sưu Tập
            </Button>
          </a>

          <a
            href={SITE_CONFIG.contact.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              fullWidth
              icon={<MessageCircle className="w-4 h-4 text-[#D4AF37]" />}
              className="border-white/30 text-white hover:bg-white/10 hover:border-[#D4AF37]"
            >
              Đặt Lịch VIP Lounge
            </Button>
          </a>
        </motion.div>

        {/* Maison Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-16 pt-12 border-t border-white/10 w-full max-w-4xl"
        >
          {SITE_CONFIG.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-serif text-3xl sm:text-4xl font-light text-[#D4AF37]">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[11px] text-gray-300 font-light mt-1.5 uppercase tracking-[0.2em]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center space-y-3 cursor-pointer"
        onClick={() => {
          document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
          CUỘN KHÁM PHÁ MAISON
        </span>
        <div className="w-5 h-9 rounded-full border border-white/30 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"
          />
        </div>
      </motion.div>
    </section>
  );
}
