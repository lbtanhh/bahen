export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: "gold" | "diamond" | "wedding";
  categoryLabel: string;
  material: string;
  image: string;
  tag?: string;
  description: string;
  highlights: string[];
  editionCode: string;
}

export interface Collection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "gold" | "diamond" | "wedding";
  description: string;
  coverImage: string;
  itemCount: number;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface TikTokItem {
  id: string;
  title: string;
  views: string;
  thumbnail: string;
  videoUrl: string;
  likes: string;
  chapter: string;
}

export interface FacebookGalleryItem {
  id: string;
  caption: string;
  image: string;
  aspect: "aspect-square" | "aspect-[3/4]" | "aspect-[4/3]";
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const SITE_CONFIG = {
  name: "Ba Hên Jewelry",
  shortName: "Ba Hên",
  tagline: "Haute Joaillerie — Di Sản Lưu Dấu Thiên Thu",
  romanEra: "MCMXCVIII",
  description:
    "Thương hiệu kim hoàn cao cấp Ba Hên từ năm 1998. Chế tác độc bản Vàng 9999, Vàng Ý 18K, Kim Cương Thiên Nhiên GIA và Trang Sức Cưới Hoàng Gia.",
  contact: {
    address: "124 Nguyễn Trãi, Phường 3, Quận 5, TP. Hồ Chí Minh",
    phone: "0908 123 888",
    phoneSecondary: "028 3838 9999",
    email: "maison@bahenjewelry.com",
    zalo: "https://zalo.me/0908123888",
    facebook: "https://facebook.com/bahenjewelry.official",
    tiktok: "https://tiktok.com/@bahenjewelry",
    openingHours: "08:00 — 20:30 (Tất cả các ngày trong tuần)",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.669578132962!2d106.68019957585526!3d10.759868759498264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b88e1467f%3A0x6b876676ff30953a!2sNguyen%20Trai%20St%2C%20District%205%2C%20Ho%20Chi%20Minh%20City!5e0!3m2!1sen!2svn!4v1710000000000!5m2!1sen!2svn",
  },
  stats: [
    { label: "Năm Di Sản & Phát Triển", value: "25+" },
    { label: "Vàng Đủ Tuổi Chuẩn Quốc Tế", value: "100%" },
    { label: "Gia Đình VIP Thân Thiết", value: "18.000+" },
    { label: "Kiệt Tác Chế Tác Độc Bản", value: "5.000+" },
  ],
};

export const COLLECTIONS: Collection[] = [
  {
    id: "gold-collection",
    number: "01",
    title: "Bộ Sưu Tập Vàng Hoàng Gia",
    subtitle: "Vàng 9999 & Vàng Ý 18K Đan Dệt Ánh Sáng",
    category: "gold",
    description:
      "Sự hội tụ giữa kỹ nghệ đát mờ truyền thống và công nghệ đúc phay Ý. Mỗi kiệt tác mang sắc vàng ấm áp, tượng trưng cho phú quý vĩnh cửu của gia tộc.",
    coverImage:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1400&auto=format&fit=crop",
    itemCount: 42,
  },
  {
    id: "diamond-collection",
    title: "Kim Cương Thiên Nhiên GIA",
    number: "02",
    subtitle: "Vũ Điệu Của Ánh Sáng & Tinh Khiết",
    category: "diamond",
    description:
      "Tuyển chọn gắt gao những viên kim cương đạt chuẩn 4C tối thượng từ Viện Kim Cương Hoa Kỳ (GIA), tỏa sáng rực rỡ với giác cắt Precision Excellence.",
    coverImage:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1400&auto=format&fit=crop",
    itemCount: 28,
  },
  {
    id: "wedding-collection",
    title: "Trang Sức Cưới Long Phụng",
    number: "03",
    subtitle: "Kỷ Vật Tình Yêu & Hồi Môn Trọng Đại",
    category: "wedding",
    description:
      "Bộ kiềng cưới chạm khắc nổi 3D Long Phụng vờn mây kết hợp cùng nhẫn uyên ương đính ước, lưu giữ lời thề trăm năm hạnh phúc viên mãn.",
    coverImage:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1400&auto=format&fit=crop",
    itemCount: 35,
  },
];

export const WHY_CHOOSE_US = [
  {
    id: "craftsmanship",
    title: "Kỹ Nghệ Kim Hoàn Bậc Thầy",
    subtitle: "Di Sản 25+ Năm Kinh Nghiệm",
    description:
      "Mỗi đường nét khắc chạm đều là hơi thở của các nghệ nhân dành cả đời rèn giũa. Sự chuẩn xác từng milimet tạo nên đẳng cấp khác biệt.",
    iconName: "Sparkles",
  },
  {
    id: "certified-gold",
    title: "Minh Bạch Hàm Lượng Vàng 100%",
    subtitle: "Kiểm Định Máy Quang Phổ Tối Tân",
    description:
      "Cam kết 100% vàng đủ tuổi (9999 & 18K Ý). Mọi kiệt tác xuất xưởng đều được cấp chứng thư bảo chứng hàm lượng vàng và kim cương.",
    iconName: "ShieldCheck",
  },
  {
    id: "bespoke-lounge",
    title: "Không Gian Private Lounge VIP",
    subtitle: "Tư Vấn Riêng Tư Thượng Lưu",
    description:
      "Thưởng thức trà hoa cao cấp trong phòng thử trang sức độc bản, riêng tư hoàn toàn để quý khách thư thái chọn lựa.",
    iconName: "Crown",
  },
  {
    id: "warranty",
    title: "Bảo Hành & Làm Sáng Trọn Đời",
    subtitle: "Cam Kết Đồng Hành Thiên Thu",
    description:
      "Đặc quyền bảo dưỡng, siêu âm làm sạch, xi dát vàng trắng/vàng hồng và chỉnh sửa ni nhẫn hoàn toàn miễn phí trọn đời sản phẩm.",
    iconName: "Award",
  },
  {
    id: "buyback-policy",
    title: "Bảo Toàn Giá Trị Tài Sản",
    subtitle: "Chính Sách Thu Đổi Tối Ưu Tốt Nhất",
    description:
      "Cam kết thu đổi minh bạch theo bảng niêm yết giá vàng thị trường công khai, đảm bảo tính thanh khoản và tích lũy đầu tư lâu dài.",
    iconName: "RefreshCw",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "royal-italian-gold-necklace",
    name: "Dây Chuyền Royal Solitaire",
    subtitle: "Vàng 18K Ý & Kim Cương Solitaire GIA",
    category: "gold",
    categoryLabel: "Haute Joaillerie 18K",
    material: "Vàng 18K Ý & Kim Cương Nước D 0.6ct",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    tag: "Tác Phẩm Độc Bản",
    editionCode: "BH-SOL-MCMXCVIII",
    description:
      "Dây chuyền vàng Ý 18K khắc lụa thủ công ôm lấy viên kim cương chủ nước D đạt chuẩn GIA. Ánh quang phản chiếu kiêu kỳ tôn vinh khí chất quý phái.",
    highlights: ["Vàng 18K Ý Chuẩn Quốc Tế", "Kim Cương Nước D GIA Certified", "Tác Phẩm Giới Hạn Độc Quyền"],
  },
  {
    id: "eternity-diamond-ring",
    name: "Nhẫn Eternité Imperial Crown",
    subtitle: "Dải Kim Cương Emerald Cut Thiên Nhiên",
    category: "diamond",
    categoryLabel: "Kim Cương Thiên Nhiên",
    material: "Vàng Trắng 18K & Kim Cương VVS1",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    tag: "Biểu Tượng Vĩnh Cửu",
    editionCode: "BH-RNG-002",
    description:
      "Các viên kim cương cắt Emerald vuông vức liên kết không mối nối quanh vòng ổ nhẫn vàng trắng, biểu trưng cho tình thâm giao bền chặt.",
    highlights: ["Giác Cắt Precision Emerald", "Ổ Nhẫn Bạch Kim Platinum/Vàng Trắng 750", "Bảo Hành Xi Sáng Trọn Đời"],
  },
  {
    id: "dragon-phoenix-wedding-bangle",
    name: "Kiềng Cưới Long Phụng 9999",
    subtitle: "Chạm Khắc Nổi 3D Hồi Môn Hoàng Gia",
    category: "wedding",
    categoryLabel: "Trang Sức Cưới 9999",
    material: "Vàng Nguyên Chất 9999 (2 Lượng)",
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop",
    tag: "Truyền Thống & Đẳng Cấp",
    editionCode: "BH-WED-9999",
    description:
      "Hình tượng rồng cuộn phụng vờn đúc nổi 3D sống động bởi nghệ nhân lão thành. Món quà hồi môn quý giá mang cát tường viên mãn cho tân nương.",
    highlights: ["Vàng 9999 Đủ Tuổi 100%", "Chạm Đúc Nổi 3D Thủ Công", "Hộp Gỗ Khảm Sơn Mài Sang Trọng"],
  },
  {
    id: "queen-emerald-cut-earrings",
    name: "Bông Tai Princess Crown Solitaire",
    subtitle: "Vẻ Đẹp Kiêu Kỳ Hoàng Gia",
    category: "diamond",
    categoryLabel: "Kim Cương Thiên Nhiên",
    material: "Vàng Hồng 18K & Kim Cương Thiên Nhiên",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop",
    tag: "Tuyệt Tác Mới",
    editionCode: "BH-EAR-004",
    description:
      "Tạo hình giọt nước lấp lánh phản chiếu ánh sáng đa chiều dưới mọi góc nhìn, ôm sát và tôn vinh bờ vai thanh tú.",
    highlights: ["Độ Tinh Khiết VVS1", "Khóa Gài An Toàn Chống Rơi VIP", "Đèn Hộp Trưng Bày Đính Kèm"],
  },
  {
    id: "lux-gold-bangle-18k",
    name: "Vòng Tay Golden Ribbon Ý",
    subtitle: "Kỹ Thuật Phay Đát Ánh Kim",
    category: "gold",
    categoryLabel: "Haute Joaillerie 18K",
    material: "Vàng Ý 18K Chạm Khắc Đát Mờ",
    image:
      "https://images.unsplash.com/photo-1611591475179-62cd3c2f2353?q=80&w=1000&auto=format&fit=crop",
    tag: "Phong Cách Ý",
    editionCode: "BH-BAN-005",
    description:
      "Bề mặt phay ánh kim đan xen đát mờ tạo phản quang lung linh đầy cuốn hút, uyển chuyển theo chuyển động của cổ tay phái đẹp.",
    highlights: ["Chế Tác Tại Xưởng Ý", "Khóa Gài Đôi Chắc Chắn", "Chứng Thư Hàm Lượng Vàng 750"],
  },
  {
    id: "duo-wedding-ring-promessa",
    name: "Cặp Nhẫn Cưới Promessa D’Amore",
    subtitle: "Lời Thề Nguyện Trăm Năm",
    category: "wedding",
    categoryLabel: "Nhẫn Cưới Thượng Lưu",
    material: "Vàng Bạch Kim & Vàng Hồng 18K",
    image:
      "https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=1000&auto=format&fit=crop",
    tag: "Lời Thề Nguyện",
    editionCode: "BH-DOU-006",
    description:
      "Nhẫn nam tối giản mạnh mẽ kết hợp cùng nhẫn nữ đính dải kim cương thanh lịch, khắc tên cặp đôi trong lòng nhẫn.",
    highlights: ["Khắc Tên Kỷ Niệm Miễn Phí", "Hỗ Trợ Đo Ni Tận Nơi", "Bảo Hành Chỉnh Size Trọn Đời"],
  },
];

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    author: "Bà Nguyễn Thanh Vân",
    role: "Khách hàng VIP — Quận 1, TP.HCM",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    content:
      "Gia đình tôi đã tin chọn Ba Hên hơn 15 năm qua. Từ bộ kiềng cưới của tôi ngày trước đến bộ kim cương tặng con gái tốt nghiệp, vàng luôn đúng 100% hàm lượng, sự phục vụ thì trân trọng như người thân.",
    rating: 5,
    date: "May 2024",
    verified: true,
  },
  {
    id: "review-2",
    author: "Ông Trần Minh Quân",
    role: "Doanh Nhân — Vinhomes Central Park",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    content:
      "Dịch vụ Private Lounge tại Ba Hên thực sự đẳng cấp. Không gian riêng tư, chuyên gia am hiểu sâu sắc về nước kim cương GIA. Chiếc nhẫn cầu hôn tôi đặt chế tác riêng hoàn thiện vô cùng hoàn hảo.",
    rating: 5,
    date: "June 2024",
    verified: true,
  },
  {
    id: "review-3",
    author: "Chị Lê Hoàng Phương Thảo",
    role: "Khách Mua Trang Sức Cưới",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
    content:
      "Bộ kiềng cưới Long Phụng 3D là điểm nhấn rực rỡ nhất trong ngày trọng đại của tôi. Quan khách hai họ ai cũng khen ngợi đường nét rồng phụng sống động và sang trọng.",
    rating: 5,
    date: "April 2024",
    verified: true,
  },
];

