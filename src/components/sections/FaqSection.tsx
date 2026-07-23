"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/siteData";
import { SectionHeading } from "../ui/SectionHeading";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-28 sm:py-36 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Giải Đáp Thắc Mắc"
          title="Câu Hỏi Thường Gặp"
          subtitle="Những thông tin chi tiết về kiểm định hàm lượng vàng, giấy chứng nhận GIA và quyền lợi làm sáng trọn đời."
        />

        <div className="space-y-4 mt-16">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#D4AF37] shadow-xl"
                    : "bg-white/70 border-[rgba(0,0,0,0.08)] hover:border-[#D4AF37]/50"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-4 pr-4">
                    <span className="font-serif text-lg text-[#D4AF37] font-light shrink-0">
                      0{idx + 1}.
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-[#121212]">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#D4AF37] text-white" : "bg-[#FAF8F5] text-[#121212]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pt-2 text-xs sm:text-sm text-[#777777] font-light leading-relaxed border-t border-[rgba(0,0,0,0.04)]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
