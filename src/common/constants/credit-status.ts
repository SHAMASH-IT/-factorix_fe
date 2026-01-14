/**
 * Factorix (https://www.shamash-it.com).
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { CreditStatus } from '$app/common/enums/credit-status';

export default {
  [CreditStatus.Draft]: 'draft',
  [CreditStatus.Sent]: 'sent',
  [CreditStatus.Partial]: 'partial',
  [CreditStatus.Applied]: 'applied',
};
