/**
 * Factorix (https://www.shamash-it.com).
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { RecurringInvoiceStatus } from '$app/common/enums/recurring-invoice-status';

export default {
  [RecurringInvoiceStatus.ACTIVE]: 'active',
  [RecurringInvoiceStatus.COMPLETED]: 'completed',
  [RecurringInvoiceStatus.DRAFT]: 'draft',
  [RecurringInvoiceStatus.PAUSED]: 'paused',
  [RecurringInvoiceStatus.PENDING]: 'pending',
};
