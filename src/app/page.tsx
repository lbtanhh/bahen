import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { CollectionSection } from "@/components/sections/CollectionSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { BestSellersSection } from "@/components/sections/BestSellersSection";
import { ReviewSection } from "@/components/sections/ReviewSection";
import { TikTokGallerySection } from "@/components/sections/TikTokGallerySection";
import { FacebookGallerySection } from "@/components/sections/FacebookGallerySection";
import { StoreInfoSection } from "@/components/sections/StoreInfoSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FAF8F5]">
      {/* Navigation Header */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Brand Story Section */}
      <BrandStorySection />

      {/* 3. Featured Collections Section */}
      <CollectionSection />

      {/* 4. Why Choose Ba Hên Section */}
      <WhyChooseSection />

      {/* 5. Best Selling Showcase Section */}
      <BestSellersSection />

      {/* 6. Customer Reviews Section */}
      <ReviewSection />

      {/* 7. TikTok Video Gallery Section */}
      <TikTokGallerySection />

      {/* 8. Facebook Photo Gallery Section */}
      <FacebookGallerySection />

      {/* 9. Store Information & Location Section */}
      <StoreInfoSection />

      {/* 10. FAQ Section */}
      <FaqSection />

      {/* 11. Final CTA Section */}
      <CtaSection />

      {/* 12. Footer */}
      <Footer />

      {/* Floating Zalo / Phone speed dial */}
      <FloatingContact />
    </main>
  );
}
