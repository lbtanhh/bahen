"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { REVIEWS } from "@/data/siteData";
import { SectionHeading } from "../ui/SectionHeading";

export function ReviewSection() {
  return (
    <section id="reviews" className="py-28 sm:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Trải Nghiệm & Sự Gắn Kết"
          title="Cảm Nhận Từ Khách Hàng VIP"
          subtitle="Sự trân quý của nhiều thế hệ gia đình là minh chứng quý giá nhất cho hành trình 25+ năm của Ba Hên."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[rgba(212,175,55,0.18)] flex flex-col justify-between relative hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              <div>
                {/* Rating & Large Quote Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-1 text-[#D4AF37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-[#D4AF37]/20" />
                </div>

                <p className="text-sm sm:text-base text-[#121212] font-serif leading-relaxed italic mb-10">
                  &quot;{review.content}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-[rgba(0,0,0,0.06)] flex items-center space-x-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#D4AF37]/50 shadow-md">
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-center space-x-1.5">
                    <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-[#121212]">
                      {review.author}
                    </h4>
                    {review.verified && (
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    )}
                  </div>
                  <span className="text-[11px] text-[#777777] font-light block mt-0.5">
                    {review.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
