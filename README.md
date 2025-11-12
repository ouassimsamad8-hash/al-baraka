# 🥩 جزار البركة - Al Baraka Butcher Landing Page

A modern, responsive multilingual landing page for Al Baraka Butcher in Tiznit, Morocco. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- ✅ **Multilingual** - Arabic, French, English with auto-detection
- ✅ **Full RTL/LTR** support for all languages
- ✅ **SEO Optimized** - Schema.org structured data, sitemap, robots.txt
- ✅ **High Performance** - Next.js Image optimization, lazy loading
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Modern UI** - Smooth animations and hover effects
- ✅ **Google Maps** - Integrated location map
- ✅ **WhatsApp Integration** - Floating contact button
- ✅ **PWA Ready** - Manifest and service worker support

## 📍 Location

**جزار البركة (Al Baraka Butcher)**
Avenue 30, Tiznit 85000, Morocco
Phone: +212 671 474 808

## 🚀 Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.ts` (Primary red: #8B0000, Brown: #4E342E)
- **Content**: Edit `app/page.tsx` - Update the `translations` object
- **Phone Number**: Search for `+212671474808` and replace
- **Location**: Update Google Maps iframe src in `app/page.tsx`
- **SEO**: Edit metadata in `app/layout.tsx`

## 🛠 Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Cairo (Google Fonts)
- **Optimization**: Next.js Image, automatic AVIF/WebP conversion
- **SEO**: JSON-LD structured data, Open Graph

## 📊 Performance

- ⚡ **First Load JS**: ~98 KB
- 📦 **Page Size**: ~11 KB
- 🚀 **Static Generation**: All pages pre-rendered
- 🖼️ **Images**: Optimized with Next.js Image

## 🌍 Supported Languages

- 🇸🇦 العربية (Arabic) - Default
- 🇫🇷 Français (French)
- 🇬🇧 English

## 📱 Sections

1. Hero - Full-screen banner with language switcher
2. About - Business story and statistics
3. Products - Beef, lamb, chicken with images
4. Testimonials - Customer reviews
5. Contact - Phone, location, WhatsApp
6. Map - Google Maps integration
7. Footer - Copyright notice

## 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
# Via Vercel CLI
npm i -g vercel
vercel
```

## 📄 License

© 2025 جزار البركة - All rights reserved
