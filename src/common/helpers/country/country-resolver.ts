/**
 * Factorix (https://www.shamash-it.com).
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useStaticsQuery } from '$app/common/queries/statics';

export function useCountryResolver() {
  const statics = useStaticsQuery();

  const find = (id: string) => {
    if (statics) {
      return Promise.resolve(
        statics.data?.countries.find((country) => country.id === id)
      );
    }

    return Promise.resolve(undefined);
  };

  return { find };
}
