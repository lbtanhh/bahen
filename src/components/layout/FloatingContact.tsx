"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Share2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* Zalo Button */}
      <motion.a
        href={SITE_CONFIG.contact.zalo}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-[#0068FF] text-white flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group relative"
        aria-label="Tư vấn Zalo"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-14 whitespace-nowrap bg-[#1C1C1C] text-white text-xs px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[#D4AF37]/30">
          Tư Vấn Zalo VIP
        </span>
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href={`tel:${SITE_CONFIG.contact.phone}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shadow-lg shadow-[#D4AF37]/30 transition-all duration-300 group relative"
        aria-label="Gọi ngay"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="absolute right-14 whitespace-nowrap bg-[#1C1C1C] text-white text-xs px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[#D4AF37]/30">
          Hotline: {SITE_CONFIG.contact.phone}
        </span>
      </motion.a>
    </div>
  );
}
