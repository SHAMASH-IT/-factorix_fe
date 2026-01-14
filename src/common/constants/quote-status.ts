/**
 * Factorix (https://www.shamash-it.com).
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { QuoteStatus } from '$app/common/enums/quote-status';

export default {
  [QuoteStatus.Draft]: 'draft',
  [QuoteStatus.Sent]: 'sent',
  [QuoteStatus.Approved]: 'approved',
  [QuoteStatus.Converted]: 'converted',
  [QuoteStatus.Expired]: 'expired',
};
