"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, PhoneCall, MessageCircle, ShieldCheck, CheckCircle2, Crown } from "lucide-react";
import { Product, SITE_CONFIG } from "@/data/siteData";
import { Button } from "./Button";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl z-10 border border-[#D4AF37]/30 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/90 text-[#121212] hover:bg-[#D4AF37] hover:text-white transition-colors duration-200 shadow-md"
            aria-label="Đóng modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image Holder */}
            <div className="relative aspect-square md:aspect-auto min-h-[340px] md:min-h-[520px] bg-[#121212]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Edition Code Badge */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] border border-[#D4AF37]/30">
                {product.editionCode}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                    {product.categoryLabel}
                  </span>
                </div>

                <h3 className="font-serif text-3xl font-light text-[#121212] mb-2 leading-snug">
                  {product.name}
                </h3>

                <p className="text-xs uppercase tracking-wider text-[#777777] font-medium mb-5">
                  Chất liệu chính: <span className="text-[#121212]">{product.material}</span>
                </p>

                <p className="text-xs sm:text-sm text-[#777777] font-light leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#121212] font-semibold block mb-2">
                    Điểm Nổi Bật Tác Phẩm
                  </span>
                  {product.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5 text-xs text-[#121212]">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-[#F7E7CE]/30 border border-[#D4AF37]/30 flex items-start space-x-3 mb-6">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#121212] font-light leading-snug">
                    Bảo chứng hàm lượng vàng chuẩn 100%, bảo hành làm sáng và bảo dưỡng trọn đời tác phẩm.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-[rgba(0,0,0,0.08)]">
                <a
                  href={SITE_CONFIG.contact.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="gold" fullWidth icon={<MessageCircle className="w-4 h-4" />}>
                    Tư Vấn Zalo Official
                  </Button>
                </a>

                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="block">
                  <Button variant="outline" fullWidth icon={<PhoneCall className="w-4 h-4" />}>
                    Hotline: {SITE_CONFIG.contact.phone}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
