"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Eye, Heart, ExternalLink } from "lucide-react";
import { TIKTOK_GALLERY, SITE_CONFIG } from "@/data/siteData";
import { SectionHeading } from "../ui/SectionHeading";

export function TikTokGallerySection() {
  return (
    <section className="py-28 sm:py-36 bg-[#121212] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <SectionHeading
            tag="Kênh TikTok Official"
            title="Thước Phim Chế Tác Kim Hoàn"
            subtitle="Cận cảnh quy trình thử vàng, mài dũa kim cương GIA và chạm đúc kiềng cưới tại xưởng Ba Hên."
            align="left"
            dark
          />

          <a
            href={SITE_CONFIG.contact.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center space-x-3 px-6 py-3 rounded-full border border-[#D4AF37] text-xs uppercase tracking-[0.25em] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all mb-16 shadow-lg"
          >
            <span>Follow TikTok @bahenjewelry</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 9:16 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIKTOK_GALLERY.map((video, idx) => (
            <motion.a
              key={video.id}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="group relative rounded-3xl overflow-hidden aspect-[9/16] bg-[#1A1A1A] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-7 h-7 fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Chapter Tag Top Left */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <div className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] border border-[#D4AF37]/30">
                  {video.chapter}
                </div>
                <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] text-gray-200 border border-white/10">
                  <Eye className="w-3 h-3 text-[#D4AF37]" />
                  <span>{video.views}</span>
                </div>
              </div>

              {/* Caption Bottom */}
              <div className="relative z-10 p-5">
                <h4 className="text-xs text-white font-medium line-clamp-2 leading-relaxed group-hover:text-[#D4AF37] transition-colors">
                  {video.title}
                </h4>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
