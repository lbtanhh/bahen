"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Eye, MessageCircle, Sparkles } from "lucide-react";
import { PRODUCTS, Product, SITE_CONFIG } from "@/data/siteData";
import { SectionHeading } from "../ui/SectionHeading";
import { ProductModal } from "../ui/ProductModal";

export function BestSellersSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="bestsellers" className="py-28 sm:py-36 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <SectionHeading
            tag="Tác Phẩm Tiêu Biểu"
            title="Trang Sức Độc Bản Biểu Tượng"
            subtitle="Những kiệt tác đính ước và trang sức quý giá được yêu thích nhất tại Ba Hên Jewelry."
            align="left"
          />

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-3 mb-16">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-[rgba(0,0,0,0.12)] bg-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all flex items-center justify-center shadow-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-[rgba(0,0,0,0.12)] bg-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all flex items-center justify-center shadow-sm"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex -ml-4 sm:-ml-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 sm:pl-6"
              >
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-[rgba(212,175,55,0.18)] hover:border-[#D4AF37]/50 transition-all duration-500 cursor-pointer flex flex-col justify-between h-full"
                >
                  {/* Image Holder */}
                  <div className="relative aspect-square overflow-hidden bg-[#121212]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-108"
                    />

                    {/* Tag Top Left */}
                    {product.tag && (
                      <div className="absolute top-5 left-5 bg-black/75 backdrop-blur-md text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30">
                        {product.tag}
                      </div>
                    )}

                    {/* Quick View Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="px-5 py-3 rounded-full bg-white/95 text-[#121212] text-xs uppercase tracking-[0.25em] font-medium flex items-center space-x-2.5 shadow-2xl">
                        <Eye className="w-4 h-4 text-[#D4AF37]" />
                        <span>Chi Tiết Tác Phẩm</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-1.5">
                        {product.categoryLabel}
                      </span>

                      <h3 className="font-serif text-2xl font-light text-[#121212] group-hover:text-[#D4AF37] transition-colors leading-snug">
                        {product.name}
                      </h3>

                      <p className="text-xs text-[#777777] font-light mt-1.5 mb-6">
                        {product.material}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between">
                      <span className="text-[10px] text-[#121212] font-semibold uppercase tracking-[0.2em]">
                        Yêu Cầu Tư Vấn Zalo
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#FAF8F5] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white flex items-center justify-center transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-14 text-center">
          <p className="text-xs text-[#777777] font-light tracking-wide">
            * Tất cả tác phẩm đều có thể tùy chỉnh size, chất liệu vàng và chứng thư kim cương GIA theo yêu cầu độc bản.
          </p>
        </div>
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
