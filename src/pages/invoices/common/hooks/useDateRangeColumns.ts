/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { DateRangeColumn } from '$app/components/DataTable';

export function useDateRangeColumns() {
  const columns: DateRangeColumn[] = [
    { column: 'date', queryParameterKey: 'date_range' },
    { column: 'due_date', queryParameterKey: 'due_date_range' },
  ];

  return columns;
}
