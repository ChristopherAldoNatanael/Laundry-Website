// Environment variables
export const BUSINESS_CONFIG = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  businessName: process.env.NEXT_PUBLIC_BUSINESS_NAME || "Laundry Modern",
  businessAddress: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "Jl. Contoh Alamat No. 123, Jakarta Selatan",
  businessPhone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+62 812-3456-7890",
  businessEmail: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "info@laundrymodern.com",
  operationHours: process.env.NEXT_PUBLIC_OPERATION_HOURS || "Senin - Minggu: 07:00 - 20:00 WIB",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/laundrymodern",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/laundrymodern",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "https://tiktok.com/@laundrymodern",
};

// WhatsApp Message Template
export const WHATSAPP_MESSAGE = encodeURIComponent("Halo 👋 Saya ingin pesan layanan laundry. Bisa bantu?");

// Services Data
export const SERVICES = [
  {
    id: "cuci-kering",
    title: "Cuci Kering",
    description: "Layanan cuci lengkap dengan mesin otomatis dan deterjen premium",
    icon: "Droplets",
  },
  {
    id: "cuci-setrika",
    title: "Cuci Setrika",
    description: "Paket lengkap cuci dan setrika dengan hasil sempurna",
    icon: "Wind",
  },
  {
    id: "setrika-saja",
    title: "Setrika Saja",
    description: "Setrika profesional untuk pakaian dengan hasil mantap",
    icon: "Flame",
  },
  {
    id: "express-3-jam",
    title: "Express 3 Jam",
    description: "Jaminan selesai dalam 3 jam untuk kebutuhan mendesak",
    icon: "Zap",
  },
  {
    id: "antar-jemput",
    title: "Antar Jemput Gratis",
    description: "Layanan antar jemput tanpa biaya tambahan untuk area tertentu",
    icon: "Truck",
  },
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    description: "Pembersihan khusus untuk pakaian premium dan delicate",
    icon: "Sparkles",
  },
];

// Pricing Data
export const PRICING_PLANS = [
  {
    id: "regular",
    name: "Paket Reguler",
    price: 15000,
    period: "per kg",
    features: ["Cuci Kering Standard", "Deterjen Premium", "Selesai dalam 2 hari", "Pakaian rapi terlipat", "Pengambilan standar"],
    cta: "Pilih Paket",
    highlighted: false,
  },
  {
    id: "premium",
    name: "Paket Express",
    price: 25000,
    period: "per kg",
    features: ["Cuci + Setrika", "Deterjen Premium", "Selesai dalam 3 jam", "Kemasan premium", "Antar jemput gratis", "Priority handling"],
    cta: "Pilih Paket",
    highlighted: true,
  },
  {
    id: "monthly",
    name: "Paket Bulanan",
    price: 300000,
    period: "per bulan",
    features: ["Unlimited cuci kering", "Gratis setrika 2x minggu", "Cuaca apapun", "Kemasan premium", "Antar jemput gratis", "Prioritas layanan", "Konsultasi gratis"],
    cta: "Hubungi Kami",
    highlighted: false,
  },
];

// Why Us Data
export const WHY_US = [
  {
    icon: "Zap",
    title: "Proses Cepat",
    description: "Layanan express 3 jam dengan kualitas terjamin untuk kebutuhan mendesak",
  },
  {
    icon: "Cpu",
    title: "Mesin Modern",
    description: "Teknologi mesin cuci terkini untuk hasil maksimal tanpa merusak kain",
  },
  {
    icon: "Leaf",
    title: "Deterjen Premium",
    description: "Menggunakan deterjen berkualitas tinggi yang aman untuk semua jenis kain",
  },
  {
    icon: "CheckCircle",
    title: "Garansi Kebersihan",
    description: "Jaminan kepuasan atau uang kembali 100% tanpa pertanyaan",
  },
  {
    icon: "Navigation",
    title: "Antar Jemput",
    description: "Layanan antar jemput gratis untuk area tertentu dengan tracking real-time",
  },
  {
    icon: "Clock",
    title: "Customer Support",
    description: "Tim support responsif 24/7 siap membantu semua kebutuhan Anda",
  },
];

