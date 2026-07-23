"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { COLLECTIONS } from "@/data/siteData";
import { SectionHeading } from "../ui/SectionHeading";

export function CollectionSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCollections =
    activeCategory === "all"
      ? COLLECTIONS
      : COLLECTIONS.filter((c) => c.category === activeCategory);

  return (
    <section id="collections" className="py-28 sm:py-36 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Bộ Sưu Tập Độc Quyền"
          title="Kiệt Tác Kim Hoàn Thượng Lưu"
          subtitle="Sự hội tụ giữa nghệ thuật chạm khắc truyền thống và hơi thở haute joaillerie hiện đại."
        />

        {/* Collection Filter Switcher */}
        <div className="flex items-center justify-center space-x-3 mb-16 flex-wrap gap-y-3">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.25em] transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-[#121212] text-[#D4AF37] shadow-xl border border-[#D4AF37]"
                : "bg-white/80 text-[#777777] border border-[rgba(0,0,0,0.08)] hover:text-[#121212] hover:border-[#D4AF37]"
            }`}
          >
            Tất Cả Bộ Sưu Tập
          </button>
          <button
            onClick={() => setActiveCategory("gold")}
            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.25em] transition-all duration-300 ${
              activeCategory === "gold"
                ? "bg-[#121212] text-[#D4AF37] shadow-xl border border-[#D4AF37]"
                : "bg-white/80 text-[#777777] border border-[rgba(0,0,0,0.08)] hover:text-[#121212] hover:border-[#D4AF37]"
            }`}
          >
            Vàng 9999 & 18K Ý
          </button>
          <button
            onClick={() => setActiveCategory("diamond")}
            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.25em] transition-all duration-300 ${
              activeCategory === "diamond"
                ? "bg-[#121212] text-[#D4AF37] shadow-xl border border-[#D4AF37]"
                : "bg-white/80 text-[#777777] border border-[rgba(0,0,0,0.08)] hover:text-[#121212] hover:border-[#D4AF37]"
            }`}
          >
            Kim Cương GIA
          </button>
          <button
            onClick={() => setActiveCategory("wedding")}
            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.25em] transition-all duration-300 ${
              activeCategory === "wedding"
                ? "bg-[#121212] text-[#D4AF37] shadow-xl border border-[#D4AF37]"
                : "bg-white/80 text-[#777777] border border-[rgba(0,0,0,0.08)] hover:text-[#121212] hover:border-[#D4AF37]"
            }`}
          >
            Trang Sức Cưới
          </button>
        </div>

        {/* High-Fashion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-[rgba(212,175,55,0.15)] flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]/50"
            >
              {/* Cover Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#121212]">
                <Image
                  src={collection.coverImage}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Oversized Collection Serial Number */}
                <div className="absolute top-6 left-6 font-serif text-5xl font-extralight text-white/30 tracking-widest group-hover:text-[#D4AF37]/60 transition-colors">
                  {collection.number || `0${index + 1}`}
                </div>

                {/* Count Badge Top Right */}
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] border border-[#D4AF37]/30">
                  {collection.itemCount}+ Mẫu Tác Phẩm
                </div>

                {/* Bottom Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-1">
                    {collection.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-light leading-snug">
                    {collection.title}
                  </h3>
                </div>
              </div>

              {/* Description & Action */}
              <div className="p-8 bg-white flex flex-col justify-between flex-grow">
                <p className="text-xs text-[#777777] font-light leading-relaxed mb-8">
                  {collection.description}
                </p>

                <a
                  href="#bestsellers"
                  className="inline-flex items-center justify-between pt-5 border-t border-[rgba(0,0,0,0.08)] text-xs uppercase tracking-[0.2em] text-[#121212] group-hover:text-[#D4AF37] transition-colors font-medium"
                >
                  <span>Khám Phá Mẫu Tác Phẩm</span>
                  <div className="w-9 h-9 rounded-full bg-[#FAF8F5] group-hover:bg-[#D4AF37] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
