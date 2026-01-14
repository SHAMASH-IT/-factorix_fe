/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { CompanyGateway } from '$app/common/interfaces/company-gateway';

export function useResolveConfigValue(companyGateway: CompanyGateway) {
  const config = JSON.parse(companyGateway.config);

  return (field: string) => {
    return config[field] || '';
  };
}
