"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Maximize2, ExternalLink } from "lucide-react";
import { FACEBOOK_GALLERY, FacebookGalleryItem, SITE_CONFIG } from "@/data/siteData";
import { SectionHeading } from "../ui/SectionHeading";
import { LightboxModal } from "../ui/LightboxModal";

export function FacebookGallerySection() {
  const [selectedItem, setSelectedItem] = useState<FacebookGalleryItem | null>(null);

  return (
    <section className="py-28 sm:py-36 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <SectionHeading
            tag="Kênh Facebook Official"
            title="Khoảnh Khắc Tại Showroom"
            subtitle="Cập nhật hình ảnh thực tế, khoảnh khắc trao trang sức cho quý khách VIP và kiệt tác vừa hoàn thiện."
            align="left"
          />

          <a
            href={SITE_CONFIG.contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center space-x-2.5 px-6 py-3 rounded-full border border-[#121212] text-xs uppercase tracking-[0.25em] text-[#121212] hover:bg-[#121212] hover:text-[#D4AF37] transition-all mb-16 shadow-md"
          >
            <span>Ghé Fanpage Facebook</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACEBOOK_GALLERY.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-3xl overflow-hidden shadow-lg bg-white border border-[rgba(212,175,55,0.18)] hover:border-[#D4AF37] transition-all duration-500 cursor-pointer"
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden bg-[#121212]`}>
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/95 text-[#121212] flex items-center justify-center shadow-2xl">
                    <Maximize2 className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-1.5">
                  {item.date}
                </span>
                <p className="text-xs text-[#121212] font-light leading-relaxed line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
