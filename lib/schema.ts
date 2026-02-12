import { BUSINESS_CONFIG } from "./constants";

export function generateBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://laundrymodern.com",
    name: BUSINESS_CONFIG.businessName,
    image: "https://laundrymodern.com/og-image.jpg",
    description: "Layanan laundry profesional dengan teknologi modern. Cuci kering, setrika, express 3 jam, dan antar-jemput gratis.",
    url: "https://laundrymodern.com",
    telephone: BUSINESS_CONFIG.businessPhone,
    email: BUSINESS_CONFIG.businessEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_CONFIG.businessAddress,
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      postalCode: "12345",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2088,
      longitude: 106.8456,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "20:00",
    },
    priceRange: "Rp 15.000 - Rp 300.000",
    acceptsReservations: true,
    servesCuisine: null,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [BUSINESS_CONFIG.instagram, BUSINESS_CONFIG.facebook, BUSINESS_CONFIG.tiktok].filter(Boolean),
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Laundry Service",
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_CONFIG.businessName,
    },
    areaServed: {
      "@type": "City",
      name: "Jakarta",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Laundry Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cuci Kering",
            description: "Layanan cuci lengkap dengan mesin otomatis dan deterjen premium",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cuci Setrika",
            description: "Paket lengkap cuci dan setrika dengan hasil sempurna",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Express 3 Jam",
            description: "Jaminan selesai dalam 3 jam untuk kebutuhan mendesak",
          },
        },
      ],
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
