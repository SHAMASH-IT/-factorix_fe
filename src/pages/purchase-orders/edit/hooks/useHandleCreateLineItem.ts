/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { PurchaseOrder } from '$app/common/interfaces/purchase-order';
import { blankLineItem } from '$app/common/constants/blank-line-item';
import { cloneDeep } from 'lodash';

export function useHandleCreateLineItem(
  setPurchaseOrder: (purchaseOrder: PurchaseOrder) => unknown
) {
  return async (purchaseOrder: PurchaseOrder) => {
    const po = cloneDeep(purchaseOrder) as PurchaseOrder;

    po.line_items.push({ ...blankLineItem(), quantity: 1 });

    setPurchaseOrder(po);
  };
}
