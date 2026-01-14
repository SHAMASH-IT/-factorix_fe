/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { RecurringExpenseStatus } from '$app/common/enums/recurring-expense-status';

export default {
  [RecurringExpenseStatus.Active]: 'active',
  [RecurringExpenseStatus.Draft]: 'draft',
  [RecurringExpenseStatus.Paused]: 'paused',
  [RecurringExpenseStatus.Pending]: 'pending',
  [RecurringExpenseStatus.Completed]: 'completed',
};
