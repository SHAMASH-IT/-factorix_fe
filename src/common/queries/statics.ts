/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { endpoint } from '$app/common/helpers';
import { request } from '$app/common/helpers/request';
import { Statics } from '$app/common/interfaces/statics';
import { useQuery } from 'react-query';

export function useStaticsQuery() {
  return useQuery<Statics>(
    ['/api/v1/statics'],
    () =>
      request('GET', endpoint('/api/v1/statics')).then(
        (response) => response.data
      ),
    {
      enabled: Boolean(localStorage.getItem('X-NINJA-TOKEN')),
      staleTime: Infinity,
    }
  );
}
