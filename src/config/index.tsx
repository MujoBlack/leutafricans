export const PRODUCT_CATEGORIES = [
  {
    label: 'New',
    value: 'new' as const,
    showInNavbar: true,
    featured: [
      {
        name: 'Editor picks',
        href: `/products?category=new`,
        imageSrc: '/nav/new/editor-picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=new&sort=desc',
        imageSrc: '/nav/new/new-arrivals.webp',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=new',
        imageSrc: '/nav/new/bestsellers.jpg',
      },
    ],
  },
  {
    label: 'Bags',
    value: 'bags' as const,
    showInNavbar: true,
    featured: [
      {
        name: 'Summer Bags',
        href: `/products?category=Summer Bags`,
        imageSrc: '/nav/bags/summer-bags.webp',
      },
      {
        name: 'Handwoven',
        href: '/products?category=bags&sort=desc',
        imageSrc: '/nav/bags/hand-woven.webp',
      },
      {
        name: 'Straw',
        href: '/products?category=bags',
        imageSrc: '/nav/bags/round-straw-bag-leather-handle.jpg',
      },
    ],
  },

  {
      label: 'Dresses',
      value: 'dresses' as const,
      showInNavbar: true,
      featured: [
        {
          name: 'Maxi',
          href: `/products?category=dresses`,
          imageSrc: '/nav/dresses/max-dress.webp',
        },
        {
          name: 'Evening dresses',
          href: '/products?category=dresses&sort=desc',
          imageSrc: '/nav/dresses/evening-dresses.webp',
        },
        {
          name: 'Flower Power',
          href: '/products?category=dresses',
          imageSrc: '/nav/dresses/floral-dress.webp',
        },
      ],
    },

    {
      label: 'Accessories',
      value: 'accessories' as const,
      showInNavbar: true,
      featured: [
        {
          name: 'Hats & hats',
          href: `/products?category=accessories`,
          imageSrc: '/nav/accessories/straw-hat.webp',
        },
        {
          name: 'Jewelry',
          href: '/products?category=accessories&sort=desc',
          imageSrc: '/nav/accessories/jewelry.webp',
        },
        {
          name: 'Watches',
          href: '/products?category=accessories',
          imageSrc: '/nav/accessories/african-watch.webp',
        },
      ],
    },
    
   {
    label: 'Summer Bags',
    value: 'summerbags' as const,
    showInNavbar: false, // This category will not appear in the navbar
    featured: [
      {
        name: 'Raffia',
        href: `/products?category=Summer Bags`,
      },
    ],
  },
    
]





