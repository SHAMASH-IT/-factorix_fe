/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { euCountries } from '../constants/eu-countries';
import { useCountries } from './useCountries';

export function useResolveEu() {
  const countries = useCountries();

  return (id: number | string) => {
    const country = countries.find((country) => country.id === id);

    return country && euCountries[country.iso_3166_2] ? true : false;
  };
}
