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

export function useCompanyVerifactu() {
  const company = useCurrentCompany();

  return Boolean(company?.settings.e_invoice_type === 'VERIFACTU');
}
