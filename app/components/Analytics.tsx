'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-XXXXXXXXXX', {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return null
}

// Event tracking functions
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params)
  }
}

export const trackWhatsAppClick = () => {
  trackEvent('contact_whatsapp', {
    event_category: 'engagement',
    event_label: 'WhatsApp Click',
  })
}

export const trackPhoneClick = () => {
  trackEvent('contact_phone', {
    event_category: 'engagement',
    event_label: 'Phone Click',
  })
}

export const trackDirectionsClick = () => {
  trackEvent('get_directions', {
    event_category: 'engagement',
    event_label: 'Google Maps Directions',
  })
}

export const trackProductView = (productName: string) => {
  trackEvent('view_item', {
    event_category: 'product',
    event_label: productName,
    items: [{ item_name: productName }],
  })
}

export const trackLanguageChange = (language: string) => {
  trackEvent('language_change', {
    event_category: 'engagement',
    event_label: language,
  })
}
