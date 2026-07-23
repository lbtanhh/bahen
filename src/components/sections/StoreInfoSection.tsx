"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Navigation, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function StoreInfoSection() {
  return (
    <section id="showroom" className="py-28 sm:py-36 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Trải Nghiệm Thượng Lưu"
          title="Ghé Thăm Showroom Ba Hên Jewelry"
          subtitle="Tọa lạc tại vị trí đắc địa trung tâm Quận 5 với không gian Private Lounge tư vấn riêng tư, ấm cúng và sang trọng."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-16">
          {/* Left Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-12 border border-[rgba(212,175,55,0.2)] shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F7E7CE]/40 text-[#D4AF37] text-[11px] font-semibold uppercase tracking-[0.2em] mb-8">
                <ShieldCheck className="w-4 h-4" />
                <span>Flagship Boutique Saigon</span>
              </div>

              <h3 className="font-serif text-3xl font-light text-[#121212] mb-8 leading-snug">
                Không Gian Trải Nghiệm Trang Sức VIP
              </h3>

              <div className="space-y-6 text-sm text-[#121212]">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 border border-[#D4AF37]/30 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-semibold block mb-1">
                      Địa Chỉ Showroom
                    </span>
                    <span className="font-medium text-[#121212] leading-relaxed">
                      {SITE_CONFIG.contact.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 border border-[#D4AF37]/30 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-semibold block mb-1">
                      Giờ Đón Tiếp
                    </span>
                    <span className="font-medium text-[#121212]">
                      {SITE_CONFIG.contact.openingHours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 border border-[#D4AF37]/30 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-semibold block mb-1">
                      Hotline Đón Tiếp
                    </span>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone}`}
                      className="font-medium text-[#121212] hover:text-[#D4AF37] transition-colors"
                    >
                      {SITE_CONFIG.contact.phone} — {SITE_CONFIG.contact.phoneSecondary}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-8 mt-10 border-t border-[rgba(0,0,0,0.08)] space-y-3.5">
              <a
                href={SITE_CONFIG.contact.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="gold" fullWidth icon={<MessageCircle className="w-4 h-4" />}>
                  Đặt Lịch Đón Tiếp VIP Zalo
                </Button>
              </a>

              <a
                href="https://maps.google.com/?q=124+Nguyen+Trai+District+5+Ho+Chi+Minh+City"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" fullWidth icon={<Navigation className="w-4 h-4 text-[#D4AF37]" />}>
                  Chỉ Đường Google Maps
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Map View */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl border border-[rgba(212,175,55,0.2)] relative min-h-[440px] bg-[#FAF8F5]"
          >
            <iframe
              src={SITE_CONFIG.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "480px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ba Hên Jewelry Showroom Location Map"
              className="w-full h-full grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
