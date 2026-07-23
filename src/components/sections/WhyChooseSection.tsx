"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Crown, Award, RefreshCw } from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/siteData";
import { SectionHeading } from "../ui/SectionHeading";

const ICON_MAP: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-[#D4AF37]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
  Crown: <Crown className="w-6 h-6 text-[#D4AF37]" />,
  Award: <Award className="w-6 h-6 text-[#D4AF37]" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-[#D4AF37]" />,
};

export function WhyChooseSection() {
  return (
    <section id="why-us" className="py-28 sm:py-36 bg-[#121212] text-white relative overflow-hidden">
      {/* Background ambient gold glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Ưu Thế Vượt Trội Maison"
          title="Vì Sao Các Gia Tộc VIP Tin Chọn Ba Hên"
          subtitle="Sự giao thoa tuyệt vời giữa chuẩn mực kiểm định nghiêm ngặt và nghệ thuật chế tác thủ công độc bản."
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="bg-[#1A1A1A] rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 group hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#121212] border border-[#D4AF37]/40 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-300 shadow-inner">
                  {ICON_MAP[item.iconName] || <Sparkles className="w-6 h-6 text-[#D4AF37]" />}
                </div>

                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-medium block mb-2">
                  {item.subtitle}
                </span>

                <h3 className="font-serif text-2xl font-light text-white mb-4 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-10 pt-5 border-t border-white/10 flex items-center justify-between text-[10px] text-[#D4AF37]">
                <span className="uppercase tracking-[0.25em] font-medium">Đặc Quyền Ba Hên</span>
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
