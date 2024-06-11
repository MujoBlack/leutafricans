import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import {
  ArrowDownToLine,
  CheckCircle,
  Leaf,
} from 'lucide-react'
import Link from 'next/link'

const perks = [
  {
    name: 'Fast Shipping',
    Icon: ArrowDownToLine,
    description:
      'Get your unique African handmade products delivered to your doorstep quickly and efficiently.',
  },
  {
    name: 'Assured Excellence',
    Icon: CheckCircle,
    description:
      'Each product is carefully verified to meet our highest quality standards. Not satisfied? We offer a 30-day refund guarantee for your peace of mind.',
  },
  {
    name: 'Supporting Sustainability',
    Icon: Leaf,
    description:
      "We commit 1% of sales to the preservation and restoration of the natural environment.",
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          African Handmade {' '}
            <span className='text-orange-500'>
            Bags, Dresses, and Crafts
            </span>
            .
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          Welcome to our collection of Authentic African Handmade products. 
          Sustainably crafted using eco-friendly materials. Unique and stylish. 
          Embrace environmental responsibility.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            
            <Link
              href='/products'
              className={buttonVariants()}>
              Browse Trending
            </Link>

            <Button variant='ghost'>
              Our quality promise &rarr;
            </Button>

          </div>
        </div>


      <ProductReel category='new'
          query={{limit: 4}}
          href='/products?category=new'
          title='Summer Bags'
          subtitle={`Beautiful in its simplicity`}
        />

        <ProductReel category='summerbags'
          query={{limit: 4}}
          href='/products?category=summerbags'
          title='Summer Bags'
          subtitle={`Beautiful in its simplicity`}
        />




      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </MaxWidthWrapper>

      </section>


   </>
  )
}