export const TIKTOK_GALLERY: TikTokItem[] = [
  {
    id: "tiktok-1",
    chapter: "CHAPTER I",
    title: "Cận cảnh quy trình đánh bóng chiếc nhẫn kim cương 3.0 Carat GIA",
    views: "485.2K",
    likes: "42.8K",
    thumbnail:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://tiktok.com/@bahenjewelry",
  },
  {
    id: "tiktok-2",
    chapter: "CHAPTER II",
    title: "Thử bộ kiềng cưới vàng 9999 chạm đúc rồng phụng 3D độc bản",
    views: "890.1K",
    likes: "95.4K",
    thumbnail:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://tiktok.com/@bahenjewelry",
  },
  {
    id: "tiktok-3",
    chapter: "CHAPTER III",
    title: "Bí quyết nhận biết vàng 18K Ý đủ tuổi chuẩn xác nhất cùng chuyên gia",
    views: "320.5K",
    likes: "28.1K",
    thumbnail:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://tiktok.com/@bahenjewelry",
  },
  {
    id: "tiktok-4",
    chapter: "CHAPTER IV",
    title: "Trải nghiệm thử trang sức tại Lounge VIP Ba Hên Jewelry",
    views: "612.0K",
    likes: "54.9K",
    thumbnail:
      "https://images.unsplash.com/photo-1611591475179-62cd3c2f2353?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://tiktok.com/@bahenjewelry",
  },
];