// Testimonials Data
export const TESTIMONIALS = [
  {
    name: "Budi Santoso",
    role: "Profesional Muda",
    comment: "Layanan luar biasa! Pakaian saya selalu bersih dan wangi. Proses cepat dan staff yang ramah.",
    rating: 5,
    image: "/testimonials/testimonial-1.jpg",
  },
  {
    name: "Siti Nurhaliza",
    role: "Ibu Rumah Tangga",
    comment: "Tidak perlu repot lagi. Antar jemput gratis dan hasilnya sempurna. Rekomendasi untuk teman!",
    rating: 5,
    image: "/testimonials/testimonial-2.jpg",
  },
  {
    name: "Reza Wijaya",
    role: "Pengusaha",
    comment: "Paket bulanan sangat membantu. Saya bisa fokus pada bisnis tanpa khawatir soal laundry.",
    rating: 5,
    image: "/testimonials/testimonial-3.jpg",
  },
  {
    name: "Diana Kusuma",
    role: "Marketing Manager",
    comment: "Express 3 jam sangat menyelamatkan. Buat rapat penting dan baju jadi dalam waktu singkat!",
    rating: 5,
    image: "/testimonials/testimonial-4.jpg",
  },
];

// Navigation Links
export const NAV_LINKS = [
  { href: "#home", label: "Beranda" },
  { href: "#services", label: "Layanan" },
  { href: "#pricing", label: "Harga" },
  { href: "#gallery", label: "Galeri" },
  { href: "#testimonials", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Kontak" },
];

// FAQ Data
export const FAQS = [
  {
    question: "Berapa lama waktu yang dibutuhkan untuk cuci regular?",
    answer: "Untuk layanan reguler, waktu yang dibutuhkan adalah 2 hari kerja. Namun, kami juga menyediakan layanan express yang dapat selesai dalam 3 jam untuk kebutuhan mendesak Anda.",
  },
  {
    question: "Apakah layanan antar jemput benar-benar gratis?",
    answer: "Ya, layanan antar jemput kami 100% gratis untuk area tertentu dengan minimum order 5kg. Untuk area di luar jangkauan, akan dikenakan biaya tambahan yang terjangkau.",
  },
  {
    question: "Apa yang membedakan dry cleaning dengan cuci biasa?",
    answer:
      "Dry cleaning adalah proses pembersihan tanpa menggunakan air, khusus untuk pakaian premium seperti jas, gaun pesta, dan bahan delicate yang tidak boleh terkena air. Prosesnya menggunakan solvent khusus yang aman untuk kain sensitif.",
  },
  {
    question: "Bagaimana jika ada pakaian yang rusak atau hilang?",
    answer: "Kami memiliki jaminan 100% ganti rugi untuk pakaian yang rusak atau hilang selama dalam perawatan kami. Setiap pakaian akan difoto dan dicatat dengan teliti sebelum proses pencucian.",
  },
  {
    question: "Apakah deterjen yang digunakan aman untuk kulit sensitif?",
    answer: "Sangat aman! Kami menggunakan deterjen premium hypoallergenic yang ramah untuk kulit sensitif dan anak-anak. Semua produk kami telah tersertifikasi dermatologi.",
  },
  {
    question: "Bagaimana cara pembayaran yang tersedia?",
    answer: "Kami menerima berbagai metode pembayaran: Cash, Transfer Bank (BCA, Mandiri, BRI, BNI), E-wallet (GoPay, OVO, DANA, ShopeePay), dan QRIS. Pembayaran dapat dilakukan saat pengambilan atau melalui transfer.",
  },
  {
    question: "Apakah bisa cuci kiloan untuk selimut atau boneka besar?",
    answer: "Bisa! Kami melayani cuci kiloan untuk berbagai jenis barang termasuk selimut, bed cover, boneka, karpet, dan gorden. Untuk barang berukuran besar, harga dihitung berdasarkan berat dan tingkat kesulitan.",
  },
  {
    question: "Bagaimana cara melacak status laundry saya?",
    answer: "Anda dapat melacak status laundry melalui WhatsApp kami. Tim kami akan memberikan update berkala dan mengirimkan notifikasi saat laundry Anda sudah siap untuk diambil.",
  },
];

// Gallery Data
export const GALLERY = [
  {
    id: 1,
    title: "Hasil Cuci Premium",
    category: "before-after",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80",
    description: "Pakaian putih kembali bersih cemerlang",
  },
  {
    id: 2,
    title: "Laundry Facility",
    category: "facility",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&q=80",
    description: "Mesin cuci modern dan berkualitas tinggi",
  },
  {
    id: 3,
    title: "Setrika Profesional",
    category: "service",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    description: "Hasil setrika yang rapi dan profesional",
  },
  {
    id: 4,
    title: "Dry Cleaning Area",
    category: "facility",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
    description: "Area dry cleaning khusus pakaian premium",
  },
  {
    id: 5,
    title: "Packaging Premium",
    category: "service",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
    description: "Kemasan premium untuk melindungi pakaian",
  },
  {
    id: 6,
    title: "Clean & Fresh",
    category: "before-after",
    image: "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?w=800&q=80",
    description: "Hasil cuci yang bersih dan wangi",
  },
];
