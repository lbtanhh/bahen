"use client";

import { motion } from "framer-motion";
import { Sparkles, Phone, MessageCircle, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";
import { Button } from "../ui/Button";

export function CtaSection() {
  return (
    <section className="py-32 sm:py-44 bg-[#121212] text-white relative overflow-hidden">
      {/* Gold Radial Spotlight Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full border border-[#D4AF37]/40 bg-white/5 backdrop-blur-xl mb-10"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#D4AF37] font-medium">
            Lịch Hẹn Trải Nghiệm Thượng Lưu
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-tight text-white mb-8"
        >
          Trải Nghiệm Không Gian Kim Hoàn <br />
          <span className="gold-metallic-text font-normal italic">
            Tại Showroom Ba Hên
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Kính mời Quý khách ghé thăm không gian Private Lounge riêng tư tại Quận 5 để thưởng thức trà hoa cao cấp, chiêm ngưỡng trực tiếp các tác phẩm kim hoàn độc bản và nhận tư vấn chuyên sâu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto"
        >
          <a
            href={SITE_CONFIG.contact.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1"
          >
            <Button
              variant="gold"
              size="lg"
              fullWidth
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Đặt Lịch Zalo Official
            </Button>
          </a>

          <a href={`tel:${SITE_CONFIG.contact.phone}`} className="w-full sm:w-auto flex-1">
            <Button
              variant="outline"
              size="lg"
              fullWidth
              icon={<Phone className="w-4 h-4 text-[#D4AF37]" />}
              className="border-white/30 text-white hover:bg-white/10"
            >
              Gọi {SITE_CONFIG.contact.phone}
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-14 flex items-center justify-center space-x-2.5 text-xs text-gray-400 font-light"
        >
          <MapPin className="w-4 h-4 text-[#D4AF37]" />
          <span>{SITE_CONFIG.contact.address}</span>
        </motion.div>
      </div>
    </section>
  );
}
