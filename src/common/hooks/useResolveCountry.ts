/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useCountries } from './useCountries';

export function useResolveCountry() {
  const countries = useCountries();

  return (id: number | string) => {
    return countries.find((country) => country.id == id);
  };
}
