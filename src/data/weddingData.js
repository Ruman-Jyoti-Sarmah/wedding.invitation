export const WEDDING_DATE = "2026-11-22T09:30:00+05:30";

export const MUSIC_VIDEO_ID = "K49-UyBSbOo";

export const WEDDING_VIDEO = "/media/wedding-hero.mp4";

const img = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  hero: img("1661142175513-a5f0871f1ad1", 2200),
  introA: img("1640404967780-5963a0ffbe57", 1200),
  introB: img("1684472993236-b605bb80ca0b", 1000),
  couple: img("1705475388142-a2700c4caeb5", 1800),
  coupleDetail: img("1611489704434-2612dc89c992", 1000),
  celebration: img("1635192592106-77a5aacbe1a3", 2000),
  venue: img("1621789547000-b74d615ce6c5", 1400),
  finale: img("1591946522651-90fbace43004", 2200),
};

export const WEDDING_DATA = {
  groom: {
    name: "Joyanta",
    assamese: "জয়ন্ত",
    initial: "J",
  },
  bride: {
    name: "Bandita",
    assamese: "বন্দিতা",
    initial: "B",
  },
  coupleShort: "Joyanta & Bandita",
  coupleInitials: "J & B",
  monogram: "J & B",

  dateLabel: "22 November 2026",
  dateShort: "22 · 11 · 2026",
  weekday: "Sunday",
  weekdayAssamese: "দেওবাৰ",
  assameseDate: "৫ আঘোণ",
  timeLabel: "Muhurat to be announced by the family",
  placeLabel: "Dhemaji, Assam",

  navLinks: [
    { id: "invitation", label: "The Invitation" },
    { id: "couple", label: "The Couple" },
    { id: "rituals", label: "Rituals" },
    { id: "joy", label: "A Little Joy" },
    { id: "gallery", label: "Gallery" },
    { id: "venue", label: "Venue" },
  ],

  rsvp: {
    label: "RSVP",
    phone: "+91 70993 00434",
    phoneHref: "tel:+917099300434",
    whatsappHref: "https://wa.me/917099300434",
    note: "Kindly let us know by 10 November 2026 · 8 AM – 9 PM",
  },

  hero: {
    est: "Est. 2026 · Dhemaji, Assam",
    names: "The wedding of Joyanta & Bandita",
    titleA: "TWO SOULS",
    titleB: "ONE FOREVER",
    support:
      "An invitation from the banks of the Brahmaputra — where two families, two traditions and a lifetime of blessings meet beneath the November sky.",
    assamese:
      "আমাৰ জীৱনৰ আটাইতকৈ সুন্দৰ দিনটোত আপোনাৰ উপস্থিতি আৰু আশীৰ্বাদ বিচাৰিছোঁ।",
    date: "22 · 11 · 2026",
    scroll: "Scroll",
  },

  intro: {
    label: "Chapter 01 — The Invitation",
    titleA: "A VOW WOVEN",
    titleB: "IN TRADITION",
    body:
      "With the blessings of our families, we invite you to the wedding of Joyanta and Bandita. A morning of Assamese ritual, a courtyard full of laughter, and a promise that begins a new home.",
    assamese:
      "স্নেহৰ আত্মীয়, বন্ধু আৰু শুভাকাঙ্ক্ষীসকললৈ — আমাৰ শুভ বিবাহত আপোনালোক সকলোকে সাদৰে আমন্ত্ৰণ জনাইছোঁ।",
    signature: "With love — both our families",
    images: [
      {
        src: IMAGES.introA,
        alt: "A quiet courtyard dressed for a wedding",
        caption: "The courtyard, morning light",
      },
      {
        src: IMAGES.introB,
        alt: "Fresh flowers gathered for the ceremony",
        caption: "Flowers for the garland",
      },
    ],
  },

  couple: {
    label: "Chapter 02 — The Couple",
    title: "WOVEN FROM TRADITION & TENDERNESS",
    detailCaption: "The garland, the blessing",
    facts: [
      {
        label: "The Groom",
        title: "Joyanta",
        text:
          "The groom, arriving with his family, a gamosa and a heart full of promises.",
      },
      {
        label: "The Bride",
        title: "Bandita",
        text:
          "The bride, carrying her grandmother's blessings and a quiet, steady joy.",
      },
      {
        label: "The Vow",
        title: "22 Nov 2026",
        text: "Gopak Gaon, Dhemaji · Assam. Sunday, in the morning.",
      },
    ],
  },

  rituals: {
    label: "Chapter 03 · Rituals",
    heading: "The Sacred Rites",
    intro:
      "Assamese weddings unfold as a sequence of small, tender ceremonies — each one a blessing, each one a threshold.",
    hint: "Scroll",
    count: "Six rites",
    items: [
      {
        id: "joron",
        name: "জোৰোণ",
        english: "The First Gift",
        number: "01",
        text:
          "Betel leaf, areca nut and fruit carried to the bride's home — the first warm step of a new relationship.",
        image: img("1649667220047-66a31d18537d", 1000),
        caption: "Betel leaf & areca",
      },
      {
        id: "teloniya",
        name: "তেলনীয়া",
        english: "The Anointing",
        number: "02",
        text:
          "Turmeric, oil and water — the old rite that readies body and mind for the days ahead.",
        image: img("1741513599050-487ccfb86275", 1000),
        caption: "Turmeric",
      },
      {
        id: "nahor",
        name: "নাহৰ",
        english: "The Fragrant Bath",
        number: "03",
        text:
          "Water steeped with nahor blossom, poured gently — the bride and groom are made ready for the muhurat.",
        image: img("1684472993236-b605bb80ca0b", 1000),
        caption: "Nahor blossom",
      },
      {
        id: "mala",
        name: "মালা লগা",
        english: "The Garland Vow",
        number: "04",
        text:
          "Garlands exchanged, hands held — the moment the two become one, in front of everyone they love.",
        image: img("1705475388142-a2700c4caeb5", 1000),
        caption: "The garland",
      },
      {
        id: "saat",
        name: "সাত বিচনী",
        english: "Seven Seats",
        number: "05",
        text:
          "The bride moves through seven seats, seven times — a blessing for seven lifetimes together.",
        image: img("1611489704434-2612dc89c992", 1000),
        caption: "Seven seats",
      },
      {
        id: "biday",
        name: "কইনা বিদায়",
        english: "The Farewell",
        number: "06",
        text:
          "A goodbye at her father's door, given through tears and blessings, and a new life begun.",
        image: img("1591946522651-90fbace43004", 1000),
        caption: "The farewell door",
      },
    ],
  },

  celebration: {
    label: "Chapter 04 — The Celebration",
    titleA: "EVERY SECOND",
    titleB: "A LITTLE CLOSER",
    body:
      "The muhurat is fixed for the morning of 22 November. Until then the house is full of marigolds, borrowed chairs and a great deal of singing.",
    assamese: "শুভ লগ্নৰ সময় পৰিয়ালে জনাব।",
    date: "Sunday, 22 November 2026",
    place: "Gopak Gaon · Dhemaji, Assam",
    doneNote: "The vows have been spoken — thank you for your blessings.",
  },

  joy: {
    label: "Chapter 05 — A Little Joy",
    titleA: "SHOWER THEM",
    titleB: "WITH BLESSINGS",
    intro:
      "A courtyard blesses its newlyweds with petals and prayer. Tap the marigold and let a handful fall — one blessing at a time, for Joyanta and Bandita.",
    action: "Shower a Blessing",
    actionAgain: "Once More",
    hint: "One tap, and the courtyard blooms.",
    countLabel: "Blessings you have offered",
    blessings: [
      {
        as: "আপোনাৰ ঘৰ সদায় হাঁহিৰে ভৰি থাকক।",
        en: "May your home always be full of laughter.",
      },
      {
        as: "জীৱনৰ প্ৰতিটো পুৱা প্ৰেমেৰে আৰম্ভ হওক।",
        en: "May every morning of your life begin with love.",
      },
      {
        as: "দুয়ো মিলি এশ বছৰ জীয়াই থাকক।",
        en: "May the two of you live a hundred years together.",
      },
      {
        as: "আপোনাৰ পথত কেতিয়াও অন্ধকাৰ নাহক।",
        en: "May darkness never find your path.",
      },
      {
        as: "ভালপোৱা আৰু বিশ্বাসে আপোনাৰ ঘৰ ৰক্ষা কৰক।",
        en: "May love and trust keep your home.",
      },
      {
        as: "পৰিয়ালৰ আশীৰ্বাদ সদায় লগত থাকক।",
        en: "May the blessings of your families always walk beside you.",
      },
      {
        as: "আপোনাৰ সপোনবোৰ সঁচা হওক।",
        en: "May your dreams come true, one by one.",
      },
      {
        as: "শুকান দিনতো আপোনাৰ মাটি সেউজীয়া থাকক।",
        en: "May your soil stay green even through dry days.",
      },
    ],
  },

  gallery: {
    label: "Chapter 06 · Gallery",
    heading: "Moments, Kept",
    intro:
      "Betel leaf, marigold, clay lamps and banana leaf — the simple colours of an Assamese wedding.",
    items: [
      {
        id: "g1",
        src: img("1608581821197-28646ed9ebe3", 1200),
        alt: "Banana leaf and greenery",
        caption: "কলপাত",
        note: "Banana leaf",
      },
      {
        id: "g2",
        src: img("1442458017215-285b83f65851", 1200),
        alt: "A bunch of marigolds",
        caption: "গাঁধাফুল",
        note: "Marigold",
      },
      {
        id: "g3",
        src: img("1605378229010-11aedbb01b24", 1200),
        alt: "Clay lamps glowing",
        caption: "মাটিৰ চাকি",
        note: "Clay lamps",
      },
      {
        id: "g4",
        src: img("1528207620916-db0d5aab17cb", 1200),
        alt: "Veins of a banana leaf",
        caption: "পাতৰ শিৰা",
        note: "Leaf veins",
      },
      {
        id: "g5",
        src: img("1607512566084-a20ed291d623", 1200),
        alt: "A curtain of marigold garlands",
        caption: "মালাৰ পৰ্দা",
        note: "Garland curtain",
      },
      {
        id: "g6",
        src: img("1578981320111-c7e9426cd6e8", 1200),
        alt: "A boat on the river",
        caption: "ব্ৰহ্মপুত্ৰ",
        note: "The Brahmaputra",
      },
      {
        id: "g7",
        src: img("1621789547000-b74d615ce6c5", 1200),
        alt: "A long bridge across the river",
        caption: "নদীৰ দলং",
        note: "The river bridge",
      },
      {
        id: "g8",
        src: img("1618508410458-761c490010ad", 1200),
        alt: "A single green banana leaf",
        caption: "সেউজীয়া",
        note: "Green",
      },
    ],
  },

  venue: {
    label: "Chapter 07 — The Destination",
    titleA: "A VILLAGE BY THE",
    titleB: "BRAHMAPUTRA",
    body:
      "Gopak Gaon sits a short drive from Dhemaji town, where the Brahmaputra braids through the fields. Our wedding home opens its gate to you from the morning of 22 November.",
    name: "Our Wedding Home",
    subtitle: "Gopak Gaon, Dhemaji",
    address: "Near Mother's Pride School, Gopak Gaon, Dhemaji, Assam, India",
    note:
      "Use the map or the QR code below for directions. If you lose your way, call us — someone will guide you in.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gopak+Gaon%2C+Dhemaji%2C+Assam%2C+India",
    image: IMAGES.venue,
    imageCaption: "The river road · Dhemaji",
    qrLabel: "Scan for directions",
    qrNote: "Opens our wedding home in Google Maps.",
    facts: [
      { label: "By Air", value: "Dibrugarh Airport (DIB) · ~2 hrs by road" },
      { label: "By Rail", value: "Dhemaji Railway Station · 12 km" },
      { label: "Coordinates", value: "27.48° N · 94.61° E" },
      { label: "The Date", value: "22 November 2026 · Sunday" },
    ],
    mapPin: { top: "44%", left: "54%" },
  },

  finale: {
    label: "With love, from our families",
    titleA: "YOUR BLESSING",
    titleB: "MEANS THE WORLD",
    quote:
      "আপোনাৰ উপস্থিতি আৰু আশীৰ্বাদ — এই দুয়োটা আমাৰ বাবে আটাইতকৈ মূল্যবান উপহাৰ।",
    cta: "Say You'll Come",
    ctaNote: "Kindly reply by 10 November 2026",
  },

  footer: {
    tagline: "A wedding woven in Assamese tradition",
    exploreTitle: "Explore",
    reachTitle: "Reach Us",
    dayTitle: "The Day",
    dayLines: ["22 November 2026", "Sunday · Morning", "Gopak Gaon, Dhemaji"],
    bottomLeft: "Joyanta & Bandita · 2026",
    bottomRight: "Made with love, in Assam",
  },
};
