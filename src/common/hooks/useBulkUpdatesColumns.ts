/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useEffect, useState } from 'react';
import { useStaticsQuery } from '../queries/statics';

export function useBulkUpdatesColumns() {
  const { data: statics } = useStaticsQuery();

  const [bulkUpdates, setBulkUpdates] = useState<Record<string, string[]>>();

  useEffect(() => {
    if (statics?.bulk_updates) {
      setBulkUpdates(statics.bulk_updates);
    }
  }, [statics]);

  return bulkUpdates;
}