export const FACEBOOK_GALLERY: FacebookGalleryItem[] = [
  {
    id: "fb-1",
    caption: "Không gian trưng bày thượng lưu ấm cúng tại Showroom Nguyễn Trãi, Quận 5",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[4/3]",
    date: "Maison Story",
  },
  {
    id: "fb-2",
    caption: "Nghệ nhân tỉ mỉ gắn từng chấu kim cương lên ổ nhẫn đính ước VIP",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
    date: "Craft Atelier",
  },
  {
    id: "fb-3",
    caption: "Chúc mừng vị khách VIP nhận bộ trang sức vàng 18K Ý phong cách hoàng gia",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-square",
    date: "VIP Moments",
  },
  {
    id: "fb-4",
    caption: "Vàng miếng 9999 luôn niêm phong tem chống giả chuẩn tuyệt đối",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-square",
    date: "Purity Gold",
  },
  {
    id: "fb-5",
    caption: "Cận cảnh chi tiết kiềng cưới hồi môn dặn đúc riêng cho dâu mới",
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
    date: "Wedding Heritage",
  },
  {
    id: "fb-6",
    caption: "Mời quý khách ghé thăm Ba Hên để thưởng trà & trải nghiệm trang sức",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[4/3]",
    date: "Private Lounge",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Ba Hên Jewelry có cam kết vàng đúng hàm lượng tuổi không?",
    answer:
      "Tất cả sản phẩm vàng tại Ba Hên Jewelry (từ Vàng 9999 đến Vàng Ý 18K) đều trải qua kiểm định bằng máy đo quang phổ hiện đại và cấp chứng thư bảo đảm hàm lượng vàng chuẩn 100%. Quý khách hoàn toàn có thể kiểm tra tại bất kỳ trung tâm kiểm định độc lập nào.",
    category: "Chất Lượng Vàng",
  },
  {
    id: "faq-2",
    question: "Chính sách thu đổi và bảo toàn giá trị vàng diễn ra như thế nào?",
    answer:
      "Chúng tôi áp dụng chính sách thu mua và đổi trả cực kỳ ưu đãi theo tỷ giá vàng công khai niêm yết hàng ngày tại cửa hàng. Đối với sản phẩm trang sức vàng Ý và kim cương, mức thu đổi linh hoạt từ 85% - 95% giá trị tùy thuộc vào tình trạng và chứng thư đi kèm.",
    category: "Chính Sách Thu Đổi",
  },
  {
    id: "faq-3",
    question: "Tôi muốn đặt chế tác trang sức theo ý tưởng riêng thì quy trình ra sao?",
    answer:
      "Ba Hên nhận chế tác bespoke theo thiết kế cá nhân. Quy trình gồm 4 bước: (1) Lắng nghe ý tưởng & tư vấn đá chủ/chất liệu; (2) Phác thảo bản vẽ 3D CAD cho quý khách duyệt; (3) Đúc khuôn và chế tác thủ công bởi nghệ nhân; (4) Kiểm định & giao sản phẩm tận tay quý khách.",
    category: "Chế Tác Riêng",
  },
  {
    id: "faq-4",
    question: "Dịch vụ bảo hành và làm sáng trang sức có tính phí không?",
    answer:
      "Mọi sản phẩm mua tại Ba Hên Jewelry đều nhận đặc quyền BẢO HÀNH & LÀM SÁNG TRỌN ĐỜI hoàn toàn miễn phí, bao gồm: siêu âm sóng âm làm sạch, đánh bóng xi mạ vàng trắng/vàng hồng, chỉnh nắn ni nhẫn và đính lại đá tấm.",
    category: "Bảo Hành",
  },
  {
    id: "faq-5",
    question: "Làm sao để tôi đặt lịch hẹn trước tại phòng VIP Lounge?",
    answer:
      "Quý khách có thể bấm vào nút 'Đặt Lịch Hẹn' trên trang web hoặc liên hệ trực tiếp qua Zalo / Hotline 0908 123 888. Đội ngũ tư vấn viên cao cấp của Ba Hên sẽ chuẩn bị không gian riêng tư và bộ sưu tập trang sức đúng theo sở thích của quý khách.",
    category: "Trải Nghiệm VIP",
  },
];
