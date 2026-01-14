/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useProductsQuery } from '../queries/products';

interface Params {
  resolveByProductKey: boolean;
}

export function useResolveProduct(params?: Params) {
  const { data: products } = useProductsQuery();

  const { resolveByProductKey } = params || {};

  if (resolveByProductKey) {
    return (productKey: string) =>
      products?.find(({ product_key }) => product_key === productKey);
  }

  return (productId: string) => products?.find(({ id }) => productId === id);
}
