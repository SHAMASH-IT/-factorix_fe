/**
 * Factorix (https://www.shamash-it.com).
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { PaymentStatus } from '$app/common/enums/payment-status';

export default {
  [PaymentStatus.PartiallyUnapplied]: 'partially_unapplied',
  [PaymentStatus.Unapplied]: 'unapplied',
  [PaymentStatus.Pending]: 'pending',
  [PaymentStatus.Cancelled]: 'cancelled',
  [PaymentStatus.Failed]: 'failed',
  [PaymentStatus.Completed]: 'completed',
  [PaymentStatus.PartiallyRefunded]: 'partially_refunded',
  [PaymentStatus.Refunded]: 'refunded',
};
