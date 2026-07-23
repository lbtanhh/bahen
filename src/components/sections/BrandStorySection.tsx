"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import { Sparkles, ShieldCheck, Crown, Award } from "lucide-react";

const PHILOSOPHY_TABS = [
  {
    id: "legacy",
    title: "Di Sản 25+ Năm",
    heading: "Khởi Nguồn Từ Niềm Tin & Trung Thực",
    content:
      "Tọa lạc tại trung tâm Quận 5 từ năm 1998, Ba Hên Jewelry không ngừng gìn giữ triết lý chế tác vàng đúng tuổi chuẩn 100%. Sự trung thực và chữ Tín là chiếc chìa khóa gắn kết hàng chục ngàn gia đình qua nhiều thế hệ.",
  },
  {
    id: "craft",
    title: "Kỹ Nghệ Chế Tác",
    heading: "Bàn Tay Nghệ Nhân Kim Hoàn Bậc Thầy",
    content:
      "Mỗi tác phẩm rời khỏi xưởng kim hoàn đều trải qua hàng trăm giờ đúc phay, chạm khắc 3D và gắn đá dưới kính phóng đại chuyên dụng, đạt tới độ hoàn hảo tuyệt đối trong từng đường nét.",
  },
  {
    id: "purity",
    title: "Phẩm Chất Hoàng Gia",
    heading: "Bảo Chứng Hàm Lượng Vàng Chuẩn 100%",
    content:
      "Mọi viên kim cương GIA và dải vàng Ý 18K/vàng 9999 đều được kiểm định bằng hệ thống máy đo quang phổ tối tân, cấp chứng thư minh bạch tuyệt đối cho quý khách.",
  },
];

export function BrandStorySection() {
  const [activeTab, setActiveTab] = useState("legacy");
  const currentTab = PHILOSOPHY_TABS.find((t) => t.id === activeTab) || PHILOSOPHY_TABS[0];

  return (
    <section id="story" className="py-28 sm:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Triết Lý & Di Sản Maison"
          title="Hành Trình Chế Tác Kim Hoàn Ba Hên"
          subtitle="Hơn hai thập kỷ lưu giữ khoảnh khắc quý giá của những gia tộc thượng lưu."
        />

        {/* Philosophy Interactive Selector */}
        <div className="flex items-center justify-center space-x-3 mb-16 flex-wrap gap-y-3">
          {PHILOSOPHY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.25em] transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#121212] text-[#D4AF37] shadow-xl border border-[#D4AF37]"
                  : "bg-white/80 text-[#777777] border border-[rgba(0,0,0,0.08)] hover:text-[#121212] hover:border-[#D4AF37]"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Magazine Imagery Spread */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-[rgba(212,175,55,0.2)] aspect-[4/3] bg-[#121212]">
              <Image
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop"
                alt="Nghệ nhân chế tác kim hoàn tại xưởng Ba Hên"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>

            {/* Inset Accent Photo */}
            <div className="absolute -bottom-10 -right-6 z-20 w-1/2 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5] aspect-square hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=600&auto=format&fit=crop"
                alt="Không gian trưng bày Ba Hên Jewelry"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>

            {/* Roman Badge Top Left */}
            <div className="absolute -top-8 -left-6 z-20 p-6 rounded-3xl bg-[#121212] text-white border border-[#D4AF37]/40 shadow-2xl hidden sm:block">
              <Sparkles className="w-6 h-6 text-[#D4AF37] mb-1" />
              <span className="font-serif text-2xl font-light text-[#D4AF37] block">MCMXCVIII</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-gray-300">HAUTE JOAILLERIE</span>
            </div>
          </motion.div>

          {/* Right Text Content Panel */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-[#121212]"
          >
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              <span>{currentTab.title}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-light leading-snug">
              &quot;{currentTab.heading}&quot;
            </h3>

            <p className="text-sm sm:text-base text-[#777777] font-light leading-relaxed">
              {currentTab.content}
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[rgba(0,0,0,0.08)] shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
                <Crown className="w-4 h-4" />
                <span>Cam Kết Từ Nhà Chế Tác</span>
              </div>
              <p className="text-xs text-[#121212] font-serif italic leading-relaxed">
                &quot;Mỗi sản phẩm Ba Hên chế tác không chỉ là trang sức nâng tầm phong cách, mà còn là di sản tài sản lưu truyền qua các thế hệ gia đình.&quot;
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[rgba(0,0,0,0.08)]">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#121212]">
                    Vàng Chuẩn 100%
                  </h4>
                  <p className="text-xs text-[#777777] font-light mt-0.5">
                    Kiểm định minh bạch toàn quốc
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#121212]">
                    Bảo Hành Trọn Đời
                  </h4>
                  <p className="text-xs text-[#777777] font-light mt-0.5">
                    Xi sáng & bảo dưỡng miễn phí
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
