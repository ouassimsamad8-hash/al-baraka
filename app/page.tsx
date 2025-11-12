'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { trackWhatsAppClick, trackPhoneClick, trackDirectionsClick, trackLanguageChange, trackProductView } from './components/Analytics'

type Language = 'ar' | 'fr' | 'en'

const translations = {
  ar: {
    name: 'جزار البركة',
    slogan: 'الطراوة والجودة من المصدر',
    cta: 'اتصل بنا',
    about: {
      title: 'من نحن',
      text1: 'نحن في',
      text2: 'نفخر بتقديم أفضل أنواع اللحوم الطازجة لعملائنا الكرام.',
      text3: 'نلتزم بأعلى معايير الجودة والنظافة، ونحرص على اختيار اللحوم من أفضل المصادر المحلية الموثوقة.',
      text4: 'خبرتنا الطويلة في مجال الجزارة تجعلنا الخيار الأمثل لكل من يبحث عن الطراوة والجودة والسعر المناسب.',
      years: 'سنة خبرة',
      customers: 'عميل راضٍ',
      fresh: 'طازج يوميًا'
    },
    products: {
      title: 'منتجاتنا',
      subtitle: 'نقدم أفضل أنواع اللحوم الطازجة',
      beef: { name: 'لحم بقري', desc: 'لحم بقري طازج من أفضل المصادر' },
      lamb: { name: 'لحم غنم', desc: 'لحم غنم محلي طازج وعالي الجودة' },
      chicken: { name: 'دجاج طازج', desc: 'دجاج طازج يوميًا من مزارع موثوقة' },
      orderNow: 'اطلب الآن'
    },
    testimonials: {
      title: 'آراء عملائنا',
      subtitle: 'ماذا يقول عملاؤنا عنا',
      reviews: [
        { name: 'أحمد محمد', text: 'أفضل جزارة في المنطقة! اللحم دائمًا طازج والخدمة ممتازة' },
        { name: 'فاطمة علي', text: 'جودة عالية وأسعار مناسبة. أنصح الجميع بالتعامل معهم' },
        { name: 'خالد حسن', text: 'تعامل راقي واحترافية في العمل. اللحم طازج ونظيف' }
      ]
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نحن في خدمتكم دائمًا',
      phone: 'اتصل بنا',
      location: 'موقعنا',
      address1: 'جزار البركة',
      address2: 'Avenue 30، تيزنيت 85000',
      address3: 'المملكة المغربية',
      whatsapp: 'تواصل عبر واتساب'
    },
    map: {
      title: 'موقعنا على الخريطة',
      subtitle: 'تفضل بزيارتنا في أي وقت',
      directions: 'احصل على الاتجاهات'
    },
    footer: '© 2025 جزار البركة - جميع الحقوق محفوظة'
  },
  fr: {
    name: 'Boucherie Al Baraka',
    slogan: 'Fraîcheur et qualité de la source',
    cta: 'Contactez-nous',
    about: {
      title: 'Qui sommes-nous',
      text1: 'Chez',
      text2: 'nous sommes fiers d\'offrir les meilleures viandes fraîches à nos précieux clients.',
      text3: 'Nous respectons les plus hauts standards de qualité et d\'hygiène, et nous veillons à sélectionner les viandes des meilleures sources locales de confiance.',
      text4: 'Notre longue expérience dans le domaine de la boucherie fait de nous le choix idéal pour tous ceux qui recherchent la fraîcheur, la qualité et le bon prix.',
      years: 'ans d\'expérience',
      customers: 'clients satisfaits',
      fresh: 'frais quotidien'
    },
    products: {
      title: 'Nos produits',
      subtitle: 'Nous offrons les meilleures viandes fraîches',
      beef: { name: 'Bœuf', desc: 'Bœuf frais des meilleures sources' },
      lamb: { name: 'Agneau', desc: 'Agneau local frais et de haute qualité' },
      chicken: { name: 'Poulet frais', desc: 'Poulet frais quotidien de fermes fiables' },
      orderNow: 'Commander maintenant'
    },
    testimonials: {
      title: 'Avis de nos clients',
      subtitle: 'Ce que nos clients disent de nous',
      reviews: [
        { name: 'Ahmed Mohammed', text: 'Meilleure boucherie de la région! La viande est toujours fraîche et le service excellent' },
        { name: 'Fatima Ali', text: 'Haute qualité et prix raisonnables. Je recommande à tout le monde de traiter avec eux' },
        { name: 'Khaled Hassan', text: 'Service élégant et professionnalisme au travail. La viande est fraîche et propre' }
      ]
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Nous sommes toujours à votre service',
      phone: 'Appelez-nous',
      location: 'Notre emplacement',
      address1: 'Boucherie Al Baraka',
      address2: 'Avenue 30، Tiznit 85000',
      address3: 'Royaume du Maroc',
      whatsapp: 'Contactez via WhatsApp'
    },
    map: {
      title: 'Notre emplacement sur la carte',
      subtitle: 'Visitez-nous à tout moment',
      directions: 'Obtenir l\'itinéraire'
    },
    footer: '© 2025 Boucherie Al Baraka - Tous droits réservés'
  },
  en: {
    name: 'Al Baraka Butcher',
    slogan: 'Freshness and quality from the source',
    cta: 'Contact us',
    about: {
      title: 'About us',
      text1: 'At',
      text2: 'we pride ourselves on offering the best fresh meats to our valued customers.',
      text3: 'We adhere to the highest standards of quality and hygiene, and we ensure to select meats from the best trusted local sources.',
      text4: 'Our long experience in the butchery field makes us the ideal choice for anyone looking for freshness, quality and the right price.',
      years: 'years of experience',
      customers: 'satisfied customers',
      fresh: 'fresh daily'
    },
    products: {
      title: 'Our products',
      subtitle: 'We offer the best fresh meats',
      beef: { name: 'Beef', desc: 'Fresh beef from the best sources' },
      lamb: { name: 'Lamb', desc: 'Fresh local lamb of high quality' },
      chicken: { name: 'Fresh chicken', desc: 'Daily fresh chicken from reliable farms' },
      orderNow: 'Order now'
    },
    testimonials: {
      title: 'Customer reviews',
      subtitle: 'What our customers say about us',
      reviews: [
        { name: 'Ahmed Mohammed', text: 'Best butcher shop in the area! The meat is always fresh and the service is excellent' },
        { name: 'Fatima Ali', text: 'High quality and reasonable prices. I recommend everyone to deal with them' },
        { name: 'Khaled Hassan', text: 'Elegant service and professionalism at work. The meat is fresh and clean' }
      ]
    },
    contact: {
      title: 'Contact us',
      subtitle: 'We are always at your service',
      phone: 'Call us',
      location: 'Our location',
      address1: 'Al Baraka Butcher',
      address2: 'Avenue 30, Tiznit 85000',
      address3: 'Kingdom of Morocco',
      whatsapp: 'Contact via WhatsApp'
    },
    map: {
      title: 'Our location on the map',
      subtitle: 'Visit us anytime',
      directions: 'Get directions'
    },
    footer: '© 2025 Al Baraka Butcher - All rights reserved'
  }
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [language, setLanguage] = useState<Language>('ar')

  useEffect(() => {
    setIsVisible(true)
    // Check browser language preference
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('fr')) {
      setLanguage('fr')
    } else if (browserLang.startsWith('en')) {
      setLanguage('en')
    }
  }, [])

  const t = translations[language]
  const dir = language === 'ar' ? 'rtl' : 'ltr'
  const textAlign = language === 'ar' ? 'text-right' : 'text-left'

  const products = [
    {
      name: t.products.beef.name,
      description: t.products.beef.desc,
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=400&fit=crop',
    },
    {
      name: t.products.lamb.name,
      description: t.products.lamb.desc,
      image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=500&h=400&fit=crop',
    },
    {
      name: t.products.chicken.name,
      description: t.products.chicken.desc,
      image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=500&h=400&fit=crop',
    },
  ]

  return (
    <main className="min-h-screen bg-white" dir={dir}>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(139, 0, 0, 0.7), rgba(78, 52, 46, 0.8)), url(https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1920&h=1080&fit=crop)',
        }}
      >
        {/* Language Switcher */}
        <div className="absolute top-8 right-8 flex gap-2 z-10">
          <button
            onClick={() => {
              setLanguage('ar')
              trackLanguageChange('ar')
            }}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${
              language === 'ar' ? 'bg-white text-primary-red' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
            aria-label="Switch to Arabic"
          >
            العربية
          </button>
          <button
            onClick={() => {
              setLanguage('fr')
              trackLanguageChange('fr')
            }}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${
              language === 'fr' ? 'bg-white text-primary-red' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
            aria-label="Switch to French"
          >
            Français
          </button>
          <button
            onClick={() => {
              setLanguage('en')
              trackLanguageChange('en')
            }}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${
              language === 'en' ? 'bg-white text-primary-red' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
            aria-label="Switch to English"
          >
            English
          </button>
        </div>

        <div className={`text-center text-white px-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">{t.name}</h1>
          <p className="text-2xl md:text-4xl mb-8 font-semibold">{t.slogan}</p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary-red px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            {t.cta}
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-primary-red mb-4">{t.about.title}</h2>
            <div className="w-24 h-1 bg-primary-red mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=600&h=500&fit=crop"
                alt={t.name}
                fill
                className="rounded-lg shadow-2xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className={`${textAlign} space-y-6`}>
              <p className="text-xl leading-relaxed text-gray-700">
                {t.about.text1} <span className="font-bold text-primary-red">{t.name}</span> {t.about.text2}
              </p>
              <p className="text-xl leading-relaxed text-gray-700">
                {t.about.text3}
              </p>
              <p className="text-xl leading-relaxed text-gray-700">
                {t.about.text4}
              </p>
              <div className="flex gap-8 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-red">15+</div>
                  <div className="text-gray-600">{t.about.years}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-red">1000+</div>
                  <div className="text-gray-600">{t.about.customers}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-red">100%</div>
                  <div className="text-gray-600">{t.about.fresh}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary-red mb-4">{t.products.title}</h2>
            <div className="w-24 h-1 bg-primary-red mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">{t.products.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="product-card bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className={`p-6 ${textAlign}`}>
                  <h3 className="text-2xl font-bold text-primary-red mb-3">{product.name}</h3>
                  <p className="text-gray-600 text-lg">{product.description}</p>
                  <button 
                    onClick={() => {
                      trackProductView(product.name)
                      trackWhatsAppClick()
                      window.open('https://wa.me/212671474808?text=' + encodeURIComponent(`مرحبا، أود طلب ${product.name}`), '_blank')
                    }}
                    className="mt-4 w-full bg-primary-red text-white py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors"
                    aria-label={`Order ${product.name}`}
                  >
                    {t.products.orderNow}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary-red mb-4">{t.testimonials.title}</h2>
            <div className="w-24 h-1 bg-primary-red mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">{t.testimonials.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.reviews.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg ${language === 'ar' ? 'border-r-4' : 'border-l-4'} border-primary-red hover:shadow-2xl transition-shadow`}
              >
                <div className="text-primary-red text-5xl mb-4">"</div>
                <p className={`text-gray-700 text-lg mb-6 ${textAlign} leading-relaxed`}>
                  {testimonial.text}
                </p>
                <div className={`flex items-center ${language === 'ar' ? 'justify-end' : 'justify-start'} gap-3`}>
                  <div className={textAlign}>
                    <p className="font-bold text-primary-brown">{testimonial.name}</p>
                    <div className={`flex gap-1 ${language === 'ar' ? 'justify-end' : 'justify-start'} mt-1`}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className={`w-12 h-12 bg-primary-red rounded-full flex items-center justify-center text-white font-bold text-xl ${language === 'ar' ? 'order-first' : 'order-last'}`}>
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-red text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-5xl font-bold mb-4">{t.contact.title}</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-2xl mb-12">{t.contact.subtitle}</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">{t.contact.phone}</h3>
              <a 
                href="tel:+212671474808"
                onClick={trackPhoneClick}
                className="text-3xl font-bold hover:text-green-300 transition-colors"
                dir="ltr"
                aria-label="Call +212 671 474 808"
              >
                +212 671 474 808
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">{t.contact.location}</h3>
              <p className="text-xl">{t.contact.address1}</p>
              <p className="text-xl">{t.contact.address2}</p>
              <p className="text-xl">{t.contact.address3}</p>
            </div>
          </div>

          <a
            href="https://wa.me/212671474808"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-2xl font-bold transition-all transform hover:scale-105 shadow-2xl"
            aria-label="Contact us on WhatsApp"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            {t.contact.whatsapp}
          </a>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-primary-red mb-4">{t.map.title}</h2>
            <div className="w-24 h-1 bg-primary-red mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">{t.map.subtitle}</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-red/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d862.0470730518204!2d-9.737449471046607!3d29.688282931467777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6156c6a22f5b044d!2zMjnCsDQxJzE3LjgiTiA5wrA0NCcxMy4zIlc!5e0!3m2!1sen!2sma!4v1699999999999!5m2!1sen!2sma&cid=7010458305189411789"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="جزار البركة - Al Baraka Butcher Location"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://maps.app.goo.gl/ez4zW3woomDkHtB96"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackDirectionsClick}
              className="inline-flex items-center gap-3 bg-primary-red hover:bg-red-900 text-white px-8 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-lg"
              aria-label="Get directions to Al Baraka Butcher"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {t.map.directions}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-brown text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl">{t.footer}</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/212671474808"
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsAppClick}
        className="fixed bottom-8 left-8 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50 animate-bounce"
        title="تواصل معنا عبر واتساب"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </main>
  )
}
