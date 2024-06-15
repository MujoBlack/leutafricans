import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import { PRODUCT_CATEGORIES } from '@/config'

const parse = (param) => {
  return typeof param === 'string' ? param : undefined
}

const ProductsPage = ({ searchParams }) => {
  const sort = parse(searchParams.sort)
  const category = parse(searchParams.category)

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === category
  )?.label

  return (
    <MaxWidthWrapper>
      <ProductReel
        title={label ?? 'Browse our Authentic Products'}
        query={{
          category, // Pass the category to the query
          limit: 40,
          sort: sort === 'desc' || sort === 'asc' ? sort : undefined,
        }}
        category={category} // Ensure category prop is passed
      />
    </MaxWidthWrapper>
  )
}

export default ProductsPage
