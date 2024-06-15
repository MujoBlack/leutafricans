'use client'

import { TQueryValidator } from '@/lib/validators/query-validator'
import { Product } from '@/payload-types'
import { trpc } from '@/trpc/client'
import Link from 'next/link'
import ProductListing from './ProductListing'
import { useEffect, useState } from 'react'
import { Skeleton } from './ui/skeleton'

interface ProductReelProps {
  title: string
  subtitle?: string
  href?: string
  query: TQueryValidator
  category: string // Added category prop
}

const FALLBACK_LIMIT = 4

const ProductReel = (props: ProductReelProps) => {
  const { title, subtitle, href, query, category } = props // Destructure category prop

  const [isTitleVisible, setIsTitleVisible] = useState<boolean>(false)
  const [isSubtitleVisible, setIsSubtitleVisible] = useState<boolean>(false)
  const [isLinkVisible, setIsLinkVisible] = useState<boolean>(false)

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setIsTitleVisible(true)
    }, 75)

    const subtitleTimer = setTimeout(() => {
      setIsSubtitleVisible(true)
    }, 150)

    const linkTimer = setTimeout(() => {
      setIsLinkVisible(true)
    }, 225)

    return () => {
      clearTimeout(titleTimer)
      clearTimeout(subtitleTimer)
      clearTimeout(linkTimer)
    }
  }, [])

  // Modify the query to include the category
  const { data: queryResults, isLoading } = trpc.getInfiniteProducts.useInfiniteQuery(
    {
      limit: query.limit ?? FALLBACK_LIMIT,
      query: { ...query, category }, // Include category in the query
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  )

  const products = queryResults?.pages.flatMap(
    (page) => page.items
  )

  let map: (Product | null)[] = []
  if (products && products.length) {
    map = products
  } else if (isLoading) {
    map = new Array<null>(
      query.limit ?? FALLBACK_LIMIT
    ).fill(null)
  }

  return (
    <section className='py-8'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
        <div className='max-w-2xl lg:max-w-4xl lg:px-0'>
          {isTitleVisible ? (
            <h1 className='text-2xl font-bold text-yellow-600 sm:text-3xl'>
              {title}
            </h1>
          ) : (
            <Skeleton className='h-8 w-48 rounded-lg' />
          )}
          {subtitle && (isSubtitleVisible ? (
            <p className='text-base font-normal text-black mt-2'>
              {subtitle}
            </p>
          ) : (
            <Skeleton className='mt-2 h-4 w-64 rounded-lg' />
          ))}
        </div>

        {href ? (
          isLinkVisible ? (
            <Link
              href={href}
              className='hidden md:block text-base font-medium text-yellow-700 hover:text-yellow-800'>
              Shop the collection{' '}
              <span aria-hidden='true'>&rarr;</span>
            </Link>
          ) : (
            <Skeleton className='hidden md:block h-6 w-40 rounded-lg' />
          )
        ) : null}
      </div>

      <div className='relative'>
        <div className='mt-6 flex items-center w-full'>
          <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
            {map.map((product, i) => (
              <ProductListing
                key={`product-${i}`}
                product={product}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductReel
