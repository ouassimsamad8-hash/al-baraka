import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const cairo = Cairo({ 
  subsets: ['arabic'],
  variable: '--font-cairo',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://albarakabutcher.com'),
  title: {
    default: 'جزار البركة | Al Baraka Butcher - Fresh Halal Meat Tiznit Morocco',
    template: '%s | Al Baraka Butcher',
  },
  description: '🥩 جزار البركة - أفضل جودة للحوم الحلال الطازجة في تيزنيت، المغرب ⭐ Boucherie Al Baraka - Viandes halal fraîches à Tiznit 📞 +212 671 474 808',
  keywords: [
    'جزار البركة',
    'جزار تيزنيت',
    'لحم حلال',
    'لحم طازج',
    'لحم بقري',
    'لحم غنم',
    'دجاج طازج',
    'المغرب',
    'تيزنيت',
    'boucherie tiznit',
    'boucherie al baraka',
    'viande halal tiznit',
    'viande fraîche',
    'boeuf',
    'agneau',
    'poulet',
    'maroc',
    'butcher tiznit',
    'halal meat morocco',
    'fresh meat tiznit',
    'al baraka butcher',
    'beef',
    'lamb',
    'chicken',
    'halal',
    'حلال',
  ],
  authors: [{ name: 'Al Baraka Butcher', url: 'https://albarakabutcher.com' }],
  creator: 'Al Baraka Butcher',
  publisher: 'Al Baraka Butcher',
  category: 'Food & Beverage',
  
  openGraph: {
    title: '🥩 جزار البركة | Al Baraka Butcher - Premium Halal Meat Tiznit',
    description: '⭐ أفضل جودة للحوم الحلال الطازجة | Viandes halal fraîches de qualité | Fresh quality halal meats in Tiznit, Morocco 📞 +212 671 474 808',
    type: 'website',
    locale: 'ar_MA',
    alternateLocale: ['fr_MA', 'en_US'],
    siteName: 'Al Baraka Butcher',
    url: 'https://albarakabutcher.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=1200&h=630&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Al Baraka Butcher - Fresh Halal Meat Shop in Tiznit Morocco',
        type: 'image/jpeg',
      },
      {
        url: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1200&h=630&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Fresh Beef at Al Baraka Butcher',
        type: 'image/jpeg',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '🥩 جزار البركة | Al Baraka Butcher Tiznit',
    description: '⭐ Fresh Halal Meat | لحوم حلال طازجة | Viandes halal fraîches 📞 +212 671 474 808',
    images: ['https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=1200&h=630&fit=crop&q=80'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://albarakabutcher.com',
    languages: {
      'ar-MA': 'https://albarakabutcher.com',
      'fr-MA': 'https://albarakabutcher.com',
      'en-US': 'https://albarakabutcher.com',
    },
  },
  
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLdBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ButcherShop',
    '@id': 'https://albarakabutcher.com/#business',
    name: 'Al Baraka Butcher | جزار البركة | Boucherie Al Baraka',
    alternateName: ['جزار البركة', 'Boucherie Al Baraka', 'Al Baraka Butcher'],
    description: 'Fresh quality meats in Tiznit, Morocco. أفضل جودة للحوم الطازجة في تيزنيت، المغرب. Viandes fraîches de qualité à Tiznit, Maroc.',
    image: [
      'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1200&h=630&fit=crop',
      'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=1200&h=630&fit=crop'
    ],
    logo: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=512&h=512&fit=crop',
    url: 'https://albarakabutcher.com',
    telephone: '+212671474808',
    email: 'contact@albarakabutcher.com',
    priceRange: '$$',
    currenciesAccepted: 'MAD',
    paymentAccepted: 'Cash, Credit Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenue 30',
      addressLocality: 'Tiznit',
      addressRegion: 'Souss-Massa',
      postalCode: '85000',
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.688283,
      longitude: -9.73702,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '1247',
    },
    servesCuisine: 'Halal',
    menu: 'https://albarakabutcher.com/#products',
    hasMap: 'https://maps.app.goo.gl/ez4zW3woomDkHtB96',
    areaServed: {
      '@type': 'City',
      name: 'Tiznit',
    },
    knowsAbout: ['Beef', 'Lamb', 'Chicken', 'Halal Meat', 'Fresh Meat', 'Quality Meat'],
    sameAs: [
      'https://www.facebook.com/albarakabutcher',
      'https://www.instagram.com/albarakabutcher',
      'https://wa.me/212671474808',
    ],
  }

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://albarakabutcher.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://albarakabutcher.com/#about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Products',
        item: 'https://albarakabutcher.com/#products',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://albarakabutcher.com/#contact',
      },
    ],
  }

  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Al Baraka Butcher located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Al Baraka Butcher is located at Avenue 30, Tiznit 85000, Morocco. جزار البركة يقع في Avenue 30، تيزنيت 85000، المغرب.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the opening hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are open Monday to Saturday from 8:00 AM to 8:00 PM, and Sunday from 9:00 AM to 1:00 PM.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you serve halal meat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all our meat is 100% halal and sourced from trusted local suppliers.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Al Baraka Butcher?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can call us at +212 671 474 808 or contact us via WhatsApp at the same number.',
        },
      },
    ],
  }

  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="canonical" href="https://albarakabutcher.com" />
        
        {/* DNS Prefetch & Preconnect for faster loading */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="MA-TNT" />
        <meta name="geo.placename" content="Tiznit" />
        <meta name="geo.position" content="29.688283;-9.73702" />
        <meta name="ICBM" content="29.688283, -9.73702" />
        
        {/* Mobile Optimization */}
        <meta name="theme-color" content="#8B0000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Al Baraka" />
        
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1920&h=1080&fit=crop" />
      </head>
      <body className={cairo.className}>
        {/* Google Analytics 4 - Replace G-XXXXXXXXXX with your actual GA4 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Schema.org Structured Data */}
        <Script
          id="schema-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
          strategy="beforeInteractive"
        />
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
          strategy="beforeInteractive"
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
          strategy="beforeInteractive"
        />
        
        {children}
      </body>
    </html>
  )
}
