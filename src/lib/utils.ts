import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: 'USD' | 'EUR' | 'GBP' | 'BDT' | 'CHF',
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'CHF', notation = 'compact' } = options;

  const numericPrice =
    typeof price === 'string' ? parseFloat(price) : price;

  // Determine the locale based on the currency
  const locale = currency === 'CHF' ? 'de-CH' : 'en-US';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}

export function constructMetadata({
  title = 'LeutAfrican - the marketplace for African Handmade Products',
  description = 'Authentic African Handmade products. Embrace environmental responsibility.',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@joshtriedcoding',
    },
    icons,
    /*metadataBase: new URL('https://digitalhippo.up.railway.app'),*/
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
