/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { PurchaseOrderStatus } from '$app/common/enums/purchase-order-status';

export default {
  [PurchaseOrderStatus.Accepted]: 'accepted',
  [PurchaseOrderStatus.Cancelled]: 'canclled',
  [PurchaseOrderStatus.Draft]: 'draft',
  [PurchaseOrderStatus.Received]: 'received',
  [PurchaseOrderStatus.Sent]: 'sent',
};
