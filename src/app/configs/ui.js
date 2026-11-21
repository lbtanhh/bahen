import images from "../images";

const WISH_API_LINK = ""; // use mock api

// common

// config Confetti

const configConfetti = {
  angle: "188",
  spread: 360,
  startVelocity: "50",
  elementCount: "133",
  dragFriction: 0.12,
  duration: 3000,
  stagger: "0",
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const weddingInfo = [
  {
    time: {
      date: "29/11",
      year: "2026",
      time: "10:00",
      full: "Chủ nhật, Ngày 29 Tháng 11 năm 2026",
    },
    address: "Tổ 2A, ấp bình long, xã châu thành, tỉnh tây ninh",
    street: "Tổ 2A, ấp bình long, xã châu thành, tỉnh tây ninh",
    phone: "0372 639 558",
    posision: "bottom left",
  },
];

// November 2026
const daysInMonth = [
  {
    title: "mon",
    days: [0, 2, 9, 16, 23, 30],
  },
  {
    title: "tue",
    days: [0, 3, 10, 17, 24, 0],
  },
  {
    title: "wed",
    days: [0, 4, 11, 18, 25, 0],
  },
  {
    title: "thu",
    days: [0, 5, 12, 19, 26, 0],
  },
  {
    title: "fri",
    days: [0, 6, 13, 20, 27, 0],
  },
  {
    title: "sat",
    days: [0, 7, 14, 21, 28, 0],
  },
  {
    title: "sun",
    days: [1, 8, 15, 22, 29, 0],
  },
];

// invitation intro (first section)
const introSection = {
  mainImage: "/img/bg1.jpg",
  brideFirstLetter: "Ngân",
  groomFirstLetter: "Anh",
};

// profile section

const profileSection = {
  description:
    "Hôn nhân không phải là một điểm đến mà là một cuộc hành trình nơi mà hai người cùng xây dựng và phát triển",
  profiles: [
    {
      title: "bride",
      name: "Nguyễn Huỳnh Thảo Ngân",
      avatar: "/img/cd1.jpg",
      images: ["/img/cd2.jpg", "/img/cd3.jpg"],
    },
    {
      title: "groom",
      name: "Lê Bá Tuấn Anh",
      avatar: "/img/cr1.jpg",
      images: ["/img/cr2.jpg", "/img/cr3.jpg"],
    },
  ],
};

// invitation section

const invitationSection = {
  0: "/img/SEO_%20(18).jpg",
  1: "/img/SEO_%20(78).jpg",
  2: "/img/SEO_%20(64).jpg",
  imgs: [
    "/img/SEO_%20(18).jpg",
    "/img/SEO_%20(78).jpg",
    "/img/SEO_%20(64).jpg",
  ],
  monthTitle: "Tháng 11",
  activeDay: 29,
};

// album section

const albumSection = {
  images: [
    "/img/1795276802284_8202761276992761363_8202761276992761363_8030c1580c3a9f56b5c1e74e0eeda844.jpg",
    "/img/1795276802288_8202761276992761363_8202761276992761363_3a86b90303650d5ca36bf72cb000b090.jpg",
    "/img/1795276802328_8202761276992761363_8202761276992761363_964bec0d2fb94680eb377fff0ed2c40e.jpg",
    "/img/1795276829392_8202761276992761363_8202761276992761363_a27634079037fc9cf918f1373e53d4f5.jpg",
    "/img/1795276829415_8202761276992761363_8202761276992761363_046d1b9a4767164f3531b73ca956228b.jpg",
    "/img/1795276829422_8202761276992761363_8202761276992761363_71170fcfff441c6e943c73964edc895b.jpg",
  ],
};

// guestbook section

const guestbookSection = {
  image: "/img/SEO_%20(15).jpg",
  time: "2026-12-31",
};

// gift section

const giftSection = {
  image: "/img/img5.jpg",
  brideBank: {
    name: "Nguyễn Huỳnh Thảo Ngân",
    bankName: "Vietcombank",
    qr: "https://img.vietqr.io/image/VCB-9966553252-compact2.jpg?accountName=NGUYEN%20HUYNH%20THAO%20NGAN",
    bankNumber: "9966553252",
  },
  groomBank: {
    name: "Lê Bá Tuấn Anh",
    bankName: "Techcombank",
    qr: "https://img.vietqr.io/image/TCB-19036921182010-compact2.jpg?accountName=LE%20BA%20TUAN%20ANH",
    bankNumber: "19036921182010",
  },
};

// timer
const timerSection = {
  weddingTime: {
    year: 2026,
    day: 29,
    month: 11,
    hour: 10,
    minute: 0,
  },
};

// final section

const finalSection = {
  images: [
    "/img/SEO_%20(8).jpg",
    "/img/1795276829429_8202761276992761363_8202761276992761363_20304e52c0295fcd613ff081e0b469e9.jpg",
    "/img/1795276829431_8202761276992761363_8202761276992761363_35fef1e550543230466632e36a8283a4.jpg",
    "/img/1795276802334_8202761276992761363_8202761276992761363_4aead5a74090317fc90df17665b5a651.jpg",
  ],
};

// Album Page

const albumPage = {
  topImage:
    "/img/1795276802334_8202761276992761363_8202761276992761363_4aead5a74090317fc90df17665b5a651.jpg",
  bottomImage:
    "/img/1795276802340_8202761276992761363_8202761276992761363_10d49f2c667d07bce1cae05cc370c7b3.jpg",
  mainImage: "/img/SEO_%20(77).jpg",
};

const albumA = [
  {
    imgs: [
      {
        id: 1,
        img: "/img/SEO_%20(18).jpg",
      },

      {
        id: 2,
        img: "/img/SEO_%20(78).jpg",
      },
    ],
  },

  {
    imgs: [
      {
        id: 3,
        img: "/img/SEO_%20(64).jpg",
      },
      {
        id: 4,
        img: "/img/SEO_%20(77).jpg",
      },
    ],
  },

  {
    imgs: [
      {
        id: 5,
        img: "/img/SEO_%20(15).jpg",
      },
      {
        id: 6,
        img: "/img/SEO_%20(8).jpg",
      },
    ],
  },

  {
    imgs: [
      {
        id: 7,
        img: "/img/img5.jpg",
      },
      {
        id: 8,
        img: "/img/1795276802284_8202761276992761363_8202761276992761363_8030c1580c3a9f56b5c1e74e0eeda844.jpg",
      },
    ],
  },
];

const albumB = [
  {
    imgs: [
      {
        id: 9,
        img: "/img/1795276802288_8202761276992761363_8202761276992761363_3a86b90303650d5ca36bf72cb000b090.jpg",
      },
    ],
  },

  {
    imgs: [
      {
        id: 10,
        img: "/img/1795276802328_8202761276992761363_8202761276992761363_964bec0d2fb94680eb377fff0ed2c40e.jpg",
      },
    ],
  },
  {
    imgs: [
      {
        id: 11,
        img: "/img/1795276829392_8202761276992761363_8202761276992761363_a27634079037fc9cf918f1373e53d4f5.jpg",
      },
    ],
  },
  {
    imgs: [
      {
        id: 12,
        img: "/img/1795276829415_8202761276992761363_8202761276992761363_046d1b9a4767164f3531b73ca956228b.jpg",
      },
    ],
  },
];

const albumC = [
  {
    imgs: [
      {
        id: 13,
        img: "/img/1795276829422_8202761276992761363_8202761276992761363_71170fcfff441c6e943c73964edc895b.jpg",
      },
    ],
  },
  {
    imgs: [
      {
        id: 14,
        img: "/img/1795276829429_8202761276992761363_8202761276992761363_20304e52c0295fcd613ff081e0b469e9.jpg",
      },
    ],
  },
  {
    imgs: [
      {
        id: 15,
        img: "/img/1795276829431_8202761276992761363_8202761276992761363_35fef1e550543230466632e36a8283a4.jpg",
      },
    ],
  },
  {
    imgs: [
      {
        id: 16,
        img: "/img/cd1.jpg",
      },
    ],
  },
];

const albums = [...albumA, ...albumB, ...albumC]; // for preview

const metaData = {
  main: {
    title: "Báo Hỉ Tuấn Anh - Thảo Ngân | Kính Mời",
    graphImage: "/img/SEO_%20(77).jpg",
  },

  wish: {
    title: "Tất cả lời chúc dành cho Tuấn Anh - Thảo Ngân",
    graphImage: "/img/SEO_%20(18).jpg",
  },

  invitation: {
    title: "Báo Hỉ | Form Nhập Tên",
    graphImage: "/img/SEO_%20(15).jpg",
  },
  album: {
    title: "Album của Tuấn Anh - Thảo Ngân",
    graphImage: "/img/SEO_%20(8).jpg",
  },
};

export {
  weddingInfo,
  daysInMonth,
  albumPage,
  albumA,
  albumB,
  albumC,
  albums,
  configConfetti,
  introSection,
  profileSection,
  invitationSection,
  albumSection,
  guestbookSection,
  giftSection,
  timerSection,
  finalSection,
  WISH_API_LINK,
  metaData,
};
