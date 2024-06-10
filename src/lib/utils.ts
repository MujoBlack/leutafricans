import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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


