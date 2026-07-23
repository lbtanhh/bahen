"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Sparkles, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";
import { Button } from "../ui/Button";

const NAV_LINKS = [
  { name: "Câu Chuyện", href: "#story" },
  { name: "Bộ Sưu Tập", href: "#collections" },
  { name: "Tác Phẩm VIP", href: "#bestsellers" },
  { name: "Ưu Thế Ba Hên", href: "#why-us" },
  { name: "Đánh Giá", href: "#reviews" },
  { name: "Showroom", href: "#showroom" },
  { name: "Hỏi Đáp", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-xl shadow-md border-b border-[#D4AF37]/20 py-4"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent text-white py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Emblem */}
          <a href="#" className="group flex items-center space-x-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
                scrolled
                  ? "bg-[#121212] text-[#D4AF37] border-[#D4AF37]"
                  : "bg-white/10 text-[#D4AF37] border-[#D4AF37]/60 backdrop-blur-md group-hover:bg-[#D4AF37] group-hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-2xl sm:text-3xl tracking-[0.2em] font-medium leading-none uppercase ${
                  scrolled ? "text-[#121212]" : "text-white"
                }`}
              >
                BA HÊN
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] font-light text-[#D4AF37] mt-1">
                HAUTE JOAILLERIE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-300 relative py-1.5 group ${
                  scrolled
                    ? "text-[#121212] hover:text-[#D4AF37]"
                    : "text-gray-200 hover:text-[#D4AF37]"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="hidden sm:inline-flex"
            >
              <Button
                variant={scrolled ? "gold" : "outline"}
                size="sm"
                icon={<Phone className="w-3.5 h-3.5" />}
                className={!scrolled ? "border-white/40 text-white hover:bg-white/10" : ""}
              >
                {SITE_CONFIG.contact.phone}
              </Button>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2.5 rounded-full lg:hidden transition-colors ${
                scrolled ? "text-[#121212] hover:bg-[#F7E7CE]" : "text-white hover:bg-white/20"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#121212] text-white pt-28 pb-10 px-8 flex flex-col justify-between lg:hidden border-b border-[#D4AF37]/30"
          >
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-medium block">
                  Danh Mục Điều Hướng Maison
                </span>
                <span className="text-xs text-gray-500 font-serif">EST. MCMXCVIII</span>
              </div>

              <nav className="flex flex-col space-y-5">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-3xl font-light text-gray-200 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-center space-x-3 text-xs text-gray-400 font-light">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>

              <a
                href={SITE_CONFIG.contact.zalo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                <Button variant="gold" fullWidth>
                  Đặt Lịch Hẹn VIP Zalo
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
