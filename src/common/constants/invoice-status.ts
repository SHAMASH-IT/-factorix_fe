/**
 * Factorix (https://www.shamash-it.com).
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { InvoiceStatus } from '$app/common/enums/invoice-status';

export default {
  [InvoiceStatus.Cancelled]: 'cancelled',
  [InvoiceStatus.Unpaid]: 'unpaid',
  [InvoiceStatus.PastDue]: 'past_due',
  [InvoiceStatus.Draft]: 'draft',
  [InvoiceStatus.Sent]: 'sent',
  [InvoiceStatus.Partial]: 'partial',
  [InvoiceStatus.Paid]: 'paid',
  [InvoiceStatus.Reversed]: 'reversed',
};
