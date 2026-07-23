"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { FacebookGalleryItem } from "@/data/siteData";

interface LightboxModalProps {
  item: FacebookGalleryItem | null;
  onClose: () => void;
}

export function LightboxModal({ item, onClose }: LightboxModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl w-full bg-[#1C1C1C] rounded-2xl overflow-hidden shadow-2xl z-10 border border-[#D4AF37]/30"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#D4AF37] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-2/3 h-[350px] sm:h-[480px] bg-black">
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col justify-between text-white border-t md:border-t-0 md:border-l border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium block mb-2">
                  Facebook Gallery • {item.date}
                </span>
                <p className="text-sm sm:text-base font-serif leading-relaxed text-gray-200">
                  {item.caption}
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="https://facebook.com/bahenjewelry.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
                >
                  <span>Xem Trên Facebook Official</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
