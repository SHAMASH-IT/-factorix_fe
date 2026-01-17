/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { request } from '$app/common/helpers/request';
import { endpoint } from '$app/common/helpers';
import { route } from '$app/common/helpers/route';

export function useHandleGoCardless() {
      const endpointApi = import.meta.env.VITE_API_URL;

  return () =>
    request('POST', endpoint('/api/v1/one_time_token'), {
      context: 'gocardless_oauth2',
    }).then((response) =>
      window
        .open(
          route(`${endpointApi}/gocardless/oauth/connect/:token`, {
            token: response.data.hash,
          }),
          '_blank'
        )
        ?.focus()
    );
}
