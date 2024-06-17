import { getPayloadClient } from '@/get-payload';

export async function fetchProductData(productId: string) {
  const payload = await getPayloadClient();
  const { docs: products } = await payload.find({
    collection: 'products',
    limit: 1,
    where: {
      id: {
        equals: productId,
      },
      approvedForSale: {
        equals: 'approved',
      },
    },
  });

  return products[0] || null;
}
