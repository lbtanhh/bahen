import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/siteData";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1C1C1C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bahenjewelry.com"),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Ba Hên Jewelry",
    "Tiệm Vàng Ba Hên",
    "Vàng 9999 Quận 5",
    "Trang sức Vàng Ý 18K",
    "Kim Cương GIA",
    "Trang Sức Cưới Long Phụng",
    "Vàng Đủ Tuổi TP.HCM",
    "Chế Tác Kim Hoàn Cao Cấp",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://bahenjewelry.com",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: SITE_CONFIG.name,
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    description: SITE_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "124 Nguyễn Trãi, Phường 3",
      addressLocality: "Quận 5",
      addressRegion: "TP. Hồ Chí Minh",
      addressCountry: "VN",
    },
    telephone: SITE_CONFIG.contact.phone,
    openingHours: "Mo-Su 08:00-20:30",
    priceRange: "$$$$",
    url: "https://bahenjewelry.com",
    sameAs: [
      SITE_CONFIG.contact.facebook,
      SITE_CONFIG.contact.tiktok,
      SITE_CONFIG.contact.zalo,
    ],
  };

  return (
    <html
      lang="vi"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#1C1C1C] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
