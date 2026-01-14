/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useCurrentCompany } from './useCurrentCompany';

export function useCompanyTimeFormat() {
  const company = useCurrentCompany();

  let timeFormatId = 12;
  let timeFormat = 'hh:mm:ss A';

  if (company && company.settings.military_time) {
    timeFormatId = 24;
    timeFormat = 'HH:mm:ss';
  }

  return { timeFormatId, timeFormat };
}
