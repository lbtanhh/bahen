import React from "react";
import { Sparkles, MapPin, Phone, Clock, Mail, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="bg-[#121212] text-white border-t border-[#D4AF37]/20 pt-20 sm:pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.2em] font-medium uppercase text-white">
                  BA HÊN
                </span>
                <span className="text-[8px] uppercase tracking-[0.4em] font-light text-[#D4AF37]">
                  HAUTE JOAILLERIE
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Maison chế tác kim hoàn cao cấp hơn 25 năm uy tín. Chuyên sâu Vàng 9999, Vàng Ý 18K, Kim Cương GIA và Trang Sức Cưới Hoàng Gia tại TP. Hồ Chí Minh.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-[#D4AF37]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% Vàng Đủ Tuổi — Kiểm Định Minh Bạch</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-5">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#D4AF37] border-b border-white/10 pb-3">
              Khám Phá Maison
            </h4>
            <ul className="space-y-3 text-xs text-gray-300 font-light">
              <li>
                <a href="#story" className="hover:text-[#D4AF37] transition-colors">
                  Di Sản & Triết Lý Ba Hên
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#D4AF37] transition-colors">
                  Bộ Sưu Tập Vàng Hoàng Gia
                </a>
              </li>
              <li>
                <a href="#bestsellers" className="hover:text-[#D4AF37] transition-colors">
                  Trang Sức Kim Cương GIA
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#D4AF37] transition-colors">
                  Kiềng Cưới Long Phụng 9999
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#D4AF37] transition-colors">
                  Dịch Vụ Chế Tác Bespoke VIP
                </a>
              </li>
            </ul>
          </div>

          {/* Showroom & Hours */}
          <div className="space-y-5">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#D4AF37] border-b border-white/10 pb-3">
              Thông Tin Showroom
            </h4>
            <div className="space-y-3.5 text-xs text-gray-300 font-light">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{SITE_CONFIG.contact.openingHours}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-[#D4AF37]">
                  {SITE_CONFIG.contact.phone} — {SITE_CONFIG.contact.phoneSecondary}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{SITE_CONFIG.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Online Channels */}
          <div className="space-y-5">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#D4AF37] border-b border-white/10 pb-3">
              Kênh Kết Nối
            </h4>
            <p className="text-xs text-gray-400 font-light">
              Theo dõi Ba Hên Jewelry trên các nền tảng mạng xã hội để cập nhật những tác phẩm mới nhất.
            </p>
            <div className="flex flex-col space-y-2.5 pt-1">
              <a
                href={SITE_CONFIG.contact.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Zalo Official Account</span>
              </a>
              <a
                href={SITE_CONFIG.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Facebook Official Fanpage</span>
              </a>
              <a
                href={SITE_CONFIG.contact.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-pink-500" />
                <span>TikTok Channel (@bahenjewelry)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 font-light space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Ba Hên Jewelry • EST. MCMXCVIII. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Vàng 9999 • Vàng Ý 18K • Kim Cương GIA</span>
            <span className="text-[#D4AF37]">Thương Hiệu Đã Đăng Ký Bảo Hộ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
